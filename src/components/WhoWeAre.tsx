import { Button } from "@/components/ui/button";

const WhoWeAre = () => {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* REMOVED: Local background glow div. 
         This prevents the "clashing" with your global HaloBackground.
      */}

      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE SIDE */}
          <div className="relative order-2 lg:order-1">
            {/* The main card is now more transparent to let the grid shine through */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-cyan/30 shadow-2xl">
                {/* Internal grid for texture */}
                <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                
                <span className="text-slate-500 font-display text-sm tracking-widest uppercase opacity-60">
                  Our Studio
                </span>
              </div>
              
              {/* Decorative accent: A subtle glow behind the image that feels unified */}
              <div className="absolute -inset-4 bg-cyan/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-8 text-white">
              Who We <span className="text-cyan drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">Are</span>
            </h2>

            <div className="space-y-6">
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                Echo & Impact is built by creators, strategists, and engineers who take
                brands from idea to execution, and from presence to performance.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed font-light">
                We unite design, development, and marketing into one intelligent system
                that amplifies what your brand stands for and delivers measurable growth.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed font-light">
                No more juggling partners or agencies. We start with you and
                stay with you, shaping every stage of your digital journey so you can focus
                on making the impact, while we turn ideas into results.
              </p>
            </div>

            <div className="mt-10">
              <Button 
                size="lg"
                className="bg-cyan text-black hover:bg-cyan/90 px-10 py-7 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all hover:scale-105"
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

export default WhoWeAre;