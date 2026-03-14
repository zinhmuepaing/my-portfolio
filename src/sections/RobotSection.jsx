import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";

export default function RobotSection() {
  return (
    <section className="min-h-screen flex items-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row h-full items-center">
          {/* Left content — Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 p-8 relative z-10 flex flex-col justify-center"
          >
            <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed max-w-lg italic">
              &ldquo;Failure never stopped my journey. It sharpened my thinking,
              strengthened my discipline, and pushed me to become a better
              version of myself.&rdquo;
            </p>
          </motion.div>

          {/* Right content — 3D Robot */}
          <div className="flex-1 relative h-[400px] lg:h-[500px] w-full">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
