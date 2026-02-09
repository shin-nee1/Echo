import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "ONE TEAM FOR THE ENTIRE JOURNEY",
    description: "Designers, developers, and marketers work together from day one. No handoffs to disconnected groups. No fragmented understanding of your brand."
  },
  {
    number: "02",
    title: "CLARITY BEFORE EXECUTION",
    description: "We begin with alignment, structure, and understanding. We define goals, constraints, needs, and outcomes before we design a screen or write code."
  },
  {
    number: "03",
    title: "PROCESS THAT REDUCES STRESS",
    description: "Clients often come to us after experiencing disorganized workflows elsewhere. We solve that through documented scopes and clear milestones."
  },
  {
    number: "04",
    title: "LONG TERM THINKING",
    description: "We don't design or build for the moment. We plan for how your brand will grow, scale, communicate, and compete years from now."
  },
  {
    number: "05",
    title: "TRANSPARENCY AT EVERY STAGE",
    description: "You always know what is happening, why it is happening, and what decisions were made. There are no gray areas or disappearing teams."
  }
];

const HowWeWork = () => {
  return (
    <section 
      className="relative overflow-hidden"
      /* Increased top padding for the whole section */
      style={{ padding: "clamp(3rem, 6vh, 4.5rem) 0 clamp(4rem, 8vh, 6rem) 0" }} 
    >
      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: "1400px" }}>
        
        {/* HEADING SECTION - Increased marginBottom to give cards room */}
        <div 
          className="text-center" 
          style={{ marginBottom: "clamp(2.5rem, 6vh, 4.5rem)" }}
        >
          <h2 
            className="text-white font-bold tracking-tight leading-[1.1] uppercase 2xl:text-[clamp(3rem,4.5vw,4.2rem)]"
            style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)" }} 
          >
            How <span className="text-white">We</span>{" "}
            <span className="text-[#00d8ff]">Work</span>
          </h2>
        </div>

        {/* GRID LAYOUT */}
        <div 
          className="grid md:grid-cols-2 gap-3 lg:gap-4 2xl:gap-6 mx-auto lg:max-w-[640px] md:max-w-[680px] 2xl:max-w-[850px]"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`
                group relative rounded-[1.2rem] border border-white/10 
                transition-all duration-500 flex flex-col justify-between 
                overflow-hidden cursor-default
                hover:border-[#00d8ff]/40 hover:shadow-[0_0_30px_rgba(0,216,255,0.15)]
                min-h-[170px] 2xl:min-h-[220px] 
                2xl:p-8 2xl:rounded-[1.6rem]
                ${index === 4 ? "md:col-span-2 md:max-w-[calc(50%-8px)] 2xl:max-w-[calc(50%-12px)] md:mx-auto" : "w-full"}
              `}
              style={{ 
                padding: "clamp(1rem, 1.2vw, 1.25rem)",
              }}
            >
              {/* TOP LEFT GLOW */}
              <div className="pointer-events-none absolute top-[-20%] left-[-20%] w-[120px] h-[120px] 2xl:w-[180px] 2xl:h-[180px] bg-[radial-gradient(circle,rgba(0,216,255,0.25),transparent_70%)] blur-2xl opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 ease-out" />
              
              {/* BOTTOM RIGHT GLOW */}
              <div className="pointer-events-none absolute bottom-[-30%] right-[-30%] w-[150px] h-[150px] 2xl:w-[220px] 2xl:h-[220px] bg-[radial-gradient(circle,rgba(0,216,255,0.4),transparent_60%)] blur-3xl opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 ease-out" />

              {/* NUMBER */}
              <div 
                className="font-black leading-none bg-gradient-to-b from-[#00d8ff] to-transparent bg-clip-text text-transparent select-none 2xl:text-[5rem]"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.2rem)", marginLeft: "-0.05em" }}
              >
                {step.number}
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <h3 
                  className="font-bold text-white mb-1 tracking-wide uppercase 2xl:text-[1.65rem] 2xl:mb-2"
                  style={{ fontSize: "clamp(0.75rem, 0.85vw, 0.85rem)" }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors 2xl:text-[1.18rem] 2xl:leading-snug"
                  style={{ fontSize: "clamp(0.65rem, 0.75vw, 0.78rem)" }}
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