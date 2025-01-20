import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Building2, BarChart2, TrendingUp, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BusinessConsulting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-crystal-light via-white to-crystal-light/50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 pt-16">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-crystal-primary/10 rounded-full mb-8 animate-fadeIn">
              <Building2 className="w-12 h-12 text-crystal-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-crystal-accent mb-6 animate-fadeIn">
              Strategic Business Consulting
            </h1>
            <p className="text-xl text-crystal-secondary max-w-2xl mx-auto mb-8 animate-fadeIn">
              Transform your business with data-driven insights and expert guidance from industry professionals.
            </p>
            <Button 
              className="bg-crystal-primary hover:bg-crystal-secondary text-white animate-fadeIn"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Solutions
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
                icon: <BarChart2 className="w-12 h-12 text-crystal-primary mb-4" />,
                title: "Market Analysis",
                description: "Comprehensive market research and competitor analysis to identify opportunities and threats."
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-crystal-primary mb-4" />,
                title: "Growth Strategy",
                description: "Develop and implement strategies for sustainable business growth and market expansion."
              },
              {
                icon: <Users className="w-12 h-12 text-crystal-primary mb-4" />,
                title: "Organizational Development",
                description: "Optimize your organizational structure and processes for maximum efficiency."
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-crystal-accent text-center mb-12">
            Our Consulting Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              "Initial Assessment and Goal Setting",
              "Data Collection and Analysis",
              "Strategy Development",
              "Implementation Support",
              "Monitoring and Optimization"
            ].map((step, index) => (
              <div 
                key={step}
                className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-crystal-primary flex-shrink-0" />
                <span className="text-crystal-accent font-medium">{step}</span>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-crystal-secondary mb-8 max-w-2xl mx-auto">
              Let's work together to unlock your business's full potential and achieve sustainable growth.
            </p>
            <Link to="/#contact">
              <Button className="bg-crystal-primary hover:bg-crystal-secondary text-white inline-flex items-center">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessConsulting;