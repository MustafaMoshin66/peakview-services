import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-crystal-accent border-t border-crystal-light/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img 
              src="/lovable-uploads/f707d378-8f0e-4adb-bf79-8964d18ae477.png" 
              alt="CrystalPeak Services" 
              className="h-36 transition-transform hover:scale-105" // Changed from h-12 to h-36 (3x bigger)
            />
            <p className="text-crystal-light/80 text-sm leading-relaxed text-center md:text-left max-w-xs">
              Elevating businesses through professional services and expertise.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-crystal-primary font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {["about", "services", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-crystal-light/70 hover:text-crystal-primary transition-colors capitalize text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-crystal-primary font-semibold mb-6 text-lg">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-5">
              <a
                href="https://instagram.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-light/70 hover:text-crystal-primary transition-all transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-light/70 hover:text-crystal-primary transition-all transform hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/company/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crystal-light/70 hover:text-crystal-primary transition-all transform hover:scale-110"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-crystal-light/10 mt-10 pt-6">
          <p className="text-crystal-light/60 text-sm text-center">
            &copy; {new Date().getFullYear()} CrystalPeak Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};