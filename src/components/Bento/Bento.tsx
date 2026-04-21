"use client";

import { motion } from "framer-motion";
import styles from "./Bento.module.css";

export default function Bento() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <motion.section 
      id="about" 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* --- FIRST ROW: EDUCATION & DESIGN --- */}
      <motion.div 
        className={`${styles.card} ${styles.large}`}
        variants={cardVariants}
        whileHover={{ y: -8 }}
      >
        <p className={styles.card_label}>Education</p>
        <h3 className={styles.card_title}>KIIT &apos;26</h3>
        <p className={styles.card_text}>
          Pursuing B.Tech in Computer Science. Focused on building scalable 
          web apps and high-fidelity user interfaces.
        </p>
      </motion.div>

      <motion.div 
        className={styles.card}
        variants={cardVariants}
        whileHover={{ y: -8 }}
      >
        <p className={styles.card_label}>Design</p>
        <h3 className={styles.card_title}>Figma Pro</h3>
        <p className={styles.card_text}>UI/UX & Graphic Design Specialist.</p>
      </motion.div>

      {/* --- SECOND ROW: PROJECTS & STACK --- */}
      {/* This small card fills the left gap of the second row */}
      <motion.div 
        className={styles.card}
        variants={cardVariants}
        whileHover={{ y: -8 }}
      >
        <p className={styles.card_label}>Stack</p>
        <h3 className={styles.card_title}>Full Stack</h3>
        <p className={styles.card_text}>Crafting with Next.js, TypeScript & Node.</p>
      </motion.div>

      {/* This large card fills the right filling the rectangle */}
      <motion.div 
        className={`${styles.card} ${styles.large}`}
        variants={cardVariants}
        whileHover={{ y: -8 }}
      >
        <p className={styles.card_label}>Core Projects</p>
        <h3 className={styles.card_title}>Auraaz & Watch Party</h3>
        <p className={styles.card_text}>
          Architecting Auraaz with Next.js 14 for high-performance interactions. 
          Developed Watch Party using Socket.io to eliminate synchronization lag in real-time streaming.
        </p>
      </motion.div>
    </motion.section>
  );
}