import React from "react";
import { motion } from "framer-motion";
import AboutImg from "@/assets/About Us.png"; 

const AboutHero = () => {
  return (
    <section 
      className="relative overflow-hidden flex flex-col items-center justify-center"
      style={{ 
        paddingTop: "clamp(4rem, 12vh, 8rem)", 
        paddingBottom: "clamp(3rem, 10vh, 6rem)" 
      }}
    >
      <div className="w-full max-w-[1600px] mx-auto px-[5vw] relative z-10 flex flex-col items-center">
        
        {/* HEADER */}
        <div className="relative z-20" style={{ marginBottom: "clamp(1.5rem, 4vh, 3rem)" }}>
          <h2 
            className="text-white font-bold tracking-tight leading-[1.1] text-center"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)" }}
          >
            About <span className="text-[#00d8ff]">Us</span>
          </h2>
        </div>

        {/* ILLUSTRATION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center items-center"
          style={{ 
            width: "clamp(280px, 50vw, 600px)",
            marginBottom: "clamp(2rem, 6vh, 4.5rem)"
          }}
        >
          <img 
            src={AboutImg} 
            alt="About Echo & Impact" 
            className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(0,216,255,0.1)]"
          />
        </motion.div>

        {/* TEXT CONTENT CONTAINER */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-[clamp(2rem, 5vw, 4rem)] gap-y-[clamp(1rem, 3vh, 2rem)]"
          style={{ maxWidth: "clamp(600px, 70vw, 1100px)" }}
        >
          {/* Main Hook */}
          <p 
            className="text-white/95 font-light leading-[1.3] md:col-span-2 md:text-center"
            style={{ 
              fontSize: "clamp(1.1rem, 2.2vw, 1.75rem)",
              marginBottom: "clamp(0.5rem, 2vh, 1.5rem)"
            }}
          >
            Echo & Impact was created with a simple belief: Great work comes from 
            <span className="text-[#00d8ff] font-normal"> clarity and structure.</span>
          </p>

          {/* Secondary Details */}
          <p 
            className="text-white/50 font-light leading-relaxed"
            style={{ fontSize: "clamp(0.875rem, 1.1vw, 1.125rem)" }}
          >
            We noticed a recurring problem: businesses invested in branding, yet lacked a partner who stayed 
            <span className="text-white/80"> accountable from first idea to execution.</span>
          </p>
          
          <p 
            className="text-white/50 font-light leading-relaxed"
            style={{ fontSize: "clamp(0.875rem, 1.1vw, 1.125rem)" }}
          >
            We built this to be the opposite. Strategy is intentional, processes are transparent, and every step moves your brand forward with purpose.
          </p>
        </div>
      </div>

      {/* Optional Style tag for any specific fine-tuning */}
      <style>{`
        @media (max-width: 768px) {
          .container { padding-left: 1.5rem; padding-right: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default AboutHero;