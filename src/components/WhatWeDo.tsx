import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ASSETS
import DesignImg5 from "@/assets/image-removebg-preview (5).png";
import DesignImg6 from "@/assets/image-removebg-preview (6).png";
import DevImg7 from "@/assets/image-removebg-preview (7).png";
import MarketImg8 from "@/assets/image-removebg-preview (8).png";

const services = [
  {
    title: "DESIGN",
    highlight: "Shape how the world sees you.",
    description: "We design every visual layer of your brand. From brand and product design to campaign creative and content direction, we create visual systems built for recognition.",
    href: "/design"
  },
  {
    title: "DEVELOPMENT",
    highlight: "Build what brings brands to life.",
    description: "Websites and online stores to full-scale mobile and web apps, we develop digital experiences that perform flawlessly, scale easily, and move as fast as your ideas.",
    href: "/develop"
  },
  {
    title: "MARKETING",
    highlight: "Grow what matters most.",
    description: "We market with a focus on performance. From organic SEO, content, and paid media to social and growth strategy, we drive measurable impact.",
    href: "/market"
  }
];

const WhatWeDo = () => {
  return (
    <section className="relative py-16 md:py-24 bg-transparent overflow-hidden z-10">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER - Responsive alignment and sizing */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-16 md:mb-20">
          <div className="shrink-0">
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
              What We <span className="text-[#43c6e4]">Do</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base font-normal max-w-[280px] leading-snug pt-2 md:pl-8 md:border-l md:border-white/10">
            Every brand we build follows a rhythm. <br className="hidden md:block" />
            Designed to create presence.
          </p>
        </div>

        {/* SERVICE CARDS GRID - 1 col on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <Link key={i} to={service.href} className="group block h-full">
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="relative h-full p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.01] border border-white/[0.12] backdrop-blur-[32px] transition-all duration-300 
                group-hover:border-[#43c6e4]/40 group-hover:bg-white/[0.05] overflow-hidden"
              >
                {/* GLASS TEXTURE */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/[0.2] pointer-events-none" />
                
                {/* 3D IMAGE ASSETS - Responsive Positioning */}
                <div className="relative w-full h-32 sm:h-40 md:h-44 mb-4 md:mb-2 pointer-events-none">
                  
                  {/* DESIGN CARD */}
                  {service.title === "DESIGN" && (
                    <>
                      <img src={DesignImg6} className="absolute -top-4 -right-2 md:-top-6 md:-right-4 w-32 md:w-40 h-auto filter drop-shadow-[0_20px_40px_rgba(67,198,228,0.3)] group-hover:scale-110 transition-transform duration-500" />
                      <img src={DesignImg5} className="absolute bottom-0 left-0 w-20 md:w-24 h-auto filter drop-shadow-[0_15px_30px_rgba(67,198,228,0.4)] group-hover:-translate-y-3 transition-transform duration-500" />
                    </>
                  )}

                  {/* DEVELOPMENT CARD */}
                  {service.title === "DEVELOPMENT" && (
                    <img 
                      src={DevImg7} 
                      className="absolute top-0 -left-6 md:-top-0 md:-left-10 w-44 md:w-60 h-auto group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_30px_60px_rgba(67,198,228,0.3)]" 
                    />
                  )}

                  {/* MARKETING CARD */}
                  {service.title === "MARKETING" && (
                    <img 
                      src={MarketImg8} 
                      className="absolute -top-4 -left-6 md:-top-9 md:-left-8 w-48 md:w-64 h-auto group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_30px_60px_rgba(67,198,228,0.35)]" 
                    />
                  )}
                </div>

                <div className="space-y-4 relative z-10">
                  {/* RESPONSIVE HEADING SIZE */}
                  <h3 className="text-white text-xl md:text-2xl font-black tracking-[0.15em] uppercase leading-none">{service.title}</h3>
                  <p className="text-[#43c6e4] font-bold text-lg md:text-xl leading-tight">{service.highlight}</p>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed opacity-80">{service.description}</p>
                  <div className="pt-4 md:pt-6">
                    <span className="text-white text-xs md:text-sm font-medium border-b border-white/20 group-hover:border-[#43c6e4] pb-1 transition-all">
                      Explore {service.title.charAt(0) + service.title.slice(1).toLowerCase()}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* FOOTER AREA - Optimized for smaller screens */}
        <div className="mt-20 md:mt-28 text-center space-y-8 md:space-y-10 relative z-10">
          <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-4 md:gap-x-6 text-slate-500 text-[10px] md:text-[13px] tracking-wide uppercase font-bold px-4">
            <span>Design defines you.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>Development builds you.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>Marketing scales you.</span>
          </div>
          
          <div className="relative inline-block px-4">
            <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight pb-6 md:pb-8">
              Together, They create your <span className="text-[#43c6e4] italic ml-1">echo.</span>
            </h4>
            <div className="absolute bottom-2 left-0 w-full overflow-hidden px-4">
              <svg className="w-full h-3 md:h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 12.5 0 25 10 T 50 10 T 75 10 T 100 10" stroke="#43c6e4" strokeWidth="4" fill="transparent" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;