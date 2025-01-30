export const translations = {
  en: {
    // Navigation
    about: "About",
    services: "Services",
    contact: "Contact",
    
    // Services
    interpretation: "Interpretation Services",
    businessConsulting: "Business Consulting",
    construction: "Construction Services",
    
    // Hero Section
    welcomeTo: "Welcome to",
    companyName: "CrystalPeak Services",
    heroSubtitle: "Elevating businesses through professional services and expertise",
    exploreServices: "Explore Our Services",
    
    // About Section
    aboutUs: "About Us",
    aboutDescription: "CrystalPeak Services bridges cultures and businesses through excellence in construction, consulting, and interpretation services. Our expert team brings precision and dedication to every project.",
    projectsCompleted: "Projects Completed",
    clientSatisfaction: "Client Satisfaction",
    countriesServed: "Countries Served",
    teamMembers: "Expert Team Members",
    learnMore: "Learn More About Us",
    
    // Services Section
    ourServices: "Our Services",
    interpretationDesc: "Professional interpretation services for businesses and organizations, ensuring clear communication across languages.",
    consultingDesc: "Strategic guidance and solutions to help your business grow and overcome challenges.",
    constructionDesc: "Expert construction services for residential, commercial, and infrastructure projects.",
    
    // Contact Section
    contactUs: "Contact Us",
    getInTouch: "Get in Touch",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    sendMessage: "Send Message",
    messageSent: "Message Sent!",
    messageSuccess: "We'll get back to you as soon as possible.",
    
    // Footer
    elevatingBusinesses: "Elevating businesses through professional services and expertise.",
    quickLinks: "Quick Links",
    connectWithUs: "Connect With Us",
    allRightsReserved: "All rights reserved.",
  },
  ar: {
    // Navigation
    about: "عن الشركة",
    services: "الخدمات",
    contact: "اتصل بنا",
    
    // Services
    interpretation: "خدمات الترجمة",
    businessConsulting: "استشارات الأعمال",
    construction: "خدمات البناء",
    
    // Hero Section
    welcomeTo: "مرحباً بكم في",
    companyName: "كريستال بيك للخدمات",
    heroSubtitle: "نرتقي بالأعمال من خلال الخدمات المهنية والخبرة",
    exploreServices: "استكشف خدماتنا",
    
    // About Section
    aboutUs: "من نحن",
    aboutDescription: "كريستال بيك للخدمات تربط بين الثقافات والأعمال من خلال التميز في البناء والاستشارات وخدمات الترجمة. يجلب فريق الخبراء لدينا الدقة والتفاني في كل مشروع.",
    projectsCompleted: "مشروع مكتمل",
    clientSatisfaction: "رضا العملاء",
    countriesServed: "دولة نخدمها",
    teamMembers: "خبير في الفريق",
    learnMore: "اعرف المزيد عنا",
    
    // Services Section
    ourServices: "خدماتنا",
    interpretationDesc: "خدمات ترجمة احترافية للشركات والمؤسسات، تضمن تواصلاً واضحاً عبر اللغات.",
    consultingDesc: "توجيه استراتيجي وحلول لمساعدة عملك على النمو وتجاوز التحديات.",
    constructionDesc: "خدمات بناء متخصصة للمشاريع السكنية والتجارية والبنية التحتية.",
    
    // Contact Section
    contactUs: "اتصل بنا",
    getInTouch: "تواصل معنا",
    yourName: "الاسم",
    yourEmail: "البريد الإلكتروني",
    yourMessage: "رسالتك",
    sendMessage: "إرسال الرسالة",
    messageSent: "تم إرسال الرسالة!",
    messageSuccess: "سنعود إليك في أقرب وقت ممكن.",
    
    // Footer
    elevatingBusinesses: "نرتقي بالأعمال من خلال الخدمات المهنية والخبرة.",
    quickLinks: "روابط سريعة",
    connectWithUs: "تواصل معنا",
    allRightsReserved: "جميع الحقوق محفوظة.",
  }
};

export type Language = 'en' | 'ar';
export type TranslationKey = keyof typeof translations.en;