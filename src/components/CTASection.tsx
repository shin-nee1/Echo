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
  imageSrc, 
}: CTASectionProps) => {
  return (
    <section className="relative py-12 px-6 bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-7xl relative">
        
        {/* MAIN BANNER: Slender height, wide aspect, and transparent glass effect */}
        <div className="relative overflow-hidden rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10 min-h-[380px] md:h-[420px] flex items-center shadow-2xl">
          
          {/* BACKGROUND DECORATIVE RINGS (Brand Identity) */}
          <div className="absolute -left-10 -top-20 w-[300px] h-[300px] border-[30px] border-[#43c6e4]/5 rounded-full pointer-events-none" />
          <div className="absolute right-[20%] -bottom-32 w-[400px] h-[400px] border-[20px] border-[#43c6e4]/5 rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center w-full z-10 h-full">
            
            {/* LEFT CONTENT: 7-column span for wider text area */}
            <div className="lg:col-span-7 pl-10 md:pl-16 pr-6 py-12 space-y-5">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white tracking-tight">
                {title} <span className="text-[#43c6e4]">{highlight}</span>
              </h2>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-lg opacity-80">
                {subtitle}
              </p>

              <div className="pt-2">
                <Button
                  onClick={primaryButtonAction}
                  className="bg-gradient-to-r from-[#43c6e4]/90 to-[#43c6e4] text-slate-900 rounded-xl px-10 py-6 text-base font-bold transition-all hover:scale-105 shadow-lg shadow-[#43c6e4]/20"
                >
                  {primaryButtonText}
                </Button>
              </div>
            </div>

            {/* RIGHT VISUAL: 5-column span, moved to the bottom-right corner */}
            <div className="lg:col-span-5 h-full relative flex items-end justify-end self-end">
              <div className="relative w-full max-w-[550px] translate-y-6 translate-x-4">
                {/* Image placeholder with drop shadow to pop against transparency */}
                <img 
                  src={BannerCTA} 
                  alt="Interface Preview" 
                  className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;