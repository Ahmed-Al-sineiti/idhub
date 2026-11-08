import { identity } from "@/data/site";
import Media from "./Media";
import styles from "./Identity.module.css";

export default function Identity() {
  return (
    <section id="identity" className={styles.band}>
      <div className={styles.media}>
        <Media src={identity.image} alt="WSTUDIO design planning meeting" className={styles.image} />
        <span className={styles.label}>{identity.imageLabel}</span>
      </div>

      <div className={styles.content}>
        <p className="eyebrow">{identity.eyebrow}</p>
        <h2 className={styles.title}>
          <span className={`outline-text ${styles.outline}`} aria-hidden>
            {identity.outline}
          </span>
          {identity.title}
        </h2>
        <p className={styles.text}>{identity.text}</p>
        <ul className={styles.list}>
          {identity.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <span className={styles.divider} aria-hidden />
    </section>
  );
}
