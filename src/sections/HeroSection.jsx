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

// Split into user-visible characters. Burmese stacks vowel marks on a base
// letter, so scrambling code points would show broken dotted circles.
const segmenter = typeof Intl !== "undefined" && Intl.Segmenter ? new Intl.Segmenter(undefined, { granularity: "grapheme" }) : null;
const graphemes = (s) => (segmenter ? Array.from(segmenter.segment(s), (g) => g.segment) : Array.from(s));
// Burmese glyphs stand taller than Latin ones; tag them so CSS can size them down.
const setLang = (el, s) => (el.lang = /[က-႟]/.test(s) ? "my" : "en");

/**
 * After the entrance animation the name glitches through `alts`
 * (e.g. "Pi", the Burmese name) and back, rests, and repeats forever.
 * Hover or tap starts a cycle right away.
 * With reduced motion the same names swap with a soft crossfade instead
 * (no scramble, shake or colour split).
 * The entrance text keeps the layout; a positioned overlay shows the change.
 */
function GlitchName({ text, alts }) {
  const reduce = useReducedMotion();
  const baseRef = useRef(null);
  const overlayRef = useRef(null);
  const playRef = useRef(() => {});

  useEffect(() => {
    const base = baseRef.current;
    const overlay = overlayRef.current;
    let dead = false;
    let running = false;
    let raf = 0;
    let timer = 0;
    let len = graphemes(text).length;

    const wait = (ms) => new Promise((r) => (timer = setTimeout(r, ms)));
    const show = (on) => {
      base.style.opacity = on ? "0" : "1";
      overlay.style.opacity = on ? "1" : "0";
    };
    const scramble = (to, ms) =>
      new Promise((resolve) => {
        const target = graphemes(to);
        setLang(overlay, to);
        const start = performance.now();
        let lastPaint = 0;
        const tick = () => {
          if (dead) return resolve();
          // Same clock as `start`; rAF's own timestamp can run on a different base.
          const t = performance.now();
          const p = Math.min((t - start) / ms, 1);
          if (t - lastPaint > 40 || p === 1) {
            lastPaint = t;
            let out = "";
            const glyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];
            for (let i = 0; i < Math.max(len, target.length); i++) {
              if (i < target.length) out += p >= (i + 1) / target.length ? target[i] : glyph();
              else out += p >= 1 ? "" : glyph();
            }
            overlay.textContent = out;
            const jitter = p < 1;
            overlay.style.transform = jitter ? `translate(${rand(3)}px, ${rand(1.5)}px) skewX(${rand(6)}deg)` : "none";
            overlay.style.textShadow = jitter ? "2px 0 rgba(0,229,255,.8), -2px 0 rgba(255,45,85,.8)" : "none";
          }
          if (p < 1) raf = requestAnimationFrame(tick);
          else {
            len = target.length;
            resolve();
          }
        };
        raf = requestAnimationFrame(tick);
      });

    const play = async () => {
      if (running || dead) return;
      running = true;
      overlay.textContent = text;
      show(true);
      for (const alt of alts) {
        await scramble(alt, 700);
        await wait(1500);
      }
      await scramble(text, 700);
      show(false);
      running = false;
    };

    // Reduced motion: crossfade between the names, no movement.
    const FADE = 220;
    const playCalm = async () => {
      if (running || dead) return;
      running = true;
      for (const [i, alt] of alts.entries()) {
        if (i > 0) {
          overlay.style.opacity = "0";
          await wait(FADE);
        }
        overlay.textContent = alt;
        setLang(overlay, alt);
        show(true);
        await wait(FADE + 1500);
      }
      show(false);
      await wait(FADE);
      running = false;
    };

    if (reduce) {
      base.style.transition = overlay.style.transition = `opacity ${FADE}ms ease-out`;
    }
    playRef.current = reduce ? playCalm : play;

    // Loop forever: rest on the real name, then cycle through the alternates.
    // A hover that already started a cycle just makes this turn a no-op.
    const REST = 4000;
    (async () => {
      await wait(reduce ? 1200 : 3000); // let the entrance animation settle
      while (!dead) {
        await playRef.current();
        if (!dead) await wait(REST);
      }
    })();

    return () => {
      dead = true;
      playRef.current = () => {};
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      base.style.transition = overlay.style.transition = "";
    };
  }, [reduce, text, alts]);

  return (
    <span className="relative block w-fit" onMouseEnter={() => playRef.current()} onClick={() => playRef.current()}>
      <span ref={baseRef} className="block">
        <TextAnimation as="span" text={text} letterAnime variants={fade} delay={0.25} className="block text-coral" />
      </span>
      <span
        ref={overlayRef}
        aria-hidden="true"
        className="glitch-overlay pointer-events-none absolute left-0 top-0 block whitespace-nowrap text-coral opacity-0"
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
            <TextAnimation as="span" text="Hi, I'm" letterAnime variants={fade} className="block text-ink/55" />
            <GlitchName text={profile.name} alts={profile.altNames} />
          </h1>
        </div>

        <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-lg text-muted-foreground sm:mt-7 sm:text-2xl">
          <span>{profile.role.pre}</span>
          <span className="inline-flex items-center gap-1.5">
            <img src={profile.roleIcon} alt="" width="20" height="20" className="h-[0.8em] w-[0.8em] shrink-0" />
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
