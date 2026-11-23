// @ts-nocheck
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Tracks whether an <img> has loaded. Spread `imgProps` on the img; the
 * ref catches images that were already cached before React attached onLoad.
 */
export function useImageLoaded() {
  const [loaded, setLoaded] = useState(false);
  const ref = useCallback((img) => {
    if (img?.complete && img.naturalWidth) setLoaded(true);
  }, []);
  const done = () => setLoaded(true); // errors also end the shimmer
  return { loaded, imgProps: { ref, onLoad: done, onError: done } };
}

/**
 * Image with a shimmer placeholder until it loads, then a short fade-in.
 * The wrapper keeps its size, so nothing shifts when the image arrives.
 * @type {import("react").FC<any>}
 */
export const SkeletonImg = ({ className, imgClassName, style, ...img }) => {
  const { loaded, imgProps } = useImageLoaded();
  return (
    <span className={cn("skel", !loaded && "skel-loading", className)} aria-busy={!loaded}>
      <img loading="lazy" decoding="async" {...img} {...imgProps} style={style} className={cn("skel-img", loaded && "is-loaded", imgClassName)} />
    </span>
  );
};
