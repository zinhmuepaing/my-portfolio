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

- `src/pages/Home.jsx` — Composes the home experience as a plain vertical flow of the 8 sections. The page uses a **hybrid scroll engine**: natural vertical scrolling everywhere, except Skills and Projects which pin and slide horizontally via `PinnedShowcase`.
- `src/components/scroll/` — Smooth-scroll + motion layer (GSAP ScrollTrigger + Lenis):
  - `SmoothScrollProvider.jsx` — Mounts Lenis globally (in `Layout.jsx`) and syncs it with GSAP's ticker/ScrollTrigger. Fully disabled under `prefers-reduced-motion` (reacts to live OS toggles). Exports `getLenis()`.
  - `PinnedShowcase.jsx` — Pinned horizontal showcase strip driven by the document scroll (no nested scrollbars): the wrapper pins for the row's travel distance and the row translates on X with a scrubbed tween; includes an optional scrub progress bar. Reduced motion renders children as a vertical stack. Used by SkillsSection and ProjectsSection.
  - `SectionFX.jsx` — Entry/exit choreography wrapper for section-level blocks (variants: `fade-drop`, `rotate-in`, `clip-reveal`; scrubbed exit dim/lift that reverses on re-entry, disable with `exit={false}`). Never wrap interactive card internals — containers only.
  - `scroll-context.js` — Tiny `useSyncExternalStore` store the navbar consults; currently nothing publishes to it (state stays `null`), so the navbar always uses its IntersectionObserver path. Kept as the bridge mechanism for any future track-driven nav mode.
