import React from "react";
import { motion } from "framer-motion";

export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
  icon?: string; // Added optional icon prop for flexibility
}

interface ProcessSectionProps {
  title: string;
  highlight: string;
  steps: ProcessStepData[];
}

const ProcessSection = ({ title, highlight, steps }: ProcessSectionProps) => {
  return (
    <section className="relative w-full bg-[#010a0f] py-20 lg:py-32 overflow-hidden lg:overflow-visible">
      
      {/* ATMOSPHERIC GLOW BLOBS */}
      <div className="absolute top-[10%] -left-[10%] w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-cyan-500/10 blur-[100px] lg:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -right-[10%] w-[350px] lg:w-[600px] h-[350px] lg:h-[600px] bg-cyan-600/5 blur-[120px] lg:blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 lg:mb-32">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight uppercase">
            {title} <span className="text-[#00d8ff]">{highlight}</span>
          </h2>
          <div className="w-16 lg:w-20 h-1.5 bg-[#00d8ff] rounded-full mt-6 shadow-[0_0_20px_rgba(0,216,255,0.6)]" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* PRECISION SVG LINE: Desktop Only */}
          <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 1500" fill="none" className="overflow-visible">
              <motion.path
                d="M 220 80 V 240 H 580 V 540 H 220 V 840 H 580 V 1140 H 220 V 1300"
                stroke="rgba(0, 216, 255, 0.15)"
                strokeWidth="2"
                strokeDasharray="10 12"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* MOBILE VERTICAL LINE: Only visible on small screens */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/10 to-transparent lg:hidden" />

          <div className="space-y-24 lg:space-y-0 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              // Emojis mapping logic if icon isn't provided in props
              const displayIcon = step.icon || (index === 0 ? "🔍" : index === 1 ? "💡" : index === 2 ? "🎨" : index === 3 ? "💬" : "🚀");

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? "lg:justify-start" : "lg:justify-end"
                  } lg:min-h-[350px] pl-10 lg:pl-0`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: typeof window !== 'undefined' && window.innerWidth < 1024 ? 20 : (isEven ? -40 : 40) }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full max-w-[450px]"
                  >
                    {/* PREMIUM GLASS CARD */}
                    <div className="group relative p-8 lg:p-10 rounded-[2rem] lg:rounded-[2.5rem] bg-[#051118]/60 border border-white/10 backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] hover:border-cyan-500/40 transition-all duration-500">
                      
                      {/* FLOATING 3D ASSET: Responsive positioning */}
                      <div className="absolute -top-12 -right-2 lg:-top-24 lg:-right-12 w-28 h-28 lg:w-44 lg:h-44">
                        <motion.div 
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-full h-full bg-gradient-to-tr from-white/10 to-transparent rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl relative"
                        >
                           <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full scale-75" />
                           <span className="text-4xl lg:text-6xl filter saturate-150 drop-shadow-[0_10px_10px_rgba(0,216,255,0.4)] relative z-10">
                              {displayIcon}
                           </span>
                        </motion.div>
                      </div>

                      <div className="relative z-10 space-y-4 lg:space-y-5">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-cyan-500 text-black text-[10px] lg:text-xs font-black shadow-[0_0_15px_rgba(0,216,255,0.4)]">
                            {step.number}
                          </div>
                          <div className="h-px w-8 lg:w-10 bg-cyan-500/30" />
                        </div>
                        
                        <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight uppercase">
                          {step.title}
                        </h3>
                        
                        <p className="text-slate-400 text-base lg:text-lg leading-relaxed font-normal opacity-80 group-hover:opacity-100 transition-opacity">
                          {step.description}
                        </p>
                      </div>
                    </div>
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