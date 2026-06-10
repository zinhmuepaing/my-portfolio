// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { StarWarsToggle } from "@/components/ui/star-wars-toggle-switch";
import { scrollToId } from "./scrollToId";
import BrutalFooter from "./sections/BrutalFooter";

const NAV = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Certs", id: "certificates" },
  { name: "Wins", id: "achievements" },
  { name: "Contact", id: "contact" },
];

/** Custom cursor dot + follower (desktop pointers only). */
function BrutalCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let rx = 0, ry = 0, x = 0, y = 0, raf;
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 bg-brutal-ink md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-8 w-8 border-2 border-brutal-ink md:block"
      />
    </>
  );
}

/** @type {React.FC<{ children: React.ReactNode }>} */
export function BrutalistChrome({ children }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <div className="brutal-root relative min-h-screen overflow-x-hidden">
      <BrutalCursor />

      {/* NAV */}
      <nav className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b-[3px] border-brutal-ink bg-brutal-cream px-4 sm:px-6">
        <button
          onClick={() => handleNav("hero")}
          className="brutal-display text-lg font-extrabold uppercase tracking-tight sm:text-xl"
        >
          ZHP<span className="text-brutal-blue">_</span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="brutal-mono border-2 border-transparent px-3 py-1 text-xs font-bold uppercase tracking-wider hover:border-brutal-ink hover:bg-brutal-acid"
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <StarWarsToggle />
          <button
            className="border-2 border-brutal-ink p-1 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-x-0 top-20 z-40 border-b-[3px] border-brutal-ink bg-brutal-cream lg:hidden">
          <div className="flex flex-col">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="brutal-mono border-b-2 border-brutal-ink/20 px-6 py-4 text-left text-sm font-bold uppercase tracking-wider hover:bg-brutal-acid"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* PAGE */}
      <main className="relative z-10 pt-20">{children}</main>

      <BrutalFooter />
    </div>
  );
}

export default BrutalistChrome;
