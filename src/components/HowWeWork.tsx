import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "ONE TEAM FOR THE ENTIRE JOURNEY",
    description:
      "Designers, developers, and marketers work together from day one. No handoffs to disconnected groups. No fragmented understanding of your brand."
  },
  {
    number: "02",
    title: "CLARITY BEFORE EXECUTION",
    description:
      "We begin with alignment, structure, and understanding. We define goals, constraints, needs, and outcomes before we design a screen or write code."
  },
  {
    number: "03",
    title: "PROCESS THAT REDUCES STRESS",
    description:
      "Clients often come to us after experiencing disorganized workflows elsewhere. We solve that through documented scopes and clear milestones."
  },
  {
    number: "04",
    title: "LONG TERM THINKING",
    description:
      "We don't design or build for the moment. We plan for how your brand will grow, scale, communicate, and compete years from now."
  },
  {
    number: "05",
    title: "TRANSPARENCY AT EVERY STAGE",
    description:
      "You always know what is happening, why it is happening, and what decisions were made. There are no gray areas or disappearing teams."
  }
];

const HowWeWork = () => {
  return (
    <section 
      className="relative overflow-hidden"
      style={{ padding: "clamp(2rem, 6vh, 4rem) 0" }} // Reduced section padding
    >
      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: "1400px" }}>
        {/* HEADING */}
        <div className="text-center" style={{ marginBottom: "clamp(2rem, 5vh, 4rem)" }}>
          <h2 
            className="text-white font-bold tracking-tight leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }} // Scaled down title
          >
            How <span className="text-white">We</span>{" "}
            <span className="text-[#00d8ff]">Work</span>
          </h2>
        </div>

        {/* GRID LAYOUT - Maintained your exact original logic */}
        <div 
          className="grid md:grid-cols-2 gap-4 lg:gap-6 mx-auto"
          style={{ maxWidth: "880px" }} // Reduced container width to shrink individual cards
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              /* YOUR ORIGINAL GRID LOGIC PRESERVED EXACTLY */
              className={`group relative rounded-[1.5rem] border border-white/10 
                transition-all duration-500 flex flex-col justify-between 
                overflow-hidden ${
                  index === 4 ? "md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto" : ""
                }`}
              style={{ 
                padding: "clamp(1.25rem, 2vw, 1.75rem)", // Smaller internal padding
                minHeight: "clamp(180px, 25vh, 240px)" // Shorter card height
              }}
            >
              {/* GLOWS */}
              <div className="pointer-events-none absolute top-[-20%] left-[-20%] w-[140px] h-[140px] bg-[radial-gradient(circle,rgba(0,216,255,0.1),transparent_70%)] blur-2xl opacity-40" />
              <div className="pointer-events-none absolute bottom-[-30%] right-[-30%] w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(0,216,255,0.4),transparent_60%)] blur-3xl opacity-50" />

              {/* NUMBER - Scaled down */}
              <div 
                className="font-black leading-none bg-gradient-to-b from-[#00d8ff] to-transparent bg-clip-text text-transparent select-none"
                style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)", marginLeft: "-0.05em" }}
              >
                {step.number}
              </div>

              {/* CONTENT - Scaled down */}
              <div className="relative z-10">
                <h3 
                  className="font-bold text-white mb-2 tracking-wide uppercase"
                  style={{ fontSize: "clamp(0.85rem, 1.1vw, 1.05rem)" }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-white/50 text-xs md:text-sm leading-relaxed group-hover:text-white/80 transition-colors"
                  style={{ fontSize: "clamp(0.75rem, 0.9vw, 0.9rem)" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;