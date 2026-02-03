import React from "react";
import { motion } from "framer-motion";
import CenterCircleImg from "@/assets/Untitled design (2).png";

const WhoWeAreAbout = () => {
  const pillars = [
    {
      title: "STRATEGISTS WHO UNDERSTAND WHAT YOU'RE TRYING TO BUILD",
      description:
        "We look beyond deliverables and into the bigger picture, making sure every output supports your business model, positioning, and long-term direction.",
      rounded: "rounded-tl-[2rem] rounded-tr-[2rem] rounded-bl-[2rem] md:rounded-br-[10rem]",
    },
    {
      title: "DESIGNERS WHO TREAT IDENTITY AS A SYSTEM",
      description:
        "To us, design is not decoration. It's the architecture of how your brand is understood. Our designers build systems that hold up across content, campaigns, UI, and marketing.",
      rounded: "rounded-tl-[2rem] rounded-tr-[2rem] rounded-br-[2rem] md:rounded-bl-[10rem]",
    },
    {
      title: "MARKETERS WHO OPERATE WITH DISCIPLINE AND DATA",
      description:
        "Marketing is not about noise. It's about structured testing, insight-driven refinement, and creative systems that scale. Every decision ties back to performance and user behavior.",
      rounded: "rounded-bl-[2rem] rounded-br-[2rem] rounded-tl-[2rem] md:rounded-tr-[10rem]",
    },
    {
      title: "ENGINEERS WHO BUILD WITH STABILITY AND PRECISION",
      description:
        "Functionality means nothing without reliability. Our developers focus on performance, usability, scalability, and clean builds that save you time and cost down the road.",
      rounded: "rounded-bl-[2rem] rounded-br-[2rem] rounded-tr-[2rem] md:rounded-tl-[10rem]",
    },
  ];

  return (
    // Removed bg-black here
    <section className="relative py-20 overflow-hidden flex flex-col justify-center min-h-screen">
      <div className="container mx-auto px-6 max-w-[1100px] relative z-20">
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3 lg:gap-4 max-w-6xl mx-auto">
          
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative p-10 md:p-14 lg:p-16 bg-[#0a0f12] border border-white/10 flex flex-col justify-center transition-all duration-500 ${pillar.rounded} group hover:border-[#00d8ff]/40`}
            >
              <div className={`w-full max-w-[340px] ${index % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                <h3 className="text-white font-bold text-lg md:text-xl tracking-widest mb-4 uppercase leading-tight">
                  {pillar.title}
                </h3>
                
                <div className="h-[1px] bg-[#00d8ff] w-1/4 mb-6 group-hover:w-full transition-all duration-700 opacity-70" />
                
                <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* CENTRAL STATIC ORB */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] z-30 pointer-events-none">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Optional: Removed the glow here as well for a "stripped" look, 
                  but left the container for positioning */}
              <img
                src={CenterCircleImg}
                alt="Central Orb"
                className="w-full h-full object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreAbout;