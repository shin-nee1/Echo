import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 25,
        y: (e.clientY / window.innerHeight - 0.5) * 25,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleTransition = (newIndex: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 400);
  };

  const goToPrevious = () => handleTransition(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  const goToNext = useCallback(() => handleTransition(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1), [currentIndex, testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-32 overflow-hidden bg-transparent">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,216,255,0.06)_0%,_transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* BRANDED ASYMMETRIC HEADER */}
        <div className="flex flex-col md:flex-row md:items-start lg:items-center gap-6 md:gap-12 mb-24 relative">
          <div className="relative shrink-0">
            <h2 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter leading-none uppercase">
              Client <span className="text-[#00d8ff]">Echoes</span>
            </h2>
            {/* SIGNATURE GLOW BAR */}
            <div className="absolute -bottom-6 left-0 w-24 h-1.5 bg-[#00d8ff] rounded-full shadow-[0_0_20px_rgba(0,216,255,0.6)]" />
          </div>

          {/* RHYTHM TEXT */}
          <p className="text-slate-400 text-lg md:text-xl font-normal max-w-sm leading-snug pt-1 md:pt-2 border-l border-white/10 md:pl-8">
            Real impact measured by <br className="hidden md:block" />
            the voices of our partners.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto flex items-center justify-center pt-10">
          
          {/* Parallax Halo Rings */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-1000 ease-out"
            style={{ 
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)` 
            }}
          >
            <div className="absolute w-[450px] md:w-[650px] aspect-square border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
            <div 
              className="absolute w-[550px] md:w-[850px] aspect-square border border-cyan/5 rounded-full animate-[spin_100s_linear_infinite_reverse]"
              style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}
            />
          </div>

          {/* Carousel Content */}
          <div className="relative w-full flex flex-col items-center z-10">
            
            <div className="mb-12 relative group">
              <div className="absolute inset-0 bg-[#00d8ff] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative w-16 h-16 rounded-2xl bg-[#050B10] border border-[#00d8ff]/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,216,255,0.1)]">
                <Quote className="w-6 h-6 text-[#00d8ff] fill-[#00d8ff]/20" />
              </div>
            </div>

            <div className={`text-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] max-w-3xl ${
              isAnimating ? "opacity-0 -translate-y-4 blur-xl" : "opacity-100 translate-y-0 blur-0"
            }`}>
              <blockquote className="text-xl md:text-3xl text-white font-medium leading-tight mb-12 tracking-tight">
                "{current.quote}"
              </blockquote>
              
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-b from-[#00d8ff]/40 to-transparent shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <div className="w-full h-full rounded-full bg-[#010a0f] overflow-hidden p-1 border border-white/10">
                    <img 
                      src={current.avatar || "/api/placeholder/80/80"} 
                      alt={current.name} 
                      className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-white font-black tracking-[0.4em] uppercase text-xs">{current.name}</p>
                  <p className="text-[#00d8ff] text-[10px] font-black tracking-[0.5em] uppercase opacity-70">{current.role}</p>
                </div>
              </div>
            </div>

            {/* Controls with Cyan Accents */}
            <div className="flex items-center gap-12 mt-20">
              <button 
                onClick={goToPrevious}
                className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center hover:border-[#00d8ff]/50 hover:bg-[#00d8ff]/5 transition-all duration-500 group"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#00d8ff] transition-colors" />
              </button>
              <button 
                onClick={goToNext}
                className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center hover:border-[#00d8ff]/50 hover:bg-[#00d8ff]/5 transition-all duration-500 group"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-[#00d8ff] transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;