import ServicePageLayout from "@/components/ServicePageLayout";
import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesGrid from "@/components/ServicesGrid"; // Grid comes after Process now
import PortfolioSection from "@/components/PortfolioSection";
import ServiceNavigationBanner from "@/components/ServiceNavigationBanner";
import CTASection from "@/components/CTASection";

const Design = () => {
  // 1. Process Data
  const designSteps = [
    { number: "1", title: "Discovery", description: "Clarifying your brand, audience, and goals.", icon: "🔍" },
    { number: "2", title: "Concept", description: "Defining creative direction and visual language.", icon: "💡" },
    { number: "3", title: "Creation", description: "Designing identity and core assets.", icon: "🎨" },
    { number: "4", title: "Refinement", description: "Polishing details upon any feedback.", icon: "💬" },
    { number: "5", title: "Delivery", description: "Preparing final files, systems, and handover.", icon: "🚀" }
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
      title: "UI/UX Design",
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
        "Post editing, color grading, and delivery"
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
      <PageHero
        title={
          <>
            We Shape How The <span className="text-cyan">World</span> Sees,<br />
            Understands, And <span className="text-cyan">Experiences</span> Your Brand.
          </>
        }
        subtitle="Great Design Isn't Decoration. It's Direction."
        ctaText="Shape your Next Move"
      />

      <InfoSection
        title="What is"
        highlight="Design?"
        paragraphs={[
          "At Echo & Impact, design goes far beyond visuals—it's the strategic foundation that defines how your brand communicates and behaves.",
          "From brand identity to product UI/UX, every element is crafted with intention to ensure your brand looks consistent and feels unified.",
          "Our focus remains: design that creates recognition, builds trust, and sets the direction for everything that follows."
        ]}
      />

      {/* STEP 1: HOW WE DO IT (Process) */}
      <ProcessSection 
        title="Design" 
        highlight="Process" 
        steps={designSteps} 
      />

      {/* STEP 2: WHAT WE DO (Services) */}
      <ServicesGrid 
        title="Design" 
        highlight="Services" 
        services={designServices} 
      />
      <PortfolioSection/>
      <ServiceNavigationBanner
      titlePrefix="Interested In"
      highlight1="Development"
      middleText="Or"
      highlight2="Marketing"
      leftBtnText="Explore Development"
      leftBtnLink="/development"
      rightBtnText="Explore Marketing"
      rightBtnLink="/marketing"
      />
      <CTASection
          title="Let's Shape Your"
          highlight="Brand"
          subtitle="We shape how the world Sees, Understands, And Experiences Your Brand."
        />


    </ServicePageLayout>
  );
};

export default Design;