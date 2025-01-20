import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import InterpretationService from "./pages/InterpretationService";
import BusinessConsulting from "./pages/BusinessConsulting";
import ProfessionalTraining from "./pages/ProfessionalTraining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/interpretation" element={<InterpretationService />} />
            <Route path="/services/consulting" element={<BusinessConsulting />} />
            <Route path="/services/training" element={<ProfessionalTraining />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;