import React from "react";
import { motion } from "framer-motion";
import AboutImg from "@/assets/About Us.png"; 

const AboutHero: React.FC = () => {
  return (
    <section className="about-hero-wrapper relative flex flex-col items-center justify-center overflow-hidden">
      
      <div className="container relative z-10 mx-auto px-[5vw] text-center flex flex-col items-center">
        
        {/* TITLE: Centered */}
        <h2 className="about-hero-title font-bold text-white leading-tight text-center">
          About <span className="text-[#00d8ff]">Us</span>
        </h2>

        {/* IMAGE: Increased Size & Centered */}
        <div className="about-image-container mb-12 md:mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full flex items-center justify-center"
          >
            <img 
              src={AboutImg} 
              alt="About Echo & Impact" 
              className="h-full w-auto object-contain drop-shadow-[0_0_30px_rgba(0,216,255,0.1)]"
            />
          </motion.div>
        </div>

        {/* TEXT CONTENT: Specifically Left-Aligned */}
        <div className="flex flex-col items-start w-full max-w-[90vw] md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
          <p className="about-lead-text text-white/85 font-light text-left whitespace-pre-line">
{`Echo & Impact was created with a simple belief at its core. Great work comes from clarity, structure, and a team that genuinely cares about outcomes, not checklists.

Over the years, we noticed a recurring problem across the industry. Businesses were investing in branding, websites, and marketing, yet they often lacked a partner who stayed accountable from the first idea to the final execution. Scopes were vague, expectations unclear, deadlines shifting, and communication fragmented.

We built Echo & Impact to be the opposite of that experience. Here, strategy is intentional, processes are transparent, and execution is disciplined. Our team brings together specialists across design, engineering, and marketing under one system, so every decision reinforces the next and every step moves your brand forward with purpose.

What matters to us is not just onboarding you but delivering the work and standing behind it. Guiding you when things are unclear. Advising when something is unnecessary. Challenging ideas when they are not strong enough. And supporting you long after launch, not just during the project timeline.

Every relationship we build is grounded in clarity, honesty, and a shared commitment to growth. Every decision is thoughtful. Every outcome is intentional. Every partnership is built to last. clarity and structure.`}
          </p>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-hero-wrapper {
          padding-top: clamp(7rem, 12vh, 10rem); 
          
        }

        .about-hero-title {
          font-size: clamp(2.2rem, 9vw, 2.8rem); 
          margin-bottom: clamp(2rem, 5vh, 3rem);
          width: 100%;
        }

        .about-image-container {
          position: relative;
          /* INCREASED HEIGHTS: Returning to high-impact scale */
          height: clamp(300px, 45vh, 500px); 
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .about-lead-text {
          font-size: 1rem;
          line-height: 1.7; 
          letter-spacing: 0.01em;
          white-space: pre-line;
          text-align: left;
        }

        /* TABLET (768px) */
        @media (min-width: 768px) {
          .about-hero-title { font-size: 3.5rem; }
          .about-image-container { height: 55vh; }
          .about-lead-text { font-size: 1.1rem; }
        }

        /* LAPTOP (1024px) */
        @media (min-width: 1024px) {
          .about-hero-title { font-size: 4rem; }
          .about-image-container { height: 70vh; }
          .about-lead-text { font-size: 1.15rem; }
        }

        /* LARGE LAPTOP (1440px) */
        @media (min-width: 1440px) {
          .about-hero-title { font-size: 4.8rem; }
          .about-image-container { height: 65vh; }
          .about-lead-text { font-size: 1.2rem; }
        }

        /* 4K MONITORS (2560px) */
        @media (min-width: 2560px) {
          .about-hero-title { font-size: 6rem; }
          .about-image-container { height: 75vh; }
          .about-lead-text { font-size: 1.5rem; }
        }
      `}} />
    </section>
  );
};

export default AboutHero;