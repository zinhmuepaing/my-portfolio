// @ts-nocheck
// Single source of truth for all site content. Sections import from here.

const BASE = import.meta.env.BASE_URL;
const img = (name) => `${BASE}images/${name}`;
const devicon = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;
const simpleicon = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;
// OpenAI was removed from the live simple-icons CDN; use a pinned release.
const OPENAI_ICON = "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/openai.svg";

export const profile = {
  name: "Zin Hmue Paing",
  altName: "Pi",
  role: { pre: "Computer Engineering Student ·", post: "Microsoft Certified AI Engineer" },
  roleIcon: img("microsoft.svg"),
  email: "zinhmuep@gmail.com",
  resumeUrl: `${BASE}Zin_Hmue_Paing_Resume.pdf`,
  avatar: `${BASE}avatar.svg`,
  socials: {
    linkedin: "https://linkedin.com/in/zinhmuepaing",
    github: "https://github.com/zinhmuepaing",
    email: "mailto:zinhmuep@gmail.com",
  },
};

export const navItems = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "CCA", id: "cca" },
  { name: "Certs", id: "certifications" },
  { name: "Awards", id: "achievements" },
  { name: "Contact", id: "contact" },
];

// About paragraph: casual and conversational.
export const aboutIntro =
  "I'm a final-year Computer Engineering student at Temasek Polytechnic with a CGPA of 4.0/4.0, from Myanmar. I like to build AI systems and thoughtful software, taking an idea from raw data all the way to something people actually use. Getting the engineering right matters a lot to me, and I'm always up for a good challenge.";
// Phrases to tint coral; each must appear verbatim in aboutIntro.
export const aboutAccent = ["CGPA of 4.0/4.0", "AI systems and thoughtful software"];

export const education = [
  {
    school: "Temasek Polytechnic",
    logo: img("tp-crest.png"),
    degree: "Diploma in Computer Engineering",
    date: ["Apr 2024", "- May 2027"],
    bullets: [
      "CGPA 4.0 / 4.0",
      "Ranked #1 among 400+ students in the Common Engineering Programme, AY2024/25",
      "3× Temasek Polytechnic Engineering Scholarship recipient",
      "Director's List awarded every academic year to date (Top 10%)",
      "Coursework: Python, Java, Full-Stack Development, AI & Machine Learning",
    ],
  },
  {
    school: "Yangon Technological University",
    logo: img("ytu.svg"),
    degree: "Computer Engineering & Information Technology",
    date: ["2022", "- 2024"],
    bullets: [
      "Built foundations in programming, electronics, and engineering principles before moving to Singapore.",
    ],
  },
];

