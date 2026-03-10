import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";
import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import ProcessSection, { type ProcessStepData } from "@/components/ProcessSection";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceNavigationBanner from "@/components/ServiceNavigationBanner";
import CTASection from "@/components/CTASection";

// ASSETS
import DISCOVERY from "@/assets/DiscoveryDesign.png";
import CONCEPT from "@/assets/ConceptDesign.png";
import CREATION from "@/assets/CreationDesign.png";
import REFINEMENT from "@/assets/RefinementDesign.png";
import DELIVERY from "@/assets/DeliveryDesign.png";

const Design = () => {
  // 1. Process Data - Fluid Asset Mapping
  const designSteps: ProcessStepData[] = [
    { 
      number: "1", 
      title: "Discovery", 
      description: "Clarifying your brand, audience, and goals.", 
      image: DISCOVERY 
    },
    { 
      number: "2", 
      title: "Concept", 
      description: "Defining creative direction and visual language.", 
      image: CONCEPT 
    },
    { 
      number: "3", 
      title: "Creation", 
      description: "Designing identity and core assets.", 
      image: CREATION 
    },
    { 
      number: "4", 
      title: "Refinement", 
      description: "Polishing details upon any feedback.", 
      image: REFINEMENT
    },
    { 
      number: "5", 
      title: "Delivery", 
      description: "Preparing final files, systems, and handover.", 
      image: DELIVERY
    }
  ];

  // 2. Services Data
  const designServices = [
    {
      title: "Brand Identity & Guidelines",
      items: [
        "Logo systems & typographic structure",
        "Color palettes & visual language",
        "Brand voice & messaging guidelines",
        "Complete brand guidelines for consistency",
        "Asset libraries & templates"
      ]
    },
    {
      title: "UI-UX Design",
      items: [
        "UX research & user journey flows",
        "Wireframes and layouts",
        "UI design systems & components",
        "Prototypes & usability structure",
        "Product UI/UX for web & mobile applications"
      ]
    },
    {
      title: "Creative Direction",
      items: [
        "Visual direction & mood boards",
        "Campaign concepts & content themes",
        "Art direction for shoots & productions",
        "Content frameworks & storytelling structure",
        "Style consistency across platforms"
      ]
    },
    {
      title: "Photography & Videography",
      items: [
        "Social media content shoot, creation & post edit",
        "Product, lifestyle, and brand photography",
        "Founder and team video content",
        "Short-form content direction & production",
        "Post editing, color grading, and delivery",
        "Podcast shoots & studio space"
      ]
    },
    {
      title: "Motion & Graphic Design",
      items: [
        "Motion graphics & brand animations",
        "Social media graphics & digital collateral",
        "Explainers, transitions, and visual effects",
        "Campaign graphics & promotional material"
      ]
    }
  ];

  return (
    <ServicePageLayout>
      <div className="flex flex-col gap-[clamp(4rem, 12vh, 10rem)]">
        
        {/* WRAPPER TO FORCE SUBTITLE WHITE */}
        <div className="[&_p]:!text-white [&_h3]:!text-white">
          <PageHero
            title={
              <> 
                We shape how the <span className="text-[#47c2d2]">world</span> sees,
                <br className="hidden md:block" /> 
                understands, and <span className="text-[#47c2d2]">experiences</span> your brand. 
              </> 
            }
            subtitle="Great design isn't decoration. It's direction."
            ctaText="Shape your Next Move"
          />
        </div>

        <InfoSection
          title="What is"
          highlight="Design?"
          paragraphs={[
            "At Echo & Impact, design goes far beyond visuals, it's the strategic foundation that defines how your brand communicates and behaves, and is experienced across every interaction",
            "We build complete visual systems: from brand identity and creative direction to product UI/UX, content design, and campaign aesthetics. Every element is crafted with intention, ensuring your brand looks consistent, feels unified, and communicates with clarity across all touchpoints.",
            "Whether we’re shaping a brand from the ground up or elevating an existing one, our focus remains the same, design that creates recognition, builds trust, guides user behavior, and sets the direction for everything that follows."
          ]}
        />

        <ProcessSection 
          title="Design" 
          highlight="Process" 
          steps={designSteps} 
        />

        <ServicesGrid 
          title="Design" 
          highlight="Services" 
          services={designServices} 
        />

        <PortfolioSection />

        <ServiceNavigationBanner
          titlePrefix="Interested In"
          highlight1="Development"
          middleText="Or"
          highlight2="Marketing"
          leftBtnText="Explore Development"
          leftBtnLink="/develop"
          rightBtnText="Explore Marketing"
          rightBtnLink="/market"
        />

        {/* WRAPPER TO FORCE CTA SUBTITLE WHITE */}
        <div className="[&_p]:!text-white">
  <CTASection
    title="Let's Shape Your"
    highlight="Brand"
    subtitle="We shape how the world Sees, Understands, And Experiences Your Brand."
    primaryButtonText="Let's Shape Your Brand" // <-- Add your custom text here
  />
</div>
      </div>
    </ServicePageLayout>
  );
};

export default Design;