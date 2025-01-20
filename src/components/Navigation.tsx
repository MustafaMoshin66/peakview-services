import { useState, useEffect, useRef } from "react";
import { Menu, X, Instagram, Facebook, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { translations, language } = useLanguage();
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const services = [
    { name: t.interpretation, path: "/services/interpretation" },
    { name: t.businessConsulting, path: "/services/consulting" },
    { name: t.professionalTraining, path: "/services/training" },
  ];

  return (
    <nav className="fixed w-full bg-crystal-accent/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full transform -translate-x-2" />
              <img 
                src="/lovable-uploads/f707d378-8f0e-4adb-bf79-8964d18ae477.png" 
                alt="CrystalPeak Logo" 
                className="h-16 w-16 transition-transform hover:scale-105 relative z-10"
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-crystal-light hover:text-crystal-primary transition-colors capitalize font-medium"
            >
              {t.about}
            </button>
            
            {/* Services Dropdown */}
            <div className="relative group" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-crystal-light hover:text-crystal-primary transition-colors capitalize font-medium group"
              >
                <span>{t.services}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-crystal-accent rounded-lg shadow-lg py-2">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-crystal-light hover:bg-crystal-secondary/20 hover:text-crystal-primary transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="text-crystal-light hover:text-crystal-primary transition-colors capitalize font-medium"
            >
              {t.contact}
            </button>
            
            <div className="flex items-center space-x-6 ml-8 border-l pl-8 border-crystal-light/20">
              <LanguageSwitcher />
              <a
                href="https://instagram.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-light hover:text-crystal-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-light hover:text-crystal-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-crystal-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fadeIn bg-crystal-accent">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-crystal-light hover:text-crystal-primary transition-colors capitalize font-medium"
              >
                {t.about}
              </button>
              
              {/* Mobile Services Links */}
              <div className="space-y-3 pl-4">
                <p className="text-crystal-light font-medium">{t.services}:</p>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block text-crystal-light hover:text-crystal-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <button
                onClick={() => scrollToSection("contact")}
                className="text-crystal-light hover:text-crystal-primary transition-colors capitalize font-medium"
              >
                {t.contact}
              </button>
              
              <div className="flex items-center space-x-6 pt-4 border-t border-crystal-light/20">
                <LanguageSwitcher />
                <a
                  href="https://instagram.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crystal-light hover:text-crystal-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crystal-light hover:text-crystal-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};