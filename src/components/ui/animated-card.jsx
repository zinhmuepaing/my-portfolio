// @ts-nocheck
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * @type {React.FC<{
 *   cards: Array<{ quote: string, name: string, designation: string, src: string }>,
 *   autoplay?: boolean,
 *   className?: string
 * }>}
 */
export const AnimatedCard = ({
  cards,
  autoplay = false,
  className,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className={cn("max-w-4xl mx-auto py-8", className)}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Stack */}
        <div>
          <div className="relative h-80 md:h-96 w-full">
            <AnimatePresence>
              {cards.map((card, index) => (
                <motion.div
                  key={card.src + index}
                  initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 999 : cards.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={card.src}
                    alt={card.name}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-lg"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {cards[active].name}
            </h3>
            <p className="text-sm text-indigo-600 font-medium mb-1">
              {cards[active].organization || ""}
            </p>
            <p className="text-sm text-gray-400 mb-6">
              {cards[active].designation}
            </p>
            <motion.p className="text-base text-gray-600 leading-relaxed">
              {cards[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-10">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-gray-700 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
            <div className="flex items-center gap-2 ml-2">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    isActive(i) ? "bg-indigo-500 w-5" : "bg-gray-300"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
