import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "One Team for the Entire Journey",
    description: "Designers, developers, and marketers work together from day one. No handoffs to disconnected groups. No fragmented understanding of your brand."
  },
  {
    number: "02",
    title: "Clarity Before Execution",
    description: "We begin with alignment, structure, and understanding. We define goals, constraints, needs, and outcomes before we design a screen or write code."
  },
  {
    number: "03",
    title: "Process That Reduces Stress, Not Adds to It",
    description: "Clients often come to us after experiencing disorganized workflows elsewhere. We solve that through documented scopes and clear milestones."
  },
  {
    number: "04",
    title: "Long Term Thinking Behind Every Decision",
    description: "We don't design or build for the moment. We plan for how your brand will grow, scale, communicate, and compete years from now."
  },
  {
    number: "05",
    title: "Transparency at Every Stage",
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
            className="text-white font-bold tracking-tight leading-[1.1] 2xl:text-[clamp(3.8rem,5.5vw,5.5rem)]"
            style={{ fontSize: "clamp(2.4rem, 6.5vw, 4.2rem)" }}
          >
            How <span className="text-white">We</span>{" "}
            <span className="text-[#00d8ff]">Work</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-12 mx-auto lg:max-w-[1000px] md:max-w-[800px] 2xl:max-w-[1200px] px-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`
                group relative rounded-[2rem]
                backdrop-blur-[1px]
                transition-all duration-500 flex flex-col justify-between
                overflow-hidden cursor-default
                hover:border-[#00d8ff]/60 hover:shadow-[0_0_50px_rgba(0,216,255,0.2)]
                min-h-[160px] md:min-h-[220px] 2xl:min-h-[300px]
                2xl:p-12 2xl:rounded-[2.5rem]
                ${index === 4 ? "md:col-span-2 md:max-w-[calc(50%-12px)] 2xl:max-w-[calc(50%-24px)]" : "w-full"}
              `}
              style={{
                padding: "clamp(1.2rem, 3vw, 1.5rem)",
                border: "1px solid transparent",
                backgroundImage: `
                  linear-gradient(145deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%),
                  linear-gradient(135deg, rgba(0,0,0,0.3) 10%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.1) 100%)
                `,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >

              {/* ===== TRUE EDGE GRADIENT BORDER ===== */}
              <div
                className="pointer-events-none absolute inset-0 rounded-[2rem] 2xl:rounded-[2.5rem]"
                style={{
                  padding: "1px",
                  background: `
                    linear-gradient(
                      180deg,
                      rgba(255,255,255,0.35),
                      rgba(255,255,255,0.12) 30%,
                      rgba(0,0,0,0.65) 55%,
                      rgba(255,255,255,0.18) 75%,
                      rgba(255,255,255,0.35)
                    )
                  `,
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />

              {/* GLOWS */}
              <div className="pointer-events-none absolute top-[-10%] left-[-15%] w-[200px] h-[200px] 2xl:w-[220px] 2xl:h-[220px] bg-[radial-gradient(circle,rgba(0,216,255,0.5),transparent_70%)] blur-[60px] opacity-50 group-hover:opacity-80 transition-all duration-700 ease-out z-0" />

              <div className="pointer-events-none absolute bottom-[-50%] right-[-35%] w-[370px] h-[370px] 2xl:w-[460px] 2xl:h-[460px] bg-[radial-gradient(circle,rgba(0,216,255,0.8),transparent_60%)] blur-[130px] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out z-0" />

              {/* CONTENT */}
              <div className="relative z-10">
                <div
                  className="font-black leading-none bg-gradient-to-b from-[#00d8ff] to-transparent bg-clip-text text-transparent select-none 2xl:text-[8rem] mb-6"
                  style={{ fontSize: "clamp(4rem, 6vw, 5.5rem)", marginLeft: "-0.06em" }}
                >
                  {step.number}
                </div>

                <h3
                  className="font-bold text-white mb-3 tracking-wide uppercase 2xl:text-[2rem] 2xl:mb-5"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)" }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-white leading-relaxed 2xl:text-[1.3rem] 2xl:leading-normal opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.25rem)" }}
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
