// @ts-nocheck
import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { useImageLoaded } from "@/components/ui/skeleton-img";
import { cn } from "@/lib/utils";

// Coral line that fills the rail as the reader scrolls. Its tip stays pinned
// at 60% of the screen height, so it moves exactly with the page.
// Where the browser supports scroll-driven CSS animations, CSS drives it
// (`.tl-rail-fill-css` in index.css) on the compositor, in sync with scrolling.
// Elsewhere framer-motion drives it from JS, which can trail by a frame.
const CSS_SCROLL_TIMELINE =
  typeof CSS !== "undefined" && typeof CSS.supports === "function" && CSS.supports("animation-timeline: view()");

const RailFillJs = ({ target }) => {
  // Same start and end line (60%) keeps the tip at a fixed spot on screen.
  const { scrollYProgress } = useScroll({ target, offset: ["start 60%", "end 60%"] });
  return <motion.div className="tl-rail-fill" style={{ scaleY: scrollYProgress }} />;
};

const RailFill = ({ target }) =>
  CSS_SCROLL_TIMELINE ? <div className="tl-rail-fill tl-rail-fill-css" /> : <RailFillJs target={target} />;

/**
 * Vertical rail with dated rows (modelled on supachod.com). Optional `title`
 * adds the group header with the rail-cap dot.
 * @type {import("react").FC<any>}
 */
export const Timeline = ({ title, children, className }) => {
  const itemsRef = useRef(null);
  const reduce = useReducedMotion();
  return (
    <div className={cn("tl", className)}>
      {title && (
        <div className="tl-header">
          <div className="tl-cap" />
          <h3 className="tl-title">{title}</h3>
        </div>
      )}
      <div className="tl-items" ref={itemsRef}>
        <div className="tl-rail" aria-hidden="true">
          <div className="tl-rail-line" />
          {!reduce && <RailFill target={itemsRef} />}
        </div>
        {children}
      </div>
    </div>
  );
};

/**
 * One dated row. `date` is one or two lines, e.g. ["Aug 2024", "- May 2028"];
 * on mobile the lines collapse into one inline label above the card.
 * @type {import("react").FC<any>}
 */
export const TimelineRow = ({ date = [], children, delay = 0 }) => (
  <ScrollAnimation className="tl-row" delay={delay}>
    <div className="tl-marker">
      <div className="tl-date">
        <span className="tl-date-inline">{date.join(" ")}</span>
        {date.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
    <div className="min-w-0">{children}</div>
  </ScrollAnimation>
);

/**
 * Logo tile with a shimmer until the image loads. `pad` keeps wide logos
 * inside the tile; `variant` "wide" fits wordmarks, "dark" puts them on ink.
 */
export const LogoTile = ({ src, alt = "", pad = false, variant, className }) => {
  const { loaded, imgProps } = useImageLoaded();
  return (
    <div
      className={cn("tl-logo", pad && "tl-logo-pad", variant === "wide" && "tl-logo-wide", variant === "dark" && "tl-logo-dark", !loaded && "skel-loading", className)}
      aria-busy={!loaded}
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" {...imgProps} className={cn("skel-img", loaded && "is-loaded")} />
    </div>
  );
};

/** Glass pill link with the external-arrow glyph. */
export const PillLink = ({ href, icon, children }) => (
  <a className="tl-link" href={href} target="_blank" rel="noopener noreferrer">
    {icon}
    <span>{children}</span>
    <ArrowUpRight className="h-[13px] w-[13px] shrink-0" />
  </a>
);
