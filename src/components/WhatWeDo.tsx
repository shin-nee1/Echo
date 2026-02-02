import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// IMPORT ALL ARCHITECTURAL ASSETS
import DesignImg5 from "@/assets/image-removebg-preview (5).png";
import DesignImg6 from "@/assets/image-removebg-preview (6).png";
import DevImg7 from "@/assets/image-removebg-preview (7).png";
import MarketImg8 from "@/assets/image-removebg-preview (8).png";

const services = [
  {
    title: "DESIGN",
    highlight: "Shape how the world sees you.",
    description: "We design every visual layer of your brand. From brand and product design to campaign creative and content direction.",
    href: "/design"
  },
  {
    title: "DEVELOPMENT",
    highlight: "Build what brings brands to life.",
    description: "Websites and online stores to full-scale mobile and web apps, we develop digital experiences that perform flawlessly.",
    href: "/develop"
  },
  {
    title: "MARKETING",
    highlight: "Grow what matters most.",
    description: "We market with a focus on performance. From organic SEO and content to paid media and growth strategy.",
    href: "/market"
  }
];

const WhatWeDo = () => {
  return (
    /* CHANGED: bg-[#010a0f] removed, bg-transparent added to let Index halos show through */
    <section className="relative py-32 bg-transparent overflow-hidden z-10">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER - UI preserved exactly */}
        <div className="flex flex-col md:flex-row md:items-start lg:items-center gap-6 md:gap-12 mb-20">
          <div className="relative shrink-0">
            <h2 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
              What We <span className="text-[#00d8ff]">Do</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg md:text-xl font-normal max-w-sm leading-snug pt-1 md:pt-2 border-l border-white/10 md:pl-8">
            Every brand we build follows a rhythm. Designed to create presence.
          </p>
        </div>

        {/* SERVICE CARDS GRID - UI preserved exactly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link key={i} to={service.href} className="group block h-full">
              <motion.div 
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-2xl transition-all duration-500 
                group-hover:border-cyan-500/40 group-hover:bg-[#00d8ff]/[0.08] group-hover:shadow-[0_0_50px_rgba(0,216,255,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d8ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* 3D IMAGE ASSETS */}
                <div className="relative w-full aspect-video mb-6 pointer-events-none">
                  {service.title === "DESIGN" && (
                    <>
                      <img 
                        src={DesignImg6} 
                        className="absolute -top-[25%] -right-[10%] w-[65%] h-auto rotate-0 z-0
                                   filter drop-shadow-[0_20px_40px_rgba(0,216,255,0.3)] 
                                   group-hover:scale-110 transition-all duration-700" 
                      />
                      
                      <img 
                        src={DesignImg5} 
                        className="absolute bottom-0 left-0 w-[45%] h-auto rotate-[-5deg] z-10
                                   opacity-80 brightness-125 filter drop-shadow-[0_0_20px_rgba(0,216,255,0.4)]
                                   group-hover:opacity-100 group-hover:-translate-y-2 group-hover:brightness-150 transition-all duration-700" 
                      />
                    </>
                  )}

                  {service.title === "DEVELOPMENT" && (
                    <img 
                      src={DevImg7} 
                      className="absolute top-[5%] -left-[10%] w-[85%] h-auto rotate-[-5deg] group-hover:scale-110 transition-all duration-700 filter drop-shadow-[0_20px_40px_rgba(0,216,255,0.3)]" 
                    />
                  )}

                  {service.title === "MARKETING" && (
                    <img 
                      src={MarketImg8} 
                      className="absolute -top-[12%] -left-[25%] w-[85%] h-auto rotate-[-10deg] group-hover:scale-110 transition-all duration-700 filter drop-shadow-[0_20px_40px_rgba(0,216,255,0.3)]" 
                    />
                  )}
                </div>

                <div className="space-y-5 relative z-10">
                  <h3 className="text-white text-2xl font-black tracking-widest uppercase">{service.title}</h3>
                  <p className="text-[#00d8ff] font-bold text-lg leading-tight">{service.highlight}</p>
                  <p className="text-slate-400 text-base leading-relaxed opacity-85 group-hover:opacity-100 transition-all">{service.description}</p>
                  <div className="pt-6">
                    <span className="text-white text-xs font-black uppercase tracking-[0.2em] border-b-2 border-white/10 pb-2 group-hover:border-[#00d8ff] group-hover:text-[#00d8ff] transition-all">
                      Explore {service.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* TAGLINE AREA - UI preserved exactly */}
        <div className="mt-12 text-center space-y-8 relative z-10">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-slate-500 text-xs font-bold tracking-[0.3em] uppercase opacity-60">
            <span>Design defines you</span>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
            <span>Development builds you</span>
            <div className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
            <span>Marketing scales you</span>
          </div>
          
          <h4 className="text-white text-xl md:text-2xl font-medium tracking-tight">
            Together, They create your <span className="text-[#00d8ff] italic relative inline-block ml-1">
              echo.
              <svg className="absolute -bottom-3 left-0 w-full h-2" viewBox="0 0 100 20" preserveAspectRatio="none">
                <motion.path 
                  d="M0 10 Q 12.5 0 25 10 T 50 10 T 75 10 T 100 10" 
                  stroke="#00d8ff" 
                  strokeWidth="4" 
                  fill="transparent" 
                  strokeLinecap="round" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>
            </span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;