import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  subtitle: string;
}

const HeroSection = ({ titleStart, titleHighlight, titleEnd, subtitle }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] opacity-30" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {titleStart}{" "}
          <span className="text-cyan">{titleHighlight}</span>
          {titleEnd && ` ${titleEnd}`}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-cyan text-background hover:bg-cyan/90 glow-cyan px-8">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-cyan/50 text-cyan hover:bg-cyan/10">
            Learn More
          </Button>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="aspect-video bg-card/50 rounded-2xl border border-border/50 flex items-center justify-center">
            <span className="text-muted-foreground">Hero Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
