import React, { useState } from "react";
import { motion } from "framer-motion";

interface ServiceData {
  title: string;
  items: string[];
}

const ServiceCard = ({ title, items }: ServiceData) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-full h-full group ${isHovered ? "z-[100]" : "z-10"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* MAIN GLASS CARD LAYER */}
      <motion.div
        animate={{ y: isHovered ? -45 : 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="relative z-30 w-full h-full rounded-[2.5rem] bg-white/[0.04] backdrop-blur-[45px] border border-white/[0.12] p-10 flex flex-col shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {/* Internal Glows */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00d8ff]/15 blur-[110px] rounded-full pointer-events-none" />
        
        <div className="relative z-40 flex flex-col h-full">
          {/* HEADER: Matched to PageHero's simple Sans-Serif font-display */}
          <h3 className="text-[32px] font-bold text-white tracking-[-0.02em] leading-[1.1] mb-8 font-display">
            {title}
          </h3>
          
          <div className="mb-10">
            <p className="text-[#00d8ff] text-[11px] font-black uppercase tracking-[0.35em] mb-4">
              What&apos;s included
            </p>

            {/* THE BLUR-FADE LINE (No sharp edges) */}
            <div 
              className="w-full h-[1.5px] bg-[#00d8ff]"
              style={{
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)'
              }}
            />
          </div>

          <ul className="space-y-6 flex-grow">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-5">
                <div className="mt-2 flex-shrink-0">
                  <div className="relative w-[11px] h-[11px]">
                     <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
                     <span className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-[#00d8ff]" />
                  </div>
                </div>
                <span className="text-white/80 text-[16px] leading-snug font-medium tracking-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* LEARN MORE DRAWER (CYAN GLASS) */}
      <div className="absolute left-0 right-0 bottom-0 z-20 h-32 translate-y-[15%] pointer-events-none overflow-hidden rounded-b-[2.5rem]">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isHovered ? "0%" : "-100%" }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="w-full h-full bg-gradient-to-t from-[#00d8ff] via-[#00d8ff]/60 to-transparent backdrop-blur-2xl border-x border-b border-white/20 flex items-end justify-center pb-8"
        >
          <span className="text-white text-[14px] font-black uppercase tracking-[0.4em] drop-shadow-md">
            Learn More
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCard;