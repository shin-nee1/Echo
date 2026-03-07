import React from "react";
import { motion } from "framer-motion";
import DesignPage from "@/assets/Designpage.png";

interface InfoSectionProps {
  title?: string;
  highlight?: string;
  paragraphs?: string[];
  image?: any; 
  imageScale?: number; // <-- 1. Add the new scale prop here
}

const InfoSection = ({
  title = "What is",
  highlight = "Design?",
  image = DesignPage,
  imageScale = 1, // <-- 2. Default scale is 1
  paragraphs = [
    "At Echo & Impact, design goes far beyond visuals, it's the strategic foundation that defines how your brand communicates, behaves, and is experienced across every interaction.",
    "From brand identity and creative direction to product UI/UX, content design, and campaign aesthetics. Every element is crafted with intention, ensuring your brand looks consistent, feels unified, and communicates with clarity across all touchpoints.",
    "Whether we're shaping a brand from the ground up or elevating an existing one, our focus remains the same: design that creates recognition, builds trust, guides user behavior, and sets the direction for everything that follows."
  ],
}: InfoSectionProps) => {

  const imageSource = typeof image === 'string' ? image : image?.src || image;

  return (
    <section className="relative w-full bg-transparent overflow-hidden info-section-wrapper">
      <div className="container mx-auto relative z-10 info-container">
        
        <div className="flex flex-col lg:flex-row items-center justify-between info-flex-wrapper">
          
          {/* TEXT CONTENT */}
          <div className="info-text-side">
            <div className="info-header-wrapper">
              <h2 className="text-white font-bold tracking-tight leading-[1.1] info-title">
                {title} <span className="text-[#47c2d2]">{highlight}</span>
              </h2>
            </div>

            <div className="flex flex-col info-paragraphs-gap">
              {paragraphs.map((p, i) => (
                <p 
                  key={i} 
                  className="text-white-400/70 font-light leading-relaxed info-p-text"
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
              className="relative w-full info-image-inner flex items-center justify-center"
            >
              <motion.img 
                src={imageSource} 
                alt={highlight} 
                style={{ scale: imageScale }} // <-- 3. Apply the scale here
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-full w-auto object-contain opacity-80 drop-shadow-[0_8px_30px_rgba(67,198,228,0.12)]"
              />
            </motion.div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. MOBILE (< 768px) */
        .info-section-wrapper { padding: 0rem 1rem; }
        .info-text-side { width: 100%; text-align: center; margin-bottom: 4rem; }
        .info-title { font-size: 1.95rem; margin-bottom: 1.2rem; }
        .info-paragraphs-gap { gap: 0.5rem; }
        .info-p-text { font-size: 0.9rem; }
        .info-image-side { width: 100%; display: flex; justify-content: center; align-items: center; }
        .info-image-inner { height: 200px; }

        /* 2. TABLET (768px - 1023px) */
        @media (min-width: 768px) {
          .info-section-wrapper { padding: 0rem 1rem; }
          .info-title { font-size: 2.2rem; }
          .info-p-text { font-size: 1rem; }
          .info-image-side { 
            width: 100%;
            display: flex; 
            justify-content: center; 
            align-items: center;
            margin-top: 0rem; 
          }
          .info-image-inner { height: 250px; }
        }

        /* 3. LAPTOP (1024px - 1439px) */
        @media (min-width: 1024px) {
          .info-container { max-width: 100% !important; padding: 0 0rem !important; }
          .info-flex-wrapper { flex-direction: row; gap: 5vw; align-items: center; }
          .info-text-side { width: 55%; text-align: left; margin-bottom: 0; }
          .info-title { font-size: 2.5rem; margin-bottom: 2rem; }
          .info-p-text { font-size: 1.05rem; max-width: 600px; }
          .info-image-side { width: 30%; justify-content: flex-end; align-items: center; }
          .info-image-inner { height: 350px; }
        }
        
        /* 4. LARGE DESKTOP (1440px - 2559px) */
        @media (min-width: 1440px) {
          .info-container { max-width: 1300px !important; margin: 0 auto; padding: 0 0vw !important; }
          .info-flex-wrapper { gap: 5vw; align-items: center; }
          .info-text-side { width: 50%; }
          .info-title { font-size: 3rem; }
          .info-p-text { font-size: 1.25rem; max-width: 650px; }
          .info-image-side { width: 40%; justify-content: flex-end; align-items: center; }
          .info-image-inner { height: 420px; }
        }

        /* 5. 4K MONITORS (2560px+) */
        @media (min-width: 2560px) {
          .info-container { padding: 0 0vw !important; max-width: 100% !important; }
          .info-flex-wrapper { gap: 5vw; align-items: center; }
          .info-title { font-size: 6rem; margin-bottom: 3rem; }
          .info-p-text { font-size: 2rem; max-width: 1100px; }
          .info-paragraphs-gap { gap: 2.5rem; }
          .info-image-inner { height: 650px; }
        }
        
        /* GLOBAL STYLES FOR IMAGE SIDE */
        .info-image-side {
          width: 50%;
          display: flex;
          justify-content: flex-end; 
          align-items: center; 
          padding-right: 3vw; 
        }
      `}} />
    </section>
  );
};

export default InfoSection;