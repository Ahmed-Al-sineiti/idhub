import { siteList } from "@/sites";
import styles from "./page.module.css";

export default function Home() {
  const sites = siteList;

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Corvus</p>
        <h1 className={styles.title}>مواقع العملاء</h1>
        <p className={styles.sub}>
          {sites.length} {sites.length === 1 ? "موقع" : "مواقع"} متاحين على الروابط دي.
        </p>
      </header>

      {sites.length === 0 ? (
        <p className={styles.empty}>
          مفيش مواقع. ضيف موقع جديد في فولدر <code>sites</code>.
        </p>
      ) : (
        <div className={styles.grid}>
          {sites.map(({ slug, site: s }) => {
            const url = `/${slug}`;
            return (
              <a key={slug} href={url} className={styles.card}>
                <div className={styles.cover} style={{ background: s.theme.dark }}>
                  <span className={styles.glow} style={{ background: s.theme.accent }} aria-hidden />
                  {s.brand.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={s.brand.logo} alt={s.brand.name} className={styles.logo} />
                  ) : null}
                  <span className={styles.swatches} aria-hidden>
                    <i style={{ background: s.theme.accent }} />
                    <i style={{ background: s.theme.dark }} />
                    <i style={{ background: s.theme.light }} />
                  </span>
                </div>
                <div className={styles.body}>
                  <h2 className={styles.name}>{s.brand.name}</h2>
                  {s.brand.title ? <p className={styles.desc}>{s.brand.title}</p> : null}
                  <div className={styles.meta}>
                    <code>{slug}</code>
                    <span className={styles.open}>
                      {url}
                      <span aria-hidden>←</span>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}

      <footer className={styles.howto}>
        <h2>إضافة موقع جديد</h2>
        <ol>
          <li>
            انسخ فولدر <code>sites/almousa</code> وسمّيه باسم العميل، مثلاً <code>sites/noura</code>.
          </li>
          <li>
            في <code>sites/noura/site.ts</code> غيّر <code>brand</code> و<code>theme</code> وباقي المحتوى. اسم الفولدر
            <code>noura</code> هو اللي هيبقى الـ id في الرابط.
          </li>
          <li>
            حط اللوجو والصور في <code>public/sites/noura</code> واستخدم المسارات دي في <code>site.ts</code>.
          </li>
          <li>
            شغّل <code>npm run dev</code>. الموقع هيتسجل تلقائيًا ويظهر هنا على <code>/&lt;slug&gt;</code>.
          </li>
        </ol>
      </footer>
    </main>
  );
}
