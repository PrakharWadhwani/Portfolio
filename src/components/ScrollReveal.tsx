"use client";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Added to allow staggered entrances for grids
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} // Reduced to 0.1 for faster triggering on smaller screens
      transition={{ 
        duration: 0.8, // Slightly longer duration feels more premium
        delay: delay,
        ease: [0.16, 1, 0.3, 1] // High-end cubic-bezier (no extra CPU cost)
      }}
      style={{ willChange: "transform, opacity" }} // Keeps hardware acceleration
    >
      {children}
    </motion.div>
  );
}