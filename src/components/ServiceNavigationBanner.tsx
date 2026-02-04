import React from "react";
import { Button } from "@/components/ui/button";

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
    <section className="py-20 bg-transparent relative">
      <div className="container mx-auto px-6 max-w-[1450px]">
        
        {/* SLENDER VERTICAL STACK CONTAINER */}
        <div className="relative w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
          
          {/* STATIC AMBIENT GLOWS */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute -top-[120%] -left-[10%] w-[60%] h-[250%] bg-[#00d8ff]/15 blur-[130px] rounded-full" />
            <div className="absolute -bottom-[120%] -right-[10%] w-[60%] h-[250%] bg-cyan-900/25 blur-[130px] rounded-full" />
          </div>
          
          {/* CONTENT SECTION */}
          <div className="relative z-30 flex flex-col items-center justify-center px-10 py-12 lg:py-16 gap-12">
            
            {/* 1. SINGLE LINE HEADING - FIXED CLIPPING */}
            <div className="text-center w-full pb-2"> {/* Added pb-2 for descender room */}
              <h2 className="text-white text-2xl md:text-4xl lg:text-[2.8rem] font-bold tracking-[-0.03em] leading-[1.2] font-display">
                {/* Removed leading-none: it was too tight.
                   Removed whitespace-nowrap: it causes cutting on mobile.
                */}
                {titlePrefix} <span className="text-[#00d8ff]">{highlight1}</span> {middleText} <span className="text-[#00d8ff]">{highlight2}</span>?
              </h2>
            </div>

            {/* 2. MATCHED BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
              {/* Secondary Button */}
              <a href={leftBtnLink} className="w-full sm:w-auto">
                <Button 
                  className="w-full sm:w-auto h-[60px] bg-white/[0.03] hover:bg-white/[0.08] text-white border border-white/10 px-12 rounded-2xl text-[14px] font-bold tracking-[0.15em] uppercase transition-all duration-300 backdrop-blur-md"
                >
                  {leftBtnText}
                </Button>
              </a>
              
              {/* Primary Button */}
              <a href={rightBtnLink} className="w-full sm:w-auto">
                <Button 
                  className="w-full sm:w-auto h-[60px] bg-[#00d8ff] text-[#010a0f] hover:bg-white transition-all duration-300 px-12 rounded-2xl text-[14px] font-bold tracking-[0.15em] uppercase shadow-[0_15px_40px_rgba(0,216,255,0.2)] active:scale-[0.97]"
                >
                  {rightBtnText}
                </Button>
              </a>
            </div>
          </div>

          {/* EDGE LIGHTING */}
          <div className="absolute inset-0 rounded-[2rem] lg:rounded-[3rem] border border-white/5 pointer-events-none z-40" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00d8ff]/20 to-transparent z-40" />
        </div>
      </div>
    </section>
  );
};

export default ServiceNavigationBanner;