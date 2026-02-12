import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

// Store conversations in memory (in production, use Redis or database)
const conversations = new Map<string, Array<{ role: string; content: string }>>();
let zaiInstance: any = null;

// System prompt for Guruji Tech Global AI Assistant
const SYSTEM_PROMPT = `You are a helpful AI assistant for Guruji Tech Global, an IT solutions company based in Coventry, UK.

Company Information:
- Company: Guruji Tech Global
- Location: Coventry, West Midlands, UK
- Phone: +44-7488564873
- Email: contact@gurujitechglobal.com
- Website: https://www.gurujitechglobal.com

Services Offered:
1. Cloud Services - AWS, Azure, Google Cloud migration and management
2. Cyber Security - Security audits, penetration testing, compliance (GDPR, ISO 27001)
3. IT Support - 24/7 technical support, managed IT services
4. Web Development - Custom websites, e-commerce, web applications
5. Microsoft 365 - Setup, migration, and support
6. Network Solutions - Design, implementation, and maintenance
7. IP Telephony - VoIP systems and communication solutions
8. IT Consulting - Strategic IT planning and consulting
9. Backup & Disaster Recovery - Data protection and recovery solutions
10. Endpoint Management - Device management and security
11. Virtualization - Server and desktop virtualization
12. CCTV & Surveillance - Security camera systems

Your Role:
- Provide helpful information about IT services
- Answer questions about the company and its offerings
- Guide visitors to relevant pages on the website
- Be professional, friendly, and concise
- If you don't know something, suggest contacting the team directly
- When appropriate, encourage visitors to request a consultation or quote

Guidelines:
- Keep responses under 150 words when possible
- Be conversational and approachable
- Mention specific services when relevant
- Always be helpful, never pushy
- If asked about pricing, suggest requesting a custom quote
- For technical support issues, recommend contacting the support team`;

// Initialize ZAI instance
async function getZAIInstance() {
  if (!zaiInstance) {
    zaiInstance = await ZAI.create();
  }
  return zaiInstance;
}

function getConversationHistory(sessionId: string) {
  if (!conversations.has(sessionId)) {
    conversations.set(sessionId, [
      {
        role: 'assistant',
        content: SYSTEM_PROMPT
      }
    ]);
  }
  return conversations.get(sessionId)!;
}

function trimConversationHistory(history: Array<{ role: string; content: string }>, maxMessages: number = 15) {
  if (history.length <= maxMessages) {
    return history;
  }
  // Keep system prompt and recent messages
  return [
    history[0], // Keep system prompt
    ...history.slice(-(maxMessages - 1))
  ];
}

export async function POST(request: NextRequest) {
  try {
    const { sessionId, message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required and must be a string' },
        { status: 400 }
      );
    }

    // Get or create conversation history
    let history = getConversationHistory(sessionId || 'default');

    // Add user message
    history.push({
      role: 'user',
      content: message
    });

    // Trim history if too long
    history = trimConversationHistory(history);
    conversations.set(sessionId || 'default', history);

    // Get ZAI instance
    const zai = await getZAIInstance();

    // Get AI completion
    const completion = await zai.chat.completions.create({
      messages: history,
      thinking: { type: 'disabled' }
    });

    const aiResponse = completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";

    // Add AI response to history
    history.push({
      role: 'assistant',
      content: aiResponse
    });

    // Save updated history
    conversations.set(sessionId || 'default', history);

    return NextResponse.json({
      success: true,
      response: aiResponse,
      messageCount: history.length - 1 // Exclude system prompt from count
    });

  } catch (error) {
    console.error('Chatbot API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process your message. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId') || 'default';

    conversations.delete(sessionId);

    return NextResponse.json({
      success: true,
      message: 'Conversation cleared successfully'
    });

  } catch (error) {
    console.error('Chatbot DELETE error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to clear conversation'
      },
      { status: 500 }
    );
  }
}
