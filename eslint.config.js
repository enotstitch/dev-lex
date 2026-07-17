import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended', prettierConfig],
    languageOptions: { globals: globals.node },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },
]);
