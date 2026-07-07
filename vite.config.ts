import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react({ jsxRuntime: 'automatic' }), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { port: 3000, open: true },
  test: {
    environment: 'jsdom',
    globals: false,
    setupFiles: ['./src/test/setup.ts'],
    css: false,
    restoreMocks: true,
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
  },
  build: {
    target: 'esnext',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    modulePreload: { polyfill: false },
    // The SSR build (prerender step) is a single Node module — manual vendor
    // chunking only applies to the client build.
    rolldownOptions: isSsrBuild
      ? {}
      : {
          output: {
            // Split heavy third-party libraries into their own
            // long-term-cacheable chunks instead of one large monolithic bundle.
            manualChunks(id) {
              if (!id.includes('node_modules')) return;
              if (id.includes('/motion/') || id.includes('framer-motion'))
                return 'motion';
              if (
                id.includes('/react-dom/') ||
                id.includes('/react/') ||
                id.includes('/scheduler/')
              )
                return 'react';
            },
          },
        },
  },
}));
