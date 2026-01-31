import React from "react";
import { motion } from "framer-motion";

const WhoWeAreAbout = () => {
  const pillars = [
    {
      title: "STRATEGISTS WHO UNDERSTAND WHAT YOU'RE TRYING TO BUILD",
      description: "We look beyond deliverables and into the bigger picture, making sure every output supports your business model, positioning, and long-term direction.",
      rounded: "rounded-[2rem] md:rounded-tl-[2rem] md:rounded-br-[4rem]",
      textAlign: "text-left", 
      justifyContent: "justify-start",
      alignItems: "items-start",
    },
    {
      title: "DESIGNERS WHO TREAT IDENTITY AS A SYSTEM",
      description: "To us, design is not decoration. It's the architecture of how your brand is understood. Our designers build systems that hold up across content, campaigns, UI, and marketing.",
      rounded: "rounded-[2rem] md:rounded-tr-[2rem] md:rounded-bl-[4rem]",
      textAlign: "text-left md:text-right",
      justifyContent: "justify-start md:justify-end",
      alignItems: "items-start md:items-end",
    },
    {
      title: "MARKETERS WHO OPERATE WITH DISCIPLINE AND DATA",
      description: "Marketing is not about noise. It's about structured testing, insight-driven refinement, and creative systems that scale. Every decision ties back to performance and user behavior.",
      rounded: "rounded-[2rem] md:rounded-bl-[2rem] md:rounded-tr-[4rem]",
      textAlign: "text-left",
      justifyContent: "justify-start",
      alignItems: "items-start",
    },
    {
      title: "ENGINEERS WHO BUILD WITH STABILITY AND PRECISION",
      description: "Functionality means nothing without reliability. Our developers focus on performance, usability, scalability, and clean builds that save you time and cost down the road.",
      rounded: "rounded-[2rem] md:rounded-br-[2rem] md:rounded-tl-[4rem]",
      textAlign: "text-left md:text-right",
      justifyContent: "justify-start md:justify-end",
      alignItems: "items-start md:items-end",
    }
  ];

  return (
    <section className="pt-20 pb-24 lg:py-10 bg-[#010a0f] relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Mobile Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(0,216,255,0.05)_0%,_transparent_70%)] pointer-events-none md:hidden" />
      
      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#00d8ff]/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* TWEAKED HEADING: Increased mobile size and tightened spacing */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter md:tracking-tight leading-[0.9] md:leading-tight">
            Who We <span className="text-[#00d8ff]">Are</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#00d8ff] mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(0,216,255,0.6)]" />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 lg:gap-6 max-w-5xl mx-auto">
          
          {/* THE COMPLEX ORB */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] z-20 pointer-events-none items-center justify-center">
            <div className="absolute inset-[-20%] bg-[#00d8ff]/10 blur-[60px] rounded-full animate-pulse" />
            <div className="absolute inset-0 bg-[#00d8ff]/15 blur-[30px] rounded-full" />
            
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-[98%] h-[98%] rounded-full border-[3px] border-[#1a4a5a]/80 bg-gradient-to-br from-[#0a1a20] via-[#051015] to-[#020a0f] shadow-[inset_0_0_40px_rgba(0,216,255,0.15),0_0_30px_rgba(0,216,255,0.1)]" />
              
              <motion.div 
                className="relative w-[80%] h-[80%]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="metal1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4a8a9a" /><stop offset="25%" stopColor="#1a3a45" /><stop offset="50%" stopColor="#00d8ff" stopOpacity="0.6" /><stop offset="75%" stopColor="#1a3a45" /><stop offset="100%" stopColor="#4a8a9a" />
                    </linearGradient>
                    <linearGradient id="metal2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3a7a8a" /><stop offset="30%" stopColor="#0d2530" /><stop offset="50%" stopColor="#00d8ff" stopOpacity="0.5" /><stop offset="70%" stopColor="#0d2530" /><stop offset="100%" stopColor="#3a7a8a" />
                    </linearGradient>
                    <linearGradient id="metal3" x1="50%" y1="0%" x2="50%" y2="100%">
                      <stop offset="0%" stopColor="#5a9aaa" /><stop offset="40%" stopColor="#152a35" /><stop offset="60%" stopColor="#00d8ff" stopOpacity="0.4" /><stop offset="100%" stopColor="#5a9aaa" />
                    </linearGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                    </filter>
                  </defs>
                  <ellipse cx="100" cy="100" rx="75" ry="30" fill="none" stroke="url(#metal1)" strokeWidth="18" transform="rotate(0 100 100)" filter="url(#glow)" opacity="0.9" />
                  <ellipse cx="100" cy="100" rx="75" ry="30" fill="none" stroke="url(#metal2)" strokeWidth="18" transform="rotate(60 100 100)" filter="url(#glow)" opacity="0.9" />
                  <ellipse cx="100" cy="100" rx="75" ry="30" fill="none" stroke="url(#metal3)" strokeWidth="18" transform="rotate(120 100 100)" filter="url(#glow)" opacity="0.9" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute w-[40%] h-[40%]"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                  <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="#00d8ff" strokeWidth="2" transform="rotate(30 50 50)" />
                  <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="#00d8ff" strokeWidth="2" transform="rotate(90 50 50)" />
                  <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke="#00d8ff" strokeWidth="2" transform="rotate(150 50 50)" />
                </svg>
              </motion.div>
              <div className="absolute w-[15%] h-[15%] rounded-full bg-[#00d8ff]/30 blur-[8px]" />
            </div>
          </div>

          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-8 md:p-12 lg:p-14 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md flex flex-col ${pillar.justifyContent} ${pillar.alignItems} group min-h-[auto] md:min-h-[340px] ${pillar.rounded} hover:border-[#00d8ff]/30 transition-all duration-500`}
            >
              <div className={`w-full md:max-w-[320px] ${pillar.textAlign}`}>
                <h3 className="text-white font-bold text-lg md:text-xl tracking-wider mb-4 md:mb-5 uppercase leading-tight">
                  {pillar.title}
                </h3>
                <div className={`h-[2px] bg-[#00d8ff]/60 mb-6 w-12 group-hover:w-full transition-all duration-700 ${pillar.textAlign.includes('text-right') ? 'md:ml-auto' : ''}`} />
                <p className="text-white/40 text-sm md:text-base leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500">
                  {pillar.description}
                </p>
              </div>
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-[#00d8ff]/20 md:hidden" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreAbout;