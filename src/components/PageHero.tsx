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
  className = "pt-24 sm:pt-32 lg:pt-36", // slightly smaller default spacing
}: PageHeroProps) => {
  return (
    <section
      className={`relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background gradient / blob */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[clamp(250px,45vw,550px)] h-[clamp(250px,45vw,550px)] bg-cyan/10 rounded-full blur-[120px] opacity-25" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Hero Title */}
        <h1 className="font-display text-[clamp(1.8rem,4vw,3rem)] md:text-[clamp(2rem,3.5vw,3.5rem)] lg:text-[clamp(2.2rem,3vw,4rem)] font-bold mb-4 md:mb-6 leading-tight">
          {title}
        </h1>

        {/* Hero Subtitle */}
        <p className="text-muted-foreground text-[clamp(0.9rem,2.5vw,1.125rem)] md:text-[clamp(1rem,2vw,1.25rem)] lg:text-[clamp(1.125rem,1.8vw,1.5rem)] max-w-2xl mx-auto mb-6 md:mb-8">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button
            size="lg"
            className="bg-cyan text-background hover:bg-cyan/90 glow-cyan px-6 sm:px-8 py-2 sm:py-3"
          >
            {ctaText}
          </Button>

          {secondaryCta && (
            <Button
              size="lg"
              variant="outline"
              className="border-cyan/50 text-cyan hover:bg-cyan/10 px-6 sm:px-8 py-2 sm:py-3"
            >
              {secondaryCta.text}
            </Button>
          )}
        </div>

        {/* Hero Image / Placeholder */}
        <div className="mt-12 sm:mt-16 max-w-[clamp(18rem,85vw,60rem)] mx-auto relative">
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
