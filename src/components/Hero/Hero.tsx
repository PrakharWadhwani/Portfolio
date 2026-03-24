// src/components/Hero/Hero.tsx
"use client";

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

  return (
    <section className={styles.hero}>
      {/* LEFT SIDE: Text and Buttons */}
      <div className={styles.content}>
        <p className={styles.label}>// Computer Science Undergraduate</p>
        
        {/* UPDATED TITLE TEXT HERE */}
        <h1 className={styles.title}>
          I am 
          <span className={styles.name}>Prakhar Wadhwani.</span>
          Bridging code and design.
        </h1>
        
        <p className={styles.description}>
          A creative developer specializing in front-end development and UI/UX. 
          Currently transforming complex problems into elegant solutions at KIIT.
        </p>
        
        <div className={styles.cta_container}>
          <button 
            className={styles.primary_button} 
            onClick={scrollToProjects}
          >
            View Projects
          </button>

          <Link href="/about" className={styles.design_button}>
            View Designs
          </Link>
          
          <a 
            href="/prakhar_wadhwani_resume.pdf" 
            download="Prakhar_Wadhwani_Resume.pdf" 
            className={styles.secondary_button}
          >
            Download CV
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: Profile Image */}
      <div className={styles.image_container}>
        <div className={styles.image_wrapper}>
          <Image 
            src="/profile.png"  /* Make sure your image in the public folder is named profile.jpg (or .png if you prefer) */
            alt="Prakhar Wadhwani"
            width={400}
            height={480}
            className={styles.profile_pic}
            priority
          />
          {/* Subtle gold accent behind the image */}
          <div className={styles.glow_backdrop}></div>
        </div>
      </div>
    </section>
  );
}