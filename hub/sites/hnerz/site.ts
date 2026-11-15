import type { Contact, Project, ServiceItem, SiteData, TestimonialItem } from "@/lib/site";

// ===== HNERZ DESIGN =====
// Tagline: "Bringing designs to life"
// Minimal, black/white, strong typography with blueprint cyan accent matching the logo.
const theme = {
  accent: "#38bdf8", // Blueprint cyan accent from the logo
  accentSoft: "#7dd3fc", // Soft sky highlight
  secondary: "#263140", // Subtle dark slate line/frame color
  dark: "#0b0c0e", // Deep matte black matching the logo background
  light: "#f3f4f6", // Clean architectural light gray
  muted: "#94a3b8", // Balanced slate text
  onLight: "#0f172a", // Deep high-contrast dark for light mode
};

const brand = {
  name: "HNERZ DESIGN",
  logo: "/sites/hnerz/brand/logo.webp",
  logoWidth: 64,
  logoHeight: 64,
  title: "HNERZ DESIGN | Bringing Designs to Life — استوديو التصميم المعماري والداخلي",
  description:
    "استوديو HNERZ DESIGN للتصميم المعماري والداخلي. نحوّل الرؤى الهندسية والمفاهيم الإبداعية إلى واقع ملموس بدقة هندسية عالية وطابع معماري نقي. Bringing designs to life.",
};

