import React from "react";
import { motion } from "framer-motion";
import CenterCircleImg from "@/assets/Untitled design (2).png";

const pillars = [
  {
    title: "STRATEGISTS WHO UNDERSTAND WHAT YOU'RE TRYING TO BUILD",
    description:
      "We look beyond deliverables and into the bigger picture, making sure every output supports your business model, positioning, and long-term direction.",
    cut: "cut-br",
    glowPosition: "top-0 left-0",
  },
  {
    title: "DESIGNERS WHO TREAT IDENTITY AS A SYSTEM",
    description:
      "To us, design is not decoration. It's the architecture of how your brand is understood across content, campaigns, UI, and marketing.",
    cut: "cut-bl",
    glowPosition: "top-0 right-0",
  },
  {
    title: "MARKETERS WHO OPERATE WITH DISCIPLINE AND DATA",
    description:
      "Marketing is not about noise. It's about structured testing, insight-driven refinement, and creative systems that scale.",
    cut: "cut-tr",
    glowPosition: "bottom-0 left-0",
  },
  {
    title: "ENGINEERS WHO BUILD WITH STABILITY AND PRECISION",
    description:
      "Functionality means nothing without reliability. Our developers focus on performance, usability, scalability, and clean builds.",
    cut: "cut-tl",
    glowPosition: "bottom-0 right-0",
  },
];

const WhoWeAreAbout = () => {
  return (
    /* CHANGE: Removed min-h-screen. 
       Added max-w-[1440px] and mx-auto to prevent the section from 
       stretching infinitely on tall/wide screens.
    */
    <section className="relative flex flex-col justify-center py-12 md:py-20 lg:py-24 bg-transparent overflow-hidden max-w-[1440px] mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
        
        {/* HEADING SECTION */}
        <div className="text-center mb-8 md:mb-16 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-display leading-tight"
          >
            WHO WE <span className="text-[#43c6e4]">ARE</span>
          </motion.h2>
        </div>

        {/* GRID CONTAINER */}
        <div className="relative">
          {/* CHANGE: Added md:max-w-[900px] lg:max-w-[1100px] and mx-auto 
             to the grid itself to keep the 4 cards pulled in tighter toward the center orb.
          */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-4 md:gap-4 lg:gap-6 md:max-w-[1000px] mx-auto">

            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`concave-card group ${pillar.cut} h-full p-6 md:p-10 lg:p-12 flex flex-col justify-center overflow-hidden`}
              >
                {/* 1. PERMANENT CORNER GLOW */}
                <div 
                  className={`absolute w-[120px] h-[120px] bg-[#43c6e4]/15 blur-[60px] rounded-full pointer-events-none ${pillar.glowPosition}`} 
                />

                {/* Content Container */}
                <div className={`relative z-10 w-full md:max-w-[320px] 
                  ${i % 2 !== 0 ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"}
                `}>
                  <h3 className="text-white text-base sm:text-lg md:text-xl font-bold tracking-widest uppercase mb-3 font-display">
                    {pillar.title}
                  </h3>

                  <div className={`h-px w-10 bg-[#43c6e4] mb-4 transition-all duration-700 ease-in-out group-hover:w-full shadow-[0_0_10px_#43c6e4]
                    ${i % 2 !== 0 ? "md:ml-auto" : "md:mr-auto"}
                  `} />

                  <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

          {/* CENTER ORB */}
          <div className="block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            {/* CHANGE: Slightly reduced the maximum sizes of the orb container 
               to match the tighter grid spread.
            */}
            <div className="relative w-[250px] h-[250px] md:w-[380px] md:h-[380px] lg:w-[500px] lg:h-[500px] xl:w-[680px] xl:h-[680px] animate-pulse-slow">
              <div className="absolute inset-0 rounded-full bg-[#43c6e4]/10 blur-[60px] md:blur-[100px]" />
              <img
                src={CenterCircleImg}
                alt="Central Orb"
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_60px_rgba(67,198,228,0.2)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreAbout;