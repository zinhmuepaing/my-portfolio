// @ts-nocheck
import { useState } from "react";
import { Github, Linkedin, Mail, CornerDownLeft } from "lucide-react";
import { profile, contactBio, sectionMeta } from "@/data/copy";
import { BrutalHeading } from "../ui/BrutalHeading";

const socialLinks = [
  { icon: Github, href: profile.socials.github, label: "GitHub" },
  { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
  { icon: Mail, href: profile.socials.email, label: "Email" },
];

export default function BrutalContact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      window.location.href = `mailto:zinhmuep@gmail.com?subject=Hello from Portfolio&body=${encodeURIComponent(
        message
      )}`;
      setMessage("");
    }
  };

  return (
    <section
      id="contact"
      className="border-t-[0.25rem] border-brutal-ink bg-brutal-orange px-4 py-24 text-brutal-ink sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-3xl text-center">
        <BrutalHeading
          index={sectionMeta.contact.index}
          title={sectionMeta.contact.title}
          align="center"
          className="mx-auto"
        />

        <p className="brutal-reveal mx-auto mt-6 max-w-xl text-base leading-relaxed text-brutal-ink/85">
          {contactBio}
        </p>

        <form
          onSubmit={handleSubmit}
          className="brutal-reveal mx-auto mt-10 max-w-2xl border-[0.25rem] border-brutal-ink bg-brutal-cream p-2 shadow-brutal-lg"
        >
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            rows={4}
            className="w-full resize-none bg-transparent p-3 text-sm text-brutal-ink placeholder:text-brutal-ink/40 focus:outline-none"
          />
          <div className="flex items-center gap-1 p-2 pt-0">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="flex h-9 w-9 items-center justify-center border-[0.125rem] border-transparent text-brutal-ink hover:border-brutal-ink hover:bg-brutal-acid"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <button
              type="submit"
              className="brutal-btn !rounded-none ml-auto !px-5 !py-2.5 text-xs"
            >
              Send Message
              <CornerDownLeft className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
