import { SectionHeading } from "@/components/ui/section-heading";
import { SkillsPlayground } from "@/components/physics/SkillsPlayground";
import { skillCategories } from "@/data/copy";

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHeading index="03" title="Technical Skills" subtitle="The stack behind the work. Pick things up and throw them around." />
        <SkillsPlayground categories={skillCategories} />
      </div>
    </section>
  );
}
