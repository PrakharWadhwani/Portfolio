"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import { ExternalLink, Lock, ChevronDown, LayoutGrid } from "lucide-react";

const projectData = [
  {
    id: "auraaz",
    category: "Featured Development",
    title: "Auraaz",
    description: "A next-generation digital experience platform. Focused on high-performance interactions and scalable core architecture.",
    tags: ["Next.js 14", "TypeScript", "Tailwind"],
    link: "https://github.com/PrakharWadhwani/Auraaz",
    status: "In Progress"
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
    isDropdown: true, // Tells our code this is an accordion, not a normal link
    dropdownItems: [
      { label: "Happy New Year 2025", url: "https://www.instagram.com/p/DS8GChME7nH/?igsh=MXQzNmQzYmw1Nmt2ZA==" },
      { label: "Eid Mubarak", url: "https://www.instagram.com/p/DH2lp8exWwK/?igsh=OHdhOTFjZHF2Y2ps" },
      { label: "Lal Bahadur Shastri", url: "https://www.instagram.com/p/DPRw2RcE4Js/?igsh=MW9pYmdxbTkwaGZpMA==" }
    ],
    status: "Archived" 
  },
  {
    id: "private-portfolio",
    category: "Bespoke UI/UX",
    title: "Private Portfolio Architecture",
    description: "A luxury-focused personal brand identity and digital portfolio. Engineered with refined typography and an editorial layout.",
    tags: ["Next.js", "UX Architecture", "Typography"],
    link: "#",
    status: "Private"
  }
];

export default function Projects() {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <section id="work" className={styles.section}>
      <p className={styles.label}>// Selected Works</p>
      <div className={styles.list}>
        {projectData.map((project) => (
          <div key={project.id} className={styles.card_wrapper}>
            
            {/* If it's a dropdown, render a div we can click. If not, render a standard link */}
            {project.isDropdown ? (
              <div 
                className={`${styles.card} ${styles.dropdown_card} ${openDropdown === project.id ? styles.card_open : ''}`}
                onClick={() => toggleDropdown(project.id)}
              >
                <div className={styles.info}>
                  <div className={styles.meta}>
                     <span className={styles.category}>{project.category}</span>
                  </div>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.desc}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.arrow}>
                  <ChevronDown size={28} strokeWidth={1.2} className={openDropdown === project.id ? styles.rotated : ''} />
                </div>
              </div>
            ) : (
              <a 
                href={project.link} 
                target={project.status === "Private" ? "_self" : "_blank"}
                className={`${styles.card} ${project.status === "Private" ? styles.disabled : ""}`}
              >
                <div className={styles.info}>
                  <div className={styles.meta}>
                     <span className={styles.category}>{project.category}</span>
                     {project.status === "In Progress" && <span className={styles.badge}>Live Soon</span>}
                  </div>
                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.desc}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.arrow}>
                  {project.status === "Private" ? <Lock size={20} /> : <ExternalLink size={28} strokeWidth={1.2} />}
                </div>
              </a>
            )}

            {/* The Dropdown Content */}
            {project.isDropdown && openDropdown === project.id && (
              <div className={styles.dropdown_content}>
                {project.dropdownItems?.map((item, index) => (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" key={index} className={styles.dropdown_link}>
                    <LayoutGrid size={18} /> {/* <--- The sleek IG grid look */}
                    <span>{item.label}</span>
                    <ExternalLink size={14} className={styles.external_icon} />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}