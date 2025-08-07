# Astro Starter Kit

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Components

### Favicon Component

A comprehensive Astro component that automatically detects and renders favicon meta tags for all common favicon formats.

#### Features

- Automatically scans `public/favicon/` directory for favicon files
- Renders appropriate meta tags for each detected favicon format
- Throws helpful errors if required files or the favicon directory is missing
- Supports all modern favicon formats and sizes
- Includes additional meta tags for better browser support

#### Usage

The Favicon component is already integrated into the main layout. To use it:

1. Create a `public/favicon/` directory in your project root
2. Add your favicon files to this directory
3. The component will automatically detect and render the appropriate meta tags

```astro
---
import Favicon from "@/components/Favicon.astro";
---

<html>
  <head>
    <Favicon />
    <!-- other meta tags -->
  </head>
  <!-- rest of your layout -->
</html>
```

#### Supported Favicon Files

The component looks for these files in `public/favicon/`:

**Required Files:**

- `favicon.ico` - Classic favicon format (required)

**Optional Files:**

- `favicon-16x16.png` - 16x16 PNG favicon
- `favicon-32x32.png` - 32x32 PNG favicon
- `apple-touch-icon.png` - 180x180 Apple touch icon
- `android-chrome-192x192.png` - 192x192 Android icon
- `android-chrome-512x512.png` - 512x512 Android icon
- `site.webmanifest` - Web app manifest
- `safari-pinned-tab.svg` - Safari pinned tab icon

#### Generated Meta Tags

The component automatically generates the appropriate meta tags based on which files are present:

```html
<!-- Example output -->
<link rel="icon" href="/favicon/favicon.ico" sizes="any" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
<link rel="manifest" href="/favicon/site.webmanifest" />
<meta name="theme-color" content="#ffffff" />
<meta name="msapplication-TileColor" content="#da532c" />
```

#### Error Handling

The component will throw helpful errors in these cases:

1. **Missing favicon directory**: If `public/favicon/` doesn't exist
2. **Missing required files**: If `favicon.ico` is not present

This ensures you catch favicon issues during development rather than in production.

#### Best Practices

1. Always include `favicon.ico` for maximum browser compatibility
2. Include multiple PNG sizes for modern browsers
3. Add `apple-touch-icon.png` for iOS devices
4. Include `site.webmanifest` for PWA support
5. Generate your favicons using [RealFaviconGenerator](https://realfavicongenerator.net/)
