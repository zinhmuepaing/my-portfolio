// @ts-nocheck
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { TechIcon } from "@/components/ui/project-card";

/**
 * Brutalist project card — mirrors the standard ProjectCard's content
 * (image, title, See more/less description, note/shortNote, tech icons,
 * GitHub link) with thick borders + hard offset shadow.
 *
 * @type {React.FC<{ project: import("@/components/ui/project-card").Project }>}
 */
export function BrutalProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex h-full flex-col overflow-hidden border-[4px] border-brutal-ink bg-brutal-cream shadow-brutal transition-transform duration-150 hover:-translate-x-1 hover:-translate-y-1">
      {/* Image */}
      <div className="h-40 shrink-0 overflow-hidden border-b-[4px] border-brutal-ink bg-white">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center brutal-mono text-xs text-brutal-ink/50">
            [ IMAGE_PENDING ]
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="brutal-display mb-2 text-lg font-extrabold uppercase leading-tight">
          {project.title}
        </h3>

        <p
          className={cn(
            "text-sm leading-relaxed text-brutal-ink/80",
            !expanded && "line-clamp-3"
          )}
        >
          {project.description}
        </p>

        {expanded && project.note && (
          <p className="mt-2 text-sm font-bold leading-relaxed text-brutal-ink">
            {project.note}
          </p>
        )}

        {!expanded && project.shortNote && (
          <p className="mt-2 border-l-[3px] border-brutal-orange bg-brutal-orange/15 px-2 py-1 text-xs font-bold text-brutal-ink">
            {project.shortNote}
          </p>
        )}

        <button
          onClick={() => setExpanded((v) => !v)}
          className="brutal-mono mb-3 mt-2 self-start text-xs font-bold uppercase tracking-wider text-brutal-blue hover:underline"
        >
          {expanded ? "See less" : "See more"}
        </button>

        {/* Tech icons */}
        <div className="mb-5 flex flex-wrap items-center gap-2">
          {project.tech.map((t) => (
            <TechIcon key={t} name={t} />
          ))}
        </div>

        {/* GitHub */}
        <div className="mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-btn !rounded-none w-full !px-4 !py-3 text-sm"
          >
            <ExternalLink className="h-4 w-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
