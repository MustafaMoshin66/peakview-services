import { Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-sm shadow-lg mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/f707d378-8f0e-4adb-bf79-8964d18ae477.png" 
              alt="CrystalPeak Services" 
              className="h-16 mb-6"
            />
            <p className="text-crystal-secondary text-center md:text-left">
              Elevating businesses through professional services and expertise.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-crystal-primary mb-6">Quick Links</h3>
            <ul className="space-y-4">
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
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-crystal-primary mb-6">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://instagram.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-secondary hover:text-crystal-primary transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://facebook.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-secondary hover:text-crystal-primary transition-colors"
              >
                <Facebook className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-crystal-light mt-12 pt-8 text-center text-crystal-secondary">
          <p>&copy; {new Date().getFullYear()} CrystalPeak Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};