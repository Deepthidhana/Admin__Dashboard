/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1000, // Set limit to 1000 KB
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }

          //modify code to split components into their own chunk
          if (id.includes('src')) {
            return 'components';
          }
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true, // to render/test css
    testTimeout: 1000, // timeout for long-running tests
    reporters: ['verbose'], // to provide failed tests in detailed explanation

    coverage: {
      //code-coverage

      thresholds: {
        statements: 90,
        functions: 90,
        lines: 90,
        branches: 90,
      },
    },
  },
});
