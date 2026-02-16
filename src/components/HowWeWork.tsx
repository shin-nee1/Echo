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
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
      style={{ padding: "clamp(4rem, 10vh, 7rem) 0 clamp(5rem, 12vh, 8rem) 0" }} 
    >
      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: "1600px" }}>
        
        {/* HEADING SECTION */}
        <div 
          className="text-center" 
          style={{ marginBottom: "clamp(3rem, 8vh, 5rem)" }}
        >
          <h2 
            className="text-white font-bold tracking-tight leading-[1.1] 2xl:text-[clamp(3.5rem,5vw,5rem)]"
            style={{ fontSize: "clamp(2.2rem, 6vw, 3.8rem)" }} 
          >
            How <span className="text-white">We</span>{" "}
            <span className="text-[#00d8ff]">Work</span>
          </h2>
        </div>

        {/* GRID LAYOUT */}
        <div 
          className="grid md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-12 mx-auto lg:max-w-[1000px] md:max-w-[800px] 2xl:max-w-[1200px] px-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`
                group relative rounded-[2rem] 
                bg-black
                transition-all duration-500 flex flex-col justify-between 
                overflow-hidden cursor-default
                hover:border-[#00d8ff]/60 hover:shadow-[0_0_50px_rgba(0,216,255,0.2)]
                min-h-[160px] md:min-h-[220px] 2xl:min-h-[280px] 
                2xl:p-10 2xl:rounded-[2.5rem]
                ${index === 4 ? "md:col-span-2 md:max-w-[calc(50%-16px)] 2xl:max-w-[calc(50%-24px)] md:mx-auto" : "w-full"}
              `}
              style={{ 
                padding: "clamp(1rem, 2.5vw, 1rem)",
                /* UPDATED BORDER: Dual highlight on opposite corners */
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(black, black), linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.2) 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
              }}
            >
              {/* GLOWS */}
              <div className="pointer-events-none absolute top-[-60%] left-[-30%] w-[260px] h-[260px] 2xl:w-[280px] 2xl:h-[280px] bg-[radial-gradient(circle,rgba(0,216,255,0.6),transparent_70%)] blur-[60px] opacity-60 group-hover:opacity-80 transition-all duration-700 ease-out" />
              
              <div className="pointer-events-none absolute bottom-[-50%] right-[-35%] w-[340px] h-[340px] 2xl:w-[420px] 2xl:h-[420px] bg-[radial-gradient(circle,rgba(0,216,255,0.9),transparent_60%)] blur-[120px] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />

              {/* NUMBER */}
              <div 
                className="font-black leading-none bg-gradient-to-b from-[#00d8ff] to-transparent bg-clip-text text-transparent select-none 2xl:text-[7rem] mb-6"
                style={{ fontSize: "clamp(3.5rem, 5vw, 5rem)", marginLeft: "-0.06em" }}
              >
                {step.number}
              </div>

              {/* CONTENT */}
              <div className="relative z-10">
                <h3 
                  className="font-bold text-white mb-2 tracking-wide uppercase 2xl:text-[1.8rem] 2xl:mb-4"
                  style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.4rem)" }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-white leading-relaxed 2xl:text-[1.2rem] 2xl:leading-normal opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{ fontSize: "clamp(0.875rem, 1.1vw, 1.15rem)" }}
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