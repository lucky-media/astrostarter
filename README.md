# AstroStarter

A modern, feature-rich Astro starter template with TypeScript, Tailwind CSS, Alpine.js, and comprehensive developer tooling.

[![Astro](https://img.shields.io/badge/Astro-5.12.8-orange)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.11-38B2AC)](https://tailwindcss.com/)
[![Alpine.js](https://img.shields.io/badge/Alpine.js-3.14.9-77C1D2)](https://alpinejs.dev/)

## ✨ Features

- 🚀 **Astro 5** - The modern web framework for content-focused websites
- 🎨 **Tailwind CSS 4** - Latest utility-first CSS framework with modern features
- ⚡ **Alpine.js** - Lightweight JavaScript framework for interactive components
- 📱 **Responsive Design** - Mobile-first approach with flexible layouts
- 🔍 **SEO Optimized** - Built-in SEO components with Open Graph support
- 🎯 **TypeScript** - Full TypeScript support with strict configuration
- 🎨 **Component Library** - Pre-built components with variant support
- 🔧 **Developer Tools** - ESLint, Prettier, Husky, and Commitlint
- 📦 **Path Aliases** - Clean imports with `@/` prefix
- 🌐 **Sitemap Generation** - Automatic sitemap generation
- 🔗 **Link Prefetching** - Optimized navigation with prefetch enabled
- 🎨 **Favicon Management** - Comprehensive favicon handling component

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository or use this template
2. Install dependencies:

```bash
npm install
```

3. Set up your favicon files:
   - Create a `public/favicon/` directory
   - Add your `favicon.ico` file (required)
   - Optionally add other favicon formats (see Favicon Component section)

4. Update the site URL in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: "https://yourdomain.com", // Change this!
  // ... rest of config
});
```

5. Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site!

## 🗂️ Project Structure

```
├── public/
│   └── favicon/              # Favicon files
│       ├── favicon.ico       # Required
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       ├── apple-touch-icon.png
│       ├── android-chrome-*.png
│       └── site.webmanifest
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # Reusable components
│   │   ├── Button.astro     # Styled button component
│   │   └── Favicon.astro    # Favicon management
│   ├── layouts/
│   │   ├── Layout.astro     # Main layout wrapper
│   │   └── Head.astro       # Head component with SEO
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── about.astro      # About page
│   ├── styles/
│   │   └── global.css       # Global styles and utilities
│   └── utils/
│       ├── cn.ts           # Class name utility
│       └── mergeDeep.ts    # Deep merge utility
├── astro.config.mjs        # Astro configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🧞 Available Commands

All commands are run from the root of the project:

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `npm install`      | Install dependencies                         |
| `npm run dev`      | Start development server at `localhost:4321` |
| `npm run build`    | Build production site to `./dist/`           |
| `npm run preview`  | Preview build locally                        |
| `npm run prettier` | Format code with Prettier                    |
| `npm run lint`     | Lint and fix code with ESLint                |

## 📚 Components Guide

### Layout Components

#### Main Layout (`Layout.astro`)

The main layout wrapper that includes the Head component with SEO support.

**Props:**

- `seo` - SEO configuration object (see SEO section)
- `class` - Optional CSS class for the body element

**Usage:**

```astro
---
import Layout from "@/layouts/Layout.astro";
---

<Layout class="bg-gray-50">
  <div class="container">
    <!-- Your page content -->
  </div>
</Layout>
```

#### Head Component (`Head.astro`)

Manages document head with comprehensive SEO support. Automatically included in the main Layout.

**Features:**

- Title management with template support
- Meta descriptions
- Open Graph tags for social media
- Twitter Card support
- Favicon integration
- Client-side routing with transitions

**Default Configuration:**

- Default title: "AstroStarter"
- Title template: "%s | AstroStarter"
- Default description: "A starter kit for Astro"
- Default OG image: `${Astro.site}og-image.jpg`

### Button Component

A flexible, accessible button component with multiple variants and sizes using Class Variance Authority (CVA).

**Props:**

- `href` (optional) - If provided, renders as an anchor link
- `variant` - Button style: `"primary"` (default) | `"outline"`
- `size` - Button size: `"xs"` | `"sm"` | `"base"` (default) | `"md"` | `"lg"`
- `class` - Additional CSS classes
- All standard HTML button/anchor attributes

**Features:**

- Renders as `<button>` or `<a>` based on `href` prop
- Full TypeScript support with proper props interface
- Tailwind CSS styling with smooth hover transitions
- Accessible by default
- Slot support for custom content

**Usage Examples:**

```astro
---
import Button from "@/components/Button.astro";
---

<!-- Basic primary button -->
<Button>Click me</Button>

<!-- Outline variant -->
<Button variant="outline">Outline button</Button>

<!-- Different sizes -->
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="base">Base (default)</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

<!-- As a link -->
<Button href="/about">Go to About</Button>
<Button href="https://example.com" variant="outline" size="lg"> External Link </Button>

<!-- With custom classes -->
<Button class="shadow-lg">Custom styled</Button>

<!-- With HTML attributes -->
<Button type="submit" disabled>Submit</Button>
```

**Styling:**

- Primary variant: Purple background with white text, transitions to transparent with border on hover
- Outline variant: Transparent with purple border, transitions to purple background on hover
- All sizes include consistent padding and spacing
- Group utility for hover effects on child elements

### Favicon Component

A comprehensive favicon management system that automatically detects and renders favicon meta tags.

**Features:**

- Automatically scans `public/favicon/` directory
- Renders appropriate meta tags for detected favicon formats
- Throws helpful errors for missing required files or directories
- Supports all modern favicon formats and sizes
- Includes additional meta tags for better browser support (theme color, Safari pinned tab)

**Supported Files:**

| File                         | Size    | Required | Purpose                    |
| :--------------------------- | :------ | :------- | :------------------------- |
| `favicon.ico`                | Any     | ✅ Yes   | Legacy browser support     |
| `favicon-16x16.png`          | 16x16   | No       | Standard favicon           |
| `favicon-32x32.png`          | 32x32   | No       | Standard favicon           |
| `apple-touch-icon.png`       | 180x180 | No       | iOS devices                |
| `android-chrome-192x192.png` | 192x192 | No       | Android devices            |
| `android-chrome-512x512.png` | 512x512 | No       | Android devices (high-res) |
| `site.webmanifest`           | -       | No       | PWA manifest               |
| `safari-pinned-tab.svg`      | -       | No       | Safari pinned tabs         |

**Setup:**

1. Create the favicon directory:

```bash
mkdir -p public/favicon
```

2. Add your favicon files to `public/favicon/`. At minimum, you need `favicon.ico`.

3. The component is already integrated into [`Head.astro`](src/layouts/Head.astro). No additional setup required!

**Error Handling:**

- Throws error if `public/favicon/` directory doesn't exist
- Throws error if `favicon.ico` is missing
- Provides helpful error messages with file paths

## 🌐 SEO & Performance

### SEO Configuration

The SEO system supports two approaches: simple and advanced.

#### Simple SEO (Recommended for most pages)

Pass basic SEO properties directly:

```astro
---
import Layout from "@/layouts/Layout.astro";
---

<Layout
  seo={{
    title: "About Us",
    description: "Learn more about our company and mission",
    image: "/images/about-og.jpg",
  }}
>
  <!-- Your content -->
</Layout>
```

**Simple SEO Props:**

- `title` - Page title (will be formatted with title template)
- `description` - Page description
- `image` - Open Graph image URL (null to omit)

#### Advanced SEO

For full control over SEO tags, you can pass the complete `astro-seo` configuration:

```astro
---
import Layout from "@/layouts/Layout.astro";
---

<Layout
  seo={{
    title: "Blog Post Title",
    description: "Blog post description",
    openGraph: {
      basic: {
        title: "Custom OG Title",
        type: "article",
        image: "https://example.com/og-image.jpg",
      },
      optional: {
        description: "Custom OG description",
        siteName: "My Blog",
        locale: "en_US",
      },
      article: {
        publishedTime: "2025-01-01T00:00:00Z",
        authors: ["John Doe"],
        tags: ["astro", "web-development"],
      },
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourtwitterhandle",
      creator: "@authorhandle",
    },
    extend: {
      meta: [{ name: "custom-meta", content: "custom value" }],
      link: [{ rel: "canonical", href: "https://example.com/blog/post" }],
    },
  }}
>
  <!-- Your content -->
</Layout>
```

**To customize defaults:**

1. Update the `baseSeoData` object in [`Head.astro`](src/layouts/Head.astro)
2. Change default description, site name, etc.
3. Update the default OG image path

### Performance Features

- **Link Prefetching**: Enabled by default in [`astro.config.mjs`](astro.config.mjs) with `prefetchAll: true`
- **Client Router**: Astro's view transitions enabled for smooth navigation
- **Sitemap**: Auto-generated via `@astrojs/sitemap` integration

## 📦 Pre-Deployment Checklist

- [ ] Update `site` URL in [`astro.config.mjs`](astro.config.mjs)
- [ ] Add all required favicon files to `public/favicon/`
- [ ] Update SEO defaults in [`Head.astro`](src/layouts/Head.astro)
- [ ] Test with `npm run build` and `npm run preview`
- [ ] Verify sitemap generation at `/sitemap-index.xml`
- [ ] Check Open Graph images are accessible
- [ ] Test on mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes using conventional commits
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Created by [Lucky Media](https://www.luckymedia.dev)**
