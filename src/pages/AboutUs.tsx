import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-crystal-light/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-crystal-accent">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fadeIn">Our Story</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: "0.2s" }}>
            Building bridges between cultures, businesses, and dreams.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-crystal-accent">Who We Are</h2>
              <p className="text-lg text-crystal-secondary leading-relaxed">
                CrystalPeak Services was founded with a vision to bridge cultural and business gaps in our increasingly connected world. 
                We understand that success in today's global market requires more than just traditional business acumen – it demands 
                cultural intelligence, precise communication, and innovative solutions.
              </p>
              <p className="text-lg text-crystal-secondary leading-relaxed">
                Our team of experts brings together years of experience in interpretation, business consulting, and construction services, 
                making us your ideal partner for global business success.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-crystal-primary/20 to-crystal-secondary/20 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Our team" 
                className="rounded-2xl shadow-2xl relative z-10 w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-crystal-accent mb-4">Our Mission</h3>
              <p className="text-crystal-secondary">
                To provide exceptional services that enable businesses to thrive in the global marketplace through clear communication, 
                strategic guidance, and reliable solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-crystal-accent mb-4">Our Vision</h3>
              <p className="text-crystal-secondary">
                To be the leading provider of comprehensive business services, known for excellence in interpretation, consulting, 
                and construction solutions worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-crystal-accent mb-4">Our Values</h3>
              <p className="text-crystal-secondary">
                Excellence, integrity, cultural sensitivity, and innovation guide everything we do, ensuring the highest quality 
                service for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;