import type { Metadata, Viewport } from "next";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";
import "@fontsource/cairo/800.css";
import "@fontsource/cairo/900.css";
import "./brand.css";
import "./globals.css";
import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: brand.title,
  description: brand.description,
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
};

// يطبّق الثيم المحفوظ قبل ما الصفحة تظهر علشان مايحصلش وميض
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

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
