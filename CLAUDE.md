# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 16 static portfolio website** for Guillermo Albert García (Full Stack Developer). It's a multilingual, dark-mode-enabled site built with React 19, TypeScript, and Tailwind CSS 4.

**Critical Note**: Next.js 16 has breaking changes from earlier versions. Read the relevant guide in `node_modules/next/dist/docs/` before writing code, and heed deprecation notices.

## Development Commands

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build static export (generates /out directory)
npm run build

# Run production build locally
npm start

# Run linter (ESLint with Next.js + TypeScript rules)
npm run lint
```

## Architecture

### High-Level Structure

- **`/app`** – Next.js App Router with root layout and home page
  - `layout.tsx` – Global layout with theme script, fonts, metadata, and shared UI (Topbar, Footer, Interactions)
  - `page.tsx` – Home page composing section components
  - `globals.css` – Global styles (Tailwind, CSS variables, animations)

- **`/components`** – Reusable React components organized by page sections
  - `Hero.tsx` – Hero/introduction section with CV download and social links
  - `Projects.tsx`, `About.tsx`, `Contact.tsx` – Page sections
  - `Topbar.tsx`, `Footer.tsx`, `Interactions.tsx` – Shared components

- **`/public`** – Static assets (CVs, images, etc.)

### Key Configuration

- **Static Export** (`next.config.ts`): `output: "export"` builds to `/out` (no Node runtime)
- **Path Alias**: `@/*` → root directory for clean imports
- **TypeScript**: Strict mode enabled, React 19 JSX transform
- **Fonts**: Inter (body) and JetBrains Mono (code) via `next/font/google`
- **CSS**: Tailwind CSS 4 with PostCSS (`@tailwindcss/postcss`)

### Component Patterns

- **Stateless functional components** with no client-side interactivity (except theme toggle in Topbar/Interactions)
- **CSS class naming**: BEM-like convention (e.g., `.hero__main`, `.hero__grid`, `.spec__row`)
- **Internationalization**: Using `data-en`, `data-fr`, `data-es` attributes on HTML elements for language switching (client-side toggle)
- **Accessibility**: `aria-label` and semantic HTML (e.g., `<section>`, `<aside>`)

### Theme & Styling

- **Dark mode** via `data-theme` attribute on `<html>` (values: "light" or "dark")
- Theme is read from localStorage before React hydrates (prevents flash) in `layout.tsx`
- CSS variables (e.g., `--inter`, `--jb-mono`) for font families
- Global styles handle reveal animations and section styling

## Development Workflow

1. **Running the dev server** starts on port 3000 with hot module reload
2. **Editing components** in `/components` auto-updates the page
3. **Styling** uses Tailwind utility classes + global CSS rules
4. **Linting** runs ESLint (via `npm run lint`); configuration extends `eslint-config-next` for core web vitals and TypeScript

## Important Notes

- **Static export mode**: No Node.js APIs or dynamic routes; all output must be pre-rendered
- **Browser-only features**: `localStorage` and theme detection are in layout's inline script to run before hydration
- **Localization**: Not using Next.js i18n; language switching is client-side via data attributes
- **Project language**: Spanish (default `lang="es"`), with French and English fallbacks
- **Metadata**: Title and description in `layout.tsx` use Spanish; adjust for production SEO needs

## Related Files

- `AGENTS.md` – Warnings about Next.js 16 breaking changes
- `tsconfig.json` – TypeScript configuration with JSX, module resolution, and path aliases
- `eslint.config.mjs` – ESLint config (flat config format) with Next.js rules
