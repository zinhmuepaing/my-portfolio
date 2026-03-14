import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "next-themes";
import {
  Home,
  User,
  Wrench,
  Briefcase,
  Trophy,
  Mail,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { GlassFilter } from "@/components/ui/liquid-glass";
import { Particles } from "@/components/ui/particles";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Footer from "./sections/Footer";

const navItems = [
  { name: "Home", url: "hero", icon: Home },
  { name: "About", url: "about", icon: User },
  { name: "Skills", url: "skills", icon: Wrench },
  { name: "Projects", url: "projects", icon: Briefcase },
  { name: "Achievements", url: "achievements", icon: Trophy },
  { name: "Contact", url: "contact", icon: Mail },
];

export default function Layout() {
  const { resolvedTheme } = useTheme();
  const [particleColor, setParticleColor] = useState("#000000");

  useEffect(() => {
    setParticleColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Particles
        className="fixed inset-0 z-0"
        quantity={100}
        ease={80}
        size={1.5}
        color={particleColor}
        refresh
      />
      <GlassFilter />
      <div className="fixed top-4 right-4 z-50 md:top-6 md:right-6">
        <ThemeToggle />
      </div>
      <NavBar items={navItems} />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
