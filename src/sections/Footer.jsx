import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/40 dark:bg-gray-950/60">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          Zin Hmue Paing {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/zinhmuepaing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/zinhmuepaing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:zinhmuep@gmail.com"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
