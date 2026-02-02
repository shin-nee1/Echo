import { useState } from "react";
import { ChevronRight, ChevronDown, Sparkles } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    /* CHANGED: Removed bg-[#010a0f], set to bg-transparent and relative z-10 */
    <section className="relative py-24 md:py-32 overflow-hidden bg-transparent z-10">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-24 relative">
          <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Why Echo & <span className="text-[#00d8ff]">Impact?</span>
          </h2>
        </div>

        {/* ACCORDION GRID */}
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-center items-stretch md:h-[600px] relative">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const shouldGlow = activeIndex === index || activeIndex === index - 1;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group
                  ${isActive ? "flex-[5]" : "flex-1"}
                `}
                style={{
                  clipPath: `polygon(
                    0% 0%, 100% 0%, 
                    100% 45%, calc(100% + 15px) 50%, 100% 55%, 
                    100% 100%, 0% 100%, 
                    0% 55%, 15px 50%, 0% 45%
                  )`,
                  marginRight: index !== items.length - 1 ? "-15px" : "0"
                }}
              >
                {/* 1. BACKGROUND LAYER (Backdrop blur allows halo visibility) */}
                <div className={`absolute inset-0 transition-all duration-700 
                  ${isActive 
                    ? "bg-[#00d8ff]/[0.06] backdrop-blur-xl" 
                    : "bg-white/[0.01] backdrop-blur-sm hover:bg-white/[0.03]"}
                `} />

                {/* 2. THE HIGHLIGHTER GLOW */}
                <div 
                  className={`absolute inset-0 transition-all duration-700 pointer-events-none
                    ${isActive 
                      ? "opacity-100 shadow-[inset_0_0_50px_rgba(0,216,255,0.2)]" 
                      : "opacity-0"}
                  `}
                />

                {/* 3. STATIC INTERLOCKING DIVIDER */}
                <div className="absolute hidden md:block inset-y-0 left-0 w-10 z-40 pointer-events-none">
                  <svg viewBox="0 0 40 100" preserveAspectRatio="none" className="h-full w-full">
                    <defs>
                      <linearGradient id={`white-fade-${index}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="20%" stopColor="white" stopOpacity="1" />
                        <stop offset="80%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 2 0 L 2 45 L 18 50 L 2 55 L 2 100" 
                      fill="none" 
                      stroke={shouldGlow ? "#00d8ff" : "url(#white-fade-0)"}
                      strokeWidth="1.2"
                      vectorEffect="non-scaling-stroke"
                      className={`transition-all duration-700 ${
                        shouldGlow 
                          ? "opacity-100 [filter:drop-shadow(0_0_8px_#00d8ff)]" 
                          : "opacity-30"
                      }`}
                    />
                  </svg>
                </div>

                {/* 4. BALANCED VERTICAL TITLE */}
                <div className={`hidden md:flex absolute inset-0 items-center justify-center transition-all duration-500 ${
                  isActive ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}>
                  <h3 className="text-lg font-bold tracking-[0.35em] uppercase text-white whitespace-nowrap -rotate-90">
                    {item.title}
                  </h3>
                </div>

                {/* 5. CONTENT PANEL */}
                <div className={`relative md:absolute inset-0 p-10 md:p-16 flex flex-col justify-center transition-all duration-700 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none hidden md:flex"
                }`}>
                  <div className="max-w-2xl space-y-8 pl-6">
                    <div className="flex w-14 h-14 rounded-lg bg-[#00d8ff]/10 border border-[#00d8ff]/20 items-center justify-center">
                      <Sparkles className="text-[#00d8ff] w-6 h-6" />
                    </div>
                    
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight uppercase">
                      {item.title}
                    </h3>
                    
                    <p className="text-white leading-relaxed text-lg md:text-xl font-light opacity-95">
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