// @ts-nocheck
import { useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pinned horizontal showcase strip driven by the document scroll (no nested
 * scrollbars). The wrapper pins for the distance the row needs to travel and
 * the row translates on X with a scrubbed tween; scrolling back up reverses.
 * Under prefers-reduced-motion the children render as a plain vertical stack.
 *
 * @type {React.FC<{
 *   heading?: React.ReactNode,
 *   children: React.ReactNode,
 *   gapClassName?: string,
 *   showProgress?: boolean,
 *   className?: string,
 * }>}
 */
export const PinnedShowcase = ({
  heading,
  children,
  gapClassName = "gap-6",
  showProgress = true,
  className,
}) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className}>
        {heading}
        <div className="flex flex-col items-center gap-6">{children}</div>
      </div>
    );
  }

  return (
    <PinnedStrip
      heading={heading}
      gapClassName={gapClassName}
      showProgress={showProgress}
      className={className}
    >
      {children}
    </PinnedStrip>
  );
};

function PinnedStrip({ heading, children, gapClassName, showProgress, className }) {
  const triggerRef = useRef(null);
  const rowRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const trigger = triggerRef.current;
    const row = rowRef.current;
    if (!trigger || !row) return;

    const totalX = () => Math.max(0, row.scrollWidth - window.innerWidth);

    const ctx = gsap.context(() => {
      gsap.to(row, {
        x: () => -totalX(),
        ease: "none",
        scrollTrigger: {
          trigger,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${totalX()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });
    }, trigger);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className={cn("h-screen overflow-hidden", className)}>
      <div className="flex h-full flex-col justify-center">
        {heading}
        <div className={cn("flex w-max items-stretch px-4 sm:px-8", gapClassName)} ref={rowRef}>
          {children}
        </div>
        {showProgress && (
          <div className="mx-auto mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800 sm:w-64">
            <div
              ref={progressRef}
              className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-blue-400 to-indigo-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}
