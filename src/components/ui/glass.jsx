// @ts-nocheck
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Lens map for the Chromium-only `.glass-refract` variant. Render once in the
 * layout. Other browsers ignore it and keep the plain frosted blur.
 */
export const GlassFilter = () => (
  <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
    <filter id="lg-refract" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.006 0.012" numOctaves="2" seed="7" result="noise" />
      <feGaussianBlur in="noise" stdDeviation="2" result="map" />
      <feDisplacementMap in="SourceGraphic" in2="map" scale="26" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>
);

/**
 * Frosted liquid-glass surface. `refract` adds the lens distortion.
 * @type {import("react").ForwardRefExoticComponent<any>}
 */
export const GlassCard = forwardRef(function GlassCard(
  { as: Tag = "div", refract = false, blur, className, style, children, ...props },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={cn("glass", refract && "glass-refract", className)}
      style={blur ? { "--glass-blur": `${blur}px`, ...style } : style}
      {...props}
    >
      {children}
    </Tag>
  );
});

/**
 * Pill button/link. variant: "glass" (default) | "primary" (coral) | "ink".
 * Renders an <a> when `href` is set, otherwise a <button>.
 * @type {import("react").ForwardRefExoticComponent<any>}
 */
export const GlassButton = forwardRef(function GlassButton(
  { variant = "glass", href, className, children, ...props },
  ref
) {
  const cls = cn(
    variant === "primary" ? "btn-primary" : variant === "ink" ? "btn-ink" : "btn-glass",
    className
  );
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        ref={ref}
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} type="button" className={cls} {...props}>
      {children}
    </button>
  );
});
