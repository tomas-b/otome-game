# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server with Turbopack hot reload on http://localhost:3000
- `pnpm build` - Build production application with Turbopack
- `pnpm start` - Start production server

### Package Management
This project uses pnpm as the package manager. Use `pnpm add` for dependencies and `pnpm add -D` for dev dependencies.

## Architecture

This is a Next.js 15.5.3 application using the App Router with TypeScript and Tailwind CSS v4.

### Key Structure
- `src/app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with Geist font configuration
  - `page.tsx` - Home page component
  - `globals.css` - Global styles with Tailwind directives
- `public/` - Static assets
- `@/*` - Path alias mapping to `./src/*`

### Tech Stack
- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with PostCSS
- **Font**: Geist and Geist Mono fonts via next/font
- **Build**: Turbopack for fast builds and hot reload