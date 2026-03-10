import { Button } from "@/components/ui/button";
import BannerBG from "../assets/cta.png"; 
import BannerBGMobile from "../assets/cta2.png"; 
import BannerBGTablet from "../assets/cta-tablet.png";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  subtitle?: React.ReactNode;
  primaryButtonText?: string;
  href?: string;
}

const CTASection = ({
  title = "Let's Create Your",
  highlight = "App",
  subtitle = "Use specialized software to bring concepts to life. Let's talk about your project where imagination and knowledge collide.",
  primaryButtonText = "Start Your Project",
  href = "/contact", 
}: CTASectionProps) => {
  return (
    <section className="relative bg-transparent overflow-hidden cta-section-wrapper">
      <div className="container mx-auto relative cta-container flex justify-center">
        
        {/* MAIN BANNER BOX */}
        <div 
          className="relative overflow-hidden shadow-2xl cta-banner-card w-full"
          style={{
            backgroundImage: `url(${BannerBG})`,
            backgroundRepeat: 'no-repeat',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          
          {/* CONTENT AREA */}
          <div className="relative w-full h-full z-20 flex flex-col lg:flex-row items-center cta-content-wrapper">
            
            <div className="cta-text-side">
              <h2 className="text-white font-bold tracking-tight leading-[1.2] cta-title">
                {title} <span className="text-[#47c2d2]">{highlight}</span>
              </h2>

              <p className="text-white opacity-85 leading-relaxed cta-subtitle">
                {subtitle}
              </p>

              <div className="cta-button-container">
                {/* WRAPPED BUTTON IN ANCHOR TAG */}
                <a href={href} className="inline-block outline-none">
                  <Button
                    variant="cyan"
                    className="bg-[#47c2d2] hover:bg-[#3baab9] text-slate-900 rounded-lg font-bold cta-main-btn transition-all duration-300"
                  >
                    {primaryButtonText}
                  </Button>
                </a>
              </div>
            </div>

            <div className="hidden lg:block lg:flex-1" />

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* === MOBILE & TABLET IMAGE SWAP OVERRIDE === */
        @media (max-width: 1023px) {
          .cta-banner-card {
            /* Default Mobile Image (cta2) */
            background-image: url('${BannerBGMobile}') !important;
            background-position: center bottom !important; 
            min-height: 480px !important; 
          }
        }

        /* NEW: TABLET SPECIFIC OVERRIDE (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .cta-banner-card {
            /* Tablet Image (cta-tablet) */
            background-image: url('${BannerBGTablet}') !important;
            background-position: center bottom !important;
            min-height: 520px !important; /* Slightly taller to clear the phone graphics */
            display: flex;
            align-items: flex-start !important; /* Move text up to avoid overlapping cards */
            padding-top: 4rem !important;
          }
          .cta-title { font-size: 2.4rem !important; max-width: 450px; }
          .cta-subtitle { font-size: 1.05rem !important; max-width: 400px; }
        }

        /* 1. MOBILE & TABLET (Base Settings - preserved) */
        .cta-section-wrapper { padding: 2rem 1rem; }
        .cta-banner-card { 
          border-radius: 1.5rem; 
          padding: 2.5rem 1.5rem; 
          min-height: 300px;
          background-size: cover;
          background-position: center right; 
        }
        .cta-title { font-size: 1.6rem; margin-bottom: 0.8rem; }
        .cta-subtitle { font-size: 0.85rem; margin-bottom: 1.5rem; max-width: 260px; }
        .cta-main-btn { height: 2.6rem; padding: 0 1.2rem; }

        /* 2. LAPTOP (1024px - 1439px) - UNTOUCHED */
        @media (min-width: 1024px) {
          .cta-container { 
            max-width: 960px !important; 
            margin: 0 auto; 
          }
          .cta-banner-card { 
            height: 300px; 
            border-radius: 2rem; 
            display: flex;
            align-items: center;
            padding: 0 3.5rem;
            background-size: 100% 100% !important;
            background-position: center right !important;
          }
          .cta-text-side { width: 50%; } 
          .cta-title { 
            font-size: 2.1rem; 
            margin-bottom: 0.8rem; 
          }
          .cta-subtitle { font-size: 0.95rem; max-width: 360px; margin-bottom: 1.8rem; } 
          .cta-main-btn { padding: 0 1.5rem; height: 2.8rem; font-size: 0.9rem; }
        }

        /* 3. LARGE DESKTOP (1440px+) - FIX APPLIED HERE */
        @media (min-width: 1440px) {
          .cta-container { max-width: 1350px !important; }
          .cta-banner-card { 
            height: auto;
            aspect-ratio: 1400 / 460; 
            padding: 0 5rem;
            background-size: cover !important;
            background-position: center right !important;
          }
          .cta-text-side { width: 55%; }
          .cta-title { 
            font-size: 3rem; 
            text-wrap: balance; /* Replaced white-space: nowrap; to allow wrapping */
          }
          .cta-subtitle { font-size: 1.15rem; max-width: 480px; margin-bottom: 2.2rem; }
          .cta-main-btn { height: 3rem; font-size: 0.95rem; }
        }

        /* 4. 4K MONITORS - UNTOUCHED */
        @media (min-width: 2560px) {
          .cta-container { max-width: 1900px !important; }
          .cta-banner-card { aspect-ratio: 1900 / 540; border-radius: 3rem; }
          .cta-title { font-size: 4.5rem; }
          .cta-subtitle { font-size: 1.5rem; max-width: 750px; }
          .cta-main-btn { height: 4rem; font-size: 1.4rem; padding: 0 3.5rem; }
        }
      `}} />
    </section>
  );
};

export default CTASection;