import { useEffect, useState } from "react";
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
      {mode === "brutalist" ? (
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
          <div className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
            <StarWarsToggle />
          </div>
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
