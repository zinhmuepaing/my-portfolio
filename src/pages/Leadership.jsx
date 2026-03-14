import { motion } from "framer-motion";
import { Users, GraduationCap, Target, Calendar, Lightbulb, TrendingUp, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
    {
        title: "President, Computer Engineering Network (CENT)",
        icon: Users,
        color: "from-blue-500 to-blue-700",
        period: "2025 - 2026",
        responsibilities: [
            "Led Freshmen Welcome Party with 100+ attendees",
            "Organized Annual General Meeting (AGM) for club members",
            "Coordinated merchandise sales and club logistics",
            "Collaborated with multiple student clubs for inter-club events",
            "Managed events budget and vendor coordination",
            "Improved student engagement through innovative activities"
        ],
        skills: ["Leadership", "Event Management", "Coordination", "Communication"],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/83fb3ebad_PresidentPhoto.png"
    },
    {
        title: "Peer Tutor",
        icon: GraduationCap,
        color: "from-purple-500 to-purple-700",
        period: "2025 - 2026",
        responsibilities: [
            "Tutored juniors in Engineering Mathematics II",
            "Provided guidance on Digital Fundamentals I",
            "Explained complex engineering concepts clearly",
            "Developed teaching materials and practice problems",
            "Improved mentoring and communication skills",
            "Enhanced facilitation and presentation abilities"
        ],
        skills: ["Teaching", "Mentoring", "Communication", "Problem Solving"],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/17b7b33fa_photo_2025-11-23_13-21-53.jpg"
    },
    {
        title: "Football Team Captain – Private School Tournament",
        icon: Trophy,
        color: "from-red-500 to-red-700",
        period: "2019",
        responsibilities: [
            "Led team to private school tournament victory",
            "Coordinated training sessions and team strategies",
            "Fostered team spirit and collaboration",
            "Represented school in inter-school competitions"
        ],
        skills: ["Leadership", "Teamwork", "Strategic Thinking", "Sports Management"],
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=500&fit=crop"
    }
];

const impactStats = [
    { icon: Users, label: "Students Impacted", value: "200+" },
    { icon: Calendar, label: "Events Organized", value: "6" },
    { icon: Lightbulb, label: "Tutoring Sessions", value: "10+" },
    { icon: TrendingUp, label: "Engagement Increase", value: "40%" }
];

export default function Leadership() {
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
                            Leadership & CCA
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Building communities and mentoring the next generation
                    </p>
                </motion.div>

                {/* Impact Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {impactStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            <Card className="hover:shadow-xl transition-all hover:scale-105">
                                <CardContent className="p-6 text-center">
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

                {/* Leadership Roles */}
                <div className="space-y-12">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                        >
                            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                                <div className="grid md:grid-cols-2 gap-0">
                                    {/* Image Section */}
                                    <div className="relative h-64 md:h-auto overflow-hidden">
                                        <img
                                            src={role.image}
                                            alt={role.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className={`absolute top-6 left-6 p-4 bg-gradient-to-br ${role.color} rounded-2xl shadow-lg`}>
                                            <role.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r ${role.color} rounded-full`}>
                                                {role.period}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                            {role.title}
                                        </h3>

                                        {/* Responsibilities */}
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                                <Target className="w-5 h-5 text-blue-600" />
                                                Key Responsibilities
                                            </h4>
                                            <div className="space-y-3">
                                                {role.responsibilities.map((responsibility, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.7 + index * 0.2 + idx * 0.05 }}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <div className={`w-2 h-2 bg-gradient-to-r ${role.color} rounded-full mt-2 flex-shrink-0`} />
                                                        <span className="text-gray-700 dark:text-gray-300">
                                                            {responsibility}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Skills Developed */}
                                        <div>
                                            <h4 className="text-lg font-semibold mb-3">Skills Developed</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {role.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:scale-105 transition-transform"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-16"
                >
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-none">
                        <CardContent className="p-10">
                            <div className="text-center">
                                <Users className="w-16 h-16 mx-auto mb-6 text-blue-600" />
                                <h3 className="text-3xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Leadership Philosophy
                                    </span>
                                </h3>
                                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                                    Through my leadership roles, I've learned that effective leadership is about empowering
                                    others, fostering collaboration, and creating positive impact. I'm committed to building
                                    inclusive communities and helping others succeed.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}