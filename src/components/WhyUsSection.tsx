import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface WhyUsItem {
  title: string;
  description: string;
}

const items: WhyUsItem[] = [
  { title: "PARTNERSHIP", description: "We don't just work for you; we work with you as a dedicated extension of your internal team." },
  { title: "SEAMLESS COLLABORATION", description: "Integrated workflows that ensure every stage of the project is transparent and efficient." },
  { title: "SENIOR EXPERTISE", description: "Direct access to senior-level talent who have built products for global brands." },
  { title: "FULL TRANSPARENCY", description: "No hidden costs or black-box processes. You see exactly what we see, every step of the way." },
  { title: "UNIFIED TEAM", description: "A collective of specialists across design and dev working under one single vision." },
  { title: "CLIENT-FIRST", description: "Your business goals drive our creative decisions, ensuring real impact over just aesthetics." },
];

const WhyUsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden bg-transparent">
      {/* 3D Decorative Assets */}
      <div className="absolute top-10 left-10 w-48 h-48 opacity-40 animate-float pointer-events-none">
        <img src="/assets/3d-cube-1.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-10 right-10 w-64 h-64 opacity-40 animate-float-slow pointer-events-none">
        <img src="/assets/3d-cube-2.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Why Echo & <span className="text-cyan">Impact?</span>
          </h2>
        </div>

        {/* The "Echo" List Structure */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-0">
          {items.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group cursor-pointer transition-all duration-500 ease-in-out"
              style={{
                flex: hoveredIndex === index ? "4" : "1",
                minWidth: hoveredIndex === index ? "300px" : "80px",
                height: "450px"
              }}
            >
              {/* Vertical Line Separators */}
              <div className="absolute inset-y-0 left-0 w-px bg-white/10 group-hover:bg-cyan/40 transition-colors" />
              {index === items.length - 1 && (
                <div className="absolute inset-y-0 right-0 w-px bg-white/10" />
              )}

              {/* Vertical Text (Collapsed State) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                hoveredIndex === index ? "opacity-0 -translate-y-10" : "opacity-100"
              }`}>
                <h3 className="font-display text-sm font-black tracking-[0.4em] uppercase text-white/40 whitespace-nowrap -rotate-90">
                  {item.title}
                </h3>
              </div>

              {/* Expanded Content */}
              <div className={`absolute inset-0 p-10 flex flex-col justify-center transition-all duration-700 ${
                hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
              }`}>
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-full border border-cyan/30 flex items-center justify-center">
                    <ChevronRight className="text-cyan w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-b from-cyan/5 to-transparent transition-opacity duration-500 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;