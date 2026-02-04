import React from "react";
import { motion } from "framer-motion";
import CenterCircleImg from "@/assets/Untitled design (2).png";

const pillars = [
  {
    title: "STRATEGISTS WHO UNDERSTAND WHAT YOU'RE TRYING TO BUILD",
    description:
      "We look beyond deliverables and into the bigger picture, making sure every output supports your business model, positioning, and long-term direction.",
    cut: "cut-br",
  },
  {
    title: "DESIGNERS WHO TREAT IDENTITY AS A SYSTEM",
    description:
      "To us, design is not decoration. It's the architecture of how your brand is understood across content, campaigns, UI, and marketing.",
    cut: "cut-bl",
  },
  {
    title: "MARKETERS WHO OPERATE WITH DISCIPLINE AND DATA",
    description:
      "Marketing is not about noise. It's about structured testing, insight-driven refinement, and creative systems that scale.",
    cut: "cut-tr",
  },
  {
    title: "ENGINEERS WHO BUILD WITH STABILITY AND PRECISION",
    description:
      "Functionality means nothing without reliability. Our developers focus on performance, usability, scalability, and clean builds.",
    cut: "cut-tl",
  },
];

const WhoWeAreAbout = () => {
  return (
    <section className="relative min-h-screen flex items-center py-24">
      <div className="container mx-auto px-6 max-w-[1100px] relative">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">

          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`concave-card ${pillar.cut} p-12 md:p-14 lg:p-16`}
            >
              <div className={`relative z-10 max-w-[340px] ${i % 2 !== 0 ? "md:ml-auto" : ""}`}>
                <h3 className="text-white text-lg md:text-xl font-bold tracking-widest uppercase mb-4">
                  {pillar.title}
                </h3>

                <div className="h-px w-10 bg-cyan mb-6 transition-all duration-700 group-hover:w-full" />

                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* CENTER ORB */}
          <div className="hidden md:block absolute left-1/2 top-[calc(50%+65px)] lg:top-[calc(50%+12px)] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <div className="relative w-[460px] h-[460px] lg:w-[680px] lg:h-[680px]">
              {/* Glow background */}
              <div className="absolute inset-0 rounded-full bg-cyan/20 blur-[120px]" />
              {/* Orb image */}
              <img
                src={CenterCircleImg}
                alt="Central Orb"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreAbout;

