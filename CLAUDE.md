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

- `src/pages/Home.jsx` — Composes the single-page scrollable experience by rendering all section components in order.
- `src/sections/` — The primary content layer. Each section is a self-contained component used on the home page:
  - `HeroSection.jsx` — Intro, name, tagline, social links, profile photo.
  - `AboutSection.jsx` — Bio paragraph, education timeline, "Leadership & Community Involvement" animated card carousel (4 entries: CENT President, Peer Tutor, ENGenius, HRHS Volunteer).
  - `SkillsSection.jsx` — Tech stack grouped by category (Languages, Frameworks, Data, Tools). Uses devicon CDN icons; tools without devicons get styled letter badges.
  - `ProjectsSection.jsx` — 5 projects in a 2-column grid. Images for Garment Worker, Smart Bakery, and Museek are served from `public/images/`.
  - `AchievementsSection.jsx` — 5 achievements displayed using the Aceternity scroll-progress Timeline component.
  - `ContactSection.jsx` — Contact form and info.
  - `Footer.jsx` — Site footer.
- `src/pages/` — 7 standalone full-page routes (Home, About, Skills, Projects, Achievements, Leadership, Contact). These are secondary; the main experience is the single-page scroll via sections.
- `src/components/ui/timeline.jsx` — Aceternity Timeline component (Vite-adapted, no Next.js deps). Used by AchievementsSection.
- `src/components/ui/animated-card.jsx` — Animated image carousel (adapted from AnimatedTestimonials). Uses lucide-react arrows (no @tabler/icons-react). Used by AboutSection for leadership entries.
- `src/components/ui/liquid-glass.jsx` — `GlassEffect`, `GlassButton`, `GlassFilter` components. `GlassFilter` must be rendered once in the root layout (it is, via `Layout.jsx`).
- `src/components/ui/` — 50+ shadcn/ui components (Radix UI primitives, New York style). Add new ones via `npx shadcn@latest add <component>`.
- `src/api/base44Client.js` — No-op stub (Base44 has been removed). Exports a `base44` object with inert `auth` and `appLogs` methods so `NavigationTracker` and `PageNotFound` don't break.
- `src/lib/utils.js` — `cn()` helper (clsx + tailwind-merge). Use this for all className merging.
- `src/utils/index.ts` — `createPageUrl(pageName)` helper for routing.
- `src/App.jsx` — Router + all 7 routes + providers (QueryClient, ThemeProvider, AuthProvider).
- `src/Layout.jsx` — Sticky navbar (tubelight-navbar) with scroll-section highlighting. Renders `<Outlet />` for page content.
- `src/lib/AuthContext.jsx` — No-op auth stub. Always returns `{ isAuthenticated: false, user: null }`.
- `src/pages.config.js` — Page registry stub used by `NavigationTracker`.

### Images

Local images live in `public/images/` and are referenced in code as `` `${import.meta.env.BASE_URL}images/<filename>` `` to work correctly in both dev and GitHub Pages production.

Current files in `public/images/`:
- `ENGenius.png` — ENGenius programme group photo (used in AboutSection leadership carousel)
- `Vounteer.png` — HRHS mobile groceries volunteer photo (used in AboutSection)
- `garmentWorker.png` — Garment Worker Productivity ML project diagram (used in ProjectsSection)
- `smartBakery.png` — Smart Bakery IoT system diagram (used in ProjectsSection)
- `MuseekLogo.png` — Museek app logo (used in ProjectsSection)

### Styling

Tailwind CSS with CSS variables for theming. Dark mode is class-based (`darkMode: "class"` in `tailwind.config.js`). The theme tokens are defined as CSS custom properties in `src/index.css`. Dark mode toggle uses `next-themes` via `src/Layout.jsx`.

### Path aliases

`@/` maps to `src/` (configured in `jsconfig.json` and `vite.config.js`).

## TypeScript / JSConfig notes

- `src/components/ui/` is excluded from type-checking in `jsconfig.json`. All files there have `// @ts-nocheck` at the top plus JSDoc `@type` annotations on each exported component so consumers get proper prop types.
- Page files use the `react-jsx` transform — do not import `React` just for JSX. Only import named hooks/utilities you actually use.
- The `Github` and `Linkedin` icons from `lucide-react` are deprecated (brand icons removed upstream) but still functional. Leave them as-is unless replacing with custom SVGs.
- When adding new shadcn/ui components via `npx shadcn@latest add <component>`, add `// @ts-nocheck` to the generated file and a JSDoc `@type` annotation on each `forwardRef` export matching its underlying HTML element (e.g. `React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>`).
