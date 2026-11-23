// @ts-nocheck
import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal-on-scroll wrapper: fades and lifts children once. No blur filter,
 * since blurring large shadowed cards is expensive to paint.
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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.3, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Comp>
  );
};
