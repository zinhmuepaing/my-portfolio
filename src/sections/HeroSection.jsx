import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import TextAnimation from "@/components/ui/scroll-text";
import { GlassButton } from "@/components/ui/glass";
import { GitHubIcon, GmailIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { DragAvatar } from "@/components/physics/DragAvatar";
import { profile } from "@/data/copy";

// Blur-in only (no translate) so the name never shifts while it animates.
const fade = {
  hidden: { filter: "blur(8px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1, transition: { duration: 0.5 } },
};

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";
const rand = (n) => (Math.random() - 0.5) * 2 * n;

/**
 * The name plays its entrance animation, then loops: glitch into `alt`, hold,
 * glitch back, hold. The entrance text keeps the layout (no reflow); a
 * positioned overlay shows the scrambled text.
 */
function GlitchName({ text, alt }) {
  const reduce = useReducedMotion();
  const baseRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (reduce) return;
    const base = baseRef.current;
    const overlay = overlayRef.current;
    let dead = false;
    let raf = 0;
    let timer = 0;

    const wait = (ms) => new Promise((r) => (timer = setTimeout(r, ms)));
    const show = (on) => {
      base.style.opacity = on ? "0" : "1";
      overlay.style.opacity = on ? "1" : "0";
    };
    const scramble = (to, ms) =>
      new Promise((resolve) => {
        const start = performance.now();
        let lastPaint = 0;
        const tick = (t) => {
          if (dead) return resolve();
          const p = Math.min((t - start) / ms, 1);
          if (t - lastPaint > 40 || p === 1) {
            lastPaint = t;
            let out = "";
            const glyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];
            for (let i = 0; i < Math.max(Number(overlay.dataset.len), to.length); i++) {
              if (i < to.length) out += p >= (i + 1) / to.length ? to[i] : glyph();
              else out += p >= 1 ? "" : glyph();
            }
            overlay.textContent = out;
            const jitter = p < 1;
            overlay.style.transform = jitter ? `translate(${rand(3)}px, ${rand(1.5)}px) skewX(${rand(6)}deg)` : "none";
            overlay.style.textShadow = jitter ? "2px 0 rgba(0,229,255,.8), -2px 0 rgba(255,45,85,.8)" : "none";
          }
          if (p < 1) raf = requestAnimationFrame(tick);
          else {
            overlay.dataset.len = String(to.length);
            resolve();
          }
        };
        raf = requestAnimationFrame(tick);
      });

    (async () => {
      overlay.dataset.len = String(text.length);
      await wait(3200); // let the entrance animation settle
      while (!dead) {
        overlay.textContent = text;
        show(true);
        await scramble(alt, 800);
        await wait(2400);
        await scramble(text, 800);
        show(false);
        await wait(4200);
      }
    })();

    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [reduce, text, alt]);

  return (
    <span className="relative block">
      <span ref={baseRef} className="block">
        <TextAnimation as="span" text={text} letterAnime variants={fade} delay={0.25} className="block text-coral" />
      </span>
      <span
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 block whitespace-nowrap text-coral opacity-0"
      />
    </span>
  );
}

const pills = [
  { label: "Email", Icon: GmailIcon, href: profile.socials.email },
  { label: "LinkedIn", Icon: LinkedInIcon, href: profile.socials.linkedin },
  { label: "GitHub", Icon: GitHubIcon, href: profile.socials.github },
];

export default function HeroSection() {
  const ref = useRef(null);

  return (
    <section ref={ref} id="hero" className="relative pb-2 pt-28 sm:pb-3 lg:pt-36 [overflow-x:clip]">
      <div className="wrap">
        <div className="flex items-end gap-5 sm:gap-8">
          <DragAvatar boundsRef={ref} src={profile.avatar} alt={`${profile.name} avatar`} />
          <h1 className="h-display w-fit min-w-0 pb-1 text-[clamp(1.75rem,8.5vw,4.5rem)]" aria-label={`Hi, I'm ${profile.name}`}>
            <TextAnimation as="span" text="Hi, I'm" letterAnime variants={fade} className="block italic text-ink/55" />
            <GlitchName text={profile.name} alt={profile.altName} />
          </h1>
        </div>

        <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-serif text-xl italic text-muted-foreground sm:mt-7 sm:text-3xl">
          <span>{profile.role.pre}</span>
          <span className="inline-flex items-center gap-1.5">
            <img src={profile.roleIcon} alt="" className="h-[0.8em] w-[0.8em] shrink-0 not-italic" />
            {profile.role.post}
          </span>
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {pills.map(({ label, Icon, href }) => (
            <GlassButton key={label} href={href}>
              <Icon className="h-3.5 w-3.5" />
              {label}
            </GlassButton>
          ))}
          <GlassButton href={profile.resumeUrl}>
            <FileText className="h-3.5 w-3.5" />
            Resume
          </GlassButton>
          <GlassButton
            variant="primary"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View projects
            <ArrowDown className="h-3.5 w-3.5" />
          </GlassButton>
        </div>
      </div>
    </section>
  );
}
