// @ts-nocheck
import { useState } from "react";
import { Globe } from "lucide-react";

import { cn } from "@/lib/utils";
import { PillLink } from "@/components/ui/timeline";
import { GitHubIcon } from "@/components/ui/brand-icons";
import { SkeletonImg } from "@/components/ui/skeleton-img";

/**
 * Project card in the reference's "application" style: image strip overlapped
 * by a text card with title, context line, body, tags and glass link pills.
 * @type {import("react").FC<{ project: any }>}
 */
export const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="tl-card tl-app" aria-label={project.title}>
      {project.image && (
        <div className="tl-app-visual" aria-hidden="true">
          <SkeletonImg className="tl-app-shot" src={project.image} alt="" imgClassName={cn(project.contain && "contain")} />
        </div>
      )}

      <div className="tl-app-text">
        <div>
          <h4 className="tl-app-title">{project.title}</h4>
          <div className="tl-context mt-1.5 !mb-0">{project.context}</div>
        </div>

        <div>
          <p className="tl-app-body">{project.description}</p>
          {/* Only projects with a longer note get the See more toggle. */}
          {project.note && (
            <>
              <p className="tl-context mt-2.5 !mb-0 italic">{expanded ? project.note : project.shortNote}</p>
              <button
                onClick={() => setExpanded((v) => !v)}
                className="mt-1 cursor-pointer text-xs font-medium text-coral hover:underline"
              >
                {expanded ? "See less" : "See more"}
              </button>
            </>
          )}
        </div>

        <p className="tl-tech">{project.tech.join(" · ")}</p>

        <div className="tl-links !mt-0">
          {project.buttonUrl && (
            <PillLink href={project.buttonUrl} icon={<Globe className="h-[15px] w-[15px]" />}>
              {project.buttonLabel ?? "Website"}
            </PillLink>
          )}
          <PillLink href={project.github} icon={<GitHubIcon className="h-[15px] w-[15px]" />}>
            GitHub
          </PillLink>
        </div>
      </div>
    </article>
  );
};
