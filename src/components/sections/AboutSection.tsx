import { Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-crystal-light/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-crystal-accent">
                {t('aboutUs')}
              </h2>
              <p className="text-lg text-crystal-secondary leading-relaxed">
                {t('aboutDescription')}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <StatCard number="500+" label={t('projectsCompleted')} />
              <StatCard number="98%" label={t('clientSatisfaction')} />
              <StatCard number="25+" label={t('countriesServed')} />
              <StatCard number="150+" label={t('teamMembers')} />
            </div>

            <div className="text-center md:text-left pt-4">
              <Link to="/about">
                <Button className="bg-crystal-primary hover:bg-crystal-secondary text-white transition-all">
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-crystal-primary/20 to-crystal-secondary/20 rounded-2xl transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80" 
              alt="Team collaboration" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px] relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
    <h3 className="text-3xl font-bold text-crystal-primary mb-2">{number}</h3>
    <p className="text-crystal-secondary">{label}</p>
  </div>
);