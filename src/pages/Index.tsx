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
    /* General Sans is now the default via body. 'font-sans' utility inherits the Inter/General Sans stack */
    <main className="relative z-10 font-sans">
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center pt-48 pb-24 bg-transparent">
        <div className="container mx-auto px-6 text-center">
          
          {/* Header uses Space Grotesk (forced in CSS h1) */}
          <h1 className="font-bold leading-[1.1] mb-6 text-[clamp(2.5rem,6vw,5.5rem)] tracking-tight uppercase italic text-white">
            We Create The <span className="text-[#00d8ff]">Echo</span>, <br />
            You Make The <span className="text-white">Impact</span>.
          </h1>

          {/* Subtext uses General Sans (inherited from body/main) */}
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light">
            One partner to shape your brand and drive performance.
          </p>

          <div className="mb-20">
            <Button className="bg-[#00d8ff] text-black px-12 py-8 rounded-xl text-lg font-black uppercase shadow-[0_0_40px_rgba(0,216,255,0.3)]">
              Start Project
            </Button>
          </div>

          <div className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slides[currentSlide]}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,216,255,0.2)]"
              />
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