import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, SendHorizontal } from "lucide-react";
import { GitHubIcon, GmailIcon, LinkedInIcon } from "@/components/ui/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { GlassCard } from "@/components/ui/glass";
import { contact, profile } from "@/data/copy";
import { cn } from "@/lib/utils";

// Each channel: how a message is delivered. Gmail opens a compose window; the
// others copy the message to the clipboard and open the profile.
const channels = [
  {
    id: "gmail",
    label: "Gmail",
    Icon: GmailIcon,
    color: "#EA4335",
    send: (msg) =>
      `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(
        "Hello from your portfolio"
      )}&body=${encodeURIComponent(msg)}`,
    status: "Opening Gmail…",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    Icon: LinkedInIcon,
    color: "#0A66C2",
    send: () => profile.socials.linkedin,
    copy: true,
    status: "Message copied. Opening LinkedIn…",
  },
  {
    id: "github",
    label: "GitHub",
    Icon: GitHubIcon,
    color: "#1f2328",
    send: () => profile.socials.github,
    copy: true,
    status: "Message copied. Opening GitHub…",
  },
];

export default function ContactSection() {
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState(channels[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => !menuRef.current?.contains(e.target) && setMenuOpen(false);
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [menuOpen]);

  const submit = (e) => {
    e?.preventDefault();
    const msg = message.trim();
    if (!msg) return;
    window.open(channel.send(msg), "_blank", "noopener,noreferrer");
    if (channel.copy) navigator.clipboard?.writeText(msg).catch(() => {});
    setStatus(channel.status);
    setMessage("");
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="wrap max-w-3xl">
        <SectionHeading index="08" title="Let's Stay In Touch" subtitle={contact.blurb} align="center" />

        <ScrollAnimation>
          <form onSubmit={submit}>
            <GlassCard refract className="rounded-[20px] p-3.5">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) submit(e);
                }}
                rows={3}
                placeholder="Say hello, share an idea, or ask a question…"
                aria-label="Your message"
                className="min-h-[72px] w-full resize-none bg-transparent px-1 text-[15px] leading-relaxed text-ink outline-none placeholder:text-muted-foreground/70"
              />
              <div className="flex items-center justify-between gap-2">
                <p className="hidden pl-1 text-xs text-muted-foreground sm:block">Enter to send · Shift+Enter for a new line</p>
                <div className="ml-auto flex items-center gap-1.5">
                  <div ref={menuRef} className="relative">
                    <button
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={menuOpen}
                      onClick={() => setMenuOpen((v) => !v)}
                      className="inline-flex h-[34px] items-center gap-1.5 rounded-full bg-white/70 pl-2.5 pr-2 text-xs font-medium text-ink shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
                    >
                      <channel.Icon className="h-[15px] w-[15px]" style={{ color: channel.color }} />
                      {channel.label}
                      <ChevronDown className="h-3.5 w-3.5 opacity-50" />
                    </button>
                    {menuOpen && (
                      <div
                        role="listbox"
                        className="absolute bottom-[calc(100%+8px)] right-0 z-40 min-w-[190px] rounded-[14px] bg-white/90 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_14px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl"
                      >
                        {channels.map((c) => (
                          <button
                            key={c.id}
                            type="button"
                            role="option"
                            aria-selected={c.id === channel.id}
                            onClick={() => {
                              setChannel(c);
                              setMenuOpen(false);
                            }}
                            className="flex w-full items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-left text-[13px] font-medium text-ink hover:bg-black/[0.045]"
                          >
                            <c.Icon className="h-[15px] w-[15px]" style={{ color: c.color }} />
                            <span className="flex-1">{c.label}</span>
                            <Check className={cn("h-4 w-4 text-coral", c.id !== channel.id && "opacity-0")} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    aria-label={`Send via ${channel.label}`}
                    className="btn-primary !h-9 !w-9 !p-0 disabled:pointer-events-none disabled:opacity-40"
                  >
                    <SendHorizontal className="h-[18px] w-[18px]" />
                  </button>
                </div>
              </div>
            </GlassCard>
          </form>
          <p
            role="status"
            className={cn(
              "mt-4 flex items-center justify-center gap-2 text-sm text-ink transition-opacity",
              status ? "opacity-100" : "opacity-0"
            )}
          >
            <Check className="h-4 w-4 text-coral" />
            {status || " "}
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}
