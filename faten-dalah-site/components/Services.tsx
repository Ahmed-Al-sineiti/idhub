import {
  Armchair,
  ClipboardCheck,
  DraftingCompass,
  Hammer,
  Lamp,
  Layers,
  PaintRoller,
  Palette,
  Ruler,
  Sofa,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/site";
import styles from "./Services.module.css";

// اكتب اسم الأيكونة في data/site.ts (icon) من الأسماء دي
const icons: Record<string, LucideIcon> = {
  sofa: Sofa,
  layers: Layers,
  palette: Palette,
  armchair: Armchair,
  lamp: Lamp,
  "paint-roller": PaintRoller,
  ruler: Ruler,
  compass: DraftingCompass,
  hammer: Hammer,
  "clipboard-check": ClipboardCheck,
};

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className={`outline-text ${styles.outline}`} aria-hidden>
            {services.outline}
          </span>
          {services.title}
        </h2>
        <p className={`eyebrow ${styles.eyebrow}`}>{services.eyebrow}</p>
      </div>

      <div className={styles.grid}>
        {services.items.map((item, i) => {
          const Icon = icons[item.icon] ?? Sofa;
          return (
            <article key={item.key} className={`${styles.card} ${i === 1 ? styles.middle : ""}`}>
              <div className={styles.icon}>
                <Icon size={80} strokeWidth={1.5} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
