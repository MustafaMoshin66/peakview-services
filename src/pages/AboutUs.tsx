import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Target, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-crystal-accent/95 z-0"></div>
        <div 
          className="absolute inset-0 z-0 opacity-20" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
              Our Story
            </h1>
            <p className="text-xl text-white/90 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Building bridges between cultures, businesses, and dreams since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-crystal-accent">
                  Our Mission
                </h2>
                <p className="text-lg text-crystal-secondary leading-relaxed">
                  At CrystalPeak Services, we're dedicated to delivering excellence through 
                  clarity and precision. Our mission is to provide exceptional services that 
                  enable businesses to thrive in the global marketplace through clear communication, 
                  strategic guidance, and reliable solutions.
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-crystal-accent">
                  Our Vision
                </h2>
                <p className="text-lg text-crystal-secondary leading-relaxed">
                  To be the leading provider of comprehensive business services, known for 
                  excellence in construction, consulting, and interpretation solutions worldwide.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-crystal-primary/20 to-crystal-secondary/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80" 
                alt="Modern office space" 
                className="rounded-2xl shadow-2xl relative z-10 w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-crystal-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-crystal-accent text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Trophy className="w-8 h-8 text-crystal-primary" />}
              title="Excellence"
              description="We strive for excellence in every project we undertake"
            />
            <ValueCard 
              icon={<Users className="w-8 h-8 text-crystal-primary" />}
              title="Collaboration"
              description="Working together to achieve extraordinary results"
            />
            <ValueCard 
              icon={<Target className="w-8 h-8 text-crystal-primary" />}
              title="Innovation"
              description="Embracing new ideas and creative solutions"
            />
            <ValueCard 
              icon={<Heart className="w-8 h-8 text-crystal-primary" />}
              title="Integrity"
              description="Building trust through honest and ethical practices"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-crystal-accent text-center mb-16">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember 
              image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              name="Sarah Johnson"
              position="CEO & Founder"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80"
              name="Michael Chen"
              position="Head of Operations"
            />
            <TeamMember 
              image="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80"
              name="David Smith"
              position="Chief Strategy Officer"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center transform hover:-translate-y-1">
    <div className="mb-4 inline-block">{icon}</div>
    <h3 className="text-xl font-bold text-crystal-accent mb-2">{title}</h3>
    <p className="text-crystal-secondary">{description}</p>
  </div>
);

const TeamMember = ({ image, name, position }: { image: string; name: string; position: string }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <img 
      src={image} 
      alt={name} 
      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-crystal-accent/90 to-transparent p-6">
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-white/90">{position}</p>
    </div>
  </div>
);

export default AboutUs;