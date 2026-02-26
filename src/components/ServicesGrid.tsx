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
    <section className="py-20 lg:py-32 relative bg-transparent overflow-visible font-sans">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Adjusted Header for 4 distinct screen sizes */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-white font-bold tracking-tight leading-[1.1] mb-4 
            text-3xl           
            /* 1. Mobile */
            md:text-4xl        
            /* 2. Tablet */
            lg:text-[2.8rem]     
            /* 3. Laptop (1024px+) */
            xl:text-[3.5rem]   
            /* 4. Large Laptops/4K (1280px/1440px+) */
          ">
            {title} <span className="text-[#47c2d2]">{highlight}</span>
          </h2>
        </div>

        {/* Layout:
            - Mobile/Tablet: Centered, max-width limited so they don't become massive rectangles.
            - Laptop (lg): 2 Columns (50%)
            - Desktop (xl): 3 Columns (33%)
        */}
        <div className="flex flex-wrap justify-center gap-y-12 gap-x-6 lg:gap-x-10 lg:gap-y-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              // md:max-w-[450px] -> This ensures on tablets the card stays a nice square 
              // and doesn't stretch to the full screen width (which would create huge empty space).
              className="w-full md:max-w-[320px] lg:max-w-none lg:w-[calc(50%-1.25rem)] xl:w-[calc(33.333%-2rem)]"
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