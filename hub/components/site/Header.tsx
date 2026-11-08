"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { SiteData } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header({ site }: { site: SiteData }) {
  const { brand, nav } = site;
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // الهيدر بيختفي وانت نازل ويرجع وانت طالع
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 120);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`${styles.header} ${hidden && !open ? styles.hidden : ""}`}>
        <a
          href="#top"
          className={styles.logo}
          aria-label={brand.name}
          style={{ width: brand.logoWidth, height: brand.logoHeight }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={brand.logo} alt={brand.name} width={brand.logoWidth} height={brand.logoHeight} />
        </a>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
        >
          <span className={styles.menuText}>القائمة</span>
          <i className={styles.burger} aria-hidden />
        </button>
      </header>

      <div id="site-menu" className={`${styles.menu} ${open ? styles.menuOpen : ""}`} aria-hidden={!open}>
        <button type="button" className={styles.close} onClick={() => setOpen(false)} aria-label="إغلاق القائمة">
          <X size={26} strokeWidth={1.5} />
        </button>
        <nav className={styles.nav}>
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
            >
              <span className={styles.navIndex}>{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
