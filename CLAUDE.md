# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
npm run lint:fix   # Auto-fix lint issues
npm run typecheck  # TypeScript/JSConfig type checking
```

No test suite is configured.

## Deployment

Hosted on **GitHub Pages** at `https://zinhmuepaing.github.io/my-portfolio/`.

- Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds with Vite and deploys to the `gh-pages` branch automatically (~25s).
- `vite.config.js` has `base: '/my-portfolio/'` — required for assets to load correctly from the GitHub Pages subfolder. Do not remove or change this.
- Routing uses **HashRouter** (URLs are `/#/about`, `/#/skills`, etc.) — this is intentional for GitHub Pages compatibility. Do not switch to BrowserRouter.

## Architecture

**React 18 SPA** built with Vite, using page-based routing via React Router DOM (HashRouter).

### Key layers

- `src/pages/` — 7 full-page components (Home, About, Skills, Projects, Achievements, Leadership, Contact). Each page is self-contained with its own data and layout.
- `src/components/ui/` — 50+ shadcn/ui components (Radix UI primitives, New York style). Add new ones via `npx shadcn@latest add <component>`.
- `src/components/Interactive3DCard.jsx` — Custom mouse-tracking 3D flip card used on the Home page; uses raw CSS transforms (not Three.js).
- `src/api/base44Client.js` — No-op stub (Base44 has been removed). Exports a `base44` object with inert `auth` and `appLogs` methods so `NavigationTracker` and `PageNotFound` don't break.
- `src/lib/utils.js` — `cn()` helper (clsx + tailwind-merge). Use this for all className merging.
- `src/utils/index.ts` — `createPageUrl(pageName)` helper for routing.
- `src/App.jsx` — Router + all 7 routes + providers (QueryClient, ThemeProvider, AuthProvider).
- `src/Layout.jsx` — Sticky navbar with active link highlighting, dark mode toggle, and mobile scroll nav. Renders `<Outlet />` for page content.
- `src/lib/AuthContext.jsx` — No-op auth stub. Always returns `{ isAuthenticated: false, user: null }`.
- `src/pages.config.js` — Page registry stub used by `NavigationTracker`.

### Styling

Tailwind CSS with CSS variables for theming. Dark mode is class-based (`darkMode: "class"` in `tailwind.config.js`). The theme tokens are defined as CSS custom properties in `src/index.css`. Dark mode toggle uses `next-themes` via `src/Layout.jsx`.

### Path aliases

`@/` maps to `src/` (configured in `jsconfig.json` and `vite.config.js`).

## TypeScript / JSConfig notes

- `src/components/ui/` is excluded from type-checking in `jsconfig.json`. All files there have `// @ts-nocheck` at the top plus JSDoc `@type` annotations on each exported component so consumers get proper prop types.
- Page files use the `react-jsx` transform — do not import `React` just for JSX. Only import named hooks/utilities you actually use.
- The `Github` and `Linkedin` icons from `lucide-react` are deprecated (brand icons removed upstream) but still functional. Leave them as-is unless replacing with custom SVGs.
- When adding new shadcn/ui components via `npx shadcn@latest add <component>`, add `// @ts-nocheck` to the generated file and a JSDoc `@type` annotation on each `forwardRef` export matching its underlying HTML element (e.g. `React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>`).
