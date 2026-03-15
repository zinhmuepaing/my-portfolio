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

Hosted on **GitHub Pages** with custom domain **https://paing-portfolio.com/**.

- Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds with Vite and deploys to the `gh-pages` branch automatically (~25s).
- `vite.config.js` has `base: '/'` — required for the custom domain (assets load from root).
- `public/CNAME` contains `paing-portfolio.com` so the custom domain persists across deploys.
- GitHub Pages source is set to `gh-pages` branch.
- Routing uses **HashRouter** — this is intentional for GitHub Pages compatibility. Do not switch to BrowserRouter.

## Architecture

**React 18 SPA** built with Vite, using page-based routing via React Router DOM (HashRouter).

### Key layers

- `src/pages/Home.jsx` — Composes the single-page scrollable experience by rendering all section components in order.
- `src/sections/` — The primary content layer. Each section is a self-contained component used on the home page:
  - `RobotSection.jsx` — Landing section with 3D Spline robot animation, inspirational quote, and attribution. Wrapped in a rounded glass container with Spotlight effect. Uses `@splinetool/react-spline`.
  - `HeroSection.jsx` — Intro, animated name (letter-by-letter via AnimatedText, color `#d84f2a`), tagline, social links, profile photo.
  - `AboutSection.jsx` — Bio paragraph, education timeline, "Leadership & Community Involvement" animated card carousel (4 entries: CENT President, Peer Tutor, ENGenius, HRHS Volunteer).
  - `SkillsSection.jsx` — "The Stack Behind the Work" — tech stack grouped by category (Languages, Frameworks & Libraries, Data & Databases, Tools & Platforms). Uses devicon CDN icons and local images from `public/images/`.
  - `ProjectsSection.jsx` — 5 projects in a 2-column grid. Images for Garment Worker, Smart Bakery, and Museek are served from `public/images/`.
  - `AchievementsSection.jsx` — 5 achievements displayed using the Aceternity scroll-progress Timeline component.
  - `ContactSection.jsx` — "Let's Stay In Touch" (color `#0b7b9e`), description, chat input box with GitHub/LinkedIn/Gmail icons (brand-colored) and Send Message button.
  - `Footer.jsx` — "© 2026 Zin Hmue Paing. Designed and built by me." with social links.
- `src/pages/` — 7 standalone full-page routes (Home, About, Skills, Projects, Achievements, Leadership, Contact). These are secondary; the main experience is the single-page scroll via sections.
- `src/components/ui/timeline.jsx` — Aceternity Timeline component (Vite-adapted, no Next.js deps). Used by AchievementsSection.
- `src/components/ui/animated-card.jsx` — Animated image carousel (adapted from AnimatedTestimonials). Uses lucide-react arrows. Used by AboutSection for leadership entries.
- `src/components/ui/animated-text.jsx` — Letter-by-letter spring animation component. Supports `triggerOnScroll` prop for whileInView animation. Used for the name in HeroSection.
- `src/components/ui/splite.jsx` — SplineScene wrapper. Lazy-loads `@splinetool/react-spline` with Suspense fallback. Used by RobotSection.
- `src/components/ui/spotlight.jsx` — Aceternity SVG spotlight effect. Theme-aware (black in light, white in dark). Used by RobotSection.
- `src/components/ui/particles.jsx` — Interactive mouse-reactive particle background. Rendered globally via Layout.jsx with `fixed inset-0`. Theme-aware colors (black light, white dark).
- `src/components/ui/theme-toggle.jsx` — Dark/light mode toggle switch with Moon/Sun icons. Uses `next-themes`. Positioned top-right via Layout.jsx.
- `src/components/ui/chat-input.jsx` — Chat-style textarea input. Used in ContactSection.
- `src/components/ui/liquid-glass.jsx` — `GlassEffect`, `GlassButton`, `GlassFilter` components. `GlassFilter` must be rendered once in the root layout (it is, via `Layout.jsx`).
- `src/components/ui/` — 50+ shadcn/ui components (Radix UI primitives, New York style). Add new ones via `npx shadcn@latest add <component>`.
- `src/api/base44Client.js` — No-op stub (Base44 has been removed). Exports a `base44` object with inert `auth` and `appLogs` methods so `NavigationTracker` and `PageNotFound` don't break.
- `src/lib/utils.js` — `cn()` helper (clsx + tailwind-merge). Use this for all className merging.
- `src/utils/index.ts` — `createPageUrl(pageName)` helper for routing.
- `src/App.jsx` — Router + routes + providers (QueryClient, ThemeProvider).
- `src/Layout.jsx` — Sticky navbar (tubelight-navbar) with scroll-section highlighting, Particles background, ThemeToggle (top-right), GlassFilter. Renders `<Outlet />` for page content.
- `src/lib/AuthContext.jsx` — No-op auth stub. Always returns `{ isAuthenticated: false, user: null }`.
- `src/pages.config.js` — Page registry stub used by `NavigationTracker`.

