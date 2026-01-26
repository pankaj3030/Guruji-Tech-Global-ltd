# Database Tables Fix for Vercel

## 🚨 Problem: Tables Not Found

**Error Message:**
```
Error [PrismaClientKnownRequestError]:
Invalid `prisma.contactSubmission.create()` invocation:
The table `main.ContactSubmission` does not exist in the current database.
```

**Root Cause:**
- Database file exists but tables were not created
- Prisma migrations haven't run on the deployed database
- On Vercel, the SQLite database at `/tmp/prisma.db` doesn't have the required tables

---

## 🔧 Solutions Implemented

### 1. **Database Directory Auto-Creation** (`src/lib/db.ts`)
   - Creates `/tmp` directory if it doesn't exist
   - Ensures database file path is accessible
   - Better error logging for debugging

### 2. **Database Initialization Endpoint** (`src/app/api/init-db/route.ts`)
   - New API endpoint: `POST /api/init-db`
   - Creates tables if they don't exist
   - Uses raw SQL for table creation
   - Can be called to initialize database after deployment

### 3. **Enhanced Test Endpoint** (`src/app/api/test-email/route.ts`)
   - Checks if database tables exist
   - Reports table existence status
   - Provides initialization endpoint information
   - Better error reporting

### 4. **Build Script Cleanup** (`package.json`)
   - Removed `db:push` from build script
   - Allows manual database initialization
   - Prevents deployment failures

---

## 📋 Required Environment Variables for Vercel

### Add these in Vercel Dashboard → Settings → Environment Variables

| Variable Name | Value | All Environments |
|--------------|--------|------------------|
| `DATABASE_URL` | `file:/tmp/prisma.db` | ✅ Required |
| `RESEND_API_KEY` | `re_DwS8BUrs_4PNs9sxsY7BERgyX1ce2eaTb` | ✅ Required |
| `RESEND_FROM_GENERAL` | `info@gurujitechglobal.com` | ✅ Required |
| `RESEND_FROM_CONTACT` | `form@gurujitechglobal.com` | ✅ Required |
| `RESEND_FROM_CAREER` | `career@gurujitechglobal.com` | ✅ Required |
| `CONTACT_NOTIFICATION_EMAIL` | `contact@gurujitechglobal.com` | ✅ Required |

**⚠️ Critical:** Select **"All Environments"** checkbox for each variable!

---

## 🚀 Deployment Steps

### Step 1: Add Environment Variables to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `Guruji-Tech-Global-ltd`
3. Navigate to **Settings** → **Environment Variables**
4. Add all 6 variables from the table above
5. **Important:** Check **"All Environments"** checkbox for each variable
6. Click **Save** for each variable

### Step 2: Deploy to Vercel

1. Go to **Deployments** tab
2. Click on latest deployment
3. Select **Redeploy**
4. Wait for deployment to complete (~2-3 minutes)

### Step 3: Initialize Database (CRITICAL STEP!)

After deployment, you MUST initialize the database by calling the init endpoint:

**Option A: Using cURL**
```bash
curl -X POST https://your-domain.com/api/init-db
```

**Option B: Using Browser**
1. Visit: `https://your-domain.com/api/init-db`
2. This will POST to the endpoint (browser may show OPTIONS error, but backend will process)
3. Or use a tool like Postman to make POST request

**Option C: Automated Call in Code**
Add this to your app initialization or create a simple script that calls this endpoint after the first deployment.

### Step 4: Verify Database is Initialized

Visit the test endpoint:
```
https://your-domain.com/api/test-email
```

**Expected Response (After Initialization):**
```json
{
  "status": "ok",
  "database": {
    "connected": true,
    "tablesExist": true,
    "error": null
  },
  "configuration": {
    "apiKeyPresent": true,
    "emailConfigured": true,
    "databaseConfigured": true
  },
  "issues": [],
  "recommendations": [],
  "initializationEndpoint": "/api/init-db"
}
```

If `tablesExist` is `false`, you'll see:
```json
{
  "issues": [
    "Database tables do not exist - Call POST /api/init-db to initialize"
  ],
  "recommendations": [
    "POST to /api/init-db to initialize database tables"
  ]
}
```

---

## 🧪 Testing After Initialization

### Test Contact Form

1. Visit `/contact` page
2. Fill out the form with your email
3. Submit the form
4. Check for success toast notification
5. Check your email inbox for confirmation

### Test Job Application Form

1. Visit `/careers` page
2. Click on any job
3. Fill out the application form
4. Submit with your email
5. Check for success message
6. Check your email inbox for confirmation

### Check Logs in Vercel

1. Go to Vercel Dashboard → Your Project
2. Click on **Functions** tab
3. Find `/api/contact` or `/api/job-application`
4. Click to view logs

**Look for these messages:**
- ✅ `[Contact API] Received contact form submission`
- ✅ `[Contact API] Successfully saved to database`
- ✅ `[Contact API] Confirmation email sent: true`
- ❌ `[Database] ERROR: Table does not exist`

---

## 🗄️ Database Persistence Notes

### Current Implementation: SQLite on Vercel

**What this means:**
- Database file: `/tmp/prisma.db`
- **Ephemeral storage** - data is lost on each deployment
- Vercel's `/tmp` is cleared when server restarts
- Forms will submit but data won't persist across deployments

### ⚠️ Limitations

