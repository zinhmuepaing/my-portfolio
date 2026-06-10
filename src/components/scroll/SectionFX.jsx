// @ts-nocheck
import { useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const ENTRY_VARIANTS = {
  "fade-drop": {
    from: { autoAlpha: 0, y: 80, scale: 0.97 },
    to: { autoAlpha: 1, y: 0, scale: 1 },
  },
  "rotate-in": {
    from: { autoAlpha: 0, y: 70, rotate: 2.5, transformOrigin: "left bottom" },
    to: { autoAlpha: 1, y: 0, rotate: 0 },
  },
  "clip-reveal": {
    from: { autoAlpha: 0, clipPath: "inset(12% 8% 12% 8% round 24px)", y: 40 },
    to: { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0% round 0px)", y: 0 },
  },
};

/**
 * Entry/exit choreography wrapper for section-level blocks (containers only,
 * never the interactive card internals). Both the entry reveal and the exit
 * dim/lift are scrubbed to scroll position, so the transition reverses
 * symmetrically when scrolling back up and the state is re-derived on every
 * ScrollTrigger refresh (e.g. after the pinned showcases recalculate their
 * pin distance) — a block can never get stuck hidden. The entry and exit run
 * on non-overlapping ranges so they never fight over the same properties.
 * Under prefers-reduced-motion it renders a plain div.
 *
 * @type {React.FC<{
 *   variant?: "fade-drop" | "rotate-in" | "clip-reveal",
 *   exit?: boolean,
 *   delay?: number,
 *   className?: string,
 *   children: React.ReactNode,
 * }>}
 */
export const SectionFX = ({
  variant = "fade-drop",
  exit = true,
  delay = 0,
  className,
  children,
}) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;

    const { from, to } = ENTRY_VARIANTS[variant] ?? ENTRY_VARIANTS["fade-drop"];

    const ctx = gsap.context(() => {
      // Entry: scrubbed reveal as the block rises into view. Reverses cleanly
      // on scroll-up and self-heals on refresh (state derived from scroll).
      gsap.fromTo(el, from, {
        ...to,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          end: "top 56%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      if (exit) {
        // Exit: scrubbed dim/lift as the block leaves the top, restoring
        // symmetrically on re-entry. Range never overlaps the entry's.
        gsap.to(el, {
          autoAlpha: 0.35,
          y: -40,
          scale: 0.985,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "bottom 45%",
            end: "bottom 8%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      }
    }, el);

    return () => ctx.revert();
  }, [variant, exit, delay, reduceMotion]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
};
