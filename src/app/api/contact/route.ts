import { NextRequest, NextResponse } from 'next/server';
import { db, initializeDatabase } from '@/lib/db';
import { EmailService } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    console.log('[Contact API] Received contact form submission');

    // Ensure database tables exist before trying to save
    await initializeDatabase();

    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.error('[Contact API] Validation error: Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields', message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    console.log('[Contact API] Saving to database...');
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
    console.log('[Contact API] Successfully saved to database');

    // Send confirmation email to the form submitter
    console.log('[Contact API] Sending confirmation email to submitter...');
    const confirmationEmailSent = await EmailService.sendContactConfirmation(name, email, subject, message);
    console.log('[Contact API] Confirmation email sent:', confirmationEmailSent);

    // Send notification email to the business
    console.log('[Contact API] Sending notification email to business...');
    const notificationEmailSent = await EmailService.sendContactNotificationToBusiness(name, email, phone || '', subject, message);
    console.log('[Contact API] Notification email sent:', notificationEmailSent);

    const response = {
      success: true,
      message: confirmationEmailSent
        ? 'Contact form submitted successfully. A confirmation email has been sent to you.'
        : 'Contact form submitted successfully. (Email service unavailable)',
      emailStatus: {
        confirmation: confirmationEmailSent,
        notification: notificationEmailSent,
      },
    };

    console.log('[Contact API] Response:', JSON.stringify(response, null, 2));
    return NextResponse.json(response);
  } catch (error) {
    console.error('[Contact API] ERROR: Failed to submit contact form');
    console.error('[Contact API] Error details:', error);

    if (error instanceof Error) {
      console.error('[Contact API] Error message:', error.message);
      console.error('[Contact API] Error stack:', error.stack);
    }

    return NextResponse.json(
      {
        error: 'Failed to submit contact form',
        message: 'An error occurred while processing your request. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
