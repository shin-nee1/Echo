import React from "react";
import { motion } from "framer-motion";
import LAPTOPDEVELOP from "@/assets/LaptopDevelop.png";

interface InfoSectionTWOProps {
  title?: string;
  highlight?: string;
  paragraphs?: string[];
}

const InfoSectionTWO = ({
  title = "What is",
  highlight = "Develop?",
  paragraphs = [
    "At Echo & Impact, development is where ideas turn into functional, scalable, and high-performing digital products. It's the bridge between design, user experience, and real-world interaction. Built with precision, stability, and long-term growth in mind.",
    "We develop websites, Shopify stores, mobile apps, web applications, and conversion-driven digital platforms. Everything we build is engineered to load fast, scale easily, and integrate seamlessly with your brand's broader ecosystem.",
    "Whether you need a high-performance website, a custom platform, or a full-scale product build, our focus remains the same: development that's reliable, intuitive, and built for results."
  ],
}: InfoSectionTWOProps) => {
  return (
    <section className="relative w-full bg-transparent overflow-hidden info-section-wrapper">
      <div className="container mx-auto relative z-10 info-container">
        
        <div className="flex flex-col lg:flex-row items-center justify-between info-flex-wrapper">
          
          {/* TEXT CONTENT */}
          <div className="info-text-side">
            <div className="info-header-wrapper">
              <h2 className="text-white font-bold tracking-tight leading-[1.1] info-title">
                {title} <span className="text-[#43c6e4]">{highlight}</span>
              </h2>
            </div>

            <div className="flex flex-col info-paragraphs-gap">
              {paragraphs.map((p, i) => (
                <p 
                  key={i} 
                  className="text-slate-400/70 font-light leading-relaxed info-p-text"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* IMAGE CONTAINER */}
          <div className="info-image-side">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full info-image-inner"
            >
              <motion.img 
                src={LAPTOPDEVELOP} 
                alt={highlight} 
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-auto object-contain opacity-90 drop-shadow-[0_8px_30px_rgba(67,198,228,0.15)]"
              />
            </motion.div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. MOBILE (< 768px) */
        .info-section-wrapper { padding: 0rem 1rem; }
        .info-text-side { width: 100%; text-align: center; margin-bottom: 3rem; }
        .info-title { font-size: 1.85rem; margin-bottom: 1rem; }
        .info-paragraphs-gap { gap: 0.5rem; }
        .info-p-text { font-size: 0.9rem; }
        .info-image-side { width: 100%; display: flex; justify-content: center; }
        .info-image-inner { max-width: 280px; } /* Slightly larger for laptop asset */

        /* 2. TABLET (768px - 1023px) */
        @media (min-width: 768px) {
          .info-section-wrapper { padding: 0rem 0rem; }
          .info-title { font-size: 2.1rem; }
          .info-p-text { font-size: 1rem; }
          .info-image-inner { max-width: 400px; }
        }

        /* 3. LAPTOP (1024px - 1439px) */
        @media (min-width: 1024px) {
          .info-container { max-width: 100% !important; padding: 0 0rem !important; }
          .info-flex-wrapper { flex-direction: row; gap: 5vw; align-items: flex-start; }
          .info-text-side { width: 55%; text-align: left; margin-bottom: 0; }
          .info-title { font-size: 2.4rem; margin-bottom: 1rem; }
          .info-p-text { font-size: 1.0rem; max-width: 600px; }
          .info-image-side { width: 45%; justify-content: flex-end; padding-top: 3rem; }
          .info-image-inner { max-width: 470px; }
        }

        /* 4. LARGE DESKTOP (1440px - 2559px) */
        @media (min-width: 1440px) {
          .info-flex-wrapper { gap: 6vw; }
          .info-text-side { width: 55%; }
          .info-title { font-size: 2.55rem; }
          .info-p-text { font-size: 1.2rem; max-width: 750px; }
          .info-image-inner { max-width: 550px; }
        }

        /* 5. 4K MONITORS (2560px+) */
        @media (min-width: 2560px) {
          .info-container { padding: 0 3vw !important; }
          .info-section-wrapper { padding: 1rem 0; }
          .info-title { font-size: 5rem; margin-bottom: 3.2rem; }
          .info-p-text { font-size: 1.75rem; max-width: 1200px; }
          .info-paragraphs-gap { gap: 1.7rem; }
          .info-image-inner { max-width: 1000px; }
        }
      `}} />
    </section>
  );
};

export default InfoSectionTWO;