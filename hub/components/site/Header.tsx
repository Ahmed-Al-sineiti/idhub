"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { SiteData } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header({ site }: { site: SiteData }) {
  const { brand, nav } = site;
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    if (!open) return;

    const focusable = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    // إبقاء التركيز داخل القائمة المفتوحة حتى لا ينتقل مستخدم الكيبورد إلى محتوى خلفها.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const items = focusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    const first = focusable()[0];
    first?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
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

      <div ref={menuRef} id="site-menu" className={`${styles.menu} ${open ? styles.menuOpen : ""}`} aria-hidden={!open}>
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
