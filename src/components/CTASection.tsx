import { Button } from "../components/ui/button";
import BannerCTA from "../assets/image-removebg-preview (15).png";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
  imageSrc?: string;
}

const CTASection = ({
  title = "Let's Create Your",
  highlight = "App",
  subtitle = "Use specialized software to bring concepts to life. Let's talk about your project where imagination and knowledge collide.",
  primaryButtonText = "Start Your Project",
  primaryButtonAction,
}: CTASectionProps) => {
  return (
    <section className="relative bg-transparent overflow-hidden" style={{ padding: "clamp(2rem, 6vh, 4rem) 1rem" }}>
      <div className="container mx-auto relative max-w-[1200px]">
        
        {/* MAIN BANNER CONTAINER */}
        <div 
          className="relative overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 flex flex-col lg:flex-row shadow-2xl"
          style={{ borderRadius: "clamp(1rem, 2vw, 2rem)" }}
        >
          
          {/* DECORATIVE RINGS - Hidden on mobile to keep it clean */}
          <div 
            className="absolute border-[#43c6e4]/5 rounded-full pointer-events-none hidden md:block" 
            style={{ 
              width: "20rem", 
              height: "20rem", 
              left: "-5rem", 
              top: "-8rem", 
              borderWidth: "2rem" 
            }} 
          />
          <div 
            className="absolute border-[#43c6e4]/5 rounded-full pointer-events-none hidden md:block" 
            style={{ 
              width: "25rem", 
              height: "25rem", 
              right: "10%", 
              bottom: "-12rem", 
              borderWidth: "1.5rem" 
            }} 
          />

          {/* CONTENT AREA */}
          <div className="relative w-full z-20 flex flex-col lg:flex-row min-h-fit lg:min-h-[400px]">
            
            {/* TEXT CONTENT */}
            <div 
              className="w-full lg:w-7/12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left" 
              style={{ 
                padding: "clamp(2rem, 5vw, 4rem)",
                gap: "1.5rem"
              }}
            >
              <h2 
                className="text-white font-bold tracking-tight leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {title} <span className="text-[#43c6e4]">{highlight}</span>
              </h2>

              <p 
                className="text-slate-300 leading-relaxed opacity-80 max-w-[500px]"
                style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.125rem)" }}
              >
                {subtitle}
              </p>

              <div className="pt-4">
                <Button
                  onClick={primaryButtonAction}
                  className="bg-gradient-to-r from-[#43c6e4]/90 to-[#43c6e4] text-slate-900 transition-all hover:scale-105 shadow-lg shadow-[#43c6e4]/20 border-none"
                  style={{ 
                    borderRadius: "0.5rem",
                    padding: "0 2.5rem",
                    height: "clamp(3rem, 4vw, 3.5rem)",
                    fontSize: "clamp(0.9rem, 1vw, 1.05rem)",
                    fontWeight: "bold"
                  }}
                >
                  {primaryButtonText}
                </Button>
              </div>
            </div>

            {/* FLOATING IMAGE AREA */}
            <div className="relative lg:absolute lg:bottom-0 lg:right-0 w-full lg:w-1/2 flex justify-center lg:justify-end items-end overflow-hidden lg:overflow-visible">
              <img 
                src={BannerCTA} 
                alt="Interface Preview" 
                className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                style={{ 
                  width: "clamp(280px, 40vw, 550px)",
                  transform: "translateY(10%)" // Slightly pulls the image into the bottom edge
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;