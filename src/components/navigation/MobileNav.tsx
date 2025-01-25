import { Link } from "react-router-dom";
import { Menu, X, Instagram, Facebook, Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useState } from "react";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isScrolled: boolean;
  services: Array<{ name: string; path: string; }>;
  handleNavigation: (id: string) => void;
  translations: any;
}

export const MobileNav = ({
  isOpen,
  setIsOpen,
  isScrolled,
  services,
  handleNavigation,
  translations: t
}: MobileNavProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const menuButtonClass = `${
    isScrolled ? 'text-crystal-accent' : 'text-white'
  } p-2 hover:text-crystal-primary transition-colors`;

  const menuItemClass = "w-full text-crystal-accent hover:text-crystal-primary transition-colors capitalize font-medium px-4 py-3 text-left rounded-lg hover:bg-crystal-light/20";

  return (
    <div className="lg:hidden">
      <div className="flex items-center space-x-4">
        <LanguageSwitcher />
        <button
          className={menuButtonClass}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-x-0 top-[4rem] p-4 animate-fadeIn bg-white/95 backdrop-blur-md shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => {
                handleNavigation("about");
                setIsOpen(false);
              }}
              className={menuItemClass}
            >
              {t.about}
            </button>
            
            <div className="space-y-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between text-crystal-accent hover:text-crystal-primary transition-colors capitalize font-medium px-4 py-3 rounded-lg hover:bg-crystal-light/20"
              >
                <span>{t.services}</span>
                {isServicesOpen ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>
              
              {isServicesOpen && (
                <div className="pl-4 space-y-1 animate-fadeIn">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-crystal-secondary hover:text-crystal-primary transition-colors px-4 py-3 rounded-lg hover:bg-crystal-light/20"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <button
              onClick={() => {
                handleNavigation("contact");
                setIsOpen(false);
              }}
              className={menuItemClass}
            >
              {t.contact}
            </button>
            
            <div className="flex items-center justify-center space-x-8 pt-4 mt-4 border-t border-crystal-light/20">
              <a
                href="https://linkedin.com/company/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-accent hover:text-crystal-primary transition-colors p-2"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-accent hover:text-crystal-primary transition-colors p-2"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-accent hover:text-crystal-primary transition-colors p-2"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};