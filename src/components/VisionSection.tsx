import React from "react";
import { motion } from "framer-motion";
import VisionImg from "@/assets/Our Vision.png"; 

const VisionSection = () => {
  return (
    <section 
      className="relative overflow-hidden bg-transparent"
      style={{ 
        paddingTop: "clamp(3rem, 10vh, 6rem)", 
        paddingBottom: "clamp(3rem, 10vh, 6rem)" 
      }}
    >
      {/* BACKGROUND ATMOSPHERE - Adjusted to fluid sizing */}
      <div 
        className="absolute top-1/2 left-[-10%] -translate-y-1/2 bg-[#00d8ff]/5 blur-[clamp(60px,10vw,120px)] rounded-full pointer-events-none" 
        style={{ 
          width: "clamp(250px, 40vw, 600px)", 
          height: "clamp(250px, 40vw, 600px)" 
        }}
      />

      <div className="mx-auto px-[5vw] max-w-[1600px] relative z-10">
        
        {/* GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem, 6vw, 6rem)] items-center">
          
          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {/* HEADLINE */}
            <div style={{ marginBottom: "clamp(1.5rem, 4vh, 2.5rem)" }}>
               <h2 
                 className="text-white font-bold tracking-tight leading-[1.1]"
                 style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
               >
                 Our <span className="text-[#00d8ff]">Vision</span>
               </h2>
            </div>

            {/* MOBILE IMAGE (Visible ONLY on Mobile/Tablet) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full flex justify-center mb-10 lg:hidden"
            >
              <img 
                src={VisionImg} 
                alt="Our Vision" 
                style={{ width: "clamp(240px, 60vw, 450px)" }}
                className="relative z-10 h-auto object-contain drop-shadow-[0_0_20px_rgba(0,216,255,0.05)]"
              />
            </motion.div>
            
            {/* TEXT CONTENT */}
            <div className="space-y-[clamp(1rem, 2vh, 1.5rem)]"> 
              <div 
                className="text-white/50 font-light leading-relaxed"
                style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.125rem)", maxWidth: "580px" }}
              >
                <p className="mb-6">
                  To create a place where businesses can finally work with a partner they trust. One that <span className="text-white/80 font-normal">communicates clearly</span>, documents properly, and shows up consistently from start to scale.
                </p>
                
                <div 
                  className="pl-[clamp(1rem, 2vw, 1.5rem)] border-l border-[#00d8ff]/30 space-y-4"
                >
                  <p>
                    A partner that believes process is not bureaucracy; it is the <span className="text-white/80 font-normal">foundation of good work</span>. And execution is not just delivery; it is craft and responsibility.
                  </p>
                </div>

                <p 
                  className="text-white/90 pt-4"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 1.25rem)" }}
                >
                  Our vision is to build brands and digital systems that are <span className="text-[#00d8ff] font-medium italic">stable, scalable, and strategically sound.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: DESKTOP IMAGE */}
          <div className="relative hidden lg:flex justify-center items-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full flex items-center justify-center z-10"
            >
              <img 
                src={VisionImg} 
                alt="Our Vision" 
                style={{ width: "clamp(350px, 38vw, 650px)" }}
                className="relative z-10 h-auto object-contain drop-shadow-[0_0_30px_rgba(0,216,255,0.1)]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;