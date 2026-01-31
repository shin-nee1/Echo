import React from "react";
import { motion } from "framer-motion";
import { Brain, RotateCcw, Handshake, MessageSquare } from "lucide-react";

const WhatWeBelieve = () => {
  const beliefs = [
    {
      title: "Intentionality",
      subtitle: "Work should be done with intention, not assumptions",
      description: "Every project deserves clarity, structure, and a team that takes responsibility seriously.",
      icon: <Brain className="w-8 h-8 text-[#00d8ff]" />,
    },
    {
      title: "Consistency",
      subtitle: "Quality is a consistent practice",
      description: "We don't believe in 'one-off' brilliance. We build systems that maintain excellence at every touchpoint.",
      icon: <RotateCcw className="w-8 h-8 text-[#00d8ff]" />,
    },
    {
      title: "Partnership",
      subtitle: "Growth comes from partnership, not transactions",
      description: "We align our success with yours, moving beyond the vendor relationship into true brand stewardship.",
      icon: <Handshake className="w-8 h-8 text-[#00d8ff]" />,
    },
    {
      title: "Legacy",
      subtitle: "Support should not end at delivery",
      description: "We stay present long after launch—refining, advising, and helping your brand move forward with confidence.",
      icon: <MessageSquare className="w-8 h-8 text-[#00d8ff]" />,
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#010a0f] relative overflow-hidden">
      {/* BACKGROUND ACCENT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d8ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* SECTION HEADER - Tightened */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
          <span className="text-[#00d8ff] text-xs font-bold tracking-[0.3em] uppercase mb-4">Core Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            What We <span className="text-[#00d8ff]">Believe</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#00d8ff] mt-6 shadow-[0_0_15px_rgba(0,216,255,0.8)]" />
        </div>

        {/* GRID CONTAINER - Optimized Sizing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {beliefs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 lg:p-10 bg-white/[0.02] border border-white/10 flex flex-col items-start transition-all duration-500 hover:bg-white/[0.04] hover:border-[#00d8ff]/30 overflow-hidden"
            >
              {/* Corner Accent (Top Right) */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-[#00d8ff]/40 transition-all duration-500" />

              {/* Icon & Title Row */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/[0.03] border border-white/10 group-hover:border-[#00d8ff]/20 group-hover:shadow-[0_0_20px_rgba(0,216,255,0.1)] transition-all duration-500">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-[#00d8ff] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">{item.title}</h4>
                  <h3 className="text-white font-bold text-lg lg:text-xl leading-tight uppercase tracking-wide">
                    {item.subtitle}
                  </h3>
                </div>
              </div>

              {/* Separator Line */}
              <div className="w-10 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-[#00d8ff]/30 transition-all duration-700 mb-6" />

              {/* Description */}
              <p className="text-white/40 text-sm md:text-base leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
                {item.description}
              </p>

              {/* Subtle Animated Background Element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00d8ff]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;