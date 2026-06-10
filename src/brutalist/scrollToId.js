// @ts-nocheck
import { getLenis } from "@/components/scroll/SmoothScrollProvider";

/** Smooth-scroll to an element id, using Lenis when available. */
export function scrollToId(id, offset = -88) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(el, { offset });
  else el.scrollIntoView({ behavior: "smooth" });
}
