import js from "@eslint/js";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["src/*.{js,ts}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.eslintRecommended,
      eslintPluginPrettierRecommended,
    ],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
      parserOptions: {
        projectService: true
      }
    },
  },
]);