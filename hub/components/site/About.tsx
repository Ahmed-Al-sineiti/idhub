import type { SiteData } from "@/lib/site";
import styles from "./About.module.css";

export default function About({ about }: { about: SiteData["about"] }) {
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
