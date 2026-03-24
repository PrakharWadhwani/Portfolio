// src/components/Contact/Contact.tsx
"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    // 1. Copy to clipboard
    navigator.clipboard.writeText("prakharwadhwani04@gmail.com");

    // 2. Show the "Copied" message
    setShowToast(true);

    // 3. Hide it after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.label}>// Get in touch</p>
        <h2 className={styles.title}>
          Let&apos;s build something <span className={styles.accent_text}>special</span>.
        </h2>
        
        <div className={styles.links}>
          {/* We keep the href="mailto:..." so it still tries to open the app, 
              but our onClick handles the copying and the notification */}
          <a 
            href="mailto:prakharwadhwani04@gmail.com" 
            className={styles.text_link}
            onClick={handleEmailClick}
          >
            Email
          </a>
          <span className={styles.separator}>/</span>
          <a 
            href="https://wa.me/918881102266" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.text_link}
          >
            WhatsApp
          </a>
          <span className={styles.separator}>/</span>
          <a 
            href="https://www.linkedin.com/in/prakharwadhwani" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.text_link}
          >
            LinkedIn
          </a>
          <span className={styles.separator}>/</span>
          <a 
            href="https://github.com/PrakharWadhwani" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.text_link}
          >
            GitHub
          </a>
        </div>
        
        <div className={styles.divider}></div>
        <p className={styles.copyright}>© 2026 Prakhar Wadhwani</p>
      </div>

      {/* TOAST NOTIFICATION */}
      <div className={`${styles.toast} ${showToast ? styles.show : ""}`}>
        Email address copied to clipboard!
      </div>
    </footer>
  );
}