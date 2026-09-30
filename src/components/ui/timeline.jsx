// @ts-nocheck
import { ArrowUpRight } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { cn } from "@/lib/utils";

/**
 * Vertical rail with dated rows (modelled on supachod.com). Optional `title`
 * adds the group header with the rail-cap dot.
 * @type {import("react").FC<any>}
 */
export const Timeline = ({ title, children, className }) => (
  <div className={cn("tl", className)}>
    {title && (
      <div className="tl-header">
        <div className="tl-cap" />
        <h3 className="tl-title">{title}</h3>
      </div>
    )}
    <div className="tl-items">
      <div className="tl-rail" aria-hidden="true">
        <div className="tl-rail-line" />
      </div>
      {children}
    </div>
  </div>
);

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

/** Square logo tile. `pad` keeps wide logos inside the tile. */
export const LogoTile = ({ src, alt = "", pad = false, className }) => (
  <div className={cn("tl-logo", pad && "tl-logo-pad", className)}>
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

/** Glass pill link with the external-arrow glyph. */
export const PillLink = ({ href, icon, children }) => (
  <a className="tl-link" href={href} target="_blank" rel="noopener noreferrer">
    {icon}
    <span>{children}</span>
    <ArrowUpRight className="h-[13px] w-[13px] shrink-0" />
  </a>
);
