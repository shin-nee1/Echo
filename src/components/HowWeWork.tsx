import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "ONE TEAM FOR THE ENTIRE JOURNEY",
    description: "Designers, developers, and marketers work together from day one. No handoffs to disconnected groups. No fragmented understanding of your brand."
  },
  {
    number: "02",
    title: "CLARITY BEFORE EXECUTION",
    description: "We begin with alignment, structure, and understanding. We define goals, constraints, needs, and outcomes before we design a screen or write code."
  },
  {
    number: "03",
    title: "PROCESS THAT REDUCES STRESS",
    description: "Clients often come to us after experiencing disorganized workflows elsewhere. We solve that through documented scopes and clear milestones."
  },
  {
    number: "04",
    title: "LONG TERM THINKING",
    description: "We don't design or build for the moment. We plan for how your brand will grow, scale, communicate, and compete years from now."
  },
  {
    number: "05",
    title: "TRANSPARENCY AT EVERY STAGE",
    description: "You always know what is happening, why it is happening, and what decisions were made. There are no gray areas or disappearing teams."
  }
];

const HowWeWork = () => {
  return (
    // Increased pt-40 to prevent the heading from cutting off
    <section className="pt-40 pb-24 lg:pt-28 lg:pb-32 bg-[#010a0f] relative overflow-hidden">
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00d8ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* CORRECTED HEADING */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            How <span className="text-white">We</span> <span className="text-[#00d8ff]">Work</span>
          </h2>
          <div className="w-20 h-1 bg-[#00d8ff] mx-auto mt-6 rounded-full" />
        </div>

        {/* REDUCED CARD SIZES */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              // Tighter padding (p-8) and smaller max-width to reduce rectangle size
              className={`group relative p-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-xl hover:border-[#00d8ff]/40 transition-all duration-500 min-h-[300px] flex flex-col justify-between ${
                index === 4 ? "md:col-start-1" : ""
              }`}
            >
              {/* THE VIBRANT ETCHED GRADIENT NUMBER */}
              <div className="text-7xl md:text-8xl font-black leading-none bg-gradient-to-b from-[#00d8ff] via-[#00d8ff]/60 to-transparent bg-clip-text text-transparent opacity-100 select-none -ml-1">
                {step.number}
              </div>

              {/* CARD CONTENT */}
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-wide uppercase leading-tight">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm md:text-base leading-relaxed font-light group-hover:text-white/70 transition-colors">
                  {step.description}
                </p>
              </div>

              {/* INNER GLOW EFFECT */}
              <div className="absolute inset-0 bg-[#00d8ff]/5 opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity pointer-events-none duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;