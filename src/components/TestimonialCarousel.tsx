import React, { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "Lead Architect",
    quote:
      "The integration process was seamless and the performance gains were immediate. Truly a game changer for our stack.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Chen",
    role: "Product Designer",
    quote:
      "Finally a tool that understands the bridge between design and development. The UI fluidity is unmatched.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Thorne",
    role: "CTO @ Nexus",
    quote:
      "Scalability used to be our biggest bottleneck. Now, it's our greatest strength thanks to this implementation.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director",
    quote:
      "The visual fidelity and attention to detail in this component are exactly what our brand needed.",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
];

const ORBIT_DURATION = 18;

// --- Sub-Component for Individual Cards ---
const TestimonialCard = ({
  item,
  position,
}: {
  item: Testimonial;
  position: "center" | "left" | "right";
}) => {
  /**
   * THE FIX:
   * We calculate the animation delay ONCE when this specific DOM node mounts.
   *
   * 1. Date.now() / 1000 % ORBIT_DURATION gives us the current second in the 18s cycle (e.g., 5.4s).
   * 2. We set the delay to negative that amount (e.g., -5.4s).
   * 3. This forces the CSS animation to "jump forward" to match the global timeline immediately.
   * 4. useMemo with [] ensures this value never changes for this specific instance, preventing jumps/resets during re-renders.
   */
  const syncedDelay = useMemo(() => {
    return -((Date.now() / 1000) % ORBIT_DURATION);
  }, []);

  const isCenter = position === "center";
  const isLeft = position === "left";

  // Dynamic positioning styles
  const containerStyle: React.CSSProperties = isCenter
    ? {
        left: "50%",
        transform: "translateX(-50%) scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "none",
      }
    : isLeft
    ? {
        left: "0%",
        transform: "translateX(-50%) scale(0.85)",
        zIndex: 10,
        opacity: 0.5,
        filter: "blur(1px)",
      }
    : {
        left: "100%",
        transform: "translateX(-50%) scale(0.85)",
        zIndex: 10,
        opacity: 0.5,
        filter: "blur(1px)",
      };

  return (
    <div
      className="absolute transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center"
      style={containerStyle}
    >
      {/* ORBIT RING */}
      <div
        className={`relative rounded-full border-2 flex items-center justify-center transition-all duration-1000
        w-[340px] h-[340px] md:w-[520px] md:h-[520px]
        ${
          isCenter
            ? "border-[#43c6e4]/40 shadow-[0_0_50px_rgba(67,198,228,0.15)] backdrop-blur-sm"
            : "border-white/10"
        }`}
      >
        {/* SYNCED ORBIT WRAPPER */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            animation: `orbit ${ORBIT_DURATION}s linear infinite`,
            animationDelay: `${syncedDelay}s`,
          }}
        >
          {/* COUNTER-ROTATING ICON WRAPPER */}
          <div
            className="absolute -top-6 left-1/2 -translate-x-1/2"
            style={{
              animation: `counter-orbit ${ORBIT_DURATION}s linear infinite`,
              animationDelay: `${syncedDelay}s`,
            }}
          >
            <div
              className={`rounded-full flex items-center justify-center transition-all duration-700
              ${
                isCenter
                  ? "w-12 h-12 md:w-14 md:h-14 bg-[#43c6e4] shadow-[0_0_30px_#43c6e4]"
                  : "w-8 h-8 bg-white/20"
              }`}
            >
              <Quote
                className={`w-4 h-4 md:w-6 md:h-6 fill-current
                ${isCenter ? "text-slate-900" : "text-white/40"}`}
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center px-10 md:px-16 transition-all duration-700
          ${isCenter ? "opacity-100" : "opacity-40"}`}
        >
          <blockquote className="text-slate-200 text-base md:text-2xl italic text-center leading-relaxed mb-8 w-[280px] md:w-[450px]">
            "{item.quote}"
          </blockquote>

          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full p-1 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="text-center">
              <h4 className="text-white font-bold uppercase tracking-[0.25em] text-[10px] md:text-sm">
                {item.name}
              </h4>
              <p className="text-[#43c6e4] uppercase tracking-[0.4em] text-[8px] md:text-[10px] mt-1 opacity-80">
                {item.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const TestimonialCarousel = ({
  testimonials = DEFAULT_TESTIMONIALS,
}: {
  testimonials?: Testimonial[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((p) => p - 1);
    }
  };

  return (
    <section className="relative min-h-[900px] w-full py-24 flex flex-col items-center font-sans overflow-hidden z-10">
      {/* HEADER */}
      <div className="mb-20 text-center z-50">
        <h2 className="text-white text-5xl md:text-6xl font-bold tracking-tight">
          Client <span className="text-[#43c6e4]">Testimonials</span>
        </h2>
      </div>

      {/* STAGE */}
      <div className="relative w-full max-w-[1600px] h-[600px] flex items-center justify-center overflow-hidden">
        {testimonials.map((item, index) => {
          const distance = index - currentIndex;
          const isCenter = distance === 0;
          const isLeft = distance === -1;
          const isRight = distance === 1;

          // Only render active or adjacent slides
          if (!isCenter && !isLeft && !isRight) return null;

          return (
            <TestimonialCard
              key={index}
              item={item}
              position={isCenter ? "center" : isLeft ? "left" : "right"}
            />
          );
        })}
      </div>

      {/* CONTROLS */}
      <div className="flex gap-10 mt-16 z-50">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full border flex items-center justify-center backdrop-blur-md transition-all group
          ${
            currentIndex === 0
              ? "border-white/5 text-white/5 cursor-not-allowed"
              : "border-white/10 text-white/40 hover:text-white hover:border-[#43c6e4] hover:bg-white/10"
          }`}
        >
          <ChevronLeft className="w-8 h-8 transition-transform group-hover:-translate-x-1" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === testimonials.length - 1}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full border flex items-center justify-center backdrop-blur-md transition-all group
          ${
            currentIndex === testimonials.length - 1
              ? "border-white/5 text-white/5 cursor-not-allowed"
              : "border-white/10 text-white/40 hover:text-white hover:border-[#43c6e4] hover:bg-white/10"
          }`}
        >
          <ChevronRight className="w-8 h-8 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* KEYFRAMES */}
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