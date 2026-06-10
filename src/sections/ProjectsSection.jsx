import { motion } from "framer-motion";
import { CardCarousel } from "@/components/ui/card-carousel";

const projects = [
  {
    title: "KakiLearn AI",
    description:
      "Mobile-first web app that teaches seniors digital skills — banking, scam safety, and more — through interactive step-by-step simulators, voice-graded quizzes, and on-demand AI-generated multilingual courses.",
    tech: ["Next.js", "React", "TypeScript", "Claude Haiku 4.5", "Google Cloud TTS"],
    image: `${import.meta.env.BASE_URL}images/kakilearn.jpeg`,
    shortNote: "Note: All commits containing 'Paing' were authored by me.",
    note: "All commits containing 'Paing' were authored by me. These were committed under my teammate's account because he held the Vercel deployment ownership during our subscription limitations.",
    github: "https://github.com/Datmseee/KakiLearn-AI",
  },
  {
    title: "Sleep Apnea Monitor",
    description:
      "Full-stack health monitor: a wearable ESP32 streams live SpO2 and heart-rate to a Flask dashboard, with Kirby — a Claude-powered AI assistant offering wellness coaching and autonomous clinic booking via web and Telegram.",
    tech: ["Python", "Flask", "ESP32", "Claude", "Telegram", "Chart.js"],
    image: `${import.meta.env.BASE_URL}images/kirby.png`,
    github: "https://github.com/zinhmuepaing/sleep-apnea-monitor",
  },
  {
    title: "Smartwatch Speech Analytics",
    description:
      "Speech-analytics pipeline analysing Cantonese/Chinese communication in students with ASD; processes smartwatch audio to flag keyword usage, pitch and volume anomalies, and generates longitudinal clinical PDF reports.",
    tech: ["Python", "Whisper", "Parselmouth", "Librosa", "Pandas"],
    image: `${import.meta.env.BASE_URL}images/smartwatch.png`,
    github: "https://github.com/zinhmuepaing/smartwatch-speech-analysis",
  },
  {
    title: "Grid",
    description:
      "Full-stack developer-collaboration platform with Tinder-style matchmaking for hackathons — pairing teammates by complementary skills and availability, with OAuth, real-time messaging, and automatic Discord workspace generation.",
    tech: ["Python", "Flask", "SQLite", "OAuth", "Discord API"],
    image: `${import.meta.env.BASE_URL}images/grid.png`,
    github: "https://github.com/zinhmuepaing/grid-dev-collab-platform",
  },
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
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            A selection of projects where I have turned complex problems into
            working solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CardCarousel projects={projects} />
        </motion.div>
      </div>
    </section>
  );
}
