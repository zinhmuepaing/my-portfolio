// @ts-nocheck
import { Github, Linkedin, Mail } from "lucide-react";
import { profile, footerNote } from "@/data/copy";

const MARQUEE =
  "ZIN HMUE PAING — SOFTWARE · AI · DATA — BUILT WITH NO APOLOGIES — ";

const socialLinks = [
  { icon: Github, href: profile.socials.github, label: "GitHub" },
  { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: profile.socials.email, label: "Email" },
];

export default function BrutalFooter() {
  return (
    <footer className="relative z-10 border-t-[0.25rem] border-brutal-ink bg-brutal-ink text-brutal-cream">
      {/* Marquee */}
      <div className="overflow-hidden border-b-[0.1875rem] border-brutal-cream/20 bg-brutal-acid py-3">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          <span className="brutal-display text-xl font-extrabold uppercase text-brutal-ink">
            {MARQUEE.repeat(4)}
          </span>
          <span className="brutal-display text-xl font-extrabold uppercase text-brutal-ink" aria-hidden>
            {MARQUEE.repeat(4)}
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="brutal-mono text-xs uppercase tracking-wider text-brutal-cream/70">
          © {new Date().getFullYear()} {profile.name}. {footerNote}
        </p>
        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith("mailto:")
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="flex h-9 w-9 items-center justify-center border-[0.125rem] border-brutal-cream/40 text-brutal-cream hover:border-brutal-acid hover:bg-brutal-acid hover:text-brutal-ink"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