export const experience = [
  {
    role: "IT Intern (AI Engineering)",
    company: "The Coca-Cola Company · Singapore",
    date: ["May 2026", "- Sep 2026"],
    logo: img("coca-cola.png"),
    bullets: [
      "Improved document retrieval accuracy from 71% to 88% on an AI support assistant used by 190 staff, by replacing vector-only search with hybrid search and semantic reranking.",
      "Implemented an evaluation harness over 142 labeled tickets scoring 0.89 groundedness and 0.91 relevance, gating every prompt and retrieval change before release.",
      "Shipped the Request and Handoff agents with a mandatory human-approval gate on inventory actions; covered Tier-1 ticket volume fell 38% post-launch.",
      "Traced three production defects to root cause (degraded OCR, stale inventory data, dead documentation links) and added automated checks to prevent recurrence.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Datality Lab / Moodie.AI · Singapore",
    date: ["Apr 2026", "- May 2026"],
    logo: img("datality.jpg"),
    bullets: [
      "Developed a job skills portal that loads a 272K-row SkillsFuture dataset into a client-side SQLite database (sql.js/WebAssembly), delivering sub-100 ms search across 50K+ skill-to-role mappings with no backend.",
      "Designed a speech analytics pipeline that flagged ~3,950 vocal anomalies across 17 hours of audio from 5 ASD students, replacing manual therapist review with automated baseline detection.",
      "Cut audio processing time by 50% through parallel execution, and implemented longitudinal trend detection across 25 sessions that flagged which students were improving or declining.",
    ],
  },
];

// Technical skills, grouped as on the resume. `color` is the category dot.
export const skillCategories = [
  {
    title: "Languages",
    color: "#EC4D25",
    skills: [
      { name: "Python", icon: devicon("python/python-original") },
      { name: "Java", icon: devicon("java/java-original") },
      { name: "SQL", icon: devicon("azuresqldatabase/azuresqldatabase-original") },
      { name: "JavaScript", icon: devicon("javascript/javascript-original") },
      { name: "TypeScript", icon: devicon("typescript/typescript-original") },
      { name: "HTML", icon: devicon("html5/html5-original") },
      { name: "CSS", icon: devicon("css3/css3-original") },
    ],
  },
  {
    title: "Frameworks & Libraries",
    color: "#D99A1E",
    skills: [
      { name: "React", icon: devicon("react/react-original") },
      { name: "Next.js", icon: devicon("nextjs/nextjs-original") },
      { name: "Flask", icon: devicon("flask/flask-original") },
      { name: "Tailwind CSS", icon: devicon("tailwindcss/tailwindcss-original") },
      { name: "Electron", icon: devicon("electron/electron-original") },
      { name: "TensorFlow", icon: devicon("tensorflow/tensorflow-original") },
      { name: "Scikit-learn", icon: devicon("scikitlearn/scikitlearn-original") },
      { name: "LangChain", icon: img("langchain.png") },
      { name: "Pandas", icon: devicon("pandas/pandas-original") },
      { name: "NumPy", icon: devicon("numpy/numpy-original") },
      { name: ".NET Blazor", icon: devicon("dotnetcore/dotnetcore-original") },
      { name: "Pygame", icon: img("pygame.png") },
    ],
  },
  {
    title: "AI & Cloud",
    color: "#12907E",
    skills: [
      { name: "RAG" },
      { name: "Azure OpenAI", icon: devicon("azure/azure-original") },
      { name: "Azure AI Search", icon: devicon("azure/azure-original") },
      { name: "Azure AI Foundry", icon: devicon("azure/azure-original") },
      { name: "Claude API", icon: simpleicon("anthropic", "D97757") },
      { name: "OpenAI API", icon: OPENAI_ICON },
      { name: "Gemini API", icon: simpleicon("googlegemini", "4285F4") },
      { name: "Whisper ONNX", icon: OPENAI_ICON },
      { name: "GCP", icon: devicon("googlecloud/googlecloud-original") },
      { name: "Vercel", icon: simpleicon("vercel", "000000") },
    ],
  },
  {
    title: "Developer Tools",
    color: "#475569",
    skills: [
      { name: "Git", icon: devicon("git/git-original") },
      { name: "GitHub", icon: devicon("github/github-original") },
      { name: "Power BI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/powerbi.svg" },
      { name: "SQLite", icon: devicon("sqlite/sqlite-original") },
      { name: "MySQL", icon: devicon("mysql/mysql-original") },
      { name: "MQTT", icon: simpleicon("mqtt", "606060") },
      { name: "InfluxDB", icon: devicon("influxdb/influxdb-original") },
      { name: "Grafana", icon: devicon("grafana/grafana-original") },
      { name: "Tableau", icon: img("Tableau-logo.png") },
      { name: "Arduino", icon: devicon("arduino/arduino-original") },
      { name: "Raspberry Pi", icon: devicon("raspberrypi/raspberrypi-original") },
      { name: "Jupyter", icon: devicon("jupyter/jupyter-original") },
    ],
  },
];

const TP_LEAD_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/tpleadofficial/" },
  { label: "Programme", href: "https://www.tp.edu.sg/life-at-tp/temasek-leadership-programme.html" },
];

// CCA & leadership, newest first. `roles` renders the multi-role list.
export const cca = [
  {
    logo: img("cent.jpg"),
    watermark: "President",
    date: ["AY2025/26", "- AY2026/27"],
    roles: [{ title: "Mentor", when: "AY2026/27" }, { title: "President", when: "AY2025/26" }],
    org: "Computer Engineering NeTwork (CENT)",
    body: "Led planning and execution of major student events, coordinating logistics and cross-committee communications to build a strong Computer Engineering community.",
    links: [{ label: "Instagram", href: "https://www.instagram.com/tp.cen/" }],
  },
  {
    logo: img("soe.jpg"),
    watermark: "Member",
    date: ["AY2025", "- AY2027"],
    title: "Member",
    org: "TP LEAD EXCEL & Temasek LEAD Programme",
    tags: ["Top 1% of TP"],
    links: TP_LEAD_LINKS,
  },
  {
    logo: img("soe.jpg"),
    watermark: "Member",
    date: ["AY2025", "- AY2027"],
    title: "Member",
    org: "ENGenius Programme, School of Engineering",
    tags: ["Top 10–15% of cohort"],
    body: "Completed Higher Engineering Skills in IoT and Web/Mobile, and served as a student instructor and exhibitor.",
    links: TP_LEAD_LINKS,
  },
  {
    logo: img("cent.jpg"),
    watermark: "Class Rep",
    date: ["AY2025", "- AY2027"],
    title: "Class Representative",
    org: "E0C246 Care Group, Computer Engineering, Temasek Polytechnic",
  },
  {
    logo: img("soe.jpg"),
    watermark: "Peer Tutor",
    date: ["AY2025/26"],
    title: "Peer Tutor",
    org: "Temasek Polytechnic – School of Engineering",
    body: "Tutored juniors in Engineering Mathematics II and Digital Fundamentals I.",
    links: [{ label: "Instagram", href: "https://www.instagram.com/eng_peermentors/" }],
  },
];

