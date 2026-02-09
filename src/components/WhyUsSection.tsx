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
      style={{ padding: "clamp(3rem, 8vw, 8rem) 0" }}
    >
      <div className="mx-auto w-full px-[5vw]">
        
        {/* MAIN HEADER - Reduced padding for mobile */}
        <div className="text-center" style={{ paddingBottom: "clamp(1.5rem, 5vw, 4rem)" }}>
          <h2 className="text-white font-bold leading-tight why-us-main-title">
            Why Echo & <span className="text-[#43c6e4]">Impact?</span>
          </h2>
        </div>

        {/* FLEX CONTAINER - Reduced min-height for mobile/tablet */}
        <div className="why-us-container flex flex-col lg:flex-row justify-center items-stretch gap-0 lg:h-[35vw] min-h-[80vh] lg:min-h-0">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const isLineActive = isActive || activeIndex === index + 1;
            const isFirstLineActive = index === 0 && isActive;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                style={{ zIndex: isActive ? 20 : 10 }}
                className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-visible lg:!h-full why-us-item ${
                  isActive ? "why-us-item-active" : "why-us-item-inactive"
                }`}
              >
                {/* BACKGROUND HIGHLIGHT */}
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
                  
                  {/* COLLAPSED TITLES */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      isActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                    }`}
                  >
                    {/* DESKTOP (Rotated) */}
                    <h3 className="hidden lg:block font-bold uppercase text-white whitespace-nowrap -rotate-90 origin-center why-us-collapsed-text">
                      {item.title}
                    </h3>

                    {/* MOBILE/TABLET (Horizontal) */}
                    <h3 className="lg:hidden font-bold uppercase text-white text-center w-full px-[5vw] why-us-collapsed-text">
                      {item.title}
                    </h3>
                  </div>

                  {/* EXPANDED CONTENT */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center transition-all duration-700 ${
                      isActive ? "opacity-100 scale-100 delay-200" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <Sparkles className="text-[#00d8ff]" style={{ width: "clamp(24px, 2.2vw, 40px)", height: "clamp(24px, 2.2vw, 40px)", marginBottom: "2vw" }} />
                    <h3 className="font-bold text-white uppercase tracking-tight why-us-expanded-title">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed mx-auto why-us-description">{item.description}</p>
                  </div>
                </div>

                {/* --- SVG SEPARATORS --- */}

                {/* 1. TOP SEPARATOR (Desktop) - Re-added for first item */}
                {index === 0 && (
                  <div className="hidden lg:block absolute top-0 left-[-1.25vw] w-[2.5vw] h-full z-30 pointer-events-none">
                    <svg viewBox="0 0 40 100" preserveAspectRatio="none" className="h-full w-full">
                      <path d="M 2 0 L 2 45 L 18 50 L 2 55 L 2 100" fill="none" stroke={isFirstLineActive ? "#43c6e4" : "rgba(255,255,255,0.2)"} strokeWidth={isFirstLineActive ? "2" : "1"} className="transition-all duration-500" />
                    </svg>
                  </div>
                )}

                {/* 2. RIGHT SEPARATOR (Desktop) */}
                <div className="hidden lg:block absolute top-0 right-[-1.25vw] w-[2.5vw] h-full z-30 pointer-events-none">
                  <svg viewBox="0 0 40 100" preserveAspectRatio="none" className="h-full w-full">
                    <path d="M 2 0 L 2 45 L 18 50 L 2 55 L 2 100" fill="none" stroke={isLineActive ? "#43c6e4" : "rgba(255,255,255,0.2)"} strokeWidth={isLineActive ? "2" : "1"} className="transition-all duration-500" />
                  </svg>
                </div>

                {/* 3. TOP SEPARATOR (Mobile/Tablet) - Fixed the disappearance */}
                {index === 0 && (
                  <div className="lg:hidden absolute top-[-1.5vw] left-0 w-full h-[3vw] z-30 pointer-events-none">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                      <path d="M 0 2 L 45 2 L 50 18 L 55 2 L 100 2" fill="none" stroke={isFirstLineActive ? "#43c6e4" : "rgba(255,255,255,0.2)"} strokeWidth={isFirstLineActive ? "2" : "1"} className="transition-all duration-500" />
                    </svg>
                  </div>
                )}

                {/* 4. BOTTOM SEPARATOR (Mobile/Tablet) */}
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

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. MOBILE (Base Style - Below 764px) */
        .why-us-collapsed-text { font-size: 11px; letter-spacing: 0.2em; }
        .why-us-expanded-title { font-size: 15px; }
        .why-us-description { font-size: 12px; max-width: 280px; }
        .why-us-main-title { font-size: 28px !important; }

        @media (max-width: 763px) { 
          .why-us-item-inactive { height: 11vh !important; }
          .why-us-item-active { height: 30vh !important; }
        }

        /* 2. TABLET (764px to 1023px) */
        @media (min-width: 764px) {
          .why-us-collapsed-text { font-size: 13.5px; letter-spacing: 0.25em; }
          .why-us-expanded-title { font-size: 22px; }
          .why-us-description { font-size: 14px; }
          .why-us-main-title { font-size: 42px !important; }
          .why-us-item-inactive { height: 12vh !important; }
          .why-us-item-active { height: 32vh !important; }
        }

        /* 3. STANDARD LAPTOP (1024px to 1439px) */
        @media (min-width: 1024px) {
          .why-us-collapsed-text { font-size: 14px; letter-spacing: 0.3em; }
          .why-us-expanded-title { font-size: 24px; }
          .why-us-description { font-size: 15px; max-width: 320px; }
          .why-us-main-title { font-size: 48px !important; }
          .why-us-item-inactive { width: 120px !important; height: 100% !important; }
          .why-us-item-active { width: 500px !important; height: 100% !important; }
          .why-us-container { height: 38vw !important; }
        }

        /* 4. LARGE LAPTOP / MACBOOK (1440px to 2559px) */
        @media (min-width: 1440px) {
          .why-us-collapsed-text { font-size: 15px; letter-spacing: 0.4em; }
          .why-us-expanded-title { font-size: 28px; }
          .why-us-description { font-size: 17px; max-width: 380px; }
          .why-us-main-title { font-size: 45px !important; }
          .why-us-item-inactive { width: 150px !important; }
          .why-us-item-active { width: 620px !important; }
          .why-us-container { height: 32vw !important; }
        }

        /* 5. 4K MONITORS (2560px+) */
        @media (min-width: 2560px) {
          .why-us-collapsed-text { font-size: 25px; letter-spacing: 0.5em; }
          .why-us-expanded-title { font-size: 36px; }
          .why-us-description { font-size: 20px; max-width: 500px; }
          .why-us-main-title { font-size: 85px !important; }
          .why-us-item-inactive { width: 200px !important; }
          .why-us-item-active { width: 900px !important; }
          .why-us-container { height: 28vw !important; max-width: 2600px; margin: 0 auto; }
        }
      `}} />
    </section>
  );
};

export default WhyUsSection;