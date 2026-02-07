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
    <section 
      className="relative w-full bg-transparent overflow-hidden"
      style={{ padding: "clamp(2rem, 8vh, 5rem) 0" }}
    >
      <div className="mx-auto px-[6vw] max-w-[1500px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[clamp(2.5rem, 8vw, 12rem)]">
          
          {/* TEXT CONTENT */}
          <div className="w-full lg:w-[55%]">
            <div style={{ marginBottom: "clamp(1.5rem, 4vh, 2.5rem)" }}>
              <h2 
                className="text-white font-bold tracking-tight leading-[1.1]"
                style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.8rem)" }}
              >
                {title} <span className="text-[#43c6e4]">{highlight}</span>
              </h2>
            </div>

            <div className="flex flex-col" style={{ gap: "clamp(1rem, 1.5vh, 1.5rem)" }}>
              {paragraphs.map((p, i) => (
                <p 
                  key={i} 
                  className="text-slate-400/70 font-light leading-relaxed"
                  style={{ fontSize: "clamp(0.9rem, 1vw, 1.05rem)" }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* IMAGE CONTAINER - Scaled down further for smaller screens */}
          <div 
            className="w-full lg:w-[30%] flex justify-center lg:justify-end"
            /* Increased spacing for mobile stack: 4rem gap on small screens */
            style={{ marginTop: "clamp(4rem, 10vh, 0rem)" }} 
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full"
              /* Floor reduced to 160px for mobile.
                 Ceiling reduced to 340px for desktop.
              */
              style={{ maxWidth: "clamp(160px, 22vw, 340px)" }} 
            >
              <motion.img 
                src={DesignPage} 
                alt={highlight} 
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-auto object-contain opacity-75 drop-shadow-[0_8px_30px_rgba(67,198,228,0.08)]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;