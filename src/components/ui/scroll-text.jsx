// @ts-nocheck
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const OFFSET = 24;
const fromDirection = (direction) => ({
  up: { y: OFFSET },
  down: { y: -OFFSET },
  left: { x: OFFSET },
  right: { x: -OFFSET },
}[direction] ?? { y: OFFSET });

/**
 * Text that blurs/slides in as it scrolls into view.
 *  - default: animates word by word
 *  - letterAnime: animates letter by letter
 *  - lineAnime: masked "rise" reveal per word (headline style)
 * `variants` overrides the hidden/visible states.
 */
export default function TextAnimation({
  text,
  as: Tag = "h2",
  className,
  direction = "up",
  letterAnime = false,
  lineAnime = false,
  variants,
  once = true,
  delay = 0,
}) {
  const reduce = useReducedMotion();
  if (reduce) return <Tag className={className}>{text}</Tag>;

  const item = variants ?? (lineAnime
    ? {
        hidden: { y: "110%" },
        visible: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }
    : {
        hidden: { filter: "blur(10px)", opacity: 0, ...fromDirection(direction) },
        visible: {
          filter: "blur(0px)",
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: letterAnime ? 0.025 : 0.07, delayChildren: delay } },
  };

  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden="true"
        className="inline"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: 0.6 }}
      >
        {words.map((word, wi) => (
          <span
            key={wi}
            className={cn("inline-block whitespace-pre", lineAnime && "overflow-hidden align-bottom")}
          >
            {letterAnime ? (
              [...word].map((ch, ci) => (
                <motion.span key={ci} variants={item} className="inline-block">
                  {ch}
                </motion.span>
              ))
            ) : (
              <motion.span variants={item} className="inline-block">
                {word}
              </motion.span>
            )}
            {wi < words.length - 1 ? " " : ""}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/**
 * Paragraph whose words darken from muted to ink as it scrolls through the
 * viewport (scroll-linked). `accent` is a phrase, or a list of phrases (exact
 * text), tinted coral at their first occurrence.
 */
export function ScrollHighlightText({ text, className, accent = [] }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  const tinted = new Set();
  for (const phrase of [].concat(accent)) {
    const at = phrase ? text.indexOf(phrase) : -1;
    if (at < 0) continue;
    const from = text.slice(0, at).split(" ").length - 1;
    for (let i = from; i < from + phrase.split(" ").length; i++) tinted.add(i);
  }

  if (reduce) return <p className={className}>{text}</p>;
  return (
    <p ref={ref} className={cn("flex flex-wrap", className)} aria-label={text}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} accent={tinted.has(i)}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({ children, progress, range, accent }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <span aria-hidden="true" className={cn("mr-[0.28em]", accent && "text-coral")}>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
