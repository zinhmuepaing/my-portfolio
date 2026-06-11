import { useDeferredValue, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "next-themes";
import {
  Home,
  User,
  Wrench,
  Briefcase,
  BadgeCheck,
  Trophy,
  Mail,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { SmoothScrollProvider } from "@/components/scroll/SmoothScrollProvider";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { GlassFilter } from "@/components/ui/liquid-glass";
import { Particles } from "@/components/ui/particles";
import { StarWarsToggle } from "@/components/ui/star-wars-toggle-switch";
import { useThemeMode } from "@/context/ThemeModeProvider";
import { BrutalistChrome } from "@/brutalist/BrutalistChrome";
import Footer from "./sections/Footer";

const navItems = [
  { name: "Home", url: "hero", icon: Home },
  { name: "About", url: "about", icon: User },
  { name: "Skills", url: "skills", icon: Wrench },
  { name: "Projects", url: "projects", icon: Briefcase },
  { name: "Certificates", url: "certificates", icon: BadgeCheck },
  { name: "Achievements", url: "achievements", icon: Trophy },
  { name: "Contact", url: "contact", icon: Mail },
];

export default function Layout() {
  const { mode } = useThemeMode();
  // The toggle (which reads `mode` directly) flips and starts its BB8 slide
  // immediately, but the heavy chrome swap below uses the *deferred* mode so
  // React paints the toggle's first frames before committing the costly
  // standard-page mount (Spline, particles, GSAP pins). Without this, that
  // blocking commit drops frames mid-transition — the neo→light "glitch".
  const deferredMode = useDeferredValue(mode);
  const { resolvedTheme } = useTheme();
  const [particleColor, setParticleColor] = useState("#000000");

  useEffect(() => {
    setParticleColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  // SmoothScrollProvider sits in a stable position so Lenis persists across
  // experience-mode toggles; only the chrome below it swaps.
  return (
    <>
      <SmoothScrollProvider />
      {/* Persistent across the experience-mode swap so the BB8 slide
          transition actually plays (it lives above the chrome that remounts). */}
      <div className="fixed right-4 top-4 z-[60] sm:right-6 sm:top-5">
        <StarWarsToggle />
      </div>
      {deferredMode === "brutalist" ? (
        <BrutalistChrome>
          <Outlet />
        </BrutalistChrome>
      ) : (
        <div className="relative min-h-screen bg-[#fafaf9] dark:bg-[#07070a] text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <AuroraBackground />
          <Particles
            className="fixed inset-0 z-0"
            quantity={30}
            ease={80}
            size={0.5}
            color={particleColor}
            refresh
          />
          <GlassFilter />
          <NavBar items={navItems} />
          <main className="relative z-10">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
