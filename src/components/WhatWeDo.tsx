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
    <section className="whatwedo-wrapper relative bg-transparent overflow-hidden z-10">
      <div className="container mx-auto relative z-10 px-[5vw]">
        
        {/* HEADER AREA */}
        <div className="whatwedo-header flex flex-col lg:flex-row lg:items-end justify-between gap-[1rem]">
          <div className="flex flex-row items-end gap-[0.75rem] md:gap-[2rem]">
            <div className="shrink-0">
              <h2 className="whatwedo-title text-white font-bold tracking-tighter leading-none">
                What We <span className="text-[#43c6e4]">Do</span>
              </h2>
            </div>
            
            <div className="whatwedo-divider pl-[0.75rem] md:pl-[2rem] border-l border-white/10 pb-[0.15rem]">
              <p className="whatwedo-subtitle text-slate-400 leading-tight">
                Every brand we build follows a rhythm.
              </p>
            </div>
          </div>

          {/* SCROLL BUTTONS: Managed by Media Queries */}
          <div className="whatwedo-nav hidden lg:flex gap-[0.75rem]">
            <button 
              onClick={() => scroll("left")} 
              className="rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-[#43c6e4] hover:border-[#43c6e4] transition-all w-10 h-10"
            >
              <ArrowLeft size="1rem" />
            </button>
            <button 
              onClick={() => scroll("right")} 
              className="rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-[#43c6e4] hover:border-[#43c6e4] transition-all w-10 h-10"
            >
              <ArrowRight size="1rem" />
            </button>
          </div>
        </div>

        {/* SERVICE CARDS ROW */}
        <div 
          ref={scrollRef}
          className="whatwedo-scroll-container flex gap-[1rem] md:gap-[2rem] overflow-x-auto pb-[1.5rem] -mx-[5vw] px-[5vw] snap-x snap-mandatory scrollbar-none"
        >
          {services.map((service, i) => (
            <Link 
              key={i} 
              to={service.href} 
              className="whatwedo-card-link group block shrink-0 snap-center"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="whatwedo-card relative flex flex-col rounded-[1.25rem] md:rounded-[2rem] bg-black/20 border border-white/10 overflow-hidden transition-all duration-500 group-hover:border-[#43c6e4]/30"
              >
                {/* DYNAMIC IMAGES AREA */}
                <div className="whatwedo-img-area relative w-full mb-[0.75rem] pointer-events-none flex-shrink-0">
                  {service.title === "DESIGN" && (
                    <>
                      <img src={DesignImg6} alt="" className="whatwedo-img-primary absolute -top-2 -right-2 h-auto group-hover:scale-105 transition-transform" />
                      <img src={DesignImg5} alt="" className="whatwedo-img-secondary absolute -bottom-2 -left-2 h-auto" />
                    </>
                  )}

                  {service.title === "DEVELOPMENT" && (
                    <img src={DevImg7} alt="" className="whatwedo-img-full absolute top-0 -left-2 max-w-none h-auto" />
                  )}

                  {service.title === "MARKETING" && (
                    <img src={MarketImg8} alt="" className="whatwedo-img-full absolute -top-2 -left-2 max-w-none h-auto" />
                  )}
                </div>

                {/* CONTENT AREA */}
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="whatwedo-tag text-white/30 font-black tracking-widest uppercase mb-1">
                    {service.title}
                  </h3>
                  <p className="whatwedo-highlight text-[#43c6e4] font-bold mb-2 tracking-tight leading-tight">
                    {service.highlight}
                  </p>
                  <p className="whatwedo-desc text-slate-400 leading-snug mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <span className="whatwedo-explore inline-flex items-center gap-2 text-white/80 font-bold uppercase tracking-wider border-b border-white/10 group-hover:border-[#43c6e4] pb-1 transition-all">
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

      <style dangerouslySetInnerHTML={{ __html: `
        /* REMOVE SCROLLBAR BUT KEEP SWIPE */
        .whatwedo-scroll-container {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
          -webkit-overflow-scrolling: touch; /* Smooth momentum scroll for iOS */
        }
        .whatwedo-scroll-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }

        /* 1. BASE / MOBILE FIRST */
        .whatwedo-wrapper { padding: 2rem 0; }
        .whatwedo-header { margin-bottom: 2rem; }
        .whatwedo-title { font-size: 1.85rem; }
        .whatwedo-subtitle { font-size: 0.7rem; max-width: 140px; }
        
        .whatwedo-card-link { width: 65vw; }
        .whatwedo-card { padding: 1.3rem; min-height: 16rem; }
        .whatwedo-img-area { height: 6rem; }
        .whatwedo-img-primary { width: 6rem; }
        .whatwedo-img-secondary { width: 4rem; }
        .whatwedo-img-full { width: 9rem; }
        
        .whatwedo-tag { font-size: 10px; }
        .whatwedo-highlight { font-size: 0.85rem; }
        .whatwedo-desc { font-size: 0.75rem; }
        .whatwedo-explore { font-size: 9px; }

        /* 2. TABLET (768px) */
        @media (min-width: 768px) {
          .whatwedo-title { font-size: 2.5rem; }
          .whatwedo-subtitle { font-size: 0.85rem; max-width: 200px; }
          .whatwedo-card-link { width: 45vw; }
          .whatwedo-card { padding: 1.75rem; min-height: 15rem; }
          .whatwedo-img-area { height: 7rem; }
          .whatwedo-img-primary { width: 7rem; }
          .whatwedo-img-full { width: 10rem; }
        }

        /* 3. LAPTOP (1024px) */
        @media (min-width: 1024px) {
          .whatwedo-wrapper { padding: 3rem 0; }
          .whatwedo-title { font-size: 2.8rem; }
          .whatwedo-card-link { width: 30vw; }
          .whatwedo-card { padding: 2rem; min-height: 22rem; }
          .whatwedo-highlight { font-size: 1.4rem; }
        }

        /* 4. LARGE DESKTOP (1440px) */
        @media (min-width: 1440px) {
          .whatwedo-title { font-size: 2.5rem; }
          .whatwedo-card-link { width: 25vw; }
          .whatwedo-img-area { height: 7rem; }
          .whatwedo-img-primary { width: 8rem; }
          .whatwedo-img-full { width: 10rem; }
          .whatwedo-highlight { font-size: 1.5rem; }
          .whatwedo-desc { font-size: 0.85rem; }
        }

        /* 5. 4K MONITORS (2560px) */
        @media (min-width: 2560px) {
          .whatwedo-wrapper { padding: 5vh 0; }
          .whatwedo-title { font-size: 4.8rem; }
          .whatwedo-subtitle { font-size: 1.5rem; max-width: 400px; }
          .whatwedo-card-link { width: 28vw; }
          .whatwedo-card { padding: 2rem; min-height: 35rem; border-radius: 4rem; }
          .whatwedo-img-area { height: 15rem; margin-bottom: 3rem; }
          .whatwedo-img-primary { width: 15rem; }
          .whatwedo-img-secondary { width: 8rem; }
          .whatwedo-img-full { width: 19rem; }
          .whatwedo-tag { font-size: 1.6rem; margin-bottom: 1.5rem; }
          .whatwedo-highlight { font-size: 2rem; margin-bottom: 1rem; }
          .whatwedo-desc { font-size: 1.6rem; line-height: 1.6; margin-bottom: 3rem; }
          .whatwedo-explore { font-size: 1.2rem; padding-bottom: 1rem; gap: 1.5rem; }
          .whatwedo-nav { gap: 2rem; }
          .whatwedo-nav button { width: 5rem; height: 5rem; }
          .whatwedo-nav svg { width: 2rem; height: 2rem; }
        }
      `}} />
    </section>
  );
};

export default WhatWeDo;