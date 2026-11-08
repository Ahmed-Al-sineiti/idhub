// كل محتوى الموقع في مكان واحد.
// الصور: حط الملف في public/images واكتب مساره هنا بدل null، مثلاً "/images/projects/zabiat-alban.jpg".
// طالما القيمة null، الموقع بيعرض مكان مؤقت بنفس المقاس.
// أي رابط فاضي "" بيخفي الأيكونة بتاعته. والقوائم الفاضية [] بتخفي السكشن.

export const brand = {
  name: "WSTUDIO",
  logo: "/brand/wstudio.png",
  logoWidth: 134,
  logoHeight: 64,
  title: "WSTUDIO | تصميم داخلي وخارجي",
  description: "شركة تصميم داخلي وخارجي نعمل على تحويل المساحات إلى بيئات جذابة ومتناغمة.",
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  image: string | null;
  href: string;
};

export const projects: Project[] = [
  {
    slug: "zabiat-alban",
    name: "Zabiat Alban",
    category: "خارجي / داخلي",
    image: null,
    href: "#works",
  },
  {
    slug: "glitter-farm",
    name: "Glitter Farm",
    category: "خارجي / داخلي",
    image: null,
    href: "#works",
  },
];

export const about = {
  eyebrow: "خبرة 15 عامًا في التصميم",
  title: "من فريق احترافي صغير إلى شركة إبداعية متكاملة",
  text: "نحن شركة تصميم داخلي وخارجي نعمل على تحويل المساحات إلى بيئات جذابة ومتناغمة. ندمج الجمال بالوظيفة حتى تضيف كل تفصيلة قيمة للتجربة.",
};

export const services = {
  outline: "تعرّف على خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "المميزات",
  items: [
    {
      key: "interior",
      icon: "sofa",
      title: "التصميم الداخلي",
      text: "نساعدك على تحويل المساحات السكنية أو التجارية إلى بيئات جميلة ومريحة.",
    },
    {
      key: "exterior",
      icon: "layers",
      title: "التصميم الخارجي",
      text: "نقدم خدمات التصميم المعماري لتطوير مبانٍ مبتكرة وعملية.",
    },
    {
      key: "identity",
      icon: "palette",
      title: "الهوية البصرية",
      text: "نصمم شعارات وهويات بصرية قوية وجذابة لشركتك.",
    },
  ],
} as const;

export const identity = {
  eyebrow: "الهوية البصرية",
  outline: "Visual Identity",
  title: "كيف تبدو هويتك البصرية؟",
  text: "التعاون أساس رحلة التصميم الناجحة. تعتمد عمليتنا على التواصل القريب، وضوح التفضيلات، والتفاصيل التي تجعل المساحة شخصية ومكتملة.",
  points: [
    "مساحات حديثة بخيارات مواد معبرة.",
    "مخططات عملية تراعي التخزين وسهولة الحركة.",
    "تصميم أنيق مدعوم بتنفيذ عملي.",
  ],
  image: null as string | null,
  imageLabel: "WSTUDIO",
};

export const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [
    {
      rating: 5,
      quote: "شركة عريقة وذات طابع مميز وتعامل محترف ، يقدرون الوقت و تسليم الاعمال في المعاد",
      name: "م/محمد",
      role: "فيلا",
      avatar: null as string | null,
    },
  ],
};

export const clients = {
  title: "نجاحك هو سمعتنا",
  eyebrow: "عملاؤنا",
  logos: [
    { name: "Crowne Plaza", src: "/images/clients/crowne-plaza.png" },
    { name: "Dar Altaqwa Hotel", src: "/images/clients/dar-altaqwa.png" },
    { name: "Glitter Farm", src: "/images/clients/glitter-farm.png" },
    { name: "IBDAA Home", src: "/images/clients/ibdaa-home.png" },
    { name: "Lumain Hotel", src: "/images/clients/lumain.png" },
    { name: "ELAF", src: "/images/clients/elaf.png" },
  ],
};

export type Branch = { address: string; zip?: string; map?: string };

export const contact: {
  ctaEyebrow: string;
  ctaTitle: string;
  ctaButton: string;
  ctaHref: string;
  whatsapp: string;
  email: string;
  branches: Branch[];
  social: { facebook: string; instagram: string; x: string; linkedin: string };
  apps: { microsoft: string; googlePlay: string; appStore: string };
  copyright: string;
} = {
  ctaEyebrow: "لنصنع شيئًا مميزًا معًا",
  ctaTitle: "ابدأ مشروعك مع WSTUDIO",
  ctaButton: "ابدأ مشروعك",
  ctaHref: "https://wa.me/",
  whatsapp: "https://wa.me/",
  email: "info@wstudio.sa",
  branches: [
    { address: "Al Madina, Shoran, St Salah Al-Din", zip: "42384", map: "#" },
    { address: "Al-Khobar, Al-Stan, St Salah Al-Din", zip: "34422", map: "#" },
  ],
  social: {
    facebook: "#",
    instagram: "#",
    x: "#",
    linkedin: "#",
  },
  apps: {
    microsoft: "#",
    googlePlay: "#",
    appStore: "#",
  },
  copyright: "© 2020 Copyrights Designed by Wstudio",
};

export const nav = [
  { label: "الرئيسية", href: "#top" },
  { label: "من نحن", href: "#about" },
  { label: "مشاريعنا", href: "#works" },
  { label: "خدماتنا", href: "#services" },
  { label: "الهوية البصرية", href: "#identity" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "عملاؤنا", href: "#clients" },
  { label: "تواصل معنا", href: "#contact" },
];
