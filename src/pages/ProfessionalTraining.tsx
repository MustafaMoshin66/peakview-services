import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { GraduationCap } from "lucide-react";

const ProfessionalTraining = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-crystal-light via-white to-crystal-light/50">
      <Navigation />
      
      <section className="min-h-[90vh] flex items-center justify-center px-4 pt-16">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-crystal-primary/10 rounded-full mb-8">
            <GraduationCap className="w-12 h-12 text-crystal-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-crystal-accent mb-6 animate-fadeIn">
            Professional Training
          </h1>
          <p className="text-xl text-crystal-secondary max-w-2xl mx-auto mb-8">
            Comprehensive training programs designed to enhance skills and professional development.
          </p>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-crystal-accent mb-4">Training Programs</h2>
            <ul className="text-crystal-secondary space-y-4">
              <li>Leadership development</li>
              <li>Professional skills workshops</li>
              <li>Team building programs</li>
              <li>Custom training solutions</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfessionalTraining;