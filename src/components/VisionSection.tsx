import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const VisionSection = () => {
  return (
    <section className="pt-20 lg:pt-20 pb-15 lg:pb-24 relative overflow-hidden bg-[#010a0f]">
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[500px] h-[500px] bg-[#00d8ff]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* LEFT: VISION CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 flex flex-col"
          >
            {/* 1. Header is now isolated */}
            <SectionHeader 
              title="Our" 
              highlight="Vision" 
              centered={false} 
            />
            
            {/* 2. WRAPPER: This pulls the text UP and kills the gap from the white line */}
            <div className="relative -mt-12 md:-mt-16 lg:-mt-20"> 
              <div className="space-y-6 text-white/50 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl">
                <p>
                  To create a place where businesses can finally work with a partner they trust. One that <span className="text-white/80 font-normal">communicates clearly</span>, documents properly, and shows up consistently from start to scale.
                </p>
                
                <div className="pl-6 border-l border-[#00d8ff]/30 space-y-4">
                  <p>
                    A partner that believes process is not bureaucracy; it is the <span className="text-white/80 font-normal">foundation of good work</span>. And execution is not just delivery; it is craft and responsibility.
                  </p>
                </div>

                <p className="text-white/90 pt-2 text-lg md:text-xl">
                  Our vision is to build brands and digital systems that are <span className="text-[#00d8ff] font-medium italic">stable, scalable, and strategically sound.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: INCREASED IMAGE PLACEHOLDER */}
          <div className="relative order-1 lg:order-2 flex justify-center items-start pt-8 lg:pt-8">
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full aspect-video md:aspect-[4/3] max-w-2xl lg:ml-auto flex items-center justify-center z-10"
            >
              {/* Massive Glass Placeholder */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-[radial-gradient(#00d8ff08_1px,transparent_1px)] bg-[size:32px_32px]" />
                <span className="text-white/20 font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs px-10 text-center">
                  Vision Narrative Visual Component
                </span>
              </div>

              {/* AMBIENT FLOOR REFLECTION */}
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[85%] h-12 bg-[#00d8ff]/20 blur-[60px] rounded-full -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;