import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { GlassButton } from "@/components/ui/liquid-glass";
import { AnimatedText } from "@/components/ui/animated-text";
import { profile, heroBio } from "@/data/copy";

export default function HeroSection() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide uppercase">
              {profile.eyebrow}
            </p>

            <AnimatedText
              text={profile.name}
              as="h1"
              textClassName="text-5xl md:text-7xl font-bold text-[#d84f2a]"
              underlineClassName="hidden"
              triggerOnScroll
              className="items-start"
            />

            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium">
              {profile.role}
            </p>

            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              {heroBio.pre}
              <strong className="font-bold text-gray-900 dark:text-white">
                {heroBio.bold}
              </strong>
              {heroBio.post}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <GlassButton onClick={scrollToProjects}>
                <span className="text-sm">View My Projects</span>
              </GlassButton>
              <GlassButton href={profile.resumeUrl}>
                <span className="text-sm">View Resume</span>
              </GlassButton>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profile.socials.email}
                className="p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
