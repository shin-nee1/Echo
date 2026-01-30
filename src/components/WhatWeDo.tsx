import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "DESIGN",
    highlight: "Shape how the world sees you.",
    description: "We design every visual layer of your brand. From brand and product design to campaign creative and content direction, we create visual systems built for recognition.",
    icon: "🖊️",
    href: "/design"
  },
  {
    title: "DEVELOPMENT",
    highlight: "Build what brings brands to life.",
    description: "Websites and online stores to full-scale mobile and web apps, we develop digital experiences that perform flawlessly, scale easily, and move as fast as your ideas.",
    icon: " </> ",
    href: "/develop"
  },
  {
    title: "MARKETING",
    highlight: "Grow what matters most.",
    description: "We market with a focus on performance. From organic SEO and content to paid media and growth strategy, we deliver measurable results that impact your bottom line.",
    icon: "📢",
    href: "/market"
  }
];

const WhatWeDo = () => {
  return (
    <section className="relative py-32 bg-[#010a0f] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* FIXED HEADER PLACEMENT */}
        <div className="flex flex-col md:flex-row md:items-start lg:items-center gap-6 md:gap-12 mb-20">
          <div className="relative shrink-0">
            <h2 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter leading-none uppercase">
              What We <span className="text-[#00d8ff]">Do</span>
            </h2>
            {/* BRAND ACCENT BAR */}
            <div className="absolute -bottom-6 left-0 w-24 h-1.5 bg-[#00d8ff] rounded-full shadow-[0_0_20px_rgba(0,216,255,0.6)]" />
          </div>
          
          {/* RHYTHM TEXT ALIGNMENT */}
          <p className="text-slate-400 text-lg md:text-xl font-normal max-w-sm leading-snug pt-1 md:pt-2 border-l border-white/10 md:pl-8">
            Every brand we build follows a rhythm. <br className="hidden md:block" />
            Designed to create presence.
          </p>
        </div>

        {/* GLASS CARDS WITH CYAN HOVER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link key={i} to={service.href} className="group block h-full">
              <motion.div 
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative h-full p-10 rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-2xl transition-all duration-500 
                group-hover:border-cyan-500/40 group-hover:bg-cyan-500/[0.04] group-hover:shadow-[0_20px_50px_rgba(0,216,255,0.1)]"
              >
                {/* 3D ICON */}
                <div className="text-6xl mb-10 filter drop-shadow-[0_15px_15px_rgba(0,216,255,0.4)] group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>

                <div className="space-y-5">
                  <h3 className="text-white text-2xl font-black tracking-widest uppercase">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#00d8ff] font-bold text-lg leading-tight">
                    {service.highlight}
                  </p>

                  <p className="text-slate-400 text-base leading-relaxed opacity-85 group-hover:opacity-100 group-hover:text-slate-200 transition-all">
                    {service.description}
                  </p>

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

        {/* FOOTER TAGLINE */}
        <div className="mt-28 text-center space-y-8">
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
              {/* SQUIGGLY UNDERLINE */}
              <svg className="absolute -bottom-3 left-0 w-full h-2" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 12.5 0 25 10 T 50 10 T 75 10 T 100 10" stroke="#00d8ff" strokeWidth="4" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;