// @ts-nocheck
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollNav } from "@/components/scroll/scroll-context";
import { getLenis } from "@/components/scroll/SmoothScrollProvider";

/**
 * @typedef {{name: string, url: string, icon: import('lucide-react').LucideIcon}} NavItem
 */

/**
 * @type {React.FC<{items: NavItem[], className?: string}>}
 */
export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  // When the pinned horizontal track is active it drives the active section
  // and nav clicks; otherwise the IntersectionObserver path below applies.
  const scrollNav = useScrollNav();
  const horizontal = scrollNav?.horizontalActive ?? false;

  useEffect(() => {
    if (!horizontal || !scrollNav?.activeSection) return;
    const match = items.find((item) => item.url === scrollNav.activeSection);
    if (match) setActiveTab(match.name);
  }, [horizontal, scrollNav, items]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (horizontal) return;
    const sectionIds = items.map((item) => item.url);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const match = items.find((item) => item.url === id);
              if (match) setActiveTab(match.name);
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [items, horizontal]);

  const handleClick = (item) => {
    setActiveTab(item.name);
    if (horizontal) {
      scrollNav.scrollToSection(item.url);
      return;
    }
    const el = document.getElementById(item.url);
    if (el) {
      // Prefer Lenis so programmatic scrolls share the same momentum engine
      // instead of fighting it; falls back to native when Lenis is off.
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 md:bottom-auto md:top-0 left-1/2 -translate-x-1/2 z-50 md:pt-6",
        className
      )}
    >
      <div className="flex items-center gap-0.5 sm:gap-1 md:gap-3 bg-white/5 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-3 sm:px-4 md:px-6 py-2 rounded-full transition-colors",
                "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",
                isActive && "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-gray-900/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {!isMobile && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-900 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-gray-900/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-gray-900/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-gray-900/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  )}
                  {isMobile && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-900 rounded-b-full">
                      <div className="absolute w-12 h-6 bg-gray-900/20 rounded-full blur-md top-0 -left-2" />
                      <div className="absolute w-8 h-6 bg-gray-900/20 rounded-full blur-md top-1" />
                      <div className="absolute w-4 h-4 bg-gray-900/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  )}
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
