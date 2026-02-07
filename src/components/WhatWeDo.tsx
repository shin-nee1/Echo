import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ASSETS
import DesignImg5 from "@/assets/image-removebg-preview (5).png";
import DesignImg6 from "@/assets/image-removebg-preview (6).png";
import DevImg7 from "@/assets/image-removebg-preview (7).png";
import MarketImg8 from "@/assets/image-removebg-preview (8).png";

const services = [
  {
    title: "DESIGN",
    highlight: "Shape how the world sees you.",
    description: "Visual systems built for recognition and impact across every brand layer.",
    href: "/design"
  },
  {
    title: "DEVELOPMENT",
    highlight: "Build what brings brands to life.",
    description: "Digital experiences that perform flawlessly and scale as fast as your ideas.",
    href: "/develop"
  },
  {
    title: "MARKETING",
    highlight: "Grow what matters most.",
    description: "Performance-driven growth strategy focused on measurable impact.",
    href: "/market"
  }
];

const WhatWeDo = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative bg-transparent overflow-hidden z-10"
      style={{ padding: "clamp(2.5rem, 7vh, 5rem) 0" }}
    >
      <div className="mx-auto relative z-10">
        
        {/* HEADER AREA */}
        <div 
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-[1rem]"
          style={{ marginBottom: "clamp(1.5rem, 4vh, 3rem)" }}
        >
          <div className="flex flex-row items-end gap-[0.75rem] md:gap-[2rem]">
            <div className="shrink-0">
              <h2 
                className="text-white font-bold tracking-tighter leading-none"
                style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
              >
                What We <span className="text-[#43c6e4]">Do</span>
              </h2>
            </div>
            
            <div className="pl-[0.75rem] md:pl-[2rem] border-l border-white/10 pb-[0.15rem]">
              <p 
                className="text-slate-400 leading-tight"
                style={{ 
                  fontSize: "clamp(0.65rem, 0.9vw, 0.9rem)",
                  maxWidth: "220px" 
                }}
              >
                Every brand we build follows a rhythm.
              </p>
            </div>
          </div>

          {/* SCROLL BUTTONS (DESKTOP) */}
          <div className="hidden lg:flex min-[1440px]:hidden gap-[0.75rem]">
            <button onClick={() => scroll("left")} className="rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-[#43c6e4] transition-all w-10 h-10">
              <ArrowLeft size="1rem" />
            </button>
            <button onClick={() => scroll("right")} className="rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-[#43c6e4] transition-all w-10 h-10">
              <ArrowRight size="1rem" />
            </button>
          </div>
        </div>

        {/* SERVICE CARDS ROW */}
        <div 
          ref={scrollRef}
          className="flex gap-[1rem] md:gap-[2rem] overflow-x-auto pb-[1.5rem] -mx-[5vw] px-[5vw] snap-x snap-mandatory lg:overflow-hidden min-[1440px]:grid min-[1440px]:grid-cols-3 min-[1440px]:gap-[2rem] scrollbar-none"
        >
          {services.map((service, i) => (
            <Link 
              key={i} 
              to={service.href} 
              className="group block shrink-0 snap-center w-[65vw] sm:w-[45vw] md:w-[40vw] lg:w-[31vw] min-[1440px]:w-auto"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative flex flex-col rounded-[1.25rem] md:rounded-[2rem] bg-black/20 border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-[#43c6e4]/30"
                style={{ 
                  padding: "clamp(1rem, 3vw, 2rem)",
                  minHeight: "clamp(15rem, 25vw, 26rem)",
                  height: "100%"
                }}
              >
                {/* DYNAMIC IMAGES AREA */}
                <div 
                  className="relative w-full mb-[0.75rem] pointer-events-none flex-shrink-0"
                  style={{ height: "clamp(4rem, 8vw, 8rem)" }}
                >
                  {service.title === "DESIGN" && (
                    <>
                      <img 
                        src={DesignImg6} 
                        className="absolute -top-2 -right-2 h-auto group-hover:scale-105 transition-transform" 
                        style={{ width: "clamp(5rem, 10vw, 9rem)" }}
                      />
                      <img 
                        src={DesignImg5} 
                        className="absolute -bottom-2 -left-2 h-auto" 
                        style={{ width: "clamp(2.5rem, 5vw, 4.5rem)" }}
                      />
                    </>
                  )}

                  {service.title === "DEVELOPMENT" && (
                    <img 
                      src={DevImg7} 
                      className="absolute top-0 -left-2 max-w-none h-auto" 
                      style={{ width: "clamp(7.5rem, 15vw, 13rem)" }}
                    />
                  )}

                  {service.title === "MARKETING" && (
                    <img 
                      src={MarketImg8} 
                      className="absolute -top-2 -left-2 max-w-none h-auto" 
                      style={{ width: "clamp(7.5rem, 15vw, 13rem)" }}
                    />
                  )}
                </div>

                {/* CONTENT AREA */}
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-white/30 font-black tracking-widest uppercase mb-1" style={{ fontSize: "9px" }}>
                    {service.title}
                  </h3>
                  <p 
                    className="text-[#43c6e4] font-bold mb-2 tracking-tight leading-tight"
                    style={{ fontSize: "clamp(1rem, 1.4vw, 1.5rem)" }}
                  >
                    {service.highlight}
                  </p>
                  <p 
                    className="text-slate-400 leading-snug mb-4 line-clamp-3"
                    style={{ fontSize: "clamp(0.75rem, 0.85vw, 0.9rem)" }}
                  >
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <span 
                      className="inline-flex items-center gap-2 text-white/80 font-bold uppercase tracking-wider border-b border-white/10 group-hover:border-[#43c6e4] pb-1 transition-all"
                      style={{ fontSize: "10px" }}
                    >
                      Explore
                      <ArrowRight size="0.75rem" className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;