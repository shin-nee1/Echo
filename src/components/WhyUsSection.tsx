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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section 
      className="relative overflow-hidden bg-transparent"
      style={{ padding: "clamp(4rem, 10vw, 8rem) 0" }}
    >
      <div className="mx-auto w-full px-[5vw]">
        
        {/* HEADER */}
        <div className="text-center" style={{ paddingBottom: "4rem" }}>
          <h2 
            className="text-white font-bold leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
          >
            Why Echo & <span className="text-[#43c6e4]">Impact?</span>
          </h2>
        </div>

        {/* FLEX CONTAINER */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-0 lg:h-[30vw] min-h-[140vw] lg:min-h-0">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const isLineActive = isActive || activeIndex === index + 1;
            const isFirstLineActive = index === 0 && isActive;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                style={{
                  zIndex: isActive ? 20 : 10,
                  flex: isActive ? "3 0 auto" : "1 1 auto",
                  height: isActive ? "70vw" : "16vw",
                }}
                className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-visible lg:!h-full ${
                  isActive ? "why-us-item-active" : "why-us-item-inactive"
                }`}
              >
                {/* BACKGROUND HIGHLIGHT - Notched logic */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                    isActive ? "opacity-100" : "opacity-0"
                  } 
                  lg:[clip-path:polygon(0%_0%,100%_0%,100%_45%,calc(100%+1.25vw)_50%,100%_55%,100%_100%,0%_100%,0%_55%,1.25vw_50%,0%_45%)]
                  max-lg:[clip-path:polygon(0%_0%,100%_0%,100%_100%,55%_100%,50%_calc(100%+1.5vw),45%_100%,0%_100%,0%_0%)]`}
                  style={{ backgroundColor: "rgba(67, 198, 228, 0.1)" }}
                />

                {/* CONTENT LAYER */}
                <div className="absolute inset-0 overflow-hidden lg:overflow-visible flex items-center justify-center">
                  
                  {/* COLLAPSED TITLE */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      isActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                    }`}
                  >
                    <h3 className="hidden lg:block font-bold tracking-[0.3em] uppercase text-white whitespace-nowrap -rotate-90 origin-center" style={{ fontSize: "clamp(12px, 1vw, 16px)" }}>{item.title}</h3>
                    <h3 className="lg:hidden font-bold tracking-[0.2em] uppercase text-white text-center w-full px-[5vw]" style={{ fontSize: "clamp(14px, 3.8vw, 20px)" }}>{item.title}</h3>
                  </div>

                  {/* EXPANDED CONTENT */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center transition-all duration-700 ${
                      isActive ? "opacity-100 scale-100 delay-200" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <Sparkles className="text-[#00d8ff]" style={{ width: "clamp(24px, 2.2vw, 40px)", height: "clamp(24px, 2.2vw, 40px)", marginBottom: "2vw" }} />
                    <h3 className="font-bold text-white uppercase tracking-tight" style={{ fontSize: "clamp(16px, 1.8vw, 28px)", marginBottom: "2vw" }}>{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed mx-auto" style={{ fontSize: "clamp(13px, 0.95vw, 16px)", maxWidth: "300px" }}>{item.description}</p>
                  </div>
                </div>

                {/* SVG SEPARATORS (DESKTOP) */}
                {index === 0 && (
                  <div className="hidden lg:block absolute top-0 left-[-0.1vw] w-[2.5vw] h-full z-30 pointer-events-none">
                    <svg viewBox="0 0 40 100" preserveAspectRatio="none" className="h-full w-full">
                      <path d="M 2 0 L 2 45 L 18 50 L 2 55 L 2 100" fill="none" stroke={isFirstLineActive ? "#43c6e4" : "rgba(255,255,255,0.2)"} strokeWidth={isFirstLineActive ? "2" : "1"} className="transition-all duration-500" />
                    </svg>
                  </div>
                )}
                <div className="hidden lg:block absolute top-0 right-[-1.25vw] w-[2.5vw] h-full z-30 pointer-events-none">
                  <svg viewBox="0 0 40 100" preserveAspectRatio="none" className="h-full w-full">
                    <path d="M 2 0 L 2 45 L 18 50 L 2 55 L 2 100" fill="none" stroke={isLineActive ? "#43c6e4" : "rgba(255,255,255,0.2)"} strokeWidth={isLineActive ? "2" : "1"} className="transition-all duration-500" />
                  </svg>
                </div>

                {/* SVG SEPARATORS (MOBILE) */}
                {index === 0 && (
                  <div className="lg:hidden absolute top-[-0.1vw] left-0 w-full h-[3vw] z-30 pointer-events-none">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                      <path d="M 0 2 L 45 2 L 50 18 L 55 2 L 100 2" fill="none" stroke={isFirstLineActive ? "#43c6e4" : "rgba(255,255,255,0.2)"} strokeWidth={isFirstLineActive ? "2" : "1"} className="transition-all duration-500" />
                    </svg>
                  </div>
                )}
                <div className="lg:hidden absolute bottom-[-1.5vw] left-0 w-full h-[3vw] z-30 pointer-events-none">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                    <path d="M 0 2 L 45 2 L 50 18 L 55 2 L 100 2" fill="none" stroke={isLineActive ? "#43c6e4" : "rgba(255,255,255,0.2)"} strokeWidth={isLineActive ? "2" : "1"} className="transition-all duration-500" />
                    </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .why-us-item-inactive { 
            width: clamp(80px, 11vw, 150px) !important; 
            flex: 0 0 auto !important;
          }
          .why-us-item-active {
            width: clamp(300px, 30vw, 500px) !important;
            flex: 0 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUsSection;