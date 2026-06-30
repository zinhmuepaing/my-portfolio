// @ts-nocheck
// Single source of truth for the inline copy shared between the standard
// (light) sections and the Neo-Brutalism sections, so both trees stay in
// lockstep. Structured data arrays (projects, skills, certificates,
// achievements, education timeline, leadership) are exported directly from
// their respective section files in src/sections/.

const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Zin Hmue Paing",
  eyebrow: "Hi, my name is",
  role: "Computer Engineering Student | Aspiring Software & AI Engineer",
  resumeUrl: `${BASE}Zin_Hmue_Paing_Resume.pdf`,
  photo: `${BASE}images/casualProfile.jpg`,
  socials: {
    linkedin: "https://linkedin.com/in/zinhmuepaing",
    github: "https://github.com/zinhmuepaing",
    email: "mailto:zinhmuep@gmail.com",
  },
};

// Hero bio, split so the CGPA can be rendered bold without duplicating prose.
export const heroBio = {
  pre: "I am passionate about AI, machine learning, data analytics, and building real-world engineering solutions. Currently pursuing a Diploma in Computer Engineering at Temasek Polytechnic with a ",
  bold: "4.0 CGPA",
  post: ".",
};

// About intro paragraph, split around the emphasized clause.
export const aboutIntro = {
  pre: "I am a Computer Engineering student at Temasek Polytechnic passionate about ",
  emphasis:
    "artificial intelligence, machine learning, large language models, and data science",
  post:
    ". I build end-to-end AI systems, from designing and fine-tuning model architectures to engineering structured LLM pipelines with schema validation and deterministic fallbacks. My work spans deep learning computer vision, predictive analytics with classical ML, IoT data pipelines, and AI-driven applications, approached with rigorous analytical thinking and full-pipeline ownership.",
};

export const contactBio =
  "I am currently focused on building side projects that address tangible, real-world challenges. My goal is to apply a rigorous problem-solving mindset across Software Engineering, AI Engineering, and Data Engineering to create impactful solutions. Whether you have a project to discuss, want to collaborate, or just want to connect, I'd love to hear from you.";

export const footerNote = "Designed and built by me.";

// Section eyebrow numbers, titles, and short descriptions.
export const sectionMeta = {
  about: { index: "01", title: "About Me" },
  skills: {
    index: "02",
    title: "The Stack Behind the Work",
    desc: "Every solution starts with the right foundation.",
  },
  projects: {
    index: "03",
    title: "Featured Projects",
    desc: "A selection of projects where I have turned complex problems into working solutions.",
  },
  certificates: {
    index: "04",
    title: "Licenses & Certifications",
    desc: "Industry credentials backing the skills. Hover or tap a card to view details.",
  },
  achievements: {
    index: "05",
    title: "Achievements",
    desc: "Recognition of excellence in academics, technical skills, and competition.",
  },
  contact: { index: "06", title: "Let's Stay In Touch" },
};
