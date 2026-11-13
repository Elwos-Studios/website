# ELWOS Studios — Website

Official website for ELWOS Studios, an independent game studio.
Built with **Vite + React + TypeScript** and React Router.

## Requirements
- Node.js 18 or newer (20+ recommended; required by Vite 6)

## Getting started
```bash
npm install
npm run dev        # development server (http://localhost:5173)
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Project structure
```
public/            Static files served as-is (robots.txt)
src/
  assets/          Logos, favicon and images (imported from code, bundled by Vite)
  components/      Header, Footer, Btn, FeaturedProject, Strata, Embers, Marquee
  content/         Editable content (news posts, contact details, founders)
  layouts/         SiteLayout (header, footer, page transitions)
  pages/           Home, Games, About, News, Contact
  styles/          global.css (design tokens and all styling)
  App.tsx          Routes
  main.tsx         Entry point
```

## Editing content
- **News:** add a new object at the top of `src/content/posts.ts`.
- **Contact details and founders:** `src/content/site.ts`.
- **Colours:** brand tokens are CSS variables at the top of `src/styles/global.css`
  (Burgundy `#38000D`, Ivory `#FFF0DC`, Orange `#F58220`, Carmine `#C81035`).
- **Motion:** all animation is CSS plus two small components (`Embers`, `Strata`) and respects `prefers-reduced-motion`.

## Deployment (Cloudflare + Wrangler)
The build output is the static `dist/` folder. Pages use real paths (`/games`, `/about`, ...) via the browser history API,
so the Worker assets config must fall back to `index.html`. In your Wrangler config:
```jsonc
"assets": { "directory": "./dist", "not_found_handling": "single-page-application" }
```
No `_redirects` file is used.
