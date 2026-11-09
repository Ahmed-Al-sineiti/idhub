import type { Metadata } from "next";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";
import "@fontsource/cairo/800.css";
import "@fontsource/cairo/900.css";
import "./globals.css";
import "./site.css";
import { sites } from "@/sites";

export const metadata: Metadata = {
  title: "Corvus | المواقع",
  description: "كل مواقع العملاء في مكان واحد",
};

// المواقع اللي لازم تبدأ داكنة دايمًا حتى لو كان محفوظ لها وضع فاتح.
const startDarkSlugs = Object.entries(sites)
  .filter(([, site]) => site.startDark)
  .map(([slug]) => slug);

// يطبّق الثيم المحفوظ قبل ما الصفحة تظهر علشان مايحصلش وميض.
// كل موقع ليه مفتاح ثيم خاص بيه، والستايلات محصورة في .siteRoot،
// فالصفحة الرئيسية مش بتتأثر.
const themeScript = `try{var p=location.pathname.split("/").filter(Boolean);var k=p.length?"theme:"+p[0]:"theme";var d=${JSON.stringify(startDarkSlugs)};if(p.length&&d.indexOf(p[0])!==-1){localStorage.removeItem(k);delete document.documentElement.dataset.theme}else{var t=localStorage.getItem(k);if(t==="light")document.documentElement.dataset.theme="light"}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
