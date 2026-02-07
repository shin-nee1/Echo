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
    <section 
      className="relative flex flex-col items-center justify-center overflow-hidden bg-[#010a0f]"
      style={{ minHeight: "100vh", paddingTop: "clamp(5rem, 12vh, 8rem)" }}
    >
      
      {/* 1. PRIMARY BACKGROUND GRADIENT */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ background: "radial-gradient(circle at 50% 50%, #051923 0%, #010a0f 100%)" }} 
      />

      {/* 2. THE FLUID GRID */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.2]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0, 229, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 229, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: 'clamp(30px, 4vw, 50px) clamp(30px, 4vw, 50px)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 90%)'
        }} 
      />

      {/* 3. FLUID BACKGROUND GLOW */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00e5ff]/10 rounded-full blur-[clamp(80px,15vw,180px)] opacity-20 z-10" 
        style={{ width: "clamp(300px, 60vw, 800px)", height: "clamp(300px, 60vw, 800px)" }}
      />

      {/* CONTENT LAYER */}
      <div className="mx-auto px-[5vw] text-center relative z-20 w-full max-w-[1600px]">
        <h1 
          className="font-display font-bold tracking-tight text-white leading-[1.1]"
          style={{ 
            fontSize: "clamp(2.2rem, 6.5vw, 5.5rem)",
            marginBottom: "clamp(1.5rem, 4vh, 2.5rem)" 
          }}
        >
          {titleStart}{" "}
          <span className="text-[#00e5ff] drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">{titleHighlight}</span>
          {titleEnd && ` ${titleEnd}`}
        </h1>
        
        <p 
          className="text-slate-400 mx-auto leading-relaxed"
          style={{ 
            fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)",
            maxWidth: "clamp(300px, 60vw, 700px)",
            marginBottom: "clamp(2rem, 6vh, 4rem)" 
          }}
        >
          {subtitle}
        </p>

        {/* BUTTONS - Scalable size */}
        <div className="flex flex-col sm:flex-row gap-[clamp(1rem, 2vw, 1.5rem)] justify-center mb-[clamp(4rem, 10vh, 6rem)]">
          <Button 
            className="bg-[#00e5ff] text-black hover:bg-[#00e5ff]/90 font-bold shadow-[0_0_20px_rgba(0,229,255,0.2)]"
            style={{ 
              padding: "clamp(1.2rem, 3vh, 1.8rem) clamp(2rem, 4vw, 3rem)", 
              fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
              borderRadius: "0.75rem"
            }}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            className="border-white/10 bg-white/5 text-white hover:bg-white/10 font-bold backdrop-blur-sm"
            style={{ 
              padding: "clamp(1.2rem, 3vh, 1.8rem) clamp(2rem, 4vw, 3rem)", 
              fontSize: "clamp(0.9rem, 1.1vw, 1.1rem)",
              borderRadius: "0.75rem"
            }}
          >
            View Our Work
          </Button>
        </div>

        {/* HERO VISUAL STACK */}
        <div className="relative mx-auto" style={{ maxWidth: "clamp(600px, 70vw, 1100px)" }}>
          <div className="animate-float relative z-30">
            <div 
              className="aspect-video w-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden"
              style={{ borderRadius: "clamp(1rem, 3vw, 2.5rem)" }}
            >
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
               <span className="text-slate-500 font-display tracking-widest uppercase" style={{ fontSize: "clamp(0.6rem, 0.8vw, 0.75rem)" }}>
                 Project Showcase
               </span>
            </div>
          </div>

          {/* FLOATING SMARTPHONE - Positioned with percentage/vh */}
          <div 
            className="absolute -left-[5%] top-1/4 rounded-2xl border border-[#00e5ff]/30 bg-black/40 backdrop-blur-xl hidden sm:flex items-center justify-center animate-float-slow shadow-2xl z-40"
            style={{ 
              width: "clamp(80px, 8vw, 120px)", 
              height: "clamp(130px, 12vw, 180px)" 
            }}
          >
             <Smartphone 
               className="text-[#00e5ff] drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" 
               style={{ width: "clamp(1.5rem, 2vw, 2.5rem)", height: "clamp(1.5rem, 2vw, 2.5rem)" }}
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;