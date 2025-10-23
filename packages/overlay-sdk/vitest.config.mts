import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

const rootDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['test/**/*.test.ts'],
    setupFiles: [resolve(rootDir, 'test', 'setup.ts')],
    coverage: {
      provider: 'v8',
      reporter: ['html', 'json-summary'],
      reportsDirectory: resolve(rootDir, 'coverage'),
      exclude: [
        'test/**/*',
        'dist/**/*',
        '**/*.d.ts',
        '**/*.config.*',
        '**/node_modules/**',
        '**/assets/**',
        '**/abis/**',
      ],
    },
  },
  resolve: {
    alias: {
      '@src': resolve(rootDir, 'src'),
    },
  },
});
