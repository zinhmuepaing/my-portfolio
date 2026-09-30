import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GlassCard, GlassButton } from "@/components/ui/glass";
import { navItems, profile } from "@/data/copy";
import { cn } from "@/lib/utils";

const scrollToId = (id) => {
  if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
  else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex flex-col items-center gap-2 px-4">
      <GlassCard refract className="flex h-12 items-center gap-1 rounded-full pl-2 pr-1.5">
        <button
          type="button"
          onClick={() => go("top")}
          aria-label="Back to top"
          className="mr-1 h-8 w-8 shrink-0 overflow-hidden rounded-full bg-white shadow-[0_0_0_2px_#EC4D25] transition-transform hover:scale-110"
        >
          <img src={profile.avatar} alt="" className="h-full w-full object-cover" />
        </button>

        <nav className="hidden items-center lg:flex" aria-label="Sections">
          {navItems.map(({ name, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors",
                active === id ? "bg-white/80 text-coral shadow-sm" : "text-[#2d2d2d] hover:text-ink"
              )}
            >
              {name}
            </button>
          ))}
        </nav>

        <GlassButton variant="primary" href={profile.resumeUrl} className="ml-1 hidden sm:inline-flex">
          Resume
        </GlassButton>
        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </GlassCard>

      {open && (
        <GlassCard className="w-full max-w-xs rounded-3xl p-2 lg:hidden">
          {navItems.map(({ name, id }) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className={cn(
                "block w-full rounded-2xl px-4 py-2.5 text-left text-sm font-medium",
                active === id ? "bg-white/80 text-coral" : "text-[#2d2d2d]"
              )}
            >
              {name}
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block rounded-2xl px-4 py-2.5 text-sm font-semibold text-coral sm:hidden"
          >
            Resume
          </a>
        </GlassCard>
      )}
    </header>
  );
}
