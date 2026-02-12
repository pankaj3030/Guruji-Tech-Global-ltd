# Guruji Tech Global Website

Official website for Guruji Tech Global Ltd - an IT solutions company based in Coventry, UK.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Chatbot Setup

The website includes an AI-powered chatbot that can operate in two modes:

1. **AI Mode** - Full AI capabilities (requires configuration)
2. **Fallback Mode** - Rule-based responses (default)

### Enable AI Mode

To enable AI mode for the chatbot:

```bash
# Run the setup script
pnpm chatbot:setup

# Or manually:
# 1. Copy the example config
cp .z-ai-config.example .z-ai-config

# 2. Edit .z-ai-config with your API credentials
# 3. Restart the dev server
pnpm dev
```

### Check Configuration Status

Visit `http://localhost:3000/api/chatbot/config` to verify your configuration.

For detailed setup instructions, see [CHATBOT_SETUP.md](./CHATBOT_SETUP.md).

## Features

- **Service Pages**: Comprehensive service catalog with SEO-friendly routes
- **Blog Section**: Dynamic blog with multiple posts
- **Contact Forms**: Contact form and job application submissions
- **AI Chatbot**: Intelligent assistant with lead collection
- **Cookie Consent**: GDPR-compliant cookie management
- **Analytics**: Google Analytics, Ads, and Tag Manager integration
- **Responsive Design**: Mobile-first design with Tailwind CSS

## Database Setup

The application uses SQLite with Prisma ORM:

```bash
# Generate Prisma client
pnpm db:generate

# Run migrations
pnpm db:migrate

# Reset database
pnpm db:reset
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Prisma + SQLite
- **Email**: Resend API
- **AI**: z-ai-web-dev-sdk

## Documentation

- [CHATBOT_SETUP.md](./CHATBOT_SETUP.md) - Chatbot configuration guide
- [CHATBOT_API.md](./CHATBOT_API.md) - Chatbot API documentation (if available)
- `.z-ai-config.example` - Example chatbot configuration

## Environment Variables

Create a `.env.local` file for local development:

```env
# Email Configuration
RESEND_API_KEY=your-resend-api-key
CONTACT_NOTIFICATION_EMAIL=contact@gurujitechglobal.com
RESEND_FROM_CONTACT=form@gurujitechglobal.com

# Optional: ZAI Configuration (or use .z-ai-config file)
ZAI_BASE_URL=https://your-api-endpoint.com/v1
ZAI_API_KEY=your-api-key-here
```

## Deployment

The project is configured for standalone deployment:

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## Support

For support, contact:
- **Email**: contact@gurujitechglobal.com
- **Phone**: +44-7488564873
- **Website**: https://www.gurujitechglobal.com
