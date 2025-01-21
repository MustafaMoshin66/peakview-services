import { Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-crystal-light/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-crystal-accent">
                About Us
              </h2>
              <p className="text-lg text-crystal-secondary leading-relaxed">
                CrystalPeak Services bridges cultures and businesses through excellence 
                in construction, consulting, and interpretation services. Our expert team 
                brings precision and dedication to every project.
              </p>
              <Link to="/about">
                <Button className="bg-crystal-primary hover:bg-crystal-secondary text-white transition-all">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <StatCard number="500+" label="Projects Completed" />
              <StatCard number="98%" label="Client Satisfaction" />
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