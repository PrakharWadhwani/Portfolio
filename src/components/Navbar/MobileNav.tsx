/* src/components/Navbar/MobileNav.tsx */
"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import styles from "./MobileNav.module.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuVariants: Variants = {
    closed: { 
      x: "100%", 
      transition: { 
        ease: [0.16, 1, 0.3, 1] as any,
        duration: 0.6 
      } 
    },
    open: { 
      x: 0, 
      transition: { 
        ease: [0.16, 1, 0.3, 1] as any, 
        duration: 0.6 
      } 
    }
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.3 + i * 0.1, 
        ease: "easeOut" as const
      }
    })
  };

  const navLinks = [
    { name: "Experience", href: "/#timeline" },
    { name: "Work", href: "/#work" },
    { name: "Archive", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <div className={styles.mobile_nav_wrapper}>
      <button className={styles.hamburger} onClick={() => setIsOpen(true)}>
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div 
              className={styles.sidebar}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className={styles.sidebar_header}>
                <button 
                  className={styles.theme_toggle}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button className={styles.close_btn} onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <nav className={styles.links_container}>
                {navLinks.map((link, i) => (
                  <motion.div 
                    key={link.name} 
                    custom={i} 
                    variants={linkVariants}
                  >
                    <Link 
                      href={link.href} 
                      className={styles.link}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className={styles.sidebar_footer}>
                <p className={styles.label}>// Digital Portfolio 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}