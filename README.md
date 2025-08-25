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
│   │   └── Layout.astro     # Main layout with SEO
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   └── about.astro      # About page
│   ├── styles/
│   │   └── global.css       # Global styles and utilities
│   └── utils/
│       ├── cn.ts           # Class name utility
│       └── mergeDeep.ts    # Deep merge utility
├── astro.config.mjs        # Astro configuration
├── tailwind.config.js      # Tailwind configuration
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

### Button Component

A flexible, accessible button component with multiple variants and sizes using Class Variance Authority (CVA).

**Features:**

- Multiple variants: `primary`, `outline`
- Multiple sizes: `xs`, `sm`, `base`, `md`, `lg`
- Can render as button or anchor element
- Full TypeScript support with proper props interface
- Tailwind CSS styling with hover effects

**Usage:**

```astro
---
import Button from "@/components/Button.astro";
---

<!-- Basic buttons -->
<Button>Click me</Button>
<Button variant="outline">Outline button</Button>

<!-- Different sizes -->
<Button size="lg">Large button</Button>
<Button size="sm">Small button</Button>

<!-- As a link -->
<Button href="/about">Go to About</Button>
```

### Favicon Component

A comprehensive favicon management system that automatically detects and renders favicon meta tags.

**Features:**

- Automatically scans `public/favicon/` directory
- Renders appropriate meta tags for detected favicon formats
- Throws helpful errors for missing files or directories
- Supports all modern favicon formats and sizes
- Includes additional meta tags for better browser support

**Supported Files:**

- `favicon.ico` (required)
- `favicon-16x16.png`, `favicon-32x32.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`, `android-chrome-512x512.png`
- `site.webmanifest`
- `safari-pinned-tab.svg`

**Usage:**
The component is already integrated into the main layout. Simply add your favicon files to `public/favicon/`.

## 🎨 Styling System

### Tailwind CSS 4

The project uses the latest Tailwind CSS v4 with modern features:

- **Vite Plugin**: Integrated via `@tailwindcss/vite`
- **Custom Utilities**: Container utility with auto margins
- **Base Styles**: Consistent border colors and button cursor
- **Modern Syntax**: Using the new `@import "tailwindcss"` syntax

### Class Name Utilities

**`cn()` Function**: A utility for merging CSS classes with conflict resolution:

```typescript
import { cn } from "@/utils/cn";

// Merges classes and resolves conflicts
const className = cn("p-4 bg-red-500", "bg-blue-500"); // Results in "p-4 bg-blue-500"
```

## 🧠 State Management

### Alpine.js Integration

Pre-configured Alpine.js setup for interactive components:

```javascript
// src/alpine.ts - Add your Alpine components here
Alpine.data("demo", () => {
  return {
    toggle: () => {
      console.log("toggle");
    },
  };
});
```

Use in templates:

```astro
<div x-data="demo">
  <button x-on:click="toggle">Click me</button>
</div>
```

## 🔧 Developer Experience

### TypeScript Configuration

- **Strict Mode**: Uses Astro's strict TypeScript configuration
- **Path Aliases**: Clean imports with `@/` prefix for components, layouts, utils, and styles
- **Type Safety**: Full type support for Astro components and props

### Code Quality Tools

**ESLint Configuration:**

- JavaScript/TypeScript linting
- Astro-specific rules
- JSX accessibility checks
- Automatic fixing with `npm run lint`

**Prettier Setup:**

- Astro plugin support
- Tailwind CSS class sorting
- 100 character line length
- Automatic formatting with `npm run prettier`

**Git Hooks (Husky):**

- Pre-commit: Runs Prettier and ESLint automatically
- Commit linting with conventional commits

### VS Code Integration

**Recommended Extensions:**

- Astro VS Code extension
- TypeScript support
- Tailwind CSS IntelliSense

**Launch Configuration:**

- One-click development server start
- Integrated debugging support

## 🌐 SEO & Performance

### Built-in SEO

The layout includes comprehensive SEO features:

- **Meta Tags**: Automatic title, description, and Open Graph tags
- **Sitemap**: Auto-generated sitemap for search engines
- **Performance**: Link prefetching enabled for faster navigation
- **PWA Ready**: Web manifest support for progressive web apps

### SEO Usage

```astro
---
import Layout from "@/layouts/Layout.astro";
---

<Layout
  seo={{
    title: "About Us",
    description: "Learn more about our project",
    openGraph: {
      basic: {
        title: "Custom OG Title",
        type: "article",
      },
    },
  }}
>
  <!-- Your content -->
</Layout>
```

## 🔧 Configuration

### Environment Setup

1. **Site URL**: Update `astro.config.mjs` with your production URL
2. **Favicon**: Add your favicon files to `public/favicon/`
3. **SEO Defaults**: Modify default SEO settings in `src/layouts/Layout.astro`

### Customization

**Adding New Components:**

```astro
---
// src/components/YourComponent.astro
export interface Props {
  title: string;
  variant?: "default" | "highlighted";
}

const { title, variant = "default" } = Astro.props;
---

<div class={cn("base-styles", { "highlighted-styles": variant === "highlighted" })}>
  {title}
</div>
```

**Adding Alpine.js Components:**

```javascript
// src/alpine.ts
Alpine.data("yourComponent", () => ({
  // Your component data and methods
}));
```

## 📦 Deployment

### Build for Production

```bash
npm run build
```

The built site will be available in the `./dist/` directory.

### Deployment Platforms

This project is ready to deploy on:

- **Vercel** - Zero configuration deployment
- **Netlify** - Automatic builds and deploys
- **GitHub Pages** - Static site hosting
- **Cloudflare Pages** - Fast edge deployment

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
