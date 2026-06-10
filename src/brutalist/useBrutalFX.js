// @ts-nocheck
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLenis } from "@/components/scroll/SmoothScrollProvider";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wires the Neo-Brutalism scroll choreography inside `rootRef`:
 *   - `.brutal-reveal`  → hard-eased slide/fade entrance on scroll-in
 *   - `[data-parallax]` → scrubbed vertical drift (value = strength in px)
 * All triggers live in a gsap.context scoped to the root and are reverted on
 * unmount, so toggling experience modes leaves no orphan ScrollTriggers.
 * Fully skipped under prefers-reduced-motion (CSS reveals everything statically).
 *
 * @param {React.RefObject<HTMLElement>} rootRef
 */
export function useBrutalFX(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    // Start the new experience from the top so pinned sections measure cleanly.
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Entrance reveals
      gsap.utils.toArray(root.querySelectorAll(".brutal-reveal")).forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Scrubbed parallax drift
      gsap.utils.toArray(root.querySelectorAll("[data-parallax]")).forEach((el) => {
        const strength = parseFloat(el.dataset.parallax) || 40;
        gsap.fromTo(
          el,
          { y: -strength },
          {
            y: strength,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, root);

    // Let pins/spacers settle, then sync Lenis's cached scroll limit.
    ScrollTrigger.refresh();
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, [rootRef]);
}
