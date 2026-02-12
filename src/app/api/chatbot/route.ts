import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';
import { EmailService } from '@/lib/email';
import { ZAIConfigValidator } from '@/lib/zai-config';

/**
 * Chatbot API Route
 *
 * This endpoint uses the z-ai-web-dev-sdk for AI responses. The SDK requires
 * a configuration file at `.z-ai-config` in the project root with the following structure:
 *
 * {
 *   "baseUrl": "https://your-api-endpoint.com/v1",
 *   "apiKey": "your-api-key-here",
 *   "chatId": "optional-chat-id",
 *   "userId": "optional-user-id"
 * }
 *
 * If the configuration is missing or invalid, the chatbot will gracefully fall back to
 * rule-based responses. Check `/api/chatbot/config` for configuration status.
 * See `.z-ai-config.example` for a template.
 */

// Store conversations and lead data in memory (in production, use Redis or database)
const conversations = new Map<string, Array<{ role: string; content: string }>>();
const leadData = new Map<string, LeadInfo>();
let zaiInstance: any = null;
let configValidated = false;
let zaiAvailable = false;
let validationError: string | null = null;

interface LeadInfo {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  websiteType: string;
  features: string;
  budget: string;
  timeline: string;
  additionalInfo: string;
  currentStep: number;
  isLeadCollection: boolean;
}

// Questions for each step
const STEP_QUESTIONS: Record<number, { field: keyof LeadInfo; question: string; acknowledge: string }> = {
  1: { 
    field: 'name', 
    question: "To get started, could you please provide your **full name**?",
    acknowledge: "Nice to meet you, {value}!"
  },
  2: { 
    field: 'email', 
    question: "What's your **email address**? We'll use this to send you a quote.",
    acknowledge: "Got it! Your email is {value}."
  },
  3: { 
    field: 'phone', 
    question: "What's your **phone number**? (You can type 'skip' if you prefer not to share)",
    acknowledge: "Thanks! We have your phone number."
  },
  4: { 
    field: 'companyName', 
    question: "What's your **company name**?",
    acknowledge: "Great! So you're from {value}."
  },
  5: { 
    field: 'websiteType', 
    question: "What **type of website** do you need? (e.g., business website, e-commerce store, portfolio, blog, etc.)",
    acknowledge: "Perfect! You're looking for a {value}."
  },
  6: { 
    field: 'features', 
    question: "What **features** would you like on your website? (e.g., contact form, booking system, payment integration, etc.)",
    acknowledge: "Excellent choices! You want {value}."
  },
  7: { 
    field: 'budget', 
    question: "What's your **budget range** for this project? (e.g., £500-1000, £1000-3000, £3000+, or 'not sure')",
    acknowledge: "Budget noted: {value}."
  },
  8: { 
    field: 'timeline', 
    question: "When do you need the website **completed by**? (e.g., 'as soon as possible', '1 month', '3 months', 'no rush')",
    acknowledge: "Timeline: {value}."
  },
  9: { 
    field: 'additionalInfo', 
    question: "Is there anything **else** you'd like to share about your project? (Type 'no' or 'none' if you're done)",
    acknowledge: "Thanks for the additional info!"
  }
};

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

// Validate configuration and initialize ZAI instance
async function validateAndInitializeZAI() {
  if (configValidated) {
    return zaiInstance;
  }

  const result = await ZAIConfigValidator.validateConfig();

  if (result.valid) {
    try {
      zaiInstance = await ZAI.create();
      zaiAvailable = true;
      validationError = null;
      console.log('[Chatbot] ✅ AI mode enabled - ZAI SDK initialized successfully');
    } catch (error) {
      zaiAvailable = false;
      validationError = error instanceof Error ? error.message : 'Unknown initialization error';
      console.error('[Chatbot] ❌ ZAI SDK initialization failed:', validationError);
    }
  } else {
    zaiAvailable = false;
    validationError = result.error || 'Unknown validation error';
    console.warn('[Chatbot] ⚠️  AI mode disabled - Configuration error:', validationError);
    console.warn('[Chatbot] 💡 Check /api/chatbot/config for detailed setup instructions');
  }

  configValidated = true;
  return zaiInstance;
}

