import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    ignores: ["**/dist/*", "**/tests/*", "tsconfig.json", "**/.astro/*"],
  },
  { files: ["**/*.{js,mjs,cjs,ts,tsx,astro}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
];
