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
  altNames: ["Pi", "ဇင်မှူးပိုင်"], // hero glitch: nickname, then the name in Burmese
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
  { name: "Awards", id: "achievements" },
  { name: "Projects", id: "projects" },
  { name: "Certs", id: "certifications" },
  { name: "Skills", id: "skills" },
  { name: "CCA", id: "cca" },
  { name: "Contact", id: "contact" },
];

// About, in Paing's own voice. One string per paragraph.
export const aboutIntro = [
  "I'm Paing, a final-year Computer Engineering student at Temasek Polytechnic. I grew up in Myanmar and studied at Yangon Technological University for a year before moving to Singapore in 2024.",
  "Most of what I build ends up being AI stuff. This year I interned at Coca-Cola, working on production AI systems, retrieval, evaluation, and agentic workflows that staff use daily. Before that, I worked on speech analysis for autistic students at Datality Lab. Outside class I was President of CENT, and I tutor juniors in engineering maths at TP.",
  "I believe you can achieve anything with enough time and effort, as long as you're obsessed enough.",
];

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
      "TP LEAD EXCEL Programme (Top 1%)",
      "Coursework: Python, Java, Full-Stack Development, IoT, AIML",
    ],
  },
  {
    school: "Yangon Technological University",
    logo: img("ytu.svg"),
    degree: "Computer Engineering & Information Technology",
    date: ["Nov 2022", "- Nov 2023"],
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
      "Developed a job skills portal that loads a 272K-row SkillsFuture dataset into a client-side SQLite database (sql.js/WebAssembly), delivering sub-100 ms search across 50K+ skill-to-role mappings.",
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
      { name: "LangGraph", icon: simpleicon("langgraph", "1C3C3C") },
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
      { name: "Microsoft Azure", icon: devicon("azure/azure-original") },
      { name: "AWS", icon: devicon("amazonwebservices/amazonwebservices-original-wordmark") },
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

// Achievements in two groups, newest first. `initial` cards show before
// "Show all". `pad` keeps logos inside the tile. `photos` switches the card to
// the photo layout (1-3 photos; `fit: "contain"` shows the whole image);
// `logoStyle` is "wide" for wordmark logos, "dark" for wordmarks on ink.
const hackathons = [
  {
    date: ["Nov 2026"],
    title: "Champion, AI-GNITION 2026",
    context: "SIM, Singapore · AI Hackathon · 200+ participants",
    logo: img("awards/ai-gnition-logo.webp"),
    logoStyle: "dark",
    photos: [
      { src: img("awards/ai-gnition.webp"), alt: "Paing and his team holding the AI-GNITION champion cheque, medals and trophy", w: 960, h: 720 },
      { src: img("awards/gym-dolphin.webp"), alt: "Ryan, the pixel-art AI customer service agent from Gym Dolphin", w: 960, h: 524, pos: "75% center" },
    ],
    description:
      "I led a team of 4 and built Ryan, an AI voice agent that phones gym members who are drifting away and finds out why. He talks to them in real time and offers solutions that fit, like freezing their membership, a personal training session, or a cheaper off-peak plan. Ryan also hands the call to human staff whenever a member asks to talk to one. Problem statement by Eslitec.",
    links: [
      { label: "Watch the demo", href: "https://youtu.be/JYU1Y21LyjM", kind: "video" },
      { label: "GitHub", href: "https://github.com/zinhmuepaing/gym-dolphin", kind: "github" },
    ],
  },
  {
    date: ["Sep 2026"],
    title: "3rd Place, NiCE Hack 2026",
    context: "NTU EEE · Hardware cybersecurity hackathon",
    logo: img("awards/nicehack-logo.webp"),
    photos: [
      { src: img("awards/nicehack.webp"), alt: "Paing and his teammate holding the NiCE Hack third place cheque", w: 960, h: 1280, pos: "center 50%" },
    ],
    description:
      "We entered with no cybersecurity background. We recovered an unknown AES key from a live Arduino Uno using oscilloscope and EM-probe captures in 382 traces, and cut a wide-window attack from 5,000 traces down to 250.",
  },
  {
    date: ["Jun 2026", "- Jul 2026"],
    title: "Award for Technical Excellence & Innovation",
    context: "Advantech AIoT Regional Hackathon 2026 · Singapore Polytechnic",
    logo: img("awards/advantech-logo.webp"),
    logoStyle: "wide",
    photos: [
      { src: img("awards/advantech-cert.webp"), alt: "Hack the Future certificate of achievement from Advantech and Singapore Polytechnic", w: 960, h: 686, pos: "center 30%" },
    ],
    description:
      "Given for technical excellence, creativity and problem-solving at the Advantech AIoT Regional Hackathon, run by Advantech and Singapore Polytechnic from June to July 2026.",
  },
  {
    date: ["2026"],
    title: "Top 15 Finalist, Engineering Innovation Challenge 2026",
    context: "Engineering Innovation Challenge · Competition",
    photos: [
      { src: img("awards/eic.webp"), alt: "A row of colour-coded smart recycling bins in a school atrium", w: 538, h: 337 },
    ],
    description:
      "Made the top 15 with a smart recycling bin system for Temasek Polytechnic. Students scan what they recycle and earn points they can turn into rewards.",
  },
  {
    date: ["Jan 2026"],
    title: "Finalist (Top 4), Tech for Good Hackathon 2026",
    context: "NTU College of Computing and Data Science · Hackathon",
    logo: img("ntu.jpg"),
    pad: true,
    photos: [
      { src: img("awards/tech-for-good.webp"), alt: "Paing's team at their Group 5 table during the Tech for Good Hackathon", w: 960, h: 960, pos: "center 40%" },
    ],
    description:
      "Top 4 of 40 teams with Career Quest Map, recognised for its structured AI pipeline and how practical it is for Singapore youth.",
  },
];

const academics = [
  {
    date: ["AY2025/26"],
    title: "Director's List Award (Top 10%)",
    context: "School of Engineering, Temasek Polytechnic · Academic",
    logo: img("soe.jpg"),
    photos: [
      { src: img("awards/directors-list-2026.webp"), alt: "Director's List Award certificate, Awards for Excellence 2026, Diploma in Computer Engineering", w: 589, h: 675, pos: "center 45%" },
    ],
    description: "Top 10% of the Computer Engineering cohort for AY2025/26.",
  },
  {
    date: ["2024", "- Present"],
    title: "Temasek Polytechnic Engineering Scholarship",
    context: "Temasek Polytechnic · Academic",
    logo: img("tp-crest.png"),
    pad: true,
    photos: [
      { src: img("awards/scholarship-2024.webp"), alt: "Temasek Polytechnic Scholarship (Engineering) certificate for AY2024/2025", w: 733, h: 727, pos: "center 60%" },
      { src: img("awards/scholarship-2025.webp"), alt: "Temasek Polytechnic Scholarship (Engineering) certificate for AY2025/2026", w: 543, h: 555, pos: "center 60%" },
      { src: img("awards/scholarship-2026.webp"), alt: "Letter renewing the Temasek Polytechnic Scholarship (Engineering) for AY2026/2027", w: 762, h: 757, pos: "center 45%" },
    ],
    description:
      "Given for academic results, leadership and contribution to the school. I've received it three years in a row, from AY2024/25 to AY2026/27.",
  },
  {
    date: ["AY2024/25"],
    title: "Director's List Award, Ranked #1 in Common Engineering Programme",
    context: "School of Engineering, Temasek Polytechnic · Academic",
    logo: img("soe.jpg"),
    photos: [
      { src: img("awards/cep-directors-list.webp"), alt: "Common Engineering Programme Director's List, with Zin Hmue Paing listed first", w: 380, h: 180, fit: "contain" },
      { src: img("awards/directors-list-2025.webp"), alt: "Director's List Award certificate, Awards for Excellence 2025, for AY2024/2025", w: 511, h: 724, pos: "center 50%" },
    ],
    description:
      "Top student out of 400+ in the Common Engineering Programme, TP's largest course, before I moved into Computer Engineering.",
  },
  {
    date: ["AY2024/25"],
    title: "Merit Award, RoboCoder Challenge",
    context: "School of Engineering, Temasek Polytechnic · Technical",
    logo: img("soe.jpg"),
    description: "For C programming and robotics: embedded code, sensor integration and debugging during the competition.",
  },
  {
    date: ["AY2024/25"],
    title: "Merit Award, Electronic Design Competition",
    context: "School of Engineering, Temasek Polytechnic · Technical",
    logo: img("soe.jpg"),
    description: "For electronic circuit design and troubleshooting, from circuit analysis to picking components.",
  },
];

export const achievementGroups = [
  { title: "Hackathons", initial: 2, items: hackathons },
  { title: "Academics", initial: 3, items: academics },
];

export const contact = {
  blurb: "Open to internships, collaborations, and good conversations.",
};

export const footerNote = "Designed and built by me.";
