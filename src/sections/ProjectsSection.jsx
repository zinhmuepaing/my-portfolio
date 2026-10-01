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
      "Lizzie lives on your desktop and jumps in whenever you need her — hit a hotkey and she'll clean up text you've selected, answer questions about whatever's on your screen (and talk you through it), or just go do the task for you. All the speech stuff runs offline, and your API keys never leave your machine.",
    tech: ["Electron", "Node.js", "Claude", "Whisper", "PowerShell", "Edge TTS"],
    image: `${BASE}images/LandingPage.png`,
    github: "https://github.com/zinhmuepaing/lizzie",
    buttonLabel: "Get the app",
    buttonUrl: "https://lizzie-kappa.vercel.app/",
  },
  {
    title: "KakiLearn AI",
    context: "Digital skills for seniors",
    date: ["Feb 2026"],
    description:
      "KakiLearn walks seniors through everyday digital stuff — like online banking or spotting scams — with simple step-by-step simulators instead of scary real apps. It even grades you by voice and can whip up a mini course in your language on demand.",
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
      "A wearable that watches your oxygen levels and heart rate in real time and shows it on a dashboard — plus Kirby, an AI assistant that checks in on you and can even book you a clinic appointment through chat.",
    tech: ["Python", "Flask", "ESP32", "Claude", "Telegram", "Chart.js"],
    image: `${BASE}images/Sleep Apnea Image.png`,
    github: "https://github.com/zinhmuepaing/sleep-apnea-monitor",
  },
  {
    title: "Smartwatch Speech Analytics",
    context: "Speech analytics for ASD students",
    date: [],
    description:
      "This pipeline listens to smartwatch audio from students with ASD and flags patterns in how they talk — pitch, volume, specific words — then turns it into a report, so therapists don't have to review hours of audio by hand.",
    tech: ["Python", "Whisper", "Parselmouth", "Librosa", "Pandas"],
    image: `${BASE}images/smartwatch.png`,
    github: "https://github.com/zinhmuepaing/smartwatch-speech-analysis",
  },
  {
    title: "Grid",
    context: "Developer collaboration platform",
    date: [],
    description:
      "Finding a hackathon team is annoying, so I built Grid to match people by skill and availability, swipe-style, then spin up a Discord workspace for the team instantly, messaging included.",
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
      "A career exploration game for students who have no idea what they want to do — it asks you questions, adapts based on your answers, and uses AI to help you figure out paths that actually fit. Made the Top 4 at NTU's Tech for Good Hackathon.",
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
