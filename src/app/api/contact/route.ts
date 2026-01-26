import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { EmailService } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save to database
    await db.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        subject,
        message,
      },
    });

    // Send confirmation email to the form submitter
    await EmailService.sendContactConfirmation(name, email, subject, message);

    // Send notification email to the business
    await EmailService.sendContactNotificationToBusiness(name, email, phone || '', subject, message);

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully. A confirmation email has been sent to you.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
