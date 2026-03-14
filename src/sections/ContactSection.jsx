import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { GlassButton } from "@/components/ui/liquid-glass";

export default function ContactSection() {
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
            I am currently looking for internship opportunities in Software
            Engineering, AI Engineering, or Data Engineering. Whether you have a
            question, a project to discuss, or just want to say hi, feel free to
            reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <GlassButton href="mailto:zinhmuep@gmail.com">
            <span className="text-lg">Say Hello</span>
          </GlassButton>
        </motion.div>

        {/* Terminal-style email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block mb-10"
        >
          <div className="bg-gray-900 rounded-lg px-6 py-4 text-left font-mono text-sm">
            <p className="text-gray-400">
              <span className="text-green-400">~</span> git clone contact-info
            </p>
            <p className="text-white mt-1">zinhmuep@gmail.com</p>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/zinhmuepaing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/zinhmuepaing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
