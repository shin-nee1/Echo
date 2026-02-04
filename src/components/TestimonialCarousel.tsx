import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

// Default data remains the same
const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "Lead Architect",
    quote: "The integration process was seamless and the performance gains were immediate. Truly a game changer for our stack.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Product Designer",
    quote: "Finally a tool that understands the bridge between design and development. The UI fluidity is unmatched.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Marcus Thorne",
    role: "CTO @ Nexus",
    quote: "Scalability used to be our biggest bottleneck. Now, it's our greatest strength thanks to this implementation.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director",
    quote: "The visual fidelity and attention to detail in this component are exactly what our brand needed.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
  }
];

const TestimonialCarousel = ({ testimonials = DEFAULT_TESTIMONIALS }: { testimonials?: Testimonial[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative min-h-[900px] w-full bg-transparent flex flex-col items-center justify-start overflow-hidden py-24 font-sans z-10">
      
      {/* 1. SECTION HEADER: Added mb-20 and adjusted positioning for more gap */}
      <div className="relative mb-20 md:mb-13 flex flex-col items-center z-50">
        <h2 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-none text-center">
          Client <span className="text-[#43c6e4]">Testimonials</span>
        </h2>
      </div>

      {/* 2. THE PORTAL STAGE: Height and positioning slightly adjusted to accommodate the gap above */}
      <div className="relative w-full max-w-[1600px] h-[550px] md:h-[600px] flex items-center justify-center mx-auto overflow-hidden">
        
        {testimonials.map((item, index) => {
          const distance = index - currentIndex;
          const isCenter = distance === 0;
          const isLeft = distance === -1;
          const isRight = distance === 1;

          if (!isCenter && !isLeft && !isRight) return null;

          let positionStyles: React.CSSProperties = {};
          if (isCenter) {
            positionStyles = {
              left: "50%",
              transform: "translateX(-50%) scale(1)",
              zIndex: 30,
              opacity: 1,
            };
          } else if (isLeft) {
            positionStyles = {
              left: "0%",
              transform: "translateX(-50%) scale(0.85)",
              zIndex: 10,
              opacity: 0.5,
            };
          } else if (isRight) {
            positionStyles = {
              left: "100%",
              transform: "translateX(-50%) scale(0.85)",
              zIndex: 10,
              opacity: 0.5,
            };
          }

          return (
            <div
              key={index}
              className="absolute transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col items-center justify-center"
              style={{
                ...positionStyles,
                filter: isCenter ? "none" : "blur(1px)",
              }}
            >
              {/* --- ORBIT RING --- */}
              <div
                className={`relative rounded-full border-2 transition-all duration-1000 flex items-center justify-center 
                w-[340px] h-[340px] md:w-[520px] md:h-[520px] ${
                  isCenter
                    ? "border-[#43c6e4]/40 shadow-[0_0_50px_rgba(67,198,228,0.15)] backdrop-blur-sm"
                    : "border-white/10"
                }`}
              >
                {/* --- FREE ORBITING SATELLITE --- */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ animation: "orbit 18s linear infinite" }}
                >
                  <div
                    className="absolute -top-6 left-1/2 -translate-x-1/2"
                    style={{ animation: "counter-orbit 18s linear infinite" }}
                  >
                    <div className={`rounded-full flex items-center justify-center transition-all duration-700
                      ${isCenter 
                        ? "w-12 h-12 md:w-14 md:h-14 bg-[#43c6e4] shadow-[0_0_30px_#43c6e4]" 
                        : "w-8 h-8 bg-white/20"
                      }
                    `}>
                      <Quote className={`w-4 h-4 md:w-6 md:h-6 ${isCenter ? "text-slate-900" : "text-white/40"} fill-current`} />
                    </div>
                  </div>
                </div>

                {/* --- TESTIMONIAL CONTENT --- */}
                <div 
                  className={`absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16 transition-all duration-700
                  ${isCenter ? "opacity-100" : "opacity-40"}
                `}>
                  <blockquote className="text-slate-200 text-base md:text-2xl font-light leading-relaxed mb-6 md:mb-10 italic text-center w-[280px] md:w-[450px]">
                    "{item.quote}"
                  </blockquote>

                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/10 p-1 bg-white/5 backdrop-blur-md shadow-2xl overflow-hidden">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-white font-bold tracking-[0.25em] uppercase text-[10px] md:text-sm">
                        {item.name}
                      </h4>
                      <p className="text-[#43c6e4] text-[8px] md:text-[10px] font-bold tracking-[0.4em] uppercase opacity-80 mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. NAVIGATION CONTROLS */}
      <div className="flex items-center gap-10 z-50 mt-16">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all group backdrop-blur-md
            ${currentIndex === 0 
              ? "border-white/5 text-white/5 cursor-not-allowed" 
              : "border-white/10 text-white/40 hover:text-white hover:border-[#43c6e4] hover:bg-white/10"}
          `}
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === testimonials.length - 1}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all group backdrop-blur-md
            ${currentIndex === testimonials.length - 1 
              ? "border-white/5 text-white/5 cursor-not-allowed" 
              : "border-white/10 text-white/40 hover:text-white hover:border-[#43c6e4] hover:bg-white/10"}
          `}
        >
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;