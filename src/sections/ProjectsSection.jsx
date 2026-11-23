import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassButton } from "@/components/ui/glass";
import { Timeline, TimelineRow } from "@/components/ui/timeline";
import { ProjectCard } from "@/components/ui/project-card";

const BASE = import.meta.env.BASE_URL;

// Newest first. `date` is only set where it is known (resume or repo); add dates for the rest.
export const projects = [
  {
    title: "BusObstacleSim",
    context: "Driver-training simulator",
    date: ["Oct 2026"],
    description:
      "A driver-training simulator I built solo for research at TP's Enabling Technology Collaboratory. It has a physics-based bus, an obstacle planner with 14 types of hazards, difficulty profiles, and warnings for traffic coming up from behind.",
    tech: ["Unity", "C#"],
    image: `${BASE}images/bus-sim.webp`,
    github: "https://github.com/zinhmuepaing/BusObstacleSim",
  },
  {
    title: "Dislexi",
    context: "Reading help for students with dyslexia or ADHD",
    date: ["Jul 2026"],
    description:
      "A reading and tutoring app I built with my Tech4City 2026 team. Exam mode reads the text out exactly as written, with no LLM involved. Tutor mode explains a problem step by step and highlights where to look on the page.",
    tech: ["Next.js", "TypeScript", "Supabase", "Azure AI Vision", "Claude"],
    image: `${BASE}images/dislexi.webp`,
    contain: true,
    github: "https://github.com/zinhmuepaing/Dislexi",
  },
  {
    title: "Lizzie",
    context: "AI desktop automation agent",
    date: ["Jun 2026"],
    description:
      "Lizzie lives on your desktop and jumps in whenever you need her. Hit a hotkey and she'll clean up text you've selected, answer questions about whatever's on your screen and talk you through it, or just go do the task for you. All the speech stuff runs offline, and your API keys never leave your machine.",
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
      "KakiLearn walks seniors through everyday digital stuff like online banking or spotting scams, using simple step-by-step simulators instead of scary real apps. It grades you by voice and can whip up a mini course in your language on demand.",
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
      "A wearable that tracks your oxygen level and heart rate in real time and shows them on a dashboard. It comes with Kirby, an AI assistant that checks in on you and can book you a clinic appointment through chat.",
    tech: ["Python", "Flask", "ESP32", "Claude", "Telegram", "Chart.js"],
    image: `${BASE}images/Sleep Apnea Image.png`,
    github: "https://github.com/zinhmuepaing/sleep-apnea-monitor",
  },
  {
    title: "Smartwatch Speech Analytics",
    context: "Speech analytics for ASD students",
    date: [],
    description:
      "This pipeline listens to smartwatch audio from students with ASD and flags patterns in how they talk, like pitch, volume and specific words. Then it turns that into a report, so therapists don't have to go through hours of audio by hand.",
    tech: ["Python", "Whisper", "Parselmouth", "Librosa", "Pandas"],
    image: `${BASE}images/smartwatch.png`,
    github: "https://github.com/zinhmuepaing/smartwatch-speech-analysis",
  },
  {
    title: "My Navigator Kirby",
    context: "Voice-first navigation",
    date: ["May 2026"],
    description:
      "You say where you want to go, and Claude Haiku fixes what the speech recognition misheard, so \"San Antonio Beach\" becomes \"Sentosa Beach\". Then it shows the route for driving, walking or transit, and reads its replies out loud.",
    tech: ["JavaScript", "Claude Haiku", "Web Speech API", "Google Maps Embed"],
    github: "https://github.com/zinhmuepaing/my_navigator_kirby",
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
      "A career exploration game for students who have no idea what they want to do. It asks you questions, adapts to your answers, and uses AI to help you find paths that actually fit. It made the Top 4 at NTU's Tech for Good Hackathon.",
    tech: ["Python", "Pygame", "LangChain", "Azure OpenAI"],
    image: `${BASE}images/career-quest-map.webp`,
    github: "https://github.com/zinhmuepaing/Career-Quest-Map",
  },
  {
    title: "Musical Instrument Classification",
    context: "Deep learning classifier",
    date: [],
    description:
      "An image classifier for 8 kinds of musical instruments. I compared a custom CNN against VGG16, ResNet152V2 and EfficientNetV2L, and the best one hit 98.83% validation accuracy. You can try it through a Flask web app.",
    tech: ["Python", "TensorFlow", "EfficientNetV2L", "Flask"],
    image: `${BASE}images/instrument-classification.webp`,
    github: "https://github.com/zinhmuepaing/instrument-classification-transfer-learning",
  },
  {
    title: "Garment Worker Productivity",
    context: "Productivity analytics",
    date: [],
    description:
      "Predicts whether a garment worker's productivity is low, medium or high, using real factory data from Bangladesh. I compared Logistic Regression, SVM, KNN and Random Forest, and the features I built from how the factory actually works made the biggest difference.",
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
      "A Raspberry Pi system that watches a bakery's temperature, humidity and fire risk in real time. You can control it remotely over MQTT and check trends in Grafana or the web dashboard, and it emails you if it detects a fire.",
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
      "A music streaming web app with user roles, a song catalog you can manage, search, and a player that works right in the page. Built with Blazor Server and Entity Framework Core.",
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
         
          title="Projects"
          subtitle="Things I've built, newest first."
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
