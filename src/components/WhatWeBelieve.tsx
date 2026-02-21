import React from "react";
import { motion } from "framer-motion";

import BeliefImg1 from "@/assets/what we beleive 1.png";
import BeliefImg2 from "@/assets/What we beleive 2.png";
import BeliefImg3 from "@/assets/What we beleive 3.png";
import BeliefImg4 from "@/assets/What we beleive 4.png";

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
      /* Added breakout classes: w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] */
      className="bg-transparent relative overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" 
      style={{ padding: "clamp(60px, 12vh, 120px) 0" }}
    >
      <div className="mx-auto px-20 relative z-10 max-w-[1800px]">
        
        {/* HEADING */}
        <div className="text-center" style={{ marginBottom: "clamp(3rem, 7vh, 5rem)" }}>
          <h2 
            className="text-white font-bold tracking-tight leading-[1.1] 2xl:text-[clamp(3.7rem,5.2vw,4.7rem)]"
            style={{ fontSize: "clamp(2.5rem, 6.2vw, 4rem)" }} 
          >
            What We <span className="text-[#00d8ff]">Believe</span>
          </h2>
        </div>

        {/* GRID CONTAINER */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-12 mx-auto lg:max-w-[1000px] 2xl:max-w-[1300px]"
        >
          {beliefs.map((item, index) => {
            const isTypeA = index === 0 || index === 3; // Card 1 & 4: Top-Left + Bottom-Right
            const isTypeB = index === 1 || index === 2; // Card 2 & 3: Top-Right + Bottom-Left

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 flex flex-col items-start transition-all duration-500 hover:bg-white/[0.06] hover:border-[#00d8ff]/40 overflow-hidden"
                style={{ 
                  padding: "clamp(30px, 4vw, 60px)", 
                  minHeight: "clamp(350px, 25vw, 480px)", 
                  borderRadius: "clamp(20px, 2.2vw, 36px)" 
                }}
              >
                {/* ASYMMETRICAL CORNER GLOWS */}
                {index === 0 && (
                  <>
                    <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-[#00d8ff]/25 blur-[100px] pointer-events-none group-hover:bg-[#00d8ff]/45 transition-all duration-700" />
                    <div className="absolute bottom-[-20%] right-[-20%] w-56 h-56 bg-[#00d8ff]/20 blur-[85px] pointer-events-none group-hover:bg-[#00d8ff]/40 transition-all duration-700" />
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-[#00d8ff]/25 blur-[100px] pointer-events-none group-hover:bg-[#00d8ff]/45 transition-all duration-700" />
                    <div className="absolute bottom-[-20%] left-[-20%] w-56 h-56 bg-[#00d8ff]/20 blur-[85px] pointer-events-none group-hover:bg-[#00d8ff]/40 transition-all duration-700" />
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className="absolute top-[-20%] right-[-20%] w-56 h-56 bg-[#00d8ff]/20 blur-[85px] pointer-events-none group-hover:bg-[#00d8ff]/40 transition-all duration-700" />
                    <div className="absolute bottom-[-20%] left-[-20%] w-64 h-64 bg-[#00d8ff]/25 blur-[100px] pointer-events-none group-hover:bg-[#00d8ff]/45 transition-all duration-700" />
                  </>
                )}
                {index === 3 && (
                  <>
                    <div className="absolute top-[-20%] left-[-20%] w-56 h-56 bg-[#00d8ff]/20 blur-[85px] pointer-events-none group-hover:bg-[#00d8ff]/40 transition-all duration-700" />
                    <div className="absolute bottom-[-20%] right-[-20%] w-64 h-64 bg-[#00d8ff]/25 blur-[100px] pointer-events-none group-hover:bg-[#00d8ff]/45 transition-all duration-700" />
                  </>
                )}
                
                {/* IMAGE SECTION */}
                <div className="relative w-full flex justify-start" style={{ marginBottom: "clamp(25px, 4vw, 45px)" }}>
                  <img 
                    src={item.image} 
                    alt="Belief Illustration"
                    className="w-auto object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                    style={{ 
                      height: "clamp(155px, 15.5vw, 225px)"
                    }}
                  />
                </div>

                {/* TEXT CONTENT */}
                <div className="w-full mt-auto relative z-10">
                  <h3 
                    className="text-white font-bold leading-tight uppercase tracking-wide 2xl:text-[1.75rem] 2xl:mb-4"
                    style={{ 
                      fontSize: "clamp(21px, 1.4vw, 28px)", 
                      marginBottom: "14px" 
                    }}
                  >
                    {item.subtitle}
                  </h3>

                  <div 
                    className="h-[1.5px] bg-[#00d8ff] w-[50px] group-hover:w-full transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(0,216,255,0.6)]" 
                    style={{ marginBottom: "20px" }}
                  />

                  <p 
                    className="text-white leading-relaxed font-normal 2xl:text-[1.3rem]"
                    style={{ fontSize: "clamp(16px, 1vw, 20px)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;
