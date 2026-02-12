# Chatbot Setup Guide

This guide explains how to configure and enable AI mode for the Guruji Tech Global chatbot.

## Overview

The chatbot can operate in two modes:

1. **AI Mode** (Full AI capabilities powered by the ZAI SDK)
2. **Fallback Mode** (Rule-based responses when AI is not configured)

By default, the chatbot starts in fallback mode until a valid `.z-ai-config` file is provided.

## Quick Setup

### Step 1: Create Configuration File

Copy the example configuration file:

```bash
cp .z-ai-config.example .z-ai-config
```

### Step 2: Add Your API Credentials

Edit the `.z-ai-config` file with your actual API credentials:

```json
{
  "baseUrl": "https://your-api-endpoint.com/v1",
  "apiKey": "your-actual-api-key-here",
  "chatId": "optional-chat-identifier",
  "userId": "optional-user-identifier"
}
```

**Required fields:**
- `baseUrl`: Your AI API endpoint URL (e.g., `https://api.openai.com/v1`)
- `apiKey`: Your API authentication key

**Optional fields:**
- `chatId`: Optional identifier for chat sessions
- `userId`: Optional identifier for user tracking

### Step 3: Restart Your Server

Restart your development server for the configuration to be loaded:

```bash
# If using npm
npm run dev

# If using bun
bun run dev

# If using pnpm
pnpm dev
```

### Step 4: Verify Configuration

Check the configuration status by visiting:

```
http://localhost:3000/api/chatbot/config
```

This endpoint will show you:
- Whether AI mode is enabled
- The configuration file path
- Any warnings or errors
- Setup instructions if configuration is invalid

## Configuration Details

### Where to Place the Configuration File

The `.z-ai-config` file can be placed in one of three locations (checked in this order):

1. **Project root** (recommended): `/path/to/project/.z-ai-config`
2. **Home directory**: `~/.z-ai-config`
3. **System-wide**: `/etc/.z-ai-config`

### Configuration File Format

The configuration file must be valid JSON with the following structure:

```json
{
  "baseUrl": "https://api.example.com/v1",
  "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "chatId": "optional-chat-id",
  "userId": "optional-user-id"
}
```

#### baseUrl
- Type: string
- Required: Yes
- Description: Your AI API endpoint URL
- Examples:
  - OpenAI: `"https://api.openai.com/v1"`
  - Custom: `"https://api.your-service.com/v1"`
  - Must include protocol (http/https)

#### apiKey
- Type: string
- Required: Yes
- Description: Your API authentication key
- Example: `"sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`
- **Security Note**: Keep this secret and never commit to version control

#### chatId
- Type: string
- Required: No
- Description: Optional identifier for chat sessions
- Use case: Tracking conversations in the AI system

#### userId
- Type: string
- Required: No
- Description: Optional identifier for user tracking
- Use case: Personalization and analytics

## Security Best Practices

### 1. Never Commit Configuration to Git

The `.z-ai-config` file is already included in `.gitignore`. Do not remove it!

### 2. Use Environment Variables in Production

For enhanced security, consider using environment variables:

```env
# .env.local
ZAI_BASE_URL=https://your-api-endpoint.com/v1
ZAI_API_KEY=your-api-key-here
ZAI_CHAT_ID=optional-chat-id
ZAI_USER_ID=optional-user-id
```

