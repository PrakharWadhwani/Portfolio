"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Smooth scroll to top if already on the homepage
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!mounted) return null

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* Added the onClick handler here */}
        <Link href="/" className={styles.logo} onClick={scrollToTop}>
          Prakhar<span>.</span>Wadhwani
        </Link>

        <div className={styles.nav_links}>
          <Link href="/#work" className={styles.link}>Work</Link>
          <Link href="/about" className={styles.link}>Archive</Link>
          <Link href="/#contact" className={styles.link}>Contact</Link>
          
          <button 
            className={styles.toggle_btn}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  )
}