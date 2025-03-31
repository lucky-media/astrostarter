// @ts-check
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import tailwindcss from "@tailwindcss/vite";

import alpinejs from "@astrojs/alpinejs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
  experimental: {
    svg: true,
  },
  integrations: [alpinejs({ entrypoint: "./src/alpine.ts" })],
});
