import { useState } from "react";
import { Pencil } from "lucide-react";

interface WhyUsItem {
  title: string;
  description: string;
}

const items: WhyUsItem[] = [
  { title: "Partnership", description: "We challenge, refine, and improve your ideas. We don’t just execute tasks, we think with you. If an idea won’t work, we say it. If there’s a better direction, we recommend it. If something needs refining, we challenge it. You get a partner who brings perspective, strategy, and strong creative judgment, ensuring your brand grows with purpose and intention." },
  { title: "Seamless Collaboration", description: "You’re never left waiting for updates or chasing someone for clarity. Our workflows are structured, our communication is fast, and our team remains consistently accessible throughout the entire project. You always know where things stand and can move forward with confidence at every step." },
  { title: "Senior Expertise", description: "No junior hand-offs or “learning on your project.” Your project is never handed off to inexperienced team members. Every stage is led by senior-level designers, engineers, and performance specialists with real-world experience. This means faster problem-solving, better decision-making, and work that is executed with depth, precision, and long-term thinking." },
  { title: "Full Transparency", description: "Clear scopes. Clean timelines. Defined deliverables. You always know what’s happening, why it’s happening, and what comes next. Our scopes, deliverables, timelines, and processes are clearly defined and tracked so there is never confusion or guesswork. No hidden costs, no vague milestones, and no grey areas, just a clean and predictable partnership you can rely on." },
  { title: "Unified Team", description: "Your brand, website, app, marketing, they all live within one connected system. Instead of juggling multiple partners, you work with a single team that designs, builds, and grows your entire digital presence with perfect alignment. Every output reinforces the next, creating consistency, efficiency, and long-term scalability." },
  { title: "Client-First", description: "We prioritize your goals, your project,  your timelines, and your outcomes above everything else. Our focus is on building solutions that actually move your business forward, not padding invoices. You get honest communication, realistic expectations, and a team fully invested in your success from the first meeting to the final delivery. We grow with you." },
];

const WhyUsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section 
      className="relative bg-transparent"
      style={{ padding: "clamp(3.5rem, 6vw, 8rem) 0" }}
    >
      <div className="mx-auto w-full px-[5vw]">
        
        <div className="text-center" style={{ paddingBottom: "0.5rem" }}>
          <h2 className="text-white font-bold leading-tight why-us-main-title">
            Why Echo & <span className="text-[#47c2d2]">Impact?</span>
          </h2>
        </div>

        {/* FLEX CONTAINER */}
        <div className="why-us-container w-[70vw] md:w-[70vw] lg:w-[92vw] relative left-1/2 -translate-x-1/2 flex flex-col lg:flex-row justify-center items-stretch gap-0 lg:h-[35vw] min-h-[80vh] lg:min-h-0 mt-2 md:mt-4 mb-10 lg:my-20">
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                style={{ zIndex: isActive ? 20 : 10 }}
                className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-visible lg:!h-full why-us-item ${
                  isActive ? "why-us-item-active" : "why-us-item-inactive"
                }`}
              >
                {/* BACKGROUND HIGHLIGHT & INNER GLOW */}
                <div
                  className={`absolute transition-all duration-500 pointer-events-none ${
                    isActive ? "opacity-100" : "opacity-0"
                  }
                  lg:top-0 lg:bottom-0 lg:left-0 lg:right-[-1.125vw]
                  max-lg:left-0 max-lg:right-0 max-lg:top-[-1.35vw] max-lg:bottom-[0.15vw]
                  lg:[clip-path:polygon(0%_0%,calc(100%-1.125vw)_0%,calc(100%-1.125vw)_45%,100%_50%,calc(100%-1.125vw)_55%,calc(100%-1.125vw)_100%,0%_100%,0%_55%,1.125vw_50%,0%_45%)]
                  max-lg:[clip-path:polygon(0%_0%,45%_0%,50%_1.2vw,55%_0%,100%_0%,100%_calc(100%-1.2vw),55%_calc(100%-1.2vw),50%_100%,45%_calc(100%-1.2vw),0%_calc(100%-1.2vw))]`}
                  style={{ 
                    backgroundColor: "rgba(71, 194, 210, 0.1)",
                    boxShadow: isActive ? "inset 0 0 35px 5px rgba(71, 194, 210, 0.9)" : "none",
                  }}
                />

                {/* CONTENT LAYER */}
                <div className="absolute inset-0 overflow-hidden lg:overflow-visible flex items-center justify-center">
                  
                  {/* COLLAPSED TITLES */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      isActive ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                    }`}
                  >
                    <h3 className="hidden lg:block font-bold uppercase text-white whitespace-nowrap -rotate-90 origin-center why-us-collapsed-text">
                      {item.title}
                    </h3>
                    <h3 className="lg:hidden font-bold uppercase text-white text-center w-full px-[5vw] why-us-collapsed-text">
                      {item.title}
                    </h3>
                  </div>

                  {/* EXPANDED CONTENT */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center lg:items-start lg:justify-start lg:text-left lg:px-0 lg:pl-[3vw] lg:pt-[3vw] transition-all duration-700 ${
                      isActive ? "opacity-100 scale-100 delay-200" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <Pencil
                      className="text-[#47c2d2]" 
                      style={{ 
                        width: "clamp(24px, 2.2vw, 34px)", 
                        height: "clamp(24px, 2.2vw, 34px)", 
                        marginBottom: "1.5vw" 
                      }} 
                    />
                    <h3 className="font-bold text-white uppercase tracking-wider why-us-expanded-title mb-[1vw]">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed mx-auto lg:mx-0 why-us-description">{item.description}</p>
                  </div>
                </div>

                {/* SVG SEPARATORS */}
                {index === 0 && (
                  <div className="hidden lg:block absolute top-0 left-0 w-[2.5vw] h-full z-30 pointer-events-none">
                    <svg viewBox="0 0 40 100" preserveAspectRatio="none" className="h-full w-full">
                      <defs>
                        <linearGradient id="vertical-fade" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                          <stop offset="50%" stopColor="white" stopOpacity="1" />
                          <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                      <path d="M 2 0 L 2 45 L 18 50 L 2 55 L 2 100" fill="none" stroke="url(#vertical-fade)" strokeWidth="1" className="transition-all duration-500" />
                    </svg>
                  </div>
                )}
                <div className="hidden lg:block absolute top-0 right-[-2.5vw] w-[2.5vw] h-full z-30 pointer-events-none">
                  <svg viewBox="0 0 40 100" preserveAspectRatio="none" className="h-full w-full">
                      <defs>
                        <linearGradient id="vertical-fade-right" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                          <stop offset="50%" stopColor="white" stopOpacity="1" />
                          <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                    <path d="M 2 0 L 2 45 L 18 50 L 2 55 L 2 100" fill="none" stroke="url(#vertical-fade-right)" strokeWidth="1" className="transition-all duration-500" />
                  </svg>
                </div>
                {index === 0 && (
                  <div className="lg:hidden absolute top-[-1.5vw] left-0 w-full h-[3vw] z-30 pointer-events-none">
                    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                      <defs>
                        <linearGradient id="horizontal-fade" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                          <stop offset="50%" stopColor="white" stopOpacity="1" />
                          <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 2 L 45 2 L 50 18 L 55 2 L 100 2" fill="none" stroke="url(#horizontal-fade)" strokeWidth="1" className="transition-all duration-500" />
                    </svg>
                  </div>
                )}
                <div className="lg:hidden absolute bottom-[-1.5vw] left-0 w-full h-[3vw] z-30 pointer-events-none">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                      <defs>
                        <linearGradient id="horizontal-fade-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                          <stop offset="50%" stopColor="white" stopOpacity="1" />
                          <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                    <path d="M 0 2 L 45 2 L 50 18 L 55 2 L 100 2" fill="none" stroke="url(#horizontal-fade-bottom)" strokeWidth="1" className="transition-all duration-500" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .why-us-collapsed-text { font-size: 11px; letter-spacing: 0.2em; }
        .why-us-expanded-title { font-size: 14px; letter-spacing: 0.05em; }
        .why-us-description { font-size: 12px; max-width: 280px; }
        .why-us-main-title { font-size: 28px !important; }

        @media (max-width: 763px) { 
          .why-us-item-inactive { height: 11vh !important; }
          .why-us-item-active { height: 30vh !important; }
        }

        @media (min-width: 764px) {
          .why-us-collapsed-text { font-size: 13.5px; letter-spacing: 0.25em; }
          .why-us-expanded-title { font-size: 16px; letter-spacing: 0.08em; }
          .why-us-description { font-size: 13px; max-width: 450px; }
          .why-us-main-title { font-size: 42px !important; }
          .why-us-item-inactive { height: 12vh !important; }
          .why-us-item-active { height: 32vh !important; }
        }

        @media (min-width: 1024px) {
          .why-us-collapsed-text { font-size: 15px; letter-spacing: 0.3em; }
          .why-us-expanded-title { font-size: 18px; letter-spacing: 0.1em; }
          .why-us-description { font-size: 14px; max-width: 320px; line-height: 1.6; }
          .why-us-main-title { font-size: 48px !important; }
          .why-us-item-inactive { width: 95px !important; height: 100% !important; }
          .why-us-item-active { width: 420px !important; height: 100% !important; }
          .why-us-container { height: 30vw !important; }
        }

        @media (min-width: 1440px) {
          .why-us-collapsed-text { font-size: 19px; letter-spacing: 0.4em; }
          .why-us-expanded-title { font-size: 21px; letter-spacing: 0.12em; }
          .why-us-description { font-size: 15px; max-width: 500px; line-height: 1.7; }
          .why-us-main-title { font-size: 45px !important; }
          .why-us-item-inactive { width: 150px !important; }
          .why-us-item-active { width: 620px !important; }
          .why-us-container { height: 26vw !important; }
        }

        @media (min-width: 2560px) {
          .why-us-collapsed-text { font-size: 25px; letter-spacing: 0.5em; }
          .why-us-expanded-title { font-size: 30px; }
          .why-us-description { font-size: 22px; max-width: 800px; }
          .why-us-main-title { font-size: 85px !important; }
          .why-us-item-inactive { width: 200px !important; }
          .why-us-item-active { width: 900px !important; }
          .why-us-container { height: 22vw !important; max-width: 2600px; margin: 6rem auto 0 auto !important; }
        }
      `}} />
    </section>
  );
};

export default WhyUsSection;