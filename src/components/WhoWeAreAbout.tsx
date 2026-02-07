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
    description: "To us, design is not decoration. It's the architecture of how your brand is understood across content, campaigns, UI, and marketing.",
    cut: "cut-bl",
  },
  {
    title: "MARKETERS WHO OPERATE WITH DISCIPLINE AND DATA",
    description: "Marketing is not about noise. It's about structured testing, insight-driven refinement, and creative systems that scale.",
    cut: "cut-tr",
  },
  {
    title: "ENGINEERS WHO BUILD WITH STABILITY AND PRECISION",
    description: "Functionality means nothing without reliability. Our developers focus on performance, usability, scalability, and clean builds.",
    cut: "cut-tl",
  },
];

const WhoWeAreAbout = () => {
  return (
    <section 
      className="relative flex flex-col justify-center bg-transparent overflow-hidden mx-auto" 
      style={{ 
        padding: "clamp(40px, 6vw, 100px) 0", 
        maxWidth: "clamp(320px, 90vw, 1400px)" 
      }}
    >
      <div className="mx-auto relative z-10 w-full" style={{ padding: "0 5vw" }}>
        
        {/* HEADING SECTION */}
        <div className="text-center relative z-20" style={{ marginBottom: "clamp(30px, 5vw, 60px)" }}>
          <motion.h2 
            initial={{ opacity: 0, y: "2vw" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white font-bold tracking-tight leading-tight uppercase"
            style={{ fontSize: "clamp(28px, 4.5vw, 56px)" }}
          >
            WHO WE <span className="text-[#43c6e4]">ARE</span>
          </motion.h2>
        </div>

        {/* GRID CONTAINER */}
        <div className="relative">
          <div 
            className="relative grid grid-cols-1 md:grid-cols-2 auto-rows-fr mx-auto" 
            style={{ 
              gap: "clamp(12px, 1.5vw, 24px)", 
              maxWidth: "clamp(300px, 75vw, 1100px)" 
            }}
          >

            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: "2vw" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`concave-card group ${pillar.cut} relative flex flex-col justify-center overflow-hidden h-full`}
                style={{ padding: "clamp(20px, 4vw, 50px)" }}
              >
                {/* Content Container */}
                <div 
                  className="relative z-10 w-full"
                  style={{ 
                    maxWidth: "clamp(200px, 22vw, 320px)",
                    textAlign: i % 2 !== 0 ? "right" : "left",
                    marginLeft: i % 2 !== 0 ? "auto" : "0",
                    marginRight: i % 2 !== 0 ? "0" : "auto"
                  }}
                >
                  <h3 
                    className="text-white font-bold uppercase font-display"
                    style={{ 
                      fontSize: "clamp(14px, 1.1vw, 20px)", 
                      letterSpacing: "0.15em", 
                      marginBottom: "clamp(8px, 1vw, 16px)" 
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <div 
                    className={`h-px bg-[#43c6e4] transition-all duration-700 ease-in-out group-hover:w-full shadow-[0_0_0.8vw_#43c6e4]`}
                    style={{ 
                      width: "clamp(20px, 3vw, 50px)", 
                      marginBottom: "clamp(10px, 1.5vw, 20px)",
                      marginLeft: i % 2 !== 0 ? "auto" : "0",
                      marginRight: i % 2 !== 0 ? "0" : "auto"
                    }} 
                  />

                  <p 
                    className="text-slate-300 leading-relaxed font-light"
                    style={{ fontSize: "clamp(12px, 0.85vw, 15px)" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

          {/* CENTER ORB - Constrained so it doesn't get too massive */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <div 
              className="relative animate-pulse-slow"
              style={{ 
                width: "clamp(250px, 45vw, 600px)", 
                height: "clamp(250px, 45vw, 600px)" 
              }}
            >
              <div 
                className="absolute inset-0 rounded-full bg-[#43c6e4]/10" 
                style={{ filter: "blur(clamp(30px, 6vw, 80px))" }}
              />
              <img
                src={CenterCircleImg}
                alt="Central Orb"
                className="relative z-10 w-full h-full object-contain"
                style={{ filter: "drop-shadow(0 0 clamp(20px, 4vw, 60px) rgba(67,198,228,0.2))" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreAbout;