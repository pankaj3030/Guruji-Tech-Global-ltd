import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { EmailService } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
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

    // Validate required fields
    if (!jobId || !jobTitle || !firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const applicantName = `${firstName} ${lastName}`;

    // Process resume if provided
    let resumeUrl: string | null = null;
    if (resume) {
      // In a real implementation, you would upload the file to a storage service
      // For now, we'll just store the file name
      resumeUrl = resume.name;
    }

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

    // Send confirmation email to the applicant
    const applicantEmailSent = await EmailService.sendJobApplicationConfirmation(
      applicantName,
      email,
      jobTitle,
      jobTitle.split('(')[0]?.trim() || jobTitle,
      'Full-time'
    );

    // Send HR notification about new job application
    const hrEmailSent = await EmailService.sendHRNotification(
      applicantName,
      email,
      jobTitle,
      jobTitle.split('(')[0]?.trim() || jobTitle
    );

    if (applicantEmailSent && hrEmailSent) {
      return NextResponse.json({
        success: true,
        message: 'Job application submitted successfully. Confirmation emails have been sent.',
      });
    } else {
      // Still save to database even if email fails
      return NextResponse.json({
        success: true,
        message: 'Job application submitted successfully.',
      });
    }
  } catch (error) {
    console.error('Job application error:', error);
    return NextResponse.json(
      { error: 'Failed to submit job application' },
      { status: 500 }
    );
  }
}
