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
    <section className="relative w-full bg-transparent overflow-hidden" style={{ padding: "clamp(2rem, 8vh, 5rem) 0" }}>
      
      {/* HEADER: Padding classes px-4 and lg:px-[6vw] have been removed to set padding to 0 */}
      <div className="w-full p-0 mb-8 lg:mb-8 text-center lg:text-left relative z-20">
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

      {/* CARDS CONTAINER: Logic and structure remain untouched */}
      <div className="mx-auto px-4 lg:px-[6vw] max-w-[860px] relative z-10">
        <div className="flex flex-col items-center w-full relative">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === steps.length - 1;
            const mobileTransform = (index < 4) ? "-translate-x-[12px]" : "translate-x-[12px]";
            
            // GLOW LOGIC BASED ON STEP NUMBER (0-indexed)
            // Steps 1,3,5,7 (indices 0,2,4,6) get Top Glow
            // Steps 2,4,6 (indices 1,3,5) get Bottom Glow
            const isTopGlow = index % 2 === 0; 
            const glowGradient = isTopGlow 
              ? "radial-gradient(circle at 50% 0%, rgba(67, 198, 228, 0.15) 0%, transparent 70%)"
              : "radial-gradient(circle at 50% 100%, rgba(67, 198, 228, 0.15) 0%, transparent 70%)";

            return (
              <div key={index} className="w-full flex justify-center lg:grid lg:grid-cols-2 lg:h-[340px] mb-8 lg:mb-0 relative">
                <div className={`flex w-full justify-center items-center ${isLeft ? "lg:justify-start lg:order-1" : "lg:justify-end lg:order-2"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`relative w-full ${mobileTransform} lg:translate-x-0 mx-auto lg:mx-0 bg-white/[0.03] backdrop-blur-lg border border-white/10 flex flex-col items-start justify-between transition-all duration-500 hover:border-[#43c6e4]/40 z-20 shadow-2xl`}
                    style={{ 
                        maxWidth: "280px", 
                        padding: "1.5rem", 
                        borderRadius: "1.2rem", 
                        height: "260px",
                        background: `${glowGradient}, rgba(255, 255, 255, 0.03)` 
                    }}
                  >
                    <div className="relative self-center w-full flex justify-center items-center flex-grow">
                      <motion.img
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        src={step.image}
                        alt={step.title}
                        className="object-contain w-28 h-28 md:w-32 md:h-32" 
                      />
                    </div>
                    <div className="w-full text-left mt-auto">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan/30 text-[#43c6e4] font-bold text-[0.6rem] mb-2 uppercase">
                        {step.number}
                      </span>
                      <h3 className="font-bold text-white uppercase mb-1 text-sm tracking-widest leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-slate-400/80 leading-relaxed font-light text-[0.7rem] line-clamp-3">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {!isLast && (
                  <div className={`hidden lg:block absolute top-1/2 h-full pointer-events-none z-0 ${isLeft ? "left-[170px] w-[54%]" : "right-[170px] w-[54%]"}`}>
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="overflow-visible">
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