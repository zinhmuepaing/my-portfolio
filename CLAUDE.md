# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

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

- Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds with Vite and deploys to the `gh-pages` branch (~25s). Do redesign work on a branch; pushing `main` deploys live.
- `vite.config.js` has `base: '/'` — required for the custom domain.
- `public/CNAME` contains `paing-portfolio.com`.
- Routing uses **HashRouter** — intentional for GitHub Pages. Do not switch to BrowserRouter. Nav clicks use `scrollIntoView`, never `href="#id"` (that would break the hash route).

## Architecture (light-theme redesign)

**React 18 SPA** (Vite + Tailwind). One light theme only: white canvas, coral accent `#EC4D25`, no purple. The old standard/brutalist dual-theme system, dark mode (`next-themes`), Spline robot, Particles, Aurora, Lenis and GSAP pinning were all removed for performance. Native scrolling everywhere.

- `src/data/copy.js` — **single source of truth for all content** (profile, education, experience, skills, CCA groups, certifications, achievements, nav). Edit content here. Projects data lives in `src/sections/ProjectsSection.jsx`.
- `src/pages/Home.jsx` — Section order: Hero → About (+Education) → Experience → Technical Skills → Projects → CCA & Leadership → Certifications → Achievements → Contact. `Layout.jsx` adds the static page wash, one `GlassFilter`, `Navbar`, `Footer`.
- `src/index.css` — Tokens and component classes: `.glass` (frosted liquid glass), `.glass-refract` (Chromium-only lens via SVG `#lg-refract`), `.btn-primary/.btn-ink/.btn-glass`, `.wrap`, `.section`, `.eyebrow`, `.h-display`, `.page-wash`. Fonts: Instrument Serif (headings), Geist (body), loaded in `index.html`.
- `src/components/ui/glass.jsx` — `GlassCard`, `GlassButton`, `GlassFilter`. **Use glass sparingly** (nav, buttons, cards, contact box). Never put `backdrop-filter` on many moving elements (that is why skill chips are solid white).
- `src/components/ui/scroll-text.jsx` — `TextAnimation` (word/letter/line blur-in on scroll) and `ScrollHighlightText` (scroll-linked word highlight). `scroll-animation.jsx` — `ScrollAnimation` reveal wrapper. Both respect `prefers-reduced-motion`.
- `src/components/ui/section-heading.jsx` — numbered eyebrow + serif title + subtitle.
- `src/components/ui/timeline.jsx` + `.tl-*` classes in `index.css` — the supachod.com-style timeline (dates on a left rail, layered-shadow cards). Used by Education, Experience, Projects, CCA & Leadership, Achievements. Card variants: `.tl-work` (logo + text, dashed inner border), `.tl-edu`, `.tl-cca` (roles list + watermark), `.tl-app` (image strip overlapped by text card). `date` is an array of 1–2 lines; empty array = no date (several projects have no known date yet).
- `src/components/ui/brand-icons.jsx` — Gmail (official colours), LinkedIn, GitHub marks. Use these instead of lucide brand icons.
- Hero: `HeroSection.jsx` `GlitchName` loops the name → "Pi" → name with a scramble/RGB-split glitch after the entrance animation.
- `public/avatar.svg` (transparent, tight crop; hero + nav) and `public/favicon.svg` (same on a white rounded tile with a coral ring, so the tab icon is large and legible).
- `src/components/physics/DragAvatar.jsx` — draggable hero avatar (matter-js, lazy-loaded). Gravity, spin and bounce; the only obstacles are floor/ceiling/walls around the user's current viewport, which are rebuilt on scroll/resize so the avatar drops to the new screen bottom. It moves freely over the page (no text collisions). Leaves a dashed placeholder; dropping it back on its own spot snaps it home (upright, ring hidden).
- `src/components/physics/SkillsPlayground.jsx` — skills as falling, draggable, colliding chips. The category legend is a filter: click one to keep only its chips (they re-drop), click again to bring everything back. Reduced motion falls back to a grouped list. On touch devices chips use `touch-action: pan-y` so the page still scrolls.
- `src/components/ui/project-card.jsx` — `ProjectCard`, `TechIcon`, `TECH_ICONS` map.
- `src/components/Navbar.jsx` — glass pill nav with IntersectionObserver active state, mobile menu.
- `src/sections/ContactSection.jsx` — chat-style composer; channel picker (Gmail opens compose; LinkedIn/GitHub copy the message and open the profile).
- `src/components/ui/` also contains unused shadcn/ui components (Radix, New York style). Add new ones via `npx shadcn@latest add <component>`.

### Assets

Local images live in `public/images/` and are referenced as `` `${import.meta.env.BASE_URL}images/<file>` ``. The site avatar is `public/favicon.svg` (also the hero avatar). Resume: `public/Zin_Hmue_Paing_Resume.pdf`. Keep images small (project screenshots are capped at ~900px wide). Root-level source logos/reference files are gitignored.

## TypeScript / JSConfig notes

- `src/components/ui/` is excluded from type-checking; files there use `// @ts-nocheck` plus JSDoc `@type` annotations on exports.
- Page/section files use the `react-jsx` transform — do not import `React` just for JSX.
- `npm run typecheck` has a baseline of pre-existing errors (`import.meta.env` ImportMeta errors, etc.); compare against a clean tree before attributing failures.
- ESLint has 2 pre-existing errors (unused `React` import in `ui/badge.jsx`, `ui/calendar.jsx`).

## Key dependencies

`framer-motion` (reveals, scroll-linked text), `matter-js` (physics, dynamic import), `lucide-react` (icons), Tailwind + `tailwindcss-animate`, `react-router-dom` (HashRouter).
