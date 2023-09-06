/// <reference types="vitest" />
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  root: resolve(__dirname),
  plugins: [tsconfigPaths()],
  build: {
    target: 'esnext',
  },
  test: {
    globals: true,
    include: ['./**/*{.spec,.test}.{ts,tsx}'],
    includeSource: ['./**/*.{ts,tsx}'],
    environment: 'happy-dom',
    reporters: ['dot'],
    deps: {},
    useAtomics: true,
    passWithNoTests: true,
  },
});
