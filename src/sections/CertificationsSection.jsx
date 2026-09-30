import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { GlassCard, GlassButton } from "@/components/ui/glass";
import { certifications } from "@/data/copy";
import { cn } from "@/lib/utils";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section">
      <div className="wrap">
        <SectionHeading
          index="06"
          title="Certifications"
          subtitle="Industry credentials backing the skills."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <ScrollAnimation key={c.title} delay={(i % 2) * 0.08} className={cn(i === 0 && "sm:col-span-2")}>
              <GlassCard className="flex h-full flex-col rounded-[20px] p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 min-w-12 shrink-0 place-items-center rounded-xl bg-white px-2.5 shadow-[0_0_0_1px_rgba(0,0,0,0.07)]">
                    <img src={c.logo} alt={`${c.issuer} logo`} className="h-6 w-auto max-w-[112px] object-contain" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {c.issuer}
                    </p>
                    <h3 className="mt-1 font-serif text-xl leading-snug text-ink sm:text-2xl">{c.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <div className="mt-auto pt-5">
                  {c.url ? (
                    <GlassButton href={c.url}>
                      View credential
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </GlassButton>
                  ) : (
                    <p className="break-all font-mono text-[11px] leading-relaxed text-muted-foreground">
                      Credential ID: {c.credentialId}
                    </p>
                  )}
                </div>
              </GlassCard>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
