"use client";

import { motion, Variants } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  const floatingVariants: Variants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className={styles.hero}>
      {/* LEFT SIDE: Text and Buttons */}
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className={styles.label} variants={itemVariants}>
          // Computer Science Undergraduate
        </motion.p>
        
        <motion.h1 className={styles.title} variants={itemVariants}>
          I am <span className={styles.name}>Prakhar Wadhwani.</span>
          <br />Bridging code and design.
        </motion.h1>
        
        <motion.p className={styles.description} variants={itemVariants}>
          A creative developer specializing in front-end development and UI/UX. 
          Currently transforming complex problems into elegant solutions at KIIT.
        </motion.p>
        
        <motion.div className={styles.cta_container} variants={itemVariants}>
          <motion.div 
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <motion.button 
              className={styles.primary_button} 
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>

            <Link href="/about" className={styles.design_button}>
              <motion.span whileHover={{ x: 5 }} style={{ display: 'inline-block' }}>
                View Designs
              </motion.span>
            </Link>
            
            <a 
              href="/prakhar_wadhwani_resume.pdf" 
              download="Prakhar_Wadhwani_Resume.pdf" 
              className={styles.secondary_button}
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: Profile Image (RESTORED) */}
      <motion.div 
        className={styles.image_container}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
      >
        <div className={styles.image_wrapper}>
          <Image 
            src="/profile.png" 
            alt="Prakhar Wadhwani"
            width={400}
            height={480}
            className={styles.profile_pic}
            priority
          />
          <div className={styles.glow_backdrop}></div>
        </div>
      </motion.div>
    </section>
  );
}