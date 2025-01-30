import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GraduationCap, CheckCircle2, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProfessionalTraining = () => {
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
              <GraduationCap className="w-12 h-12 text-crystal-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-crystal-accent mb-6 animate-fade-in">
              Professional Training Solutions
            </h1>
            <p className="text-xl text-crystal-secondary max-w-2xl mx-auto mb-8 animate-fade-in">
              Elevate your team's potential with our comprehensive training programs designed for modern business needs.
            </p>
            <Button 
              className="bg-crystal-primary hover:bg-crystal-primary/90 text-white animate-fade-in"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Programs
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
              <h3 className="text-xl font-semibold mb-2 text-crystal-accent">Customized Programs</h3>
              <p className="text-crystal-secondary">
                Tailored training solutions designed to meet your specific industry needs and organizational goals.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Users className="w-12 h-12 text-crystal-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-crystal-accent">Expert Trainers</h3>
              <p className="text-crystal-secondary">
                Learn from industry professionals with years of practical experience and proven teaching methods.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Target className="w-12 h-12 text-crystal-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-crystal-accent">Measurable Results</h3>
              <p className="text-crystal-secondary">
                Track progress and ROI with our comprehensive assessment and reporting tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section id="programs" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-crystal-accent text-center mb-12">
            Our Training Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Leadership Development",
                description: "Develop essential leadership skills for the modern workplace",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
              },
              {
                title: "Technical Skills",
                description: "Master the latest tools and technologies in your industry",
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
              },
              {
                title: "Team Building",
                description: "Foster collaboration and strengthen team dynamics",
                image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
              },
              {
                title: "Professional Development",
                description: "Enhance your career with essential business skills",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
              },
            ].map((program, index) => (
              <div 
                key={program.title}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-crystal-accent mb-2">{program.title}</h3>
                  <p className="text-crystal-secondary">{program.description}</p>
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

export default ProfessionalTraining;
