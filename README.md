# ELWOS Studios — Website

Official website for ELWOS Studios, an independent game studio.
Built with **Vite + React + TypeScript** and React Router.

## Requirements
- Node.js 18 or newer (20+ recommended)

## Getting started
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Project structure
```
public/
src/
  assets/
  components/
  content/
  layouts/
  pages/
  styles/
```

## Editing content
- Add news posts at the top of `src/content/posts.ts`.
- Founder and contact placeholders are in `src/pages/About.tsx` and `src/pages/Contact.tsx`.
- Brand colours are CSS variables in `src/styles/global.css`.

## Deployment
Build output is `dist/`. Configure the host to run `npm run build` and publish `dist`. The included `public/_redirects` supports SPA routing on Cloudflare Pages and Netlify.
