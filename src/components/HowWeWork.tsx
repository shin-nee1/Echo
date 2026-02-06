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
    <section className="pt-24 pb-24 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* HEADING */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            How <span className="text-white">We</span>{" "}
            <span className="text-[#00d8ff]">Work</span>
          </h2>
          {/* UNDERLINE REMOVED HERE */}
        </div>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`group relative p-8 rounded-[2rem] border border-white/10 
                transition-all duration-500 min-h-[280px] flex flex-col justify-between 
                overflow-hidden ${
                  index === 4 ? "md:col-span-2 md:max-w-[calc(50%-12px)]" : ""
                }`}
            >
              {/* TOP-LEFT DULL GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute top-[-20%] left-[-20%]
                  w-[200px] h-[200px]
                  bg-[radial-gradient(circle,rgba(0,216,255,0.2),transparent_70%)]
                  blur-2xl
                  opacity-40
                  transition-opacity duration-500
                "
              />

              {/* BOTTOM-RIGHT BRIGHT GLOW */}
              <div
                className="
                  pointer-events-none
                  absolute bottom-[-30%] right-[-30%]
                  w-[300px] h-[300px]
                  bg-[radial-gradient(circle,rgba(0,216,255,0.6),transparent_60%)]
                  blur-3xl
                  opacity-60
                  group-hover:opacity-90
                  transition-opacity duration-500
                "
              />

              {/* THE VIBRANT NUMBER */}
              <div className="text-7xl md:text-8xl font-black leading-none bg-gradient-to-b from-[#00d8ff] to-transparent bg-clip-text text-transparent select-none -ml-1">
                {step.number}
              </div>

              {/* CARD CONTENT */}
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-wide uppercase">
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors">
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