// @ts-nocheck
import { useSyncExternalStore } from "react";

/**
 * Tiny external store bridging the pinned horizontal track (rendered inside
 * the Home route) and the navbar (rendered in Layout, outside that subtree —
 * which is why this is not React context).
 *
 * State shape: { activeSection: string|null, scrollToSection: (id) => void,
 * horizontalActive: boolean } — or null when no horizontal track is active
 * (reduced motion), in which case consumers fall back to their native
 * IntersectionObserver behavior.
 */

let state = null;
const listeners = new Set();

export function setScrollNavState(next) {
  state = next;
  listeners.forEach((l) => l());
}

function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useScrollNav() {
  return useSyncExternalStore(subscribe, () => state, () => null);
}
