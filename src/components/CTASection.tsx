import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  highlight: string;
  subtitle: string;
}

const CTASection = ({ title, highlight, subtitle }: CTASectionProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {title} <span className="text-cyan">{highlight}</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan text-background hover:bg-cyan/90 glow-cyan px-8">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-cyan/50 text-cyan hover:bg-cyan/10">
              Schedule a Call
            </Button>
          </div>

          {/* Bottom info */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div>
              <div className="text-2xl font-display font-bold text-cyan">100+</div>
              <div className="text-muted-foreground text-sm">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-cyan">50+</div>
              <div className="text-muted-foreground text-sm">Clients</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-cyan">5+</div>
              <div className="text-muted-foreground text-sm">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
