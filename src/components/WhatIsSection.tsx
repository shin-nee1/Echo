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
      {/* Background glow removed to prevent collision with global halo */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                {titleParts[0]}
                <span className="text-[#00d8ff]">{highlightedWord}</span>
                {titleParts[1] || ""}
              </h2>
              <div className="mt-6 w-24 h-[4px] bg-[#00d8ff] rounded-full shadow-[0_0_15px_rgba(0,216,255,0.8)]" />
            </div>
            
            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
              {description}
            </p>

            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="space-y-5">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-[#00d8ff]/10 flex items-center justify-center text-[#00d8ff] group-hover:bg-[#00d8ff] group-hover:text-[#010a0f] transition-all duration-300">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span className="text-white/80 text-base md:text-lg font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 p-3 md:p-5 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#00d8ff]/30 rounded-tl-2xl" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#00d8ff]/30 rounded-br-2xl" />

              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] w-full bg-[#0a161d]">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#010a0f]/40 to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="absolute inset-0 bg-[#00d8ff]/10 blur-3xl rounded-full -z-10 transform scale-90 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;