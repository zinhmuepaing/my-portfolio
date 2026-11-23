import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { Timeline, TimelineRow, LogoTile } from "@/components/ui/timeline";
import { aboutIntro, education } from "@/data/copy";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHeading title="About" />
        <ScrollAnimation className="max-w-2xl space-y-4 text-lg leading-relaxed text-ink sm:text-xl">
          {aboutIntro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </ScrollAnimation>

        <Timeline title="Education" className="mt-14">
          {education.map((e, i) => (
            <TimelineRow key={e.school} date={e.date} delay={i * 0.05}>
              <article className="tl-card tl-edu">
                <div className="tl-edu-frame">
                  <LogoTile src={e.logo} alt={`${e.school} logo`} pad />
                  <div className="min-w-0 pt-0.5">
                    <h4 className="tl-edu-title">{e.degree}</h4>
                    <div className="tl-context">{e.school}</div>
                    <ul className="tl-list">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </TimelineRow>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
