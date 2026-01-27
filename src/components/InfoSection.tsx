import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";
import type { ReactNode } from "react";

interface InfoSectionProps {
  title: string;
  highlight: string;
  paragraphs: string[];
  imagePlaceholder?: string;
  imagePosition?: "left" | "right";
  ctaText?: string;
  ctaLink?: string;
  children?: ReactNode;
  className?: string;
}

const InfoSection = ({
  title,
  highlight,
  paragraphs,
  imagePlaceholder = "Image Placeholder",
  imagePosition = "right",
  ctaText,
  ctaLink = "#",
  children,
  className = "",
}: InfoSectionProps) => {
  const textContent = (
    <div>
      <SectionHeader title={title} highlight={highlight} centered={false} />
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-muted-foreground mb-6 last:mb-0">
          {paragraph}
        </p>
      ))}
      {ctaText && (
        <Button className="bg-cyan text-background hover:bg-cyan/90 mt-2">
          {ctaText}
        </Button>
      )}
      {children}
    </div>
  );

  const imageContent = (
    <div className="aspect-square bg-card/50 rounded-2xl border border-border/50 flex items-center justify-center">
      <span className="text-muted-foreground">{imagePlaceholder}</span>
    </div>
  );

  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {imagePosition === "left" ? (
            <>
              <div className="order-2 lg:order-1">{imageContent}</div>
              <div className="order-1 lg:order-2">{textContent}</div>
            </>
          ) : (
            <>
              {textContent}
              {imageContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;