// @ts-nocheck
import { useRef } from "react";
import { useBrutalFX } from "./useBrutalFX";
import BrutalHero from "./sections/BrutalHero";
import BrutalAbout from "./sections/BrutalAbout";
import BrutalSkills from "./sections/BrutalSkills";
import BrutalProjects from "./sections/BrutalProjects";
import BrutalCertificates from "./sections/BrutalCertificates";
import BrutalAchievements from "./sections/BrutalAchievements";
import BrutalContact from "./sections/BrutalContact";

export default function BrutalistHome() {
  const rootRef = useRef(null);
  useBrutalFX(rootRef);

  return (
    <div ref={rootRef}>
      <BrutalHero />
      <BrutalAbout />
      <BrutalSkills />
      <BrutalProjects />
      <BrutalCertificates />
      <BrutalAchievements />
      <BrutalContact />
    </div>
  );
}