const projects: Project[] = [
  {
    slug: "executive-tower",
    name: "The Executive Monolith | المقر التنفيذي",
    category: "Commercial Architecture / تصميم تجاري",
    image: "/sites/hnerz/images/projects/executive-tower.webp",
    href: "#works",
  },
  {
    slug: "minimalist-villa",
    name: "Pure Line Villa | فيلا الخطوط النقية",
    category: "Residential Architecture / عمارة سكنية",
    image: "/sites/hnerz/images/projects/minimalist-villa.webp",
    href: "#works",
  },
  {
    slug: "architectural-studio",
    name: "Creative Studio Hub | مساحة العمل الإبداعية",
    category: "Interior Architecture / تصميم داخلي",
    image: "/sites/hnerz/images/projects/architectural-studio.webp",
    href: "#works",
  },
  {
    slug: "skyline-penthouse",
    name: "Skyline Residence | بنتهاوس الأفق",
    category: "Luxury Living / سكن فاخر",
    image: "/sites/hnerz/images/projects/skyline-penthouse.webp",
    href: "#works",
  },
  {
    slug: "contemporary-residence",
    name: "Modern Haven | المسكن المعاصر",
    category: "Private Villa / تصميم فلل خاصة",
    image: "/sites/hnerz/images/projects/contemporary-residence.webp",
    href: "#works",
  },
  {
    slug: "monochrome-lounge",
    name: "Atelier Lounge | صالة الاستقبال الخاصة",
    category: "Hospitality & Lounge / ضيافة واستقبال",
    image: "/sites/hnerz/images/projects/monochrome-lounge.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "BRINGING DESIGNS TO LIFE",
  title: "عمارة نقية، تفاصيل مدروسة، وتصاميم تنبض بالحياة",
  text: "في HNERZ DESIGN نؤمن بأن التصميم ليس مجرد خطوط أو نماذج ثلاثية الأبعاد، بل هو خلق بيئات ومساحات حقيقية تُلهم قاطنيها. ندمج بين الفكر المعماري المعاصر، بساطة الخطوط، والدقة الهندسية المتناهية لنأخذ أفكارك من مرحلة المفهوم إلى التنفيذ الواقعي الكامل.",
};

const services = {
  outline: "HNERZ",
  eyebrow: "OUR SERVICES | خدماتنا",
  title: "خدمات هندسية وتصميمية متكاملة",
  items: [
    {
      key: "architectural-design",
      icon: "compass",
      title: "التصميم المعماري (Architectural Design)",
      text: "تخطيط ودراسة معمارية متكاملة للواجهات والكتل والمخططات الهندسية بأعلى المعايير العالمية.",
    },
    {
      key: "interior-design",
      icon: "sofa",
      title: "التصميم الداخلي (Interior Architecture)",
      text: "تصميم فراغات داخلية استثنائية تجمع بين التناغم الوظيفي، جمالية الإضاءة، والمواد الفاخرة.",
    },
    {
      key: "turnkey-execution",
      icon: "hammer",
      title: "التنفيذ والإشراف (Execution & Supervision)",
      text: "إشراف هندسي دقيق وإدارة متكاملة لخطوات التنفيذ لضمان مطابقة الواقع للتصميم بأعلى جودة.",
    },
    {
      key: "3d-visualization",
      icon: "layers",
      title: "النمذجة ثلاثية الأبعاد (3D Visualization)",
      text: "محاكاة واقعية فائقة الدقة لرؤية أدق التفاصيل والمواد قبل بدء التنفيذ على أرض الواقع.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "THE HNERZ PHILOSOPHY | منهجيتنا",
  outline: "BRINGING DESIGNS TO LIFE",
  title: "الدقة في المفهوم، الإتقان في الواقع",
  text: "نتبع نهجاً معمارياً بسيطاً ومؤثراً (Minimalist & Contemporary) يعتمد على النقاء البصري، وقوة التفاصيل، واستغلال الإضاءة الطبيعية لابتكار مساحات متوازنة تدوم عبر الزمن.",
  points: [
    "من المخطط الأولي إلى التسليم الواقعي برؤية تصميمية موحدة.",
    "طابع بصري مينيمل، جريء، ونقي يعكس هوية العميل.",
    "معايير تنفيذ دقيقة ومواد مختارة بعناية فائقة تلائم أسلوب الحياة العصري.",
  ],
  image: "/sites/hnerz/images/identity.webp",
  imageLabel: "HNERZ DESIGN",
};

const testimonials = {
  eyebrow: "TESTIMONIALS | آراء العملاء",
  title: "ثقة تبني شراكات دائمة",
  items: [
    {
      rating: 5,
      quote:
        "فريق HNERZ DESIGN حوّل المخطط الهندسي لمنزلي إلى تحفة فنية تتجاوز التوقعات، دقة متناهية والتزام بالوقت في كل تفصيلة.",
      name: "م. فهد القحطاني",
      role: "مالك فيلا خاصة",
      avatar: null,
    },
    {
      rating: 5,
      quote:
        "تصميم المقر الرئيسي لشركتنا كان تحدياً في استغلال المساحة، والنتيجة كانت بيئة عمل ملهمة وحازت على إعجاب الجميع.",
      name: "سلطان العتيبي",
      role: "رئيس تنفيذي",
      avatar: null,
    },
  ] satisfies TestimonialItem[],
};

const clients = {
  title: "عملاؤنا",
  eyebrow: "شركاء النجاح",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "START YOUR PROJECT | ابدأ مشروعك",
  ctaTitle: "هل أنت جاهز لتحويل رؤيتك إلى واقع؟",
  ctaButton: "تواصل مع استوديو HNERZ",
  ctaHref: "https://wa.me/966500000000",
  whatsapp: "https://wa.me/966500000000",
  phone: "+966 50 000 0000",
  email: "contact@hnerzdesign.com",
  branches: [{ address: "الرياض، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://instagram.com/hnerzdesign",
    x: "https://x.com/hnerzdesign",
    linkedin: "https://linkedin.com/company/hnerzdesign",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: `© ${new Date().getFullYear()} HNERZ DESIGN. Bringing designs to life.`,
};

const nav = [
  { label: "الرئيسية", href: "#top" },
  { label: "عن الاستوديو", href: "#about" },
  { label: "المشاريع", href: "#works" },
  { label: "خدماتنا", href: "#services" },
  { label: "فلسفتنا", href: "#identity" },
  { label: "تواصل معنا", href: "#contact" },
];

export const site: SiteData = {
  createdAt: "2026-11-15",
  startDark: true,
  greetName: "HNERZ DESIGN",
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
