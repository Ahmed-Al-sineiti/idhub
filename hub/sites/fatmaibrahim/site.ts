import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== Fatima Ibrahim | Architecture & Interior Design =====
// المحتوى والصور من فولدر "fatmaIbrahim".

const brand = {
  name: "Fatima Ibrahim",
  logo: "/sites/fatmaibrahim/brand/logo.png",
  logoWidth: 60,
  logoHeight: 60,
  title: "فاطمة إبراهيم | عمارة وتصميم داخلي",
  description:
    "فاطمة إبراهيم، معمارية ومصممة داخلية ومؤسسة استوديو هيبة المعنى. تصميم معماري وداخلي يجمع دفء الخامات الطبيعية مع رقيّ التفاصيل.",
};

const theme = {
  accent: "#9a7648", // ذهبي عتيق دافي من المونوجرام والإضاءة
  accentSoft: "#e6d8c4",
  secondary: "#c4a97f", // شامبانيا فاتح من التفاصيل المعدنية
  dark: "#171310", // بني فحمي دافي
  light: "#f4efe6", // عاجي دافي
  muted: "#a79b8e", // النصوص الثانوية
  onLight: "#4e3e2d", // بني كاكاو للعناوين على الفاتح
};

const projects: Project[] = [
  {
    slug: "living-room",
    name: "صالة المعيشة",
    category: "تصميم داخلي / معيشة",
    image: "/sites/fatmaibrahim/images/projects/living-room.webp",
    href: "#works",
  },
  {
    slug: "dining-room",
    name: "منطقة الطعام",
    category: "تصميم داخلي / ضيافة",
    image: "/sites/fatmaibrahim/images/projects/dining-room.webp",
    href: "#works",
  },
  {
    slug: "media-lounge",
    name: "جلسة التلفاز",
    category: "تصميم داخلي / ترفيه",
    image: "/sites/fatmaibrahim/images/projects/media-lounge.webp",
    href: "#works",
  },
  {
    slug: "master-bedroom",
    name: "جناح النوم الرئيسي",
    category: "تصميم داخلي / غرف نوم",
    image: "/sites/fatmaibrahim/images/projects/master-bedroom.webp",
    href: "#works",
  },
  {
    slug: "dressing-room",
    name: "غرفة الملابس",
    category: "تصميم داخلي / تفاصيل",
    image: "/sites/fatmaibrahim/images/projects/dressing-room.webp",
    href: "#works",
  },
  {
    slug: "bathroom",
    name: "الحمام الرئيسي",
    category: "تصميم داخلي / حمامات",
    image: "/sites/fatmaibrahim/images/projects/bathroom.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "معمارية ومصممة داخلية",
  title: "مساحات تُروى بالضوء والتفاصيل",
  text: "فاطمة إبراهيم، معمارية ومصممة داخلية ومؤسسة استوديو هيبة المعنى. نصمّم مساحات سكنية وتجارية تجمع بين منطق العمارة ودفء الخامات الطبيعية، ونصنع التفاصيل التي تجعل المكان يشبه أصحابه.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "architecture",
      icon: "compass",
      title: "تصميم معماري",
      text: "ندرس المساحة وتوزيعها وعلاقتها بالضوء والحركة، ونضع تصوراً معمارياً متكاملاً قبل أول خطوة تنفيذ.",
    },
    {
      key: "interior",
      icon: "sofa",
      title: "تصميم داخلي",
      text: "نختار الخامات والألوان والإضاءة والأثاث لتصبح المساحة قصة متجانسة تعكس ذوق أصحابها.",
    },
    {
      key: "supervision",
      icon: "clipboard-check",
      title: "إشراف وتنفيذ",
      text: "متابعة دقيقة لمراحل التنفيذ والتشطيبات حتى تظهر المساحة كما صُممت، بلا تنازلات في التفاصيل.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "FATIMA",
  title: "العمارة تبدأ من التفاصيل",
  text: "نؤمن أن المساحة الجيدة تولد من حوار بين المبنى والإنسان. نبدأ بالاستماع، ثم ندرس الضوء والحركة والخامات، لنصل إلى تصميم يبدو بسيطاً في شكله ومتكاملاً في تفاصيله.",
  points: [
    "تصميم معماري وداخلي متكامل.",
    "خامات طبيعية وإضاءة مدروسة.",
    "إشراف على التنفيذ حتى آخر تفصيلة.",
  ],
  image: "/sites/fatmaibrahim/images/identity.webp",
  imageLabel: "FATIMA IBRAHIM",
};

const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [],
};

const clients = {
  title: "نجاحك هو سمعتنا",
  eyebrow: "عملاؤنا",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "لنبدأ مشروعك القادم",
  ctaTitle: "تواصل مع فاطمة إبراهيم",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966562080484",
  whatsapp: "https://wa.me/966562080484",
  phone: "+966 56 208 0484",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/fatima_i1996/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Fatima Ibrahim",
};

const nav = [
  { label: "الرئيسية", href: "#top" },
  { label: "من نحن", href: "#about" },
  { label: "مشاريعنا", href: "#works" },
  { label: "خدماتنا", href: "#services" },
  { label: "طريقتنا", href: "#identity" },
  { label: "تواصل معنا", href: "#contact" },
];

export const site: SiteData = {
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
