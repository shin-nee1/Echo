import React from "react";
import { motion } from "framer-motion";
import VisionImg from "@/assets/Our Vision.png"; 

const VisionSection = () => {
  return (
    <section className="relative overflow-hidden bg-transparent py-0">
      <div className="mx-auto px-6 lg:px-12 max-w-[1750px] relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-8 xl:gap-10 2xl:gap-12">
          
          {/* LEFT COLUMN: TEXT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:flex-[1.1] w-full flex flex-col items-center lg:items-end text-center lg:text-left"
          >
            <div className="w-full lg:max-w-[440px] xl:max-w-[500px] 2xl:max-w-[620px]">
              <div className="mb-4 lg:mb-6">
                 {/* HEADING SIZE INCREASED 
                     - lg: floor bumped to 1.8rem
                     - xl: bumped to 3rem
                     - 2xl: bumped to 4.5rem
                 */}
                 <h2 className="text-white font-bold tracking-tight leading-[1.1] 
                                text-[clamp(2rem,8vw,2.5rem)] 
                                md:text-[clamp(2.5rem,6vw,3rem)] 
                                lg:text-[clamp(1.8rem,3vw,2.4rem)] 
                                xl:text-[3rem] 2xl:text-[4.5rem]">
                    Our <span className="text-[#00d8ff]">Vision</span>
                 </h2>
              </div>

              {/* MOBILE IMAGE */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex justify-center mb-8 lg:hidden w-full max-w-[260px] mx-auto"
              >
                <img 
                  src={VisionImg} 
                  alt="Our Vision" 
                  className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(0,216,255,0.05)]"
                />
              </motion.div>
              
              <div className="flex flex-col space-y-4 md:space-y-5"> 
                <div className="text-white/50 font-light leading-relaxed 
                                text-[0.85rem] md:text-[0.9rem] 
                                lg:text-[clamp(0.7rem,0.85vw,0.76rem)] 
                                xl:text-[0.88rem] 2xl:text-[1.1rem]">
                  <p className="mb-4 lg:mb-6 text-inherit">
                    To create a place where businesses can finally work with a partner they trust. One that <span className="text-white/80 font-normal">communicates clearly</span>, documents properly, and shows up consistently from start to scale.
                  </p>
                  
                  <div className="pl-4 md:pl-6 border-l border-[#00d8ff]/30 space-y-3 lg:space-y-4">
                    <p className="text-inherit">
                      A partner that believes process is not bureaucracy; it is the <span className="text-white/80 font-normal">foundation of good work</span>. And execution is not just delivery; it is craft and responsibility.
                    </p>
                  </div>

                  <p className="text-white/90 pt-3 lg:pt-4 
                                text-[0.95rem] md:text-[1rem] 
                                lg:text-[clamp(0.85rem,1vw,0.92rem)] 
                                xl:text-[1.05rem] 2xl:text-[1.4rem]">
                    Our vision is to build brands and digital systems that are <span className="text-[#00d8ff] font-medium italic">stable, scalable, and strategically sound.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: IMAGE */}
          <div className="lg:flex-[0.9] w-full hidden lg:flex justify-start items-center py-10 lg:py-20">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[500px] xl:max-w-[560px] 2xl:max-w-[650px]"
            >
              <img 
                src={VisionImg} 
                alt="Our Vision" 
                className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(0,216,255,0.12)]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionSection;