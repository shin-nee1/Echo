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

  const testimonials = [
    { name: "John Smith", role: "CEO, TechCorp", quote: "Echo & Impact transformed our presence.", avatar: "https://i.pravatar.cc/150?u=1" },
    { name: "Sarah Johnson", role: "Founder", quote: "Premium quality throughout.", avatar: "https://i.pravatar.cc/150?u=2" },
    { name: "Mike Williams", role: "Director", quote: "Our conversions doubled.", avatar: "https://i.pravatar.cc/150?u=3" },
  ];

  return (
    <main className="relative z-10 font-sans bg-transparent">
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
        
        {/* ENHANCED VISIBLE GRID BACKGROUND */}
        <div 
          className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '55px 55px',
            backgroundPosition: 'center center',
            maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 85%)'
          }}
        ></div>

        <div className="container relative z-10 mx-auto px-6 text-center">
          
          <h1 className="font-bold leading-[1.15] mb-6 text-[clamp(2.5rem,6vw,4.5rem)] tracking-tight text-white">
            We Create The <span className="text-[#43c6e4]">Echo</span>,<br />
            You Make The Impact.
          </h1>

          <div className="text-slate-200 text-lg md:text-xl max-w-4xl mx-auto mb-4 font-normal leading-relaxed opacity-90">
            <p>From strategy and storytelling to code and conversion.</p>
            <p>One partner to shape your brand, build your digital presence, and drive performance.</p>
          </div>

          <div className="mb-8">
            <a href="#" className="text-[#43c6e4] hover:text-[#5edcf8] transition-all text-xl font-semibold tracking-wide">
              Access Your Free Project Guide
            </a>
          </div>

          <div className="mb-20">
            <Button variant="cyan" size="hero">
              Start Project
            </Button>
          </div>

          {/* HERO IMAGE SLIDER: SIMULTANEOUS PASSING WITHOUT FADE */}
          <div className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Removed mode="wait" so images animate at the same time */}
            <AnimatePresence>
              <motion.div
                key={currentSlide}
                // Incoming image: Starts below (solid) and rises
                initial={{ y: "100%" }} 
                animate={{ y: 0 }} 
                // Outgoing image: Falls down (solid) simultaneously
                exit={{ y: "100%" }} 
                transition={{ 
                  duration: 0.9, 
                  ease: [0.4, 0, 0.2, 1] // Snappier cubic-bezier
                }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <motion.img
                  src={slides[currentSlide]}
                  alt="Echo and Impact Hero"
                  animate={{
                    y: [0, -20, 0],
                  }}
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
      <TestimonialCarousel testimonials={testimonials} />
      <AboutUs />
      <CTASection title="Let's Create Your" highlight="Impact" />
    </main>
  );
};

export default Index;