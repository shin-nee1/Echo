import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface NavigationBannerProps {
  titlePrefix: string;
  highlight1: string;
  middleText: string;
  highlight2: string;
  leftBtnText: string;
  leftBtnLink: string;
  rightBtnText: string;
  rightBtnLink: string;
}

const ServiceNavigationBanner = ({
  titlePrefix,
  highlight1,
  middleText,
  highlight2,
  leftBtnText,
  leftBtnLink,
  rightBtnText,
  rightBtnLink
}: NavigationBannerProps) => {
  return (
    <section className="py-24 md:py-32 bg-[#010a0f] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden group border border-white/10 bg-[#050b10] shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
        >
          {/* 1. ANIMATED "LIFE" BACKGROUND */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1] 
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1/2 -left-1/4 w-[100%] h-[200%] bg-[#00d8ff]/10 blur-[120px] rounded-full pointer-events-none" 
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.05, 0.15, 0.05] 
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-1/2 -right-1/4 w-[100%] h-[200%] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" 
            />
          </div>
          
          {/* 2. GLASS OVERLAY */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl z-10" />
          
          {/* 3. CONTENT SECTION */}
          <div className="relative z-30 flex flex-col lg:flex-row items-center justify-between px-8 py-16 md:px-16 md:py-20 lg:px-24 lg:py-28 gap-12">
            
            {/* TEXT AREA with Centered Style for Mobile, Left for Desktop */}
            <div className="text-center lg:text-left space-y-6 max-w-2xl">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                {titlePrefix} <span className="text-[#00d8ff]">{highlight1}</span> {middleText} <span className="text-[#00d8ff]">{highlight2}</span>?
              </h2>
              
              {/* BRAND GLOW BAR - Centered on mobile, left on desktop */}
              <div className="w-20 h-1 bg-[#00d8ff] rounded-full shadow-[0_0_15px_rgba(0,216,255,0.6)] mx-auto lg:mx-0" />
            </div>

            {/* BUTTON GROUPING */}
            <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto items-center">
              {/* Secondary: Glass Morphic */}
              <a href={leftBtnLink} className="w-full sm:w-auto group/btn">
                <Button 
                  className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 px-10 py-8 rounded-2xl text-sm font-bold tracking-widest transition-all duration-500 backdrop-blur-md hover:text-white"
                >
                  {leftBtnText}
                </Button>
              </a>
              
              {/* Primary: Brand Cyan */}
              <a href={rightBtnLink} className="w-full sm:w-auto group/btn">
                <Button 
                  className="w-full sm:w-auto bg-[#00d8ff] text-[#010a0f] hover:bg-white transition-all duration-500 px-10 py-8 rounded-2xl text-sm font-bold tracking-widest shadow-[0_20px_50px_rgba(0,216,255,0.2)] hover:shadow-[0_25px_60px_rgba(0,216,255,0.4)] active:scale-95"
                >
                  {rightBtnText}
                </Button>
              </a>
            </div>
          </div>

          {/* EDGE LIGHTING EFFECT */}
          <div className="absolute inset-0 rounded-[2rem] lg:rounded-[3.5rem] border border-white/5 pointer-events-none z-40" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00d8ff]/40 to-transparent z-40" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceNavigationBanner;