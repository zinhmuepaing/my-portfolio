// @ts-nocheck
import { sectionMeta } from "@/data/copy";
import { achievements } from "@/sections/AchievementsSection";
import { BrutalHeading } from "../ui/BrutalHeading";

const GREEN = "bg-brutal-acid px-1 font-bold text-brutal-ink";

// Phrase highlighted green wherever it appears in an achievement description.
const RANK_PHRASE = "Ranked #1 academic achiever among a cohort of 400+ students";

function highlightGreen(text) {
  const idx = text.indexOf(RANK_PHRASE);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className={GREEN}>{RANK_PHRASE}</mark>
      {text.slice(idx + RANK_PHRASE.length)}
    </>
  );
}

export default function BrutalAchievements() {
  return (
    <section
      id="achievements"
      className="border-y-[4px] border-brutal-ink bg-brutal-ink px-4 py-24 text-brutal-cream sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <BrutalHeading
          index={sectionMeta.achievements.index}
          title={sectionMeta.achievements.title}
          desc={sectionMeta.achievements.desc}
          invert
          // "Achievements" — fluid so the whole word (incl. the trailing "S")
          // fits on one mobile line instead of wrapping.
          titleClassName="text-[clamp(1.4rem,7vw,3.75rem)]"
        />

        <div className="relative mt-14 space-y-10 border-l-[4px] border-brutal-acid pl-6 sm:pl-10">
          {achievements.map((a, i) => (
            <div key={i} className="brutal-reveal relative">
              {/* Node */}
              <span className="absolute -left-[34px] top-1 flex h-6 w-6 items-center justify-center border-[3px] border-brutal-ink bg-brutal-acid brutal-mono text-[10px] font-bold text-brutal-ink sm:-left-[54px]">
                {i + 1}
              </span>

              <p className="brutal-mono text-xs font-bold uppercase tracking-widest text-brutal-acid">
                {a.year}
              </p>

              <div className="mt-3 overflow-hidden border-[4px] border-brutal-ink bg-brutal-cream text-brutal-ink shadow-brutal-lg sm:flex">
                <div className="h-44 shrink-0 overflow-hidden border-b-[4px] border-brutal-ink sm:h-auto sm:w-56 sm:border-b-0 sm:border-r-[4px]">
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${a.categoryColor}`}
                  >
                    {a.category}
                  </span>
                  <h4 className="brutal-display mt-3 text-lg font-extrabold uppercase leading-snug">
                    {a.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-brutal-ink/80">
                    {highlightGreen(a.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
