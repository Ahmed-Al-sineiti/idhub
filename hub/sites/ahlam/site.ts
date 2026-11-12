import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== Ahlam Baali | Interior Design =====
// المحتوى والصور من فولدر "ahlam".

const brand = {
  name: "Ahlam Baali",
  logo: "/sites/ahlam/brand/logo.png",
  logoWidth: 60,
  logoHeight: 60,
  title: "أحلام باعلي | تصميم وتنفيذ واستشارات ديكور",
  description:
    "أحلام باعلي، مصممة ومدربة ديكور داخلي. تصميم وتنفيذ وإشراف واستشارات لمساحات تجمع الدفء والرقي وتشبه أصحابها.",
};

const theme = {
  accent: "#818d71", // أخضر سيج دافي من النباتات والتفاصيل الطبيعية
  accentSoft: "#d6ddcb",
  secondary: "#b29a7d", // رملي دافي من الأثاث والخامات
  dark: "#151612", // فحمي مايل للزيتوني
  light: "#f5f0e7", // كريمي دافي
  muted: "#a6a094", // النصوص الثانوية
  onLight: "#4b5245", // زيتوني غامق للعناوين على الفاتح
};

const projects: Project[] = [
  {
    slug: "living-room",
    name: "الصالة الرئيسية",
    category: "تصميم داخلي / معيشة",
    image: "/sites/ahlam/images/projects/living-room.webp",
    href: "#works",
  },
  {
    slug: "majlis",
    name: "مجلس الضيافة",
    category: "تصميم داخلي / مجلس",
    image: "/sites/ahlam/images/projects/majlis.webp",
    href: "#works",
  },
  {
    slug: "living-layout",
    name: "توزيع الصالة",
    category: "تصميم داخلي / توزيع",
    image: "/sites/ahlam/images/projects/living-layout.webp",
    href: "#works",
  },
  {
    slug: "tv-wall",
    name: "جدار التلفاز",
    category: "تصميم داخلي / تفاصيل",
    image: "/sites/ahlam/images/projects/tv-wall.webp",
    href: "#works",
  },
  {
    slug: "hospitality-corner",
    name: "ركن الضيافة",
    category: "تصميم داخلي / ضيافة",
    image: "/sites/ahlam/images/projects/hospitality-corner.webp",
    href: "#works",
  },
  {
    slug: "entry",
    name: "المدخل",
    category: "تصميم داخلي / مداخل",
    image: "/sites/ahlam/images/projects/entry.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مصممة ومدربة ديكور داخلي",
  title: "مساحات تحمل تفاصيل ذوقك",
  text: "أحلام باعلي، مصممة ومدربة ديكور داخلي. نقدّم التصميم والتنفيذ والإشراف والاستشارات، ونصنع مساحات تجمع الدفء والرقي وتشبه أصحابها في كل تفصيلة.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior",
      icon: "sofa",
      title: "تصميم داخلي",
      text: "مساحات سكنية وتجارية تُصمم حول احتياجك وذوقك، من الفكرة الأولى حتى اختيار الخامات.",
    },
    {
      key: "execution",
      icon: "hammer",
      title: "تنفيذ وإشراف",
      text: "تنفيذ دقيق ومتابعة لمراحل العمل والخامات والتشطيبات حتى تظهر المساحة كما صُممت.",
    },
    {
      key: "consultation",
      icon: "palette",
      title: "استشارات وتدريب",
      text: "استشارات تصميمية وبرامج تدريب في الديكور الداخلي، بخبرة مصممة ومدربة متخصصة.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "AHLAM",
  title: "التصميم يبدأ من التفاصيل",
  text: "نؤمن أن كل مساحة لها شخصيتها، ونبدأ من تفاصيل أصحابها لنصنع تصميماً يجمع الجمال والراحة والوظيفة. من الفكرة الأولى إلى التنفيذ والإشراف، نرافقك حتى تظهر المساحة كما تخيلتها.",
  points: [
    "تصميم وتنفيذ وإشراف متكامل.",
    "استشارات وتدريب في الديكور الداخلي.",
    "اهتمام بالخامات والإضاءة وآخر التفاصيل.",
  ],
  image: "/sites/ahlam/images/identity.webp",
  imageLabel: "AHLAM BAALI",
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
  ctaTitle: "تواصل مع أحلام باعلي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966503443234",
  whatsapp: "https://wa.me/966503443234",
  phone: "+966 50 344 3234",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/interior.d1/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Ahlam Baali",
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
