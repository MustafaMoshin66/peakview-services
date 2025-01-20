import { useState } from "react";
import { Menu, X, Instagram, Facebook, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const services = [
    { name: "Interpretation", path: "/services/interpretation" },
    { name: "Business Consulting", path: "/services/consulting" },
    { name: "Professional Training", path: "/services/training" },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f707d378-8f0e-4adb-bf79-8964d18ae477.png" 
              alt="CrystalPeak Logo" 
              className="h-16 w-16 transition-transform hover:scale-105"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("about")}
              className="text-crystal-secondary hover:text-crystal-primary transition-colors capitalize font-medium text-lg"
            >
              About
            </button>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-crystal-secondary hover:text-crystal-primary transition-colors capitalize font-medium text-lg group"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-2 text-crystal-secondary hover:bg-crystal-light hover:text-crystal-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => scrollToSection("contact")}
              className="text-crystal-secondary hover:text-crystal-primary transition-colors capitalize font-medium text-lg"
            >
              Contact
            </button>
            
            <div className="flex items-center space-x-6 ml-8 border-l pl-8 border-crystal-light">
              <a
                href="https://instagram.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-secondary hover:text-crystal-primary transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-secondary hover:text-crystal-primary transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-crystal-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-crystal-secondary hover:text-crystal-primary transition-colors capitalize font-medium text-lg"
              >
                About
              </button>
              
              {/* Mobile Services Links */}
              <div className="space-y-4 pl-4">
                <p className="text-crystal-secondary font-medium text-lg">Services:</p>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block text-crystal-secondary hover:text-crystal-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <button
                onClick={() => scrollToSection("contact")}
                className="text-crystal-secondary hover:text-crystal-primary transition-colors capitalize font-medium text-lg"
              >
                Contact
              </button>
              
              <div className="flex space-x-6 pt-6 border-t border-crystal-light">
                <a
                  href="https://instagram.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crystal-secondary hover:text-crystal-primary transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crystal-secondary hover:text-crystal-primary transition-colors"
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