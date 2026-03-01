import React from "react";
import { motion } from "framer-motion";
import VisionImg from "@/assets/Our Vision.png"; 

const VisionSection = () => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-transparent py-12 md:py-20">
      <div className="mx-auto px-6 lg:px-12 max-w-[1800px] relative z-10">
        
        {/* UPDATED: Minimized gap to lg:gap-0 and xl:gap-4 to bring columns together */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 xl:gap-4">
          
          {/* LEFT COLUMN: TEXT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:flex-[1] w-full flex flex-col items-center lg:items-end text-center lg:text-left"
          >
            {/* UPDATED: Slightly increased max-width to let text sit closer to the center line */}
            <div className="w-full lg:max-w-[520px] xl:max-w-[600px] 2xl:max-w-[700px]">
              <div className="mb-6 lg:mb-8">
                  <h2 className="text-white font-bold tracking-tight leading-[1.1] 
                           text-[clamp(2rem,8vw,2.5rem)] 
                           md:text-[clamp(2.5rem,6vw,3rem)] 
                           lg:text-[clamp(1.8rem,3vw,2.4rem)] 
                           xl:text-[2.8rem] 2xl:text-[3.2rem]">
                    Our <span className="text-[#47C2D2]">Vision</span>
                  </h2>
              </div>

              {/* MOBILE IMAGE */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex justify-center mb-8 lg:hidden w-full max-w-[280px] mx-auto"
              >
                <img 
                  src={VisionImg} 
                  alt="Our Vision" 
                  className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(71,194,210,0.05)]"
                />
              </motion.div>
              
              <div className="flex flex-col"> 
                <p className="text-white/60 font-light leading-relaxed whitespace-pre-line
                              text-[0.95rem] md:text-[1rem] 
                              lg:text-[1rem] 
                              xl:text-[1.15rem] 2xl:text-[1.35rem]">
{`To create a place where businesses can finally work with a partner they trust. One that communicates clearly, documents properly, sets real expectations, and shows up consistently from start to scale.

A partner that believes process is not bureaucracy; it is the foundation of good work. And execution is not just delivery; it is craft, responsibility, and pride.

Our vision is to build brands and digital systems that are stable, scalable, and strategically sound so your business can keep making the impact while we build the echo that carries it forward.`}
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: IMAGE */}
          <div className="lg:flex-[1] w-full hidden lg:flex justify-center lg:justify-start items-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[600px] xl:max-w-[750px] 2xl:max-w-[850px]"
            >
              <img 
                src={VisionImg} 
                alt="Our Vision" 
                className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(71,194,210,0.15)]"
              />
              <div className="absolute inset-0 bg-[#47C2D2]/5 blur-[100px] rounded-full -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;