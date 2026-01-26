/**
 * Email Service for sending emails
 * Uses Resend API for sending emails
 */

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailOptions {
  to: string[];
  cc?: string[];
  subject: string;
  text: string;
  html?: string;
}

export class EmailService {
  /**
   * Send an email using Resend API
   */
  static async sendEmail(options: EmailOptions, from?: string): Promise<boolean> {
    try {
      console.log('Sending to:', options.to.join(', '), 'Subject:', options.subject);

      if (!process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY not configured. Email will not be sent.');
        console.warn('Please set RESEND_API_KEY in your .env file');
        return false;
      }

      const emailData: any = {
        from: from || process.env.RESEND_FROM_GENERAL || 'info@gurujitechglobal.com',
        to: options.to,
        subject: options.subject,
      };

      // Add CC if present
      if (options.cc && options.cc.length > 0) {
        emailData.cc = options.cc;
      }

      // Add text content
      if (options.text) {
        emailData.text = options.text;
      }

      // Add HTML content
      if (options.html) {
        emailData.html = options.html;
      }

      const response = await resend.emails.send(emailData);

      if (response.error) {
        console.error('Resend API error:', response.error);
        return false;
      }

      console.log('Email sent successfully via Resend:', response.data?.id);
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  /**
   * Send contact form confirmation
   */
  static async sendContactConfirmation(name: string, email: string, subject: string, message: string): Promise<boolean> {
    return this.sendEmail({
      to: [email],
      subject: 'Thank you for contacting Guruji Tech Global',
      text: `Dear ${name},\n\nThank you for reaching out to us. We have received your message and will review it shortly.\n\nYour message:\nSubject: ${subject}\n\n${message}\n\nWe will get back to you within 24-48 hours.\n\nBest regards,\nThe Guruji Tech Global Team`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Thank you for contacting Guruji Tech Global</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4169E1 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 10px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 10px; }
            h1 { margin: 0 0 20px; }
            .details { background: #fff; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .footer { text-align: center; color: #666; font-size: 14px; margin-top: 20px; }
            .highlight { background: #f0f0f0; padding: 2px 10px; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Contacting Us!</h1>
            </div>
            <div class="content">
              <p>Dear <strong>${name}</strong>,</p>
              <p>Thank you for reaching out to Guruji Tech Global. We have successfully received your message and will review it shortly.</p>
              
              <div class="details">
                <p><strong>Your Message Details:</strong></p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div class="highlight">
                <p>What happens next?</p>
                <ul style="margin: 0; padding-left: 20px;">
                  <li>We will review your message</li>
                  <li>We will respond within 24-48 hours</li>
                  <li>Check your email for our response</li>
                </ul>
              </div>
            </div>
            
            <div class="footer">
              <p>Best regards,</p>
              <p><strong>The Guruji Tech Global Team</strong></p>
              <p style="margin-top: 10px; color: #4169E1;">📍 Coventry, United Kingdom</p>
              <p style="margin-top: 5px;">📧 form@gurujitechglobal.com</p>
              <p style="margin-top: 10px; font-size: 12px; color: #999;">
                <a href="https://gurujitechglobal.com" style="color: #4169E1; text-decoration: none;">Visit our website</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }, process.env.RESEND_FROM_CONTACT || 'form@gurujitechglobal.com');
  }

  /**
   * Send notification to business about new contact form submission
   */
  static async sendContactNotificationToBusiness(
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
  ): Promise<boolean> {
    return this.sendEmail({
      to: [process.env.CONTACT_NOTIFICATION_EMAIL || 'contact@gurujitechglobal.com'],
      subject: `New Contact Form Submission - ${subject}`,
      text: `New contact form submission received.\n\nContact Details:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone || 'Not provided'}\n- Subject: ${subject}\n\nMessage:\n${message}\n\nPlease review and respond to this inquiry as soon as possible.\n\nBest regards,\nGuruji Tech Global System`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4169E1 0%, #3b82f6 100%); color: white; padding: 20px; border-radius: 10px; }
            .content { background: #fff; padding: 30px; border-radius: 10px; }
            .info { background: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 15px; }
            .footer { text-align: center; color: #666; font-size: 14px; margin-top: 20px; }
            .badge { display: inline-block; background: #4169E1; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; }
            .message-box { background: #fffbe6; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📨 New Contact Form Submission</h1>
              <p>Someone has contacted you via the website</p>
            </div>
            <div class="content">
              <div class="info">
                <h2><span class="badge">Contact Details</span></h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Subject:</strong> ${subject}</p>
              </div>
              
              <div class="message-box">
                <h2>Message:</h2>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <div class="info" style="margin-top: 20px;">
                <p><strong>Action Required:</strong></p>
                <ul style="margin: 0; padding-left: 20px;">
                  <li>Review the message above</li>
                  <li>Respond to the inquiry promptly</li>
                  <li>Follow up with the customer if needed</li>
                </ul>
              </div>
            </div>
            
            <div class="footer">
              <p>Best regards,</p>
              <p><strong>Guruji Tech Global System</strong></p>
              <p style="margin-top: 10px;">📧 form@gurujitechglobal.com</p>
              <p style="margin-top: 10px; font-size: 12px; color: #999;">
                <a href="https://gurujitechglobal.com/contact" style="color: #4169E1; text-decoration: none;">View Contact Form</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }, process.env.RESEND_FROM_CONTACT || 'form@gurujitechglobal.com');
  }

  /**
   * Send job application confirmation to applicant
   */
  static async sendJobApplicationConfirmation(
    applicantName: string,
    applicantEmail: string,
    jobTitle: string,
    jobLocation: string,
    jobType: string
  ): Promise<boolean> {
    return this.sendEmail({
      to: [applicantEmail],
      subject: `Application Received - ${jobTitle} - Guruji Tech Global`,
      text: `Dear ${applicantName},\n\nThank you for applying for the position of ${jobTitle}.\n\nYour application has been received and is under review by our HR team.\n\nPosition Details:\n- Job Title: ${jobTitle}\n- Location: ${jobLocation}\n- Type: ${jobType}\n\nWe will review your qualifications and contact shortlisted candidates for interviews.\n\nBest regards,\nThe Guruji Tech Global HR Team`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Application Received - ${jobTitle} - Guruji Tech Global</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4169E1 0%, #DC143C 100%); color: white; padding: 30px; border-radius: 10px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 10px; }
            .job-details { background: #fff; padding: 20px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #4169E1; }
            .footer { text-align: center; color: #666; font-size: 14px; margin-top: 20px; }
            .highlight { background: #f0f0f0; padding: 2px 10px; border-radius: 5px; }
            .button { display: inline-block; padding: 15px 30px; background: #4169E1; color: white; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Application Received! 🎉</h1>
              <p style="font-size: 18px; margin: 0;">Thank you for applying to Guruji Tech Global</p>
            </div>
            <div class="content">
              <p>Dear <strong>${applicantName}</strong>,</p>
              <p>We are pleased to inform you that we have received your application for the position of <strong>${jobTitle}</strong>.</p>
              
              <div class="job-details">
                <h3 style="margin-top: 0;">Position Details:</h3>
                <p><strong>Job Title:</strong> ${jobTitle}</p>
                <p><strong>Location:</strong> ${jobLocation}</p>
                <p><strong>Employment Type:</strong> ${jobType}</p>
              </div>
              
              <div class="highlight">
                <p><strong>What happens next?</strong></p>
                <ul style="margin: 0; padding-left: 20px;">
                  <li>Our HR team will review your application</li>
                  <li>Shortlisted candidates will be contacted for interviews</li>
                  <li>Keep an eye on your email for updates</li>
                </ul>
              </div>
            </div>
            
            <div class="footer">
              <p>Best regards,</p>
              <p><strong>The Guruji Tech Global HR Team</strong></p>
              <p style="margin-top: 10px; color: #DC143C;">📧 career@gurujitechglobal.com</p>
              <p style="margin-top: 10px; font-size: 12px; color: #999;">
                <a href="https://gurujitechglobal.com" style="color: #DC143C; text-decoration: none;">Visit our website</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    }, process.env.RESEND_FROM_CAREER || 'career@gurujitechglobal.com');
  }

  /**
   * Send HR notification about new job application
   */
  static async sendHRNotification(
    applicantName: string,
    applicantEmail: string,
    jobTitle: string,
    jobLocation: string
  ): Promise<boolean> {
    return this.sendEmail({
      to: ['career@gurujitechglobal.com'],
      subject: `New Job Application - ${jobTitle} - ${applicantName}`,
      text: `HR Team,\n\nA new job application has been submitted.\n\nApplicant Details:\n- Name: ${applicantName}\n- Email: ${applicantEmail}\n- Position: ${jobTitle}\n- Location: ${jobLocation}\n\nPlease review the application details and contact the candidate if selected for interview.\n\nBest regards,\nGuruji Tech Global System`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>New Job Application - ${jobTitle}</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #DC143C; color: white; padding: 20px; border-radius: 10px; }
            .content { background: #fff; padding: 30px; border-radius: 10px; }
            .info { background: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 15px; }
            .footer { text-align: center; color: #666; font-size: 14px; margin-top: 20px; }
            .badge { display: inline-block; background: #4169E1; color: white; padding: 5px 15px; border-radius: 20px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📋 New Job Application Received</h1>
              <p>HR Team - New application submitted via careers page</p>
            </div>
            <div class="content">
              <div class="info">
                <h2><span class="badge">Applicant</span></h2>
                <p><strong>Name:</strong> ${applicantName}</p>
                <p><strong>Email:</strong> ${applicantEmail}</p>
              </div>
              
              <div class="info">
                <h2><span class="badge">Position</span></h2>
                <p><strong>Title:</strong> ${jobTitle}</p>
                <p><strong>Location:</strong> ${jobLocation}</p>
              </div>
              
              <p><strong>Action Required:</strong></p>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Review the application in the database</li>
                <li>Check candidate qualifications</li>
                <li>Contact shortlisted candidates for interviews</li>
              </ul>
            </div>
            
            <div class="footer">
              <p>Best regards,</p>
              <p><strong>Guruji Tech Global System</strong></p>
              <p style="margin-top: 10px;">📧 career@gurujitechglobal.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    }, process.env.RESEND_FROM_CAREER || 'career@gurujitechglobal.com');
  }
}