### Section order on Home page

RobotSection → HeroSection → AboutSection → SkillsSection → ProjectsSection → AchievementsSection → ContactSection

### Images

Local images live in `public/images/` and are referenced in code as `` `${import.meta.env.BASE_URL}images/<filename>` `` to work correctly in both dev and production.

Current files in `public/images/`:
- `ENGenius.png` — ENGenius programme group photo (used in AboutSection leadership carousel)
- `Vounteer.png` — HRHS mobile groceries volunteer photo (used in AboutSection)
- `garmentWorker.png` — Garment Worker Productivity ML project diagram (used in ProjectsSection)
- `smartBakery.png` — Smart Bakery IoT system diagram (used in ProjectsSection)
- `MuseekLogo.png` — Museek app logo (used in ProjectsSection)
- `langchain.png` — LangChain logo (used in SkillsSection)
- `pygame.png` — Pygame logo (used in SkillsSection)
- `Tableau-logo.png` — Tableau logo (used in SkillsSection)
- `KNIME.jpg` — KNIME logo (used in SkillsSection)
- `UiPath.png` — UiPath logo (used in SkillsSection)
- `MPLAB.jpg` — MPLAB logo (used in SkillsSection)
- `sqlLogo.png` — Microsoft SQL Server logo (used in SkillsSection)
- `MongoDB.png` — MongoDB logo (used in SkillsSection)

### Styling

Tailwind CSS with CSS variables for theming. Dark mode is class-based (`darkMode: "class"` in `tailwind.config.js`). Both light and dark theme tokens are defined as CSS custom properties in `src/index.css`. Dark/light mode toggle uses `next-themes` (ThemeProvider in `App.jsx`, ThemeToggle in `Layout.jsx`).

All sections support dark mode via `dark:` Tailwind variants.

### Path aliases

`@/` maps to `src/` (configured in `jsconfig.json` and `vite.config.js`).

## TypeScript / JSConfig notes

- `src/components/ui/` is excluded from type-checking in `jsconfig.json`. All files there have `// @ts-nocheck` at the top plus JSDoc `@type` annotations on each exported component so consumers get proper prop types.
- Page files use the `react-jsx` transform — do not import `React` just for JSX. Only import named hooks/utilities you actually use.
- The `Github` and `Linkedin` icons from `lucide-react` are deprecated (brand icons removed upstream) but still functional. Leave them as-is unless replacing with custom SVGs.
- When adding new shadcn/ui components via `npx shadcn@latest add <component>`, add `// @ts-nocheck` to the generated file and a JSDoc `@type` annotation on each `forwardRef` export matching its underlying HTML element (e.g. `React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>`).

## Key dependencies

- `@splinetool/react-spline` + `@splinetool/runtime` — 3D robot scene
- `framer-motion` — Animations and transitions
- `next-themes` — Dark/light mode theming
- `lucide-react` — Icons
- `three` — 3D engine (Spline dependency)
