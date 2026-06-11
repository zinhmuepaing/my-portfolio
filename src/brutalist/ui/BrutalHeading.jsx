// @ts-nocheck
import { cn } from "@/lib/utils";

/**
 * Editorial brutalist section heading: numbered mono eyebrow + heavy ink rule
 * + huge Syne display title, with an optional description line.
 *
 * @type {React.FC<{
 *   index?: string,
 *   title: string,
 *   desc?: string,
 *   invert?: boolean,
 *   align?: "left" | "center",
 *   className?: string,
 *   titleClassName?: string,
 * }>}
 */
export function BrutalHeading({
  index,
  title,
  desc,
  invert = false,
  align = "left",
  className,
  titleClassName,
}) {
  const ink = invert ? "text-brutal-cream" : "text-brutal-ink";
  const rule = invert ? "bg-brutal-cream" : "bg-brutal-ink";
  const muted = invert ? "text-brutal-cream/70" : "text-brutal-ink/70";

  return (
    <div
      className={cn(
        "brutal-reveal",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {index && (
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span className={cn("brutal-mono text-xs font-bold tracking-[0.3em]", muted)}>
            [ {index} ]
          </span>
          <span className={cn("h-[3px] w-12 sm:w-20", rule)} />
        </div>
      )}
      <h2
        className={cn(
          "brutal-display mt-4 font-extrabold uppercase",
          // Sections with long single-word titles pass a fluid size override so
          // the word fits on one mobile line instead of being clipped by the
          // root's overflow-x-hidden (see Certificates / Achievements).
          titleClassName ?? "text-4xl sm:text-5xl md:text-6xl",
          ink
        )}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base sm:text-lg",
            align === "center" && "mx-auto",
            muted
          )}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
