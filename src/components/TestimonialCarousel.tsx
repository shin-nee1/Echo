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

  // Mouse Parallax Logic
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
    <section className="relative py-40 overflow-hidden bg-transparent">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(8,229,255,0.04)_0%,_transparent_65%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-[0.2em]">
            <span className="text-cyan">Testimonials</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          
          {/* Parallax Halo Rings */}
          <div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 ease-out"
            style={{ 
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)` 
            }}
          >
            <div className="absolute w-[450px] md:w-[600px] aspect-square border border-white/10 rounded-full animate-[spin_50s_linear_infinite]" />
            <div 
              className="absolute w-[550px] md:w-[750px] aspect-square border border-white/[0.03] rounded-full animate-[spin_80s_linear_infinite_reverse]"
              style={{ transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px)` }}
            />
          </div>

          {/* Content Block */}
          <div className="relative w-full flex flex-col items-center z-10">
            
            <div className="mb-10 relative">
              <div className="absolute inset-0 bg-cyan blur-2xl opacity-20" />
              <div className="relative w-14 h-14 rounded-full bg-[#050B10] border border-cyan/40 flex items-center justify-center">
                <Quote className="w-5 h-5 text-cyan fill-cyan" />
              </div>
            </div>

            {/* Reduced, Refined Text Size */}
            <div className={`text-center transition-all duration-500 ease-out max-w-2xl ${
              isAnimating ? "opacity-0 scale-95 blur-md" : "opacity-100 scale-100 blur-0"
            }`}>
              <blockquote className="text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-10 italic tracking-wide">
                "{current.quote}"
              </blockquote>
              
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 rounded-full p-[1px] bg-gradient-to-b from-cyan/40 to-transparent">
                  <div className="w-full h-full rounded-full bg-[#050B10] overflow-hidden p-1 border border-white/5">
                    <img 
                      src={current.avatar || "/api/placeholder/64/64"} 
                      alt={current.name} 
                      className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white font-black tracking-[0.3em] uppercase text-[10px] mb-1">{current.name}</p>
                  <p className="text-cyan/50 text-[9px] font-black tracking-[0.4em] uppercase">{current.role}</p>
                </div>
              </div>
            </div>

            {/* Nav Controls */}
            <div className="flex items-center gap-8 mt-20">
              <button 
                onClick={goToPrevious}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan hover:text-black transition-all group relative overflow-hidden"
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:text-inherit relative z-10" />
              </button>
              <button 
                onClick={goToNext}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan hover:text-black transition-all group relative overflow-hidden"
              >
                <ChevronRight className="w-5 h-5 text-white group-hover:text-inherit relative z-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;