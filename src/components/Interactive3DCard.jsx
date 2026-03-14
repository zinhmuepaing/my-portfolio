import { useState, useRef } from "react";
// @ts-ignore
import { motion } from "framer-motion";

export default function Interactive3DCard({ frontImage, backImage }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Calculate rotation (max 15 degrees)
        const rotateYValue = (mouseX / (rect.width / 2)) * 15;
        const rotateXValue = -(mouseY / (rect.height / 2)) * 15;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <div
            ref={cardRef}
            className="relative w-full max-w-[320px] mx-auto cursor-pointer"
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <motion.div
                className="relative w-full aspect-[2.5/4]"
                style={{
                    transformStyle: "preserve-3d",
                }}
                animate={{
                    rotateX: rotateX,
                    rotateY: isFlipped ? 180 + rotateY : rotateY,
                }}
                transition={{
                    rotateX: { duration: 0.1, ease: "linear" },
                    rotateY: { duration: 0.6, ease: "easeOut" },
                }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                    }}
                >
                    <img
                        src={frontImage}
                        alt="ID Card Front"
                        className="w-full h-full object-contain"
                    />
                    {/* Glossy Effect */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `linear-gradient(
                ${105 + rotateY}deg,
                transparent 40%,
                rgba(255, 255, 255, 0.2) 45%,
                rgba(255, 255, 255, 0.3) 50%,
                rgba(255, 255, 255, 0.2) 55%,
                transparent 60%
              )`,
                        }}
                    />
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <img
                        src={backImage}
                        alt="ID Card Back"
                        className="w-full h-full object-contain"
                    />
                    {/* Glossy Effect */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `linear-gradient(
                ${105 - rotateY}deg,
                transparent 40%,
                rgba(255, 255, 255, 0.2) 45%,
                rgba(255, 255, 255, 0.3) 50%,
                rgba(255, 255, 255, 0.2) 55%,
                transparent 60%
              )`,
                        }}
                    />
                </div>
            </motion.div>

            {/* Hint Text */}
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Click to flip • Move mouse to tilt
            </p>
        </div>
    );
}