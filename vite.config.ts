import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' }), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  server: { port: 3000, open: true },
  build: {
    target: 'esnext',
    outDir: 'build',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        // Split heavy third-party libraries into their own long-term-cacheable
        // chunks instead of one large monolithic bundle.
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('@fortawesome')) return 'fortawesome';
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
});
