// @ts-nocheck
import { PinnedShowcase } from "@/components/scroll/PinnedShowcase";
import { sectionMeta } from "@/data/copy";
import { projects } from "@/sections/ProjectsSection";
import { BrutalProjectCard } from "../ui/BrutalProjectCard";

export default function BrutalProjects() {
  return (
    <section id="projects" className="py-12">
      <PinnedShowcase
        gapClassName="gap-6"
        showProgress={false}
        heading={
          // Compact heading so the heading + card row fit inside the pinned
          // 100vh frame (the frame clips overflow), keeping the card bottoms
          // (GitHub button) visible on shorter laptop viewports.
          <div className="mx-auto mb-6 w-full max-w-6xl px-4 sm:px-8">
            <div className="flex items-center gap-3">
              <span className="brutal-mono text-xs font-bold tracking-[0.3em] text-brutal-ink/70">
                [ {sectionMeta.projects.index} ]
              </span>
              <span className="h-[0.1875rem] w-12 bg-brutal-ink sm:w-20" />
            </div>
            <h2 className="brutal-display mt-2 text-3xl font-extrabold uppercase sm:text-4xl">
              {sectionMeta.projects.title}
            </h2>
            <p className="mt-1 max-w-xl text-sm text-brutal-ink/70">
              {sectionMeta.projects.desc}
            </p>
          </div>
        }
      >
        {projects.map((project) => (
          <div key={project.title} className="flex w-[18.75rem] shrink-0 sm:w-[20.625rem]">
            <BrutalProjectCard project={project} />
          </div>
        ))}
      </PinnedShowcase>
    </section>
  );
}
