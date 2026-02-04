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
    <section className="py-24 lg:py-30 relative bg-transparent overflow-visible font-sans">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* MATCHED HEADING: Simple Sans-Serif, Sentence Case, Bold */}
        <div className="text-center mb-32">
          <h2 className="text-white text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tight leading-none mb-4 whitespace-nowrap">
            {title} <span className="text-[#00d8ff]">{highlight}</span>
          </h2>
        </div>

        {/* Grid layout with spacing for the drawer animation */}
        <div className="flex flex-wrap justify-center gap-y-40 gap-x-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)] min-h-[500px]"
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