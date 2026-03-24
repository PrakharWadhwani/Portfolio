import styles from "./Bento.module.css";

export default function Bento() {
  return (
    <section id="about" className={styles.container}>
      <div className={`${styles.card} ${styles.large}`}>
        <p className={styles.card_label}>Education</p>
        <h3 className={styles.card_title}>KIIT &apos;26</h3>
        <p className={styles.card_text}>
          Pursuing B.Tech in Computer Science. Focused on building scalable 
          web apps and high-fidelity user interfaces.
        </p>
      </div>
      <div className={styles.card}>
        <p className={styles.card_label}>Design</p>
        <h3 className={styles.card_title}>Figma Pro</h3>
        <p className={styles.card_text}>UI/UX & Graphic Design Specialist.</p>
      </div>
    </section>
  );
}