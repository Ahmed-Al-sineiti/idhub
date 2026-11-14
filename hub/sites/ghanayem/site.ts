import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== Ghanayem | Interior Design =====
// المحتوى والصور من فولدر "ghanayem".

const brand = {
  name: "Ghanayem",
  logo: "/sites/ghanayem/brand/logo.png",
  logoWidth: 60,
  logoHeight: 60,
  title: "غنايم | تصميم داخلي — حيث تتحول التفاصيل إلى قصة",
  description:
    "غنايم، مصممة داخلية سعودية. تصميم فلل ومحلات ومشاريع خاصة بروح تجمع الفخامة والدفء، حيث تتحول التفاصيل إلى قصة.",
};

const theme = {
  accent: "#b06a63", // وردي نبيتي دافي من هوية البراند
  accentSoft: "#e2c4c0",
  secondary: "#b08f6b", // ذهبي ترابي من الإضاءة والتفاصيل
  dark: "#171110", // بني فحمي دافي
  light: "#f6f0e7", // كريمي دافي
  muted: "#a89b92", // النصوص الثانوية
  onLight: "#5b3735", // نبيتي غامق للعناوين على الفاتح
};

const projects: Project[] = [
  {
    slug: "living-room",
    name: "صالة المعيشة",
    category: "تصميم داخلي / فلل",
    image: "/sites/ghanayem/images/projects/living-room.webp",
    href: "#works",
  },
  {
    slug: "majlis",
    name: "مجلس الضيافة",
    category: "تصميم داخلي / فلل",
    image: "/sites/ghanayem/images/projects/majlis.webp",
    href: "#works",
  },
  {
    slug: "main-hall",
    name: "الصالة الرئيسية",
    category: "تصميم داخلي / فلل",
    image: "/sites/ghanayem/images/projects/main-hall.webp",
    href: "#works",
  },
  {
    slug: "lounge-corner",
    name: "ركن المعيشة",
    category: "تصميم داخلي / تفاصيل",
    image: "/sites/ghanayem/images/projects/lounge-corner.webp",
    href: "#works",
  },
  {
    slug: "dining-room",
    name: "غرفة الطعام",
    category: "تصميم داخلي / ضيافة",
    image: "/sites/ghanayem/images/projects/dining-room.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مصممة داخلية سعودية",
  title: "حيث تتحول التفاصيل إلى قصة",
  text: "غنايم، مصممة داخلية سعودية. نصمم فللًا ومحلات ومشاريع خاصة بروح تجمع الفخامة والدفء، ونحوّل كل تفصيلة في المساحة إلى جزء من قصة أصحابها.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "villas",
      icon: "sofa",
      title: "تصميم فلل",
      text: "مساحات سكنية فاخرة تُصمم حول تفاصيل أصحابها، من توزيع المساحة حتى اختيار الخامات والإضاءة.",
    },
    {
      key: "retail",
      icon: "layers",
      title: "تصميم محلات",
      text: "تصميم داخلي للمحلات يعكس هوية البراند ويصنع تجربة متكاملة تجذب العميل من أول نظرة.",
    },
    {
      key: "supervision",
      icon: "hammer",
      title: "إشراف وتنفيذ",
      text: "متابعة دقيقة لمراحل التنفيذ والخامات والتشطيبات حتى تظهر المساحة كما صُممت.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "GHANAYEM",
  title: "التفاصيل تصنع القصة",
  text: "نؤمن أن التصميم الجيد لا يُقاس بالشكل فقط، بل بكيفية عيش المساحة. نبدأ بالاستماع، ثم نختار الخامات والإضاءة والتفاصيل لتصبح كل زاوية جزءاً من قصة متكاملة.",
  points: [
    "تصميم فلل ومحلات ومشاريع خاصة.",
    "اهتمام بالخامات والإضاءة وآخر التفاصيل.",
    "تصميم سعودي بروح عصرية.",
  ],
  image: "/sites/ghanayem/images/identity.webp",
  imageLabel: "GHANAYEM",
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
  ctaTitle: "تواصل مع غنايم",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966500146035",
  whatsapp: "https://wa.me/966500146035",
  phone: "+966 50 014 6035",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Ghanayem",
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
