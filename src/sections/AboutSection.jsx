import { motion } from "framer-motion";
import { CardStack } from "@/components/ui/card-stack";
import { SectionFX } from "@/components/scroll/SectionFX";
import { SectionHeading } from "@/components/ui/section-heading";

export const timeline = [
  {
    period: "2022 -- 2024",
    title: "Yangon Technological University",
    description:
      "Studied Computer Engineering & Information Technology. Built foundational knowledge in programming, electronics, and engineering principles before transitioning to Singapore.",
  },
  {
    period: "2024 -- Present",
    title: "Temasek Polytechnic",
    subtitle: "Diploma in Computer Engineering",
    bullets: [
      "4.0/4.0 CGPA",
      <>
        Ranked #1{" "}
        <strong className="font-semibold text-gray-700 dark:text-gray-300">
          among a cohort of over 400 students
        </strong>{" "}
        in Common Engineering Programme AY2024/25
      </>,
      "3x Temasek Polytechnic Engineering Scholarship Recipient",
      "Director's List in AY2024/25 and AY2025/2026",
    ],
  },
];

export const leadershipCards = [
  {
    name: "President and Mentor, CENT",
    organization: "Computer Engineering NeTwork (CENT)",
    designation: "Apr 2025 – Present",
    quote:
      "Led the planning and execution of major student events, coordinating logistics and cross-committee communications to build a strong Computer Engineering community.",
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/83fb3ebad_PresidentPhoto.png",
  },
  {
    name: "Peer Tutor",
    organization: "Temasek Polytechnic",
    designation: "Apr 2025 – Present",
    quote:
      "Tutored juniors in Engineering Mathematics II and Digital Fundamentals I, lifting their understanding and academic confidence.",
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/17b7b33fa_photo_2025-11-23_13-21-53.jpg",
  },
  {
    name: "ENGenius Programme",
    organization: "Temasek Polytechnic School of Engineering",
    designation: "Nov 2024 – Present",
    quote:
      "Selected for the talent programme for high achievers; completed Higher Engineering Skills in IoT and Web/Mobile, and served as a student instructor and exhibitor.",
    src: `${import.meta.env.BASE_URL}images/ENGenius.png`,
  },
  {
    name: "Community Volunteer",
    organization: "Hao Ren Hao Shi (好人好事)",
    designation: "Dec 2024 – Present",
    quote:
      "Supported mobile grocery distribution for underprivileged families with Team Temasek, managing crowd flow and replenishing supplies.",
    src: `${import.meta.env.BASE_URL}images/Vounteer.png`,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <SectionHeading index="01" title="About Me" />
          <SectionFX variant="fade-drop">
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
            I am a Computer Engineering student at Temasek Polytechnic passionate
            about{" "}
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              artificial intelligence, machine learning, large language models,
              and data science
            </span>
            . I build end-to-end AI systems, from designing and fine-tuning model
            architectures to engineering structured LLM pipelines with schema
            validation and deterministic fallbacks. My work spans deep learning
            computer vision, predictive analytics with classical ML, IoT data
            pipelines, and AI-driven applications, approached with rigorous
            analytical thinking and full-pipeline ownership.
          </p>
          </SectionFX>
        </div>

        {/* My Journey */}
        <SectionFX variant="fade-drop" className="mb-20">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            My Journey
          </h3>
          <div className="w-10 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 mb-8" />
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-4 border-white dark:border-gray-950 shadow" />
                <p className="text-sm font-medium text-gray-400 dark:text-gray-500 mb-1">
                  {item.period}
                </p>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                    {item.subtitle}
                  </p>
                )}
                {item.bullets ? (
                  <ul className="list-disc pl-5 space-y-1 text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </SectionFX>

        {/* Leadership & Community Involvement */}
        <SectionFX variant="rotate-in">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Leadership &amp; Community Involvement
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 mb-6" />
          <CardStack
            items={leadershipCards.map((c, i) => ({
              id: i,
              title: c.name,
              organization: c.organization,
              designation: c.designation,
              description: c.quote,
              imageSrc: c.src,
            }))}
            cardWidth={460}
            cardHeight={300}
            showDots
            renderCard={(item) => (
              <div className="relative h-full w-full">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-indigo-200">
                    {item.organization}
                  </p>
                  <p className="text-xs text-white/60 mb-2">
                    {item.designation}
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed text-white/85">
                    {item.description}
                  </p>
                </div>
              </div>
            )}
          />
        </SectionFX>
      </div>
    </section>
  );
}
