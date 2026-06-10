// @ts-nocheck
import { ExternalLink } from "lucide-react";
import { sectionMeta } from "@/data/copy";
import { certificates } from "@/sections/CertificatesSection";
import { BrutalHeading } from "../ui/BrutalHeading";

export default function BrutalCertificates() {
  return (
    <section id="certificates" className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <BrutalHeading
          index={sectionMeta.certificates.index}
          title={sectionMeta.certificates.title}
          desc={sectionMeta.certificates.desc}
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <article
              key={cert.title}
              className="brutal-reveal flex flex-col border-[4px] border-brutal-ink bg-brutal-cream shadow-brutal transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden border-b-[4px] border-brutal-ink bg-white">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center border-[2px] border-brutal-ink bg-white">
                    <img src={cert.logo} alt={cert.issuer} className="h-5 w-5 object-contain" />
                  </span>
                  <span className="brutal-mono text-xs font-bold uppercase tracking-wider text-brutal-ink/70">
                    {cert.issuer}
                  </span>
                </div>
                <h3 className="brutal-display mt-3 text-base font-extrabold uppercase leading-tight">
                  {cert.title}
                </h3>

                <div className="mt-auto pt-5">
                  {cert.disabled ? (
                    <span className="block break-words border-[3px] border-dashed border-brutal-ink/40 bg-brutal-cream px-3 py-2 text-[11px] font-semibold text-brutal-ink/60">
                      {cert.buttonLabel}
                    </span>
                  ) : (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brutal-btn !rounded-none w-full !px-4 !py-2.5 text-xs"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      View credential
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
