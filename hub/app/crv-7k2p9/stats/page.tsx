import { siteList } from "@/sites";
import { NOTION_DB_ID, notionHeaders, notionToken } from "@/lib/stats-config";
import styles from "../../page.module.css";

export const dynamic = "force-dynamic";
export const metadata = { title: "Corvus | الإحصائيات" };

// صف في الشيت: time, slug, visitor, event, device, country, city, referrer, seconds, scroll
type Row = [string, string, string, string, string, string, string, string, number | "", number | ""];

const COUNTRY: Record<string, string> = { SA: "السعودية", EG: "مصر", AE: "الإمارات", KW: "الكويت", QA: "قطر", BH: "البحرين", OM: "عمان" };

// بيقرا كل سطور جدول "زيارات المواقع" من نوشن (١٠٠ سطر في كل طلب)
// ويحولها لنفس شكل الصف: time, slug, visitor, event, device, country, city, referrer, seconds, scroll
const EVENT: Record<string, string> = { "فتح": "view", "واتساب": "whatsapp", "خروج": "leave" };
const DEVICE: Record<string, string> = { "موبايل": "mobile", "كمبيوتر": "desktop" };

type NotionProp = {
  title?: { plain_text: string }[];
  rich_text?: { plain_text: string }[];
  select?: { name: string } | null;
  number?: number | null;
  created_time?: string;
};

const txt = (p?: NotionProp) => (p?.title ?? p?.rich_text ?? []).map((x) => x.plain_text).join("");

async function loadRows(): Promise<Row[] | null> {
  if (!notionToken()) return null;
  const rows: Row[] = [];
  let cursor: string | undefined;
  try {
    for (let i = 0; i < 50; i++) {
      const res = await fetch(`https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`, {
        method: "POST",
        headers: notionHeaders(),
        body: JSON.stringify({
          page_size: 100,
          start_cursor: cursor,
          sorts: [{ timestamp: "created_time", direction: "ascending" }],
        }),
        cache: "no-store",
      });
      if (!res.ok) return null;
      const data = await res.json();
      for (const page of data.results as { created_time: string; properties: Record<string, NotionProp> }[]) {
        const p = page.properties;
        rows.push([
          page.created_time,
          txt(p["الموقع"]),
          txt(p["الجهاز"]),
          EVENT[p["الحدث"]?.select?.name ?? ""] ?? "",
          DEVICE[p["نوع الجهاز"]?.select?.name ?? ""] ?? "",
          txt(p["البلد"]),
          txt(p["المدينة"]),
          txt(p["جاي من"]),
          p["المدة بالثواني"]?.number ?? "",
          p["النزول %"]?.number ?? "",
        ]);
      }
      if (!data.has_more) break;
      cursor = data.next_cursor;
    }
    return rows;
  } catch {
    return null;
  }
}

