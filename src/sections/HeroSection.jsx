import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { GlassButton } from "@/components/ui/liquid-glass";

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
            <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              Hi, my name is
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
              Zin Hmue Paing.
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 font-medium">
              Computer Engineering Student | Aspiring Software & AI Engineer
            </p>

            <p className="text-base text-gray-500 leading-relaxed max-w-xl">
              I am passionate about AI, machine learning, data analytics, and
              building real-world engineering solutions. Currently pursuing a
              Diploma in Computer Engineering at Temasek Polytechnic with a
              perfect <strong className="font-bold text-gray-900">4.0 CGPA</strong>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <GlassButton onClick={scrollToProjects}>
                <span className="text-sm">View My Projects</span>
              </GlassButton>
              <GlassButton href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/2e333f421_RESUME_Zin_Hmue_Paing.pdf">
                <span className="text-sm">View Resume</span>
              </GlassButton>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/zinhmuepaing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/zinhmuepaing"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:zinhmuep@gmail.com"
                className="p-3 rounded-full border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/fd4eeb3dd_photo_2026-03-11_21-01-50.jpg"
                alt="Zin Hmue Paing"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
