import { Button } from "@/components/ui/button";
import { Smartphone, Zap } from "lucide-react";
import type { ReactNode } from "react";

interface PageHeroProps {
  title: ReactNode;
  subtitle: string;
  ctaText: string;
  secondaryCta?: {
    text: string;
    link?: string;
  };
  imagePlaceholder?: string;
  className?: string;
}

const PageHero = ({
  title,
  subtitle,
  ctaText,
  secondaryCta,
  imagePlaceholder = "Hero Image Placeholder",
  className = "pt-24 sm:pt-32 lg:pt-40",
}: PageHeroProps) => {
  return (
    <section
      className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#010a0f] ${className}`}
    >
      {/* 1. PRIMARY BACKGROUND GRADIENT */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ background: "radial-gradient(circle at 50% 50%, #051923 0%, #010a0f 100%)" }} 
      />

      {/* 2. THE GRID (The fix for visibility) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.25]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0, 229, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 229, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px',
          // Mask makes the grid fade out at the edges like in image_e37781.jpg
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }} 
      />

      {/* 3. GEOMETRIC ARCS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] border border-cyan/10 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] border border-cyan/5 rounded-full translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />

      {/* 4. ANIMATED BLUR BLOBS (Behind text, above grid) */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-cyan/20 rounded-full blur-[120px] z-10 opacity-40 animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] z-10 opacity-30 animate-float-slow pointer-events-none" />

      {/* CONTENT LAYER */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] md:text-[clamp(3.5rem,6vw,5.5rem)] font-bold mb-8 leading-[1.1] tracking-tight text-white">
          {title}
        </h1>

        <p className="text-slate-400 text-[clamp(1rem,2vw,1.15rem)] max-w-2xl mx-auto mb-12 leading-relaxed font-light opacity-90">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-24">
          <Button
            size="lg"
            className="bg-[#00e5ff] text-black hover:bg-[#00e5ff]/90 px-10 py-7 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(0,229,255,0.5)]"
          >
            {ctaText}
          </Button>

          {secondaryCta && (
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white px-10 py-7 rounded-full text-lg font-bold backdrop-blur-md"
            >
              {secondaryCta.text}
            </Button>
          )}
        </div>

        {/* Visual Stack (Main Image + Floating Icons) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Floating Card */}
          <div className="animate-float relative z-30">
            <div className="aspect-video w-full rounded-[2rem] border border-white/10 bg-[#020c12]/60 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-hidden">
               {/* Grid inside the card */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
               <span className="text-slate-500 uppercase tracking-[0.3em] text-[10px] font-bold">{imagePlaceholder}</span>
            </div>
          </div>

          {/* Floating Phone (Left) */}
          <div className="absolute -left-10 md:-left-24 top-[15%] z-40 animate-float-slow hidden sm:block">
            <div className="w-28 h-44 rounded-[2rem] border border-cyan/40 bg-[#010a0f]/90 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_40px_rgba(0,229,255,0.15)]">
              <Smartphone className="w-10 h-10 text-cyan drop-shadow-[0_0_10px_#00e5ff]" />
            </div>
          </div>

          {/* Performance Card (Right) */}
          <div className="absolute -right-8 md:-right-16 bottom-[20%] z-40 animate-float hidden sm:block">
            <div className="p-6 rounded-2xl border border-white/20 bg-[#010a0f]/95 backdrop-blur-xl shadow-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan/15 flex items-center justify-center border border-cyan/30">
                <Zap className="w-6 h-6 text-cyan" />
              </div>
              <div className="text-left font-bold">
                <div className="text-[10px] text-cyan uppercase tracking-widest">Performance</div>
                <div className="text-white text-xl">99.9%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;