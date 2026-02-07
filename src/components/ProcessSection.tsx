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
  return (
    <section className="relative w-full bg-transparent overflow-hidden" style={{ padding: "clamp(2rem, 8vh, 5rem) 0" }}>
      <div className="mx-auto px-4 lg:px-[6vw] max-w-[1100px] relative z-10">
        
        {/* HEADER */}
        <div className="mb-10 lg:mb-20 text-center lg:text-left">
          <h2 className="text-white font-bold tracking-tight leading-tight uppercase" style={{ fontSize: "clamp(1.6rem, 4vw, 3.2rem)" }}>
            {title} <span className="text-[#43c6e4]">{highlight}</span>
          </h2>
        </div>

        {/* WRAPPER */}
        <div className="flex flex-col items-center w-full relative">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === steps.length - 1;
            
            // Logic to move first 4 cards left, and the 5th one right
            const mobileTransform = (index < 4) 
              ? "-translate-x-[12px]" // Moves 1, 2, 3, 4 to the left
              : "translate-x-[12px]";  // Moves 5 to the right

            return (
              <div 
                key={index} 
                className="w-full flex justify-center lg:grid lg:grid-cols-2 lg:h-[340px] mb-8 lg:mb-0 relative"
              >
                {/* CARD SLOT */}
                <div className={`
                  flex w-full justify-center items-center
                  ${isLeft ? "lg:justify-start lg:order-1" : "lg:justify-end lg:order-2"}
                `}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    /* APPLYING THE SPLIT NUDGE:
                       - mobileTransform handles the mobile/tablet shift
                       - lg:translate-x-0 resets for desktop grid
                    */
                    className={`relative w-full ${mobileTransform} lg:translate-x-0 mx-auto lg:mx-0 bg-white/[0.03] backdrop-blur-lg border border-white/10 flex flex-col items-start transition-all duration-500 hover:border-[#43c6e4]/40 z-20 shadow-2xl`}
                    style={{ 
                      maxWidth: "280px", 
                      padding: "1.2rem 1.4rem", 
                      borderRadius: "1.2rem",
                      height: "260px" 
                    }}
                  >
                    <div className="relative self-center mb-3">
                      <motion.img
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        src={step.image}
                        alt={step.title}
                        className="object-contain w-16 h-16 md:w-20 md:h-20"
                      />
                    </div>
                    <div className="w-full text-left">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-cyan-950/40 border border-cyan/30 text-[#43c6e4] font-bold text-[0.6rem] mb-2 uppercase">
                        {step.number}
                      </span>
                      <h3 className="font-bold text-white uppercase mb-1 text-sm tracking-widest leading-tight">{step.title}</h3>
                      <p className="text-slate-400/80 leading-relaxed font-light text-[0.7rem] line-clamp-4">{step.description}</p>
                    </div>
                  </motion.div>
                </div>

                {/* THE DOTTED BRIDGE (Desktop Only) */}
                {!isLast && (
                  <div 
                    className={`hidden lg:block absolute top-1/2 h-full pointer-events-none z-0
                    ${isLeft ? "left-[140px] w-[54%]" : "right-[140px] w-[54%]"}`}
                  >
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="overflow-visible">
                      <path
                        d={isLeft ? "M 0 0 L 100 0 L 100 100" : "M 100 0 L 0 0 L 0 100"}
                        stroke="#43c6e4"
                        strokeOpacity="0.25"
                        strokeWidth="1.5"
                        strokeDasharray="6 6"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                )}

                {/* EMPTY SPACER */}
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