1. **No Persistence** - Database resets on every redeploy
2. **No Scaling** - SQLite on `/tmp` is not production-ready
3. **No Backups** - Automatic data loss on redeploy
4. **Testing Only** - Suitable for testing forms work, not production

### 🔧 Recommended: Switch to Vercel Postgres

**For Production Use:**

1. Create Vercel Postgres database:
   - Vercel Dashboard → Storage → Postgres
   - Create database
   - Copy connection string

2. Update Prisma schema:
```prisma
datasource db {
  provider = "postgresql"  // Change from "sqlite"
  url      = env("DATABASE_URL")
}
```

3. Set `DATABASE_URL` in Vercel:
   - Set to Postgres connection string
   - Select "All Environments"

4. Push schema:
```bash
bun run db:push
```

5. Redeploy application

**Benefits of Postgres:**
- ✅ Persistent storage across deployments
- ✅ Automatic backups
- ✅ Scalable performance
- ✅ Production-ready database
- ✅ No data loss on redeploy

---

## 🔍 Troubleshooting

### Issue: Forms Still Fail After Initialization

#### Check 1: Verify Initialization Succeeded

1. Call `POST /api/init-db` again
2. Check response shows `"action": "created"` or `"action": "none"`
3. If `"created"`, tables were created
4. If `"none"`, tables already exist

#### Check 2: Verify Environment Variables

1. Go to Vercel → Settings → Environment Variables
2. Verify `DATABASE_URL` is set to `file:/tmp/prisma.db`
3. Verify all variables have "All Environments" checked
4. Redeploy if needed

#### Check 3: Check Vercel Function Logs

1. Go to Vercel Dashboard → Functions
2. Look for initialization logs:
   ```
   [Database Init] Starting database initialization...
   [Database Init] Creating ContactSubmission table...
   [Database Init] Database initialization completed successfully
   ```
3. Check for table creation errors

#### Check 4: Test Database Connection

1. Visit `/api/test-email`
2. Check `database.connected: true`
3. Check `database.tablesExist: true`

---

## 📊 API Endpoints Summary

| Endpoint | Method | Purpose |
|----------|--------|----------|
| `/api/contact` | POST | Submit contact form |
| `/api/job-application` | POST | Submit job application |
| `/api/test-email` | GET | Test email and database configuration |
| `/api/init-db` | POST | Initialize database tables |

---

## ✅ Pre-Deployment Checklist

Before deploying to Vercel:

- [ ] All 6 environment variables added in Vercel
- [ ] "All Environments" checked for each variable
- [ ] Double-checked variable names (case-sensitive)
- [ ] Copied exact values (no extra quotes)
- [ ] Verified Resend API key is valid
- [ ] Verified sender domains in Resend
- [ ] Ran `bun run lint` (no errors)
- [ ] Tested `/api/test-email` endpoint locally
- [ ] Ready to call `/api/init-db` after deployment

### After Deployment:

- [ ] Application deployed successfully to Vercel
- [ ] Called `POST /api/init-db` to initialize database
- [ ] Verified `/api/test-email` shows `tablesExist: true`
- [ ] Tested contact form submission
- [ ] Tested job application submission
- [ ] Verified emails received in inbox
- [ ] (Optional) Switched to Vercel Postgres for production

---

## 🎯 Quick Fix Summary

To fix the "table does not exist" error:

1. ✅ Add `DATABASE_URL=file:/tmp/prisma.db` in Vercel
2. ✅ Add all 5 email environment variables
3. ✅ Redeploy to Vercel
4. ✅ **CRITICAL:** Call `POST /api/init-db` to initialize tables
5. ✅ Verify `/api/test-email` shows `tablesExist: true`
6. ✅ Test contact and job application forms
7. ✅ (Optional) Upgrade to Vercel Postgres for persistence

**That's it! Your forms will now work!** 🚀

---

## 📞 Need Help?

### Vercel Documentation
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Function Logs](https://vercel.com/docs/deployments/your-deployments#logs)
- [Postgres Database](https://vercel.com/docs/storage/vercel-postgres)

### Resend Support
- [Documentation](https://resend.com/docs)
- [Dashboard](https://resend.com/dashboard)
- [Support](https://resend.com/support)

### Project Details
- **Repository**: Guruji-Tech-Global-ltd
- **Framework**: Next.js 16
- **Database**: Prisma + SQLite (with Vercel Postgres option)
- **Email**: Resend API
- **Issue**: Tables not created in database on Vercel deployment

---

## 📝 Database Init Endpoint Details

**Endpoint:** `POST /api/init-db`

**What it does:**
1. Checks if database directory exists
2. Creates directory if needed
3. Checks if tables already exist
4. Creates `ContactSubmission` table if missing
5. Creates `JobApplication` table if missing
6. Returns status of initialization

**Response Examples:**

Tables Already Exist:
```json
{
  "success": true,
  "message": "Database already initialized",
  "tables": ["ContactSubmission", "JobApplication"],
  "action": "none"
}
```

Tables Created:
```json
{
  "success": true,
  "message": "Database initialized successfully",
  "tables": ["ContactSubmission", "JobApplication"],
  "action": "created"
}
```

---

**Last Updated:** Current deployment
**Fix Status:** ✅ Complete - Database initialization endpoint created
**Ready for Deployment:** ✅ Yes - After calling init-db endpoint
