import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== Linah Alshalabi | Interior Design =====
// المحتوى والصور من فولدر "lena".

const brand = {
  name: "Linah Alshalabi",
  logo: "/sites/lena/brand/logo.png",
  logoWidth: 60,
  logoHeight: 60,
  title: "لينا الشلبي | تصميم داخلي وإشراف وتنفيذ",
  description:
    "استوديو لينا الشلبي للتصميم الداخلي بخبرة 18 عاماً. تصميم وإشراف وتنفيذ، وتصميم الحدائق وواجهات الفلل والمنتجعات.",
};

const theme = {
  accent: "#a9835c", // ذهبي عتيق دافي من الإضاءة والتفاصيل المعدنية
  accentSoft: "#e8dcc9",
  secondary: "#9a8168", // بني تاوب دافي من الخشب والأرضيات
  dark: "#171310", // فحمي دافي
  light: "#f6f0e7", // كريمي دافي
  muted: "#a89b8c", // النصوص الثانوية
  onLight: "#574838", // بني قهوي للعناوين على الفاتح
};

const projects: Project[] = [
  {
    slug: "living-room",
    name: "صالة المعيشة",
    category: "تصميم داخلي / معيشة",
    image: "/sites/lena/images/projects/living-room.webp",
    href: "#works",
  },
  {
    slug: "open-kitchen",
    name: "المطبخ المفتوح",
    category: "تصميم داخلي / مطبخ",
    image: "/sites/lena/images/projects/kitchen-dining.webp",
    href: "#works",
  },
  {
    slug: "kitchen-detail",
    name: "تفاصيل المطبخ",
    category: "تصميم داخلي / تفاصيل",
    image: "/sites/lena/images/projects/kitchen-detail.webp",
    href: "#works",
  },
  {
    slug: "bedroom-suite",
    name: "جناح النوم",
    category: "تصميم داخلي / غرف نوم",
    image: "/sites/lena/images/projects/bedroom-suite.webp",
    href: "#works",
  },
  {
    slug: "master-bedroom",
    name: "غرفة النوم الرئيسية",
    category: "تصميم داخلي / غرف نوم",
    image: "/sites/lena/images/projects/master-bedroom.webp",
    href: "#works",
  },
  {
    slug: "tv-wall",
    name: "جدار التلفاز",
    category: "تصميم داخلي / تفاصيل",
    image: "/sites/lena/images/projects/bedroom-tv-wall.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "استوديو تصميم داخلي — 18 سنة خبرة",
  title: "نختصر لك مشوارك بتصميم داخلي مميز",
  text: "لينا الشلبي، استوديو تصميم داخلي بخبرة 18 عاماً. نقدّم التصميم والإشراف والتنفيذ، ونتخصص أيضاً في تصميم الحدائق وواجهات الفلل والمنتجعات، لنختصر لك مشوارك بتصميم داخلي مميز بتوفيق الله.",
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
      text: "مساحات سكنية وتجارية بتصميم يبدأ من احتياجك، ويجمع الدفء والرقي في كل تفصيلة.",
    },
    {
      key: "landscape",
      icon: "compass",
      title: "حدائق وواجهات",
      text: "تصميم حدائق وواجهات الفلل والمنتجعات برؤية متناسقة مع المساحة من حولها.",
    },
    {
      key: "supervision",
      icon: "clipboard-check",
      title: "إشراف وتنفيذ",
      text: "متابعة دقيقة لمراحل التنفيذ والخامات والتشطيبات حتى تظهر المساحة كما صُممت.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "LINA",
  title: "خبرة 18 عاماً في التفاصيل",
  text: "نؤمن أن التصميم الجيد يبدأ بالاستماع. من الفكرة الأولى إلى آخر تفصيلة، نصنع مساحات تحمل شخصية أصحابها وتجمع الجمال والوظيفة، بخبرة 18 عاماً في التصميم والإشراف والتنفيذ.",
  points: [
    "18 سنة خبرة في التصميم الداخلي.",
    "تصميم وإشراف وتنفيذ متكامل.",
    "حدائق وواجهات فلل ومنتجعات.",
  ],
  image: "/sites/lena/images/identity.webp",
  imageLabel: "LINA ALSHALABI",
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
  ctaTitle: "تواصل مع لينا الشلبي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966598850295",
  whatsapp: "https://wa.me/966598850295",
  phone: "+966 59 885 0295",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/interior_designs_by_lina/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Linah Alshalabi",
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
