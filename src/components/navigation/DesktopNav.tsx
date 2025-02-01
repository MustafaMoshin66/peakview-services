import { Link } from "react-router-dom";
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
  const navLinkClass = `relative group-hover:text-crystal-primary transition-colors capitalize font-medium ${
    isScrolled ? 'text-crystal-accent' : 'text-white'
  } after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-crystal-primary after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <div className="hidden lg:flex items-center space-x-8">
      <button
        onClick={() => handleNavigation("about")}
        className={navLinkClass}
      >
        {t('about')}
      </button>
      
      <div className="relative group">
        <button
          className={`flex items-center space-x-2 group ${
            isScrolled ? 'text-crystal-accent' : 'text-white'
          } hover:text-crystal-primary transition-colors capitalize font-medium`}
        >
          <span>{t('services')}</span>
          <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
        </button>
        
        <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-gray-100">
          {services.map((service, index) => (
            <Link
              key={service.path}
              to={service.path}
              className={`block px-6 py-3 text-crystal-accent hover:bg-crystal-light/30 hover:text-crystal-primary transition-colors ${
                index !== services.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
      
      <button
        onClick={() => handleNavigation("contact")}
        className={navLinkClass}
      >
        {t('contact')}
      </button>
      
      <div className="flex items-center space-x-8 ml-8 border-l pl-8 border-white/20">
        <LanguageSwitcher />
        <SocialLinks isScrolled={isScrolled} />
      </div>
    </div>
  );
};

const SocialLinks = ({ isScrolled }: { isScrolled: boolean }) => {
  const socialLinkClass = `${
    isScrolled ? 'text-crystal-accent' : 'text-white'
  } hover:text-crystal-primary transition-colors transform hover:scale-110 duration-200`;

  return (
    <div className="flex items-center space-x-6">
      <a
        href="https://linkedin.com/company/crystalpeak"
        target="_blank"
        rel="noopener noreferrer"
        className={socialLinkClass}
        aria-label="Visit our LinkedIn page"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://instagram.com/crystalpeak"
        target="_blank"
        rel="noopener noreferrer"
        className={socialLinkClass}
        aria-label="Visit our Instagram page"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://facebook.com/crystalpeak"
        target="_blank"
        rel="noopener noreferrer"
        className={socialLinkClass}
        aria-label="Visit our Facebook page"
      >
        <Facebook className="w-5 h-5" />
      </a>
    </div>
  );
};