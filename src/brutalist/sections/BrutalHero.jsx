// @ts-nocheck
import { Github, Linkedin, Mail } from "lucide-react";
import { profile, heroBio } from "@/data/copy";
import { BrutalButton } from "../ui/BrutalButton";
import { scrollToId } from "../scrollToId";

const socialLinks = [
  { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: Github, href: profile.socials.github, label: "GitHub" },
  { icon: Mail, href: profile.socials.email, label: "Email" },
];

export default function BrutalHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center px-4 py-20 sm:px-6 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Text */}
        <div>
          <span className="brutal-reveal brutal-mono inline-block border-[3px] border-brutal-ink bg-brutal-blue px-3 py-1 text-xs font-bold uppercase tracking-widest text-brutal-cream shadow-brutal-sm">
            {profile.eyebrow}
          </span>

          <h1
            data-parallax="18"
            className="brutal-display mt-6 text-[clamp(3rem,11vw,7.5rem)] font-extrabold uppercase text-brutal-ink"
          >
            {profile.name}
          </h1>

          <p className="brutal-reveal mt-4 max-w-xl border-l-[5px] border-brutal-orange pl-4 text-lg font-medium text-brutal-ink sm:text-xl">
            {profile.role}
          </p>

          <p className="brutal-reveal mt-6 max-w-xl text-base leading-relaxed text-brutal-ink/80">
            {heroBio.pre}
            <mark className="bg-brutal-acid px-1 font-bold text-brutal-ink">
              {heroBio.bold}
            </mark>
            {heroBio.post}
          </p>

          <div className="brutal-reveal mt-8 flex flex-wrap gap-4">
            <BrutalButton
              variant="accent"
              accent="bg-brutal-acid"
              onClick={() => scrollToId("projects")}
            >
              View My Projects
            </BrutalButton>
            <BrutalButton href={profile.resumeUrl} variant="ink">
              View Resume
            </BrutalButton>
          </div>

          <div className="brutal-reveal mt-8 flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="flex h-11 w-11 items-center justify-center border-[3px] border-brutal-ink bg-brutal-cream shadow-brutal-sm transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-brutal-pink hover:text-brutal-cream"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="brutal-reveal flex justify-center lg:justify-end">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-4 translate-y-4 border-[4px] border-brutal-ink bg-brutal-blue"
            />
            <img
              src={profile.photo}
              alt={profile.name}
              data-parallax="24"
              className="relative w-60 border-[4px] border-brutal-ink object-cover object-top sm:w-72 md:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
