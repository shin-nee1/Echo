import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

interface HeroSectionProps {
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  subtitle: string;
}

const HeroSection = ({ titleStart, titleHighlight, titleEnd, subtitle }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#010a0f]">
      
      {/* 1. PRIMARY BACKGROUND GRADIENT */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ background: "radial-gradient(circle at 50% 50%, #051923 0%, #010a0f 100%)" }} 
      />

      {/* 2. THE GRID (This was missing) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.25]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0, 229, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 229, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }} 
      />

      {/* 3. BACKGROUND GLOWS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] opacity-30 z-10" />

      {/* CONTENT LAYER */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold mb-8 leading-[1.1] tracking-tight text-white">
          {titleStart}{" "}
          <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">{titleHighlight}</span>
          {titleEnd && ` ${titleEnd}`}
        </h1>
        
        <p className="text-slate-400 text-[clamp(1rem,2.5vw,1.25rem)] max-w-2xl mx-auto mb-12 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
          <Button size="lg" className="bg-cyan text-black hover:bg-cyan/90 px-10 py-7 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(0,229,255,0.3)]">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 px-10 py-7 rounded-xl text-lg font-bold backdrop-blur-sm">
            View Our Work
          </Button>
        </div>

        {/* Hero Visual Stack */}
        <div className="relative max-w-5xl mx-auto">
          <div className="animate-float relative z-30">
            <div className="aspect-video w-full rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
               {/* Grid inside the showcase card */}
               <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
               <span className="text-slate-500 font-display tracking-widest uppercase text-xs">Project Showcase</span>
            </div>
          </div>

          {/* Floating Smartphone Element */}
          <div className="absolute -left-4 md:-left-12 top-1/4 w-20 h-32 md:w-28 md:h-44 rounded-2xl border border-cyan/30 bg-black/40 backdrop-blur-xl flex items-center justify-center animate-float-slow shadow-2xl hidden sm:flex z-40">
             <Smartphone className="w-8 h-8 text-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;