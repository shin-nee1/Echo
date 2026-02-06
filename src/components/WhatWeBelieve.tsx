import React from "react";
import { motion } from "framer-motion";

// Importing the images
import BeliefImg1 from "@/assets/what we beleive 1.png";
import BeliefImg2 from "@/assets/what we beleive 2.png";
import BeliefImg3 from "@/assets/what we beleive 3.png";
import BeliefImg4 from "@/assets/what we beleive 4.png";

const WhatWeBelieve = () => {
  const beliefs = [
    {
      subtitle: "Work should be done with intention, not assumptions",
      description: "Every project deserves clarity, structure, and a team that takes responsibility seriously.",
      image: BeliefImg1,
    },
    {
      subtitle: "Quality is a consistent practice",
      description: "We don't believe in 'one-off' brilliance. We build systems that maintain excellence at every touchpoint.",
      image: BeliefImg2,
    },
    {
      subtitle: "Growth comes from partnership, not transactions",
      description: "We align our success with yours, moving beyond the vendor relationship into true brand stewardship.",
      image: BeliefImg3,
    },
    {
      subtitle: "Support should not end at delivery",
      description: "We stay present long after launch—refining, advising, and helping your brand move forward with confidence.",
      image: BeliefImg4,
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            What We <span className="text-[#00d8ff]">Believe</span>
          </h2>
        </div>

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {beliefs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              /* Added 'rounded-3xl' for slightly rounded corners */
              className="group relative p-8 lg:p-12 bg-white/[0.03] backdrop-blur-sm border border-white/10 flex flex-col items-start transition-all duration-500 hover:bg-white/[0.06] hover:border-[#00d8ff]/30 overflow-hidden min-h-[450px] rounded-3xl"
            >
              
              {/* Top-Left Turquoise Glow */}
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#00d8ff] rounded-full blur-[80px] opacity-15 pointer-events-none" />

              {/* Bottom-Right Turquoise Glow */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#00d8ff] rounded-full blur-[80px] opacity-15 pointer-events-none" />

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-[#00d8ff]/40 transition-all duration-500 rounded-tr-3xl" />

              {/* --- IMAGE SECTION --- */}
              <div className="mb-8 relative w-full flex justify-start">
                <div className="relative">
                  {/* Glowing backdrop for the image */}
                  <div className="absolute inset-0 bg-[#00d8ff]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <img 
                    src={item.image} 
                    alt="Belief Illustration"
                    className="h-36 lg:h-40 w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(0,216,255,0.1)] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* --- TEXT CONTENT --- */}
              <div className="w-full mt-auto">
                <h3 className="text-white font-bold text-xl lg:text-2xl leading-snug uppercase tracking-wide mb-6">
                  {item.subtitle}
                </h3>

                {/* Separator Line */}
                <div className="w-12 h-[1px] bg-white/20 group-hover:w-full group-hover:bg-[#00d8ff]/30 transition-all duration-700 mb-6" />

                {/* Description */}
                <p className="text-white/50 text-sm md:text-base leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500">
                  {item.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;