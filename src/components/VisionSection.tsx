import React from "react";
import { motion } from "framer-motion";
import VisionImg from "@/assets/Our Vision.png"; 

const VisionSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-transparent">
      
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute top-1/2 left-[-20%] md:left-[-10%] -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00d8ff]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* GRID SYSTEM: 
            - lg:items-center: This ensures the image centers vertically with the text on Laptop/Desktop
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Contains Heading + Mobile Image + Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            {/* 1. HEADLINE */}
            <div className="mb-8 lg:mb-10">
               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] font-display">
                 Our <span className="text-[#00d8ff]">Vision</span>
               </h2>
            </div>

            {/* 2. MOBILE IMAGE (Visible ONLY on Mobile/Tablet) 
                - block lg:hidden -> Shows on small screens, hides on laptop+
            */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-full flex justify-center mb-10 block lg:hidden"
            >
              <img 
                src={VisionImg} 
                alt="Our Vision" 
                className="relative z-10 w-[85%] sm:w-[70%] md:w-[60%] h-auto object-contain"
              />
            </motion.div>
            
            {/* 3. TEXT CONTENT */}
            <div className="relative"> 
              <div className="space-y-4 md:space-y-6 text-white/50 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-xl">
                <p>
                  To create a place where businesses can finally work with a partner they trust. One that <span className="text-white/80 font-normal">communicates clearly</span>, documents properly, and shows up consistently from start to scale.
                </p>
                
                <div className="pl-4 md:pl-6 border-l border-[#00d8ff]/30 space-y-3 md:space-y-4">
                  <p>
                    A partner that believes process is not bureaucracy; it is the <span className="text-white/80 font-normal">foundation of good work</span>. And execution is not just delivery; it is craft and responsibility.
                  </p>
                </div>

                <p className="text-white/90 pt-2 text-base md:text-lg lg:text-xl">
                  Our vision is to build brands and digital systems that are <span className="text-[#00d8ff] font-medium italic">stable, scalable, and strategically sound.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: DESKTOP IMAGE (Visible ONLY on Laptop/Desktop) 
              - hidden lg:flex -> Hides on mobile, shows flex on laptop+
              - items-center -> Ensures the image stays vertically centered
          */}
          <div className="relative hidden lg:flex justify-center items-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full flex items-center justify-center z-10"
            >
              <img 
                src={VisionImg} 
                alt="Our Vision" 
                className="relative z-10 w-full h-auto object-contain max-w-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;