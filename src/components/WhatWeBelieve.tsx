import React from "react";
import { motion } from "framer-motion";

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
      style={{ padding: "clamp(40px, 8vh, 80px) 0" }}
    >
      <div className="mx-auto px-6 relative z-10 max-w-[1600px]">
        
        {/* HEADING */}
        <div className="text-center" style={{ marginBottom: "clamp(2rem, 5vh, 3.5rem)" }}>
          <h2 
            className="text-white font-bold tracking-tight leading-[1.1]  2xl:text-[clamp(2.5rem,4vw,3.5rem)]"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }} 
          >
            What We <span className="text-[#00d8ff]">Believe</span>
          </h2>
        </div>

        {/* GRID CONTAINER */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4 2xl:gap-6 mx-auto lg:max-w-[720px] 2xl:max-w-[900px]"
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
                padding: "clamp(18px, 2.2vw, 36px)", 
                minHeight: "clamp(220px, 16vw, 280px)", 
                borderRadius: "clamp(14px, 1.8vw, 28px)" 
              }}
            >
              
              {/* IMAGE SECTION */}
              <div className="relative w-full flex justify-start" style={{ marginBottom: "clamp(12px, 2.5vw, 28px)" }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-[#00d8ff]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img 
                    src={item.image} 
                    alt="Belief Illustration"
                    className="w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                    style={{ 
                      height: "clamp(95px, 9vw, 130px)", 
                      filter: "drop-shadow(0 8px 20px rgba(0,216,255,0.15))"
                    }}
                  />
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="w-full mt-auto">
                <h3 
                  className="text-white font-bold leading-tight uppercase tracking-wide 2xl:text-[1.3rem] 2xl:mb-3"
                  style={{ 
                    fontSize: "clamp(14px, 0.9vw, 17px)", 
                    marginBottom: "8px" 
                  }}
                >
                  {item.subtitle}
                </h3>

                {/* SEPARATOR LINE - Width moved to className to allow group-hover expansion */}
                <div 
                  className="h-[1px] bg-[#00d8ff]/20 w-[30px] group-hover:w-full group-hover:bg-[#00d8ff]/50 transition-all duration-700 ease-in-out shadow-[0_0_8px_rgba(0,216,255,0.2)]" 
                  style={{ 
                    marginBottom: "10px" 
                  }}
                />

                <p 
                  className="text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500 2xl:text-[1.05rem]"
                  style={{ 
                    fontSize: "clamp(11.5px, 0.7vw, 14px)" 
                  }}
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