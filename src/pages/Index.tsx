import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageProvider>
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </LanguageProvider>
    </div>
  );
};

export default Index;