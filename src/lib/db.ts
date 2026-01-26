import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getDatabaseUrl(): string {
  const url = process.env.DATABASE_URL;

  if (!url) {
    console.error('[Database] ERROR: DATABASE_URL environment variable is not configured');
    console.error('[Database] Please set DATABASE_URL in your environment variables');

    // For Vercel deployment, use a default SQLite path for now
    // This allows forms to work even without explicit DATABASE_URL
    if (process.env.VERCEL) {
      console.warn('[Database] Running on Vercel, using default SQLite path');
      const dbPath = '/tmp/prisma.db';
      // Ensure directory exists
      const dbDir = path.dirname(dbPath);
      if (!fs.existsSync(dbDir)) {
        console.log('[Database] Creating database directory:', dbDir);
        fs.mkdirSync(dbDir, { recursive: true });
      }
      return `file:${dbPath}`;
    }

    // Local development
    return 'file:./db/custom.db';
  }

  return url;
}

let tablesInitialized = false;

async function ensureTablesExist(prisma: PrismaClient): Promise<void> {
  if (tablesInitialized) {
    console.log('[Database] Tables already initialized, skipping check');
    return;
  }

  try {
    console.log('[Database] Checking if tables exist...');

    // Check if tables exist
    const tablesResult = await prisma.$queryRaw`SELECT name FROM sqlite_master WHERE type='table'`;
    const tables = tablesResult as any[];
    const hasContactSubmission = tables.some((t: any) => t.name === 'ContactSubmission');
    const hasJobApplication = tables.some((t: any) => t.name === 'JobApplication');

    console.log('[Database] ContactSubmission table exists:', hasContactSubmission);
    console.log('[Database] JobApplication table exists:', hasJobApplication);

    if (!hasContactSubmission || !hasJobApplication) {
      console.log('[Database] Tables missing, creating tables...');

      // Create ContactSubmission table
      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS "ContactSubmission" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "name" TEXT NOT NULL,
          "email" TEXT NOT NULL,
          "phone" TEXT,
          "subject" TEXT,
          "message" TEXT NOT NULL,
          "submittedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // Create JobApplication table
      await prisma.$executeRawUnsafe(`
        CREATE TABLE IF NOT EXISTS "JobApplication" (
          "id" TEXT NOT NULL PRIMARY KEY,
          "jobId" TEXT NOT NULL,
          "jobTitle" TEXT NOT NULL,
          "firstName" TEXT NOT NULL,
          "lastName" TEXT NOT NULL,
          "email" TEXT NOT NULL,
          "phone" TEXT NOT NULL,
          "address" TEXT,
          "coverLetter" TEXT,
          "resumeUrl" TEXT,
          "submittedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        )
      `);

      console.log('[Database] Tables created successfully');
    }

    tablesInitialized = true;
  } catch (error) {
    console.error('[Database] ERROR: Failed to ensure tables exist');
    console.error('[Database] Error details:', error);
    // Don't throw - allow application to continue
  }
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : [],
    datasources: {
      db: {
        url: getDatabaseUrl(),
      },
    },
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

// Ensure tables exist when database is first used
export async function initializeDatabase(): Promise<void> {
  await ensureTablesExist(db);
}