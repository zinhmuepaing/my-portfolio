import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 3000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                            Get In Touch
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        Let's connect and discuss opportunities
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        <Card className="hover:shadow-xl transition-all">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2">Email</h3>
                                        <a
                                            href="mailto:zinhmuep@gmail.com"
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                                        >
                                            zinhmuep@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-xl transition-all">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-2xl">
                                        <Linkedin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                                        <a
                                            href="https://linkedin.com/in/zinhmuepaing"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                                        >
                                            linkedin.com/in/zinhmuepaing
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-xl transition-all">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-4 bg-green-100 dark:bg-green-900 rounded-2xl">
                                        <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold mb-2">Location</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Singapore
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <a
                                href="mailto:zinhmuep@gmail.com"
                                className="block"
                            >
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg">
                                    <Mail className="mr-2 w-5 h-5" />
                                    Send Email
                                </Button>
                            </a>
                            <a
                                href="https://linkedin.com/in/zinhmuepaing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <Button variant="outline" className="w-full py-6 text-lg">
                                    <Linkedin className="mr-2 w-5 h-5" />
                                    Connect on LinkedIn
                                </Button>
                            </a>
                        </div>

                        {/* Info Card */}
                        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-none">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-2">Open to Opportunities</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    I'm currently seeking internship opportunities in Software Engineering,
                                    AI Engineering, or Data Engineering. Feel free to reach out!
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Card className="hover:shadow-2xl transition-shadow">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                                {!submitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <Label htmlFor="name" className="text-base">Your Name</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="mt-2 h-12"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="email" className="text-base">Your Email</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                                className="mt-2 h-12"
                                            />
                                        </div>

                                        <div>
                                            <Label htmlFor="message" className="text-base">Message</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell me about your project or opportunity..."
                                                required
                                                className="mt-2 min-h-[200px]"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg"
                                        >
                                            <Send className="mr-2 w-5 h-5" />
                                            Send Message
                                        </Button>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-16"
                                    >
                                        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Thank you for reaching out. I'll get back to you soon!
                                        </p>
                                    </motion.div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-none text-white">
                        <CardContent className="p-10">
                            <h3 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h3>
                            <p className="text-xl mb-6 opacity-90">
                                I'm always excited to collaborate on innovative projects and explore new opportunities
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-blue-600 hover:bg-gray-100"
                                    onClick={() => window.location.href = 'mailto:zinhmuep@gmail.com'}
                                >
                                    <Mail className="mr-2 w-5 h-5" />
                                    Start a Conversation
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}