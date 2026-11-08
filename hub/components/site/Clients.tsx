import type { SiteData } from "@/lib/site";
import styles from "./Clients.module.css";

export default function Clients({ clients }: { clients: SiteData["clients"] }) {
  if (clients.logos.length === 0) return null;
  return (
    <section id="clients" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{clients.title}</h2>
        <p className={`eyebrow ${styles.eyebrow}`}>{clients.eyebrow}</p>
      </div>

      <div className={styles.grid}>
        {clients.logos.map((logo) => (
          <div key={logo.name} className={styles.card}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt={logo.name} width={235} height={235} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
