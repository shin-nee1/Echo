import React from "react";

interface HeroSubServiceProps {
  title: React.ReactNode;
  subtitle: string;
  ctaText: string;
}

const HeroSubService = ({ title, subtitle, ctaText }: HeroSubServiceProps) => {
  return (
    <section className="min-h-[70vh] w-full flex flex-col justify-center items-center py-[8vh] md:py-[12vh] px-[5%]">
      <div className="flex flex-col items-center">
        {/* H1 Logic:
            - Default/Mobile: Starts at 1.75rem.
            - Laptop/Tablet: Scales slowly, capping at 2.8rem (keeps it clean on smaller screens).
            - Desktop (2xl): Kicks into a much larger scale, topping out at 4.5rem.
        */}
        <h1 className="font-bold text-white tracking-tight leading-[1.1] mb-6 font-display text-center max-w-5xl
                       text-[clamp(1.75rem,4vw,2.8rem)] 
                       2xl:text-[clamp(1.75rem,4vw,2.8rem)]">
          {title}
        </h1>
        
        <p className="text-white/60 max-w-xl mx-auto mb-10 text-[clamp(0.9rem,1.5vw,1.1rem)] text-center leading-relaxed">
          {subtitle}
        </p>

        <button className="px-8 py-4 bg-cyan text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 text-[0.95rem] shadow-lg shadow-cyan/20">
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default HeroSubService;