import React from "react";
import { motion } from "framer-motion";
import AboutImg from "@/assets/About Us.png"; 

const AboutHero: React.FC = () => {
  return (
    <section className="about-hero-wrapper relative flex flex-col items-center justify-center overflow-hidden">
      
      <div className="container relative z-10 mx-auto px-[5vw] text-center flex flex-col items-center">
        
        {/* TITLE: Matches IndexHero .hero-title scaling */}
        <h2 className="about-hero-title font-bold text-white mx-auto leading-tight">
          About <span className="text-[#00d8ff]">Us</span>
        </h2>

        {/* IMAGE: Matches IndexHero .hero-slider-container scaling logic */}
        <div className="about-image-container mb-6 md:mb-8 lg:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full flex items-center justify-center"
          >
            <img 
              src={AboutImg} 
              alt="About Echo & Impact" 
              className="h-full w-auto object-contain drop-shadow-[0_0_15px_rgba(0,216,255,0.08)]"
            />
          </motion.div>
        </div>

        {/* TEXT CONTENT: Matches IndexHero .hero-subtitle scaling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 max-w-[85vw] md:max-w-2xl lg:max-w-3xl 2xl:max-w-5xl">
          
          {/* Main Lead Paragraph */}
          <p className="about-lead-text text-white/95 font-light md:col-span-2 md:text-center">
            Echo & Impact was created with a simple belief: Great work comes from <span className="text-[#00d2ff] font-normal">clarity and structure.</span>
          </p>

          {/* Secondary Paragraphs */}
          <p className="about-sub-text text-white/60 font-light leading-relaxed text-left md:text-left">
            We noticed a recurring problem: businesses invested in branding, yet lacked a partner who stayed <span className="text-white/80">accountable from first idea to execution.</span>
          </p>
          
          <p className="about-sub-text text-white/60 font-light leading-relaxed text-left md:text-left">
            We built this to be the opposite. Strategy is intentional, processes are transparent, and every step moves your brand forward with purpose.
          </p>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. GLOBAL FLUID VARIABLES (Mobile First) */
        .about-hero-wrapper {
          padding-top: clamp(6.5rem, 10vh, 8rem); 
          padding-bottom: clamp(3rem, 5vh, 4rem);
          min-height: auto; 
        }

        .about-hero-title {
          font-size: clamp(1.75rem, 8vw, 1.95rem); 
          margin-bottom: clamp(1rem, 3vh, 1.5rem);
          max-width: 100vw; 
        }

        .about-image-container {
          position: relative;
          height: clamp(150px, 20vh, 200px); /* Scaled slightly smaller than hero slider */
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .about-lead-text {
          font-size: clamp(0.95rem, 3vw, 1.1rem);
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }

        .about-sub-text {
          font-size: clamp(0.75rem, 2.5vw, 0.85rem);
        }

        /* 2. TABLET (768px) */
        @media (min-width: 768px) {
          .about-hero-title { font-size: clamp(2rem, 5vw, 2.35rem); }
          .about-image-container { height: 25vh; }
          .about-lead-text { font-size: clamp(1.1rem, 2.5vw, 1.3rem); }
          .about-sub-text { font-size: 0.9rem; }
        }

        /* 3. LAPTOP (1024px) */
        @media (min-width: 1024px) {
          .about-hero-wrapper { padding-top: 15vh; padding-bottom: 8vh; }
          .about-hero-title { font-size: 2.95rem; }
          .about-image-container { height: 30vh; margin-bottom: 3rem; }
          .about-lead-text { font-size: 1.35rem; }
          .about-sub-text { font-size: 0.95rem; line-height: 1.7; }
        }

        /* 4. LARGE LAPTOP (1440px) */
        @media (min-width: 1440px) {
          .about-hero-title { font-size: 3.35rem; }
          .about-image-container { height: 35vh; }
          .about-lead-text { font-size: 1.5rem; }
          .about-sub-text { font-size: 1rem; }
        }

        /* 5. 4K MONITORS (2560px) */
        @media (min-width: 2560px) {
          .about-hero-wrapper { padding-top: 15vh; padding-bottom: 10vh; }
          .about-hero-title { font-size: 5rem; }
          .about-image-container { height: 40vh; margin-bottom: 4rem; }
          .about-lead-text { font-size: 2.2rem; }
          .about-sub-text { font-size: 1.5rem; line-height: 1.8; }
        }

        /* 6. SMALL MOBILE (Max 425px) */
        @media (max-width: 425px) {
          .about-hero-title { font-size: 1.6rem; }
          .about-image-container { height: 140px; }
          .about-lead-text { font-size: 0.9rem; }
          .about-sub-text { font-size: 0.8rem; }
        }
      `}} />
    </section>
  );
};

export default AboutHero;