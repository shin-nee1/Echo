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
      // VERTICAL LENGTH ADJUSTMENT:
      // aspect-square remains for mobile/tablet/standard laptop.
      // xl:aspect-[4/5] increases vertical length for 1440px screens.
      className="relative w-full aspect-[2/3] md:aspect-[6/7] lg:aspect-[5/6] xl:aspect-[3/3] 2xl:aspect-[3/4] group"
      style={{ zIndex: isHovered ? 100 : 10 }} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* MAIN GLASS CARD LAYER */}
      <motion.div
        initial={false}
        animate={{ y: isHovered ? -35 : 0 }}
        transition={{ 
          type: "tween", 
          ease: [0.22, 1, 0.36, 1], 
          duration: 0.5 
        }}
        // Added xl:pb-12 to handle the extra vertical height gracefully
        className="relative z-30 w-full h-full rounded-[2rem] bg-white/[0.04] backdrop-blur-[35px] border border-white/[0.12] p-6 lg:p-9 xl:p-8 xl:pb-16 flex flex-col shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] overflow-hidden will-change-transform"
      >
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00d8ff]/10 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="relative z-40 flex flex-col h-full">
          <h3 className="text-[20px] md:text-[22px] lg:text-[22px] xl:text-[20px] font-bold text-white tracking-tight leading-[1.1] mb-3 lg:mb-5 font-display uppercase">
            {title}
          </h3>
          
          <div className="mb-4 lg:mb-4">
            <p className="text-[#00d8ff] text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] mb-2">
              What&apos;s included
            </p>

            <div 
              className="w-full h-[1px] bg-[#00d8ff]"
              style={{
                maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)'
              }}
            />
          </div>

          <ul className="space-y-2.5 lg:space-y-3.5 flex-grow">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="mt-1.5 flex-shrink-0">
                  <div className="relative w-[7px] h-[7px] lg:w-[8px] lg:h-[8px]">
                     <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                     <span className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-[#00d8ff]" />
                  </div>
                </div>
                <span className="text-white/80 text-[13px] lg:text-[14px] xl:text-[15px] leading-tight font-medium tracking-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* LEARN MORE DRAWER */}
      <div className="absolute left-0 right-0 bottom-0 z-20 h-24 translate-y-[12%] pointer-events-none overflow-hidden rounded-b-[2rem]">
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isHovered ? "0%" : "-100%" }}
          transition={{ 
            type: "tween", 
            ease: [0.22, 1, 0.36, 1], 
            duration: 0.5 
          }}
          className="w-full h-full bg-gradient-to-t from-[#00d8ff] via-[#00d8ff]/60 to-transparent backdrop-blur-2xl border-x border-b border-white/20 flex items-end justify-center pb-5 will-change-transform"
        >
          <span className="text-white text-[11px] font-black uppercase tracking-[0.35em] drop-shadow-md">
            Learn More
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceCard;