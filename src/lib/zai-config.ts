import fs from 'fs/promises';
import path from 'path';
import os from 'os';

/**
 * ZAI Configuration Interface
 */
export interface ZAIConfig {
  baseUrl: string;
  apiKey: string;
  chatId?: string;
  userId?: string;
}

/**
 * Configuration validation result
 */
export interface ConfigValidationResult {
  valid: boolean;
  config?: ZAIConfig;
  configPath?: string;
  error?: string;
  warnings: string[];
}

/**
 * Configuration file location
 */
export interface ConfigLocation {
  path: string;
  exists: boolean;
  description: string;
}

/**
 * ZAI Configuration Validator
 *
 * Provides utilities to validate .z-ai-config files and provide clear setup guidance.
 */
export class ZAIConfigValidator {
  /**
   * Get all possible configuration file locations in priority order
   */
  static getConfigLocations(): ConfigLocation[] {
    const cwd = process.cwd();
    const home = os.homedir();

    return [
      {
        path: path.join(cwd, '.z-ai-config'),
        exists: false,
        description: `Project root (${cwd})`
      },
      {
        path: path.join(home, '.z-ai-config'),
        exists: false,
        description: `Home directory (${home})`
      },
      {
        path: '/etc/.z-ai-config',
        exists: false,
        description: 'System-wide (/etc)'
      }
    ];
  }

