import { useState } from "react";
import { Menu, X, Instagram, Facebook, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { translations, language } = useLanguage();
  const location = useLocation();
  const t = translations[language];

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const services = [
    { name: t.interpretation, path: "/services/interpretation" },
    { name: t.businessConsulting, path: "/services/consulting" },
    { name: t.professionalTraining, path: "/services/training" },
  ];

  return (
    <nav className={`fixed w-full bg-[#1A1F2C]/95 backdrop-blur-sm z-50 ${language === 'ar' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="relative flex justify-between items-center h-16">
          {/* Left Navigation Items */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#E94E51] transition-colors capitalize font-medium"
            >
              {t.about}
            </button>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-[#E94E51] transition-colors capitalize font-medium group"
              >
                <span>{t.services}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#1A1F2C] rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-white hover:bg-[#E94E51]/20 hover:text-[#E94E51] transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Centered Logo with Language Label */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E94E51]/10 -z-10 rounded-[30px] w-[100px] transform -translate-x-[20%]"></div>
              <Link to="/" className="block">
                <img 
                  src="/lovable-uploads/7623fd77-6789-4251-a030-0cbde0257537.png" 
                  alt="CrystalPeak Logo" 
                  className="h-12 w-12 transition-transform hover:scale-105"
                />
              </Link>
            </div>
            <span className="text-white font-medium">{t.currentLang}</span>
          </div>

          {/* Right Navigation Items */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#E94E51] transition-colors capitalize font-medium"
            >
              {t.contact}
            </button>
            
            <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-white/20">
              <LanguageSwitcher />
              <a
                href="https://instagram.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E94E51] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E94E51] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-[#E94E51] transition-colors capitalize font-medium"
              >
                {t.about}
              </button>
              
              {/* Mobile Services Links */}
              <div className="space-y-4 pl-4">
                <p className="text-white font-medium">{t.services}:</p>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block text-white hover:text-[#E94E51] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-[#E94E51] transition-colors capitalize font-medium"
              >
                {t.contact}
              </button>
              
              <div className="flex items-center space-x-6 pt-6 border-t border-white/20">
                <LanguageSwitcher />
                <a
                  href="https://instagram.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E94E51] transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E94E51] transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};