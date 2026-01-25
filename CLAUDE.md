# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Zachary Carlin built with React 17, TypeScript, and Create React App. Deployed on Netlify.

## Build Commands

```bash
npm i              # Install dependencies
npm run start      # Development server on localhost:3000
npm run build      # Production build
npm run test       # Run Jest tests via CRA
```

## Tech Stack

- **Framework:** React 17.0.2 with React Router v5
- **Language:** TypeScript (strict mode disabled)
- **Build:** Create React App (react-scripts 5.0.1)
- **UI:** Material-UI v4
- **Styling:** SCSS with modular architecture
- **Animation:** Framer Motion, Anime.js
- **Node:** 18.13 (see .nvmrc)

## Architecture

### Directory Structure

- `src/components/` - Feature-based component organization (home/, journal/, projects/, about/, ui/)
- `src/contexts/` - React Context providers (ContactFormContext for global form state)
- `src/util/` - Custom hooks and shared utilities
- `src/styles/` - Global SCSS files (variables.scss for design tokens)
- `src/Config.ts` - Central configuration: routes, site info, featured projects list

### Routing

Routes defined in `src/Config.ts` using React Router v5:
- `/` or `/home` → Home
- `/journal` → Blog posts list
- `/journal/:id` → Individual post
- `/about` → About page
- `/projects` → Projects showcase

All routes use `React.lazy()` with Suspense for code splitting.

### Responsive Design

- Mobile breakpoint: 768px (detected via `checkForDevice()` in App.tsx)
- Mobile uses `Drawer` component, desktop uses `Navbar`
- SCSS media queries in `responsive.scss`

### Path Alias

TypeScript configured with `t/*` mapping to `src/*` for cleaner imports.

## Key Patterns

- **State Management:** React Context API only (no Redux)
- **Lazy Loading:** Routes wrapped in Suspense with BeforeLoad fallback
- **Scroll Detection:** Custom `useOnScreen` hook using Intersection Observer
- **Image Handling:** `ImgWithFallback` component for graceful degradation
- **PWA:** Service worker and manifest configured

## Configuration

Main site content (user info, social links, featured projects) is configured in `src/Config.ts`. Modify this file to update portfolio content.
