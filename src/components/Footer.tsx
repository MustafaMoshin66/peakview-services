import { Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-sm shadow-lg mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src="/logo.png" alt="CrystalPeak Services" className="h-8 mb-4" />
            <p className="text-gray-600">
              Elevating businesses through professional services and expertise.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-crystal-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["about", "services", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-crystal-secondary hover:text-crystal-primary transition-colors capitalize"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-crystal-primary mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
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
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} CrystalPeak Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};