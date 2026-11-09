import type { SiteTheme } from "./site";

/* ─── hex ↔ HSL helpers ─── */

function hexToHSL(hex: string): [number, number, number] {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function hslToHex(h: number, s: number, l: number): string {
  const hN = h / 360;
  const sN = s / 100;
  const lN = l / 100;

  const hue2rgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  let r: number, g: number, b: number;

  if (sN === 0) {
    r = g = b = lN;
  } else {
    const q = lN < 0.5 ? lN * (1 + sN) : lN + sN - lN * sN;
    const p = 2 * lN - q;
    r = hue2rgb(p, q, hN + 1 / 3);
    g = hue2rgb(p, q, hN);
    b = hue2rgb(p, q, hN - 1 / 3);
  }

  const toHex = (x: number) =>
    Math.round(x * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/* ─── clamp helper ─── */

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(Math.max(v, lo), hi);

/* ─────────────────────────────────────────────────────────
   generateTheme — لون واحد بس وبيطلعلك الثيم كامل.

   أديه اللون الأساسي (accent) وهو هيحسبلك:
     accentSoft  → نسخة أفتح
     secondary   → نسخة أغمق وأهدى للإطارات والخطوط
     dark        → خلفية الدارك مود
     light       → خلفية اللايت مود
     muted       → النصوص الثانوية
     onLight     → العناوين على الخلفية الفاتحة
   ───────────────────────────────────────────────────────── */

export function generateTheme(accent: string): SiteTheme {
  const [h, s, l] = hexToHSL(accent);

  return {
    accent,
    accentSoft: hslToHex(h, s, clamp(l + 12, l, 88)),
    secondary: hslToHex(h, clamp(s - 8, 10, s), clamp(l - 12, 40, l)),
    dark: hslToHex(h, clamp(Math.round(s * 0.6), 8, 25), 8),
    light: hslToHex(h, clamp(Math.round(s * 1.2), 25, 45), 95),
    muted: hslToHex(h, clamp(Math.round(s * 0.35), 8, 15), 62),
    onLight: hslToHex(h, clamp(Math.round(s * 0.5), 10, 22), 30),
  };
}

