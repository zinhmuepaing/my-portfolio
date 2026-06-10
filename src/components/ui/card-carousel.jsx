// @ts-nocheck
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ProjectCard } from "@/components/ui/project-card";

/**
 * NOTE: No longer used by ProjectsSection (which now renders ProjectCard
 * inside the PinnedShowcase horizontal track). Kept for reference, like
 * animated-card.jsx.
 *
 * @typedef {import("@/components/ui/project-card").Project} Project
 */

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
