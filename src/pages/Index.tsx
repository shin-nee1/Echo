import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ASSETS
import HeroImg1 from "@/assets/image-removebg-preview (1).png";
import HeroImg2 from "@/assets/image-removebg-preview (2).png";
import HeroImg3 from "@/assets/image-removebg-preview (3).png";

// COMPONENTS
import WhatWeDo from "@/components/WhatWeDo";
import FAQ from "@/components/FAQ";
import WhoWeAre from "@/components/WhoWeAre";
import AboutUs from "@/components/AboutUs";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhyUsSection from "@/components/WhyUsSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [HeroImg1, HeroImg2, HeroImg3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="relative z-10 font-sans bg-transparent">
      {/* HERO SECTION */}
      <section 
        className="hero-section relative flex flex-col items-center justify-center overflow-hidden"
        style={{ 
          paddingTop: "clamp(4.5rem, 10vh, 9rem)", 
          paddingBottom: "clamp(3rem, 8vh, 6rem)" 
        }}
      >
        
        {/* GRID BACKGROUND - Scaled down for smaller screens */}
        <div 
          className="absolute inset-0 z-0 opacity-30 pointer-events-none" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: 'clamp(2rem, 3vw, 3.5rem) clamp(2rem, 3vw, 3.5rem)',
            backgroundPosition: 'center center',
            maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 85%)'
          }}
        />

        <div className="container relative z-10 mx-auto px-[6vw] text-center">
          
          <h1 
            className="hero-title font-bold leading-[1.1] tracking-tight text-white mx-auto"
            style={{ 
              fontSize: "clamp(1.8rem, 4.8vw, 4.5rem)", // Reduced max from 5.2rem
              marginBottom: "1.25rem",
              maxWidth: "min(1100px, 95vw)"
            }}
          >
            We Create The <span className="text-[#43c6e4]">Echo</span>,<br />
            You Make The Impact.
          </h1>

          <div 
            className="hero-subtitle text-slate-200 mx-auto font-normal leading-relaxed opacity-85"
            style={{ 
              fontSize: "clamp(0.85rem, 1vw, 1.15rem)", 
              maxWidth: "min(750px, 85vw)",
              marginBottom: "1.75rem"
            }}
          >
            <p>From strategy and storytelling to code and conversion.</p>
            <p>One partner to shape your brand, build your digital presence, and drive performance.</p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <a 
              href="#" 
              className="text-[#43c6e4] hover:text-[#5edcf8] transition-all font-semibold tracking-wide border-b border-transparent hover:border-[#43c6e4]"
              style={{ fontSize: "clamp(0.75rem, 0.85vw, 0.95rem)" }}
            >
              Access Your Free Project Guide
            </a>
          </div>

          <div style={{ marginBottom: "clamp(2.5rem, 6vh, 4.5rem)" }}>
            <Button 
              variant="cyan" 
              size="hero" 
              style={{ 
                fontSize: "clamp(0.8rem, 0.9vw, 1rem)", 
                padding: "0 clamp(1.2rem, 2.5vw, 2.5rem)",
                height: "clamp(2.8rem, 4vw, 3.5rem)" 
              }}
            >
              Start Project
            </Button>
          </div>

          {/* HERO IMAGE SLIDER - Tighter constraints for Laptop/Mobile */}
          <div className="hero-slider-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ y: "15%", opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                exit={{ y: "-10%", opacity: 0 }} 
                transition={{ 
                  duration: 0.8, 
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <motion.img
                  src={slides[currentSlide]}
                  alt="Echo and Impact Hero"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full object-contain select-none pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <WhoWeAre />
      <WhatWeDo />
      <PortfolioSection />
      <WhyUsSection />
      <FAQ />
      <TestimonialCarousel />
      <AboutUs />
      <CTASection title="Let's Create Your" highlight="Impact" />

      <style>{`
        .hero-slider-container {
          position: relative;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          width: 100%;
          /* Reduced heights for tighter look */
          height: 28vh; 
          min-height: 220px;
        }

        @media (min-width: 640px) { /* Tablet */
          .hero-slider-container { height: 32vh; max-width: 85vw; }
        }

        @media (min-width: 1024px) { /* Laptop */
          .hero-slider-container { height: 38vh; max-width: 65vw; }
        }

        @media (min-width: 1440px) { /* Large Desktop */
          .hero-slider-container { height: 45vh; max-width: 900px; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 1.85rem !important; }
          .hero-subtitle { font-size: 0.85rem !important; line-height: 1.5; }
        }
      `}</style>
    </main>
  );
};

export default Index;