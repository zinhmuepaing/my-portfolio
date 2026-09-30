// @ts-nocheck
import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal-on-scroll wrapper: fades, lifts and un-blurs children once.
 * @type {import("react").FC<any>}
 */
export const ScrollAnimation = ({
  children,
  className,
  delay = 0,
  as = "div",
  viewport = { once: true, amount: 0.25 },
  ...props
}) => {
  const reduce = useReducedMotion();
  const Comp = motion[as] ?? motion.div;
  if (reduce) {
    const Static = as;
    return <Static className={className} {...props}>{children}</Static>;
  }
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={viewport}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Comp>
  );
};
