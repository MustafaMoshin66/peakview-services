import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { translations, language } = useLanguage();
  const t = translations[language];

  return (
    <footer className={`bg-white/90 backdrop-blur-sm shadow-lg mt-20 ${language === 'ar' ? 'font-arabic' : ''}`}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/7623fd77-6789-4251-a030-0cbde0257537.png" 
              alt="CrystalPeak Services" 
              className="h-16 mb-6"
            />
            <p className="text-[#1A1F2C] text-center md:text-left">
              {t.footerDescription}
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#E94E51] mb-6">{t.quickLinks}</h3>
            <ul className="space-y-4">
              {["about", "services", "contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[#1A1F2C] hover:text-[#E94E51] transition-colors capitalize"
                  >
                    {t[item as keyof typeof t]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#E94E51] mb-6">{t.connectWithUs}</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://instagram.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1F2C] hover:text-[#E94E51] transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://facebook.com/crystalpeak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1F2C] hover:text-[#E94E51] transition-colors"
              >
                <Facebook className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#1A1F2C]/10 mt-12 pt-8 text-center text-[#1A1F2C]">
          <p>&copy; {new Date().getFullYear()} CrystalPeak Services. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
};