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
      <div className="mx-auto px-[5vw] relative z-10" style={{ maxWidth: "2200px" }}>
        
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
          className="whatwedo-scroll-container flex gap-[1rem] md:gap-[2rem] overflow-x-auto pt-5 pb-[1.5rem] -mx-[5vw] px-[5vw] snap-x snap-mandatory scrollbar-none"
        >
          {services.map((service, i) => (
            <Link 
              key={i} 
              to={service.href} 
              className="whatwedo-card-link group block shrink-0 snap-center"
            >
              <motion.div 
                whileHover={{ y: -15 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="whatwedo-card relative flex flex-col rounded-[1.25rem] md:rounded-[2rem] overflow-hidden transition-all duration-500"
              >
                <div className="whatwedo-glass-layer absolute inset-0 z-0 transition-all duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="whatwedo-img-area relative w-full mb-[0.75rem] pointer-events-none flex-shrink-0">
                    {service.title === "DESIGN" && (
                      <>
                        <img src={DesignImg6} alt="" className="whatwedo-img-primary absolute -top-2 -right-2 h-auto group-hover:scale-110 transition-transform duration-500" />
                        <img src={DesignImg5} alt="" className="whatwedo-img-secondary absolute -bottom-2 -left-2 h-auto group-hover:rotate-12 transition-transform duration-500" />
                      </>
                    )}

                    {service.title === "DEVELOPMENT" && (
                      <img src={DevImg7} alt="" className="whatwedo-img-full absolute top-0 -left-2 max-w-none h-auto group-hover:scale-105 transition-transform duration-500" />
                    )}

                    {service.title === "MARKETING" && (
                      <img src={MarketImg8} alt="" className="whatwedo-img-full absolute -top-2 -left-2 max-w-none h-auto group-hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>

                  <h3 className="whatwedo-tag text-white font-black tracking-widest uppercase mb-1">
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

        {/* ECHO RIBBON TEXT */}
        <div className="whatwedo-ribbon flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12 text-center">
          <p className="text-white font-medium text-xs md:text-sm uppercase tracking-[0.2em] opacity-80">
            Design defines you. <span className="mx-4 opacity-20">|</span> Development builds you. <span className="mx-4 opacity-20">|</span> Marketing scales you.
          </p>
          <div className="w-full mt-3">
            <p className="text-white font-bold text-base md:text-lg tracking-tight">
              Together, They create your <span className="text-[#43c6e4]">echo.</span>
            </p>
            {/* ANIMATED WAVE SVG UNDERLINE */}
            <div className="flex justify-center mt-1 overflow-hidden">
              <svg width="220" height="10" viewBox="0 0 220 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                <path 
                  className="wave-path"
                  d="M-100 8C-80 8 -70 2 -50 2C-30 2 -20 8 0 8C20 8 30 2 50 2C70 2 80 8 100 8C120 8 130 2 150 2C170 2 180 8 200 8C220 8 230 2 250 2C270 2 280 8 300 8" 
                  stroke="#43c6e4" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .whatwedo-scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .whatwedo-scroll-container::-webkit-scrollbar { display: none; }

        .whatwedo-card {
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .whatwedo-glass-layer {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: radial-gradient(
            circle at top left, 
            rgba(255, 255, 255, 0.02) 0%, 
            transparent 100%
          );
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); 
        }

        .whatwedo-card-link:hover .whatwedo-card {
          border-color: rgba(67, 198, 228, 0.4);
        }

        .whatwedo-card-link:hover .whatwedo-glass-layer {
          background: radial-gradient(
            circle at 100% 100%, 
            rgba(67, 198, 228, 0.22) 0%, 
            transparent 75%
          );
          box-shadow: 
            inset -20px -20px 60px rgba(67, 198, 228, 0.2),
            0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .wave-path {
          animation: waveFlow 4s linear infinite;
        }

        @keyframes waveFlow {
          from { transform: translateX(0); }
          to { transform: translateX(100px); }
        }

        .whatwedo-wrapper { padding-top: 2rem; padding-bottom: 5rem; }
        .whatwedo-header { margin-bottom: 1rem; }
        .whatwedo-title { font-size: 1.85rem; }
        .whatwedo-subtitle { font-size: 0.7rem; max-width: 150px; }
        .whatwedo-card-link { width: 65vw; }
        .whatwedo-card { padding: 1.3rem; min-height: 16rem; }
        .whatwedo-img-area { height: 6rem; }
        .whatwedo-img-primary { width: 6rem; }
        .whatwedo-img-secondary { width: 4rem; }
        .whatwedo-img-full { width: 9rem; }
        .whatwedo-tag { font-size: 16px; }
        .whatwedo-highlight { font-size: 0.85rem; }
        .whatwedo-desc { font-size: 0.75rem; }
        .whatwedo-explore { font-size: 9px; }
        .whatwedo-scroll-container { padding-bottom: 0rem; }
        
        /* 4K RIBBON FIX */
        .whatwedo-ribbon p { font-size: 1rem; }
        .whatwedo-ribbon .uppercase { 
            font-size: 0.75rem; 
            margin-bottom: 0.4rem; 
            text-align: center; 
            width: 100%;
        }
        .whatwedo-ribbon svg { width: 230px; height: 25px; }

        /* MOBILE & TABLET STACKING LOGIC */
        @media (max-width: 1023px) {
          .whatwedo-ribbon p.uppercase {
             display: flex;
             flex-direction: column;
             gap: 0.5rem;
             align-items: center;
          }
          .whatwedo-ribbon p.uppercase span {
             display: none; /* Hides the | separator */
          }
        }

        /* INCREASED HORIZONTAL WIDTH FOR TABLET/SMALL LAPTOP */
        @media (max-width: 1440px) {
           .whatwedo-ribbon {
              width: calc(100% + 10vw);
              margin-left: -5vw;
              margin-right: -5vw;
              padding-left: 1rem;
              padding-right: 1rem;
           }
        }

        @media (min-width: 768px) {
          .whatwedo-wrapper { padding-bottom: 8rem; }
          .whatwedo-title { font-size: 2.5rem; }
          .whatwedo-subtitle { font-size: 0.85rem; max-width: 200px; }
          .whatwedo-card-link { width: 45vw; }
          .whatwedo-card { padding: 1.75rem; min-height: 15rem; }
          .whatwedo-img-area { height: 7rem; }
          .whatwedo-img-primary { width: 7rem; }
          .whatwedo-img-full { width: 10rem; }
           /* 4K RIBBON FIX */
        .whatwedo-ribbon p { font-size: 1.15rem; }
        .whatwedo-ribbon .uppercase { 
            font-size: 0.75rem; 
            margin-bottom: 0.4rem; 
            text-align: center; 
            width: 100%;
        }
        .whatwedo-ribbon svg { width: 280px; height: 25px; }
        }

        @media (min-width: 1024px) {
          .whatwedo-wrapper { padding-top: 3rem; padding-bottom: 10rem; }
          .whatwedo-title { font-size: 2.8rem; }
          .whatwedo-card-link { width: 40vw; }
          .whatwedo-card { padding: 2rem; min-height: 20rem; }
          .whatwedo-highlight { font-size: 1.4rem; }
          .whatwedo-tag { font-size: 16px; }
          .whatwedo-highlight { font-size: 0.85rem; }
          .whatwedo-desc { font-size: 0.75rem; }
        }

        @media (min-width: 1440px) {
          .whatwedo-wrapper { padding-bottom: 18vh; }
        .whatwedo-title { 
          font-size: 2.7rem; }
          .whatwedo-card-link { width: 30vw; }
          .whatwedo-img-area { height: 7rem; }
          .whatwedo-img-primary { width: 8rem; }
          .whatwedo-img-full { width: 10rem; }
          .whatwedo-tag { font-size: 17px; }
          .whatwedo-highlight { font-size: 0.95rem; }
          .whatwedo-desc { font-size: 0.85rem; }
          /* 4K RIBBON FIX */
        .whatwedo-ribbon p { font-size: 1.2rem; }
        .whatwedo-ribbon .uppercase { 
            font-size: 0.75rem; 
            margin-bottom: 0.4rem; 
            text-align: center; 
            width: 100%;
        }
        .whatwedo-ribbon svg { width: 300px; height: 25px; }
        }

        @media (min-width: 2560px) {
          .whatwedo-wrapper { padding-top: 5vh; padding-bottom: 20vh; }
          .whatwedo-title { font-size: 4.8rem; }
          .whatwedo-subtitle { font-size: 1.55rem; max-width: 400px; }
          .whatwedo-card-link { width: 35vw; }
          .whatwedo-card { padding: 2.55rem; min-height: 35rem; border-radius: 4rem; }
          .whatwedo-img-area { height: 15rem; margin-bottom: 3rem; }
          .whatwedo-img-primary { width: 15rem; }
          .whatwedo-img-secondary { width: 8rem; }
          .whatwedo-img-full { width: 24rem; }
          .whatwedo-tag { font-size: 2.2rem; margin-bottom: 1.5rem; }
          .whatwedo-highlight { font-size: 1.75rem; margin-bottom: 1rem; }
          .whatwedo-desc { font-size: 1.65rem; line-height: 1.6; margin-bottom: 3rem; }
          .whatwedo-explore { font-size: 1.2rem; padding-bottom: 1rem; gap: 1.5rem; }
          .whatwedo-nav { gap: 2rem; }
          .whatwedo-nav button { width: 5rem; height: 5rem; }
          .whatwedo-nav svg { width: 2rem; height: 2rem; }
          .whatwedo-scroll-container { padding-bottom: 5rem; }
          
          /* 4K RIBBON FIX */
          .whatwedo-ribbon p { font-size: 2.2rem; }
          .whatwedo-ribbon .uppercase { font-size: 1.4rem; margin-bottom: 2.5rem; }
          .whatwedo-ribbon svg { width: 500px; height: 55px; }
        }

        @media (max-width: 425px) {
          .whatwedo-title { font-size: 1.85rem; }
          .whatwedo-highlight { font-size: 0.85rem; }
        }
      `}} />
    </section>
  );
};

export default WhatWeDo;