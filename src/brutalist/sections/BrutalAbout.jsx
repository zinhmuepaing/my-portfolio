// @ts-nocheck
import { aboutIntro, sectionMeta } from "@/data/copy";
import { timeline, leadershipCards } from "@/sections/AboutSection";
import { BrutalHeading } from "../ui/BrutalHeading";

const GREEN = "bg-brutal-acid px-1 font-bold text-brutal-ink";

// Brutalist-only green highlights on specific education bullets. Mirrors the
// shared text from AboutSection's timeline data (the light theme is untouched).
function renderBullet(bullet) {
  if (typeof bullet !== "string") {
    // The "Ranked #1 …" bullet (a styled JSX node in the shared data).
    return (
      <>
        <mark className={GREEN}>Ranked #1 among a cohort of over 400 students</mark>{" "}
        in Common Engineering Programme AY2024/25
      </>
    );
  }
  if (bullet === "3x Temasek Polytechnic Engineering Scholarship Recipient") {
    return <mark className={GREEN}>{bullet}</mark>;
  }
  return bullet;
}

export default function BrutalAbout() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <BrutalHeading index={sectionMeta.about.index} title={sectionMeta.about.title} />

        {/* Intro */}
        <p className="brutal-reveal mt-8 max-w-3xl border-l-[5px] border-brutal-blue pl-5 text-lg leading-relaxed text-brutal-ink sm:text-xl">
          {aboutIntro.pre}
          <span className="bg-brutal-acid px-1 font-bold">{aboutIntro.emphasis}</span>
          {aboutIntro.post}
        </p>

        {/* Education timeline */}
        <h3 className="brutal-reveal brutal-display mt-16 text-2xl font-extrabold uppercase">
          My Journey
        </h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="brutal-reveal border-[4px] border-brutal-ink bg-brutal-cream p-6 shadow-brutal"
            >
              <p className="brutal-mono text-xs font-bold uppercase tracking-widest text-brutal-orange">
                {item.period}
              </p>
              <h4 className="brutal-display mt-2 text-xl font-extrabold uppercase">
                {item.title}
              </h4>
              {item.subtitle && (
                <p className="mt-1 text-sm font-semibold text-brutal-ink/70">
                  {item.subtitle}
                </p>
              )}
              {item.bullets ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-brutal-ink/80">
                  {item.bullets.map((b, j) => (
                    <li key={j}>{renderBullet(b)}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-brutal-ink/80">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Leadership */}
        <h3 className="brutal-reveal brutal-display mt-16 text-2xl font-extrabold uppercase">
          Leadership &amp; Community
        </h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {leadershipCards.map((card) => (
            <article
              key={card.name}
              className="brutal-reveal group overflow-hidden border-[4px] border-brutal-ink bg-brutal-cream shadow-brutal transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden border-b-[4px] border-brutal-ink">
                <img
                  src={card.src}
                  alt={card.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>
              <div className="p-5">
                <h4 className="brutal-display text-lg font-extrabold uppercase leading-tight">
                  {card.name}
                </h4>
                <p className="mt-1 text-sm font-bold text-brutal-blue">
                  {card.organization}
                </p>
                <p className="brutal-mono text-[11px] uppercase tracking-wider text-brutal-ink/60">
                  {card.designation}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brutal-ink/80">
                  {card.quote}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