// Initialize ZAI instance (with validation)
async function getZAIInstance() {
  await validateAndInitializeZAI();

  if (!zaiAvailable || !zaiInstance) {
    throw new Error(validationError || 'ZAI is not available');
  }

  return zaiInstance;
}

// Check if ZAI is available
function isZAIAvailable(): boolean {
  return zaiAvailable && zaiInstance !== null;
}

// Generate a fallback response when AI is not available
function generateFallbackResponse(message: string, history: Array<{ role: string; content: string }>): string {
  const lowerMessage = message.toLowerCase();

  // Check for website-related inquiries
  if (isWebsiteInquiry(message)) {
    return `I'd be happy to help you with your website project! However, our AI assistant is currently in fallback mode.\n\nPlease contact us directly for personalized assistance:\n\n📞 **Phone:** +44-7488564873\n📧 **Email:** contact@gurujitechglobal.com\n\nOr visit our [Contact Page](/contact) to send us a message. Our team will get back to you within 24 hours!`;
  }

  // Check for greetings
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return `Hello! Welcome to Guruji Tech Global! 👋\n\nI'm currently operating in fallback mode. For immediate assistance, please:\n\n• 📞 Call us: +44-7488564873\n• 📧 Email: contact@gurujitechglobal.com\n• 🌐 Visit our [Contact Page](/contact)\n\nOur team is available Monday-Friday, 9AM-6PM GMT.`;
  }

  // Check for service inquiries
  const serviceKeywords = ['service', 'cloud', 'security', 'support', 'web development', 'microsoft', 'network', 'backup'];
  if (serviceKeywords.some(keyword => lowerMessage.includes(keyword))) {
    return `Thank you for your interest in our IT services! 💼\n\nGuruji Tech Global offers a wide range of services including:\n• Cloud Services (AWS, Azure, Google Cloud)\n• Cyber Security & Compliance\n• IT Support & Managed Services\n• Web Development\n• Microsoft 365 Solutions\n• Network Solutions\n• And more!\n\nFor detailed information and quotes, please contact us directly or visit our [Services page](/services).`;
  }

  // Check for pricing
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing') || lowerMessage.includes('quote')) {
    return `We'd be happy to provide you with a custom quote! 💰\n\nPlease contact us with your specific requirements:\n\n📞 Phone: +44-7488564873\n📧 Email: contact@gurujitechglobal.com\n\nOr fill out our [contact form](/contact) and we'll get back to you with a tailored quote within 24 hours.`;
  }

  // Default response
  return `Thank you for your message! 🙏\n\nI'm currently operating in fallback mode. For the best assistance, please:\n\n📞 **Call us:** +44-7488564873\n📧 **Email:** contact@gurujitechglobal.com\n🌐 **Visit:** [Contact Page](/contact)\n\nOur team at Guruji Tech Global is ready to help you with all your IT needs!`;
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

function getLeadInfo(sessionId: string): LeadInfo {
  if (!leadData.has(sessionId)) {
    leadData.set(sessionId, {
      name: '',
      email: '',
      phone: '',
      companyName: '',
      websiteType: '',
      features: '',
      budget: '',
      timeline: '',
      additionalInfo: '',
      currentStep: 0,
      isLeadCollection: false
    });
  }
  return leadData.get(sessionId)!;
}

function trimConversationHistory(history: Array<{ role: string; content: string }>, maxMessages: number = 20) {
  if (history.length <= maxMessages) {
    return history;
  }
  return [
    history[0], // Keep system prompt
    ...history.slice(-(maxMessages - 1))
  ];
}

// Check if user message indicates website development interest
function isWebsiteInquiry(message: string): boolean {
  const triggers = [
    'need a website',
    'want a website',
    'build a website',
    'create a website',
    'website for my',
    'website for our',
    'web development',
    'develop a website',
    'make a website',
    'new website',
    'looking for website',
    'website design',
    'ecommerce website',
    'e-commerce website',
    'online store',
    'business website'
  ];
  
  const lowerMessage = message.toLowerCase();
  return triggers.some(trigger => lowerMessage.includes(trigger));
}

