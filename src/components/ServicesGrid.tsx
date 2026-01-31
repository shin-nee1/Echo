import React from "react";
import ServiceCard from "./ServiceCard";

export interface ServiceData {
  title: string;
  items: string[];
}

interface ServicesGridProps {
  title: string;
  highlight: string;
  services: ServiceData[];
}

const ServicesGrid = ({ title, highlight, services }: ServicesGridProps) => {
  return (
    <section className="bg-[#010a0f] py-20 lg:py-32 relative overflow-hidden">
      {/* ORIGINAL BG GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[800px] h-[600px] lg:h-[800px] bg-cyan-500/5 blur-[120px] lg:blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* CENTERED HEADER - ORIGINAL DESIGN WEIGHTS */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 leading-tight">
            {title} <span className="text-[#00d8ff]">{highlight}</span>
          </h2>
          {/* ORIGINAL GLOW BAR */}
          <div className="w-16 lg:w-24 h-1.5 bg-[#00d8ff] mx-auto rounded-full shadow-[0_0_20px_rgba(0,216,255,0.4)]" />
        </div>

        {/* FLEX BOX LAYOUT FOR CENTERED BOTTOM CARDS */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              // Widths calculated to mirror the 1, 2, and 3 column grid exactly
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] min-h-[380px] lg:min-h-[400px]"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;