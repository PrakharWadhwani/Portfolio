"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <motion.nav 
      className={styles.nav}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={scrollToTop}>
          Prakhar<span> </span>Wadhwani
        </Link>

        {/* Desktop Links: Hidden on Mobile */}
        <div className={styles.nav_links}>
          {[
            { name: "Experience", href: "/#timeline" },
            { name: "Work", href: "/#work" },
            { name: "Archive", href: "/about" },
            { name: "Contact", href: "/#contact" },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <Link href={item.href} className={styles.link}>
                {item.name}
              </Link>
            </motion.div>
          ))}
          
          <button 
            className={styles.toggle_btn}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Trigger: Only visible on Phone */}
        <div className={styles.mobile_only}>
          <MobileNav />
        </div>
      </div>
    </motion.nav>
  );
}