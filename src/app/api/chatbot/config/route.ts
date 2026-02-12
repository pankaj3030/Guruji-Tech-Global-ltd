import { NextResponse } from 'next/server';
import { ZAIConfigValidator } from '@/lib/zai-config';

/**
 * Chatbot Configuration Status Endpoint
 *
 * GET /api/chatbot/config
 *
 * Returns the current status of the ZAI chatbot configuration.
 * Useful for debugging and setup verification.
 */
export async function GET() {
  try {
    const result = await ZAIConfigValidator.validateConfig();

    return NextResponse.json({
      success: true,
      aiModeEnabled: result.valid,
      config: {
        path: result.configPath,
        baseUrl: result.config?.baseUrl,
        hasApiKey: !!result.config?.apiKey,
        hasChatId: !!result.config?.chatId,
        hasUserId: !!result.config?.userId
      },
      warnings: result.warnings,
      error: result.error,
      setupInstructions: result.valid ? undefined : ZAIConfigValidator.generateSetupInstructions()
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to check configuration status',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
