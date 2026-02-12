#!/bin/bash

# Chatbot Configuration Setup Script
# This script helps set up the .z-ai-config file for the chatbot

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration file paths
EXAMPLE_CONFIG=".z-ai-config.example"
CONFIG_FILE=".z-ai-config"

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║          ZAI Chatbot Configuration Setup Script                 ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Check if example config exists
if [ ! -f "$EXAMPLE_CONFIG" ]; then
    echo -e "${RED}Error: $EXAMPLE_CONFIG not found!${NC}"
    echo "Please run this script from the project root directory."
    exit 1
fi

# Check if config already exists
if [ -f "$CONFIG_FILE" ]; then
    echo -e "${YELLOW}Warning: $CONFIG_FILE already exists!${NC}"
    echo ""
    read -p "Do you want to overwrite it? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Setup cancelled."
        exit 0
    fi
    echo -e "${YELLOW}Backing up existing configuration to $CONFIG_FILE.backup${NC}"
    cp "$CONFIG_FILE" "$CONFIG_FILE.backup"
fi

# Copy example config
echo -e "${BLUE}Creating $CONFIG_FILE from example...${NC}"
cp "$EXAMPLE_CONFIG" "$CONFIG_FILE"

echo ""
echo -e "${GREEN}✓ Configuration file created!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Edit $CONFIG_FILE with your API credentials"
echo "2. Update the 'baseUrl' and 'apiKey' fields with your actual values"
echo "3. (Optional) Add 'chatId' and 'userId' if needed"
echo "4. Restart your development server"
echo "5. Check configuration at http://localhost:3000/api/chatbot/config"
echo ""

# Ask if user wants to edit now
read -p "Do you want to edit the configuration file now? (y/N): " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Try to find a suitable editor
    if command -v code &> /dev/null; then
        code "$CONFIG_FILE"
    elif command -v nano &> /dev/null; then
        nano "$CONFIG_FILE"
    elif command -v vim &> /dev/null; then
        vim "$CONFIG_FILE"
    else
        echo -e "${YELLOW}No common editor found. Please edit $CONFIG_FILE manually.${NC}"
    fi
fi

echo ""
echo -e "${GREEN}Setup complete!${NC}"
echo ""
echo -e "${BLUE}To verify your configuration, run:${NC}"
echo "  curl http://localhost:3000/api/chatbot/config"
echo ""
echo -e "${BLUE}For more information, see:${NC}"
echo "  - CHATBOT_SETUP.md"
echo "  - $EXAMPLE_CONFIG"
