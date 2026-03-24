"use client";
import { motion } from "framer-motion";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the element is visible
      transition={{ 
        duration: 0.5, 
        ease: "easeOut" // Standard easing is much lighter on the CPU
      }}
      style={{ willChange: "transform, opacity" }} // Tells the browser to use the GPU
    >
      {children}
    </motion.div>
  );
}