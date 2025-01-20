import { Link } from "react-router-dom";
import { Building2, GraduationCap, Languages } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Languages,
      title: "Interpretation Services",
      description: "Professional interpretation services for businesses and organizations, ensuring clear communication across languages.",
      path: "/services/interpretation"
    },
    {
      icon: Building2,
      title: "Business Consulting",
      description: "Strategic guidance and solutions to help your business grow and overcome challenges.",
      path: "/services/consulting"
    },
    {
      icon: GraduationCap,
      title: "Professional Training",
      description: "Comprehensive training programs designed to enhance skills and professional development.",
      path: "/services/training"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-crystal-accent text-center mb-16">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.path} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  path 
}: { 
  icon: typeof Languages; 
  title: string; 
  description: string; 
  path: string;
}) => (
  <Link 
    to={path} 
    className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
  >
    <div className="p-8">
      <Icon className="w-12 h-12 text-crystal-primary mb-6 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-semibold mb-4 text-crystal-accent">{title}</h3>
      <p className="text-crystal-secondary">{description}</p>
    </div>
    <div className="h-2 bg-gradient-to-r from-crystal-primary to-crystal-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
  </Link>
);