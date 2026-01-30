import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubServicePage from "./pages/SubServicePage";

import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

import Index from "./pages/Index";
import Design from "./pages/Design";
import Develop from "./pages/Develop";
import Market from "./pages/Market";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* Wrap everything inside BrowserRouter */}
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/design" element={<Design />} />
          <Route path="/develop" element={<Develop />} />
          <Route path="/market" element={<Market />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<SubServicePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer is inside BrowserRouter now */}
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
