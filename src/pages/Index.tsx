import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Building2, GraduationCap, Languages, Trophy, Users, Target, MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-crystal-light via-white to-crystal-light/50">
      <Navigation />
      
      {/* Hero Section with Animation */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-crystal-accent mb-6 opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Welcome to 
            <span className="block mt-2 bg-gradient-to-r from-crystal-primary via-crystal-accent to-crystal-secondary bg-clip-text text-transparent">
              CrystalPeak Services
            </span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-crystal-secondary max-w-2xl mx-auto opacity-0 animate-fadeIn"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Elevating businesses through professional services and expertise
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-crystal-accent text-center mb-12">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto text-crystal-secondary space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <p>
              At CrystalPeak Services, we believe in delivering excellence through clarity
              and precision. Our team of experts brings years of experience and dedication
              to every project we undertake.
            </p>
            <p>
              Founded on the principles of professionalism and innovation, we strive to
              help businesses reach new heights through our comprehensive range of services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-crystal-accent text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crystal-primary/10 rounded-full mb-6">
                <Trophy className="w-8 h-8 text-crystal-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-crystal-accent mb-2">500+</h3>
              <p className="text-crystal-secondary">Successful Projects</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crystal-primary/10 rounded-full mb-6">
                <Users className="w-8 h-8 text-crystal-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-crystal-accent mb-2">1000+</h3>
              <p className="text-crystal-secondary">Happy Clients</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-crystal-primary/10 rounded-full mb-6">
                <Target className="w-8 h-8 text-crystal-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-crystal-accent mb-2">98%</h3>
              <p className="text-crystal-secondary">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-white/50 to-crystal-light/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-crystal-accent text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Languages className="w-12 h-12 text-crystal-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-crystal-accent">Interpretation</h3>
              <p className="text-crystal-secondary">
                Professional interpretation services for businesses and organizations,
                ensuring clear communication across languages.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Building2 className="w-12 h-12 text-crystal-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-crystal-accent">Business Consulting</h3>
              <p className="text-crystal-secondary">
                Strategic guidance and solutions to help your business grow and
                overcome challenges.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <GraduationCap className="w-12 h-12 text-crystal-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-crystal-accent">Professional Training</h3>
              <p className="text-crystal-secondary">
                Comprehensive training programs designed to enhance skills and
                professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-t from-crystal-light/30 to-white/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-crystal-accent text-center mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-crystal-accent mb-6">Get in Touch</h3>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-crystal-accent mb-6">Our Information</h3>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-crystal-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-crystal-accent mb-1">Location</h4>
                    <p className="text-crystal-secondary">123 Business Street<br />City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-crystal-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-crystal-accent mb-1">Phone</h4>
                    <p className="text-crystal-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-crystal-primary mt-1" />
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
