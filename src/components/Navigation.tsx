import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <img src="/logo.png" alt="CrystalPeak Services" className="h-8" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["about", "services", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-crystal-primary hover:text-crystal-secondary transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {["about", "services", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-crystal-primary hover:text-crystal-secondary transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};