import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Logo } from "./navigation/Logo";
import { DesktopNav } from "./navigation/DesktopNav";
import { MobileNav } from "./navigation/MobileNav";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (id: string) => {
    console.log('Navigation triggered:', id);
    if (id === 'about') {
      navigate('/about');
      return;
    }
    
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const services = [
    { name: t('interpretation'), path: "/services/interpretation" },
    { name: t('businessConsulting'), path: "/services/consulting" },
    { name: t('construction'), path: "/services/construction" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          <DesktopNav 
            isScrolled={isScrolled}
            services={services}
            handleNavigation={handleNavigation}
            translations={t}
          />
          <MobileNav 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isScrolled={isScrolled}
            services={services}
            handleNavigation={handleNavigation}
            translations={t}
          />
        </div>
      </div>
    </nav>
  );
};