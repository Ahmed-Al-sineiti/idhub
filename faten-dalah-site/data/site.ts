// كل محتوى الموقع في مكان واحد.
// الصور: حط الملف في public/images واكتب مساره هنا بدل null، مثلاً "/images/projects/villa.jpg".
// طالما القيمة null، الموقع بيعرض مكان مؤقت بنفس المقاس.
// أي رابط فاضي "" بيخفي الأيكونة بتاعته. والقوائم الفاضية [] بتخفي السكشن.
//
// نسخة Faten Dalah — المعلومات من حساب إنستجرام fa.interior14.
// أي نص بين [ ] لسه محتاج معلومة حقيقية من العميلة.

export const brand = {
  name: "Faten Dalah",
  logo: "/brand/logo.png",
  logoWidth: 60,
  logoHeight: 60,
  title: "فاتن دله | استوديو تصميم داخلي في الرياض",
  description:
    "استوديو المصممة فاتن محمد دله للتصميم الداخلي والتأثيث والتشطيب والاستشارات الميدانية في الرياض.",
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
    slug: "project-1",
    name: "[اسم المشروع الأول]",
    category: "تصميم داخلي / تأثيث",
    image: null,
    href: "#works",
  },
  {
    slug: "project-2",
    name: "[اسم المشروع الثاني]",
    category: "تشطيب / تأثيث",
    image: null,
    href: "#works",
  },
];

export const about = {
  eyebrow: "استوديو تصميم داخلي — الرياض",
  title: "مساحات تشبهك، من الفكرة حتى التسليم",
  text: "المصممة فاتن محمد دله. نقدم التصميم الداخلي والتأثيث والتشطيب والاستشارات الميدانية في الرياض، ونرافقك في كل خطوة حتى تستلم مساحتك جاهزة.",
};

export const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior",
      icon: "sofa",
      title: "التصميم الداخلي",
      text: "تصاميم للمساحات السكنية والتجارية تجمع الجمال والراحة وتناسب طريقة حياتك.",
    },
    {
      key: "furnishing",
      icon: "paint-roller",
      title: "التأثيث والتشطيب",
      text: "اختيار الأثاث والخامات والإشراف على التشطيب حتى تكتمل المساحة كما صُممت.",
    },
    {
      key: "consulting",
      icon: "ruler",
      title: "الاستشارات الميدانية",
      text: "زيارة للموقع وقياسات دقيقة وتوصيات عملية قبل أن تبدأ التنفيذ.",
    },
  ],
} as const;

export const identity = {
  eyebrow: "طريقتنا في العمل",
  outline: "Faten Dalah",
  title: "كيف نصمم مساحتك؟",
  text: "نبدأ بالاستماع لاحتياجاتك وذوقك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونتابع معك التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "زيارة ميدانية وقياسات دقيقة للمساحة.",
    "تصميم ومخططات تناسب طريقة حياتك.",
    "تأثيث وتشطيب ومتابعة حتى التسليم.",
  ],
  image: null as string | null,
  imageLabel: "FATEN DALAH",
};

export const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [
    {
      rating: 5,
      quote: "[هنا يظهر رأي أحد العملاء بعد تسليم مشروعه]",
      name: "[اسم العميل]",
      role: "[نوع المشروع]",
      avatar: null as string | null,
    },
  ],
};

// القسم ده مخفي لحد ما توصل لوجوهات عملاء فاتن
export const clients = {
  title: "نجاحك هو سمعتنا",
  eyebrow: "عملاؤنا",
  logos: [] as { name: string; src: string }[],
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
  ctaEyebrow: "لنصمم مساحتك معًا",
  ctaTitle: "ابدأ مشروعك مع فاتن دله",
  ctaButton: "تواصل معنا",
  ctaHref: "https://www.instagram.com/fa.interior14/",
  whatsapp: "",
  email: "",
  branches: [{ address: "الرياض - المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/fa.interior14/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Faten Dalah",
};

export const nav = [
  { label: "الرئيسية", href: "#top" },
  { label: "من نحن", href: "#about" },
  { label: "مشاريعنا", href: "#works" },
  { label: "خدماتنا", href: "#services" },
  { label: "طريقتنا", href: "#identity" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "تواصل معنا", href: "#contact" },
];