Then reference them in your `.z-ai-config` (note: you'd need to modify the setup script to support this).

### 3. Rotate API Keys Regularly

Periodically rotate your API keys and update the `.z-ai-config` file.

### 4. Use Different Keys for Development and Production

Use separate API keys for development and production environments.

## Troubleshooting

### Chatbot Still in Fallback Mode

If you've set up the configuration but the chatbot still uses fallback mode:

1. **Check Server Logs**
   - Look for validation errors in the server console
   - The chatbot logs configuration status on startup

2. **Verify JSON Syntax**
   - Ensure the `.z-ai-config` file is valid JSON
   - Use a JSON validator like [jsonlint.com](https://jsonlint.com)

3. **Check Required Fields**
   - Ensure both `baseUrl` and `apiKey` are present
   - Verify they are not placeholder values

4. **Validate URL Format**
   - Ensure `baseUrl` is a complete, valid URL
   - Must include protocol (http:// or https://)
   - Example: `https://api.openai.com/v1` (not `api.openai.com/v1`)

5. **Check File Permissions**
   - Ensure the `.z-ai-config` file is readable
   - On Unix: `chmod 644 .z-ai-config`

6. **Verify File Location**
   - Ensure the file is in the correct location
   - Project root is preferred
   - Check the `/api/chatbot/config` endpoint for the detected path

7. **Restart Server**
   - Configuration is loaded on first request
   - Restart the server to force re-initialization

### Common Errors

#### "No .z-ai-config file found in any standard location"

**Cause**: Configuration file doesn't exist or is in an unexpected location

**Solution**:
1. Create `.z-ai-config` in the project root
2. Or place it in your home directory (`~/.z-ai-config`)
3. Ensure the filename is exactly `.z-ai-config` (not `.z-ai-config.json`)

#### "baseUrl must be a valid URL"

**Cause**: The `baseUrl` is not a properly formatted URL

**Solution**:
1. Include the protocol: `https://` or `http://`
2. Example: `https://api.openai.com/v1`
3. Don't include trailing slashes: `/v1` (not `/v1/`)

#### "Missing required field: baseUrl" or "Missing required field: apiKey"

**Cause**: One or more required fields are missing from the configuration

**Solution**:
1. Add the missing field(s) to your `.z-ai-config`
2. Ensure field names are spelled correctly (case-sensitive)
3. Check for typos like `apikey` instead of `apiKey`

#### "apiKey appears to be a placeholder value"

**Cause**: The `apiKey` field still contains the example value

**Solution**:
1. Replace `your-api-key-here` with your actual API key
2. Don't use example values from the `.z-ai-config.example` file

### Testing the Configuration

Use the configuration check endpoint:

```bash
curl http://localhost:3000/api/chatbot/config
```

Expected response (when configured):

```json
{
  "success": true,
  "aiModeEnabled": true,
  "config": {
    "path": "/path/to/project/.z-ai-config",
    "baseUrl": "https://api.example.com/v1",
    "hasApiKey": true,
    "hasChatId": false,
    "hasUserId": false
  },
  "warnings": [],
  "error": null
}
```

Expected response (when not configured):

```json
{
  "success": true,
  "aiModeEnabled": false,
  "config": null,
  "warnings": [],
  "error": "No .z-ai-config file found in any standard location.",
  "setupInstructions": "..."
}
```

## API Endpoints

### Chatbot API
- **Endpoint**: `POST /api/chatbot`
- **Description**: Main chatbot endpoint for sending messages
- **Request Body**:
  ```json
  {
    "sessionId": "optional-session-id",
    "message": "Your message here"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "response": "AI response",
    "messageCount": 5,
    "leadCollectionMode": false,
    "leadStep": 0
  }
  ```

### Configuration Status
- **Endpoint**: `GET /api/chatbot/config`
- **Description**: Check chatbot configuration status
- **Response**: See examples above

### Clear Conversation
- **Endpoint**: `DELETE /api/chatbot?sessionId=your-session-id`
- **Description**: Clear conversation history for a session
- **Response**:
  ```json
  {
    "success": true,
    "message": "Conversation and lead data cleared successfully"
  }
  ```

## Features

### Lead Collection Mode

The chatbot includes a lead collection flow that activates when users inquire about website development. This feature works in both AI and fallback modes.

**Triggers**: Messages like "I need a website", "build a website", "web development", etc.

**Flow**:
1. Detects website development interest
2. Collects: name, email, phone, company, website type, features, budget, timeline
3. Sends lead notification email to the business
4. Returns to normal conversation mode

### System Prompt

The AI uses a system prompt that provides context about Guruji Tech Global:

- Company information (location, contact details)
- Services offered (12 service categories)
- Role and guidelines for the AI assistant
- Response style and behavior

## Support

For issues or questions:

1. Check this documentation
2. Review the `.z-ai-config.example` file
3. Check server logs for error messages
4. Visit `/api/chatbot/config` for configuration status
5. Contact the development team

## Additional Resources

- `.z-ai-config.example` - Example configuration file with comments
- `.z-ai-config` - Your actual configuration file (don't edit .example)
- `/api/chatbot/config` - Configuration status endpoint
- `/api/chatbot` - Main chatbot API endpoint
- `src/lib/zai-config.ts` - Configuration validation utilities
- `src/app/api/chatbot/route.ts` - Chatbot API route implementation
