"use client";

import { useCallback, useEffect, useState } from "react";
import type { Project } from "@/lib/site";
import Media from "./Media";
import styles from "./Hero.module.css";

const DURATION = 6000;

export default function Hero({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const total = projects.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + total) % total);
      setCycle((c) => c + 1);
    },
    [total],
  );

  // تقليب تلقائي، والخط بيتملي مع الوقت
  useEffect(() => {
    if (total < 2) return;
    const t = window.setTimeout(() => go(1), DURATION);
    return () => window.clearTimeout(t);
  }, [index, cycle, go, total]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="top" className={styles.hero} aria-roledescription="carousel" aria-label="مشاريع مختارة">
      {projects.map((p, i) => (
        <div key={p.slug} className={`${styles.slide} ${i === index ? styles.active : ""}`} aria-hidden={i !== index}>
          <Media src={p.image} alt={p.name} className={styles.slideMedia} />
        </div>
      ))}
      <div className={styles.shade} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <div className={styles.content} key={index}>
        <p className="eyebrow">{projects[index].category}</p>
        <h1 className={styles.title}>{projects[index].name}</h1>
        <div className={styles.actions}>
          <a href={projects[index].href} className="ring-link">
            عرض
          </a>
        </div>
      </div>

      <div className={styles.rail}>
        <div className={styles.controls}>
          <button type="button" className={styles.control} onClick={() => go(1)}>
            التالي
          </button>
          <button type="button" className={styles.control} onClick={() => go(-1)}>
            السابق
          </button>
        </div>
        <div className={styles.progress} aria-hidden>
          <span key={`${index}-${cycle}`} style={{ animationDuration: `${DURATION}ms` }} />
        </div>
        <div className={styles.count} aria-live="polite">
          <span className={styles.total}>
            {pad(total)}
            <span>/ </span>
          </span>
          <strong className={styles.current}>{pad(index + 1)}</strong>
        </div>
      </div>
    </section>
  );
}
