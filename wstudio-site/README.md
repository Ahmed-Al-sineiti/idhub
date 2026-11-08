# WSTUDIO — موقع Next.js

## التشغيل
```
npm install
npm run dev
```
وافتح http://localhost:3000

## فين أعدّل إيه
- **كل النصوص والروابط والصور:** `data/site.ts`
- **الصور:** حط الصورة في `public/images/` واكتب مسارها في `data/site.ts` بدل `null`.
  طالما القيمة `null` بيظهر مكان مؤقت بنفس المقاس.
- **الألوان:** `app/brand.css` بس (7 ألوان)، والباقي بيتحسب منهم.
- **اللوجو:** `public/brand/` ومساره ومقاسه في `brand` جوه `data/site.ts`.
- **كل سكشن:** ملف في `components/` ومعاه ملف CSS بنفس الاسم.

## الأيكونات
- Lucide للأيكونات العامة.
- Simple Icons للوجوهات السوشيال والمتاجر.
- LinkedIn وMicrosoft Store مش موجودين في Simple Icons، ومكانهم شكل مؤقت في `components/BrandIcon.tsx`.
