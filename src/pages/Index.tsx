import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Building2, GraduationCap, Languages } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-crystal-light to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <img src="/logo.png" alt="CrystalPeak Services" className="mx-auto h-32 mb-8 animate-fadeIn" />
          <h1 className="text-4xl md:text-5xl font-bold text-crystal-primary mb-4 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Welcome to CrystalPeak Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            Elevating businesses through professional services and expertise
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-crystal-primary text-center mb-12">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
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

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-white/50 to-crystal-light/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-crystal-primary text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Languages className="w-12 h-12 text-crystal-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-crystal-secondary">Interpretation</h3>
              <p className="text-gray-600">
                Professional interpretation services for businesses and organizations,
                ensuring clear communication across languages.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Building2 className="w-12 h-12 text-crystal-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-crystal-secondary">Business Consulting</h3>
              <p className="text-gray-600">
                Strategic guidance and solutions to help your business grow and
                overcome challenges.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <GraduationCap className="w-12 h-12 text-crystal-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-crystal-secondary">Professional Training</h3>
              <p className="text-gray-600">
                Comprehensive training programs designed to enhance skills and
                professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-crystal-primary text-center mb-12">
            Contact Us
          </h2>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;