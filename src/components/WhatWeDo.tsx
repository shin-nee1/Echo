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
  return (
    <section className="relative py-16 md:py-24 bg-transparent overflow-hidden z-10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-16">
          <div className="shrink-0">
            <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              What We <span className="text-[#43c6e4]">Do</span>
            </h2>
          </div>
          <div className="lg:pl-10 lg:ml-10 lg:border-l lg:border-white/10">
            <p className="text-slate-400 text-base md:text-lg max-w-md">
              Every brand we build follows a rhythm. Designed to create presence.
            </p>
          </div>
        </div>

        {/* SERVICE CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link key={i} to={service.href} className="group block">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative flex flex-col justify-between p-8 px-10 min-h-[400px] rounded-[2rem] 
                           bg-transparent border border-white/10 overflow-hidden transition-all duration-700
                           group-hover:border-[#43c6e4]/40 
                           group-hover:shadow-[inset_0_0_60px_rgba(67,198,228,0.15)]"
              >
                {/* SLIGHTLY INCREASED CORNER GLOW */}
                <div 
                  className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#43c6e4]/15 blur-[60px] rounded-full 
                             pointer-events-none transition-all duration-1000 ease-out
                             group-hover:w-96 group-hover:h-96 group-hover:bg-[#43c6e4]/25 group-hover:blur-[80px]" 
                />

                {/* IMAGE AREA */}
                <div className="relative w-full h-32 mb-6 pointer-events-none">
                  {service.title === "DESIGN" && (
                    <>
                      <img src={DesignImg6} alt="Design" className="absolute -top-4 -right-4 w-40 h-auto group-hover:scale-110 transition-all duration-700" />
                      <img src={DesignImg5} alt="Sphere" className="absolute -bottom-2 -left-2 w-20 h-auto group-hover:-translate-y-2 transition-transform duration-700" />
                    </>
                  )}

                  {service.title === "DEVELOPMENT" && (
                    <img src={DevImg7} alt="Dev" className="absolute top-0 -left-10 w-64 max-w-none h-auto group-hover:scale-105 transition-transform duration-700" />
                  )}

                  {service.title === "MARKETING" && (
                    <img src={MarketImg8} alt="Market" className="absolute -top-10 -left-10 w-64 max-w-none h-auto group-hover:scale-105 transition-transform duration-700" />
                  )}
                </div>

                {/* CONTENT AREA */}
                <div className="relative z-10">
                  <h3 className="text-white/40 text-[10px] font-black tracking-[0.5em] uppercase mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#43c6e4] font-bold text-2xl mb-3 tracking-tight">
                    {service.highlight}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest border-b border-white/20 group-hover:border-[#43c6e4] pb-1 transition-all duration-300">
                      Explore {service.title.toLowerCase()}
                      <svg className="w-4 h-4 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
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