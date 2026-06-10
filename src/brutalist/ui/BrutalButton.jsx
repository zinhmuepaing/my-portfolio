// @ts-nocheck
import { cn } from "@/lib/utils";

/**
 * Raw brutalist button. Renders an <a> when `href` is set, else a <button>.
 * Matte fill + hard offset shadow (no blur, no gradient).
 *
 * @type {React.FC<{
 *   href?: string,
 *   onClick?: () => void,
 *   children: React.ReactNode,
 *   variant?: "ink" | "accent",
 *   accent?: string,
 *   className?: string,
 *   external?: boolean,
 * }>}
 */
export function BrutalButton({
  href,
  onClick,
  children,
  variant = "ink",
  accent = "bg-brutal-acid",
  className,
  external = true,
}) {
  const variantClass =
    variant === "accent"
      ? cn(accent, "text-brutal-ink")
      : "bg-brutal-ink text-brutal-cream";

  const classes = cn("brutal-btn !rounded-none", variantClass, className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
