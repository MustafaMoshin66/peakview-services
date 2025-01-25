import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Instagram, Facebook, Linkedin } from "lucide-react";
import { LanguageSwitcher } from "../LanguageSwitcher";

interface DesktopNavProps {
  isScrolled: boolean;
  services: Array<{ name: string; path: string; }>;
  handleNavigation: (id: string) => void;
  translations: any;
}

export const DesktopNav = ({ 
  isScrolled, 
  services, 
  handleNavigation,
  translations: t
}: DesktopNavProps) => {
  const location = useLocation();

  return (
    <div className="hidden lg:flex items-center space-x-8">
      <button
        onClick={() => handleNavigation("about")}
        className={`hover:text-crystal-primary transition-colors capitalize font-medium ${
          isScrolled ? 'text-crystal-accent' : 'text-white'
        }`}
      >
        {t.about}
      </button>
      
      <div className="relative group">
        <button
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
        onClick={() => handleNavigation("contact")}
        className={`hover:text-crystal-primary transition-colors capitalize font-medium ${
          isScrolled ? 'text-crystal-accent' : 'text-white'
        }`}
      >
        {t.contact}
      </button>
      
      <div className="flex items-center space-x-6 ml-8 border-l pl-8 border-white/20">
        <LanguageSwitcher />
        <SocialLinks isScrolled={isScrolled} />
      </div>
    </div>
  );
};

const SocialLinks = ({ isScrolled }: { isScrolled: boolean }) => (
  <div className="flex items-center space-x-4">
    <a
      href="https://linkedin.com/company/crystalpeak"
      target="_blank"
      rel="noopener noreferrer"
      className={`${isScrolled ? 'text-crystal-accent' : 'text-white'} hover:text-crystal-primary transition-colors`}
      aria-label="Visit our LinkedIn page"
    >
      <Linkedin className="w-5 h-5" />
    </a>
    <a
      href="https://instagram.com/crystalpeak"
      target="_blank"
      rel="noopener noreferrer"
      className={`${isScrolled ? 'text-crystal-accent' : 'text-white'} hover:text-crystal-primary transition-colors`}
      aria-label="Visit our Instagram page"
    >
      <Instagram className="w-5 h-5" />
    </a>
    <a
      href="https://facebook.com/crystalpeak"
      target="_blank"
      rel="noopener noreferrer"
      className={`${isScrolled ? 'text-crystal-accent' : 'text-white'} hover:text-crystal-primary transition-colors`}
      aria-label="Visit our Facebook page"
    >
      <Facebook className="w-5 h-5" />
    </a>
  </div>
);