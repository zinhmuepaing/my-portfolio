// @ts-nocheck
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { cn } from "@/lib/utils";

/**
 * Serif display title + optional subtitle, revealed together on scroll.
 * @type {import("react").FC<any>}
 */
export const SectionHeading = ({ title, subtitle, align = "left", className }) => (
  <ScrollAnimation className={cn("mb-8", align === "center" && "text-center", className)}>
    <h2 className="h-display text-4xl sm:text-5xl">{title}</h2>
    {subtitle && (
      <p className={cn("mt-3 max-w-xl text-base text-muted-foreground", align === "center" && "mx-auto")}>
        {subtitle}
      </p>
    )}
  </ScrollAnimation>
);
