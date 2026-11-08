import { about } from "@/data/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.heading}>
        <p className="eyebrow">{about.eyebrow}</p>
        <h2 className={styles.title}>{about.title}</h2>
      </div>
      <p className={styles.text}>{about.text}</p>
    </section>
  );
}
