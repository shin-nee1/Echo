import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import CubeImg from "@/assets/Cube.png";

const queryClient = new QueryClient();

// --- SCROLLING CUBES COMPONENT ---
const ScrollingCubes = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isDesignPage = location.pathname === "/design";
  const isDevelopPage = location.pathname === "/develop";
  const isMarketPage = location.pathname === "/market";
  const isSubServicePage = location.pathname.startsWith("/services/");
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact"
  const isFAQPage = location.pathname === "/faq"

  if (!isHomePage && !isDesignPage && !isDevelopPage && !isMarketPage && !isSubServicePage && !isAboutPage && !isContactPage && !isFAQPage) return null;

  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* ================= HOME PAGE CUBES ================= */}
      {isHomePage && (
        <>
          <img 
            src={CubeImg} 
            alt="" 
            className="absolute top-[19.5%] right-[1%] w-[25vw] opacity-100 rotate-[0deg]" 
          />
          <img 
            src={CubeImg} 
            alt="" 
            className="absolute top-[38.15%] left-[1%] w-[19vw] opacity-100 -rotate-[0deg]" 
          />
          <img 
            src={CubeImg} 
            alt="" 
            className="absolute top-[47.5%] right-[-10%] w-[33vw] opacity-100 rotate-[0deg]" 
          />
          <img 
            src={CubeImg} 
            alt="" 
            className="absolute top-[55%] left-[-10%] w-[22.5vw] opacity-100 rotate-[0deg]" 
          />
        </>
      )}

      {isDesignPage && (
        <>
          <img src={CubeImg} alt="" className="absolute top-[4%] left-[-12%] w-[24vw] opacity-100 rotate-[0deg]" />
          <img src={CubeImg} alt="" className="absolute top-[17%] right-[-8%] w-[28vw] opacity-100 rotate-[0deg]" />
          <img src={CubeImg} alt="" className="absolute top-[33%] left-[-6%] w-[28vw] opacity-100 rotate-[0deg]" />
          <img src={CubeImg} alt="" className="absolute top-[50%] right-[-6%] w-[24vw] opacity-100 rotate-[0deg]" />
          <img src={CubeImg} alt="" className="absolute top-[73%] left-[-15%] w-[36vw] opacity-100 rotate-[0deg]" />
        </>
      )}

      {isDevelopPage && (
        <>
          <img src={CubeImg} alt="" className="absolute top-[4%] left-[-12%] w-[24vw] opacity-100 rotate-[0deg]" />
          <img src={CubeImg} alt="" className="absolute top-[17%] right-[-8%] w-[28vw] opacity-100 rotate-[0deg]" />
          <img src={CubeImg} alt="" className="absolute top-[34%] left-[-10%] w-[28vw] opacity-100 rotate-[0deg]" />
          <img src={CubeImg} alt="" className="absolute top-[48%] right-[-7%] w-[22vw] opacity-100 rotate-[0deg]" />
          <img src={CubeImg} alt="" className="absolute top-[58%] left-[-16%] w-[35vw] opacity-100 rotate-[0deg]" />
        </>
      )}

      {isMarketPage && (
        <>
          <img src={CubeImg} alt="" className="absolute top-[4%] left-[-12%] w-[24vw] opacity-100 rotate-[0deg]" />
          <img src={CubeImg} alt="" className="absolute top-[17%] right-[-8%] w-[28vw] opacity-100 rotate-[0deg]" />
          <img src={CubeImg} alt="" className="absolute top-[33%] left-[-10%] w-[28vw] opacity-100 rotate-[0deg]" />
          <img src={CubeImg} alt="" className="absolute top-[48%] right-[-7%] w-[22vw] opacity-100 rotate-[0deg]" />
        </>
      )}

      {isSubServicePage && (
        <>
          <img 
            src={CubeImg} 
            alt="" 
            className="absolute top-[55%] right-[-10%] w-[30vw] opacity-100 rotate-[30deg]" 
          />
        </>
      )}

      {isAboutPage && (
        <>
          <img src={CubeImg} alt="" className="absolute top-[10%] right-[-10%] w-[24vw] opacity-100 rotate-[10deg]" />
          <img 
            src={CubeImg} 
            alt="" 
            className="absolute top-[31%] right-[-8%] w-[25vw] opacity-100 -rotate-0" 
          />
        </>
      )}
      {isContactPage && (
        <>
          <img 
            src={CubeImg} 
            alt="" 
            className="absolute top-[64%] right-[-8%] w-[30vw] opacity-90 rotate-[25deg]" 
          />
        </>
      )}
      {isFAQPage && (
        <>
          <img 
            src={CubeImg} 
            alt="" 
            className="absolute top-[10%] right-[-8%] w-[25vw] opacity-100 rotate-[0deg]" 
          />
          <img 
            src={CubeImg} 
            alt="" 
            className="absolute top-[25%] left-[-11%] w-[25vw] opacity-100 rotate-[0deg]" 
          />
        </>
      )}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* --- MAIN PAGE WRAPPER --- */}
        <div className="relative min-h-screen w-full bg-[#010a0f] overflow-x-hidden">
          
          {/* ================= GLOBAL GLOW SYSTEM (ABSOLUTE & REPEATING) ================= */}
          <div className="absolute inset-0 pointer-events-none z-0">
            
            {/* 1. TOP LEFT BLOB */}
            <div 
              className="absolute top-[-1%] left-[-27%] w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-[0.24]"
              style={{ background: 'radial-gradient(circle, #47c2d2 5%, transparent 45%)' }}
            />

            <div 
              className="absolute top-[-2%] right-[-25%] w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-[0.24]"
              style={{ background: 'radial-gradient(circle, #47c2d2 5%, transparent 45%)' }}
            />
            <div 
              className="absolute top-[15%] right-[-25%] w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-[0.24]"
              style={{ background: 'radial-gradient(circle, #47c2d2 5%, transparent 45%)' }}
            />

            <div 
              className="absolute top-[25%] left-[-25%] w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-[0.24]"
              style={{ background: 'radial-gradient(circle, #47c2d2 5%, transparent 45%)' }}
            />
            <div 
              className="absolute top-[33%] right-[-25%] w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-[0.24]"
              style={{ background: 'radial-gradient(circle, #47c2d2 5%, transparent 45%)' }}
            />
            <div 
              className="absolute top-[40%] left-[-25%] w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-[0.24]"
              style={{ background: 'radial-gradient(circle, #47c2d2 5%, transparent 45%)' }}
            />
             <div 
              className="absolute top-[57%] right-[-25%] w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-[0.24]"
              style={{ background: 'radial-gradient(circle, #47c2d2 5%, transparent 45%)' }}
            />
            <div 
              className="absolute top-[57%] left-[-25%] w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-[0.24]"
              style={{ background: 'radial-gradient(circle, #47c2d2 5%, transparent 45%)' }}
            />
            <div 
              className="absolute top-[77%] left-[-25%] w-[80vw] h-[80vw] rounded-full blur-[120px] opacity-[0.24]"
              style={{ background: 'radial-gradient(circle, #59afb0 5%, transparent 45%)' }}
            />
            {/* GRID OVERLAY (Stretches the full height) */}
            <div 
              className="absolute inset-0 opacity-[0.04]" 
              style={{ 
                backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: '80px 80px',
              }} 
            />
          </div>

          {/* ================= CONTENT LAYER ================= */}
          <div className="relative z-10 flex flex-col min-h-screen px-[12%]">
            
            <ScrollingCubes />
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
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;