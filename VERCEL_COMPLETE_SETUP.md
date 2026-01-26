# Vercel Deployment Setup Guide

## 🚨 Issue: Forms Not Submitting

**Error Message:**
```
[PrismaClientInitializationError]: Invalid `prisma.jobApplication.create()` invocation:
error: Environment variable not found: DATABASE_URL.
```

**Root Cause:** The `DATABASE_URL` environment variable is not configured in Vercel.

---

## 📋 Required Environment Variables

Add these variables in **Vercel Dashboard** → **Settings** → **Environment Variables**:

### For Email Service

| Variable Name | Value | All Environments |
|--------------|--------|------------------|
| `RESEND_API_KEY` | `re_DwS8BUrs_4PNs9sxsY7BERgyX1ce2eaTb` | ✅ Required |
| `RESEND_FROM_GENERAL` | `info@gurujitechglobal.com` | ✅ Required |
| `RESEND_FROM_CONTACT` | `form@gurujitechglobal.com` | ✅ Required |
| `RESEND_FROM_CAREER` | `career@gurujitechglobal.com` | ✅ Required |
| `CONTACT_NOTIFICATION_EMAIL` | `contact@gurujitechglobal.com` | ✅ Required |

### For Database

| Variable Name | Value | All Environments |
|--------------|--------|------------------|
| `DATABASE_URL` | `file:/tmp/prisma.db` | ✅ Required (for now) |

**⚠️ Important Notes:**
- ✅ **Check "All Environments"** checkbox for each variable
- ❌ **No spaces** around the equal sign
- ✅ **Double-check** variable names (case-sensitive)
- ✅ **Copy exact values** (no extra quotes)

---

## 📝 Step-by-Step Setup

### Step 1: Access Vercel Project Settings

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `Guruji-Tech-Global-ltd`
3. Navigate to **Settings** → **Environment Variables**

### Step 2: Add Environment Variables

Add each variable one at a time:

#### Email Variables

1. **RESEND_API_KEY**
   - Name: `RESEND_API_KEY`
   - Value: `re_DwS8BUrs_4PNs9sxsY7BERgyX1ce2eaTb`
   - Environments: Select **"All Environments"** checkbox
   - Click **Save**

2. **RESEND_FROM_GENERAL**
   - Name: `RESEND_FROM_GENERAL`
   - Value: `info@gurujitechglobal.com`
   - Environments: Select **"All Environments"** checkbox
   - Click **Save**

3. **RESEND_FROM_CONTACT**
   - Name: `RESEND_FROM_CONTACT`
   - Value: `form@gurujitechglobal.com`
   - Environments: Select **"All Environments"** checkbox
   - Click **Save**

4. **RESEND_FROM_CAREER**
   - Name: `RESEND_FROM_CAREER`
   - Value: `career@gurujitechglobal.com`
   - Environments: Select **"All Environments"** checkbox
   - Click **Save**

5. **CONTACT_NOTIFICATION_EMAIL**
   - Name: `CONTACT_NOTIFICATION_EMAIL`
   - Value: `contact@gurujitechglobal.com`
   - Environments: Select **"All Environments"** checkbox
   - Click **Save**

#### Database Variable

6. **DATABASE_URL**
   - Name: `DATABASE_URL`
   - Value: `file:/tmp/prisma.db`
   - Environments: Select **"All Environments"** checkbox
   - Click **Save**

### Step 3: Redeploy Application

1. Go to **Deployments** tab in Vercel
2. Find the latest deployment
3. Click the **...** (three dots) menu
4. Select **Redeploy**
5. Wait for deployment to complete (~2-3 minutes)

### Step 4: Verify Configuration

Visit the test endpoint:
```
https://your-domain.com/api/test-email
```

**Expected Response (Success):**
```json
{
  "status": "ok",
  "database": {
    "connected": true,
    "error": null
  },
  "configuration": {
    "apiKeyPresent": true,
    "emailConfigured": true,
    "notificationConfigured": true,
    "databaseConfigured": true
  },
  "issues": [],
  "recommendations": []
}
```

---

## 🗄️ Database Important Information

### Current Implementation: SQLite on Vercel

**What's happening:**
- Database is created at: `/tmp/prisma.db`
- This is **ephemeral storage** (deleted when server restarts)
- Data will be lost on each deployment
- Forms will submit but data won't persist

### ⚠️ Limitations

1. **No persistence** - Database resets on every deployment
2. **No scaling** - SQLite on /tmp is not production-ready
3. **No backups** - Automatic data loss risk
4. **Testing only** - Suitable for testing forms work

### 🔧 Recommended Database Solutions

#### Option 1: Vercel Postgres (Recommended)

**Advantages:**
- ✅ Persistent storage
- ✅ Automatic backups
- ✅ Scalable
- ✅ Production-ready
- ✅ Fast performance

**Setup:**
1. Create Vercel Postgres database
2. Get connection string from Vercel
3. Set `DATABASE_URL` to connection string
4. Update Prisma schema to use `postgresql` provider

**Prisma Schema Change:**
```prisma
datasource db {
  provider = "postgresql"  // Change from "sqlite"
  url      = env("DATABASE_URL")
}
```

**Migration:**
```bash
bun run db:push  # Push to Postgres
```

#### Option 2: Vercel KV (for simple key-value storage)

