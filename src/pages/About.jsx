import { motion } from "framer-motion";
import { GraduationCap, Award, Target, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const modules = [
    "Python Programming",
    "Java Object-Oriented Programming",
    "Microcontroller Programming in C",
    "Data Visualization & Analytics"
];

export default function About() {
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
                            About Me
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Get to know more about my journey and aspirations
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left Column - Image & Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Profile Image */}
                        <div className="relative flex justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20" />
                            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1 w-56 h-56 md:w-72 md:h-72 shadow-2xl">
                                <div className="bg-white dark:bg-slate-800 rounded-full overflow-hidden w-full h-full">
                                    <img
                                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/fd4eeb3dd_photo_2026-03-11_21-01-50.jpg"
                                        alt="Zin Hmue Paing"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Quick Info Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <
                                // @ts-ignore
                                Card className="hover:shadow-lg transition-shadow">
                                <
                                    // @ts-ignore
                                    CardContent className="p-6">
                                    <GraduationCap className="w-8 h-8 text-blue-600 mb-3" />
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">4.0</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
                                </CardContent>
                            </Card>
                            <
                                // @ts-ignore
                                Card className="hover:shadow-lg transition-shadow">
                                <
                                    // @ts-ignore
                                    CardContent className="p-6">
                                    <Award className="w-8 h-8 text-purple-600 mb-3" />
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white">Top 5%</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Scholar</div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Right Column - Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Education */}
                        <
                            // @ts-ignore
                            Card className="hover:shadow-xl transition-shadow">
                            <
                                // @ts-ignore
                                CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                                        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-2">Education</h3>
                                        <div className="space-y-2">
                                            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                                Diploma in Computer Engineering
                                            </p>
                                            <p className="text-gray-600 dark:text-gray-400">
                                                Temasek Polytechnic
                                            </p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                                                    CGPA: 4.0/4.0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Key Modules */}
                        <
                            // @ts-ignore
                            Card className="hover:shadow-xl transition-shadow">
                            <
                                // @ts-ignore
                                CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
                                        <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-4">Key Modules with Distinction</h3>
                                        <div className="grid gap-3">
                                            {modules.map((module, index) => (
                                                <motion.div
                                                    key={module}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.6 + index * 0.1 }}
                                                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-lg"
                                                >
                                                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                                    <span className="text-gray-700 dark:text-gray-300">{module}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Career Goal */}
                        <
                            // @ts-ignore
                            Card className="hover:shadow-xl transition-shadow">
                            <
                                // @ts-ignore
                                CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
                                        <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-2">Career Goal</h3>
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            Software Engineer / AI Engineer / Data Engineer
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Personal Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <
                        // @ts-ignore
                        Card className="hover:shadow-2xl transition-shadow bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-none">
                        <
                            // @ts-ignore
                            CardContent className="p-10">
                            <h3 className="text-3xl font-bold mb-6 text-center">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    My Philosophy
                                </span>
                            </h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                                I enjoy solving technical problems, analyzing complex data, and creating software
                                that improves systems and workflows. I am eager to grow as an engineer and contribute
                                to impactful projects that make a difference in people's lives and advance technology.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}