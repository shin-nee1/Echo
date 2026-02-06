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
  const stepCount = steps.length;

  /**
   * GENERATE DYNAMIC PATH
   * Removed the trailing "H" commands so the line stops exactly 
   * at the coordinate where the last card is positioned.
   */
  const getDynamicPath = () => {
    const toTwo = "M 175 250 H 585 Q 625 250 625 290 V 610 Q 625 650 585 650";
    const toThree = " H 215 Q 175 650 175 690 V 1010 Q 175 1050 215 1050";
    const toFour = " H 585 Q 625 1050 625 1090 V 1410 Q 625 1450 585 1450";
    const toFive = " H 215 Q 175 1450 175 1490 V 1810 Q 175 1850 215 1850";
    const toSix = " H 585 Q 625 1850 625 1890 V 2210 Q 625 2250 585 2250";
    const toSeven = " H 215 Q 175 2250 175 2290 V 2610 Q 175 2650 215 2650";

    if (stepCount >= 7) return toTwo + toThree + toFour + toFive + toSix + toSeven;
    if (stepCount === 6) return toTwo + toThree + toFour + toFive + toSix;
    if (stepCount === 5) return toTwo + toThree + toFour + toFive;
    if (stepCount === 4) return toTwo + toThree + toFour;
    if (stepCount === 3) return toTwo + toThree;
    return toTwo; // For 2 steps
  };

  /**
   * DYNAMIC SVG HEIGHT
   * Tightened the height values to ensure the SVG container 
   * ends shortly after the last card's connection point.
   */
  const getSvgDimensions = () => {
    if (stepCount >= 7) return { h: "2800", view: "0 0 800 2800" };
    if (stepCount === 6) return { h: "2400", view: "0 0 800 2400" };
    if (stepCount === 5) return { h: "2000", view: "0 0 800 2000" };
    if (stepCount === 4) return { h: "1600", view: "0 0 800 1600" };
    return { h: "1200", view: "0 0 800 1200" }; // Perfect for 3 steps
  };

  const dimensions = getSvgDimensions();

  return (
    <section className="relative w-full bg-transparent py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* HEADER */}
        <div className="mb-32 text-center lg:text-left">
          <h2 className="text-white text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tight leading-none mb-4 whitespace-nowrap">
            {title} <span className="text-[#43c6e4]">{highlight}</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* ADAPTIVE BEELINE */}
          <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
            <svg 
              width="100%" 
              height={dimensions.h} 
              viewBox={dimensions.view} 
              fill="none" 
              className="overflow-visible"
            >
              <path
                d={getDynamicPath()} 
                stroke="rgba(67, 198, 228, 0.35)"
                strokeWidth="2.5"
                strokeDasharray="12 16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isFlippedLayout = index === 1 || index === 3 || index === 5 || index === 7;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center w-full mb-24 lg:mb-0 ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  } ${index !== 0 ? "lg:-mt-48" : ""}`} 
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full max-w-md p-10 rounded-[3rem] bg-white/[0.02] backdrop-blur-xl border border-white/10 flex flex-col items-start text-left group transition-all duration-500 hover:border-[#43c6e4]/50 hover:bg-white/[0.04] z-20"
                  >
                    {!isFlippedLayout && (
                      <div className="relative mb-10 self-center">
                        <motion.img
                          animate={{ y: [0, -15, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          src={step.image}
                          alt={step.title}
                          className="w-64 h-64 object-contain drop-shadow-[0_20px_50px_rgba(67,198,228,0.45)]"
                        />
                      </div>
                    )}

                    <div className="w-full px-2">
                      <div className="mb-8 flex justify-start">
                        <div className="flex items-center justify-center w-20 h-10 rounded-full bg-cyan-950/60 border border-[#43c6e4]/40 shadow-[inset_0_0_15px_rgba(67,198,228,0.3)]">
                          <span className="text-white text-lg font-black leading-none select-none">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-3xl font-black text-white tracking-[0.2em] uppercase mb-5">
                        {step.title}
                      </h3>

                      <p className="text-slate-400 text-base lg:text-lg leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                        {step.description}
                      </p>
                    </div>

                    {isFlippedLayout && (
                      <div className="relative mt-10 self-center">
                        <motion.img
                          animate={{ y: [0, 15, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          src={step.image}
                          alt={step.title}
                          className="w-64 h-64 object-contain drop-shadow-[0_20px_50px_rgba(67,198,228,0.45)]"
                        />
                      </div>
                    )}
                    
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#43c6e4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;