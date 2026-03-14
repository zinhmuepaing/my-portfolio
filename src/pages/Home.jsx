import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Interactive3DCard from "../components/Interactive3DCard";

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
                {/* Floating Shapes */}
                <motion.div
                    className="absolute w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70"
                    animate={{
                        x: mousePosition.x * 0.02,
                        y: mousePosition.y * 0.02,
                    }}
                    style={{ top: "10%", left: "10%" }}
                />
                <motion.div
                    className="absolute w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70"
                    animate={{
                        x: mousePosition.x * -0.01,
                        y: mousePosition.y * -0.01,
                    }}
                    style={{ top: "40%", right: "10%" }}
                />
                <motion.div
                    className="absolute w-80 h-80 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70"
                    animate={{
                        x: mousePosition.x * 0.015,
                        y: mousePosition.y * 0.015,
                    }}
                    style={{ bottom: "10%", left: "30%" }}
                />
            </div>

            {/* Hero Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-block"
                        >
                            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                                👋 Welcome to my portfolio
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-5xl md:text-7xl font-bold"
                        >
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Zin Hmue Paing
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium"
                        >
                            Aspiring Software Engineer & AI Engineer
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="text-lg text-gray-600 dark:text-gray-400"
                        >
                            Temasek Polytechnic
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
                        >
                            I am a Computer Engineering student passionate about AI, Machine Learning,
                            data analysis, and building real-world engineering solutions.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <Link to={createPageUrl("Projects")}>
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                                    View Projects
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <a
                                href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/2e333f421_RESUME_Zin_Hmue_Paing.pdf"
                                download="Zin_Hmue_Paing_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" variant="outline" className="group">
                                    <Download className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                    Download Resume
                                </Button>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            className="flex gap-4 pt-4"
                        >
                            <a
                                href="https://linkedin.com/in/zinhmuepaing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
                            >
                                <Linkedin className="w-5 h-5 text-blue-600" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
                            >
                                <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                            </a>
                            <a
                                href="mailto:zinhmuep@gmail.com"
                                className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all"
                            >
                                <Mail className="w-5 h-5 text-red-600" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - 3D ID Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            {/* Glowing Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />

                            {/* 3D ID Card */}
                            <div className="relative">
                                <Interactive3DCard
                                    frontImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/8a4df9d45_IDFront.png"
                                    backImage="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/5488c1b75_IDBack.png"
                                />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4"
                            >
                                <div className="text-2xl">💻</div>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity }}
                                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-4"
                            >
                                <div className="text-2xl">🤖</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
                >
                    {[
                        { label: "CGPA", value: "4.0/4.0" },
                        { label: "Projects", value: "10+" },
                        { label: "Awards", value: "5+" },
                        { label: "Skills", value: "20+" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                            className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                        >
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}