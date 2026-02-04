import React from "react";
import { motion } from "framer-motion";
import LAPTOPDEVELOP from "@/assets/LaptopDevelop.png"; // Ensure the filename matches your assets folder

interface InfoSectionTWOProps {
  title?: string;
  highlight?: string;
  paragraphs?: string[];
}

const InfoSectionTWO = ({
  title = "What is",
  highlight = "Develop?",
  paragraphs = [
    "At Echo & Impact, development is where ideas turn into functional, scalable, and high-performing digital products. It's the bridge between design, user experience, and real-world interaction. Built with precision, stability, and long-term growth in mind.",
    "We develop websites, Shopify stores, mobile apps, web applications, and conversion-driven digital platforms. Everything we build is engineered to load fast, scale easily, and integrate seamlessly with your brand's broader ecosystem.",
    "Whether you need a high-performance website, a custom platform, or a full-scale product build, our focus remains the same: development that's reliable, intuitive, and built for results."
  ],
}: InfoSectionTWOProps) => {
  return (
    <section className="relative w-full bg-transparent py-20 lg:py-32 overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <div className="w-full lg:max-w-[640px] text-left">
            <div className="mb-10">
              <h2 className="text-white text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tight leading-tight">
                {title} <span className="text-[#00d8ff]">{highlight}</span>
              </h2>
            </div>

            <div className="space-y-8">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-slate-300/90 text-lg md:text-xl leading-relaxed font-normal">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: REPLACED MOCKUP WITH LAPTOPDEVELOP IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[700px]"
            >
              {/* Perspective Shadow Layer to match reference image depth */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-10 bg-black/40 blur-3xl rounded-[100%] -z-10" />

              <motion.img 
                src={LAPTOPDEVELOP} 
                alt="Development Laptop" 
                /* Subtle float animation to keep it consistent with other sections */
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-auto object-contain select-none pointer-events-none"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSectionTWO;