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
      {/* BG Glow for the whole section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-[800px] h-[600px] lg:h-[800px] bg-cyan-500/5 blur-[120px] lg:blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* MATCHING HEADER STYLE */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-4 leading-tight">
            {title} <span className="text-[#00d8ff]">{highlight}</span>
          </h2>
          <div className="w-16 lg:w-24 h-1.5 bg-[#00d8ff] mx-auto rounded-full shadow-[0_0_20px_rgba(0,216,255,0.4)]" />
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-full min-h-[380px] lg:min-h-[400px]"
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