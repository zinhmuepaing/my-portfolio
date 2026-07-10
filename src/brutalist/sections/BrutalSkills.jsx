// @ts-nocheck
import { sectionMeta } from "@/data/copy";
import { skillCategories } from "@/sections/SkillsSection";
import { BrutalHeading } from "../ui/BrutalHeading";

function SkillChip({ skill }) {
  return (
    <span className="flex items-center gap-2 border-[0.1875rem] border-brutal-ink bg-brutal-cream px-3 py-1.5 text-sm font-semibold text-brutal-ink shadow-brutal-sm">
      {skill.icon ? (
        <img
          src={skill.icon}
          alt=""
          loading="lazy"
          className="h-5 w-5 flex-shrink-0"
        />
      ) : (
        <span className="flex h-5 w-5 items-center justify-center bg-brutal-ink text-[10px] font-bold text-brutal-cream">
          {skill.name.charAt(0)}
        </span>
      )}
      <span className="whitespace-nowrap">{skill.name}</span>
    </span>
  );
}

export default function BrutalSkills() {
  return (
    <section id="skills" className="border-y-[0.25rem] border-brutal-ink bg-brutal-blue px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <BrutalHeading
          index={sectionMeta.skills.index}
          title={sectionMeta.skills.title}
          desc={sectionMeta.skills.desc}
          invert
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="brutal-reveal border-[0.25rem] border-brutal-ink bg-brutal-cream p-6 shadow-brutal-lg"
            >
              <div className="mb-4 flex items-baseline gap-3">
                <span className="brutal-mono text-sm font-bold text-brutal-orange">
                  0{i + 1}
                </span>
                <h3 className="brutal-display text-xl font-extrabold uppercase sm:text-2xl">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
