// src/app/page.tsx
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Bento from "../components/Bento/Bento";
import Skills from "../components/Skills/Skills";
import Timeline from "../components/Timeline/Timeline";
import Projects from "../components/Projects/Projects";
import styles from "./page.module.css";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <Bento />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
    </>
  );
}