**Advantages:**
- ✅ Persistent storage
- ✅ Fast for simple data
- ✅ Built-in to Vercel
- ✅ No schema migrations needed

**Use for:**
- Contact form submissions (storing JSON)
- Job applications (storing JSON)
- Simple data storage needs

#### Option 3: External Database (Custom)

**Options:**
- PlanetScale (MySQL)
- Neon (PostgreSQL)
- Supabase (PostgreSQL)
- Turso (SQLite edge)

---

## 🧪 Testing Forms After Setup

### Test Contact Form

1. Visit `/contact` page
2. Fill out the form with your email
3. Click "Send Message"
4. Check for success toast
5. Check your email inbox for confirmation
6. Check `/api/test-email` for status

### Test Job Application Form

1. Visit `/careers` page
2. Click on any job
3. Fill out the application form
4. Submit with your email
5. Check for success message
6. Check your email inbox for confirmation
7. Check `/api/test-email` for status

---

## 🔍 Troubleshooting

### Issue: Forms Still Fail After Adding Environment Variables

#### Check 1: Verify "All Environments" Selected

1. Go to Vercel → Settings → Environment Variables
2. For each variable, ensure **"All Environments"** is checked
3. If not, click the checkbox and redeploy

#### Check 2: Wait for Redeployment

After adding variables:
- Wait for redeploy to complete (2-3 minutes)
- Check deployment was successful
- Don't test during deployment

#### Check 3: Check Function Logs

1. Go to Vercel Dashboard → Your Project
2. Click on **Functions** tab
3. Find `/api/contact` or `/api/job-application`
4. Click to view logs

**Look for these messages:**
- ✅ `[Contact API] Received contact form submission`
- ✅ `[Contact API] Successfully saved to database`
- ✅ `[Contact API] Confirmation email sent: true`
- ❌ `[Database] ERROR: DATABASE_URL not configured`

#### Check 4: Test Endpoint Response

Visit `/api/test-email` and check:
- `database.connected: true` - Database is working
- `configuration.emailConfigured: true` - Email is configured
- `issues: []` - No configuration issues

### Issue: Email Not Sending

#### Check 1: Domain Verification

1. Log in to [Resend Dashboard](https://resend.com/dashboard)
2. Go to **Settings** → **Domains**
3. Verify `gurujitechglobal.com` is verified
4. If not, add the domain and follow DNS instructions

#### Check 2: API Key Validity

1. In Resend Dashboard, check API Keys
2. Ensure key is active and not expired
3. Key should start with `re_`

### Issue: Database Resets on Deployment

This is **expected behavior** with current SQLite setup.

**Solution:** Switch to Vercel Postgres for production persistence.

---

## 📊 Monitoring in Production

### Check These Locations

1. **Vercel Function Logs**
   - Real-time API route logs
   - Database connection status
   - Email sending status
   - Error messages with details

2. **Resend Dashboard**
   - Email delivery status
   - Failed sends with error reasons
   - Bounce and complaint tracking

3. **Database** (if using Postgres)
   - Contact submissions
   - Job applications
   - Data persistence

---

## ✅ Pre-Deployment Checklist

Before deploying to production:

- [ ] Added all 6 environment variables in Vercel
- [ ] Selected "All Environments" for each variable
- [ ] Double-checked variable names (case-sensitive)
- [ ] Verified Resend API key is valid
- [ ] Verified sender domains in Resend
- [ ] Ran `bun run lint` (no errors)
- [ ] Set up Vercel Postgres database (recommended)
- [ ] Tested `/api/test-email` endpoint
- [ ] Tested contact form submission
- [ ] Tested job application submission
- [ ] Verified email delivery in inbox

---

## 🚀 Production Deployment Steps

1. **Configure Vercel Postgres** (recommended for production)
   - Vercel Dashboard → Storage → Postgres
   - Create database
   - Copy connection string

2. **Update DATABASE_URL**
   - Set `DATABASE_URL` to Postgres connection string
   - Update schema provider to `postgresql`

3. **Push Database Schema**
   ```bash
   bun run db:push
   ```

4. **Add Email Variables**
   - Add all 5 email environment variables
   - Select "All Environments"

5. **Redeploy**
   - Deploy latest changes
   - Wait for successful deployment

6. **Verify**
   - Visit `/api/test-email`
   - Test contact form
   - Test job application
   - Check email delivery

---

## 📞 Need Help?

### Vercel Documentation
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Postgres Database](https://vercel.com/docs/storage/vercel-postgres)
- [Function Logs](https://vercel.com/docs/deployments/your-deployments#logs)

### Resend Support
- [Documentation](https://resend.com/docs)
- [Dashboard](https://resend.com/dashboard)
- [Support](https://resend.com/support)

### Project Details
- **Repository**: Guruji-Tech-Global-ltd
- **Framework**: Next.js 16
- **Database**: Prisma (SQLite/PostgreSQL)
- **Email**: Resend API

---

## 🎉 Quick Fix Summary

To fix immediate form submission issues:

1. Add `DATABASE_URL=file:/tmp/prisma.db` in Vercel
2. Add all 5 email environment variables
3. Redeploy in Vercel
4. Test forms
5. For production: Switch to Vercel Postgres

That's it! Your forms should now work! 🚀
