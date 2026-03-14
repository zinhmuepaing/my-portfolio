import { motion } from "framer-motion";

// Colored letter badge for tools without a devicon
const LetterBadge = ({ letter, bg }) => (
  <div
    className="w-7 h-7 rounded flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
    style={{ background: bg }}
  >
    {letter}
  </div>
);

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
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
      { name: "Pygame", badge: <LetterBadge letter="PG" bg="linear-gradient(135deg,#1a7c2a,#3fba57)" /> },
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
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/60">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            My Tech Stack
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 mb-4" />
          <p className="text-gray-500">
            Technical tools which bring my ideas to life.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 px-5 py-3 bg-white/70 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-7 h-7 flex-shrink-0"
                        loading="lazy"
                      />
                    ) : skill.badge ? (
                      skill.badge
                    ) : (
                      <div className="w-7 h-7 rounded bg-gray-200 flex items-center justify-center text-[9px] font-bold text-gray-500 flex-shrink-0">
                        {skill.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-base font-medium text-gray-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
