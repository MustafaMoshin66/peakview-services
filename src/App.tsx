import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ScrollToTop } from "./components/ScrollToTop";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const InterpretationService = lazy(() => import("./pages/InterpretationService"));
const BusinessConsulting = lazy(() => import("./pages/BusinessConsulting"));
const Construction = lazy(() => import("./pages/Construction"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services/interpretation" element={<InterpretationService />} />
              <Route path="/services/consulting" element={<BusinessConsulting />} />
              <Route path="/services/construction" element={<Construction />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;