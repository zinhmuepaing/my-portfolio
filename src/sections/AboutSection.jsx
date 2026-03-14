import { motion } from "framer-motion";
import { AnimatedCard } from "@/components/ui/animated-card";

const timeline = [
  {
    period: "2022 -- 2024",
    title: "Yangon Technological University",
    description:
      "Studied Computer Engineering & Information Technology. Built foundational knowledge in programming, electronics, and engineering principles before transitioning to Singapore.",
  },
  {
    period: "2024 -- Present",
    title: "Temasek Polytechnic",
    description:
      "Pursuing Diploma in Computer Engineering. Maintaining a perfect CGPA of 4.0/4.0. Awarded the Director's List in Year 1 & 2, and received the Temasek Polytechnic Engineering Scholarship for two consecutive years.",
  },
];

const leadershipCards = [
  {
    name: "President, CENT",
    organization: "Computer Engineering Network (CENT)",
    designation: "Apr 2025 – Present",
    quote:
      "Appointed as President of the Computer Engineering Network at Temasek Polytechnic. Led the planning and execution of major student events including the Year 1 Welcome Party, Annual General Meeting, and BBQ Event. Coordinated logistics, managed communications across committees and partner clubs, and fostered a strong sense of community among Computer Engineering students.",
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/83fb3ebad_PresidentPhoto.png",
  },
  {
    name: "Peer Tutor",
    organization: "Temasek Polytechnic",
    designation: "Apr 2025 – Present",
    quote:
      "Tutored junior students in Engineering Mathematics II and Digital Fundamentals I, adapting explanations to different learning levels and guiding them through complex engineering concepts. Applied communication and problem-solving skills to improve their understanding and academic confidence.",
    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/17b7b33fa_photo_2025-11-23_13-21-53.jpg",
  },
  {
    name: "ENGenius Programme",
    organization: "Temasek Polytechnic School of Engineering",
    designation: "Nov 2024 – Present",
    quote:
      "Selected for the talent management programme for high academic achievers. Completed Higher Engineering Skills in IoT and Mobile/Web App Development. Participated as Student Instructor at the Common Engineering Programme Streaming Workshop and as a Student Exhibitor at the TP x Tampines East CC Edusave Awards Ceremony.",
    src: `${import.meta.env.BASE_URL}images/ENGenius.png`,
  },
  {
    name: "Community Volunteer",
    organization: "Hao Ren Hao Shi (好人好事)",
    designation: "Dec 2024 – Present",
    quote:
      "Contributed to social service as part of Team Temasek by assisting in mobile grocery distribution for underprivileged families. Managed crowd flow, replenished supplies, and supported beneficiaries — demonstrating teamwork, social responsibility, and genuine care for the community.",
    src: `${import.meta.env.BASE_URL}images/Vounteer.png`,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 mb-6" />
          <p className="text-gray-500 leading-relaxed max-w-3xl">
            I am a Computer Engineering student at Temasek Polytechnic with a
            deep passion for{" "}
            <span className="text-gray-700 font-medium">
              artificial intelligence, machine learning, large language models,
              and data science
            </span>
            . I am driven by the challenge of transforming raw data into
            actionable insights and building end-to-end AI systems — from
            designing model architectures and fine-tuning pretrained networks to
            engineering structured LLM pipelines with schema validation and
            deterministic fallbacks. My work spans deep learning computer
            vision, predictive analytics with classical ML classifiers, IoT data
            pipelines, and AI-driven interactive applications. I approach every
            project with rigorous analytical thinking, full-pipeline ownership,
            and a commitment to building systems that are not just technically
            sound, but genuinely useful.
          </p>
        </motion.div>

        {/* My Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            My Journey
          </h3>
          <div className="w-10 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 mb-8" />
          <div className="relative pl-8 border-l-2 border-gray-200 space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-4 border-white shadow" />
                <p className="text-sm font-medium text-gray-400 mb-1">
                  {item.period}
                </p>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership & Community Involvement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-50/40 via-white to-indigo-50/30 rounded-3xl p-8 -mx-4 sm:mx-0"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Leadership &amp; Community Involvement
          </h3>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 mb-2" />
          <AnimatedCard cards={leadershipCards} autoplay={false} />
        </motion.div>
      </div>
    </section>
  );
}
