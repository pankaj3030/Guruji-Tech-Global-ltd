import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const envStatus = {
    resendApiKey: !!process.env.RESEND_API_KEY,
    resendFromGeneral: !!process.env.RESEND_FROM_GENERAL,
    resendFromContact: !!process.env.RESEND_FROM_CONTACT,
    resendFromCareer: !!process.env.RESEND_FROM_CAREER,
    contactNotificationEmail: !!process.env.CONTACT_NOTIFICATION_EMAIL,
    databaseUrl: !!process.env.DATABASE_URL,
    nodeEnv: process.env.NODE_ENV,
    vercel: !!process.env.VERCEL,
  };

  // Test database connection
  let dbConnectionOk = false;
  let dbError = null;
  let tablesExist = false;

  try {
    await db.$queryRaw`SELECT 1`;
    dbConnectionOk = true;

    // Check if tables exist
    const tablesResult = await db.$queryRaw`SELECT name FROM sqlite_master WHERE type='table'`;
    const tables = tablesResult as any[];
    const hasContactSubmission = tables.some((t: any) => t.name === 'ContactSubmission');
    const hasJobApplication = tables.some((t: any) => t.name === 'JobApplication');
    tablesExist = hasContactSubmission && hasJobApplication;
  } catch (error) {
    dbError = error instanceof Error ? error.message : 'Database connection failed';
  }

  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: envStatus,
    database: {
      connected: dbConnectionOk,
      tablesExist: tablesExist,
      error: dbError,
    },
    configuration: {
      apiKeyPresent: envStatus.resendApiKey,
      emailConfigured: envStatus.resendFromGeneral && envStatus.resendFromContact && envStatus.resendFromCareer,
      notificationConfigured: envStatus.contactNotificationEmail,
      databaseConfigured: envStatus.databaseUrl || envStatus.vercel,
    },
    issues: [
      !envStatus.resendApiKey ? 'RESEND_API_KEY is not configured' : null,
      !envStatus.resendFromGeneral ? 'RESEND_FROM_GENERAL is not configured' : null,
      !envStatus.resendFromContact ? 'RESEND_FROM_CONTACT is not configured' : null,
      !envStatus.resendFromCareer ? 'RESEND_FROM_CAREER is not configured' : null,
      !envStatus.contactNotificationEmail ? 'CONTACT_NOTIFICATION_EMAIL is not configured' : null,
      !envStatus.databaseUrl && !envStatus.vercel ? 'DATABASE_URL is not configured' : null,
      dbConnectionOk && !tablesExist ? 'Database tables do not exist - Call POST /api/init-db to initialize' : null,
      !dbConnectionOk ? dbError : null,
    ].filter(Boolean),
    recommendations: [
      !envStatus.databaseUrl && envStatus.vercel ? 'Using default SQLite path on Vercel (ephemeral storage)' : null,
      dbConnectionOk && !tablesExist ? 'POST to /api/init-db to initialize database tables' : null,
    ].filter(Boolean),
    initializationEndpoint: '/api/init-db',
  });
}
