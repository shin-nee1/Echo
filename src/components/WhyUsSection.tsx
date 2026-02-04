import { useState } from "react";
import { Sparkles } from "lucide-react";

interface WhyUsItem {
  title: string;
  description: string;
}

const items: WhyUsItem[] = [
  { title: "Partnership", description: "We don't just work for you; we work with you as a dedicated extension of your internal team." },
  { title: "Seamless Collaboration", description: "Integrated workflows that ensure every stage of the project is transparent and efficient." },
  { title: "Senior Expertise", description: "Direct access to senior-level talent who have built products for global brands." },
  { title: "Full Transparency", description: "No hidden costs or black-box processes. You see exactly what we see, every step of the way." },
  { title: "Unified Team", description: "A collective of specialists across design and dev working under one single vision." },
  { title: "Client-First", description: "Your business goals drive our creative decisions, ensuring real impact over just aesthetics." },
];

const WhyUsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-transparent z-10">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER - Reduced bottom margin on mobile to bring accordion closer */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-24 relative">
          <h2 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-none">
            Why Echo & <span className="text-[#43c6e4]">Impact?</span>
          </h2>
        </div>

        {/* ACCORDION WRAPPER */}
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-center items-stretch min-h-[600px] md:h-[650px] relative">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const isLast = index === items.length - 1;
            const shouldGlow = activeIndex === index || activeIndex === index - 1;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`
                  relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group overflow-hidden
                  ${isActive ? "h-[400px] md:h-auto" : "h-[80px] md:h-auto"}
                  ${isActive ? "md:flex-[6]" : "md:flex-1"}
                `}
                style={{
                  marginBottom: "-1px", 
                  marginRight: typeof window !== 'undefined' && window.innerWidth >= 768 && index !== items.length - 1 ? "-15px" : "0",
                  // Added padding to prevent title from hitting the bottom separator
                  paddingBottom: isLast && typeof window !== 'undefined' && window.innerWidth < 768 ? "20px" : "0"
                }}
              >
                {/* CLIP PATH CONTAINER */}
                <div className="absolute inset-0 w-full h-full bg-transparent"
                  style={{
                    clipPath: typeof window !== 'undefined' && window.innerWidth >= 768 
                      ? `polygon(0% 0%, 100% 0%, 100% 45%, calc(100% + 15px) 50%, 100% 55%, 100% 100%, 0% 100%, 0% 55%, 15px 50%, 0% 45%)` 
                      : `none`
                  }}
                >
                  {/* HIGHLIGHTER GLOW */}
                  <div 
                    className={`absolute inset-0 transition-all duration-700 pointer-events-none
                      ${isActive 
                        ? "opacity-100 shadow-[inset_0_0_80px_rgba(0,216,255,0.15)]" 
                        : "opacity-0"}
                    `}
                  />
                </div>

                {/* --- SEPARATORS --- */}
                
                {/* DESKTOP SEPARATOR (Vertical - Left Side) */}
                <div className="absolute hidden md:block inset-y-0 left-0 w-10 z-40 pointer-events-none">
                  <svg viewBox="0 0 40 100" preserveAspectRatio="none" className="h-full w-full">
                    <path 
                      d="M 2 0 L 2 45 L 18 50 L 2 55 L 2 100" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      className={`transition-all duration-700 ${shouldGlow ? "opacity-100 drop-shadow-[0_0_12px_rgba(255,255,255,1)]" : "opacity-40"}`}
                    />
                  </svg>
                </div>

                {/* DESKTOP SEPARATOR (Vertical - Final Right Side) */}
                {isLast && (
                  <div className="absolute hidden md:block inset-y-0 -right-[15px] w-10 z-40 pointer-events-none">
                    <svg viewBox="0 0 40 100" preserveAspectRatio="none" className="h-full w-full">
                      <path 
                        d="M 2 0 L 2 45 L 18 50 L 2 55 L 2 100" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        className={`transition-all duration-700 ${isActive ? "opacity-100 drop-shadow-[0_0_12px_rgba(255,255,255,1)]" : "opacity-40"}`}
                      />
                    </svg>
                  </div>
                )}

                {/* MOBILE SEPARATOR (Horizontal - Top Side) */}
                <div className="absolute block md:hidden top-0 inset-x-0 h-6 z-40 pointer-events-none">
                   <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
                    <path 
                      d="M 0 2 L 45 2 L 50 12 L 55 2 L 100 2" 
                      fill="none" 
                      stroke="white" 
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      className={`transition-all duration-700 ${shouldGlow ? "opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,1)]" : "opacity-40"}`}
                    />
                  </svg>
                </div>

                {/* MOBILE SEPARATOR (Horizontal - Final Bottom Side) */}
                {isLast && (
                  <div className="absolute block md:hidden bottom-0 inset-x-0 h-6 z-40 pointer-events-none translate-y-[10px]">
                    <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
                      <path 
                        d="M 0 2 L 45 2 L 50 12 L 55 2 L 100 2" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        className={`transition-all duration-700 ${isActive ? "opacity-100 drop-shadow-[0_0_10px_rgba(255,255,255,1)]" : "opacity-40"}`}
                      />
                    </svg>
                  </div>
                )}

                {/* TITLES */}
                <div className={`hidden md:flex absolute inset-0 items-center justify-center transition-all duration-500 ${isActive ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}>
                  <h3 className="text-xl font-bold tracking-[0.3em] uppercase text-white whitespace-nowrap -rotate-90">
                    {item.title}
                  </h3>
                </div>

                <div className={`md:hidden absolute top-0 left-0 right-0 h-[80px] flex items-center justify-center transition-all duration-500 z-20 ${isActive ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}`}>
                   <h3 className="text-lg font-bold tracking-[0.2em] uppercase text-white">
                    {item.title}
                  </h3>
                </div>

                {/* ACTIVE CONTENT PANEL */}
                <div className={`relative w-full h-full p-8 md:p-20 flex flex-col justify-center transition-all duration-700 ${isActive ? "opacity-100 scale-100 delay-100" : "opacity-0 scale-95 pointer-events-none absolute inset-0"}`}>
                  <div className="max-w-xl space-y-6 md:space-y-10 pl-4 border-l-2 border-[#00d8ff]">
                    <Sparkles className="text-[#00d8ff] w-6 h-6 md:w-8 md:h-8 animate-pulse" />
                    <h3 className="text-3xl md:text-6xl font-bold text-white tracking-tight leading-none">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base md:text-xl font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;