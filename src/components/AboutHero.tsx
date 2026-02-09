import React from "react";
import { motion } from "framer-motion";
import AboutImg from "@/assets/About Us.png"; 

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center py-[5vh] md:py-[8vh] lg:py-[10vh] 2xl:py-[12vh]">
      <div className="w-full max-w-[1600px] mx-auto px-[6vw] relative z-10 flex flex-col items-center">
        
        {/* HEADER */}
        <div className="relative z-20 mb-4 md:mb-6 lg:mb-8 2xl:mb-10">
          <h2 className={`
            text-white font-bold tracking-tight leading-[1.1] text-center
            text-[clamp(1.75rem,8vw,2.25rem)] 
            md:text-[clamp(2.25rem,6vw,2.75rem)] 
            lg:text-[clamp(2.8rem,4vw,3.2rem)] 
            2xl:text-[clamp(3.5rem,6vw,5rem)]
          `}>
            About <span className="text-[#00d8ff]">Us</span>
          </h2>
        </div>

        {/* ILLUSTRATION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={`
            relative flex justify-center items-center mb-6 md:mb-8 lg:mb-10 2xl:mb-12
            /* Increased Mobile Width from 180px to 230px */
            w-[230px] 
            md:w-[240px] 
            lg:w-[260px] 
            2xl:w-[480px]
          `}
        >
          <img 
            src={AboutImg} 
            alt="About Echo & Impact" 
            className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(0,216,255,0.08)]"
          />
        </motion.div>

        {/* TEXT CONTENT CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 max-w-2xl lg:max-w-3xl 2xl:max-w-5xl">
          {/* Main Hook */}
          <p className={`
            text-white/95 font-light leading-[1.4] md:col-span-2 md:text-center mb-1
            /* Decreased Mobile text from 1rem to 0.95rem */
            text-[0.95rem] md:text-[1.1rem] lg:text-[1.2rem] 2xl:text-[1.6rem]
          `}>
            Echo & Impact was created with a simple belief: Great work comes from 
            <span className="text-[#00d8ff] font-normal"> clarity and structure.</span>
          </p>

          {/* Secondary Details */}
          <p className={`
            text-white/50 font-light leading-relaxed 
            /* Decreased Mobile text from 0.85rem to 0.8rem */
            text-[0.8rem] md:text-[0.9rem] lg:text-[0.95rem] 2xl:text-[1.15rem]
          `}>
            We noticed a recurring problem: businesses invested in branding, yet lacked a partner who stayed 
            <span className="text-white/80"> accountable from first idea to execution.</span>
          </p>
          
          <p className={`
            text-white/50 font-light leading-relaxed 
            /* Decreased Mobile text from 0.85rem to 0.8rem */
            text-[0.8rem] md:text-[0.9rem] lg:text-[0.95rem] 2xl:text-[1.15rem]
          `}>
            We built this to be the opposite. Strategy is intentional, processes are transparent, and every step moves your brand forward with purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;