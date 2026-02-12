/**
 * ZAI Chatbot Initialization
 *
 * This module provides initialization and validation for the ZAI chatbot.
 * It should be called during application startup to validate configuration
 * and log the status.
 */

import { ZAIConfigValidator } from './zai-config';

let initialized = false;

/**
 * Initialize the ZAI chatbot configuration
 *
 * This validates the .z-ai-config file and logs the status.
 * Call this during application startup (e.g., in layout.tsx or app initialization).
 *
 * @returns Promise that resolves when initialization is complete
 */
export async function initializeZAIChatbot(): Promise<void> {
  if (initialized) {
    return;
  }

  try {
    await ZAIConfigValidator.logConfigStatus();
    initialized = true;
  } catch (error) {
    console.error('[Chatbot] Failed to initialize:', error instanceof Error ? error.message : 'Unknown error');
  }
}

/**
 * Check if the chatbot has been initialized
 */
export function isZAIInitialized(): boolean {
  return initialized;
}

/**
 * Get a brief configuration status summary
 */
export async function getZAIStatus(): Promise<{
  aiModeEnabled: boolean;
  configPath?: string;
  error?: string;
}> {
  const result = await ZAIConfigValidator.validateConfig();

  if (result.valid) {
    return {
      aiModeEnabled: true,
      configPath: result.configPath
    };
  } else {
    return {
      aiModeEnabled: false,
      error: result.error
    };
  }
}
