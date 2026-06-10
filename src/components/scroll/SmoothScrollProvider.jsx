// @ts-nocheck
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

/** Current global Lenis instance, or null when reduced motion is active. */
export function getLenis() {
  return lenisInstance;
}

/**
 * Mounts Lenis smooth scrolling globally and keeps it in lockstep with GSAP's
 * ticker / ScrollTrigger. Honors prefers-reduced-motion by not running at all
 * (and tearing down live if the user toggles the OS setting).
 *
 * @type {React.FC}
 */
export function SmoothScrollProvider() {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let tick = null;

    const start = () => {
      if (lenisInstance) return;
      lenisInstance = new Lenis();
      lenisInstance.on("scroll", ScrollTrigger.update);
      tick = (time) => lenisInstance && lenisInstance.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    };

    const stop = () => {
      if (!lenisInstance) return;
      if (tick) gsap.ticker.remove(tick);
      lenisInstance.destroy();
      lenisInstance = null;
    };

    const sync = () => (mq.matches ? stop() : start());
    sync();
    mq.addEventListener("change", sync);

    return () => {
      mq.removeEventListener("change", sync);
      stop();
    };
  }, []);

  return null;
}
