# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

### Configure the top-level `parserOptions` property

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.app.json', './tsconfig.node.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

### Update ESLint configurations

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.
- Optionally add `...tseslint.configs.stylisticTypeChecked`.

### Install and configure `eslint-plugin-react`

Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: {
    react: react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
