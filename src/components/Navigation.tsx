import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { translations, language } = useLanguage();
  const location = useLocation();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

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
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 relative logo-spotlight">
            <img 
              src="/lovable-uploads/f707d378-8f0e-4adb-bf79-8964d18ae477.png" 
              alt="CrystalPeak Logo" 
              className="h-16 w-16 relative z-10 transition-transform hover:scale-105"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`hover:text-crystal-primary transition-colors capitalize font-medium ${
                isScrolled ? 'text-crystal-accent' : 'text-white'
              }`}
            >
              {t.about}
            </button>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 group ${
                  isScrolled ? 'text-crystal-accent' : 'text-white'
                } hover:text-crystal-primary transition-colors capitalize font-medium`}
              >
                <span>{t.services}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-crystal-accent hover:bg-crystal-light/50 hover:text-crystal-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => scrollToSection("contact")}
              className={`hover:text-crystal-primary transition-colors capitalize font-medium ${
                isScrolled ? 'text-crystal-accent' : 'text-white'
              }`}
            >
              {t.contact}
            </button>
            
            <div className="flex items-center space-x-6 ml-8 border-l pl-8 border-white/20">
              <LanguageSwitcher />
              <div className="flex items-center space-x-4">
                <a
                  href="https://instagram.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isScrolled ? 'text-crystal-accent' : 'text-white'} hover:text-crystal-primary transition-colors`}
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isScrolled ? 'text-crystal-accent' : 'text-white'} hover:text-crystal-primary transition-colors`}
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              className={`${isScrolled ? 'text-crystal-accent' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 animate-fadeIn bg-white/95 backdrop-blur-md mt-4 rounded-xl shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-crystal-accent hover:text-crystal-primary transition-colors capitalize font-medium px-4"
              >
                {t.about}
              </button>
              
              {/* Mobile Services Links */}
              <div className="space-y-2 px-4">
                <p className="text-crystal-accent font-medium">{t.services}:</p>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block text-crystal-secondary hover:text-crystal-primary transition-colors pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <button
                onClick={() => scrollToSection("contact")}
                className="text-crystal-accent hover:text-crystal-primary transition-colors capitalize font-medium px-4"
              >
                {t.contact}
              </button>
              
              <div className="flex items-center space-x-6 pt-4 mt-4 border-t border-crystal-light/20 px-4">
                <a
                  href="https://instagram.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crystal-accent hover:text-crystal-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crystal-accent hover:text-crystal-primary transition-colors"
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