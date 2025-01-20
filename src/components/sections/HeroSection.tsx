import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
        <div className="text-center space-y-6">
          <h2 className="text-xl md:text-2xl text-crystal-primary font-medium tracking-wider uppercase opacity-0 animate-fadeIn"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Welcome to
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 opacity-0 animate-fadeIn leading-tight"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <span className="bg-gradient-to-r from-crystal-primary to-crystal-secondary bg-clip-text text-transparent">
              CrystalPeak Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto mb-12 opacity-0 animate-fadeIn leading-relaxed"
             style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            Elevating businesses through professional services and expertise
          </p>
          <Button 
            className="bg-crystal-primary hover:bg-crystal-secondary text-white px-10 py-7 text-lg rounded-full transition-all duration-300 transform hover:scale-105 opacity-0 animate-fadeIn shadow-lg hover:shadow-xl"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            onClick={scrollToServices}
          >
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};