// Extract and validate data based on step
function extractDataForStep(step: number, message: string): { valid: boolean; value: string } {
  const trimmedMessage = message.trim();
  
  switch (step) {
    case 1: // Name
      if (trimmedMessage.length >= 2) {
        return { valid: true, value: trimmedMessage };
      }
      return { valid: false, value: '' };
      
    case 2: // Email
      const emailMatch = trimmedMessage.match(/[\w.-]+@[\w.-]+\.\w+/);
      if (emailMatch) {
        return { valid: true, value: emailMatch[0] };
      }
      return { valid: false, value: '' };
      
    case 3: // Phone (optional)
      if (trimmedMessage.toLowerCase() === 'skip' || trimmedMessage.toLowerCase() === 'no') {
        return { valid: true, value: 'Not provided' };
      }
      const phoneMatch = trimmedMessage.match(/[\d\s\+\-\(\)]{7,}/);
      if (phoneMatch) {
        return { valid: true, value: phoneMatch[0].trim() };
      }
      // Accept any non-empty response as skip
      if (trimmedMessage.length > 0) {
        return { valid: true, value: 'Not provided' };
      }
      return { valid: false, value: '' };
      
    case 4: // Company name
      if (trimmedMessage.length >= 1) {
        return { valid: true, value: trimmedMessage };
      }
      return { valid: false, value: '' };
      
    case 5: // Website type
      if (trimmedMessage.length >= 2) {
        return { valid: true, value: trimmedMessage };
      }
      return { valid: false, value: '' };
      
    case 6: // Features
      if (trimmedMessage.length >= 2) {
        return { valid: true, value: trimmedMessage };
      }
      return { valid: false, value: '' };
      
    case 7: // Budget
      if (trimmedMessage.length >= 1) {
        return { valid: true, value: trimmedMessage };
      }
      return { valid: false, value: '' };
      
    case 8: // Timeline
      if (trimmedMessage.length >= 1) {
        return { valid: true, value: trimmedMessage };
      }
      return { valid: false, value: '' };
      
    case 9: // Additional info (optional)
      if (trimmedMessage.toLowerCase() === 'no' || trimmedMessage.toLowerCase() === 'none' || trimmedMessage.toLowerCase() === 'skip') {
        return { valid: true, value: '' };
      }
      return { valid: true, value: trimmedMessage };
      
    default:
      return { valid: false, value: '' };
  }
}

// Generate lead collection response
// completedStep: the step that was just answered (used for acknowledgement)
// currentStep: the next step to ask about
function generateLeadResponse(lead: LeadInfo, isStart: boolean = false, completedStep?: number): string {
  if (isStart) {
    return `Great! I'd be happy to help you with a website for your company! 🎉\n\nLet me ask you a few questions to understand your needs better.\n\n${STEP_QUESTIONS[1].question}`;
  }

  // If completedStep is provided, use it for acknowledgement (the step just completed)
  // Otherwise fall back to currentStep (for backwards compatibility)
  const acknowledgeStep = completedStep !== undefined ? completedStep : lead.currentStep;
  const stepConfig = STEP_QUESTIONS[acknowledgeStep];

  if (!stepConfig) {
    // No config for this step, return a safe fallback
    return "Thanks for that information! Let's continue.";
  }

  // Get the value that was just collected from the completed step
  const field = stepConfig.field;
  const value = lead[field] as string;

  // Generate acknowledgment
  let acknowledge = stepConfig.acknowledge;
  if (value && acknowledge.includes('{value}')) {
    acknowledge = acknowledge.replace('{value}', value);
  }

  // Check if we're done (after step 9 is completed, currentStep will be 10)
  if (lead.currentStep > 9) {
    return null; // Signal completion - all 9 steps are done
  }

  // Get next question from current step (which is the next step to ask)
  const nextQuestion = STEP_QUESTIONS[lead.currentStep]?.question || '';

  return `${acknowledge}\n\n${nextQuestion}`;
}

