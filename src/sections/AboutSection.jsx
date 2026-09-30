import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollHighlightText } from "@/components/ui/scroll-text";
import { Timeline, TimelineRow, LogoTile } from "@/components/ui/timeline";
import { aboutIntro, aboutAccent, education } from "@/data/copy";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHeading index="01" title="About" />
        <ScrollHighlightText
          text={aboutIntro}
          accent={aboutAccent}
          className="max-w-3xl text-xl leading-snug tracking-tight text-ink sm:text-2xl"
        />

        <Timeline title="Education" className="mt-14">
          {education.map((e, i) => (
            <TimelineRow key={e.school} date={e.date} delay={i * 0.06}>
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
