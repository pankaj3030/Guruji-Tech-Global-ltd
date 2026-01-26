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