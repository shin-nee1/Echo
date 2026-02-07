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
    <section 
      className="bg-transparent relative overflow-hidden" 
      style={{ padding: "clamp(30px, 4vw, 70px) 0" }}
    >
      <div 
        className="mx-auto relative z-10" 
        style={{ 
          padding: "0 5vw", 
          maxWidth: "clamp(300px, 72vw, 1050px)" 
        }}
      >
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: "clamp(25px, 3.5vw, 45px)" }}>
          <h2 
            className="font-bold text-white tracking-tight leading-tight uppercase"
            style={{ fontSize: "clamp(24px, 3vw, 44px)" }} 
          >
            What We <span className="text-[#00d8ff]">Believe</span>
          </h2>
        </div>

        {/* GRID CONTAINER */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2" 
          style={{ gap: "clamp(14px, 1.5vw, 24px)" }}
        >
          {beliefs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 flex flex-col items-start transition-all duration-500 hover:bg-white/[0.06] hover:border-[#00d8ff]/30 overflow-hidden"
              style={{ 
                padding: "clamp(20px, 2.5vw, 36px)", 
                minHeight: "clamp(280px, 22vw, 360px)", 
                borderRadius: "clamp(12px, 1.8vw, 26px)" 
              }}
            >
              
              {/* IMAGE SECTION - INCREASED SIZE */}
              <div className="relative w-full flex justify-start" style={{ marginBottom: "clamp(18px, 2.5vw, 32px)" }}>
                <div className="relative">
                   {/* Subtle glow for image prominence */}
                  <div 
                    className="absolute inset-0 bg-[#00d8ff]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                  />
                  <img 
                    src={item.image} 
                    alt="Belief Illustration"
                    className="w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                    style={{ 
                      // INCREASED: from 6vw/90px to 9vw/130px
                      height: "clamp(75px, 9vw, 130px)", 
                      filter: "drop-shadow(0 0.5vw 1vw rgba(0,216,255,0.15))"
                    }}
                  />
                </div>
              </div>

              {/* TEXT CONTENT - STILL COMPACT */}
              <div className="w-full mt-auto">
                <h3 
                  className="text-white font-bold leading-tight uppercase tracking-wide"
                  style={{ 
                    fontSize: "clamp(16px, 1.15vw, 22px)", 
                    marginBottom: "clamp(8px, 1vw, 14px)" 
                  }}
                >
                  {item.subtitle}
                </h3>

                {/* Separator Line */}
                <div 
                  className="h-[1px] bg-white/20 group-hover:w-full group-hover:bg-[#00d8ff]/30 transition-all duration-700" 
                  style={{ 
                    width: "clamp(20px, 2.5vw, 50px)", 
                    marginBottom: "clamp(8px, 1vw, 14px)" 
                  }}
                />

                <p 
                  className="text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500"
                  style={{ fontSize: "clamp(12px, 0.8vw, 15px)" }}
                >
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