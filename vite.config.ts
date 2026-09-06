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
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      // Type-only, entry, and generated files carry no behaviour to cover.
      exclude: [
        'src/**/*.{test,spec}.{ts,tsx}',
        'src/test/**',
        'src/main.tsx',
        'src/entry-server.tsx',
        'src/vite-env.d.ts',
        'src/**/*.d.ts',
      ],
      // Global floors, a few points under the measured 89.19 / 71.95 / 88.52 / 90.45,
      // so ordinary churn does not red the build but a real regression does.
      // Deliberately not `perFile`: App.tsx sits at 0%, so a per-file floor fails on the
      // first run for a reason unrelated to whatever change is under review, and a gate
      // that reds on day one gets deleted on day two.
      // `autoUpdate` stays off. It rewrites these numbers as coverage rises, which turns
      // the committed floor into something nobody decided.
      thresholds: {
        statements: 85,
        lines: 85,
        functions: 84,
        branches: 68,
        autoUpdate: false,
      },
    },
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
