import { readFileSync } from "node:fs";
import { join } from "node:path";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

type Site = {
  folder: string;
  port: number;
  name: string;
  title: string;
  logo: string;
  accent: string;
  dark: string;
  light: string;
};

function loadSites(): Site[] {
  try {
    return JSON.parse(readFileSync(join(process.cwd(), "sites.generated.json"), "utf8"));
  } catch {
    return [];
  }
}

export default function Home() {
  const sites = loadSites();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Corvus</p>
        <h1 className={styles.title}>مواقع العملاء</h1>
        <p className={styles.sub}>
          {sites.length} {sites.length === 1 ? "موقع" : "مواقع"} شغالين دلوقتي. كل كارت بيفتح الموقع بتاعه.
        </p>
      </header>

      {sites.length === 0 ? (
        <p className={styles.empty}>
          مفيش مواقع. شغّل <code>npm run dev</code> من الفولدر الرئيسي.
        </p>
      ) : (
        <div className={styles.grid}>
          {sites.map((s) => {
            const url = `http://localhost:${s.port}`;
            return (
              <a key={s.folder} href={url} target="_blank" rel="noreferrer" className={styles.card}>
                <div className={styles.cover} style={{ background: s.dark }}>
                  <span className={styles.glow} style={{ background: s.accent }} aria-hidden />
                  {s.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={`${url}${s.logo}`} alt={s.name} className={styles.logo} />
                  ) : null}
                  <span className={styles.swatches} aria-hidden>
                    <i style={{ background: s.accent }} />
                    <i style={{ background: s.dark }} />
                    <i style={{ background: s.light }} />
                  </span>
                </div>
                <div className={styles.body}>
                  <h2 className={styles.name}>{s.name}</h2>
                  {s.title ? <p className={styles.desc}>{s.title}</p> : null}
                  <div className={styles.meta}>
                    <code>{s.folder}</code>
                    <span className={styles.open}>
                      localhost:{s.port}
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
        <h2>إضافة عميل جديد</h2>
        <ol>
          <li>
            انسخ فولدر <code>wstudio-site</code> وسمّيه باسم العميل، ولازم الاسم يخلص بـ <code>-site</code>، مثلاً{" "}
            <code>noura-site</code>.
          </li>
          <li>
            غيّر <code>&quot;name&quot;</code> في <code>package.json</code> بتاعه لنفس اسم الفولدر.
          </li>
          <li>
            عدّل <code>app/brand.css</code> للألوان، و<code>data/site.ts</code> للمحتوى، وحط اللوجو في{" "}
            <code>public/brand</code>.
          </li>
          <li>
            من الفولدر الرئيسي: <code>npm install</code> وبعدها <code>npm run dev</code>. الموقع هيظهر هنا لوحده.
          </li>
        </ol>
      </footer>
    </main>
  );
}
