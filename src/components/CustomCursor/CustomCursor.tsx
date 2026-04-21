"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

return (
    <motion.div
      className={styles.cursor}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      // Explicitly set initial to an RGBA value to avoid the "transparent" jump
      initial={{ 
        backgroundColor: "rgba(212, 175, 55, 1)", 
        scale: 1 
      }}
      animate={{
        scale: isHovered ? 3 : 1,
        // Using hex for the solid state and rgba for the "clear" state
        backgroundColor: isHovered 
          ? "rgba(212, 175, 55, 0)" 
          : "rgba(212, 175, 55, 1)",
        border: "1px solid var(--primary-accent)",
      }}
      transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
    />
  );
}