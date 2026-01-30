import React from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  items: string[];
}

const ServiceCard = ({ title, items }: ServiceCardProps) => {
  return (
    <div className="group h-full [perspective:1200px]">
      <motion.div
        // Reduce 3D intensity for mobile to prevent accidental triggers during scroll
        whileHover={{ 
          rotateX: 4, 
          rotateY: -4, 
          y: -8,
          scale: 1.01
        }}
        // Tap state for mobile users to see the effect
        whileTap={{ scale: 0.98 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 25,
          mass: 1 
        }}
        className="relative h-full w-full rounded-[2rem] lg:rounded-[2.5rem] transition-colors duration-500 [transform-style:preserve-3d] will-change-transform"
      >
        {/* 1. THE GLASS BASE */}
        <div className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-2xl border border-white/[0.1] transition-all duration-500 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/[0.07] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]" />

        {/* 2. DYNAMIC CYAN GLOW */}
        <div className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 lg:w-80 lg:h-80 bg-cyan-500/20 blur-[80px] lg:blur-[100px] rounded-full" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 lg:w-80 lg:h-80 bg-cyan-600/15 blur-[80px] lg:blur-[100px] rounded-full" />
        </div>

        {/* 3. CONTENT LAYER - Padding optimized for mobile */}
        <div className="relative z-10 p-8 lg:p-10 flex flex-col h-full [transform:translateZ(30px)] lg:[transform:translateZ(50px)]">
          <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight uppercase mb-2 group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-cyan-400/80 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.25em] mb-8 lg:mb-10">
            What&apos;s included
          </p>

          <ul className="space-y-4 lg:space-y-5">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 lg:gap-4">
                <div className="mt-1.5 relative flex-shrink-0">
                  <span className="block w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/30 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,216,255,0.8)]" />
                </div>
                <span className="text-slate-400 text-sm lg:text-[15px] leading-snug font-normal group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCard;