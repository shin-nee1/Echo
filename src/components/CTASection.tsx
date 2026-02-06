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
    <section className="relative py-12 px-4 md:px-6 bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-7xl relative">
        
        {/* MAIN BANNER */}
        <div className="relative overflow-hidden rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10 flex flex-col lg:block shadow-2xl">
          
          {/* BACKGROUND DECORATIVE RINGS */}
          <div className="absolute -left-10 -top-20 w-[300px] h-[300px] border-[30px] border-[#43c6e4]/5 rounded-full pointer-events-none" />
          <div className="absolute right-[20%] -bottom-32 w-[400px] h-[400px] border-[20px] border-[#43c6e4]/5 rounded-full pointer-events-none" />

          {/* CONTENT CONTAINER */}
          {/* lg:min-h... sets height only on desktop. On mobile, it grows naturally with content */}
          <div className="relative w-full h-full z-20 flex flex-col lg:block lg:min-h-[420px]">
            
            {/* LEFT CONTENT: Text Area */}
            {/* Mobile: Full Width. Desktop: 60% Width */}
            <div className="w-full lg:w-7/12 pl-6 md:pl-12 lg:pl-16 pr-6 pt-10 md:pt-12 lg:py-12 space-y-5 relative z-20">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
                {title} <span className="text-[#43c6e4]">{highlight}</span>
              </h2>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-lg opacity-80">
                {subtitle}
              </p>

              <div className="pt-4">
                <Button
                  onClick={primaryButtonAction}
                  className="bg-gradient-to-r from-[#43c6e4]/90 to-[#43c6e4] text-slate-900 rounded-xl px-8 md:px-10 py-6 text-base font-bold transition-all hover:scale-105 shadow-lg shadow-[#43c6e4]/20"
                >
                  {primaryButtonText}
                </Button>
              </div>
            </div>

            {/* RIGHT VISUAL: The Smart Positioning */}
            {/* 1. relative + mt-auto: On Mobile/Tablet, it sits NATURALLY below text and pushes to bottom.
               2. lg:absolute: On Desktop, it snaps out of flow to the bottom-right corner.
            */}
            <div className="
              relative mt-8 flex justify-end pointer-events-none
              lg:absolute lg:bottom-0 lg:right-0 lg:mt-0
            ">
              <img 
                src={BannerCTA} 
                alt="Interface Preview" 
                className="
                  object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]
                  /* Mobile/Tablet alignment adjustments */
                  translate-x-4 translate-y-2
                  /* Responsive Widths */
                  w-[260px]      /* Mobile */
                  sm:w-[320px]   /* Large Phone */
                  md:w-[400px]   /* Tablet */
                  lg:w-[500px]   /* Laptop */
                  xl:w-[600px]   /* Desktop */
                "
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;