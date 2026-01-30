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
    <section className="py-24 bg-[#010a0f] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden group border border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
        >
          {/* 1. LAYERED BACKGROUND FOR BETTER CONTRAST */}
          <div className="absolute inset-0 bg-[#0a1a24]/80 backdrop-blur-[40px] z-10" />
          
          {/* 2. TOP EDGE GLOW */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent z-20" />

          <div className="relative z-30 flex flex-col lg:flex-row items-center justify-between px-10 py-16 lg:px-20 lg:py-24 gap-10">
            
            {/* TEXT SECTION */}
            <div className="text-center lg:text-left">
              <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tighter uppercase leading-[1.1] max-w-2xl">
                {titlePrefix} <span className="text-[#00e5ff]">{highlight1}</span> {middleText} <span className="text-[#00e5ff]">{highlight2}</span>?
              </h2>
            </div>

            {/* ACTION BUTTONS (Brightness Fixed) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Secondary Button: Clean Glass Style */}
              <a href={leftBtnLink} className="w-full sm:w-auto">
                <Button 
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-7 rounded-2xl text-sm font-black uppercase tracking-widest transition-all duration-300 backdrop-blur-md"
                >
                  {leftBtnText}
                </Button>
              </a>
              
              {/* Primary Button: High-Contrast Cyan */}
              <a href={rightBtnLink} className="w-full sm:w-auto">
                <Button 
                  className="w-full sm:w-auto bg-[#00e5ff] text-black hover:bg-white transition-all duration-300 px-8 py-7 rounded-2xl text-sm font-black uppercase tracking-widest shadow-[0_10px_40px_rgba(0,229,255,0.4)]"
                >
                  {rightBtnText}
                </Button>
              </a>
            </div>
          </div>

          {/* AMBIENT GLOW BLOBS */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-cyan-400/10 blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceNavigationBanner;