import { testimonials } from "@/data/site";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.header}>
        <p className="eyebrow">{testimonials.eyebrow}</p>
        <h2 className={styles.title}>{testimonials.title}</h2>
      </div>

      <div className={styles.list}>
        {testimonials.items.map((t) => (
          <article key={t.name + t.quote.slice(0, 10)} className={styles.card}>
            <div className={styles.stars} aria-label={`${t.rating} من 5`}>
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} aria-hidden className={i < t.rating ? "" : styles.off}>
                  ★
                </span>
              ))}
            </div>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>
                {t.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.avatar} alt={t.name} />
                ) : (
                  <span aria-hidden>{t.name.replace(/^م\//, "").replace(/[\[\]]/g, "").trim().charAt(0)}</span>
                )}
              </div>
              <div className={styles.meta}>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
