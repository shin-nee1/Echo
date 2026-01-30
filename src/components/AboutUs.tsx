import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section className="relative py-32 bg-transparent">
      
      {/* BACKGROUND GLOW - Consistent with design language */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00d8ff]/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* IMAGE SIDE - Refined Glassmorphism */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-[#00d8ff]/30 shadow-2xl">
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                
                <span className="text-slate-500 font-bold text-sm tracking-[0.5em] uppercase opacity-40 group-hover:opacity-60 transition-opacity">
                  Our Identity
                </span>
              </div>
              
              {/* Subtle hover glow behind the card */}
              <div className="absolute -inset-4 bg-[#00d8ff]/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="order-1 lg:order-2">
            
            {/* MATCHING BRAND HEADER */}
            <div className="relative inline-block mb-16">
              <h2 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter leading-none uppercase">
                About <span className="text-[#00d8ff]">Us</span>
              </h2>
              
              {/* SIGNATURE GLOW BAR */}
              <div className="absolute -bottom-6 left-0 w-24 h-1.5 bg-[#00d8ff] rounded-full shadow-[0_0_20px_rgba(0,216,255,0.6)]" />
            </div>

            <div className="space-y-6">
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-90">
                Echo & Impact is built by creators, strategists, and engineers who take
                brands from idea to execution, and from presence to performance.
              </p>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-90">
                We unite design, development, and marketing into one intelligent system
                that amplifies what your brand stands for and delivers measurable growth.
              </p>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-90">
                No more juggling partners. We start with you and stay with you, 
                shaping every stage of your digital journey so you can focus on making an impact.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="mt-12">
              <Button 
                size="lg"
                className="bg-[#00d8ff] text-black hover:bg-[#00d8ff]/90 px-10 py-7 rounded-xl text-lg font-black uppercase tracking-tight shadow-[0_0_25px_rgba(0,216,255,0.3)] transition-all hover:scale-105 active:scale-95"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;