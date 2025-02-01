import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-crystal-light/20 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-crystal-accent text-center mb-16">
          {t('contactUs')}
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-crystal-accent">{t('getInTouch')}</h3>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-crystal-accent">{t('contactUs')}</h3>
            <div className="bg-white rounded-xl shadow-xl p-8 space-y-8">
              <ContactInfo 
                icon={MapPin} 
                title="Location" 
                content={["123 Business Street", "City, State 12345"]} 
              />
              <ContactInfo 
                icon={Phone} 
                title="Phone" 
                content={["+1 (555) 123-4567"]} 
              />
              <ContactInfo 
                icon={Mail} 
                title="Email" 
                content={["contact@crystalpeak.com"]} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ 
  icon: Icon, 
  title, 
  content 
}: { 
  icon: typeof MapPin; 
  title: string; 
  content: string[]; 
}) => (
  <div className="flex items-start space-x-4">
    <div className="bg-crystal-light/50 p-3 rounded-lg">
      <Icon className="w-6 h-6 text-crystal-primary" />
    </div>
    <div>
      <h4 className="font-semibold text-crystal-accent mb-2">{title}</h4>
      {content.map((line, index) => (
        <p key={index} className="text-crystal-secondary">{line}</p>
      ))}
    </div>
  </div>
);