# Email Service Setup Guide for Vercel Deployment

## 🔧 Environment Variables Required

For the email service to work on Vercel, you must configure the following environment variables in your Vercel project settings:

### Required Variables

```
RESEND_API_KEY=re_DwS8BUrs_4PNs9sxsY7BERgyX1ce2eaTb
RESEND_FROM_GENERAL=info@gurujitechglobal.com
RESEND_FROM_CONTACT=form@gurujitechglobal.com
RESEND_FROM_CAREER=career@gurujitechglobal.com
CONTACT_NOTIFICATION_EMAIL=contact@gurujitechglobal.com
```

## 📋 Step-by-Step Setup

### 1. Access Vercel Project Settings

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `Guruji-Tech-Global-ltd`
3. Go to **Settings** → **Environment Variables**

### 2. Add Environment Variables

Add each variable with the exact name and value:

| Variable Name | Value | Description |
|--------------|--------|-------------|
| `RESEND_API_KEY` | `re_DwS8BUrs_4PNs9sxsY7BERgyX1ce2eaTb` | Resend API key for sending emails |
| `RESEND_FROM_GENERAL` | `info@gurujitechglobal.com` | Default sender for general emails |
| `RESEND_FROM_CONTACT` | `form@gurujitechglobal.com` | Sender for contact form emails |
| `RESEND_FROM_CAREER` | `career@gurujitechglobal.com` | Sender for job application emails |
| `CONTACT_NOTIFICATION_EMAIL` | `contact@gurujitechglobal.com` | Recipient for contact notifications |

**Important:**
- Make sure to select **All Environments** (Production, Preview, Development)
- Double-check for typos in variable names
- No spaces around the equal sign
- Values should be exact, no extra quotes

### 3. Redeploy After Adding Variables

After adding environment variables:

1. Go to **Deployments** tab
2. Click the **...** menu on the latest deployment
3. Select **Redeploy**
4. Wait for the deployment to complete

## 🧪 Test Email Configuration

### Use the Test Endpoint

After deployment, test the email configuration:

```
https://your-domain.com/api/test-email
```

This endpoint returns:
- ✅ Environment variable status
- ✅ Configuration validation
- ❌ Any missing or misconfigured variables

### Expected Response (Success):

```json
{
  "status": "ok",
  "timestamp": "2025-01-15T10:30:00.000Z",
  "environment": {
    "resendApiKey": true,
    "resendFromGeneral": true,
    "resendFromContact": true,
    "resendFromCareer": true,
    "contactNotificationEmail": true,
    "nodeEnv": "production"
  },
  "configuration": {
    "apiKeyPresent": true,
    "emailConfigured": true,
    "notificationConfigured": true
  },
  "issues": []
}
```

### Expected Response (Missing Variables):

```json
{
  "status": "ok",
  "configuration": {
    "apiKeyPresent": false,
    "emailConfigured": false
  },
  "issues": [
    "RESEND_API_KEY is not configured",
    "RESEND_FROM_GENERAL is not configured"
  ]
}
```

## 🔍 Troubleshooting

### Issue: Email Not Sending

#### Check 1: Environment Variables

1. Visit `/api/test-email` endpoint
2. Verify all required variables are present
3. If any are missing, add them in Vercel settings and redeploy

#### Check 2: Verify Resend API Key

1. Log in to [Resend Dashboard](https://resend.com/dashboard)
2. Verify API key is valid and active
3. Check if key has proper permissions
4. Ensure sender emails are verified in Resend

#### Check 3: Domain Verification

Resend requires sender domains to be verified. Make sure these domains are verified:
- `gurujitechglobal.com`
- Any custom domains you're using

**To verify domain in Resend:**
1. Go to Settings → Domains
2. Add domain: `gurujitechglobal.com`
3. Add DNS records as instructed
4. Wait for DNS propagation (may take up to 24 hours)

#### Check 4: Vercel Function Logs

1. Go to Vercel Dashboard → Your Project
2. Click on the failed function execution
3. Check the logs for email service errors

**Look for these error messages:**
- `[Email Service] ERROR: RESEND_API_KEY not configured`
- `[Email Service] ERROR: Failed to get Resend client`
- `[Email Service] Resend API returned error`

#### Check 5: Contact Form Behavior

After submitting the contact form:
- Form should still submit successfully (saves to database)
- Toast notification shows success
- Check browser console and Vercel logs for errors
- Email may fail silently if API key is missing

## 📊 Monitoring Email Service

### In Production

Check these locations for email status:

1. **Vercel Function Logs**
   - Real-time logs from API routes
   - Error messages from email service

2. **Resend Dashboard**
   - Email sending history
   - Failed attempts with error reasons
   - Bounced/undelivered emails

3. **Database**
   - Contact submissions are saved even if email fails
   - Check `contactSubmission` table

## ⚠️ Common Errors & Solutions

### Error: "RESEND_API_KEY not configured"

**Cause:** Environment variable not set in Vercel

**Solution:**
1. Go to Vercel → Settings → Environment Variables
2. Add `RESEND_API_KEY` with your key
3. Select "All Environments"
4. Redeploy

### Error: "Resend API returned error: 401 Unauthorized"

**Cause:** Invalid or expired API key

**Solution:**
1. Generate new API key in Resend Dashboard
2. Update `RESEND_API_KEY` in Vercel
3. Redeploy

### Error: "Resend API returned error: From domain is not verified"

**Cause:** Sender domain not verified in Resend

**Solution:**
1. Verify domain in Resend Dashboard → Domains
2. Add required DNS records to your domain provider
3. Wait for DNS propagation

### Error: Email sending fails silently

**Cause:** Email service error caught but not logged properly

**Solution:**
1. Enhanced logging is now in place
2. Check Vercel function logs
3. Look for `[Email Service]` prefixed messages

## ✅ Verification Checklist

Before considering email service working:

- [ ] All environment variables added in Vercel
- [ ] Environment variables set to "All Environments"
- [ ] Domain verified in Resend
- [ ] Test endpoint shows all variables present
- [ ] Test email sent successfully
- [ ] Check Resend dashboard shows sent email
- [ ] Verify email received in inbox

## 📝 Test Email Form

After setup, test the email service:

1. Go to `/contact` page
2. Fill out the form with real email
3. Submit the form
4. Check your email inbox
5. Check Resend dashboard for delivery status

## 🆘 Need Help?

If email service still not working after following this guide:

1. Check Vercel function logs for detailed error messages
2. Verify Resend API key is valid and not expired
3. Ensure sender domain is verified in Resend
4. Check Resend dashboard for any account-level restrictions

## 📞 Contact Information

- **Vercel Support**: https://vercel.com/support
- **Resend Support**: https://resend.com/support
- **Project**: Guruji Tech Global Ltd
