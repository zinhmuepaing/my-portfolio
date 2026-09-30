import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline, TimelineRow, LogoTile } from "@/components/ui/timeline";
import { achievements } from "@/data/copy";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section">
      <div className="wrap">
        <SectionHeading
          index="07"
          title="Achievements"
          subtitle="Recognition across academics, technical skills, and competition."
        />
        <Timeline>
          {achievements.map((a) => (
            <TimelineRow key={a.title} date={a.date}>
              <article className="tl-card tl-work">
                <LogoTile src={a.logo} alt="" pad={a.pad} />
                <div className="tl-work-text">
                  <div className="tl-heading">{a.title}</div>
                  <div className="tl-context">{a.context}</div>
                  <p className="tl-body">{a.description}</p>
                </div>
              </article>
            </TimelineRow>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
