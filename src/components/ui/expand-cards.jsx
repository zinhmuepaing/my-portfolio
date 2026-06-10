// @ts-nocheck
import { useState } from "react";
import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import { GlassButton } from "@/components/ui/liquid-glass";

/**
 * @typedef {Object} Certificate
 * @property {string} title
 * @property {string} issuer
 * @property {string} logo
 * @property {string} image
 * @property {string} [credentialUrl]
 * @property {string} [buttonLabel]
 * @property {boolean} [disabled]
 */

const LogoChip = ({ src, alt }) => (
  <div className="flex h-10 items-center justify-center rounded-lg bg-white/90 px-2 shadow-sm ring-1 ring-black/5">
    <img
      src={src}
      alt={alt}
      className="h-6 max-w-[96px] object-contain"
      loading="lazy"
    />
  </div>
);

const CredentialButton = ({ cert }) => {
  if (cert.disabled) {
    return (
      <button
        type="button"
        disabled
        title={cert.buttonLabel}
        className="w-full cursor-not-allowed break-all rounded-2xl border border-white/30 bg-white/10 px-4 py-2 text-left font-mono text-[11px] leading-snug text-white/80 opacity-70 backdrop-blur-sm"
      >
        {cert.buttonLabel ?? "Credential unavailable"}
      </button>
    );
  }

  return (
    <GlassButton href={cert.credentialUrl} className="!px-6 !py-3">
      <span className="flex items-center gap-2 text-sm">
        <ExternalLink className="h-4 w-4" />
        {cert.buttonLabel ?? "View credential"}
      </span>
    </GlassButton>
  );
};

const CertCard = ({ cert, isOpen, onActivate, onToggle }) => (
  <div
    onMouseEnter={onActivate}
    onClick={onToggle}
    className={cn(
      "group relative cursor-pointer overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5 transition-all duration-500 ease-in-out dark:ring-white/10",
      // Mobile: vertical accordion (animate height, full width)
      "w-full",
      isOpen ? "h-[24rem]" : "h-20",
      // Desktop: horizontal accordion (animate width, fixed height)
      "lg:h-[26rem]",
      isOpen ? "lg:w-[26rem]" : "lg:w-20"
    )}
  >
    {/* Certificate image */}
    <img
      src={cert.image}
      alt={cert.title}
      className="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />

    {/* Collapsed state: logo + issuer label */}
    <div
      className={cn(
        "absolute inset-0 flex items-center gap-3 bg-gradient-to-t from-black/70 via-black/40 to-black/20 px-4 transition-opacity duration-300 lg:flex-col lg:justify-center lg:py-6",
        isOpen ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <LogoChip src={cert.logo} alt={cert.issuer} />
      <span className="whitespace-nowrap text-sm font-semibold text-white lg:[writing-mode:vertical-rl] lg:rotate-180">
        {cert.issuer}
      </span>
    </div>

    {/* Expanded state: details + credential button */}
    <div
      className={cn(
        "absolute inset-0 flex flex-col justify-end gap-3 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 transition-opacity duration-300",
        isOpen ? "opacity-100 delay-150" : "pointer-events-none opacity-0"
      )}
    >
      <LogoChip src={cert.logo} alt={cert.issuer} />
      <div>
        <h3 className="text-lg font-bold leading-snug text-white">
          {cert.title}
        </h3>
        <p className="text-sm text-white/70">{cert.issuer}</p>
      </div>
      {/* Stop the card's toggle handler so tapping the button only follows the link */}
      <div className="pt-1" onClick={(e) => e.stopPropagation()}>
        <CredentialButton cert={cert} />
      </div>
    </div>
  </div>
);

/**
 * Expand-on-hover / tap-to-expand accordion of certificate cards.
 * Adapted for Vite/React from the expand-cards reference.
 *
 * @type {React.FC<{ certificates: Certificate[] }>}
 */
export const ExpandCards = ({ certificates }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex w-full flex-col items-stretch justify-center gap-2 lg:flex-row">
      {certificates.map((cert, idx) => (
        <CertCard
          key={cert.title}
          cert={cert}
          isOpen={openIndex === idx}
          onActivate={() => setOpenIndex(idx)}
          onToggle={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
        />
      ))}
    </div>
  );
};
