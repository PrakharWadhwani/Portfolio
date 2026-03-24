import styles from "./Skills.module.css";

// Elevated stack highlighting modern web, backend, and creative design
const skills = [
  "TypeScript",
  "Next.js 14",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express / Socket.io",
  "SQL",
  "Java",
  "Figma",
  "UI/UX Architecture",
  "Brand Strategy"
];

export default function Skills() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>// The Arsenal</p>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill} className={styles.item}>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}