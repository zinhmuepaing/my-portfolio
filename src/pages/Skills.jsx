import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Brain, Database, Wrench, Globe, Cpu, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
    {
        title: "Programming",
        icon: Code,
        color: "from-blue-500 to-blue-700",
        skills: ["Python", "Java", "C"]
    },
    {
        title: "AI / Machine Learning",
        icon: Brain,
        color: "from-purple-500 to-purple-700",
        skills: ["Scikit-learn", "TensorFlow", "Regression Models", "EDA", "Model Evaluation"]
    },
    {
        title: "Data Analytics / Engineering",
        icon: Database,
        color: "from-green-500 to-green-700",
        skills: ["KNIME", "Pandas", "NumPy", "Tableau", "Data Cleaning", "Feature Engineering"]
    },
    {
        title: "Software Development",
        icon: Wrench,
        color: "from-orange-500 to-orange-700",
        skills: ["Java Swing", "Object-Oriented Programming", "Git/GitHub"]
    },
    {
        title: "Embedded Systems",
        icon: Cpu,
        color: "from-red-500 to-red-700",
        skills: ["MPLAB", "Arduino IDE", "Embedded C"]
    },
    {
        title: "Web Development",
        icon: Globe,
        color: "from-cyan-500 to-cyan-700",
        skills: ["HTML", "CSS", "JavaScript", "MySQL"]
    },
    {
        title: "Automation",
        icon: Zap,
        color: "from-yellow-500 to-yellow-700",
        skills: ["UiPath"]
    }
];

export default function Skills() {
    const [hoveredCard, setHoveredCard] = useState(null);

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
                            Skills & Expertise
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                            onMouseEnter={() => setHoveredCard(categoryIndex)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <Card
                                className={`h-full transition-all duration-300 hover:shadow-2xl ${hoveredCard === categoryIndex ? 'scale-105' : ''
                                    }`}
                            >
                                <CardContent className="p-6">
                                    {/* Icon & Title */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <motion.div
                                            animate={hoveredCard === categoryIndex ? { rotate: 360 } : { rotate: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className={`p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg`}
                                        >
                                            <category.icon className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Skills List */}
                                    <div className="space-y-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                                className="group"
                                            >
                                                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-slate-700 hover:bg-gray-100 dark:hover:bg-slate-600 transition-all">
                                                    <div className={`w-2 h-2 bg-gradient-to-br ${category.color} rounded-full group-hover:scale-150 transition-transform`} />
                                                    <span className="text-gray-700 dark:text-gray-300 group-hover:translate-x-1 transition-transform">
                                                        {skill}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Skill Count Badge */}
                                    <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${category.color} rounded-full`}>
                                            <span className="text-white text-sm font-semibold">
                                                {category.skills.length} Skills
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Summary Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-16"
                >
                    <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-none">
                        <CardContent className="p-10">
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-4">
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Continuous Learning
                                    </span>
                                </h3>
                                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                                    I'm constantly expanding my skill set and staying up-to-date with the latest
                                    technologies and best practices in software engineering, AI, and data science.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                                <div className="text-center">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        20+
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Total Skills</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        7
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Categories</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        3
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Languages</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        4.0
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">CGPA</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}