// @ts-nocheck
import TextAnimation from "@/components/ui/scroll-text";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { cn } from "@/lib/utils";

/**
 * Numbered eyebrow + serif display title (scroll-revealed) + optional subtitle.
 * @type {import("react").FC<any>}
 */
export const SectionHeading = ({ index, title, subtitle, align = "left", className }) => {
  return (
    <div className={cn("mb-8", align === "center" && "text-center", className)}>
      <div className={cn("mb-3 flex items-center gap-3", align === "center" && "justify-center")}>
        <span className="eyebrow">{index}</span>
        <span className="h-px w-12 bg-gradient-to-r from-coral/60 to-transparent" />
      </div>
      <TextAnimation
        as="h2"
        text={title}
        lineAnime
        className="h-display text-4xl sm:text-5xl"
      />
      {subtitle && (
        <ScrollAnimation delay={0.1}>
          <p className={cn("mt-4 max-w-xl text-base text-muted-foreground", align === "center" && "mx-auto")}>
            {subtitle}
          </p>
        </ScrollAnimation>
      )}
    </div>
  );
};
