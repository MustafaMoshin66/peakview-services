import { Link } from "react-router-dom";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";
import { LanguageSwitcher } from "../LanguageSwitcher";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isScrolled: boolean;
  services: Array<{ name: string; path: string; }>;
  scrollToSection: (id: string) => void;
  translations: any;
}

export const MobileNav = ({
  isOpen,
  setIsOpen,
  isScrolled,
  services,
  scrollToSection,
  translations: t
}: MobileNavProps) => (
  <div className="lg:hidden">
    <div className="flex items-center space-x-4">
      <LanguageSwitcher />
      <button
        className={`${isScrolled ? 'text-crystal-accent' : 'text-white'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>

    {isOpen && (
      <div className="lg:hidden py-6 animate-fadeIn bg-white/95 backdrop-blur-md mt-4 rounded-xl shadow-lg">
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => {
              scrollToSection("about");
              setIsOpen(false);
            }}
            className="text-crystal-accent hover:text-crystal-primary transition-colors capitalize font-medium px-4"
          >
            {t.about}
          </button>
          
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
            onClick={() => {
              scrollToSection("contact");
              setIsOpen(false);
            }}
            className="text-crystal-accent hover:text-crystal-primary transition-colors capitalize font-medium px-4"
          >
            {t.contact}
          </button>
          
          <div className="flex items-center space-x-6 pt-4 mt-4 border-t border-crystal-light/20 px-4">
            <a
              href="https://linkedin.com/company/crystalpeak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crystal-accent hover:text-crystal-primary transition-colors"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/crystalpeak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crystal-accent hover:text-crystal-primary transition-colors"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/crystalpeak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-crystal-accent hover:text-crystal-primary transition-colors"
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