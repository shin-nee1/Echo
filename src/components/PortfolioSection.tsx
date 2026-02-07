import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ASSET IMPORTS
import PortImg9 from "@/assets/image-removebg-preview (9).png";
import PortImg10 from "@/assets/image-removebg-preview (10).png";
import PortImg11 from "@/assets/image-removebg-preview (11).png";

const PortfolioSection = () => {
  const projects = [
    { id: 1, img: PortImg9, name: "Uber", bg: "bg-[#141414]", href: "/portfolio/uber" },
    { id: 2, img: PortImg10, name: "Barclays", bg: "bg-[#00AEEF]", href: "/portfolio/barclays" },
    { id: 3, img: PortImg11, name: "FINKOFF.", bg: "bg-white", href: "/portfolio/finkoff" }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative bg-transparent overflow-hidden z-10"
      style={{ padding: "clamp(3rem, 10vh, 8rem) 0" }}
    >
      <div className="mx-auto px-[5vw] relative z-10" style={{ maxWidth: "1600px" }}>
        
        {/* HEADER AREA - Always a Row */}
        <div 
          className="flex flex-row items-end justify-between gap-[1rem] md:gap-[2rem]" 
          style={{ marginBottom: "clamp(2rem, 6vh, 4rem)" }}
        >
          
          <div className="flex flex-row items-end gap-[1rem] md:gap-[2rem] flex-nowrap min-w-0">
            {/* TITLE */}
            <div className="shrink-0">
              <h2 
                className="text-white font-bold tracking-tighter leading-none"
                style={{ fontSize: "clamp(1.5rem, 4.5vw, 4rem)" }}
              >
                Our <span className="text-[#43c6e4]">Portfolio</span>
              </h2>
            </div>
            
            {/* DESCRIPTION - Stays in row */}
            <div className="pl-[0.75rem] md:pl-[2rem] border-l border-white/10 pb-[0.2rem] min-w-0">
              <p 
                className="text-slate-400 leading-tight line-clamp-2 md:line-clamp-none"
                style={{ 
                  fontSize: "clamp(0.65rem, 1vw, 1rem)", 
                  maxWidth: "clamp(100px, 20vw, 350px)" 
                }}
              >
                Showcasing digital excellence. Built to scale.
              </p>
            </div>
          </div>

          {/* ACTIONS & BUTTON - Pushed to the Right */}
          <div className="flex flex-row items-end gap-[1rem] shrink-0">
            {/* SCROLL BUTTONS (Hidden on Desktop 4K and Mobile/Tablet) */}
            <div className="hidden lg:flex min-[1440px]:hidden gap-[0.75rem] pb-[0.25rem]">
              <button 
                onClick={() => scroll("left")}
                className="rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-[#43c6e4] hover:border-[#43c6e4] hover:text-black transition-all duration-300"
                style={{ width: "clamp(2.5rem, 3.5vw, 3.5rem)", height: "clamp(2.5rem, 3.5vw, 3.5rem)" }}
              >
                <ArrowLeft size="1.2rem" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-[#43c6e4] hover:border-[#43c6e4] hover:text-black transition-all duration-300"
                style={{ width: "clamp(2.5rem, 3.5vw, 3.5rem)", height: "clamp(2.5rem, 3.5vw, 3.5rem)" }}
              >
                <ArrowRight size="1.2rem" />
              </button>
            </div>

            {/* UNIVERSAL VIEW ALL BUTTON */}
            <Button 
              variant="cyan"
              size="hero"
              className="rounded-full"
              style={{ 
                fontSize: "clamp(0.7rem, 0.9vw, 1rem)", 
                padding: "0 clamp(1rem, 2vw, 2.5rem)",
                height: "clamp(2.5rem, 4vw, 3.5rem)" 
              }}
            >
              View All
            </Button>
          </div>
        </div>

        {/* PORTFOLIO CARDS ROW */}
        <div 
          ref={scrollRef}
          className="flex gap-[1.5rem] md:gap-[2.5rem] lg:gap-[3rem] overflow-x-auto pb-[2rem] -mx-[5vw] px-[5vw] snap-x snap-mandatory lg:overflow-hidden lg:pb-0 min-[1440px]:grid min-[1440px]:grid-cols-3 min-[1440px]:gap-[4rem] min-[1440px]:overflow-visible min-[1440px]:mx-0 min-[1440px]:px-0 scrollbar-none"
        >
          {projects.map((project) => (
            <Link 
              key={project.id}
              to={project.href}
              className="group block shrink-0 snap-center w-[85vw] sm:w-[50vw] md:w-[45vw] lg:w-[31vw] min-[1440px]:w-auto"
            >
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col"
              >
                <div 
                  className={`relative w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden ${project.bg} border border-white/5 flex items-center justify-center p-[20%] transition-all duration-500`}
                  style={{ 
                    aspectRatio: "1/1",
                    maxHeight: "45vh"
                  }}
                >
                  <img 
                    src={project.img} 
                    alt={project.name}
                    className={`max-w-[70%] max-h-[70%] w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-110 ${
                      project.id === 3 ? "object-left" : "object-center"
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;