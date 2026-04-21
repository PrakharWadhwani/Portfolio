"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.css";
import { ExternalLink, Lock, LayoutGrid, X } from "lucide-react";

const projectData = [
  {
    id: "auraaz",
    category: "Featured Development",
    title: "Auraaz",
    description: "A next-generation digital experience platform. Focused on high-performance interactions and scalable core architecture.",
    tags: ["Next.js 14", "TypeScript", "Tailwind"],
    link: "https://auraaz.vercel.app",
    status: "Live"
  },
  {
    id: "watch-party",
    category: "Full Stack",
    title: "Watch Party App",
    description: "Real-time synchronized video streaming platform with integrated group chat. Solves the synchronization lag in remote viewing.",
    tags: ["Socket.io", "Node.js", "Express"],
    link: "https://watch-party-app-d1p1.vercel.app/",
    status: "Live"
  },
  {
    id: "kraya",
    category: "Creative Direction",
    title: "Kraya & Kuber Identity",
    description: "Developed comprehensive visual branding and marketing assets for the premier Marketing & Finance society at KIIT.",
    tags: ["Brand Design", "Visuals", "Marketing"],
    isDropdown: true,
    dropdownItems: [
      { label: "Happy New Year 2025", url: "https://www.instagram.com/p/DS8GChME7nH/" },
      { label: "Eid Mubarak", url: "https://www.instagram.com/p/DH2lp8exWwK/" },
      { label: "Lal Bahadur Shastri Jayanti", url: "https://www.instagram.com/p/DPRw2RcE4Js/" }
    ],
    status: "Archived" 
  },
  {
    id: "private-portfolio",
    category: "Bespoke UI/UX",
    title: "Private Portfolio Architecture",
    description: "A luxury-focused personal brand identity and digital portfolio.",
    tags: ["Next.js", "UX Architecture", "Typography"],
    link: "#",
    status: "Private"
  }
];

export default function Projects() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <section id="work" className={styles.section}>
      <motion.p 
        className={styles.label}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        // Works
      </motion.p>
      
      <div className={styles.grid}>
        {projectData.map((project, index) => (
          <motion.div 
            key={project.id} 
            className={styles.card_wrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={styles.float_layer}
            >
              {project.isDropdown ? (
                <div 
                  className={`${styles.card} ${styles.dropdown_trigger}`}
                  onClick={() => toggleDropdown(project.id)}
                >
                  <ProjectInfo project={project} />
                  
                  {/* OVERLAY CONTENT INSIDE THE CARD */}
                  <AnimatePresence>
                    {openDropdown === project.id && (
                      <motion.div 
                        className={styles.overlay}
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                      >
                        <div className={styles.overlay_header}>
                          <span>View Assets</span>
                          <X size={20} />
                        </div>
                        <div className={styles.dropdown_list}>
                          {project.dropdownItems?.map((item, i) => (
                            <a 
                              href={item.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              key={i} 
                              className={styles.dropdown_link}
                              onClick={(e) => e.stopPropagation()} 
                            >
                              <LayoutGrid size={18} />
                              <span>{item.label}</span>
                              <ExternalLink size={14} />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a 
                  href={project.link} 
                  target={project.status === "Private" ? "_self" : "_blank"}
                  className={`${styles.card} ${project.status === "Private" ? styles.disabled : ""}`}
                >
                  <ProjectInfo project={project} />
                  <div className={styles.arrow}>
                    {project.status === "Private" ? <Lock size={20} /> : <ExternalLink size={24} strokeWidth={1.2} />}
                  </div>
                </a>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectInfo({ project }: { project: any }) {
  return (
    <div className={styles.info}>
      <div className={styles.meta}>
        <span className={styles.category}>{project.category}</span>
        {project.status === "Live" && <span className={styles.badge}>Live</span>}
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map((tag: string) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}