function fmt(d: Date) {
  return d.toLocaleString("ar-EG", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit", timeZone: "Africa/Cairo" });
}

type Search = { country?: string; device?: string; sort?: string };

// الفلاتر: البلد (الافتراضي السعودية)، نوع الجهاز، والترتيب
const COUNTRY_TABS = [
  { key: "SA", label: "السعودية" },
  { key: "EG", label: "مصر (إحنا)" },
  { key: "all", label: "الكل" },
];
const DEVICE_TABS = [
  { key: "all", label: "كل الأجهزة" },
  { key: "mobile", label: "موبايل" },
  { key: "desktop", label: "كمبيوتر" },
];
const SORT_TABS = [
  { key: "views", label: "الأكثر زيارة" },
  { key: "visitors", label: "الأكثر أجهزة" },
  { key: "recent", label: "آخر زيارة" },
];

export default async function Stats({ searchParams }: { searchParams: Promise<Search> }) {
  const sp = await searchParams;
  const country = sp.country ?? "SA";
  const device = sp.device ?? "all";
  const sort = sp.sort ?? "views";
  const all = await loadRows();
  // الفلترة بالجهاز والبلد على مستوى الجهاز: أحداث الخروج والواتساب بتتبع نفس الجهاز
  const rows =
    all &&
    all.filter(
      (x) => (country === "all" || x[5] === country) && (device === "all" || x[4] === device),
    );
  const link = (k: keyof Search, v: string) => {
    const q = new URLSearchParams({ country, device, sort, [k]: v });
    return `?${q.toString()}`;
  };
  const names = Object.fromEntries(siteList.map(({ slug, site }) => [slug, site.brand.name]));

  const stats = siteList.map(({ slug }) => {
    const r = (rows ?? []).filter((x) => x[1] === slug);
    const views = r.filter((x) => x[3] === "view");
    const leaves = r.filter((x) => x[3] === "leave" && x[8] !== "");
    const visitors = new Set(views.map((x) => x[2]));
    const countries = new Map<string, Set<string>>();
    for (const x of views) {
      const c = COUNTRY[x[5]] ?? (x[5] || "غير معروف");
      const place = x[6] ? `${c} - ${x[6]}` : c;
      if (!countries.has(place)) countries.set(place, new Set());
      countries.get(place)!.add(x[2]);
    }
    const last = views.length ? new Date(views[views.length - 1][0]) : null;
    return {
      slug,
      name: names[slug],
      visitors: visitors.size,
      views: views.length,
      mobile: new Set(views.filter((x) => x[4] === "mobile").map((x) => x[2])).size,
      whatsapp: r.filter((x) => x[3] === "whatsapp").length,
      avgSeconds: leaves.length ? Math.round(leaves.reduce((s, x) => s + Number(x[8]), 0) / leaves.length) : null,
      maxScroll: leaves.length ? Math.max(...leaves.map((x) => Number(x[9]) || 0)) : null,
      places: [...countries.entries()].map(([p, v]) => `${p} (${v.size})`).join("، "),
      last,
    };
  }).sort((a, b) =>
    sort === "recent"
      ? (b.last?.getTime() ?? 0) - (a.last?.getTime() ?? 0)
      : sort === "visitors"
        ? b.visitors - a.visitors || b.views - a.views
        : b.views - a.views || b.visitors - a.visitors,
  );

  const totals = {
    visitors: new Set((rows ?? []).filter((x) => x[3] === "view").map((x) => x[2])).size,
    views: (rows ?? []).filter((x) => x[3] === "view").length,
    whatsapp: (rows ?? []).filter((x) => x[3] === "whatsapp").length,
  };
  const chip = (active: boolean): React.CSSProperties => ({
    padding: "7px 14px",
    borderRadius: 999,
    border: `1px solid ${active ? "var(--accent)" : "var(--line)"}`,
    background: active ? "rgba(190, 111, 91, 0.14)" : "var(--panel)",
    color: active ? "var(--text)" : "var(--muted)",
    fontSize: 13,
    fontWeight: 700,
  });

  const th: React.CSSProperties = { textAlign: "right", padding: "10px 12px", color: "var(--muted)", fontSize: 13, borderBottom: "1px solid var(--line)", whiteSpace: "nowrap" };
  const td: React.CSSProperties = { padding: "12px", borderBottom: "1px solid var(--line)", fontSize: 14, verticalAlign: "top" };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>
          <a href="/crv-7k2p9">Corvus ← المواقع</a>
        </p>
        <h1 className={styles.title}>الإحصائيات</h1>
        <p className={styles.sub}>زيارات الفريق مش محسوبة. كل جهاز بيتحسب زائر واحد.</p>
      </header>

      {rows !== null ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
          {[
            { k: "country" as const, cur: country, tabs: COUNTRY_TABS },
            { k: "device" as const, cur: device, tabs: DEVICE_TABS },
            { k: "sort" as const, cur: sort, tabs: SORT_TABS },
          ].map((g) => (
            <div key={g.k} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {g.tabs.map((tab) => (
                <a key={tab.key} href={link(g.k, tab.key)} style={chip(g.cur === tab.key)}>
                  {tab.label}
                </a>
              ))}
            </div>
          ))}
          <p className={styles.sub} style={{ margin: "6px 0 0" }}>
            {totals.visitors} جهاز مختلف · {totals.views} زيارة · {totals.whatsapp} دوسة واتساب
          </p>
        </div>
      ) : null}

      {rows === null ? (
        <p className={styles.empty}>
          الإحصائيات مش متوصلة لسه، أو مفتاح نوشن غلط. شوف الخطوات في <code>hub/lib/stats-config.ts</code>.
        </p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 860 }}>
            <thead>
              <tr>
                {["الموقع", "أجهزة مختلفة", "زيارات", "موبايل", "واتساب", "متوسط المدة", "أبعد نزول", "منين", "آخر زيارة"].map((h) => (
                  <th key={h} style={th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stats.map((s) => (
                <tr key={s.slug}>
                  <td style={td}>
                    <a href={`/${s.slug}`} style={{ fontWeight: 800 }}>{s.name}</a>
                    <div style={{ color: "var(--muted)", fontSize: 12 }}>/{s.slug}</div>
                  </td>
                  <td style={{ ...td, fontWeight: 800, fontSize: 18 }}>{s.visitors}</td>
                  <td style={td}>{s.views}</td>
                  <td style={td}>{s.mobile}</td>
                  <td style={td}>{s.whatsapp}</td>
                  <td style={td}>{s.avgSeconds === null ? "-" : `${s.avgSeconds} ث`}</td>
                  <td style={td}>{s.maxScroll === null ? "-" : `${s.maxScroll}%`}</td>
                  <td style={{ ...td, color: "var(--muted)" }}>{s.places || "-"}</td>
                  <td style={{ ...td, whiteSpace: "nowrap" }}>{s.last ? fmt(s.last) : "ما اتفتحش"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
