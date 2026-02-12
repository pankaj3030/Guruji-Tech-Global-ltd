/**
 * ZAI Configuration Validator Tests
 *
 * This file contains tests for the ZAI configuration validator.
 * Run with: bun test src/lib/zai-config.test.ts
 */

import { describe, it, expect, beforeEach } from 'bun:test';
import { ZAIConfigValidator } from './zai-config';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

describe('ZAIConfigValidator', () => {
  const testConfigPath = path.join(os.tmpdir(), '.z-ai-config-test');

  beforeEach(async () => {
    // Clean up test config file before each test
    try {
      await fs.unlink(testConfigPath);
    } catch {
      // File doesn't exist, that's fine
    }
  });

  describe('validateConfigObject', () => {
    it('should validate a complete configuration', async () => {
      const validConfig = {
        baseUrl: 'https://api.openai.com/v1',
        apiKey: 'sk-test123456789',
        chatId: 'test-chat',
        userId: 'test-user'
      };

      // Write test config
      await fs.writeFile(testConfigPath, JSON.stringify(validConfig), 'utf-8');

      const result = await ZAIConfigValidator.validateConfig();
      expect(result.valid).toBe(true);
      expect(result.config).toEqual(validConfig);
    });

    it('should validate minimal configuration', async () => {
      const minimalConfig = {
        baseUrl: 'https://api.example.com/v1',
        apiKey: 'test-key'
      };

      await fs.writeFile(testConfigPath, JSON.stringify(minimalConfig), 'utf-8');

      const result = await ZAIConfigValidator.validateConfig();
      expect(result.valid).toBe(true);
      expect(result.config?.baseUrl).toBe('https://api.example.com/v1');
    });

    it('should reject configuration with missing baseUrl', async () => {
      const invalidConfig = {
        apiKey: 'test-key'
      };

      await fs.writeFile(testConfigPath, JSON.stringify(invalidConfig), 'utf-8');

      const result = await ZAIConfigValidator.validateConfig();
      expect(result.valid).toBe(false);
      expect(result.error).toContain('Missing required field: baseUrl');
    });

    it('should reject configuration with missing apiKey', async () => {
      const invalidConfig = {
        baseUrl: 'https://api.example.com/v1'
      };

      await fs.writeFile(testConfigPath, JSON.stringify(invalidConfig), 'utf-8');

      const result = await ZAIConfigValidator.validateConfig();
      expect(result.valid).toBe(false);
      expect(result.error).toContain('Missing required field: apiKey');
    });

    it('should reject invalid URL', async () => {
      const invalidConfig = {
        baseUrl: 'not-a-valid-url',
        apiKey: 'test-key'
      };

      await fs.writeFile(testConfigPath, JSON.stringify(invalidConfig), 'utf-8');

      const result = await ZAIConfigValidator.validateConfig();
      expect(result.valid).toBe(false);
      expect(result.error).toContain('baseUrl must be a valid URL');
    });

    it('should warn about placeholder values', async () => {
      const placeholderConfig = {
        baseUrl: 'https://your-api-endpoint.com/v1',
        apiKey: 'your-api-key-here'
      };

      await fs.writeFile(testConfigPath, JSON.stringify(placeholderConfig), 'utf-8');

      const result = await ZAIConfigValidator.validateConfig();
      expect(result.valid).toBe(true);
      expect(result.warnings.length).toBeGreaterThan(0);
      expect(result.warnings.some(w => w.includes('placeholder'))).toBe(true);
    });

    it('should handle invalid JSON', async () => {
      await fs.writeFile(testConfigPath, '{ invalid json }', 'utf-8');

      const result = await ZAIConfigValidator.validateConfig();
      expect(result.valid).toBe(false);
      expect(result.error).toContain('Invalid JSON');
    });
  });

  describe('generateSetupInstructions', () => {
    it('should generate setup instructions', () => {
      const instructions = ZAIConfigValidator.generateSetupInstructions();
      expect(instructions).toContain('ZAI Configuration Setup Guide');
      expect(instructions).toContain('baseUrl');
      expect(instructions).toContain('apiKey');
      expect(instructions).toContain('.z-ai-config');
    });
  });

  describe('getConfigLocations', () => {
    it('should return standard config locations', () => {
      const locations = ZAIConfigValidator.getConfigLocations();
      expect(locations.length).toBe(3);
      expect(locations[0].description).toContain('Project root');
      expect(locations[1].description).toContain('Home directory');
      expect(locations[2].description).toContain('System-wide');
    });
  });
});
