// @ts-check
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import alpinejs from "@astrojs/alpinejs";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  // Important: Change this URL before going to production.
  site: "https://example.com",
  prefetch: {
    prefetchAll: true,
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    plugins: [tailwindcss()],
  },
  integrations: [alpinejs({ entrypoint: "./src/alpine.ts" }), sitemap()],
});
