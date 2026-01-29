import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

interface PageHeroProps {
  title: ReactNode;
  subtitle: string;
  ctaText: string;
  ctaLink?: string;
  secondaryCta?: {
    text: string;
    link?: string;
  };
  imagePlaceholder?: string;
  floatingElement?: ReactNode;
  className?: string; // allows custom top spacing per page
}

const PageHero = ({
  title,
  subtitle,
  ctaText,
  ctaLink = "#",
  secondaryCta,
  imagePlaceholder = "Hero Image Placeholder",
  floatingElement,
  className = "pt-24 sm:pt-32 lg:pt-40", // default responsive top spacing
}: PageHeroProps) => {
  return (
    <section
      className={`relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background gradients / blobs */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[clamp(300px,50vw,600px)] h-[clamp(300px,50vw,600px)] bg-cyan/10 rounded-full blur-[150px] opacity-30" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Hero Title */}
        <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] md:text-[clamp(3rem,5vw,5rem)] lg:text-[clamp(3.5rem,5vw,6rem)] font-bold mb-6 leading-tight">
          {title}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-muted-foreground text-[clamp(1rem,2.5vw,1.25rem)] md:text-lg lg:text-xl max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-cyan text-background hover:bg-cyan/90 glow-cyan px-8"
          >
            {ctaText}
          </Button>

          {secondaryCta && (
            <Button
              size="lg"
              variant="outline"
              className="border-cyan/50 text-cyan hover:bg-cyan/10"
            >
              {secondaryCta.text}
            </Button>
          )}
        </div>

        {/* Hero Image / Placeholder */}
        <div className="mt-16 max-w-[clamp(20rem,85vw,64rem)] mx-auto relative">
          <div className="aspect-video bg-card/50 rounded-2xl border border-border/50 flex items-center justify-center overflow-hidden">
            <span className="text-muted-foreground">{imagePlaceholder}</span>
          </div>

          {/* Optional floating element */}
          {floatingElement && (
            <div className="absolute">{floatingElement}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
