import { SectionHeading } from "@/components/ui/section-heading";
import { SkillsPlayground } from "@/components/physics/SkillsPlayground";
import { skillCategories } from "@/data/copy";

export default function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHeading title="Technical Skills" subtitle="Everything I've used in projects. You can drag the chips around." />
        <SkillsPlayground categories={skillCategories} />
      </div>
    </section>
  );
}
