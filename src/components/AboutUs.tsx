import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    // REMOVED 'overflow-hidden' to prevent the background line/clip
    // bg-transparent ensures the background from other sections flows through
    <section className="relative py-24 bg-transparent">
      
      {/* UNIFORM BACKGROUND - Minimal glow to match other sections */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan/5 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE - Matching your card style */}
          <div className="relative">
            <div className="card-glass aspect-[4/3] flex items-center justify-center border border-white/10 bg-white/[0.02]">
              <span className="text-muted-foreground opacity-50">Who We Are</span>
            </div>
          </div>

          {/* CONTENT - Simple and Uniform */}
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8 tracking-tight">
              ABOUT <span className="text-cyan">US</span>
            </h2>

            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                Echo & Impact is built by creators, strategists, and engineers who take
                brands from idea to execution, and from presence to performance.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We unite design, development, and marketing into one intelligent system
                that amplifies what your brand stands for and delivers measurable growth.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                No more juggling partners, freelancers, or agencies. We start with you and
                stay with you, shaping every stage of your digital journey.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                We combine creative insight with technical precision to keep your brand
                consistent, adaptive, and ready for what’s next.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="cyan" size="lg">
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