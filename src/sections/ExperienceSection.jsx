import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline, TimelineRow, LogoTile } from "@/components/ui/timeline";
import { experience } from "@/data/copy";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHeading index="02" title="Experience" subtitle="Where I have shipped real work." />
        <Timeline>
          {experience.map((x, i) => (
            <TimelineRow key={x.company} date={x.date} delay={i * 0.06}>
              <article className="tl-card tl-work">
                <LogoTile src={x.logo} alt={`${x.company} logo`} />
                <div className="tl-work-text">
                  <div className="tl-heading">{x.role}</div>
                  <div className="tl-context">{x.company}</div>
                  <ul className="tl-list">
                    {x.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </TimelineRow>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