// Send lead notification email
async function sendLeadNotificationEmail(sessionId: string): Promise<boolean> {
  const lead = leadData.get(sessionId);
  if (!lead) return false;

  try {
    const emailSent = await EmailService.sendEmail({
      to: [process.env.CONTACT_NOTIFICATION_EMAIL || 'contact@gurujitechglobal.com'],
      subject: `🌐 New Website Inquiry from ${lead.name} - ${lead.companyName}`,
      text: `
NEW WEBSITE DEVELOPMENT INQUIRY

Contact Information:
- Name: ${lead.name}
- Email: ${lead.email}
- Phone: ${lead.phone || 'Not provided'}
- Company: ${lead.companyName || 'Not provided'}

Project Details:
- Website Type: ${lead.websiteType || 'Not specified'}
- Features Required: ${lead.features || 'Not specified'}
- Budget Range: ${lead.budget || 'Not specified'}
- Timeline: ${lead.timeline || 'Not specified'}

Additional Information:
${lead.additionalInfo || 'None provided'}

---
This lead was collected via the AI Chatbot on gurujitechglobal.com
Please follow up within 24 hours.
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>New Website Development Inquiry</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #4169E1 0%, #3b82f6 100%); color: white; padding: 25px; border-radius: 10px 10px 0 0; }
    .content { background: #fff; padding: 30px; border-radius: 0 0 10px 10px; }
    .section { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #4169E1; }
    .section h3 { margin-top: 0; color: #4169E1; }
    .info-row { display: flex; padding: 8px 0; border-bottom: 1px solid #eee; }
    .info-label { font-weight: bold; width: 140px; color: #555; }
    .info-value { flex: 1; }
    .badge { display: inline-block; background: #4169E1; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; font-size: 12px; }
    .highlight { background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin-top: 20px; }
    .footer { text-align: center; color: #666; font-size: 14px; margin-top: 20px; padding: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌐 New Website Development Inquiry</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">Lead collected via AI Chatbot</p>
    </div>
    
    <div class="content">
      <div class="section">
        <h3>👤 Contact Information</h3>
        <div class="info-row">
          <span class="info-label">Name:</span>
          <span class="info-value">${lead.name}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Email:</span>
          <span class="info-value"><a href="mailto:${lead.email}">${lead.email}</a></span>
        </div>
        <div class="info-row">
          <span class="info-label">Phone:</span>
          <span class="info-value">${lead.phone || 'Not provided'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Company:</span>
          <span class="info-value">${lead.companyName || 'Not provided'}</span>
        </div>
      </div>
      
      <div class="section">
        <h3>💻 Project Details</h3>
        <div class="info-row">
          <span class="info-label">Website Type:</span>
          <span class="info-value">${lead.websiteType || 'Not specified'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Features:</span>
          <span class="info-value">${lead.features || 'Not specified'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Budget:</span>
          <span class="info-value">${lead.budget || 'Not specified'}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Timeline:</span>
          <span class="info-value">${lead.timeline || 'Not specified'}</span>
        </div>
      </div>
      
      ${lead.additionalInfo ? `
      <div class="section">
        <h3>📝 Additional Information</h3>
        <p>${lead.additionalInfo}</p>
      </div>
      ` : ''}
      
      <div class="highlight">
        <strong>⚡ Action Required:</strong>
        <ul style="margin: 10px 0 0 0; padding-left: 20px;">
          <li>Follow up within 24 hours</li>
          <li>Prepare a preliminary quote based on requirements</li>
          <li>Schedule a consultation call if needed</li>
        </ul>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Guruji Tech Global - AI Chatbot Lead</strong></p>
      <p>📧 contact@gurujitechglobal.com | 📞 +44-7488564873</p>
      <p style="font-size: 12px; color: #999;">
        <a href="https://gurujitechglobal.com" style="color: #4169E1;">www.gurujitechglobal.com</a>
      </p>
    </div>
  </div>
</body>
</html>
      `
    }, process.env.RESEND_FROM_CONTACT || 'form@gurujitechglobal.com');

    return emailSent;
  } catch (error) {
    console.error('Failed to send lead notification:', error);
    return false;
  }
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

    // Get or create conversation history and lead info
    let history = getConversationHistory(sessionId || 'default');
    const lead = getLeadInfo(sessionId || 'default');

    // Add user message to history
    history.push({
      role: 'user',
      content: message
    });

    let aiResponse: string;
    let isInLeadCollection = lead.isLeadCollection;

    // Check if this is a new website inquiry
    if (isWebsiteInquiry(message) && !lead.isLeadCollection) {
      // Start lead collection
      lead.isLeadCollection = true;
      lead.currentStep = 0; // Will be incremented to 1
      isInLeadCollection = true;
      
      aiResponse = generateLeadResponse(lead, true);
      
      lead.currentStep = 1; // Ready for first answer
      leadData.set(sessionId || 'default', lead);
    }
    // Handle ongoing lead collection
    else if (lead.isLeadCollection && lead.currentStep > 0 && lead.currentStep <= 9) {
      // Extract data for current step
      const { valid, value } = extractDataForStep(lead.currentStep, message);

      if (valid) {
        // Save the extracted data
        const completedStep = lead.currentStep;
        const field = STEP_QUESTIONS[completedStep].field;
        (lead as any)[field] = value;

        // Move to next step
        lead.currentStep++;

        // Check if collection is complete (after step 9 is done, currentStep becomes 10)
        if (lead.currentStep > 9) {
          // Lead collection complete - send email
          const emailSent = await sendLeadNotificationEmail(sessionId || 'default');

          if (emailSent) {
            aiResponse = `🎉 **Thank you, ${lead.name}!**

I've collected all your information and sent it to our web development team. Here's a summary:

📋 **Your Details:**
• **Name:** ${lead.name}
• **Email:** ${lead.email}
• **Phone:** ${lead.phone || 'Not provided'}
• **Company:** ${lead.companyName || 'Not provided'}

💻 **Project Requirements:**
• **Website Type:** ${lead.websiteType || 'Not specified'}
• **Features:** ${lead.features || 'Not specified'}
• **Budget:** ${lead.budget || 'Not specified'}
• **Timeline:** ${lead.timeline || 'Not specified'}

Our team will review your requirements and contact you within 24 hours!

In the meantime, feel free to ask me any other questions. 😊`;
          } else {
            aiResponse = `Thank you, ${lead.name}!

I've collected your information. Your inquiry has been recorded and our team will contact you at ${lead.email} within 24-48 hours.

You can also reach us directly at:
• 📞 +44-7488564873
• 📧 contact@gurujitechglobal.com

Is there anything else I can help you with?`;
          }

          // Reset lead collection mode
          lead.isLeadCollection = false;
          lead.currentStep = 0;
        } else {
          // Continue to next question - pass the completed step for acknowledgement
          aiResponse = generateLeadResponse(lead, false, completedStep);
        }

        leadData.set(sessionId || 'default', lead);
      } else {
        // Invalid input - ask again
        aiResponse = `I didn't quite catch that. ${STEP_QUESTIONS[lead.currentStep].question}`;
      }
    }
    // Normal conversation - use AI
    else {
      // Trim history if too long
      history = trimConversationHistory(history);
      conversations.set(sessionId || 'default', history);

      try {
        // Get ZAI instance (this triggers validation if not already done)
        const zai = await getZAIInstance();

        // Get AI completion
        const completion = await zai.chat.completions.create({
          messages: history,
          thinking: { type: 'disabled' }
        });

        aiResponse = completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";
      } catch (zaiError) {
        // ZAI unavailable - use fallback response
        if (validationError) {
          console.warn('[Chatbot] Using fallback response - Configuration error:', validationError);
        } else {
          console.warn('[Chatbot] Using fallback response due to ZAI unavailability:', zaiError instanceof Error ? zaiError.message : 'Unknown error');
        }
        aiResponse = generateFallbackResponse(message, history);
      }
    }

    // Ensure we always have a valid response (never null)
    if (!aiResponse) {
      aiResponse = "I apologize, but I couldn't generate a response. Please try again.";
    }

    // Trim history if too long
    history = trimConversationHistory(history);

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
      messageCount: history.length - 1,
      leadCollectionMode: isInLeadCollection,
      leadStep: lead.currentStep
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
    leadData.delete(sessionId);

    return NextResponse.json({
      success: true,
      message: 'Conversation and lead data cleared successfully'
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
