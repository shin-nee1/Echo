import React from "react";
import { motion } from "framer-motion";

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
    <section className="relative w-full bg-[#010a0f] pt-0 pb-20 lg:pb-32 overflow-hidden">
      
      {/* BRANDING GLOW BLOBS */}
      {/* Top-left subtle cyan glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      {/* Right-center glow blob */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-8">
          
          {/* TEXT CONTENT - Aligned with the top of the mockup */}
          <div className="w-full lg:w-[600px] pt-12 lg:pt-16">
            <div className="relative inline-block mb-12">
              <h2 className="text-white text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                {title} <span className="text-[#00d8ff]">{highlight}</span>
              </h2>
              {/* Cyan Accent Bar under title */}
              <div className="absolute -bottom-4 left-0 w-16 h-1.5 bg-[#00d8ff] rounded-full shadow-[0_0_20px_rgba(0,216,255,0.6)]" />
            </div>

            <div className="space-y-6 mt-16">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-85">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* PHONE MOCKUP - Fixed width to prevent expanding on mobile */}
          <div className="w-full max-w-[280px] md:max-w-[320px] flex-shrink-0 lg:pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              {/* Perspective Container for 3D Tilt Animation */}
              <motion.div
                whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{ perspective: 1200 }}
                className="relative z-20"
              >
                {/* Physical Phone Frame */}
                <div className="rounded-[3rem] border-[10px] border-[#181818] bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
                  
                  {/* Screen Content - */}
                  <div className="relative aspect-[9/19.5] bg-white">
                    {/* Notch / Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-30" />
                    
                    {/* App Content */}
                    <div className="px-8 pt-12">
                      <h3 className="text-[#1e3a8a] text-2xl font-black leading-tight mb-8">
                        Launch<br/>Sale
                      </h3>
                      
                      {/* Grid/Image Placeholder Box */}
                      <div className="w-full aspect-[4/5] bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center mb-16">
                        {/* Inner placeholder icon detail */}
                         <div className="w-10 h-14 border-2 border-slate-200 rounded-md opacity-40" />
                      </div>

                      {/* Shop Now Button */}
                      <div className="w-full py-3.5 bg-[#2563eb] text-white text-[11px] font-bold rounded-full text-center shadow-lg active:scale-95 transition-all">
                        Shop Now
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Hardware Detail (Side Button) */}
                <div className="absolute -right-[11px] top-32 w-[3px] h-12 bg-gray-800 rounded-r-md" />
              </motion.div>

              {/* Local Cyan Glow behind phone */}
              <div className="absolute inset-0 bg-cyan-500/15 blur-[80px] rounded-full scale-110 -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;