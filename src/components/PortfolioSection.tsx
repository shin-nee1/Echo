import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ASSET IMPORTS
import PortImg9 from "@/assets/image-removebg-preview (9).png";
import PortImg10 from "@/assets/image-removebg-preview (10).png";
import PortImg11 from "@/assets/image-removebg-preview (11).png";

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 3;

  // Measurement Constants
  const desktopWidth = 1200;
  const desktopOverlap = 150;
  const mobileWidth = 90; // vw
  const mobileOverlap = 10; // vw

  const nextSlide = () => {
    if (currentIndex < totalItems - 1) setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section className="relative py-20 md:py-32 bg-transparent overflow-hidden">
      {/* Header Container - Standard Alignment */}
      <div className="container mx-auto px-6 mb-12 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="relative">
            <h2 className="text-white text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight">
              Explore <span className="text-[#00d8ff]">Our Portfolio</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex gap-2 md:gap-3">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
              >
                <ArrowLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-[#00d8ff] transition-colors" />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentIndex === totalItems - 1}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
              >
                <ArrowRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-[#00d8ff] transition-colors" />
              </button>
            </div>
            
            <Button 
              variant="outline" 
              className="hidden sm:flex rounded-full border-white/10 bg-white/5 hover:bg-[#00d8ff] hover:text-black px-10 py-8 transition-all font-black uppercase tracking-widest text-xs"
            >
              View All
            </Button>
          </div>
        </div>
      </div>

      {/* Track - Aligned to Container Edge, Transparent Frames */}
      <div className="relative">
        <div 
          // Uses container padding to align with heading
          className="flex -space-x-10 md:-space-x-[150px] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] px-6 md:px-[calc((100vw-1280px)/2+1.5rem)]"
          style={{ 
            // Step calculation: Width minus the overlap
            transform: `translateX(calc(-${currentIndex} * (min(${mobileWidth - mobileOverlap}vw, ${desktopWidth - desktopOverlap}px))))` 
          }} 
        >
          {/* IMAGE 1 */}
          <div className="flex-shrink-0 w-[90vw] md:w-[1200px] aspect-[16/10] group overflow-hidden rounded-[4rem] md:rounded-[9rem] relative z-[1]">
            <img 
              src={PortImg9} 
              alt="Uber"
              // bg-white/[0.01] removed
              className="w-full h-full object-contain filter drop-shadow-[0_40px_100px_rgba(0,216,255,0.15)]" 
            />
          </div>

          {/* IMAGE 2 */}
          <div className="flex-shrink-0 w-[90vw] md:w-[1200px] aspect-[16/10] group overflow-hidden rounded-[4rem] md:rounded-[9rem] relative z-[2]">
            <img 
              src={PortImg10} 
              alt="Barclays"
              // bg-white/[0.01] removed
              className="w-full h-full object-contain filter drop-shadow-[0_40px_100px_rgba(0,0,0,0.5)]" 
            />
          </div>

          {/* IMAGE 3 */}
          <div className="flex-shrink-0 w-[90vw] md:w-[1200px] aspect-[16/10] group overflow-hidden rounded-[4rem] md:rounded-[9rem] relative z-[3]">
            <img 
              src={PortImg11} 
              alt="Finkoff"
              // bg-white/[0.01] removed
              className="w-full h-full object-contain filter drop-shadow-[0_40px_100px_rgba(255,255,255,0.06)]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;