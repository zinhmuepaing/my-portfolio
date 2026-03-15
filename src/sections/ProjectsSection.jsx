import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GlassButton } from "@/components/ui/liquid-glass";

const projects = [
  {
    title: "Career Quest Map",
    description:
      "AI-guided career pathway discovery game built for the NTU CCDS Tech for Good Hackathon 2026. Reached Top 4 Finalist. Guides students through structured self-discovery using adaptive questionnaires and LLM-powered analysis.",
    tech: ["Python", "Pygame", "LangChain", "Azure OpenAI"],
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/28dabd996_careerQuesMap.png",
    github: "https://github.com/zinhmuepaing/Career-Quest-Map",
  },
  {
    title: "Musical Instrument Classification",
    description:
      "Deep learning system achieving 98.83% validation accuracy across 8 instrument classes using EfficientNetV2L transfer learning. Deployed via Flask web application.",
    tech: ["Python", "TensorFlow", "EfficientNetV2L", "Flask"],
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/f8f0979d9_AIML.png",
    github:
      "https://github.com/zinhmuepaing/instrument-classification-transfer-learning",
  },
  {
    title: "Garment Worker Productivity",
    description:
      "Data analytics project analyzing worker productivity in garment manufacturing. Uses multiple ML classifiers (Logistic Regression, SVM, KNN, Random Forest) with domain-driven feature engineering.",
    tech: ["Python", "Scikit-learn", "Pandas", "Tableau"],
    image: `${import.meta.env.BASE_URL}images/garmentWorker.png`,
    github: "https://github.com/zinhmuepaing/Garment-Worker-Productivity",
  },
  {
    title: "Smart Bakery Monitor",
    description:
      "End-to-end IoT system for bakery environmental monitoring. Automates temperature, humidity, and fire detection using Raspberry Pi, with a Flask web dashboard and Grafana visualization.",
    tech: ["Raspberry Pi", "Python", "Flask", "MQTT", "MySQL", "Grafana"],
    image: `${import.meta.env.BASE_URL}images/smartBakery.png`,
    github: "https://github.com/zinhmuepaing/smart-bakery-monitor",
  },
  {
    title: "Museek",
    description:
      "Full-stack music streaming web application with role-based access, CRUD management, search, and an in-page audio player built with Blazor Server and Entity Framework Core.",
    tech: ["ASP.NET Blazor", "Entity Framework", "SQL Server", "JavaScript"],
    image: `${import.meta.env.BASE_URL}images/MuseekLogo.png`,
    github: "https://github.com/zinhmuepaing/Museek",
  },
];

export default function ProjectsSection() {
  const [expandedCards, setExpandedCards] = useState({});

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            A selection of projects where I have turned complex problems into
            working solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white dark:bg-gray-900/60"
            >
              {/* Image */}
              <div className="h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    Image Coming Soon
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {project.title}
                </h3>

                <p className={`text-gray-500 dark:text-gray-400 text-sm leading-relaxed ${expandedCards[index] ? "" : "line-clamp-3"}`}>
                  {project.description}
                </p>
                <button
                  onClick={() => setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }))}
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 text-xs cursor-pointer mt-1 mb-4"
                >
                  {expandedCards[index] ? "See less" : "See more"}
                </button>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <GlassButton
                  href={project.github}
                  className="!px-6 !py-3 !hover:px-7 !hover:py-4"
                >
                  <span className="flex items-center gap-2 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    View on GitHub
                  </span>
                </GlassButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
