import { Button } from "@/components/ui/button";
import BannerCTA from "../assets/image-removebg-preview (15).png";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
}

const CTASection = ({
  title = "Let's Create Your",
  highlight = "App",
  subtitle = "Use specialized software to bring concepts to life. Let's talk about your project where imagination and knowledge collide.",
  primaryButtonText = "Start Your Project",
  primaryButtonAction,
}: CTASectionProps) => {
  return (
    <section className="relative bg-transparent overflow-hidden cta-section-wrapper">
      <div className="container mx-auto relative cta-container">
        
        {/* MAIN BANNER BOX */}
        <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 flex flex-col lg:flex-row shadow-2xl cta-banner-card">
          
          {/* DECORATIVE RINGS */}
          <div className="absolute border-[#43c6e4]/5 rounded-full pointer-events-none hidden md:block ring-1" />
          <div className="absolute border-[#43c6e4]/5 rounded-full pointer-events-none hidden md:block ring-2" />

          {/* CONTENT AREA */}
          <div className="relative w-full z-20 flex flex-col lg:flex-row items-center justify-between cta-content-wrapper">
            
            {/* TEXT CONTENT */}
            <div className="cta-text-side">
              <h2 className="text-white font-bold tracking-tight leading-[1.1] cta-title">
                {title} <span className="text-[#47c2d2]">{highlight}</span>
              </h2>

              <p className="text-white-300 leading-relaxed opacity-80 cta-subtitle">
                {subtitle}
              </p>

              <div className="cta-button-container">
                <Button
                  onClick={primaryButtonAction}
                  variant="cyan"
                  className=" text-slate-900 rounded-lg font-bold cta-main-btn"
                >
                  {primaryButtonText}
                </Button>
              </div>
            </div>

            {/* IMAGE AREA */}
            <div className="cta-image-side">
              <img 
                src={BannerCTA} 
                alt="Interface Preview" 
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] cta-img"
              />
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. MOBILE (< 768px) */
        .cta-section-wrapper { padding: 3rem 1rem; }
        .cta-banner-card { border-radius: 1.5rem; padding-top: 2rem; }
        .cta-content-wrapper { text-align: center; }
        .cta-text-side { padding: 0 1.5rem 2rem 1.5rem; }
        .cta-title { font-size: 1.6rem; margin-bottom: 1rem; }
        .cta-subtitle { font-size: 0.85rem; margin-bottom: 2rem; }
        .cta-image-side { width: 100%; display: flex; justify-content: center; }
        .cta-img { width: 100%; transform: translateY(0%); }
        .cta-main-btn { height: 2.5rem; width: 60%; }

        /* 2. TABLET (768px - 1023px) */
        @media (min-width: 768px) {
          .cta-section-wrapper { padding: 2rem 1rem; }
          .cta-title { font-size: 2.2rem; }
          .cta-text-side { padding: 0 3rem 3rem 3rem; }
          .cta-img { width: 75%; }
          .ring-1 { width: 15rem; height: 15rem; left: -5rem; top: -5rem; border-width: 1.5rem; }
          .ring-2 { width: 20rem; height: 20rem; right: -5rem; bottom: -8rem; border-width: 1.5rem; }
        }

        /* 3. LAPTOP (1024px - 1439px) */
        @media (min-width: 1024px) {
          .cta-container { max-width: 100% !important; padding: 0 0rem !important; }
          .cta-banner-card { flex-direction: row; min-height: 320px; border-radius: 2rem; }
          .cta-content-wrapper { text-align: left; flex-direction: row; position: relative; }
          .cta-text-side { width: 70%; padding: 1rem 0rem 5rem 2rem; }
          .cta-title { font-size: 2.2rem; }
          .cta-subtitle { font-size: 1rem; max-width: 450px; } 
          .cta-image-side { 
            width: 50%; 
            display: flex; 
            justify-content: flex-end; 
            align-items: flex-end; 
            position: absolute; 
            right: 0; 
            bottom: 0; 
          }
          .cta-img { 
            width: 90%; 
            max-width: 650px;
            transform: translate(5%, 15%); 
          }
          .cta-main-btn { width: auto; padding: 0 2rem; height: 2.5rem; }
        }

        /* 4. LARGE DESKTOP (1440px - 2559px) */
        @media (min-width: 1440px) {
          .cta-container { padding: 0 0vw !important; }
          .cta-banner-card { flex-direction: row; min-height: 360px; border-radius: 2rem; }
          .cta-content-wrapper { text-align: left; flex-direction: row; position: relative; }
          .cta-text-side { width: 75%; padding: 1.5rem 0rem 3rem 3rem; }
          .cta-title { font-size: 2.65rem; }
          .cta-subtitle { font-size: 1.05rem; max-width: 500px; }
          .cta-image-side { 
            width: 65%; 
            display: flex; 
            justify-content: flex-end; 
            align-items: flex-end; 
            position: absolute; 
            right: 0; 
            bottom: 0; 
          }
          .cta-img { 
            width: 70%; 
            max-width: 750px;
            max-height: 350px; /* Locked height for 2k to prevent cutting */
            transform: translate(1.5%, 2%); 
          }
        }

        /* 5. 4K MONITORS (2560px+) */
        @media (min-width: 2560px) {
          .cta-container { padding: 0 0vw !important; }
          .cta-banner-card { flex-direction: row; min-height: 550px; border-radius: 4rem; }
          .cta-content-wrapper { text-align: left; flex-direction: row; position: relative; }
          .cta-text-side { width: 75%; padding: 2.5rem 0rem 5rem 5rem; }
          .cta-title { font-size: 5rem; }
          .cta-subtitle { font-size: 1.75rem; max-width: 1000px; margin-bottom: 2rem; }
          .cta-main-btn { height: 5rem; font-size: 1.6rem; padding: 0 4rem; border-radius: 1.5rem; }
          .cta-image-side { 
            width: 60%; 
            display: flex; 
            justify-content: flex-end; 
            align-items: flex-end; 
            position: absolute; 
            right: 0; 
            bottom: 0; 
          }
          .cta-img { 
            width: 65%;
            max-width: 1200px; 
            max-height: 520px; /* Locked height for 4k to prevent cutting */
            transform: translate(1.5%, 5%); 
          }
          .ring-1 { width: 35rem; height: 35rem; border-width: 4rem; }
        }
      `}} />
    </section>
  );
};

export default CTASection;