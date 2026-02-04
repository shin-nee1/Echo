import React from "react";
import { motion } from "framer-motion";
import DesignPage from "@/assets/Designpage.png";

interface InfoSectionProps {
  title?: string;
  highlight?: string;
  paragraphs?: string[];
}

const InfoSection = ({
  title = "What is",
  highlight = "Design?",
  paragraphs = [
    "At Echo & Impact, design goes far beyond visuals, it's the strategic foundation that defines how your brand communicates, behaves, and is experienced across every interaction.",
    "From brand identity and creative direction to product UI/UX, content design, and campaign aesthetics. Every element is crafted with intention, ensuring your brand looks consistent, feels unified, and communicates with clarity across all touchpoints.",
    "Whether we're shaping a brand from the ground up or elevating an existing one, our focus remains the same: design that creates recognition, builds trust, guides user behavior, and sets the direction for everything that follows."
  ],
}: InfoSectionProps) => {
  return (
    <section className="relative w-full bg-transparent py-12 md:py-24 lg:py-32 overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-24">
          
          {/* TEXT CONTENT */}
          <div className="w-full lg:max-w-[650px]">
            <div className="mb-10">
              <h2 className="text-white text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tight leading-none mb-4 whitespace-nowrap">
                {title} <span className="text-[#43c6e4]">{highlight}</span>
              </h2>
            </div>

            <div className="space-y-8">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE IMAGE - Shifted Up/Right & Floating Animation */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              /* lg:translate-x-12 pushes it further right on desktop */
              className="relative w-full max-w-[500px] -mt-12 lg:-mt-24 lg:translate-x-12"
            >
              <motion.img 
                src={DesignPage} 
                alt={highlight} 
                /* Smooth Up & Down Animation */
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-auto object-contain opacity-95"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;