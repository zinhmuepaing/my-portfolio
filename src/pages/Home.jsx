import { useThemeMode } from "@/context/ThemeModeProvider";
import RobotSection from "../sections/RobotSection";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import CertificatesSection from "../sections/CertificatesSection";
import AchievementsSection from "../sections/AchievementsSection";
import ContactSection from "../sections/ContactSection";
import BrutalistHome from "../brutalist/BrutalistHome";

function StandardHome() {
  return (
    <>
      <RobotSection />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}

export default function Home() {
  const { mode } = useThemeMode();
  return mode === "brutalist" ? <BrutalistHome /> : <StandardHome />;
}
