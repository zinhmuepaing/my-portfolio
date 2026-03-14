import { Outlet } from "react-router-dom";
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
  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <Particles
        className="fixed inset-0 z-0"
        quantity={100}
        ease={80}
        color="#000000"
        refresh
      />
      <GlassFilter />
      <NavBar items={navItems} />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
