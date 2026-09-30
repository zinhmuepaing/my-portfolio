import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline, TimelineRow, LogoTile, PillLink } from "@/components/ui/timeline";
import { cca } from "@/data/copy";

export default function CCASection() {
  return (
    <section id="cca" className="section">
      <div className="wrap">
        <SectionHeading
          index="05"
          title="CCA & Leadership"
          subtitle="Clubs, programmes, and roles beyond the classroom."
        />
        <Timeline>
          {cca.map((c, i) => (
            <TimelineRow key={`${c.org}-${c.title ?? "roles"}`} date={c.date} delay={i * 0.04}>
              <article className="tl-card tl-cca">
                <span className="tl-cca-watermark" aria-hidden="true">
                  {c.watermark}
                </span>
                <LogoTile src={c.logo} alt="" className="self-start" />
                <div className="tl-cca-content">
                  {c.roles ? (
                    <ol className="tl-cca-roles" aria-label="Roles">
                      {c.roles.map((r, ri) => (
                        <li key={r.title}>
                          <h4 className="tl-heading">
                            {r.title}
                            <span className="tl-cca-date">, {r.when}</span>
                          </h4>
                          {ri === 0 && <div className="tl-context mt-1">{c.org}</div>}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <>
                      <h4 className="tl-heading">{c.title}</h4>
                      <div className="tl-context">{c.org}</div>
                    </>
                  )}
                  {c.tags && (
                    <div className="tl-tags mb-2.5">
                      {c.tags.map((t) => (
                        <span key={t} className="tl-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  {c.body && <p className="tl-body">{c.body}</p>}
                  {c.links && (
                    <div className="tl-links">
                      {c.links.map((l) => (
                        <PillLink key={l.href} href={l.href}>
                          {l.label}
                        </PillLink>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </TimelineRow>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
