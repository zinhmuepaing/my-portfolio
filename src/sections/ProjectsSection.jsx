import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassButton } from "@/components/ui/glass";
import { Timeline, TimelineRow } from "@/components/ui/timeline";
import { ProjectCard } from "@/components/ui/project-card";

const BASE = import.meta.env.BASE_URL;

// `date` is only set where it is known (resume); add dates for the rest.
export const projects = [
  {
    title: "Lizzie",
    context: "AI desktop automation agent",
    date: ["Jun 2026"],
    description:
      "Always-on AI overlay companion for Windows — summoned by a global hotkey to polish selected text in place, answer questions about whatever's on screen with annotated voice narration, or autonomously carry out PC tasks via Windows UI Automation. Runs entirely offline for speech; API keys are encrypted locally via Windows DPAPI with no backend server.",
    tech: ["Electron", "Node.js", "Claude", "Whisper", "PowerShell", "Edge TTS"],
    image: `${BASE}images/LandingPage.png`,
    github: "https://github.com/zinhmuepaing/lizzie",
    buttonLabel: "Visit Website",
    buttonUrl: "https://lizzie-kappa.vercel.app/",
  },
  {
    title: "KakiLearn AI",
    context: "Digital skills for seniors",
    date: ["Feb 2026"],
    description:
      "Mobile-first web app that teaches seniors digital skills like banking and scam safety through interactive step-by-step simulators, voice-graded quizzes, and on-demand AI-generated multilingual courses.",
    tech: ["Next.js", "React", "TypeScript", "Claude Haiku 4.5", "Google Cloud TTS"],
    image: `${BASE}images/kakilearn.jpeg`,
    contain: true,
    shortNote: "Note: All commits containing 'Paing' were authored by me.",
    note: "All commits containing 'Paing' were authored by me. These were committed under my teammate's account because he held the Vercel deployment ownership during our subscription limitations.",
    github: "https://github.com/Datmseee/KakiLearn-AI",
  },
  {
    title: "Sleep Apnea Monitor",
    context: "Wearable health monitor",
    date: [],
    description:
      "Full-stack health monitor: a wearable ESP32 streams live SpO2 and heart-rate to a Flask dashboard, with Kirby, a Claude-powered AI assistant offering wellness coaching and autonomous clinic booking via web and Telegram.",
    tech: ["Python", "Flask", "ESP32", "Claude", "Telegram", "Chart.js"],
    image: `${BASE}images/Sleep Apnea Image.png`,
    github: "https://github.com/zinhmuepaing/sleep-apnea-monitor",
  },
  {
    title: "Smartwatch Speech Analytics",
    context: "Speech analytics for ASD students",
    date: [],
    description:
      "Speech-analytics pipeline analysing Cantonese/Chinese communication in students with ASD; processes smartwatch audio to flag keyword usage, pitch and volume anomalies, and generates longitudinal clinical PDF reports.",
    tech: ["Python", "Whisper", "Parselmouth", "Librosa", "Pandas"],
    image: `${BASE}images/smartwatch.png`,
    github: "https://github.com/zinhmuepaing/smartwatch-speech-analysis",
  },
  {
    title: "Grid",
    context: "Developer collaboration platform",
    date: [],
    description:
      "Full-stack developer-collaboration platform with Tinder-style matchmaking for hackathons, pairing teammates by complementary skills and availability, with OAuth, real-time messaging, and automatic Discord workspace generation.",
    tech: ["Python", "Flask", "SQLite", "OAuth", "Discord API"],
    image: `${BASE}images/grid.png`,
    contain: true,
    github: "https://github.com/zinhmuepaing/grid-dev-collab-platform",
  },
  {
    title: "Career Quest Map",
    context: "AI career exploration game",
    date: ["Jan 2026"],
    description:
      "AI-guided career pathway discovery game built for the NTU CCDS Tech for Good Hackathon 2026. Reached Top 4 Finalist. Guides students through structured self-discovery using adaptive questionnaires and LLM-powered analysis.",
    tech: ["Python", "Pygame", "LangChain", "Azure OpenAI"],
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/28dabd996_careerQuesMap.png",
    github: "https://github.com/zinhmuepaing/Career-Quest-Map",
  },
  {
    title: "Musical Instrument Classification",
    context: "Deep learning classifier",
    date: [],
    description:
      "Deep learning system achieving 98.83% validation accuracy across 8 instrument classes using EfficientNetV2L transfer learning. Deployed via Flask web application.",
    tech: ["Python", "TensorFlow", "EfficientNetV2L", "Flask"],
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/f8f0979d9_AIML.png",
    github: "https://github.com/zinhmuepaing/instrument-classification-transfer-learning",
  },
  {
    title: "Garment Worker Productivity",
    context: "Productivity analytics",
    date: [],
    description:
      "Data analytics project analyzing worker productivity in garment manufacturing. Uses multiple ML classifiers (Logistic Regression, SVM, KNN, Random Forest) with domain-driven feature engineering.",
    tech: ["Python", "Scikit-learn", "Pandas", "Tableau"],
    image: `${BASE}images/garmentWorker.png`,
    contain: true,
    github: "https://github.com/zinhmuepaing/Garment-Worker-Productivity",
  },
  {
    title: "Smart Bakery Monitor",
    context: "IoT monitoring system",
    date: [],
    description:
      "End-to-end IoT system for bakery environmental monitoring. Automates temperature, humidity, and fire detection using Raspberry Pi, with a Flask web dashboard and Grafana visualization.",
    tech: ["Raspberry Pi", "Python", "Flask", "MQTT", "MySQL", "Grafana"],
    image: `${BASE}images/smartBakery.png`,
    contain: true,
    github: "https://github.com/zinhmuepaing/smart-bakery-monitor",
  },
  {
    title: "Museek",
    context: "Music streaming web app",
    date: [],
    description:
      "Full-stack music streaming web application with role-based access, CRUD management, search, and an in-page audio player built with Blazor Server and Entity Framework Core.",
    tech: ["ASP.NET Blazor", "Entity Framework", "SQL Server", "JavaScript"],
    image: `${BASE}images/MuseekLogo.png`,
    contain: true,
    github: "https://github.com/zinhmuepaing/Museek",
  },
];

const INITIAL = 4;

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHeading
          index="04"
          title="Projects"
          subtitle="A selection of projects where I have turned complex problems into working solutions."
        />
        <Timeline>
          {visible.map((p) => (
            <TimelineRow key={p.title} date={p.date}>
              <ProjectCard project={p} />
            </TimelineRow>
          ))}
        </Timeline>
        {projects.length > INITIAL && (
          <div className="mt-2 flex justify-center">
            <GlassButton onClick={() => setShowAll((v) => !v)}>
              {showAll ? "Show fewer" : `Show all ${projects.length} projects`}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </GlassButton>
          </div>
        )}
      </div>
    </section>
  );
}
