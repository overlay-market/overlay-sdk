import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { config as loadEnv } from 'dotenv';
import { beforeAll, afterAll } from 'vitest';

process.env.DOTENV_CONFIG_SILENT = 'true';
const cwd = process.cwd();

const originalConsoleLog = console.log;

console.log = (...args: unknown[]) => {
  if (typeof args[0] === 'string' && args[0].startsWith('[dotenv@')) return;
  originalConsoleLog(...args);
};

const defaultEnvFiles = ['.env', process.env.TEST_ENV_FILE ?? '.env.test'];

for (const file of defaultEnvFiles) {
  const envPath = resolve(cwd, file);
  if (existsSync(envPath)) {
    loadEnv({
      path: envPath,
      override: true,
    });
  }
}

process.env.TZ = 'UTC';

beforeAll(() => {
  vi.resetModules();
});

afterAll(() => {
  console.log = originalConsoleLog;
  vi.restoreAllMocks();
});
