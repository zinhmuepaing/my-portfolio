import RobotSection from "../sections/RobotSection";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import AchievementsSection from "../sections/AchievementsSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <>
      <RobotSection />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
