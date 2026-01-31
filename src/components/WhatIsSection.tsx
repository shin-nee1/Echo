import React from "react";
import { Check } from "lucide-react";

interface WhatIsSectionProps {
  title: string;
  highlightedWord: string;
  description: string;
  bulletPoints: string[];
  imageSrc: string;
  imageAlt: string;
}

const WhatIsSection = ({
  title,
  highlightedWord,
  description,
  bulletPoints,
  imageSrc,
  imageAlt,
}: WhatIsSectionProps) => {
  const titleParts = title.split(highlightedWord);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Decor (Optional ambient glow) */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* 1. Content Section */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight">
              {titleParts[0]}
              <span className="text-primary relative inline-block">
                {highlightedWord}
                {/* Optional underline decoration */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
              {titleParts[1] || ""}
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {description}
            </p>

            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="space-y-5">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    {/* Bullet Icon Container */}
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-foreground/80 text-base md:text-lg font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* 2. Image Section with Dedicated Outlined Space */}
          <div className="order-1 lg:order-2 relative">
            {/* The Dedicated Outline Frame */}
            <div className="relative z-10 p-3 md:p-5 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
              
              {/* Decorative corner accents for the 'tech' look */}
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />

              {/* The Image Container itself */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] w-full bg-secondary/20">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Background Glow behind the frame */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10 transform scale-90 translate-y-4" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;