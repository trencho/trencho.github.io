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
  },
});
