import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== م. هدى الحصيني | Huda Alhusaini Interior Design =====
// الرياض، المملكة العربية السعودية — تصميم داخلي • تأثيث • ديكور
// المحتوى والوسائط من أصول فولدر "huda" وحساب @hudaaa-1.

const brand = {
  name: "High Roof — هدى الحصيني",
  logo: "/sites/huda/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "High Roof | م. هدى الحصيني — تصميم داخلي وتأثيث بالرياض",
  description:
    "High Roof، استوديو م. هدى الحصيني للتصميم الداخلي والتأثيث في الرياض. مساحات هادئة بتفاصيل مختارة وخامات طبيعية، تشبه أصحابها.",
};

const theme = {
  accent: "#a9c0a2", // أخضر مريمي فاتح على الفحمي الدافئ — تباين عالٍ
  accentLight: "#4c6644", // أخضر زيتوني أعمق للوضع الفاتح
  accentSoft: "#cfdcc8", // مريمي فاتح للنصوص التكميلية على الداكن
  accentSoftLight: "#3f5539", // زيتوني داكن للنصوص التكميلية على الفاتح
  secondary: "#c9a87c", // رملي دافئ من الخشب والإضاءة
  dark: "#1b1712", // بني فحمي دافئ
  light: "#f4efe6", // كريمي ناعم
  muted: "#b7aea1", // رمادي دافئ للنصوص الثانوية على الداكن
  mutedLight: "#665d52", // رمادي بني للنصوص الثانوية على الفاتح
  onLight: "#2a241d", // بني عميق للعناوين على الكريمي
};

// كل المشاريع فيديوهات حقيقية من أعمالها — بدون لقطات ثابتة.
const projects: Project[] = [
  {
    slug: "living-tour",
    name: "جولة الصالة",
    category: "جولة فيديو / معيشة",
    image: "/sites/huda/video/living.mp4",
    href: "#works",
  },
  {
    slug: "details-tour",
    name: "تفاصيل المكان",
    category: "جولة فيديو / تفاصيل",
    image: "/sites/huda/video/details.mp4",
    href: "#works",
  },
  {
    slug: "wardrobe-tour",
    name: "خزانة المدخل",
    category: "جولة فيديو / مدخل",
    image: "/sites/huda/video/wardrobe.mp4",
    href: "#works",
  },
];

const about = {
  eyebrow: "High Roof — الرياض",
  title: "مساحات تشبه أصحابها",
  text: "م. هدى الحصيني، مؤسسة High Roof للتصميم الداخلي في الرياض. أؤمن أن التصميم الجيد يبدأ من الاستماع: لطريقة عيشك، للضوء الذي تحبه، وللتفاصيل التي تمنحك الراحة. من الفكرة والتوزيع إلى اختيار الأثاث والخامات، أرافقك خطوة بخطوة حتى تصبح المساحة امتداداً لذوقك.",
};

const services = {
  outline: "خدماتنا",
  title: "من الفكرة إلى آخر لمسة",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior-design",
      icon: "sofa",
      title: "تصميم داخلي",
      text: "توزيع المساحات واختيار الألوان والخامات، من المخطط إلى التصور البصري للمكان.",
    },
    {
      key: "furnishing",
      icon: "armchair",
      title: "تأثيث وديكور",
      text: "اختيار الأثاث والإضاءة والقطع المكملة، بتنسيق يربط التفاصيل ببعضها ويمنح المكان شخصيته.",
    },
    {
      key: "consulting",
      icon: "lamp",
      title: "استشارات وتنفيذ",
      text: "استشارات سريعة أو متابعة تنفيذ، مع توصيات عملية تناسب مساحتك وميزانيتك.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "HIGH ROOF",
  title: "هدوء، دفء، وتفاصيل مختارة",
  text: "نبدأ من الإضاءة الطبيعية والألوان الترابية، ثم نضيف الخشب والرخام واللمسات الخضراء. النتيجة مساحة هادئة لا تتصدّر المشهد، لكنها تُشعِر من يدخلها بالراحة.",
  points: [
    "تصميم يراعي طريقة عيشك اليومية.",
    "خامات وألوان مستوحاة من الطبيعة.",
    "تنسيق إضاءة وأثاث بلمسة شخصية.",
    "الرياض، مع خدمة الطلبات عن بُعد.",
  ],
  image: "/sites/huda/video/living.mp4",
  imageLabel: "HIGH ROOF",
};

const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [],
};

const clients = {
  title: "مساحات تُعاش",
  eyebrow: "مختارات من الأعمال",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "لنبدأ مساحتك القادمة",
  ctaTitle: "تواصلي مع م. هدى الحصيني",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966503685976",
  whatsapp: "https://wa.me/966503685976",
  phone: "+966 50 368 5976",
  email: "",
  branches: [{ address: "الرياض، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/hudaaa-1/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: `© ${new Date().getFullYear()} High Roof Interior Design & Furnishing. جميع الحقوق محفوظة`,
};

const nav = [
  { label: "الرئيسية", href: "#top" },
  { label: "من نحن", href: "#about" },
  { label: "مشاريعنا", href: "#works" },
  { label: "خدماتنا", href: "#services" },
  { label: "فلسفتنا", href: "#identity" },
  { label: "تواصل معنا", href: "#contact" },
];

export const site: SiteData = {
  greetName: "م. هدى",
  createdAt: "2026-11-15",
  worksLayout: "portrait",
  hero: {
    // الفيديوهات فاتحة، فنستخدم عنواناً كريمياً وطبقة تعتيم خلف النص.
    titleColor: "#f4efe6",
    scrim:
      "linear-gradient(270deg, rgba(20,16,12,0.74) 0%, rgba(20,16,12,0.54) 32%, rgba(20,16,12,0.16) 64%, rgba(20,16,12,0) 100%)",
  },
  brand,
  theme,
  projects,
  about,
  services,
  identity,
  testimonials,
  clients,
  contact,
  nav,
};
