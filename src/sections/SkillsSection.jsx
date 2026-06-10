import { PinnedShowcase } from "@/components/scroll/PinnedShowcase";
import { SectionHeading } from "@/components/ui/section-heading";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: ".NET Blazor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "Pygame", icon: `${import.meta.env.BASE_URL}images/pygame.png` },
      { name: "LangChain", icon: `${import.meta.env.BASE_URL}images/langchain.png` },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    ],
  },
  {
    title: "Data & Databases",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
      { name: "InfluxDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/influxdb/influxdb-original.svg" },
      { name: "Tableau", icon: `${import.meta.env.BASE_URL}images/Tableau-logo.png` },
      { name: "KNIME", icon: `${import.meta.env.BASE_URL}images/KNIME.jpg` },
      { name: "Microsoft SQL Server", icon: `${import.meta.env.BASE_URL}images/sqlLogo.png` },
      { name: "MongoDB", icon: `${import.meta.env.BASE_URL}images/MongoDB.png` },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
      { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
      { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "UiPath", icon: `${import.meta.env.BASE_URL}images/UiPath.png` },
      { name: "MPLAB", icon: `${import.meta.env.BASE_URL}images/MPLAB.jpg` },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    ],
  },
];

const SkillCard = ({ skill }) => (
  <div className="flex items-center gap-3 px-5 py-3 bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/60 dark:border-gray-700/50 shadow-sm flex-shrink-0">
    {skill.icon ? (
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-7 h-7 flex-shrink-0"
        loading="lazy"
      />
    ) : (
      <div className="w-7 h-7 rounded bg-gray-200 flex items-center justify-center text-[9px] font-bold text-gray-500 flex-shrink-0">
        {skill.name.charAt(0)}
      </div>
    )}
    <span className="text-base font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
      {skill.name}
    </span>
  </div>
);

// Horizontal infinite-scroll marquee. Skills are duplicated so the
// translateX(-50%) loop is seamless.
const SkillMarquee = ({ skills, direction = "left" }) => (
  <div className="group relative overflow-hidden">
    <div
      className={`flex w-max gap-3 ${
        direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
      } group-hover:[animation-play-state:paused]`}
    >
      {[...skills, ...skills].map((skill, i) => (
        <SkillCard key={`${skill.name}-${i}`} skill={skill} />
      ))}
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 dark:from-gray-900/40 to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 dark:from-gray-900/40 to-transparent" />
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-gray-50/60 dark:bg-gray-900/40">
      <PinnedShowcase
        gapClassName="gap-10 sm:gap-16"
        heading={
          <div className="mx-auto mb-10 w-full max-w-6xl px-4 sm:px-8">
            <SectionHeading index="02" title="The Stack Behind the Work" />
            <p className="-mt-4 max-w-xl text-gray-500 dark:text-gray-400">
              Every solution starts with the right foundation.
            </p>
          </div>
        }
      >
        {skillCategories.map((category, catIdx) => (
          <div
            key={category.title}
            className="flex w-[88vw] max-w-3xl shrink-0 flex-col justify-center"
          >
            <div className="mb-6 flex items-baseline gap-4">
              <span className="font-mono text-sm tracking-[0.3em] text-gray-300 dark:text-gray-600">
                0{catIdx + 1}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl">
                {category.title}
              </h3>
            </div>
            <SkillMarquee
              skills={category.skills}
              direction={catIdx % 2 === 0 ? "left" : "right"}
            />
          </div>
        ))}
      </PinnedShowcase>
    </section>
  );
}
