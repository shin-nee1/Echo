import React from "react";
import { motion } from "framer-motion";
import AboutImg from "@/assets/About Us.png"; 

const AboutHero = () => {
  return (
    /* Removed bg-transparent and relative positioning that might create a new background layer */
    <section className="pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
      
      {/* STRIPPED: The "Local Ambient Glow" div was removed. 
          This ensures no extra radial gradients interfere with your App.tsx background.
      */}

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* HEADER */}
        <div className="relative z-20 mb-4 md:mb-6">
           <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight font-display text-center">
             About <span className="text-[#00d8ff]">Us</span>
           </h2>
        </div>

        {/* ILLUSTRATION */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-[60%] md:w-[45%] lg:w-[35%] max-w-xl -mt-2 md:-mt-4 mb-6 lg:mb-10 flex justify-center items-center"
        >
          <div className="relative z-10 w-full flex justify-center">
             <img 
                src={AboutImg} 
                alt="About Echo & Impact" 
                /* Reduced drop-shadow to let it blend better with App.tsx */
                className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(0,216,255,0.05)]"
             />
          </div>

          {/* STRIPPED: The "Ambient Glow Behind Image" div was removed. 
              Now the image sits directly on your App.tsx background.
          */}
        </motion.div>

        {/* TEXT CONTENT */}
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 px-2">
          <p className="text-white/90 text-lg sm:text-xl lg:text-2xl font-light leading-snug md:col-span-2 md:text-center mb-1 lg:mb-2">
            Echo & Impact was created with a simple belief: Great work comes from <span className="text-[#00d8ff] font-normal">clarity and structure.</span>
          </p>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            We noticed a recurring problem: businesses invested in branding, yet lacked a partner who stayed <span className="text-white/80">accountable from first idea to execution.</span>
          </p>
          <p className="text-white/50 text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            We built this to be the opposite. Strategy is intentional, processes are transparent, and every step moves your brand forward with purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;