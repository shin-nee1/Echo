import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHero from "./PageHero";
import InfoSection from "./InfoSection";
import ProcessSection from "./ProcessSection";
import type { ProcessStepData } from "./ProcessSection";
import ServicesGrid from "./ServicesGrid";
import type { ServiceData } from "./ServicesGrid";
import PortfolioSection from "./PortfolioSection";
import CrossSellCTA from "./CrossSellCTA";
import CTASection from "./CTASection";

interface ServicePageLayoutProps {
  // Hero
  heroTitle: ReactNode;
  heroSubtitle: string;
  heroCta: string;
  heroImagePlaceholder?: string;
  
  // Info Section
  infoTitle: string;
  infoHighlight: string;
  infoParagraphs: string[];
  infoImagePlaceholder?: string;
  
  // Process Section
  processTitle: string;
  processHighlight: string;
  processSubtitle?: string;
  processSteps: ProcessStepData[];
  
  // Services Section
  servicesTitle: string;
  servicesHighlight: string;
  servicesSubtitle?: string;
  services: ServiceData[];
  
  // Cross Sell
  crossSellTitle: string;
  crossSellLinks: { text: string; href: string }[];
  
  // Final CTA
  ctaTitle: string;
  ctaHighlight: string;
  ctaSubtitle: string;
}

const ServicePageLayout = ({
  heroTitle,
  heroSubtitle,
  heroCta,
  heroImagePlaceholder,
  infoTitle,
  infoHighlight,
  infoParagraphs,
  infoImagePlaceholder,
  processTitle,
  processHighlight,
  processSubtitle,
  processSteps,
  servicesTitle,
  servicesHighlight,
  servicesSubtitle,
  services,
  crossSellTitle,
  crossSellLinks,
  ctaTitle,
  ctaHighlight,
  ctaSubtitle,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title={heroTitle}
        subtitle={heroSubtitle}
        ctaText={heroCta}
        imagePlaceholder={heroImagePlaceholder}
      />

      <InfoSection
        title={infoTitle}
        highlight={infoHighlight}
        paragraphs={infoParagraphs}
        imagePlaceholder={infoImagePlaceholder}
      />

      <ProcessSection
        title={processTitle}
        highlight={processHighlight}
        subtitle={processSubtitle}
        steps={processSteps}
      />

      <ServicesGrid
        title={servicesTitle}
        highlight={servicesHighlight}
        subtitle={servicesSubtitle}
        services={services}
      />

      <PortfolioSection />

      <CrossSellCTA title={crossSellTitle} links={crossSellLinks} />

      <CTASection
        title={ctaTitle}
        highlight={ctaHighlight}
        subtitle={ctaSubtitle}
      />

      <Footer />
    </div>
  );
};

export default ServicePageLayout;