  /**
   * Check if a file exists
   */
  private static async fileExists(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Read and parse a configuration file
   */
  private static async readConfigFile(filePath: string): Promise<ZAIConfig | null> {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const config = JSON.parse(content);
      return config;
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new Error(`Invalid JSON in ${path.basename(filePath)}`);
      }
      throw error;
    }
  }

  /**
   * Validate a configuration object
   */
  private static validateConfigObject(config: any): { valid: boolean; errors: string[]; warnings: string[] } {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Check required fields
    if (!config.baseUrl) {
      errors.push('Missing required field: baseUrl');
    } else if (typeof config.baseUrl !== 'string') {
      errors.push('baseUrl must be a string');
    } else {
      // Validate URL format
      try {
        new URL(config.baseUrl);
      } catch {
        errors.push('baseUrl must be a valid URL (e.g., https://api.example.com/v1)');
      }
    }

    if (!config.apiKey) {
      errors.push('Missing required field: apiKey');
    } else if (typeof config.apiKey !== 'string') {
      errors.push('apiKey must be a string');
    } else if (config.apiKey === 'your-api-key-here' || config.apiKey === 'YOUR_API_KEY') {
      warnings.push('apiKey appears to be a placeholder value. Please update it with your actual API key.');
    }

    if (config.baseUrl && config.baseUrl.includes('your-api-endpoint')) {
      warnings.push('baseUrl appears to be a placeholder. Please update it with your actual API endpoint.');
    }

    // Validate optional fields
    if (config.chatId && typeof config.chatId !== 'string') {
      warnings.push('chatId should be a string (optional field)');
    }

    if (config.userId && typeof config.userId !== 'string') {
      warnings.push('userId should be a string (optional field)');
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Load and validate the ZAI configuration
   * Searches for .z-ai-config in the standard locations
   */
  static async validateConfig(): Promise<ConfigValidationResult> {
    const locations = this.getConfigLocations();
    const warnings: string[] = [];

    // Check which config files exist
    for (const location of locations) {
      location.exists = await this.fileExists(location.path);
    }

    // Find the first existing config file
    for (const location of locations) {
      if (!location.exists) continue;

      try {
        const config = await this.readConfigFile(location.path);
        const validation = this.validateConfigObject(config);

        if (validation.valid) {
          return {
            valid: true,
            config: config as ZAIConfig,
            configPath: location.path,
            warnings: validation.warnings
          };
        } else {
          return {
            valid: false,
            error: `Invalid configuration in ${location.path}:\n${validation.errors.map(e => '  • ' + e).join('\n')}`,
            warnings: validation.warnings
          };
        }
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        return {
          valid: false,
          error: `Failed to read ${location.path}: ${errorMsg}`,
          warnings
        };
      }
    }

    // No config file found
    return {
      valid: false,
      error: 'No .z-ai-config file found in any standard location.',
      warnings
    };
  }

  /**
   * Generate setup instructions
   */
  static generateSetupInstructions(): string {
    const cwd = process.cwd();
    const configPath = path.join(cwd, '.z-ai-config');

    return `
╔══════════════════════════════════════════════════════════════════════════╗
║                    ZAI Configuration Setup Guide                          ║
╚══════════════════════════════════════════════════════════════════════════╝

To enable AI mode for the chatbot, you need to create a .z-ai-config file.

QUICK SETUP:
────────────────────────────────────────────────────────────────────────────

1. Create a configuration file in your project root:
   File: ${configPath}

2. Add the following configuration (replace placeholders with your values):

{
  "baseUrl": "https://your-api-endpoint.com/v1",
  "apiKey": "your-actual-api-key-here",
  "chatId": "optional-chat-identifier",
  "userId": "optional-user-identifier"
}

REQUIRED FIELDS:
────────────────────────────────────────────────────────────────────────────

  • baseUrl: Your AI API endpoint URL
    Example: "https://api.openai.com/v1" or "https://your-custom-api.com/v1"

  • apiKey: Your API authentication key
    Example: "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

OPTIONAL FIELDS:
────────────────────────────────────────────────────────────────────────────

  • chatId: Optional identifier for chat sessions
  • userId: Optional identifier for user tracking

ALTERNATIVE LOCATIONS:
────────────────────────────────────────────────────────────────────────────

The .z-ai-config file can also be placed in:
  • Home directory: ${os.homedir()}/.z-ai-config
  • System-wide: /etc/.z-ai-config

Priority order: Project root → Home directory → System-wide

VALIDATION:
────────────────────────────────────────────────────────────────────────────

After creating the file, restart your server. The chatbot will automatically
validate the configuration and use AI mode if valid.

TROUBLESHOOTING:
────────────────────────────────────────────────────────────────────────────

If the chatbot still shows fallback mode:
  1. Check the server logs for validation errors
  2. Ensure the JSON is valid (use a JSON validator)
  3. Verify baseUrl is a valid URL
  4. Confirm apiKey is not a placeholder value
  5. Check file permissions on .z-ai-config

For more help, check the example file:
  ${path.join(cwd, '.z-ai-config.example')}
`;
  }

  /**
   * Log configuration status (for startup)
   */
  static async logConfigStatus(): Promise<void> {
    console.log('\n🤖 ZAI Chatbot Configuration Check');
    console.log('─'.repeat(70));

    const result = await this.validateConfig();

    if (result.valid) {
      console.log('✅ AI Mode: ENABLED');
      console.log(`📁 Config: ${result.configPath}`);
      console.log(`🔗 API Endpoint: ${result.config?.baseUrl}`);

      if (result.warnings.length > 0) {
        console.log('\n⚠️  Warnings:');
        result.warnings.forEach(w => console.log(`  • ${w}`));
      }

      console.log('─'.repeat(70));
    } else {
      console.log('❌ AI Mode: DISABLED (using fallback mode)');
      console.log(`\n❌ ${result.error}`);
      console.log('\n📋 To enable AI mode, create a .z-ai-config file with your API credentials.');
      console.log('   See the setup instructions below:\n');
      console.log(this.generateSetupInstructions());
      console.log('─'.repeat(70));
    }
  }

  /**
   * Get configuration status for API responses
   */
  static async getConfigStatus(): Promise<{
    aiModeEnabled: boolean;
    configPath?: string;
    apiEndpoint?: string;
    error?: string;
  }> {
    const result = await this.validateConfig();

    if (result.valid) {
      return {
        aiModeEnabled: true,
        configPath: result.configPath,
        apiEndpoint: result.config?.baseUrl
      };
    } else {
      return {
        aiModeEnabled: false,
        error: result.error
      };
    }
  }
}
