# ELWOS Studios Website

Official website for ELWOS Studios.

This repository contains the studio's public-facing website. It is separate from the private studio handbook and game source repositories.

## Stack

- Vite
- React
- TypeScript
- CSS

## Requirements

- Node.js LTS
- npm

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run typecheck
npm run build
npm run preview
```

## Project structure

```text
public/                  Static public assets
src/
  assets/                Imported images, fonts and bundled assets
  components/            Shared UI components
  content/               Editable site content and data
  layouts/               Shared page layouts
  pages/                  Route-level page components
  styles/                 Global styles, tokens and utilities
  App.tsx                 Application shell and routes
  main.tsx                Application entry point
index.html                HTML document and SEO defaults
```

## Content accuracy

Do not publish invented studio history, founder biographies, game titles, release dates, awards, player counts, partnerships, testimonials, email addresses or social links. Keep unconfirmed details clearly marked for the studio to supply.

## Deployment

The intended deployment target is Vercel, connected to this GitHub repository. Production deployments should follow the `main` branch after review.
