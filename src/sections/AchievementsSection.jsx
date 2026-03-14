import { motion } from "framer-motion";

const achievements = [
  {
    title: "Finalist (Top 4) -- Tech for Good Hackathon 2026",
    description:
      "Selected among the Top 4 teams at the NTU College of Computing and Data Science Hackathon for Career Quest Map. Recognized for strong technical implementation and AI pipeline design.",
    year: "2026",
    category: "Hackathon",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/394df6a62_Screenshot2026-03-11205359.png",
  },
  {
    title: "Temasek Polytechnic Engineering Scholarship",
    description:
      "Awarded to top students based on academic excellence, leadership potential, and active contribution to the school community. Received for two consecutive years (AY2024/2025 and AY2025/2026).",
    year: "2024 -- Present",
    category: "Academic",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/95f7e51fb_Scholarship.jpg",
  },
  {
    title: "Director's List Award",
    description:
      "Recognized as top 10% student for outstanding academic performance in the Diploma in Computer Engineering for AY2024/2025.",
    year: "2024/2025",
    category: "Academic",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/06cb3e1b9_DirectorListAward.png",
  },
  {
    title: "Merit Award -- RoboCoder Challenge",
    description: "Excellence in C programming and robotics competition.",
    year: "2024/2025",
    category: "Technical",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/1aa11cd86_Robot.png",
  },
  {
    title: "Merit Award -- Electronic Design Competition",
    description:
      "Outstanding performance in circuit design and troubleshooting.",
    year: "2024/2025",
    category: "Technical",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/cb000927a_EDevice.jpg",
  },
  {
    title: "Gold Medalist -- U-15 Regional Tennis Championship",
    description: "First place in under-15 category at regional level.",
    year: "2017",
    category: "Sports",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/8fe076f59_Tennis.png",
  },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/60"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements
          </h2>
          <p className="text-gray-500">
            Recognition of excellence in academics, technical skills, and
            sports.
          </p>
        </motion.div>

        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex gap-5 items-start p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Thumbnail */}
              <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-medium text-gray-400">
                    {achievement.year}
                  </span>
                  <span className="text-xs text-gray-400">
                    {achievement.category}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {achievement.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
