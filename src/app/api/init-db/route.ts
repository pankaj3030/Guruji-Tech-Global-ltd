import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

export async function POST() {
  try {
    console.log('[Database Init] Starting database initialization...');

    const dbPath = process.env.DATABASE_URL?.replace('file:', '') || '/tmp/prisma.db';
    console.log('[Database Init] Database path:', dbPath);

    // Ensure directory exists
    const dbDir = path.dirname(dbPath);
    if (!fs.existsSync(dbDir)) {
      console.log('[Database Init] Creating database directory:', dbDir);
      fs.mkdirSync(dbDir, { recursive: true });
    }

    // Create Prisma client with correct DATABASE_URL
    const prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL || `file:${dbPath}`,
        },
      },
    });

    console.log('[Database Init] Checking existing tables...');
    const result = await prisma.$queryRaw`SELECT name FROM sqlite_master WHERE type='table'`;
    console.log('[Database Init] Existing tables:', result);

    // Check if tables exist
    const tables = result as any[];
    const hasContactSubmission = tables.some((t: any) => t.name === 'ContactSubmission');
    const hasJobApplication = tables.some((t: any) => t.name === 'JobApplication');

    console.log('[Database Init] ContactSubmission table exists:', hasContactSubmission);
    console.log('[Database Init] JobApplication table exists:', hasJobApplication);

    if (hasContactSubmission && hasJobApplication) {
      console.log('[Database Init] Tables already exist, skipping migration');

      await prisma.$disconnect();

      return NextResponse.json({
        success: true,
        message: 'Database already initialized',
        tables: ['ContactSubmission', 'JobApplication'],
        action: 'none'
      });
    }

    console.log('[Database Init] Creating tables...');

    // Create tables using raw SQL
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

    await prisma.$disconnect();

    console.log('[Database Init] Database initialization completed successfully');

    return NextResponse.json({
      success: true,
      message: 'Database initialized successfully',
      tables: ['ContactSubmission', 'JobApplication'],
      action: 'created'
    });
  } catch (error) {
    console.error('[Database Init] ERROR: Failed to initialize database');
    console.error('[Database Init] Error details:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to initialize database',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
