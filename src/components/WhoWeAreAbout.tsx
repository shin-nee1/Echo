import React from "react";
import { motion } from "framer-motion";
import CenterCircleImg from "@/assets/Untitled design (2).png";

const pillars = [
  {
    title: "STRATEGISTS WHO UNDERSTAND WHAT YOU'RE TRYING TO BUILD",
    description: "We look beyond deliverables and into the bigger picture, making sure every output supports your business model and long-term direction.",
    cut: "cut-br",
  },
  {
    title: "DESIGNERS WHO TREAT IDENTITY AS A SYSTEM",
    description: "To us, design is not decoration. It's the architecture of how your brand is understood across content, campaigns, and UI.",
    cut: "cut-bl",
  },
  {
    title: "MARKETERS WHO OPERATE WITH DISCIPLINE AND DATA",
    description: "Marketing is not about noise. It's about structured testing, insight-driven refinement, and creative systems that scale.",
    cut: "cut-tr",
  },
  {
    title: "ENGINEERS WHO BUILD WITH STABILITY AND PRECISION",
    description: "Functionality means nothing without reliability. Our developers focus on performance, usability, and clean builds.",
    cut: "cut-tl",
  },
];

const WhoWeAreAbout = () => {
  return (
    <section className="relative flex flex-col justify-center bg-transparent overflow-hidden mx-auto pt-0 pb-[clamp(3rem,8vh,6rem)]">
      <div className="mx-auto px-6 lg:px-0 relative z-10 w-full max-w-[1750px]">
        
        {/* HEADING SECTION */}
        <div className="text-center relative z-20" style={{ marginBottom: "clamp(30px, 6vh, 80px)" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white font-bold tracking-tight leading-tight uppercase 2xl:text-[clamp(3.5rem,6vw,5rem)]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            WHO WE <span className="text-[#43c6e4]">ARE</span>
          </motion.h2>
        </div>

        {/* GRID CONTAINER */}
        <div className="relative flex justify-center">
          <div 
            className="relative grid grid-cols-1 md:grid-cols-2 auto-rows-fr mx-auto z-10" 
            style={{ 
              gap: "clamp(12px, 1.5vw, 24px)", 
              maxWidth: "clamp(290px, 85vw, 900px)" 
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
                style={{ padding: "clamp(20px, 3.5vw, 45px)" }}
              >
                <div 
                  className="relative z-10 w-full"
                  style={{ 
                    maxWidth: "clamp(220px, 20vw, 350px)",
                    textAlign: i % 2 !== 0 ? "right" : "left",
                    marginLeft: i % 2 !== 0 ? "auto" : "0",
                    marginRight: i % 2 !== 0 ? "0" : "auto"
                  }}
                >
                  <h3 
                    className="text-white font-bold uppercase font-display leading-tight"
                    style={{ 
                      fontSize: "clamp(13px, 1vw, 18px)", 
                      letterSpacing: "0.1em", 
                      marginBottom: "10px" 
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <div 
                    className="h-px bg-[#43c6e4] transition-all duration-700 ease-in-out w-[35px] group-hover:w-full shadow-[0_0_10px_#43c6e4]"
                    style={{ 
                      marginBottom: "12px",
                      marginLeft: i % 2 !== 0 ? "auto" : "0",
                      marginRight: i % 2 !== 0 ? "0" : "auto"
                    }} 
                  />

                  <p 
                    className="text-slate-400 leading-relaxed font-light 2xl:text-[1.1rem]"
                    style={{ fontSize: "clamp(11.5px, 0.8vw, 14px)" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER ORB - Reduced Size */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none hidden md:block">
            <div 
              className="relative animate-pulse-slow"
              style={{ 
                /* Reduced from 28vw/460px to 24vw/380px */
                width: "clamp(180px, 24vw, 420px)", 
                height: "clamp(180px, 24vw, 420px)" 
              }}
            >
              <div 
                className="absolute inset-0 rounded-full bg-[#43c6e4]/5" 
                style={{ filter: "blur(50px)" }} 
              />
              <img
                src={CenterCircleImg}
                alt="Central Orb"
                className="relative z-10 w-full h-full object-contain"
                style={{ filter: "drop-shadow(0 0 30px rgba(67,198,228,0.15))" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreAbout;