import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
    {
        title: "Finalist (Top 4) – Pathways in Python Tech for Good Hackathon 2026",
        description: "Selected among the Top 4 teams at the NTU College of Computing and Data Science Hackathon for Career Quest Map — an AI-powered career pathway discovery game. Recognized for strong technical implementation, structured AI pipeline design, and practical impact for Singapore youth making early career decisions.",
        icon: Trophy,
        color: "from-rose-500 to-pink-700",
        year: "2026",
        category: "Hackathon",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/394df6a62_Screenshot2026-03-11205359.png"
    },
    {
        title: "Temasek Polytechnic Engineering Scholarship",
        description: "Awarded to top 5% of students based on academic excellence",
        icon: Trophy,
        color: "from-yellow-400 to-yellow-600",
        year: "2024–Present",
        category: "Academic",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/95f7e51fb_Scholarship.jpg"
    },
    {
        title: "Director's List Award",
        description: "Recognized as top 10% student for outstanding academic performance",
        icon: Award,
        color: "from-blue-500 to-blue-700",
        year: "2024/2025",
        category: "Academic",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/06cb3e1b9_DirectorListAward.png"
    },
    {
        title: "Merit Award – RoboCoder Challenge",
        description: "Excellence in C programming and robotics competition",
        icon: Star,
        color: "from-purple-500 to-purple-700",
        year: "2024/2025",
        category: "Technical",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/1aa11cd86_Robot.png"
    },
    {
        title: "Merit Award – Electronic Design Competition",
        description: "Outstanding performance in circuit design and troubleshooting",
        icon: Sparkles,
        color: "from-green-500 to-green-700",
        year: "2024/2025",
        category: "Technical",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/cb000927a_EDevice.jpg"
    },
    {
        title: "Gold Medalist – U-15 Regional Tennis Championship",
        description: "First place in under-15 category at regional level",
        icon: Medal,
        color: "from-orange-500 to-orange-700",
        year: "2017",
        category: "Sports",
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/8fe076f59_Tennis.png"
    }
];

export default function Achievements() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Achievements & Awards
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Recognition of excellence in academics, technical skills, and sports
                    </p>
                </motion.div>

                {/* Stats Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {[
                        { label: "Total Awards", value: "6+", icon: Trophy },
                        { label: "Academic", value: "2", icon: Award },
                        { label: "Technical", value: "3", icon: Star },
                        { label: "Sports", value: "1", icon: Medal }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            <
                                // @ts-ignore
                                Card className="hover:shadow-xl transition-all hover:scale-105">
                                <
                                    // @ts-ignore
                                    CardContent className="p-6 text-center">
                                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                        {stat.label}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Achievements Timeline */}
                <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                        >
                            <
                                // @ts-ignore
                                Card className="hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                                <
                                    // @ts-ignore
                                    CardContent className="p-0">
                                    <div className="flex flex-col md:flex-row">
                                        {/* Image Section */}
                                        <div className="relative md:w-64 h-48 md:h-auto overflow-hidden">
                                            <img
                                                src={achievement.image}
                                                alt={achievement.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className={`absolute top-4 left-4 p-3 bg-gradient-to-br ${achievement.color} rounded-xl shadow-lg`}>
                                                <achievement.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex-1 p-8">
                                            <div className="flex items-start justify-between mb-4">
                                                <div>
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className={`px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${achievement.color} rounded-full`}>
                                                            {achievement.category}
                                                        </span>
                                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                                            {achievement.year}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                                                        {achievement.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Summary Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-16"
                >
                    <
                        // @ts-ignore
                        Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-none">
                        <
                            // @ts-ignore
                            CardContent className="p-10">
                            <div className="text-center">
                                <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
                                <h3 className="text-3xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Commitment to Excellence
                                    </span>
                                </h3>
                                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                                    These achievements reflect my dedication to academic excellence, technical innovation,
                                    and well-rounded personal development. I continue to strive for excellence in all my endeavors.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}