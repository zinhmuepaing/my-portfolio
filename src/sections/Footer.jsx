import { GitHubIcon, GmailIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { GlassCard } from "@/components/ui/glass";
import { profile, footerNote } from "@/data/copy";

const links = [
  { label: "GitHub", href: profile.socials.github, Icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedInIcon, external: true },
  { label: "Gmail", href: profile.socials.email, Icon: GmailIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] py-8">
      <div className="wrap flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}. {footerNote}
        </p>
        <div className="flex gap-2">
          {links.map(({ label, href, Icon, external }) => (
            <GlassCard
              key={label}
              as="a"
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="grid h-10 w-10 place-items-center rounded-full text-ink transition-transform hover:scale-110"
            >
              <Icon className="h-[18px] w-[18px]" />
            </GlassCard>
          ))}
        </div>
      </div>
    </footer>
  );
}
