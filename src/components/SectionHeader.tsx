import React from "react";

interface SectionHeaderProps {
  title: string;
  highlight: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, highlight, subtitle, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`mb-16 lg:mb-24 flex flex-col ${centered ? "items-center text-center" : "items-start text-left"}`}>
      <div className="relative inline-block mb-8">
        {/* BRAND TYPOGRAPHY: NATURAL CASING & BOLD */}
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          {title} <span className="text-[#00d8ff]">{highlight}</span>
        </h2>
        
        {/* SIGNATURE GLOW BAR */}
        <div className={`mt-6 h-1 bg-[#00d8ff] rounded-full shadow-[0_0_15px_rgba(0,216,255,0.6)] ${centered ? "w-20 mx-auto" : "w-16"}`} />
      </div>

      {/* BRAND RHYTHM SUBTITLE */}
      {subtitle && (
        <p className={`text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;