import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Languages, Globe2, MessageSquare, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InterpretationService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-crystal-light via-white to-crystal-light/50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-16">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-crystal-primary/10 rounded-full mb-8 animate-fadeIn">
              <Languages className="w-12 h-12 text-crystal-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-crystal-accent mb-6 animate-fadeIn">
              Professional Interpretation Services
            </h1>
            <p className="text-xl text-crystal-secondary max-w-2xl mx-auto mb-8 animate-fadeIn">
              Break language barriers with our expert interpretation services for business and organizations.
            </p>
            <Button 
              className="bg-crystal-primary hover:bg-crystal-secondary text-white animate-fadeIn"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Globe2 className="w-12 h-12 text-crystal-primary mb-4" />,
                title: "Global Coverage",
                description: "Professional interpretation services in over 50 languages with native speakers."
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-crystal-primary mb-4" />,
                title: "Real-time Translation",
                description: "Instant interpretation for meetings, conferences, and business negotiations."
              },
              {
                icon: <Users className="w-12 h-12 text-crystal-primary mb-4" />,
                title: "Cultural Expertise",
                description: "Cultural context and nuance understanding for accurate communication."
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2 text-crystal-accent">{service.title}</h3>
                <p className="text-crystal-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-crystal-accent text-center mb-12">
            Why Choose Our Interpretation Services
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              "Certified Professional Interpreters",
              "24/7 Availability",
              "Industry-Specific Expertise",
              "Advanced Technology Integration",
              "Quality Assurance Guarantee"
            ].map((feature, index) => (
              <div 
                key={feature}
                className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-crystal-primary flex-shrink-0" />
                <span className="text-crystal-accent font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-crystal-primary/10 to-crystal-light p-12 rounded-3xl text-center">
            <h2 className="text-3xl font-bold text-crystal-accent mb-6">
              Need Professional Interpretation Services?
            </h2>
            <p className="text-xl text-crystal-secondary mb-8 max-w-2xl mx-auto">
              Connect with our team to discuss your interpretation needs and get a customized solution.
            </p>
            <Link to="/#contact">
              <Button className="bg-crystal-primary hover:bg-crystal-secondary text-white inline-flex items-center">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InterpretationService;