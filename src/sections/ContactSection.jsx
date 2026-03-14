import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, CornerDownLeft } from "lucide-react";
import { ChatInput } from "@/components/ui/chat-input";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Get In Touch
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            I am currently focused on building side projects that address
            tangible, real-world challenges. My goal is to apply a rigorous
            problem-solving mindset across Software Engineering, AI Engineering,
            and Data Engineering to create impactful solutions. Whether you have
            a project to discuss, want to collaborate, or just want to connect,
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center gap-6 mb-10"
        >
          <a
            href="https://github.com/zinhmuepaing"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/zinhmuepaing"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:zinhmuep@gmail.com"
            className="p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Chat box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: "#0b7b9e" }}
          >
            Let&apos;s stay in touch
          </h3>

          <form
            className="relative rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/60 focus-within:ring-1 focus-within:ring-ring p-1"
            onSubmit={(e) => {
              e.preventDefault();
              if (message.trim()) {
                window.location.href = `mailto:zinhmuep@gmail.com?subject=Hello from Portfolio&body=${encodeURIComponent(message)}`;
                setMessage("");
              }
            }}
          >
            <ChatInput
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
            />
            <div className="flex items-center p-3 pt-0">
              <Button variant="ghost" size="icon" type="button" asChild>
                <a
                  href="https://github.com/zinhmuepaing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>

              <Button variant="ghost" size="icon" type="button" asChild>
                <a
                  href="https://linkedin.com/in/zinhmuepaing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>

              <Button variant="ghost" size="icon" type="button" asChild>
                <a href="mailto:zinhmuep@gmail.com">
                  <Mail className="size-4" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>

              <Button
                type="submit"
                size="sm"
                className="ml-auto gap-1.5"
              >
                Send Message
                <CornerDownLeft className="size-3.5" />
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
