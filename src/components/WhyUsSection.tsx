import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

interface WhyUsItem {
  title: string;
  description: string;
}

const items: WhyUsItem[] = [
  { title: "PARTNERSHIP", description: "We don't just work for you; we work with you as a dedicated extension of your internal team." },
  { title: "SEAMLESS COLLABORATION", description: "Integrated workflows that ensure every stage of the project is transparent and efficient." },
  { title: "SENIOR EXPERTISE", description: "Direct access to senior-level talent who have built products for global brands." },
  { title: "FULL TRANSPARENCY", description: "No hidden costs or black-box processes. You see exactly what we see, every step of the way." },
  { title: "UNIFIED TEAM", description: "A collective of specialists across design and dev working under one single vision." },
  { title: "CLIENT-FIRST", description: "Your business goals drive our creative decisions, ensuring real impact over just aesthetics." },
];

const WhyUsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* MATCHING BRAND HEADER */}
        <div className="flex flex-col md:flex-row md:items-start lg:items-center gap-6 md:gap-12 mb-20 relative">
          <div className="relative shrink-0">
            <h2 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter leading-none uppercase">
              Why Echo & <span className="text-[#00d8ff]">Impact?</span>
            </h2>
            
            {/* SIGNATURE GLOW BAR */}
            <div className="absolute -bottom-6 left-0 w-24 h-1.5 bg-[#00d8ff] rounded-full shadow-[0_0_20px_rgba(0,216,255,0.6)]" />
          </div>

          {/* BRAND RHYTHM TEXT */}
          <p className="text-slate-400 text-lg md:text-xl font-normal max-w-sm leading-snug pt-1 md:pt-2 border-l border-white/10 md:pl-8">
            Strategic partnership meets <br className="hidden md:block" />
            high-performance execution.
          </p>
        </div>

        {/* ACCORDION GRID */}
        <div 
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-3 md:gap-0 md:h-[550px]"
          onMouseLeave={() => {
            if (typeof window !== "undefined" && window.innerWidth > 768) {
              setActiveIndex(null);
            }
          }}
        >
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => {
                  if (typeof window !== "undefined" && window.innerWidth > 768) {
                    setActiveIndex(index);
                  }
                }}
                onClick={() => {
                  setActiveIndex(isActive ? null : index);
                }}
                className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/10 md:border-none rounded-[2rem] md:rounded-none
                  ${isActive ? "flex-[5] bg-white/[0.03] backdrop-blur-sm" : "flex-1 bg-transparent"}
                `}
              >
                {/* VERTICAL GLOWING DIVIDER (Desktop) */}
                <div 
                  className={`absolute hidden md:block inset-y-0 left-0 w-px transition-all duration-500
                    ${isActive ? "bg-[#00d8ff] shadow-[0_0_15px_rgba(0,216,255,0.8)] z-20" : "bg-white/10"}
                  `} 
                />
                
                {/* MOBILE HEADER */}
                <div className="md:hidden flex items-center justify-between p-8 h-[90px] w-full">
                  <h3 className={`text-sm font-black tracking-[0.2em] uppercase transition-colors ${isActive ? 'text-[#00d8ff]' : 'text-white/40'}`}>
                    {item.title}
                  </h3>
                  <div className="transition-transform duration-300" style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ChevronDown className={`w-6 h-6 ${isActive ? 'text-[#00d8ff]' : 'text-white/20'}`} />
                  </div>
                </div>

                {/* DESKTOP VERTICAL TITLE */}
                <div className={`hidden md:flex absolute inset-0 items-center justify-center transition-all duration-500 ${
                  isActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}>
                  <h3 className="text-xs font-black tracking-[0.5em] uppercase text-white/20 whitespace-nowrap -rotate-90">
                    {item.title}
                  </h3>
                </div>

                {/* CONTENT PANEL */}
                <div className={`relative md:absolute inset-0 p-10 md:p-16 flex flex-col justify-center transition-all duration-500 ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none hidden md:flex"
                }`}>
                  <div className="max-w-xl space-y-6">
                    <div className="hidden md:flex w-14 h-14 rounded-full border border-[#00d8ff]/30 items-center justify-center shadow-[0_0_20px_rgba(0,216,255,0.15)]">
                      <ChevronRight className="text-[#00d8ff] w-7 h-7" />
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-400 leading-relaxed text-lg md:text-xl font-normal opacity-80">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* HOVER GLOW TINT */}
                <div className={`absolute inset-0 bg-gradient-to-r md:bg-gradient-to-b from-[#00d8ff]/[0.05] to-transparent transition-opacity duration-700 pointer-events-none ${
                  isActive ? "opacity-100" : "opacity-0"
                }`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;