export const certifications = [
  {
    title: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    issuer: "Microsoft",
    logo: img("microsoft.svg"),
    desc: "Building AI apps and agents on Azure with Azure OpenAI, AI Search, and AI Foundry.",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/ZINHMUEPAING-8342/A8890E42EF046BE5?sharingId=97F5E5524F3D5A2C",
  },
  {
    title: "Google AI Professional Certificate",
    issuer: "Google",
    logo: img("google.svg"),
    desc: "Applied generative AI, prompting, and AI-assisted workflows.",
    url: "https://www.credly.com/badges/38f3895a-5d2d-4da9-90f2-412bda366021",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    logo: img("nvidia.svg"),
    desc: "Hands-on training and deployment of deep neural networks.",
    url: "https://www.coursera.org/account/accomplishments/verify/9R9ABROGQBHV",
  },
  {
    title: "Foundation: Introduction to LangChain (Python)",
    issuer: "LangChain",
    logo: img("langchain.svg"),
    desc: "Building LLM applications with prompts, chains, and retrieval.",
    url: "https://academy.langchain.com/certificates/fvjzlrtdd6",
  },
  {
    title: "CS50x: Introduction to Computer Science",
    issuer: "Harvard University",
    logo: img("harvard.svg"),
    desc: "Algorithms, data structures, C, Python, SQL, and web development.",
    url: "https://certificates.cs50.io/38396cb6-58b3-49ae-b9fd-58ca587d21ed.pdf?size=letter",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    logo: img("anthropic.svg"),
    desc: "Foundations of working with Claude: prompting and everyday workflows.",
    url: "https://verify.skilljar.com/c/iim2g82pb8qt",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    logo: img("microsoft.svg"),
    desc: "Generative AI fundamentals, ethics, and productivity.",
    credentialId: "88bbab69578a8fddd294b3b92cee1830090d1abbc9b5f74a63bffaa55d98c2ac",
  },
];

// One card per achievement, newest first. `pad` keeps logos inside the tile.
export const achievements = [
  {
    date: ["Sep 2026"],
    title: "3rd Place, NiCE Hack 2026",
    context: "NTU EEE · Hackathon",
    logo: img("nicehack.gif"),
    description:
      "AES Side-Channel Analysis: recovered an unknown AES key from a live Arduino Uno via oscilloscope and EM-probe capture in 382 traces, and cut a wide-window attack from 5,000 traces to 250.",
  },
  {
    date: ["Jan 2026"],
    title: "Finalist (Top 4), Tech for Good Hackathon 2026",
    context: "NTU College of Computing and Data Science · Hackathon",
    logo: img("ntu.jpg"),
    pad: true,
    description:
      "Top 4 of 40 teams for Career Quest Map, recognised for structured AI pipeline design and practical impact for Singapore youth.",
  },
  {
    date: ["AY2025/26"],
    title: "Director's List Award (Top 10%)",
    context: "School of Engineering, Temasek Polytechnic · Academic",
    logo: img("soe.jpg"),
    description: "Honoured as one of the top achievers in AY2025/26 Computer Engineering cohort, reinforcing a track record of excellence and leadership potential."
  },
  {
    date: ["2024", "- Present"],
    title: "Temasek Polytechnic Engineering Scholarship",
    context: "Temasek Polytechnic · Academic",
    logo: img("tp-crest.png"),
    pad: true,
    description:
      "Awarded for academic excellence, leadership potential, and contribution to the school community. Received three years running (AY2024/25 to AY2026/27).",
  },
  {
    date: ["AY2024/25"],
    title: "Director's List Award, Ranked #1 in Common Engineering Programme",
    context: "School of Engineering, Temasek Polytechnic · Academic",
    logo: img("soe.jpg"),
    description:
      "Top academic achiever among 400+ students in Temasek Polytechnic's largest course, before transitioning into the Diploma in Computer Engineering.",
  },
  {
    date: ["AY2024/25"],
    title: "Merit Award, RoboCoder Challenge",
    context: "School of Engineering, Temasek Polytechnic · Technical",
    logo: img("soe.jpg"),
    description:
      "Excellence in C programming and robotics engineering, with strong embedded programming, sensor integration, and debugging under competition conditions.",
  },
  {
    date: ["AY2024/25"],
    title: "Merit Award, Electronic Design Competition",
    context: "School of Engineering, Temasek Polytechnic · Technical",
    logo: img("soe.jpg"),
    description:
      "Outstanding performance in electronic circuit design and troubleshooting, with systematic problem-solving across circuit analysis and component selection.",
  },
];

export const contact = {
  blurb: "Open to internships, collaborations, and good conversations.",
};

export const footerNote = "Designed and built by me.";
