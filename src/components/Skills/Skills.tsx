"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skills = [
  "TypeScript", "Next.js 14", "React", "Tailwind CSS", 
  "Node.js", "Express", "Socket.io", "SQL", 
  "Java", "Figma", "UI/UX Architecture", "Brand Strategy"
];

export default function Skills() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>// The Skills</p>
      <div className={styles.billboard_container}>
        <motion.div 
          className={styles.ticker}
          animate={{
            x: [0, -1200], // Increased slightly to ensure seamless loop with more items
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, 
              ease: "linear",
            },
          }}
        >
          {/* Render twice for seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className={styles.item}>
              {/* Refined Bullet Point */}
              <span className={styles.bullet}></span>
              {skill}
            </div>
          ))}
        </motion.div>

        {/* The side fades */}
        <div className={styles.overlay_left}></div>
        <div className={styles.overlay_right}></div>
      </div>
    </section>
  );
}