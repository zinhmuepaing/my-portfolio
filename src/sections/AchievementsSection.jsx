import { Timeline } from "@/components/ui/timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionFX } from "@/components/scroll/SectionFX";

const achievements = [
  {
    year: "2026",
    title: "Finalist (Top 4), Tech for Good Hackathon 2026",
    description:
      "Selected among the Top 4 teams at the NTU College of Computing and Data Science Hackathon for Career Quest Map. Recognized for strong technical implementation, structured AI pipeline design, and practical impact for Singapore youth making early career decisions.",
    category: "Hackathon",
    categoryColor: "bg-rose-50 text-rose-600 border border-rose-100",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/394df6a62_Screenshot2026-03-11205359.png",
  },
  {
    year: "2024 – Present",
    title: "Temasek Polytechnic Engineering Scholarship",
    description:
      "Awarded to top students based on academic excellence, leadership potential, and active contribution to the school community. Received for three consecutive years (AY2024/2025, AY2025/2026, and AY2026/2027).",
    category: "Academic",
    categoryColor: "bg-yellow-50 text-yellow-700 border border-yellow-100",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/95f7e51fb_Scholarship.jpg",
  },
  {
    year: "2024/2025",
    title: "Director's List Award (Ranked #1, Common Engineering Programme)",
    description:
      "Ranked #1 academic achiever among a cohort of 400+ students in the Common Engineering Programme (AY2024/2025), Temasek Polytechnic's largest course, before transitioning into the Diploma in Computer Engineering.",
    category: "Academic",
    categoryColor: "bg-blue-50 text-blue-700 border border-blue-100",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/06cb3e1b9_DirectorListAward.png",
  },
  {
    year: "2024/2025",
    title: "Merit Award, RoboCoder Challenge",
    description:
      "Awarded for excellence in C programming and robotics engineering in the RoboCoder Challenge. Demonstrated strong embedded programming skills, sensor integration, and systematic debugging under competition conditions.",
    category: "Technical",
    categoryColor: "bg-purple-50 text-purple-700 border border-purple-100",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/1aa11cd86_Robot.png",
  },
  {
    year: "2024/2025",
    title: "Merit Award, Electronic Design Competition",
    description:
      "Recognised for outstanding performance in electronic circuit design and troubleshooting. Demonstrated deep understanding of circuit analysis, component selection, and systematic problem-solving in electronic systems.",
    category: "Technical",
    categoryColor: "bg-green-50 text-green-700 border border-green-100",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/cb000927a_EDevice.jpg",
  },
];

// Build timeline data — group by year
const timelineData = achievements.map((a) => ({
  title: a.year,
  content: (
    <div className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-white/50 dark:border-gray-700/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={a.image}
          alt={a.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Content */}
      <div className="p-6">
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${a.categoryColor}`}
        >
          {a.category}
        </span>
        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 leading-snug">
          {a.title}
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{a.description}</p>
      </div>
    </div>
  ),
}));

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/60 dark:bg-gray-900/40"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <SectionHeading index="05" title="Achievements" className="mb-4" />
          <SectionFX variant="fade-drop" exit={false}>
            <p className="text-gray-500 dark:text-gray-400">
              Recognition of excellence in academics, technical skills, and
              competition.
            </p>
          </SectionFX>
        </div>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
