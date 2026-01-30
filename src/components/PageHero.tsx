import React from "react";
import { Button } from "@/components/ui/button";

interface PageHeroProps {
  title: React.ReactNode; 
  subtitle: string;
  ctaText: string;
  className?: string;
}

const PageHero = ({
  title,
  subtitle,
  ctaText,
  className = "",
}: PageHeroProps) => {
  return (
    <section className={`relative flex flex-col items-center pt-32 pb-20 overflow-hidden bg-[#010a0f] ${className}`}>
      
      {/* 1. PRIMARY BACKGROUND GRADIENT */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ background: "linear-gradient(to bottom, #051923 0%, #010a0f 100%)" }} 
      />

      {/* 2. LEFT & RIGHT HALO GLOWS */}
      {/* Left Halo Glow */}
      <div className="absolute left-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-[120px] pointer-events-none z-10 opacity-60" />
      
      {/* Right Halo Glow */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/15 rounded-full blur-[120px] pointer-events-none z-10 opacity-60" />

      {/* CONTENT LAYER */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="font-display text-[clamp(2.2rem,5vw,4.5rem)] font-bold mb-6 leading-[1.1] tracking-tight text-white max-w-5xl mx-auto">
          {title}
        </h1>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light opacity-80">
          {subtitle}
        </p>

        <Button
          size="lg"
          className="bg-[#00e5ff] text-black hover:bg-[#00e5ff]/90 px-10 py-7 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all mb-20"
        >
          {ctaText}
        </Button>
      </div>
    </section>
  );
};

export default PageHero;