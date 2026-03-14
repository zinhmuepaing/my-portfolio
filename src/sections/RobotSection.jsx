import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export default function RobotSection() {
  const { resolvedTheme } = useTheme();
  const [spotlightColor, setSpotlightColor] = useState("black");

  useEffect(() => {
    setSpotlightColor(resolvedTheme === "dark" ? "white" : "black");
  }, [resolvedTheme]);

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto w-full">
        <div className="rounded-3xl border border-white/40 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-xl shadow-lg overflow-hidden relative">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill={spotlightColor}
          />

          <div className="flex flex-col lg:flex-row h-full items-center">
            {/* Left content — Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 p-10 lg:p-14 relative z-10 flex flex-col justify-center"
            >
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 dark:text-gray-100 leading-relaxed max-w-lg italic">
                &ldquo;Failure never stopped my journey. It sharpened my thinking,
                strengthened my discipline, and pushed me to become a better
                version of myself.&rdquo;
              </p>
              <p className="mt-6 text-base font-semibold text-gray-600 dark:text-gray-400 tracking-wide">
                &mdash; Zin Hmue Paing
              </p>
            </motion.div>

            {/* Right content — 3D Robot */}
            <div className="flex-1 relative h-[450px] lg:h-[600px] w-full">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
