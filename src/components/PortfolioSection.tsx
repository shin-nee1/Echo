import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ASSET IMPORTS
import PortImg9 from "@/assets/image-removebg-preview (9).png";
import PortImg10 from "@/assets/image-removebg-preview (10).png";
import PortImg11 from "@/assets/image-removebg-preview (11).png";

const PortfolioSection = () => {
  const projects = [
    { id: 1, img: PortImg9, name: "Uber", sub: "SuperApp Concept", bg: "bg-[#141414]" },
    { id: 2, img: PortImg10, name: "Barclays", sub: "Mobile App", bg: "bg-[#00AEEF]" },
    { id: 3, img: PortImg11, name: "FINKOFF.", sub: "Finance Manager", bg: "bg-white", text: "text-black", subText: "text-slate-600" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative py-12 md:py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-12 md:mb-16">
          <div className="shrink-0">
            <h2 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-none">
              Our <span className="text-[#43c6e4]">Portfolio</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base font-normal max-w-[280px] leading-snug pt-2 md:pl-8 md:border-l md:border-white/10">
            Showcasing digital excellence. <br />
            Built to scale.
          </p>

          <div className="flex items-center gap-4 ml-auto">
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 active:scale-90 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ArrowLeft className={`w-5 h-5 ${currentIndex === 0 ? 'text-gray-500' : 'text-white'}`} />
              </button>
              <button 
                onClick={handleNext}
                disabled={currentIndex === projects.length - 1}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 active:scale-90 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ArrowRight className={`w-5 h-5 ${currentIndex === projects.length - 1 ? 'text-gray-500' : 'text-white'}`} />
              </button>
            </div>
            <Button 
              variant="cyan"
              size="lg"
            >
              View All
            </Button>
          </div>
        </div>
      </div>

      {/* TRACK */}
      <div className="relative w-full overflow-visible">
        <style dangerouslySetInnerHTML={{ __html: `
          .portfolio-track {
            transform: translateX(calc(-${currentIndex} * (85vw + 1.5rem)));
          }
          @media (min-width: 640px) {
            .portfolio-track {
              transform: translateX(calc(-${currentIndex} * (500px + 2.5rem)));
            }
          }
        `}} />

        <div className="portfolio-track flex gap-6 md:gap-10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] px-6 md:pl-[calc((100vw-1280px)/2+1.5rem)]">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`flex-shrink-0 w-[85vw] sm:w-[500px] aspect-square rounded-[2.5rem] overflow-hidden ${project.bg} border border-white/5 relative group transition-all duration-500`}
            >
              <img 
                src={project.img} 
                alt={project.name}
                // Removed opacity-90 to keep it 100% vibrant
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Removed the black gradient overlay. Text now sits directly on image. */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className={`text-3xl font-black mb-1 ${project.text || 'text-white'}`}>{project.name}</h3>
                <p className={`text-[11px] font-bold uppercase tracking-[0.3em] ${project.subText || 'text-[#43c6e4]'}`}>{project.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;