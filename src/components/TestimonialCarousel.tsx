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
    quote: "The integration process was seamless and the performance gains were immediate. Truly a game changer.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Chen",
    role: "Product Designer",
    quote: "Finally a tool that understands the bridge between design and development. The UI fluidity is unmatched.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director",
    quote: "The visual fidelity and attention to detail in this component are exactly what our brand needed.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
];

const ORBIT_DURATION = 8;

const TestimonialCard = ({
  item,
  position,
}: {
  item: Testimonial;
  position: "center" | "left" | "right";
}) => {
  const syncedDelay = useMemo(() => -((Date.now() / 1000) % ORBIT_DURATION), []);
  const isCenter = position === "center";
  const isLeft = position === "left";

  const containerStyle: React.CSSProperties = isCenter
    ? { left: "50%", transform: "translateX(-50%) scale(1)", zIndex: 30, opacity: 1 }
    : isLeft
    ? { left: "0%", transform: "translateX(-50%) scale(0.75)", zIndex: 10, opacity: 0.3, filter: "blur(4px)" }
    : { left: "100%", transform: "translateX(-50%) scale(0.75)", zIndex: 10, opacity: 0.3, filter: "blur(4px)" };

  return (
    <div
      className="absolute transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col items-center justify-center"
      style={containerStyle}
    >
      <div
        className={`relative rounded-full border-[2px] flex items-center justify-center transition-all duration-1000 ${
          isCenter ? "border-slate-400/30 backdrop-blur-md" : "border-white/10"
        }`}
        style={{
          width: "clamp(280px, 35vw, 600px)",
          height: "clamp(280px, 35vw, 600px)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            animation: `orbit ${ORBIT_DURATION}s linear infinite`,
            animationDelay: `${syncedDelay}s`,
          }}
        >
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: "-20px" }}>
            <div
              className={`rounded-full flex items-center justify-center transition-all duration-700 shadow-xl ${
                isCenter ? "bg-[#43c6e4]" : "bg-white/20"
              }`}
              style={{ width: "clamp(40px, 4vw, 64px)", height: "clamp(40px, 4vw, 64px)" }}
            >
              <Quote
                className={`fill-current ${isCenter ? "text-white" : "text-white/40"}`}
                style={{ width: "45%", height: "45%" }}
              />
            </div>
          </div>
        </div>

        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 -z-10 ${
            isCenter ? "bg-[#43c6e4]/10 opacity-100 blur-3xl" : "bg-transparent opacity-0"
          }`}
          style={{ width: "60%", height: "60%" }}
        />

        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center transition-all duration-700 z-10 ${
            isCenter ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: "80%" }}
        >
          <blockquote
            className="text-slate-200 italic leading-relaxed font-medium"
            style={{ fontSize: "clamp(14px, 1.3vw, 22px)" }}
          >
            "{item.quote}"
          </blockquote>
        </div>
      </div>

      <div
        className={`flex flex-col items-center transition-all duration-700 z-10
        ${isCenter ? "opacity-100" : "opacity-40"}
        mt-6 md:mt-8 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:mt-0`}
        style={{
          bottom: "10%",
          gap: "0.75rem",
        }}
      >
        <div
          className="rounded-full p-[2px] bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden"
          style={{ width: "clamp(50px, 5vw, 85px)", height: "clamp(50px, 5vw, 85px)" }}
        >
          <img
            src={item.avatar}
            alt={item.name}
            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        <div className="text-center">
          <h4
            className="text-white font-bold uppercase tracking-[0.2em]"
            style={{ fontSize: "clamp(10px, 0.8vw, 14px)" }}
          >
            {item.name}
          </h4>
          <p
            className="text-[#43c6e4] uppercase tracking-[0.3em] font-semibold opacity-90"
            style={{ fontSize: "clamp(9px, 0.65vw, 11px)", marginTop: "2px" }}
          >
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialCarousel = ({ testimonials = DEFAULT_TESTIMONIALS }: { testimonials?: Testimonial[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    /* CHANGED: Added Full Bleed classes 
       w-screen: forces viewport width
       -ml-[50vw]: pulls left to screen edge
       left-1/2: centers the section
    */
    <section
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] mr-[50vw] flex flex-col items-center font-sans overflow-hidden z-10"
      style={{ padding: "clamp(4rem, 10vw, 8rem) 0" }}
    >
      {/* Container for alignment */}
      <div className="w-full px-[5vw] flex flex-col items-center">
        <div className="text-center z-50" style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <h2 className="text-white font-bold tracking-tight" style={{ fontSize: "clamp(32px, 5vw, 64px)" }}>
            Testimonials
          </h2>
        </div>

        <div
          className="relative w-full flex items-center justify-center"
          style={{ height: "clamp(400px, 45vw, 700px)", maxWidth: "1440px" }}
        >
          {testimonials.map((item, index) => {
            const distance = index - currentIndex;
            const isCenter = distance === 0;
            const isLeft = distance === -1;
            const isRight = distance === 1;

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

        <div className="flex z-50" style={{ gap: "2rem", marginTop: "3rem" }}>
          <button
            onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            className={`rounded-full border flex items-center justify-center backdrop-blur-md transition-all group ${
              currentIndex === 0
                ? "border-white/5 text-white/5 cursor-not-allowed"
                : "border-white/10 text-white/60 hover:text-white hover:border-[#43c6e4] hover:bg-white/5 shadow-lg"
            }`}
            style={{ width: "clamp(50px, 5vw, 75px)", height: "clamp(50px, 5vw, 75px)" }}
          >
            <ChevronLeft style={{ width: "40%", height: "40%" }} className="transition-transform group-hover:-translate-x-1" />
          </button>

          <button
            onClick={() => currentIndex < testimonials.length - 1 && setCurrentIndex(currentIndex + 1)}
            disabled={currentIndex === testimonials.length - 1}
            className={`rounded-full border flex items-center justify-center backdrop-blur-md transition-all group ${
              currentIndex === testimonials.length - 1
                ? "border-white/5 text-white/5 cursor-not-allowed"
                : "border-white/10 text-white/60 hover:text-white hover:border-[#43c6e4] hover:bg-white/5 shadow-lg"
            }`}
            style={{ width: "clamp(50px, 5vw, 75px)", height: "clamp(50px, 5vw, 75px)" }}
          >
            <ChevronRight style={{ width: "40%", height: "40%" }} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialCarousel;