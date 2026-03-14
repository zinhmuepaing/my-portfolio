import { motion } from "framer-motion";

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

const leadership = [
  {
    role: "President, Computer Engineering Network (CENT)",
    period: "2025 -- 2026",
    description:
      "Leading the planning and execution of major student events, coordinating logistics and communications across committees and partner clubs.",
  },
  {
    role: "Peer Tutor",
    period: "2025 -- 2026",
    description:
      "Tutoring students in Engineering Mathematics II and Digital Fundamentals I, adapting explanations to different learning levels.",
  },
  {
    role: "ENGenius Programme",
    period: "2024 -- Present",
    description:
      "Selected for the talent management programme for high academic achievers. Completed Higher Engineering Skills in IoT and Mobile/Web App Development.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-3xl">
            I am a Computer Engineering student at Temasek Polytechnic with
            strong interests in full-stack development, data analytics, and
            applied machine learning. I enjoy building structured, scalable
            systems and solving complex technical problems through hands-on
            implementation and analytical thinking.
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
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            My Journey
          </h3>
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
                <div className="absolute -left-[2.35rem] top-1 w-4 h-4 rounded-full bg-gray-900 border-4 border-white" />
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

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Leadership & Involvement
          </h3>
          <div className="space-y-6">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-gray-100 rounded-xl p-6"
              >
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <h4 className="font-semibold text-gray-900">{item.role}</h4>
                  <span className="text-sm text-gray-400">{item.period}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
