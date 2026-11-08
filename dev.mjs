// بيدوّر على كل فولدر اسمه بينتهي بـ -site، ويشغّله على بورت لوحده،
// ويشغّل الصفحة الرئيسية (hub) على بورت 3000 وفيها لينكات لكل المواقع.
import { readdirSync, readFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import concurrently from "concurrently";

const root = process.cwd();
const HUB_PORT = 3000;
const FIRST_SITE_PORT = 3001;

const pick = (text, re) => (text.match(re) || [])[1] || "";

const sites = readdirSync(root, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.endsWith("-site") && existsSync(join(root, d.name, "package.json")))
  .map((d) => d.name)
  .sort()
  .map((folder, i) => {
    const data = existsSync(join(root, folder, "data/site.ts")) ? readFileSync(join(root, folder, "data/site.ts"), "utf8") : "";
    const css = existsSync(join(root, folder, "app/brand.css")) ? readFileSync(join(root, folder, "app/brand.css"), "utf8") : "";
    const brandBlock = pick(data, /export const brand = \{([\s\S]*?)\};/);
    return {
      folder,
      port: FIRST_SITE_PORT + i,
      name: pick(brandBlock, /name:\s*"([^"]+)"/) || folder,
      title: pick(brandBlock, /title:\s*"([^"]+)"/),
      logo: pick(brandBlock, /logo:\s*"([^"]+)"/),
      accent: pick(css, /--brand-accent:\s*([^;\s]+)/) || "#be6f5b",
      dark: pick(css, /--brand-dark:\s*([^;\s]+)/) || "#0d0d0d",
      light: pick(css, /--brand-light:\s*([^;\s]+)/) || "#f4f1ea",
    };
  });

writeFileSync(join(root, "hub/sites.generated.json"), JSON.stringify(sites, null, 2));

console.log(`\nالصفحة الرئيسية: http://localhost:${HUB_PORT}`);
for (const s of sites) console.log(`  ${s.name}: http://localhost:${s.port}`);
console.log("");

const palette = ["yellow", "magenta", "cyan", "green", "blue", "red"];

concurrently(
  [
    { command: `npm run dev -w hub -- -p ${HUB_PORT}`, name: "hub", prefixColor: "gray" },
    ...sites.map((s, i) => ({
      command: `npm run dev -w ${s.folder} -- -p ${s.port}`,
      name: s.folder.replace(/-site$/, ""),
      prefixColor: palette[i % palette.length],
    })),
  ],
  { killOthersOn: ["failure"] },
);
