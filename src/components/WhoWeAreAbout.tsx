import React from "react";
import { motion } from "framer-motion";
import CenterCircleImg from "@/assets/Untitled design (2).png";

const WhoWeAreAbout = () => {
  const pillars = [
    {
      title: "STRATEGISTS WHO UNDERSTAND WHAT YOU'RE TRYING TO BUILD",
      description:
        "We look beyond deliverables and into the bigger picture, making sure every output supports your business model, positioning, and long-term direction.",
      rounded: "rounded-[2rem] md:rounded-br-[8rem]",
      textAlign: "text-left",
      justifyContent: "justify-start",
      alignItems: "items-start",
    },
    {
      title: "DESIGNERS WHO TREAT IDENTITY AS A SYSTEM",
      description:
        "To us, design is not decoration. It's the architecture of how your brand is understood. Our designers build systems that hold up across content, campaigns, UI, and marketing.",
      rounded: "rounded-[2rem] md:rounded-bl-[8rem]",
      textAlign: "text-left md:text-right",
      justifyContent: "justify-start md:justify-end",
      alignItems: "items-start md:items-end",
    },
    {
      title: "MARKETERS WHO OPERATE WITH DISCIPLINE AND DATA",
      description:
        "Marketing is not about noise. It's about structured testing, insight-driven refinement, and creative systems that scale. Every decision ties back to performance and user behavior.",
      rounded: "rounded-[2rem] md:rounded-tr-[8rem]",
      textAlign: "text-left",
      justifyContent: "justify-start",
      alignItems: "items-start",
    },
    {
      title: "ENGINEERS WHO BUILD WITH STABILITY AND PRECISION",
      description:
        "Functionality means nothing without reliability. Our developers focus on performance, usability, scalability, and clean builds that save you time and cost down the road.",
      rounded: "rounded-[2rem] md:rounded-tl-[8rem]",
      textAlign: "text-left md:text-right",
      justifyContent: "justify-start md:justify-end",
      alignItems: "items-start md:items-end",
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden flex flex-col justify-center min-h-screen">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-20">
        {/* HEADING */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter md:tracking-tight leading-[0.9] md:leading-tight">
            Who We <span className="text-[#00d8ff]">Are</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#00d8ff] mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(0,216,255,0.6)]" />
        </div>

        {/* GRID WITH CENTRAL IMAGE */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 lg:gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 md:p-12 lg:p-14 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md flex flex-col ${pillar.justifyContent} ${pillar.alignItems} group min-h-[auto] md:min-h-[340px] ${pillar.rounded} hover:border-[#00d8ff]/30 transition-all duration-500`}
            >
              <div className={`w-full md:max-w-[320px] ${pillar.textAlign}`}>
                <h3 className="text-white font-bold text-lg md:text-xl tracking-wider mb-4 md:mb-5 uppercase leading-tight">
                  {pillar.title}
                </h3>
                <div
                  className={`h-[2px] bg-[#00d8ff]/60 mb-6 w-12 group-hover:w-full transition-all duration-700 ${
                    pillar.textAlign.includes("text-right") ? "md:ml-auto" : ""
                  }`}
                />
                <p className="text-white/40 text-sm md:text-base leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* CENTRAL IMAGE */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 z-10 pointer-events-none">
            <img
              src={CenterCircleImg}
              alt="Central"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreAbout;
