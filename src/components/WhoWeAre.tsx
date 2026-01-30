import { Button } from "@/components/ui/button";

const WhoWeAre = () => {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE SIDE */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-cyan-500/30 shadow-2xl">
                <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                <span className="text-slate-500 font-display text-sm tracking-widest uppercase opacity-60">
                  Our Studio
                </span>
              </div>
              <div className="absolute -inset-4 bg-cyan-500/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="order-1 lg:order-2">
            {/* UPDATED HEADING: Matching font-weight and accent bar */}
            <div className="relative inline-block mb-12">
              <h2 className="text-white text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight uppercase">
                Who We <span className="text-[#00d8ff]">Are</span>
              </h2>
              {/* BRAND ACCENT BAR: Matching specific cyan and glow */}
              <div className="absolute -bottom-4 left-0 w-20 h-1.5 bg-[#00d8ff] rounded-full shadow-[0_0_20px_rgba(0,216,255,0.6)]" />
            </div>

            <div className="space-y-6">
              {/* FONT STYLE: Matching light/regular slate typography */}
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-85">
                Echo & Impact is built by creators, strategists, and engineers who take
                brands from idea to execution, and from presence to performance.
              </p>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-85">
                We unite design, development, and marketing into one intelligent system
                that amplifies what your brand stands for and delivers measurable growth.
              </p>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-85">
                No more juggling partners or agencies. We start with you and
                stay with you, shaping every stage of your digital journey.
              </p>
            </div>

            <div className="mt-12">
              {/* BUTTON STYLE: High contrast bold typography */}
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

export default WhoWeAre;