import { Trophy, Users } from "lucide-react";

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
                At CrystalPeak Services, we believe in delivering excellence through clarity
                and precision. Our team of experts brings years of experience and dedication
                to every project we undertake.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <StatCard number="500+" label="Projects Completed" />
              <StatCard number="1000+" label="Happy Clients" />
              <StatCard number="50+" label="Team Members" />
              <StatCard number="98%" label="Satisfaction Rate" />
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
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-1">
    <h3 className="text-3xl font-bold text-crystal-primary mb-2">{number}</h3>
    <p className="text-crystal-secondary">{label}</p>
  </div>
);