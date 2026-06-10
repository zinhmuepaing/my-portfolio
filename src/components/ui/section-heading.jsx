// @ts-nocheck
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const wordVariants = {
  hidden: { y: "115%", rotate: 5, opacity: 0 },
  visible: {
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Editorial animated section heading: numbered eyebrow + per-word staggered
 * mask reveal on entry, with a subtle scroll-linked vertical drift while the
 * section traverses the viewport. Title text is rendered verbatim.
 *
 * @type {React.FC<{
 *   title: string,
 *   index?: string,
 *   align?: "left" | "center",
 *   className?: string,
 *   headingClassName?: string,
 *   style?: React.CSSProperties,
 * }>}
 */
export const SectionHeading = ({
  title,
  index,
  align = "left",
  className,
  headingClassName,
  style,
}) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], [36, -36]);

  const words = title.split(" ");
  const centered = align === "center";

  const eyebrow = index ? (
    <div
      className={cn("flex items-center gap-3", centered && "justify-center")}
    >
      <span className="font-mono text-xs tracking-[0.4em] text-gray-400 dark:text-gray-500 sm:text-sm">
        {index}
      </span>
      <span className="h-px w-12 bg-gradient-to-r from-blue-400 to-indigo-500" />
    </div>
  ) : null;

  const headingClasses = cn(
    "text-5xl font-extrabold leading-[0.95] tracking-tighter text-gray-900 dark:text-gray-100 md:text-6xl lg:text-7xl",
    headingClassName
  );

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "mb-10 flex flex-col gap-3",
          centered ? "items-center text-center" : "items-start text-left",
          className
        )}
      >
        {eyebrow}
        <h2 className={headingClasses} style={style}>
          {title}
        </h2>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ y: drift }}
      className={cn(
        "mb-10 flex flex-col gap-3",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow}
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className={cn(
          "flex flex-wrap gap-x-[0.26em]",
          centered && "justify-center",
          headingClasses
        )}
        style={style}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em]"
          >
            <motion.span
              variants={wordVariants}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
    </motion.div>
  );
};
