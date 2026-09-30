import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { GlassCard } from "@/components/ui/glass";
import { cn } from "@/lib/utils";

/** Floating liquid-glass button that appears after scrolling past the hero. */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <GlassCard
      as="button"
      type="button"
      refract
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full text-ink transition-all duration-300 hover:scale-110",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </GlassCard>
  );
}
