import { useState } from "react";
import { Github, Linkedin, Mail, CornerDownLeft } from "lucide-react";
import { ChatInput } from "@/components/ui/chat-input";
import { Button } from "@/components/ui/button";
import { SectionFX } from "@/components/scroll/SectionFX";
import { SectionHeading } from "@/components/ui/section-heading";

export default function ContactSection() {
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div>
          <SectionHeading
            index="06"
            align="center"
            title="Let's Stay In Touch"
            className="mb-6"
            style={{ color: "#0b7b9e" }}
          />
          <SectionFX variant="fade-drop" exit={false}>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              I am currently focused on building side projects that address
              tangible, real-world challenges. My goal is to apply a rigorous
              problem-solving mindset across Software Engineering, AI Engineering,
              and Data Engineering to create impactful solutions. Whether you have
              a project to discuss, want to collaborate, or just want to connect,
              I&apos;d love to hear from you.
            </p>
          </SectionFX>
        </div>

        {/* Chat box */}
        <SectionFX
          variant="fade-drop"
          exit={false}
          delay={0.25}
          className="max-w-2xl mx-auto"
        >
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
              <Button variant="ghost" size="icon" type="button" asChild className="text-[#333] dark:text-[#f0f0f0] hover:text-black dark:hover:text-white">
                <a
                  href="https://github.com/zinhmuepaing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>

              <Button variant="ghost" size="icon" type="button" asChild className="text-[#0A66C2] hover:text-[#004182]">
                <a
                  href="https://linkedin.com/in/zinhmuepaing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>

              <Button variant="ghost" size="icon" type="button" asChild className="text-[#EA4335] hover:text-[#C5221F]">
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
        </SectionFX>
      </div>
    </section>
  );
}
