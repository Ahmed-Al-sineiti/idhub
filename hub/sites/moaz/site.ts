import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== مُعاذ السّياط للتصميم الداخلي | Muath Alsiyat Interior Design =====
// الجوف، المملكة العربية السعودية — تصميم داخلي • تنفيذ • تأثيث
// المشاريع والحساب من أصول فولدر "moaz" وحساب @muathalsiyat.

const brand = {
  name: "Muath Alsiyat",
  logo: "/sites/moaz/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "مُعاذ السّياط للتصميم الداخلي | الجوف",
  description:
    "مُعاذ السّياط للتصميم الداخلي في الجوف. تصميم داخلي وتنفيذ وتأثيث للمشاريع السكنية والتجارية، بلمسات كلاسيكية معاصرة وخامات فاخرة. نصنع مساحات تُعانق أحلامكم.",
};

const theme = {
  accent: "#c9a86a", // شامبانيا ذهبية من الإضاءة والتفاصيل المعدنية — تباين 8.4:1 على الفحمي
  accentLight: "#755125", // برونز أعمق للوضع الفاتح — تباين 5.4:1 على العاجي
  accentSoft: "#ddc9a4", // شامبانيا فاتحة للنصوص التكميلية على الفحمي
  accentSoftLight: "#6f4d22", // برونز داكن للنصوص التكميلية على العاجي
  secondary: "#b08a5c", // نحاسي من لوجو M والرخام
  dark: "#10100e", // فحمي دافئ يقترب من رخام المغاسل
  light: "#f3ede2", // عاجي دافئ
  muted: "#b6aa98", // رمادي دافئ للنصوص الثانوية على الفحمي
  mutedLight: "#625a4f", // رمادي بني للنصوص الثانوية على العاجي
  onLight: "#231f1a", // فحمي عميق للعناوين على العاجي
};

const projects: Project[] = [
  {
    slug: "main-hall",
    name: "الصالة الرئيسية — فيلا مضاوي",
    category: "تصميم وتأثيث / صالة معيشة",
    image: "/sites/moaz/images/projects/main-hall.webp",
    href: "#works",
  },
  {
    slug: "majlis",
    name: "مجلس الضيافة — فيلا مضاوي",
    category: "تصميم داخلي / مجلس",
    image: "/sites/moaz/images/projects/majlis.webp",
    href: "#works",
  },
  {
    slug: "planters",
    name: "زوايا النباتات والضوء",
    category: "تنسيق مساحات / تفاصيل",
    image: "/sites/moaz/images/projects/planters.webp",
    href: "#works",
  },
  {
    slug: "lighting",
    name: "هندسة الإضاءة والثريات",
    category: "تصميم إنارة / أسقف",
    image: "/sites/moaz/images/projects/lighting.webp",
    href: "#works",
  },
  {
    slug: "furnishing",
    name: "تأثيث وتنسيق التفاصيل",
    category: "تأثيث وقطع فنية / تفاصيل",
    image: "/sites/moaz/images/projects/furnishing.webp",
    href: "#works",
  },
  {
    slug: "vanity",
    name: "مغاسل الضيافة الرخامية",
    category: "رخام وتشطيبات / مغاسل",
    image: "/sites/moaz/images/projects/vanity.webp",
    href: "#works",
  },
  {
    slug: "vanity-detail",
    name: "لمسات ذهبية في المغاسل",
    category: "تفاصيل كلاسيكية / مغاسل",
    image: "/sites/moaz/images/projects/vanity-detail.webp",
    href: "#works",
  },
  {
    slug: "vanity-tour",
    name: "جولة مغاسل الضيافة",
    category: "جولة فيديو / تفاصيل تنفيذ",
    image: "/sites/moaz/video/tour.mp4",
    href: "#works",
  },
];

const about = {
  eyebrow: "استوديو تصميم داخلي — الجوف",
  title: "نصنع مساحات تُعانق أحلامكم",
  text: "مُعاذ السّياط للتصميم الداخلي، استوديو متخصص في التصميم الداخلي والتنفيذ والتأثيث للمشاريع السكنية والتجارية في الجوف ومناطق المملكة. نبدأ من تفاصيل المكان وشخصية من يعيشه، لنحوّل المساحة إلى تجربة متكاملة تجمع الفخامة والهدوء.",
};

const services = {
  outline: "خدماتنا",
  title: "من الفكرة الأولى إلى آخر تفصيلة",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior-design",
      icon: "sofa",
      title: "تصميم داخلي متكامل",
      text: "تصاميم للفلل والمجالس والصالات، توازن بين توزيع المساحة والضوء والذوق الشخصي.",
    },
    {
      key: "execution",
      icon: "paint-roller",
      title: "تنفيذ وإشراف",
      text: "متابعة دقيقة لمراحل التنفيذ والتشطيبات واختيار الخامات، من الرخام والأسقف إلى الأبواب والتفاصيل المعدنية.",
    },
    {
      key: "furnishing",
      icon: "armchair",
      title: "تأثيث وتنسيق",
      text: "اختيار الأثاث والأقمشة والإضاءة والقطع الفنية، لتكتمل المساحة بروح متناغمة وتفاصيل تُعاش.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "MUATH",
  title: "لمسات كلاسيكية بروح معاصرة",
  text: "نؤمن أن الفخامة الحقيقية تظهر في التفاصيل الهادئة: رخام داكن، ذهب دافئ، قماش ناعم، وإضاءة تُبرز كل زاوية. في فيلا مضاوي، نسجنا هذه العناصر في مساحة واحدة تتناغم فيها الصالة والمجلس والمغاسل برؤية واحدة.",
  points: [
    "تصميم وتنفيذ وتأثيث تحت سقف واحد.",
    "خامات مختارة بعناية وتفاصيل منفذة بدقة.",
    "تنسيق إنارة يمنح المساحة دفئها وطابعها.",
    "مقرنا في الجوف ونخدم مناطق المملكة.",
  ],
  image: "/sites/moaz/images/identity.webp",
  imageLabel: "MUATH ALSIYAT",
};

const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [],
};

const clients = {
  title: "نصنع مساحات تُعاش",
  eyebrow: "فيلا مضاوي",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "لنصنع مساحتك القادمة",
  ctaTitle: "ابدأ مشروعك مع مُعاذ السّياط",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966506522132",
  whatsapp: "https://wa.me/966506522132",
  phone: "+966 50 652 2132",
  email: "",
  branches: [{ address: "الجوف، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/muathalsiyat/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: `© ${new Date().getFullYear()} Muath Alsiyat Interior Design. جميع الحقوق محفوظة`,
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
  greetName: "أ. معاذ",
  createdAt: "2026-11-15",
  hero: {
    // صور المشروع فاتحة، فنستخدم عنواناً عاجياً وطبقة تعتيم خلف النص للحفاظ على الوضوح.
    titleColor: "#f3ede2",
    scrim:
      "linear-gradient(270deg, rgba(8,7,6,0.82) 0%, rgba(8,7,6,0.6) 30%, rgba(8,7,6,0.2) 62%, rgba(8,7,6,0) 100%)",
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
