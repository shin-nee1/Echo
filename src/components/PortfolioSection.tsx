import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const portfolioItems = [
  { 
    title: "Uber", 
    subtitle: "Uber SuperApp Concept", 
    category: "2024 • CASE STUDY", 
    color: "bg-[#141414]", 
    image: "/uber-mockup.png" 
  },
  { 
    title: "Barclays", 
    subtitle: "Mobile app Concept", 
    category: "2023 • UI/UX DESIGN", 
    color: "bg-[#00AEEF]", 
    image: "/barclays-mockup.png" 
  },
  { 
    title: "FINKOFF.", 
    subtitle: "Finance manager", 
    category: "2024 • MOBILE APP", 
    color: "bg-white", 
    textColor: "text-black",
    image: "/finkoff-mockup.png" 
  },
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < portfolioItems.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      {/* Header Container */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              Explore <span className="text-cyan">Our Portfolio</span>
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2 mr-4">
              <button 
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentIndex === portfolioItems.length - 1}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
            
            <Button 
              variant="outline" 
              className="rounded-full border-white/10 bg-white/5 hover:bg-cyan hover:text-black px-8 py-6 transition-all font-bold"
            >
              View All
            </Button>
          </div>
        </div>
      </div>

      {/* Sliding Track */}
      <div className="relative">
        <div 
          className="flex gap-8 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]"
          style={{ transform: `translateX(-${currentIndex * (540 + 32)}px)` }} 
        >
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`group relative flex-shrink-0 w-[85vw] md:w-[540px] aspect-[4/5] md:aspect-[1.1/1] rounded-[2.5rem] overflow-hidden transition-all duration-500 ${item.color}`}
            >
              {/* Content Layer */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col z-20">
                <span className={`text-[10px] font-black tracking-[0.3em] uppercase opacity-40 ${item.textColor || 'text-white'}`}>
                  {item.category}
                </span>
                
                <h3 className={`mt-6 text-4xl md:text-5xl font-bold leading-tight ${item.textColor || 'text-white'}`}>
                  {item.title}
                </h3>
                
                <p className={`mt-4 text-lg font-medium opacity-70 max-w-[200px] ${item.textColor || 'text-white'}`}>
                  {item.subtitle}
                </p>

                <div className="mt-auto flex justify-end">
                   <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-cyan/50 transition-colors">
                      <ArrowRight className={`w-6 h-6 ${item.textColor || 'text-white'}`} />
                   </div>
                </div>
              </div>

              {/* Visual Asset Layer */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                 <div className="absolute right-0 bottom-0 w-3/4 h-3/4 translate-x-12 translate-y-12 rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700">
                    <div className="w-full h-full bg-black/20 rounded-[2.5rem] border border-white/20 shadow-2xl" />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;