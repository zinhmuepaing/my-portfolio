import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { GlassFilter } from "@/components/ui/glass";
import Footer from "./sections/Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-white text-[#2d2d2d]">
      <GlassFilter />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
