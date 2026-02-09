import { Button } from "@/components/ui/button";
import aboutImage from "../assets/image-removebg-preview (12).png";

const AboutUs = () => {
  return (
    <section className="relative bg-transparent overflow-hidden about-section">

      <div className="container mx-auto px-6 md:px-12 about-container">
        {/* FLEX LAYOUT */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 about-flex-wrapper">
          
          {/* IMAGE SIDE */}
          <div className="relative flex justify-center lg:justify-start items-center order-2 lg:order-1 about-image-side">
            <div className="relative w-full about-image-wrapper">
              <img 
                src={aboutImage} 
                alt="Echo & Impact Illustration"
                className="w-full h-auto object-contain about-img-element"
              />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left about-content-side">
            
            <div className="about-header-wrapper">
              <h2 className="text-white font-bold tracking-tight leading-none uppercase about-main-title">
                ABOUT <span className="text-[#43c6e4]">US</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-white leading-relaxed font-normal opacity-90 about-description">
              <p>
                Echo & Impact was built on a simple idea: brands grow when creativity, 
                clarity, and execution move in alignment. Our team brings together 
                specialists in design, software, and marketing who share one philosophy: 
                build with intention and operate with discipline.
              </p>

              <p>
                What shaped us is the belief that businesses deserve partners who stay 
                present, set right expectations, be transparent, and support growth with 
                honesty and commitment. We guide, educate, and collaborate at every step.
              </p>

              <p className="font-semibold text-[#43c6e4]/90 about-accent-text">
                Every decision is thoughtful. Every outcome is meaningful. Every partnership 
                is built to last.
              </p>
            </div>

            <div className="about-button-wrapper">
              <Button 
                variant="cyan"
                className="rounded-full flex items-center justify-center transition-all active:scale-95 about-cta-btn"
              >
                Find out more about us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. MOBILE (< 768px) */
        .about-section { padding: 1rem 0; }
        .about-main-title { font-size: 27px; margin-bottom: 1.5rem; }
        .about-description { font-size: 13px; }
        .about-image-wrapper { max-width: 280px; }
        .about-button-wrapper { margin-top: 2rem; width: 100%; display: flex; justify-content: center; }
        .about-cta-btn { height: 3rem; padding: 0 1.5rem; font-size: 0.8rem; width: fit-content; }

        /* 2. TABLET (768px - 1023px) */
        @media (min-width: 768px) {
          .about-main-title { font-size: 38.5px; }
          .about-description { font-size: 14px; max-width: 650px; }
          .about-image-wrapper { max-width: 350px; } 
        }

        /* 3. STANDARD LAPTOP (1024px - 1439px) */
        @media (min-width: 1024px) {
          .about-section { padding: 0rem 0; min-height: 70vh; display: flex; align-items: center; }
          .about-container { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
          .about-flex-wrapper { gap: 2rem; width: 100%; padding: 0 0vw; } 
          
          .about-image-side { width: 50%; }
          .about-image-wrapper { max-width: 100%; width: 90%; } /* UNLOCKED SIZE HERE */
          
          .about-content-side { width: 50%; }
          .about-main-title { font-size: 45px; margin-bottom: 2rem; }
          .about-description { font-size: 14px; max-width: 600px; }
          .about-button-wrapper { margin-top: 2.5rem; justify-content: flex-start; }
        }

        /* 4. LARGE DESKTOP / 1440p (1440px - 2559px) */
        @media (min-width: 1440px) {
          .about-container { max-width: 100% !important; padding: 0 !important; }
          .about-flex-wrapper { padding: 0 0vw; gap: 2vw; }
          
          /* FIXED: IMAGE SIZE */
          .about-image-side { width: 50%; } 
          .about-image-wrapper { max-width: 100%; width: 100%; } /* Allows image to fill the 50% container */
          .about-img-element { width: 100%; height: auto; }

          /* FIXED: TEXT COMPRESSION */
          .about-content-side { width: 50%; }
          .about-main-title { font-size: 45px; }
          .about-description { 
            font-size: 15px; 
            max-width: 750px; /* Increased from 550px to let text breathe */
            line-height: 1.6;
          } 
          .about-section { min-height: 65vh; }
        }

        /* 5. 4K MONITORS (2560px+) */
        @media (min-width: 2560px) {
          .about-section { padding: 10rem 0; }
          .about-flex-wrapper { padding: 0 10vw; }
          .about-main-title { font-size: 85px; }
          .about-description { font-size: 28px; max-width: 1100px; }
          .about-cta-btn { height: 5.5rem; padding: 0 4rem; font-size: 1.6rem; }
          .about-image-wrapper { max-width: 1100px; }
        }
      `}} />
    </section>
  );
};

export default AboutUs;