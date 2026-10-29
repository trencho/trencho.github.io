import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { createRequire } from 'node:module';

// eslint-plugin-react's `version: 'detect'` calls context.getFilename(), which ESLint 10 removed, so every
// react/* rule crashes on load. Reading the installed React version here skips that code path.
// react/forward-ref-uses-ref and react/jsx-filename-extension still call removed context methods, so enabling
// either crashes lint until the plugin ships an ESLint 10 release.
const reactVersion = createRequire(import.meta.url)(
  'react/package.json',
).version;

export default tseslint.config(
  // `coverage/` is generated HTML+JS from @vitest/coverage-v8. Without it here, a local
  // `yarn lint` after `yarn coverage` reports 3 'Unused eslint-disable directive' warnings
  // that come from the reporter's own bundled assets, not from any source file.
  { ignores: ['dist/', 'dist-ssr/', 'coverage/', 'node_modules/'] },
  {
    extends: [js.configs.recommended, tseslint.configs.recommendedTypeChecked],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        allowAutomaticSingleRunInference: false,
        project: [
          './tsconfig.json',
          './tsconfig.app.json',
          './tsconfig.node.json',
        ],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
    },
    settings: { react: { version: reactVersion } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
      'react/self-closing-comp': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-array-index-key': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
    },
  },
  {
    files: ['vite.config.ts', 'eslint.config.js'],
    extends: [tseslint.configs.disableTypeChecked],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
);
