import { Button } from "../components/ui/button";

interface CTASectionProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
}

const CTASection = ({
  title = "Let's Create Your",
  highlight = "Impact",
  subtitle = "We shape how the world experiences your brand.",
  primaryButtonText = "Start Your Project",
  primaryButtonAction,
}: CTASectionProps) => {
  return (
    // Changed py to match the spacing you requested to move the section down
    <section className="relative pt-25 pb-24 px-6 bg-transparent">
      <div className="container mx-auto max-w-6xl relative">
        
        {/* MAIN CARD: Matches image_d6c520.jpg */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#06161a] via-[#040d10] to-[#020506] border border-white/5 p-10 md:p-20 shadow-2xl">
          
          {/* DECORATIVE BACKGROUND RINGS (The "Echo" Effect) */}
          {/* Top Left Echo */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border-[15px] border-cyan/10 rounded-full pointer-events-none" />
          
          {/* Bottom Right Echo - Large Arcs */}
          <div className="absolute -bottom-12 -right-12 w-64 h-64 border-t-[2px] border-l-[2px] border-cyan/10 rounded-full pointer-events-none opacity-40" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 border-t-[2px] border-l-[2px] border-cyan/5 rounded-full pointer-events-none opacity-20" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              <h2 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] text-white tracking-tight">
                {title} <br />
                <span className="text-cyan">{highlight}</span>
              </h2>

              <p className="text-muted-foreground text-xl leading-relaxed max-w-sm">
                {subtitle}
              </p>

              <div className="pt-4">
                <Button
                  onClick={primaryButtonAction}
                  size="lg"
                  variant="cyan"
                  className="rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all"
                >
                  {primaryButtonText}
                </Button>
              </div>
            </div>

            {/* RIGHT VISUAL: The Stacked Card UI */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Ghost Cards (The "Echo" layers) */}
              <div className="absolute top-4 right-2 w-[90%] h-full bg-slate-900/40 rounded-3xl border border-white/5 -z-10 translate-x-4" />
              
              {/* Primary Card UI */}
              <div className="relative w-full max-w-[450px] bg-[#020817]/90 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-16">
                  <div className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-cyan shadow-[0_0_15px_rgba(0,255,255,0.6)]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">echo & impact</span>
                  
                  {/* Window Controls Decor */}
                  <div className="ml-auto flex gap-2">
                     <div className="w-6 h-1 bg-white/5 rounded-full" />
                     <div className="w-6 h-1 bg-white/5 rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-6 py-10 text-center">
                  <h3 className="text-3xl font-bold text-white leading-tight">
                    We Shape How The <br />
                    <span className="text-white/90">World Sees Your</span> <br />
                    Brand.
                  </h3>
                  <div className="w-32 h-1.5 bg-cyan/30 rounded-full mx-auto" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;