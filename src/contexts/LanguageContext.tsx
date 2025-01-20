import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<string, string>>;
}

const translations = {
  en: {
    about: "About",
    services: "Services",
    contact: "Contact",
    interpretation: "Interpretation",
    businessConsulting: "Business Consulting",
    professionalTraining: "Professional Training",
    projectsCompleted: "Projects Completed",
    happyClients: "Happy Clients",
    teamMembers: "Team Members",
    satisfactionRate: "Satisfaction Rate",
    aboutUsDescription: "At CrystalPeak Services, we believe in delivering excellence through clarity and precision. Our team of experts brings years of experience and dedication to every project we undertake.",
    getInTouch: "Get in Touch",
    exploreServices: "Explore Our Services",
    currentLang: "English",
    heroTitle: "Welcome to CrystalPeak Services",
    heroSubtitle: "Elevating businesses through professional services and expertise",
    quickLinks: "Quick Links",
    connectWithUs: "Connect With Us",
    footerDescription: "Elevating businesses through professional services and expertise.",
    allRightsReserved: "All rights reserved.",
  },
  ar: {
    about: "عن الشركة",
    services: "الخدمات",
    contact: "اتصل بنا",
    interpretation: "خدمات الترجمة",
    businessConsulting: "استشارات الأعمال",
    professionalTraining: "التدريب المهني",
    projectsCompleted: "مشروع مكتمل",
    happyClients: "عميل سعيد",
    teamMembers: "عضو في الفريق",
    satisfactionRate: "نسبة الرضا",
    aboutUsDescription: "في كريستال بيك للخدمات، نؤمن بتقديم التميز من خلال الوضوح والدقة. يجلب فريق الخبراء لدينا سنوات من الخبرة والتفاني في كل مشروع نقوم به.",
    getInTouch: "تواصل معنا",
    exploreServices: "استكشف خدماتنا",
    currentLang: "عربي",
    heroTitle: "مرحباً بكم في خدمات كريستال بيك",
    heroSubtitle: "نرتقي بالأعمال من خلال الخدمات والخبرات المهنية",
    quickLinks: "روابط سريعة",
    connectWithUs: "تواصل معنا",
    footerDescription: "نرتقي بالأعمال من خلال الخدمات والخبرات المهنية.",
    allRightsReserved: "جميع الحقوق محفوظة.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};