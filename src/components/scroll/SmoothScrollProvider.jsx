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
    let onRefresh = null;
    let onLoad = null;

    const start = () => {
      if (lenisInstance) return;
      lenisInstance = new Lenis();
      lenisInstance.on("scroll", ScrollTrigger.update);
      tick = (time) => lenisInstance && lenisInstance.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      // Keep Lenis's cached scroll limit in lockstep with ScrollTrigger's pin
      // spacers. The pinned showcases (Skills/Projects) inject tall spacers
      // after Lenis first measured the page; without re-measuring, Lenis keeps
      // a too-short limit and the scroll bottoms out before the final section
      // and footer are reachable — most visibly on mobile, where late-loading
      // images and the dynamic toolbar keep changing the page height.
      onRefresh = () => lenisInstance && lenisInstance.resize();
      ScrollTrigger.addEventListener("refresh", onRefresh);
      // Refresh once Lenis is live, and again after late assets load.
      ScrollTrigger.refresh();
      onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);
    };

    const stop = () => {
      if (!lenisInstance) return;
      if (tick) gsap.ticker.remove(tick);
      if (onRefresh) ScrollTrigger.removeEventListener("refresh", onRefresh);
      if (onLoad) window.removeEventListener("load", onLoad);
      tick = null;
      onRefresh = null;
      onLoad = null;
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
