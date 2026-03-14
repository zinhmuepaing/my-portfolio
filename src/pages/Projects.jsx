import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, TrendingUp, Cpu, Trophy, Brain, Map } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const projects = [
    {
        id: 5,
        title: "Career Quest Map",
        icon: Map,
        color: "from-emerald-500 to-teal-700",
        tools: ["Python", "Pygame", "LangChain", "Azure OpenAI", "Prompt Engineering"],
        shortDesc: "AI-guided career pathway discovery game built for the NTU CCDS Tech for Good Hackathon 2026.",
        fullDesc: "Career Quest Map is an interactive AI-guided game that helps students explore career pathways through structured self-discovery. Instead of simply recommending jobs or courses, the system guides users through an adaptive questionnaire and produces practical next steps — strengths insights, three ranked pathways, and actionable micro-quests and mini-projects to test each pathway in real life.",
        achievements: [
            "Built for NTU CCDS Tech for Good Hackathon 2026 — reached Top 4 Finalist (out of all teams)",
            "Designed modular system architecture: game interface, content engine, LLM layer, validation layer, fallback system, and state management",
            "Implemented a two-stage adaptive questionnaire (17 questions total) with strict type enforcement: MCQ, sliders, rating scales, and text responses",
            "Engineered prompt generation logic to produce structured JSON outputs with schema validation — rejecting hallucinated or malformed AI responses",
            "Integrated Azure OpenAI via LangChain with a deterministic fallback catalog system ensuring reliability even without AI",
            "Designed a Dragon Quest action system with micro-quests (1 week) and mini-projects (1 month) to convert exploration into real experimentation",
            "Implemented full game state management using Python dataclasses with save/resume functionality",
            "Built interactive Pygame interface with multiple scenes, top-down movement, dialog screens, and keyboard navigation"
        ],
        sections: [
            { heading: "Project Goal", body: "Many young people must decide their education or career path early, often without understanding their strengths, work style, or long-term interests. Career Quest Map addresses this by guiding users through structured self-discovery and producing practical next steps including strengths insights, three ranked pathways, and actionable tasks to test each pathway in real life." },
            { heading: "Core System Architecture", body: "The system is a modular architecture with six components: Game Interface Layer, Content Generation Engine, LLM Integration Layer, Validation & Safety Layer, Fallback Content System, and State & Configuration Management. This ensures AI-generated outputs remain structured, safe, and deterministic." },
            { heading: "Adaptive Question System", body: "A two-stage questionnaire progressively refines career recommendations. Stage 1 (House) uses 5 quick questions (2 MCQ, 1 slider, 1 rating scale, 1 text). Stage 2 (Wise Man) uses 12 deeper questions (4 MCQ, 3 sliders, 3 rating scales, 2 text) targeting three inferred career fields. Questions adapt based on education stage (Secondary/JC vs Polytechnic)." },
            { heading: "Validation & Reliability", body: "Every AI response passes strict validators checking field counts, data types, valid ranges, and formats. Examples: exactly 3 strength tags, 2–4 work style tags, 2–5 feedback lines, exactly 3 ranked pathways. Any violation rejects the response, preventing hallucinated structures. A deterministic fallback catalog ensures the game works even without AI." },
            { heading: "Dragon Quest Action System", body: "After choosing a pathway gate, users unlock Dragon Quests. Micro-quests are 1-week tasks with minimal time commitment (e.g. try a coding tutorial). Mini-projects are 1-month structured projects with Plan → Build → Review phases, producing a shareable artifact such as a GitHub repo, report, or portfolio item." },
            { heading: "Technical Stack", body: "Python 3.12 · Pygame (game interface) · pygame widgets (UI components) · LangChain (LLM workflow) · Azure OpenAI (generation) · python-dotenv (configuration)" }
        ],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/28dabd996_careerQuesMap.png"
    },
    {
        id: 6,
        title: "Musical Instrument Image Classification",
        icon: Brain,
        color: "from-violet-500 to-purple-700",
        tools: ["Python", "TensorFlow", "EfficientNetV2L", "ResNet152V2", "VGG16", "Flask", "Transfer Learning"],
        shortDesc: "Deep learning computer vision project achieving 98.83% validation accuracy across 8 instrument classes.",
        fullDesc: "A deep learning project that designs and evaluates multiple model architectures for classifying musical instruments from images. The project compares a custom CNN trained from scratch against three transfer learning models (VGG16, ResNet152V2, EfficientNetV2L) across 8 instrument categories, ultimately achieving 98.83% validation accuracy with EfficientNetV2L deployed via a Flask web application.",
        achievements: [
            "Achieved 98.83% validation accuracy using EfficientNetV2L — best result across all tested models",
            "Improved custom CNN from 62% to 78% accuracy (+16 percentage points) through batch normalization, dropout, and architecture refinements",
            "VGG16 reached ~93%, ResNet152V2 ~97%, EfficientNetV2L 98.83% with lowest validation loss",
            "Built on-the-fly data augmentation pipeline (rotation, zoom, shear, brightness, channel shifting) using TensorFlow image generators",
            "Implemented two-phase transfer learning: frozen backbone for head training, then selective unfreezing for fine-tuning",
            "Applied key ML techniques: batch normalization, dropout, label smoothing, class weighting, and structured fine-tuning",
            "Deployed final model via Flask web app allowing image upload, model selection, and confidence score output",
            "Dataset: 2,624 training images and 1,112 validation images across 8 classes (Tambourine, Xylophone, Accordion, Cabasa, Clavichord, Drums, Flute, Sitar)"
        ],
        sections: [
            { heading: "Dataset & Preprocessing", body: "2,624 training and 1,112 validation images resized to 224×224 pixels. Preprocessing pipeline uses TensorFlow image generators with pixel normalization (1/255 rescale). On-the-fly augmentation includes rotation, width/height shift, shear, zoom, horizontal flipping, brightness variation, and channel shifting to maximize effective dataset diversity." },
            { heading: "Custom CNN Architecture", body: "Four convolutional blocks each containing: Convolution → Batch Normalization → Activation → Pooling. Additional regularization via Dropout and GlobalAveragePooling2D. Classification head uses Dense layers with ReLU activation and Softmax output. Baseline: ~62% accuracy. After improvements: ~78% (+16 percentage points)." },
            { heading: "Transfer Learning Strategy", body: "Three pretrained ImageNet backbones were tested: VGG16 (~93%), ResNet152V2 (~97%), and EfficientNetV2L (98.83%). Two-phase training: Phase 1 freezes the backbone and trains only the classification head. Phase 2 unfreezes the last layers for fine-tuning with a smaller learning rate, preventing catastrophic forgetting." },
            { heading: "Model Deployment", body: "The final EfficientNetV2L model is deployed via a Flask web application. Users can upload an image, select a trained model, and receive the predicted instrument label with confidence score. Images are processed using base64 encoding for web compatibility." }
        ],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/692e491a01c140ee9df5e4d9/f8f0979d9_AIML.png"
    },
    {
        id: 1,
        title: "DataPLUS – Mobile Plan Subscription System",
        icon: Code,
        color: "from-blue-500 to-blue-700",
        tools: ["Java", "OOP", "Java Swing"],
        shortDesc: "Desktop application simulating telco subscription workflow with modular architecture.",
        fullDesc: "A comprehensive Java-based desktop application that simulates a telecommunications subscription system with staff and customer interfaces.",
        achievements: [
            "Built Java Swing desktop application simulating telco subscription workflow",
            "Implemented modular OOP architecture with text-file storage",
            "Designed interactive GUI for staff and customer functions",
            "Integrated data persistence and validation mechanisms"
        ],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/52275bc5f_Screenshot2025-11-15203641.png"
    },
    {
        id: 2,
        title: "Titanic Survival Analysis",
        icon: TrendingUp,
        color: "from-purple-500 to-purple-700",
        tools: ["KNIME", "Python", "Tableau", "Machine Learning"],
        shortDesc: "Machine learning project analyzing Titanic dataset with 82.8% prediction accuracy.",
        fullDesc: "Comprehensive data analysis and machine learning project using the historic Titanic dataset to predict passenger survival.",
        achievements: [
            "Processed 10,000-row dataset using KNIME",
            "Built logistic regression model achieving 82.8% accuracy",
            "Designed dashboards to visualize survival trends (gender, class, family size)",
            "Performed extensive exploratory data analysis and feature engineering"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    },
    {
        id: 3,
        title: "Microcontroller Car Parking Prototype",
        icon: Cpu,
        color: "from-green-500 to-green-700",
        tools: ["Embedded C", "MPLAB", "PIC Microcontroller"],
        shortDesc: "Smart parking system using PIC microcontroller with sensors, motors, and LCD display.",
        fullDesc: "An embedded systems project implementing an automated car parking system with real-time sensor feedback.",
        achievements: [
            "Programmed PIC microcontroller with sensors, motors, and LCD",
            "Troubleshot defective hardware and redesigned circuit layout",
            "Improved stability and component integration",
            "Implemented real-time parking space detection and display"
        ],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/ccf4f5b01_Screenshot2025-11-15204026.png"
    },
    {
        id: 4,
        title: "Robotics Competitions",
        icon: Trophy,
        color: "from-orange-500 to-orange-700",
        tools: ["C Programming", "Robotics", "Circuit Design"],
        shortDesc: "Award-winning robotics projects in RoboCoder Challenge and Electronic Design Competition.",
        fullDesc: "Competitive robotics projects demonstrating proficiency in embedded programming and hardware integration.",
        achievements: [
            "Merit Awards in RoboCoder Challenge and Electronic Design Competition",
            "C programming for line-following robot",
            "Circuit troubleshooting and optimization",
            "Real-time sensor integration and motor control"
        ],
        image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69186ece68e3ddd2da7b4186/1aa11cd86_Robot.png"
    }
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

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
                            My Projects
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Showcasing my technical work and achievements
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full overflow-hidden group hover:shadow-2xl transition-all duration-300 cursor-pointer">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className={`absolute top-4 right-4 p-3 bg-gradient-to-br ${project.color} rounded-xl shadow-lg`}>
                                        <project.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Tools/Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className={`px-3 py-1 text-xs font-medium text-white bg-gradient-to-r ${project.color} rounded-full`}
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                                        {project.shortDesc}
                                    </p>

                                    {/* Achievements Preview */}
                                    <div className="space-y-2 mb-6">
                                        {project.achievements.slice(0, 2).map((achievement, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className={`w-1.5 h-1.5 bg-gradient-to-r ${project.color} rounded-full mt-2`} />
                                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                                    {achievement}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        onClick={() => setSelectedProject(project)}
                                        className="w-full group/btn"
                                        variant="outline"
                                    >
                                        View Details
                                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    {selectedProject && (
                        <>
                            <DialogHeader>
                                <DialogTitle className="text-3xl font-bold pr-8">
                                    {selectedProject.title}
                                </DialogTitle>
                            </DialogHeader>

                            <div className="space-y-6">
                                {/* Image */}
                                <div className="relative h-64 rounded-xl overflow-hidden">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className={`absolute top-4 right-4 p-3 bg-gradient-to-br ${selectedProject.color} rounded-xl shadow-lg`}>
                                        <selectedProject.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Tools */}
                                <div>
                                    <h4 className="font-semibold mb-3 text-lg">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tools.map((tool) => (
                                            <span
                                                key={tool}
                                                className={`px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${selectedProject.color} rounded-full`}
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <h4 className="font-semibold mb-3 text-lg">Project Overview</h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {selectedProject.fullDesc}
                                    </p>
                                </div>

                                {/* Achievements */}
                                <div>
                                    <h4 className="font-semibold mb-4 text-lg">Key Highlights</h4>
                                    <div className="space-y-3">
                                        {selectedProject.achievements.map((achievement, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg"
                                            >
                                                <div className={`w-2 h-2 flex-shrink-0 bg-gradient-to-r ${selectedProject.color} rounded-full mt-2`} />
                                                <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                                    {achievement}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Deep-dive sections (for rich projects) */}
                                {selectedProject.sections && selectedProject.sections.length > 0 && (
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-lg">Technical Deep-Dive</h4>
                                        {selectedProject.sections.map((section, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.08 }}
                                                className="border-l-4 border-blue-400 pl-4 py-1"
                                            >
                                                <h5 className="font-semibold text-sm mb-1 text-gray-900 dark:text-gray-100">{section.heading}</h5>
                                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{section.body}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}