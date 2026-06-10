// @ts-nocheck
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { ExternalLink } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { cn } from "@/lib/utils";
import { GlassButton } from "@/components/ui/liquid-glass";

/**
 * @typedef {Object} Project
 * @property {string} title
 * @property {string} description
 * @property {string[]} tech
 * @property {string} [image]
 * @property {string} [shortNote]
 * @property {string} [note]
 * @property {string} github
 */

const devicon = (slug) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;
const simpleicon = (slug, color) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

// Icon lookup keyed by the exact tech label used in ProjectsSection.
// Reuses the devicon CDN + local images already used in SkillsSection;
// colored SimpleIcons fill the gaps. Labels with no reliable logo are
// omitted and fall back to a lettered chip in <TechIcon>.
const TECH_ICONS = {
  Python: devicon("python/python-original"),
  "Next.js": simpleicon("nextdotjs", "64748B"),
  React: devicon("react/react-original"),
  TypeScript: devicon("typescript/typescript-original"),
  JavaScript: devicon("javascript/javascript-original"),
  "Claude Haiku 4.5": simpleicon("anthropic", "D97757"),
  Claude: simpleicon("anthropic", "D97757"),
  "Google Cloud TTS": devicon("googlecloud/googlecloud-original"),
  Flask: devicon("flask/flask-original"),
  ESP32: simpleicon("espressif", "E7352C"),
  Telegram: simpleicon("telegram", "26A5E4"),
  "Chart.js": simpleicon("chartdotjs", "FF6384"),
  Pandas: devicon("pandas/pandas-original"),
  SQLite: devicon("sqlite/sqlite-original"),
  "Discord API": simpleicon("discord", "5865F2"),
  Pygame: `${import.meta.env.BASE_URL}images/pygame.png`,
  LangChain: `${import.meta.env.BASE_URL}images/langchain.png`,
  "Azure OpenAI": devicon("azure/azure-original"),
  TensorFlow: devicon("tensorflow/tensorflow-original"),
  "Scikit-learn": devicon("scikitlearn/scikitlearn-original"),
  Tableau: `${import.meta.env.BASE_URL}images/Tableau-logo.png`,
  "Raspberry Pi": devicon("raspberrypi/raspberrypi-original"),
  MQTT: simpleicon("mqtt", "8A4F9E"),
  MySQL: devicon("mysql/mysql-original"),
  Grafana: devicon("grafana/grafana-original"),
  "ASP.NET Blazor": devicon("blazor/blazor-original"),
  "Entity Framework": devicon("dotnetcore/dotnetcore-original"),
  "SQL Server": `${import.meta.env.BASE_URL}images/sqlLogo.png`,
};

const TechIcon = ({ name }) => {
  const icon = TECH_ICONS[name];
  return (
    <div
      title={name}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/5 bg-white/80 shadow-sm dark:border-white/10 dark:bg-gray-800/70"
    >
      {icon ? (
        <img
          src={icon}
          alt={name}
          className="h-5 w-5 object-contain"
          loading="lazy"
        />
      ) : (
        <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400">
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-xl ring-1 ring-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-gray-900/60 dark:ring-white/10">
      {/* Image */}
      <div className="h-44 shrink-0 overflow-hidden bg-gray-100/80 dark:bg-gray-800/80">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
            Image Coming Soon
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>

        <p
          className={cn(
            "text-sm leading-relaxed text-gray-500 dark:text-gray-400",
            !expanded && "line-clamp-3"
          )}
        >
          {project.description}
        </p>
        {expanded && project.note && (
          <p className="mt-2 text-sm font-bold leading-relaxed text-gray-700 dark:text-gray-200">
            {project.note}
          </p>
        )}

        {/* Prominent short note shown by default (full version lives in the expanded view) */}
        {!expanded && project.shortNote && (
          <p className="mt-2 rounded-md border-l-2 border-[#d84f2a] bg-[#d84f2a]/10 px-2 py-1 text-xs font-semibold text-[#d84f2a]">
            {project.shortNote}
          </p>
        )}

        <button
          onClick={() => setExpanded((v) => !v)}
          className="mb-3 mt-1 cursor-pointer self-start text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400"
        >
          {expanded ? "See less" : "See more"}
        </button>

        {/* Tech stack icons */}
        <div className="mb-5 flex flex-wrap items-center gap-2">
          {project.tech.map((t) => (
            <TechIcon key={t} name={t} />
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-auto">
          <GlassButton href={project.github} className="!px-6 !py-3">
            <span className="flex items-center gap-2 text-sm">
              <ExternalLink className="h-4 w-4" />
              View on GitHub
            </span>
          </GlassButton>
        </div>
      </div>
    </div>
  );
};

/**
 * Coverflow carousel of project cards, adapted for Vite/React from the
 * Swiper card-carousel pattern. Wrapped in a theme-aware glass container.
 *
 * @type {React.FC<{ projects: Project[], autoplayDelay?: number, showPagination?: boolean, showNavigation?: boolean }>}
 */
export const CardCarousel = ({
  projects,
  autoplayDelay = 2500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .project-carousel .swiper {
    width: 100%;
    padding-top: 24px;
    padding-bottom: 56px;
    /* let lifted/shadowed cards breathe beyond the track edges */
    overflow: visible;
  }
  .project-carousel .swiper-slide {
    width: 320px;
    height: auto;
  }
  .project-carousel .swiper-slide > * {
    height: 100%;
  }
  .project-carousel .swiper-3d .swiper-slide-shadow-left,
  .project-carousel .swiper-3d .swiper-slide-shadow-right {
    background-image: none;
  }
  .project-carousel .swiper-pagination-bullet {
    background: rgb(107 114 128);
  }
  .project-carousel .swiper-button-next,
  .project-carousel .swiper-button-prev {
    color: rgb(107 114 128);
  }
  `;

  return (
    <div className="project-carousel w-full">
      <style>{css}</style>
      {/* No bordered wrapper box — cards float and layer directly over the page background */}
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden px-2 py-2">
          <Swiper
            spaceBetween={40}
            autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2.5,
            }}
            pagination={showPagination}
            navigation={
              showNavigation
                ? {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }
                : undefined
            }
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </div>
  );
};
