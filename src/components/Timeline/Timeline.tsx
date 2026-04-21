"use client";

import { motion, Variants } from "framer-motion";
import styles from "./Timeline.module.css";

const experiences = [
  {
    year: "2024",
    company: "L&T Technology Services",
    role: "Engineering Intern",
    desc: "Worked on industrial solutions and technical workflow optimization."
  },
  {
    year: "2023",
    company: "Vidhyashala",
    role: "Web Dev Intern",
    desc: "Built responsive web pages and interactive UI components."
  }
];

export default function Timeline() {
  // Animation for the container to stagger the items
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Time between each item appearing
      }
    }
  };

  // Animation for individual items
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="timeline" className={styles.section}>
      <motion.p 
        className={styles.label}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        // Experience
      </motion.p>

      <motion.div 
        className={styles.timeline}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Triggers slightly before it enters view
      >
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className={styles.item}
            variants={itemVariants}
          >
            <span className={styles.year}>{exp.year}</span>
            <div className={styles.content}>
              <h3>{exp.company}</h3>
              <h4>{exp.role}</h4>
              <p>{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}