- `src/sections/` — The primary content layer. Each section is a self-contained component used on the home page:
  - `RobotSection.jsx` — Landing section with 3D Spline robot animation, inspirational quote, and attribution. Wrapped in a rounded glass container with Spotlight effect. Uses `@splinetool/react-spline`.
  - `HeroSection.jsx` — Intro, animated name (letter-by-letter via AnimatedText, color `#d84f2a`), tagline, social links, profile photo.
  - `AboutSection.jsx` — Bio paragraph, education timeline (Temasek Polytechnic entry uses a bulleted achievement list), "Leadership & Community Involvement" 3D `CardStack` fan (4 entries: CENT President, Peer Tutor, ENGenius, HRHS Volunteer).
  - `SkillsSection.jsx` — "The Stack Behind the Work" — tech stack grouped by category (Languages, Frameworks & Libraries, Data & Databases, Tools & Platforms). The 4 category groups are horizontal panels inside a `PinnedShowcase` (each panel keeps its `SkillMarquee` rows). Uses devicon CDN icons and local images from `public/images/`.
  - `ProjectsSection.jsx` — 9 projects (newest first) rendered as a pinned horizontal corridor via `components/scroll/PinnedShowcase.jsx`, each slide a `ProjectCard` from `components/ui/project-card.jsx` (image + title + description with See more/less + tech-stack icon row + GitHub link). Newest 4: KakiLearn AI, Sleep Apnea Monitor, Smartwatch Speech Analytics, Grid. Local images live in `public/images/`.
  - `CertificatesSection.jsx` — "Licenses & Certifications" — 6 credentials in an expand-on-hover / tap-to-expand accordion via `components/ui/expand-cards.jsx`. Each card shows the certificate image, org logo, title, issuer, and a "View credential" button (Microsoft's is disabled, labeled with its full Credential ID). Org logos use colored SimpleIcons (Google, NVIDIA, LangChain, Anthropic) plus local `harvard.svg`/`microsoft.svg`.
  - `AchievementsSection.jsx` — 5 achievements displayed using the Aceternity scroll-progress Timeline component.
  - `ContactSection.jsx` — "Let's Stay In Touch" (color `#0b7b9e`), description, chat input box with GitHub/LinkedIn/Gmail icons (brand-colored) and Send Message button.
  - `Footer.jsx` — "© 2026 Zin Hmue Paing. Designed and built by me." with social links.
- `src/pages/` — 7 standalone full-page routes (Home, About, Skills, Projects, Achievements, Leadership, Contact). These are secondary; the main experience is the single-page scroll via sections.
- `src/components/ui/project-card.jsx` — `ProjectCard`, `TechIcon`, and the `TECH_ICONS` map (devicon CDN + local `public/images/` + colored SimpleIcons; unknown labels fall back to a lettered chip). Extracted verbatim from card-carousel. Used by ProjectsSection inside the PinnedShowcase corridor.
- `src/components/ui/section-heading.jsx` — Animated editorial section heading: numbered mono eyebrow + thin gradient rule, huge tracking-tight display type, per-word staggered mask reveal (framer-motion `whileInView`), and a subtle scroll-linked vertical drift. Static under reduced motion. Used by all content sections.
- `src/components/ui/aurora-background.jsx` — Cinematic theme-aware backdrop: drifting aurora gradient washes (CSS keyframes in `index.css`) + faint SVG film-grain overlay. Rendered once in `Layout.jsx` behind Particles.
- `src/components/ui/card-carousel.jsx` — Swiper coverflow carousel of project cards. **No longer used** (ProjectsSection now uses the PinnedShowcase corridor); kept for reference, like `animated-card.jsx`.
- `src/components/ui/expand-cards.jsx` — Expand-on-hover / tap-to-expand accordion of certificate cards (Vite-adapted). Horizontal accordion on desktop, vertical stacked accordion on mobile. Reuses `GlassButton` for credential links. Used by CertificatesSection.
- `src/components/ui/timeline.jsx` — Aceternity Timeline component (Vite-adapted, no Next.js deps). Detects its nearest vertically-scrolling ancestor before mounting the scroll-tracking core, so the progress line works both in window scroll and inside a horizontal-track panel. Used by AchievementsSection.
- `src/components/ui/card-stack.jsx` — 3D fanned card stack with drag/swipe, dots, and keyboard nav (Vite-adapted). Self-sizes to its container (ResizeObserver) so it never overflows on mobile/tablet. Used by AboutSection for leadership entries via a custom `renderCard`.
- `src/components/ui/animated-card.jsx` — Animated image carousel (adapted from AnimatedTestimonials). No longer used (AboutSection now uses `card-stack.jsx`); kept for reference.
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
- `src/Layout.jsx` — Mounts `SmoothScrollProvider`, `AuroraBackground`, sticky navbar (tubelight-navbar) with IntersectionObserver scroll-section highlighting, Particles background, ThemeToggle (top-right), GlassFilter. Page background: `bg-[#fafaf9] dark:bg-[#07070a]`. Nav clicks scroll via `getLenis()?.scrollTo(el)` with a native `scrollIntoView` fallback. Renders `<Outlet />` + `Footer`.
- `src/lib/AuthContext.jsx` — No-op auth stub. Always returns `{ isAuthenticated: false, user: null }`.
- `src/pages.config.js` — Page registry stub used by `NavigationTracker`.

### Section order on Home page

RobotSection → HeroSection → AboutSection → SkillsSection → ProjectsSection → CertificatesSection → AchievementsSection → ContactSection

Hybrid scroll: all sections stack vertically, but Skills and Projects pin and slide horizontally (`PinnedShowcase`) while the user scrolls. System scrollbars are hidden globally in `src/index.css` (Lenis provides the momentum). Reduced-motion users get a fully static vertical page.

### Images

Local images live in `public/images/` and are referenced in code as `` `${import.meta.env.BASE_URL}images/<filename>` `` to work correctly in both dev and production.

Current files in `public/images/`:
- `casualProfile.jpg` — casual profile photo (used in HeroSection)
- `kakilearn.jpeg` — KakiLearn AI logo (used in ProjectsSection)
- `kirby.png` — Sleep Apnea Monitor "Kirby" logo (used in ProjectsSection)
- `smartwatch.png` — Smartwatch Speech Analytics image (used in ProjectsSection)
- `grid.png` — Grid platform logo (used in ProjectsSection)
- `google-ai-professional.png`, `nvidia-deep-learning.png`, `langchain-intro.png`, `cs50x.png`, `claude-101.png`, `microsoft-genai.png` — certificate images (used in CertificatesSection)
- `google.svg`, `harvard.svg`, `microsoft.svg` — org logos for CertificatesSection (downloaded from Wikimedia; remaining org logos use SimpleIcons CDN)
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
- `Jupyter.png` — Jupyter logo (present in public/images/ but not currently used — SkillsSection uses the devicon CDN SVG instead due to better appearance)

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
- `jsconfig.json` maps `gsap` and `gsap/*` to `gsap/types/index.d.ts` via `paths` — without this, `checkJs` resolves `gsap/ScrollTrigger` to its raw `.js` and floods `npm run typecheck` with node_modules errors.
- `npm run typecheck` has a pre-existing error baseline (`import.meta.env` ImportMeta errors in sections, `className` required-prop errors in Layout, etc.) — compare against a clean tree before attributing failures to new changes.

## Key dependencies

- `@splinetool/react-spline` + `@splinetool/runtime` — 3D robot scene
- `gsap` (ScrollTrigger) — Pinned horizontal-track scroll transition on Home
- `lenis` — Global smooth scrolling (synced to GSAP's ticker; package is `lenis`, not the deprecated `@studio-freight/lenis`)
- `framer-motion` — Animations and transitions
- `next-themes` — Dark/light mode theming
- `lucide-react` — Icons
- `three` — 3D engine (Spline dependency)
