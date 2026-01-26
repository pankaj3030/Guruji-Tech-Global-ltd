import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { EmailService } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    console.log('[Job Application API] Received job application');

    const formData = await request.formData();
    const jobId = formData.get('jobId') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const resume = formData.get('resume') as File;

    console.log('[Job Application API] Job:', jobTitle);
    console.log('[Job Application API] Applicant:', `${firstName} ${lastName}`);

    // Validate required fields
    if (!jobId || !jobTitle || !firstName || !lastName || !email || !phone) {
      console.error('[Job Application API] Validation error: Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields', message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    const applicantName = `${firstName} ${lastName}`;

    // Process resume if provided
    let resumeUrl: string | null = null;
    if (resume) {
      console.log('[Job Application API] Resume file:', resume.name);
      // In a real implementation, you would upload the file to a storage service
      // For now, we'll just store the file name
      resumeUrl = resume.name;
    }

    console.log('[Job Application API] Saving to database...');
    // Save to database
    await db.jobApplication.create({
      data: {
        jobId,
        jobTitle,
        firstName,
        lastName,
        email,
        phone,
        address: address || null,
        coverLetter: coverLetter || null,
        resumeUrl,
      },
    });
    console.log('[Job Application API] Successfully saved to database');

    // Send confirmation email to the applicant
    console.log('[Job Application API] Sending confirmation email to applicant...');
    const applicantEmailSent = await EmailService.sendJobApplicationConfirmation(
      applicantName,
      email,
      jobTitle,
      jobTitle.split('(')[0]?.trim() || jobTitle,
      'Full-time'
    );
    console.log('[Job Application API] Confirmation email sent:', applicantEmailSent);

    // Send HR notification about new job application
    console.log('[Job Application API] Sending notification to HR...');
    const hrEmailSent = await EmailService.sendHRNotification(
      applicantName,
      email,
      jobTitle,
      jobTitle.split('(')[0]?.trim() || jobTitle
    );
    console.log('[Job Application API] HR notification email sent:', hrEmailSent);

    const response = {
      success: true,
      message: applicantEmailSent && hrEmailSent
        ? 'Job application submitted successfully. Confirmation emails have been sent.'
        : 'Job application submitted successfully. (Email service unavailable)',
      emailStatus: {
        applicant: applicantEmailSent,
        hr: hrEmailSent,
      },
    };

    console.log('[Job Application API] Response:', JSON.stringify(response, null, 2));
    return NextResponse.json(response);
  } catch (error) {
    console.error('[Job Application API] ERROR: Failed to submit job application');
    console.error('[Job Application API] Error details:', error);

    if (error instanceof Error) {
      console.error('[Job Application API] Error message:', error.message);
      console.error('[Job Application API] Error stack:', error.stack);
    }

    return NextResponse.json(
      {
        error: 'Failed to submit job application',
        message: 'An error occurred while processing your application. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
