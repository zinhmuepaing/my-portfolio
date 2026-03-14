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
    <div className="min-h-screen bg-white text-gray-900">
      <GlassFilter />
      <NavBar items={navItems} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
