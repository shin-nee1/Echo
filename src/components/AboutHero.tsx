import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const AboutHero = () => {
  return (
    // Removed bg-[#010a0f] to allow global background to show
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      
      {/* Local Ambient Glow (kept for depth, remove if it clashes with global halo) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(0,216,255,0.1)_0%,_transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* HEADER */}
        <div className="relative z-20">
          <SectionHeader title="About" highlight="Us" centered={true} />
        </div>

        {/* ILLUSTRATION - Pushed up with negative margin to kill the gap */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full max-w-5xl aspect-[21/9] -mt-8 md:-mt-12 lg:-mt-16 mb-20"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-[2rem] lg:rounded-[4rem] bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl overflow-hidden"
          >
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
             <span className="text-white/20 font-medium tracking-[0.5em] uppercase text-[10px] md:text-xs relative z-10">
               Brand Architecture Narrative Visual
             </span>
          </motion.div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#00d8ff]/20 blur-[100px] rounded-full -z-10" />
        </motion.div>

        {/* TEXT CONTENT */}
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <p className="text-white/90 text-xl lg:text-2xl font-light leading-snug md:col-span-2 md:text-center mb-4">
            Echo & Impact was created with a simple belief: Great work comes from <span className="text-[#00d8ff] font-normal">clarity and structure.</span>
          </p>
          <p className="text-white/50 text-base lg:text-lg font-light leading-relaxed">
            We noticed a recurring problem: businesses invested in branding, yet lacked a partner who stayed <span className="text-white/80">accountable from first idea to execution.</span>
          </p>
          <p className="text-white/50 text-base lg:text-lg font-light leading-relaxed">
            We built this to be the opposite. Strategy is intentional, processes are transparent, and every step moves your brand forward with purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;