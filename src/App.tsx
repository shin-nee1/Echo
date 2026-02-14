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

// ASSETS
import CubeImg from "@/assets/cube.png";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* ================= GLOBAL BACKGROUND SYSTEM (FIXED) ================= */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#010a0f] overflow-hidden">
          
          {/* AMBIENT BORDER LIGHTING
              Strictly positioned on Left/Right borders to mimic the reference.
              Alternating pattern: Top-Left -> Middle-Right -> Bottom-Left.
          */}

          {/* 1. TOP LEFT BORDER GLOW 
             - Anchored to the top-left edge.
             - Washes over the header/hero section from the side.
          */}
          <div 
            className="absolute top-[-10%] left-[-25%] w-[60vw] h-[60vh] rounded-full blur-[120px] opacity-40"
            style={{ 
              background: 'radial-gradient(circle, rgba(67, 198, 228, 0.15) 0%, rgba(67, 198, 228, 0.05) 50%, transparent 70%)' 
            }}
          />
          
          {/* 2. MIDDLE RIGHT BORDER GLOW
             - Anchored to the center-right edge.
             - Provides backlight for the middle content from the right side.
          */}
          <div 
            className="absolute top-[35%] right-[-25%] w-[60vw] h-[70vh] rounded-full blur-[130px] opacity-35"
            style={{ 
              background: 'radial-gradient(circle, rgba(67, 198, 228, 0.12) 0%, rgba(67, 198, 228, 0.04) 50%, transparent 70%)' 
            }}
          />

          {/* 3. BOTTOM LEFT BORDER GLOW
             - Anchored to the bottom-left edge.
             - Washes over the footer/FAQ section from the left side.
          */}
          <div 
            className="absolute bottom-[-10%] left-[-25%] w-[70vw] h-[60vh] rounded-full blur-[120px] opacity-40"
            style={{ 
              background: 'radial-gradient(circle, rgba(67, 198, 228, 0.15) 0%, rgba(67, 198, 228, 0.05) 50%, transparent 70%)' 
            }}
          />

          {/* GRID OVERLAY */}
          <div 
            className="absolute inset-0 z-[1] opacity-[0.03]" 
            style={{ 
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }} 
          />
        </div>

        {/* ================= CONTENT LAYER (SCROLLING) ================= */}
        <div className="relative z-10 flex flex-col min-h-screen px-[12%] overflow-x-hidden">
          
          {/* BACKGROUND CUBE SYSTEM */}
          <div className="absolute inset-0 z-[-1] pointer-events-none">
            
            {/* TOP SECTION */}
            <img src={CubeImg} alt="" className="absolute top-[3%] left-[-8%] w-[22vw] opacity-[0.7] -rotate-12" /> 
            <img src={CubeImg} alt="" className="absolute top-[12%] right-[-5%] w-[18vw] opacity-[0.5] rotate-45" />


            {/* MIDDLE SECTION */}
            <img src={CubeImg} alt="" className="absolute top-[40%] left-[-4%] w-[19vw] opacity-[0.65] rotate-[30deg]" />
            <img src={CubeImg} alt="" className="absolute top-[48%] right-[-8%] w-[24vw] opacity-[0.8] -rotate-45" />

            <img src={CubeImg} alt="" className="absolute top-[75%] left-[-10%] w-[23vw] opacity-[0.75] rotate-12" />
      
            {/* FOOTER AREA */}
            <img src={CubeImg} alt="" className="absolute bottom-[2%] right-[-6%] w-[20vw] opacity-[0.7] rotate-90" />
           
          </div>

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