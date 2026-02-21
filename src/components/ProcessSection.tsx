import React from "react";
import { motion } from "framer-motion";

export type ProcessStepData = {
  number: string;
  title: string;
  description: string;
  image: string;
};

interface ProcessSectionProps {
  title: string;
  highlight: string;
  steps: ProcessStepData[];
}

const ProcessSection = ({ title, highlight, steps }: ProcessSectionProps) => {
  const fontConfig = {
    mobileSize: "1.65rem",
    tabletSize: "2.2rem",
    laptopSize: "2.3rem",
    desktop4kSize: "3rem",
    titleWeight: "font-bold",
    highlightColor: "#43c6e4",
    titleColor: "text-white"
  };

  return (
    <section className="relative w-full bg-transparent overflow-hidden" style={{ paddingTop: "clamp(2rem, 8vh, 5rem)", paddingBottom: "0.5rem" }}>
      
      {/* HEADER */}
      <div className="w-full p-0 mb-12 lg:mb-16 text-center lg:text-left relative z-20">
        <h2 
          className={`${fontConfig.titleColor} ${fontConfig.titleWeight} tracking-tight leading-tight `} 
          style={{ 
            fontSize: `clamp(${fontConfig.mobileSize}, 4vw, ${fontConfig.desktop4kSize})`,
          }}
        >
          <span>
            {title} <span style={{ color: fontConfig.highlightColor }}>{highlight}</span>
          </span>
        </h2>
      </div>

      {/* CARDS CONTAINER */}
      <div className="mx-auto px-4 lg:px-[6vw] max-w-[1200px] relative z-10">
        <div className="flex flex-col items-center w-full relative">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === steps.length - 1;
            const mobileTransform = (index < 4) ? "-translate-x-[12px]" : "translate-x-[12px]";
            
            // GLOW LOGIC
            const isTopGlow = index % 2 === 0; 
            const glowGradient = isTopGlow 
              ? "radial-gradient(circle at 50% 0%, rgba(67, 198, 228, 0.2) 0%, transparent 75%)"
              : "radial-gradient(circle at 50% 100%, rgba(67, 198, 228, 0.2) 0%, transparent 75%)";

            return (
              <div key={index} className={`w-full flex justify-center lg:grid lg:grid-cols-2 lg:h-[450px] ${isLast ? "mb-4" : "mb-12"} lg:mb-0 relative ${index > 0 ? "lg:-mt-20" : ""}`}>
                <div className={`flex w-full justify-center items-center ${isLeft ? "lg:justify-start lg:order-1" : "lg:justify-end lg:order-2"}`}>
                  <motion.div
                    /* ANIMATION CHANGED FOR MOBILE ONLY BELOW */
                    initial={{ 
                      opacity: 0, 
                      scale: (typeof window !== 'undefined' && window.innerWidth < 1024) ? 0.92 : 1,
                      y: (typeof window !== 'undefined' && window.innerWidth < 1024) ? 0 : 25 
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0 
                    }}
                    transition={{ 
                      duration: (typeof window !== 'undefined' && window.innerWidth < 1024) ? 0.4 : 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`
                      relative w-full ${mobileTransform} lg:translate-x-0 mx-auto lg:mx-0 
                      backdrop-blur-xl border border-white/20 flex flex-col transition-all duration-500 
                      hover:border-[#43c6e4]/50 z-20 shadow-2xl rounded-[1.5rem] 
                      p-6
                      
                      max-w-[420px] 
                      lg:max-w-[300px] lg:h-[350px] lg:p-[1.8rem]
                      xl:max-w-[345px] xl:h-[345px] xl:p-[2.2rem]
                    `}
                    style={{ 
                        background: `${glowGradient}, linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)`,
                        boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.15), 0 12px 40px 0 rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    {isTopGlow ? (
                      <>
                        <div className="relative self-center w-full flex justify-center items-center flex-grow">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="object-contain w-40 h-40 md:w-44 md:h-44" 
                          />
                        </div>
                        <div className="w-full text-left mt-4">
                          <span className="inline-block px-6 py-1 rounded-full bg-[#43c6e4]/15 backdrop-blur-xl border border-[#43c6e4]/30 text-white font-bold text-[0.7rem] mb-3 uppercase tracking-wider shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
                            {step.number}
                          </span>
                          <h3 className="font-bold text-white uppercase mb-2 text-base tracking-widest leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-slate-400/90 leading-relaxed font-light text-[0.8rem] line-clamp-3">
                            {step.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-full text-left mb-4">
                          <span className="inline-block px-6 py-1 rounded-full bg-[#43c6e4]/15 backdrop-blur-xl border border-[#43c6e4]/30 text-white font-bold text-[0.7rem] mb-3 uppercase tracking-wider shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]">
                            {step.number}
                          </span>
                          <h3 className="font-bold text-white uppercase mb-2 text-base tracking-widest leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-slate-400/90 leading-relaxed font-light text-[0.8rem] line-clamp-3">
                            {step.description}
                          </p>
                        </div>
                        <div className="relative self-center w-full flex justify-center items-center flex-grow">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="object-contain w-40 h-40 md:w-44 md:h-44" 
                          />
                        </div>
                      </>
                    )}
                  </motion.div>
                </div>

                {!isLast && (
                  <div 
                    className={`
                        hidden lg:block absolute top-1/2 h-full pointer-events-none z-0 
                        ${isLeft 
                            ? "lg:left-[120px] xl:left-[190px] w-[60%]" 
                            : "lg:right-[120px] xl:right-[190px] w-[60%]"
                        }
                    `}
                  >
                    <svg width="100%" height="90%" viewBox="0 0 100 100" preserveAspectRatio="none" className="overflow-visible">
                      <path
                        d={isLeft ? "M 0 0 L 85 0 Q 100 0 100 15 L 100 100" : "M 100 0 L 15 0 Q 0 0 0 15 L 0 100"}
                        stroke="#43c6e4" strokeOpacity="0.8" strokeWidth="2" strokeDasharray="6 6" fill="none" vectorEffect="non-scaling-stroke"
                        style={{ filter: "drop-shadow(0 0 8px rgba(67, 198, 228, 0.6))" }}
                      />
                    </svg>
                  </div>
                )}
                <div className={`hidden lg:block w-full ${isLeft ? "lg:order-2" : "lg:order-1"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;