import React from "react";
import { motion } from "framer-motion";

interface InfoSectionTWOProps {
  title?: string;
  highlight?: string;
  paragraphs?: string[];
}

const InfoSectionTWO = ({
  title = "What is",
  highlight = "Develop?",
  paragraphs = [
    "At Echo & Impact, development is the art of turning ideas into functional digital products. It's where design meets technology to create experiences that users love.",
    "Our development process focuses on clean code, scalable architecture, and user-centric solutions that grow with your business. We build systems that are as powerful as they are intuitive.",
    "From high-performance websites to complex enterprise software, we build digital products that are fast, reliable, and engineered to last for the long term."
  ],
}: InfoSectionTWOProps) => {
  return (
    <section className="relative w-full bg-[#010a0f] pt-0 pb-20 lg:pb-32 overflow-hidden">
      
      {/* BRANDING GLOW BLOBS */}
      <div className="absolute top-[-10%] left-[-5%] w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-16">
          
          {/* TEXT CONTENT */}
          <div className="w-full lg:w-[550px] pt-12 lg:pt-16">
            <div className="relative inline-block mb-12">
              <h2 className="text-white text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                {title} <span className="text-[#00d8ff]">{highlight}</span>
              </h2>
              {/* Cyan Accent Bar */}
              <div className="absolute -bottom-4 left-0 w-20 h-1.5 bg-[#00d8ff] rounded-full shadow-[0_0_20px_rgba(0,216,255,0.6)]" />
            </div>

            <div className="space-y-6 mt-16">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-85">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* LAPTOP MOCKUP - Geometric build matching the image */}
          <div className="w-full max-w-[550px] lg:max-w-[700px] flex-shrink-0 lg:pt-20">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full"
            >
              {/* Perspective Container */}
              <motion.div
                whileHover={{ rotateY: -8, rotateX: 4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{ perspective: 1500 }}
                className="relative z-20"
              >
                {/* 1. THE SCREEN (LID) */}
                <div className="relative rounded-t-2xl border-[10px] border-[#1a1a1a] bg-black shadow-2xl overflow-hidden aspect-[16/10]">
                  {/* Internal Screen Content - Dark Code View */}
                  <div className="relative w-full h-full bg-[#0d1117] p-6 font-mono text-[10px] overflow-hidden">
                    {/* Browser UI */}
                    <div className="flex gap-1.5 mb-6 opacity-40">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>

                    {/* Syntax Highlighted Code Lines */}
                    <div className="space-y-3">
                      <div className="flex gap-2"><span className="text-blue-400">import</span> <span className="text-yellow-200">{"{ Service }"}</span> <span className="text-blue-400">from</span> <span className="text-green-400">"@impact/core"</span>;</div>
                      <div className="flex gap-2"><span className="text-purple-400">export const</span> <span className="text-yellow-400">App</span> = () =&gt; {"{"}</div>
                      <div className="ml-4 w-4/5 h-2 bg-cyan-500/20 rounded-full animate-pulse" />
                      <div className="ml-4 w-2/3 h-2 bg-white/10 rounded-full" />
                      <div className="ml-4 w-3/4 h-2 bg-cyan-400/10 rounded-full" />
                      <div className="flex">{"}"};</div>
                    </div>
                  </div>
                </div>

                {/* 2. THE CHASSIS (BASE) */}
                <div className="relative h-5 w-[106%] -left-[3%] bg-gradient-to-b from-[#2a2a2a] to-[#0f0f0f] rounded-b-xl shadow-[0_25px_50px_rgba(0,0,0,0.6)] border-t border-white/10">
                  {/* Subtle Trackpad Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-2.5 bg-black/50 rounded-b-lg" />
                </div>
              </motion.div>

              {/* Ambient Cyan Glow */}
              <div className="absolute inset-0 bg-cyan-500/15 blur-[100px] rounded-full scale-125 -z-10 translate-y-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSectionTWO;