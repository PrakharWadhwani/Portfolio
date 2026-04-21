"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    navigator.clipboard.writeText("prakharwadhwani04@gmail.com");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        // Adding 'as const' fixes the "Type number[] is not assignable to Easing" error
        ease: [0.16, 1, 0.3, 1] as const 
      } 
    }
  };

  return (
    <footer id="contact" className={styles.footer}>
      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p className={styles.label} variants={itemVariants}>
          // Get in touch
        </motion.p>
        
        <motion.h2 className={styles.title} variants={itemVariants}>
          Let&apos;s build something <span className={styles.accent_text}>special</span>.
        </motion.h2>
        
        <motion.div className={styles.links} variants={itemVariants}>
          <a href="mailto:prakharwadhwani04@gmail.com" className={styles.text_link} onClick={handleEmailClick}>
            Email
          </a>
          <span className={styles.separator}>/</span>
          <a href="https://wa.me/918881102266" target="_blank" rel="noopener noreferrer" className={styles.text_link}>
            WhatsApp
          </a>
          <span className={styles.separator}>/</span>
          <a href="https://www.linkedin.com/in/prakharwadhwani" target="_blank" rel="noopener noreferrer" className={styles.text_link}>
            LinkedIn
          </a>
          <span className={styles.separator}>/</span>
          <a href="https://github.com/PrakharWadhwani" target="_blank" rel="noopener noreferrer" className={styles.text_link}>
            GitHub
          </a>
        </motion.div>
        
        <motion.div className={styles.footer_bottom} variants={itemVariants}>
          <div className={styles.divider}></div>
          <p className={styles.copyright}>© 2026 Prakhar Wadhwani</p>
        </motion.div>
      </motion.div>

      {/* TOAST NOTIFICATION WITH ANIMATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            className={styles.toast}
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
          >
            Email address copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}