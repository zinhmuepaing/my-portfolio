import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useReducedMotion } from "framer-motion";
import { ChevronDown, Play, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline, TimelineRow, LogoTile, PillLink } from "@/components/ui/timeline";
import { SkeletonImg } from "@/components/ui/skeleton-img";
import { GlassButton } from "@/components/ui/glass";
import { GitHubIcon } from "@/components/ui/brand-icons";
import { achievementGroups } from "@/data/copy";
import { cn } from "@/lib/utils";

const linkIcon = {
  video: <Play className="h-[14px] w-[14px]" />,
  github: <GitHubIcon className="h-[15px] w-[15px]" />,
};

/** Award with photos: photo strip on top, logo pinned where photo meets card. */
function PhotoAward({ a, onOpen }) {
  return (
    <article className="tl-card tl-app tl-award">
      <div className="tl-app-visual">
        <div className={cn("tl-award-photos", a.photos.length === 2 && "is-pair", a.photos.length === 3 && "is-trio")}>
          {a.photos.map((p) => (
            <button
              key={p.src}
              type="button"
              className="tl-award-photo"
              onClick={(e) => onOpen(p, e.currentTarget.querySelector("img"))}
              aria-label={`View larger: ${p.alt}`}
            >
              <SkeletonImg src={p.src} alt={p.alt} width={p.w} height={p.h} style={{ objectPosition: p.pos, objectFit: p.fit }} className="tl-award-shot" />
            </button>
          ))}
        </div>
      </div>
      <div className="tl-app-text tl-award-text">
        <div className="tl-award-head">
          {a.logo && <LogoTile src={a.logo} alt="" pad={a.pad} variant={a.logoStyle} className="tl-award-logo" />}
          <div className="min-w-0">
            <h4 className="tl-heading">{a.title}</h4>
            <div className="tl-context !mb-0">{a.context}</div>
          </div>
        </div>
        <p className="tl-app-body">{a.description}</p>
        {a.links && (
          <div className="tl-links !mt-0">
            {a.links.map((l) => (
              <PillLink key={l.href} href={l.href} icon={linkIcon[l.kind]}>
                {l.label}
              </PillLink>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function LogoAward({ a }) {
  return (
    <article className="tl-card tl-work">
      <LogoTile src={a.logo} alt="" pad={a.pad} />
      <div className="tl-work-text">
        <div className="tl-heading">{a.title}</div>
        <div className="tl-context">{a.context}</div>
        <p className="tl-body">{a.description}</p>
      </div>
    </article>
  );
}

const VT_NAME = "award-photo";

/**
 * Full-size photo in a native <dialog> (Esc and backdrop click close it).
 * Where View Transitions exist, the thumbnail morphs into the large photo.
 */
function usePhotoViewer() {
  const dialogRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const reduce = useReducedMotion();
  const canMorph = () => !reduce && typeof document.startViewTransition === "function";

  const open = (p, source) => {
    const show = () => {
      flushSync(() => setPhoto({ ...p, source }));
      dialogRef.current?.showModal();
    };
    if (!canMorph() || !source) return show();
    source.style.viewTransitionName = VT_NAME;
    document.startViewTransition(() => {
      source.style.viewTransitionName = "";
      show();
    });
  };

  const close = () => {
    const source = photo?.source;
    const hide = () => {
      dialogRef.current?.close();
      flushSync(() => setPhoto(null));
    };
    if (!canMorph() || !source) return hide();
    const t = document.startViewTransition(() => {
      hide();
      source.style.viewTransitionName = VT_NAME;
    });
    t.finished.finally(() => (source.style.viewTransitionName = ""));
  };

  const viewer = (
    <dialog
      ref={dialogRef}
      className="photo-viewer"
      onClick={(e) => e.target === e.currentTarget && close()}
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
    >
      {photo && (
        <>
          <img src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} style={{ viewTransitionName: VT_NAME }} />
          <button type="button" className="photo-viewer-close" onClick={close} aria-label="Close photo">
            <X className="h-4 w-4" />
          </button>
        </>
      )}
    </dialog>
  );
  return { open, viewer };
}

/** One titled timeline; cards past `initial` wait behind "Show all". */
function AwardGroup({ group, onOpen, className }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? group.items : group.items.slice(0, group.initial);
  return (
    <div className={className}>
      <Timeline title={group.title}>
        {visible.map((a) => (
          <TimelineRow key={a.title} date={a.date}>
            {a.photos ? <PhotoAward a={a} onOpen={onOpen} /> : <LogoAward a={a} />}
          </TimelineRow>
        ))}
      </Timeline>
      {group.items.length > group.initial && (
        <div className="mt-2 flex justify-center">
          <GlassButton onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
            {showAll ? "Show fewer" : `Show all ${group.items.length}`}
            <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", showAll && "rotate-180")} />
          </GlassButton>
        </div>
      )}
    </div>
  );
}

export default function AchievementsSection() {
  const { open, viewer } = usePhotoViewer();
  return (
    <section id="achievements" className="section">
      <div className="wrap">
        <SectionHeading title="Achievements" />
        {achievementGroups.map((g, i) => (
          <AwardGroup key={g.title} group={g} onOpen={open} className={cn(i > 0 && "mt-14")} />
        ))}
      </div>
      {viewer}
    </section>
  );
}
