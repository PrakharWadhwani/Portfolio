import styles from "./Timeline.module.css";

const experiences = [
  {
    year: "2024",
    company: "L&T Technology Services",
    role: "Engineering Intern",
    desc: "Worked on industrial solutions and technical workflow optimization."
  },
  {
    year: "2023",
    company: "Vidhyashala",
    role: "Web Dev Intern",
    desc: "Built responsive web pages and interactive UI components."
  }
];

export default function Timeline() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>// Experience</p>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.year}>{exp.year}</span>
            <div className={styles.content}>
              <h3>{exp.company}</h3>
              <h4>{exp.role}</h4>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}