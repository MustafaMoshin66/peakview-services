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
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/f707d378-8f0e-4adb-bf79-8964d18ae477.png" 
              alt="CrystalPeak Logo" 
              className="h-10 w-10"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-crystal-secondary hover:text-crystal-primary transition-colors capitalize font-medium"
            >
              About
            </button>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 text-crystal-secondary hover:text-crystal-primary transition-colors capitalize font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-crystal-secondary hover:bg-crystal-light hover:text-crystal-primary transition-colors"
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
              className="text-crystal-secondary hover:text-crystal-primary transition-colors capitalize font-medium"
            >
              Contact
            </button>
            
            <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-crystal-light">
              <a
                href="https://instagram.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-secondary hover:text-crystal-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-secondary hover:text-crystal-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-crystal-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-crystal-secondary hover:text-crystal-primary transition-colors capitalize font-medium"
              >
                About
              </button>
              
              {/* Mobile Services Links */}
              <div className="space-y-2 pl-4">
                <p className="text-crystal-secondary font-medium">Services:</p>
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
                className="text-crystal-secondary hover:text-crystal-primary transition-colors capitalize font-medium"
              >
                Contact
              </button>
              
              <div className="flex space-x-4 pt-4 border-t border-crystal-light">
                <a
                  href="https://instagram.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crystal-secondary hover:text-crystal-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/crystalpeak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crystal-secondary hover:text-crystal-primary transition-colors"
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