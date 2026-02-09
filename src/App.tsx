import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubServicePage from "./pages/SubServicePage";
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

      <BrowserRouter>
        {/* ================= GLOBAL BACKGROUND SYSTEM ================= */}
        {/* Background stays fixed and full-screen */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#010a0f]">
          <div className="absolute top-[-5%] left-[-15%] w-[45%] h-[40%] rounded-full bg-cyan/10 blur-[120px] animate-pulse" />
          <div 
            className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-cyan/5 blur-[100px] animate-pulse" 
            style={{ animationDuration: '7s' }} 
          />
          <div className="absolute top-[15%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[110px]" />
          <div 
            className="absolute bottom-[-10%] right-[-15%] w-[50%] h-[45%] rounded-full bg-cyan/8 blur-[130px] animate-pulse" 
            style={{ animationDuration: '12s' }} 
          />
          <div 
            className="absolute inset-0 z-[1] opacity-10" 
            style={{ 
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }} 
          />
        </div>

        {/* ================= CONTENT LAYER ================= */}
        {/* The 15% padding is applied here to the outer wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen px-[12%]">
          <ScrollToTop />
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/design" element={<Design />} />
              <Route path="/develop" element={<Develop />} />
              <Route path="/market" element={<Market />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              <Route path="/services/:slug" element={<SubServicePage />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;