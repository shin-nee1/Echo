import React from "react";
import { motion } from "framer-motion";
import CenterCircleImg from "@/assets/Untitled design (2).png";

const pillars = [
  {
    title: "STRATEGISTS WHO UNDERSTAND WHAT YOU'RE TRYING TO BUILD",
    description: "We look beyond deliverables and into the bigger picture, making sure every output supports your business model, positioning, and long-term direction.",
    cut: "cut-br",
  },
  {
    title: "DESIGNERS WHO TREAT IDENTITY AS A SYSTEM",
    description: "To us, design is not decoration. It's the architecture of how your brand is understood. Our designers build systems that hold up across  content, campaigns, UI, and marketing",
    cut: "cut-bl",
  },
  {
    title: "MARKETERS WHO OPERATE WITH DISCIPLINE AND DATA",
    description: "Marketing is not about noise. It’s about structured testing, insight-driven refinement, and creative systems that scale. Every decision ties back to performance and user behavior.",
    cut: "cut-tr",
  },
  {
    title: "ENGINEERS WHO BUILD WITH STABILITY AND PRECISION",
    description: "Functionality means nothing without reliability. Our developers focus on performance, usability, scalability, and clean builds that save you time and cost down the road",
    cut: "cut-tl",
  },
];

const WhoWeAreAbout = () => {
  return (
    <section className="relative flex flex-col justify-center bg-transparent overflow-hidden mx-auto pt-0 pb-[clamp(4rem,12vh,8rem)]">
      <div className="mx-auto px-6 lg:px-0 relative z-10 w-full max-w-[1750px]">
        
        {/* HEADING SECTION - Font size slightly increased */}
        <div className="text-center relative z-20" style={{ marginBottom: "clamp(40px, 8vh, 100px)" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white font-bold tracking-tight leading-tight 2xl:text-[clamp(4.5rem,7.5vw,6.5rem)]"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 4.8rem)" }}
          >
            Who We <span className="text-[#43c6e4]">Are</span>
          </motion.h2>
        </div>

        {/* GRID CONTAINER */}
        <div className="relative flex justify-center">
          <div 
            className="relative grid grid-cols-1 md:grid-cols-2 auto-rows-fr mx-auto z-10" 
            style={{ 
              gap: "clamp(16px, 2vw, 32px)", 
              maxWidth: "clamp(290px, 92vw, 1300px)" 
            }}
          >
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`concave-card group ${pillar.cut} relative flex flex-col justify-center overflow-hidden h-full 
                            bg-white/[0.02] backdrop-blur-sm border border-white/10 mx-auto md:mx-0`}
                style={{ padding: "clamp(30px, 5vw, 70px)" }}
              >
                <div 
                  className="relative z-10 w-full"
                  style={{ 
                    maxWidth: "clamp(260px, 30vw, 500px)",
                    textAlign: i % 2 !== 0 ? "right" : "left",
                    marginLeft: i % 2 !== 0 ? "auto" : "0",
                    marginRight: i % 2 !== 0 ? "0" : "auto"
                  }}
                >
                  <h3 
                    className="text-white font-bold uppercase font-display leading-tight"
                    style={{ 
                      fontSize: "clamp(17px, 1.4vw, 24px)", // Increased font size
                      letterSpacing: "0.12em", 
                      marginBottom: "15px" 
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <div 
                    className="h-px bg-[#43c6e4] transition-all duration-700 ease-in-out w-[45px] group-hover:w-full shadow-[0_0_10px_#43c6e4]"
                    style={{ 
                      marginBottom: "18px",
                      marginLeft: i % 2 !== 0 ? "auto" : "0",
                      marginRight: i % 2 !== 0 ? "0" : "auto"
                    }} 
                  />

                  <p 
                    className="text-slate-400 leading-relaxed font-light 2xl:text-[1.35rem]"
                    style={{ fontSize: "clamp(15px, 1.05vw, 19px)" }} // Increased font size
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER ORB */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none hidden md:block">
            <div 
              className="relative animate-pulse-slow"
              style={{ 
                width: "clamp(250px, 35vw, 650px)", 
                height: "clamp(250px, 35vw, 650px)" 
              }}
            >
              <div 
                className="absolute inset-0 rounded-full bg-[#43c6e4]/10" 
                style={{ filter: "blur(80px)" }} 
              />
              <img
                src={CenterCircleImg}
                alt="Central Orb"
                className="relative z-10 w-full h-full object-contain"
                style={{ filter: "drop-shadow(0 0 50px rgba(67,198,228,0.2))" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreAbout;