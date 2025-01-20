import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Building2, GraduationCap, Languages, Trophy, Users, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LanguageProvider>
        <Navigation />
      </LanguageProvider>
      
      {/* Hero Section with Parallax Effect */}
      <section 
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(26, 31, 44, 0.8), rgba(26, 31, 44, 0.8)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80")',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-crystal-accent/20 to-crystal-accent/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            Welcome to 
            <span className="block mt-4 bg-gradient-to-r from-crystal-primary to-crystal-secondary bg-clip-text text-transparent">
              CrystalPeak Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 opacity-0 animate-fadeIn"
             style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Elevating businesses through professional services and expertise
          </p>
          <Button 
            className="bg-crystal-primary hover:bg-crystal-secondary text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 opacity-0 animate-fadeIn shadow-lg hover:shadow-xl"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Services
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-crystal-light/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-crystal-accent">
                  About Us
                </h2>
                <p className="text-lg text-crystal-secondary leading-relaxed">
                  At CrystalPeak Services, we believe in delivering excellence through clarity
                  and precision. Our team of experts brings years of experience and dedication
                  to every project we undertake.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
                  <h3 className="text-3xl font-bold text-crystal-primary mb-2">500+</h3>
                  <p className="text-crystal-secondary">Projects Completed</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
                  <h3 className="text-3xl font-bold text-crystal-primary mb-2">1000+</h3>
                  <p className="text-crystal-secondary">Happy Clients</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
                  <h3 className="text-3xl font-bold text-crystal-primary mb-2">50+</h3>
                  <p className="text-crystal-secondary">Team Members</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
                  <h3 className="text-3xl font-bold text-crystal-primary mb-2">98%</h3>
                  <p className="text-crystal-secondary">Satisfaction Rate</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-crystal-primary/20 to-crystal-secondary/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[600px] relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-crystal-accent text-center mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link 
              to="/services/interpretation" 
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <Languages className="w-12 h-12 text-crystal-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4 text-crystal-accent">Interpretation Services</h3>
                <p className="text-crystal-secondary">
                  Professional interpretation services for businesses and organizations,
                  ensuring clear communication across languages.
                </p>
              </div>
              <div className="h-2 bg-gradient-to-r from-crystal-primary to-crystal-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            
            <Link 
              to="/services/consulting" 
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <Building2 className="w-12 h-12 text-crystal-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4 text-crystal-accent">Business Consulting</h3>
                <p className="text-crystal-secondary">
                  Strategic guidance and solutions to help your business grow and
                  overcome challenges.
                </p>
              </div>
              <div className="h-2 bg-gradient-to-r from-crystal-primary to-crystal-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>

            <Link 
              to="/services/training" 
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-8">
                <GraduationCap className="w-12 h-12 text-crystal-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-4 text-crystal-accent">Professional Training</h3>
                <p className="text-crystal-secondary">
                  Comprehensive training programs designed to enhance skills and
                  professional development.
                </p>
              </div>
              <div className="h-2 bg-gradient-to-r from-crystal-primary to-crystal-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-crystal-light/20 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-crystal-accent text-center mb-16">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-crystal-accent">Get in Touch</h3>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-crystal-accent">Our Information</h3>
              <div className="bg-white rounded-xl shadow-xl p-8 space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-crystal-light/50 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-crystal-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-crystal-accent mb-2">Location</h4>
                    <p className="text-crystal-secondary">123 Business Street<br />City, State 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-crystal-light/50 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-crystal-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-crystal-accent mb-1">Phone</h4>
                    <p className="text-crystal-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-crystal-light/50 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-crystal-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-crystal-accent mb-1">Email</h4>
                    <p className="text-crystal-secondary">contact@crystalpeak.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;