import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building, CheckCircle2, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Construction = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-crystal-light via-white to-crystal-light/50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-16">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-crystal-primary/10 rounded-full mb-8 animate-fade-in">
              <Building className="w-12 h-12 text-crystal-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-crystal-accent mb-6 animate-fade-in">
              {t('constructionHero')}
            </h1>
            <p className="text-xl text-crystal-secondary max-w-2xl mx-auto mb-8 animate-fade-in">
              {t('constructionSubtitle')}
            </p>
            <Button 
              className="bg-crystal-primary hover:bg-crystal-primary/90 text-white animate-fade-in"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('exploreProjects')}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-crystal-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-crystal-accent">Customized Solutions</h3>
              <p className="text-crystal-secondary">
                Tailored construction services designed to meet your specific project needs and goals.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Users className="w-12 h-12 text-crystal-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-crystal-accent">Expert Team</h3>
              <p className="text-crystal-secondary">
                Our team of professionals brings years of experience and expertise to every project.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Target className="w-12 h-12 text-crystal-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-crystal-accent">Quality Assurance</h3>
              <p className="text-crystal-secondary">
                We ensure the highest standards of quality and safety in all our construction projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-crystal-accent text-center mb-12">
            Our Recent Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Residential Complex",
                description: "A modern residential complex designed for comfort and sustainability.",
                image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
              },
              {
                title: "Commercial Building",
                description: "A state-of-the-art commercial building that meets the needs of modern businesses.",
                image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
              },
              {
                title: "Infrastructure Project",
                description: "An infrastructure project that enhances connectivity and accessibility.",
                image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
              },
              {
                title: "Renovation Project",
                description: "A renovation project that revitalizes and modernizes existing structures.",
                image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80",
              },
            ].map((project, index) => (
              <div 
                key={project.title}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-crystal-accent mb-2">{project.title}</h3>
                  <p className="text-crystal-secondary">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Construction;
