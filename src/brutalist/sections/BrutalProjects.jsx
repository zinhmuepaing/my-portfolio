// @ts-nocheck
import { PinnedShowcase } from "@/components/scroll/PinnedShowcase";
import { sectionMeta } from "@/data/copy";
import { projects } from "@/sections/ProjectsSection";
import { BrutalHeading } from "../ui/BrutalHeading";
import { BrutalProjectCard } from "../ui/BrutalProjectCard";

export default function BrutalProjects() {
  return (
    <section id="projects" className="py-12">
      <PinnedShowcase
        gapClassName="gap-6"
        showProgress={false}
        heading={
          <div className="mx-auto mb-10 w-full max-w-6xl px-4 sm:px-8">
            <BrutalHeading
              index={sectionMeta.projects.index}
              title={sectionMeta.projects.title}
              desc={sectionMeta.projects.desc}
            />
          </div>
        }
      >
        {projects.map((project) => (
          <div key={project.title} className="flex w-[300px] shrink-0 sm:w-[330px]">
            <BrutalProjectCard project={project} />
          </div>
        ))}
      </PinnedShowcase>
    </section>
  );
}
