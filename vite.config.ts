import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'automatic', babel: { plugins: [] } }),
    tailwindcss(),
    tsconfigPaths(),
  ],
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
