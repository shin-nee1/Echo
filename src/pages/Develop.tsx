import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";
import PageHero from "@/components/PageHero";
import InfoSectionTWO from "@/components/InfoSectionTWO";
import ProcessSection, { type ProcessStepData } from "@/components/ProcessSection";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceNavigationBanner from "@/components/ServiceNavigationBanner";
import CTASection from "@/components/CTASection";

// ASSETS (Ensure these files exist in your assets folder)
import DISCOVERY from "@/assets/DiscoverDevelop.png";
import WIREFRAMES from "@/assets/WireframeDevelop.png";
import VISUAL from "@/assets/VisualDvelop.png";
import BUILD from "@/assets/BuildDevelop.png";
import QUALITY from "@/assets/QualityDevelop.png";
import LAUNCH from "@/assets/LaunchDevelop.png";
import WARRANTY from "@/assets/WarrantyDevelop.png";


const Develop = () => {
  // 1. Process Data - Matching the visual structure of the Design page
  const developSteps: ProcessStepData[] = [
    { 
      number: "1", 
      title: "Discover", 
      description: "Understanding requirements, user needs, and technical specs.", 
      image: DISCOVERY 
    },
    { 
      number: "2", 
      title: "Wireframes", 
      description: "Creating detailed UI wireframes before development begins.", 
      image: WIREFRAMES 
    },
    { 
      number: "3", 
      title: "Visual Design", 
      description: "Expert developers bring your project to life with clean code.", 
      image: VISUAL
    },
    { 
      number: "4", 
      title: "Build", 
      description: "Rigorous testing ensures flawlessness across all devices.", 
      image: BUILD
    },
    { 
      number: "5", 
      title: "Quality Assurance", 
      description: "Smooth deployment and monitoring for optimal performance.", 
      image: QUALITY 
    },
    { 
      number: "6", 
      title: "Launch", 
      description: "Understanding requirements, user needs, and technical specs.", 
      image: LAUNCH
    },
    { 
      number: "7", 
      title: "Warranty", 
      description: "Understanding requirements, user needs, and technical specs.", 
      image: WARRANTY
    }
  ];

  // 2. Development Services Data
  const developServices = [
    {
      title: "Website Development",
      items: [
        "Custom high-performance websites",
        "CMS Integration (Headless & Traditional)",
        "E-commerce & Storefront solutions",
        "SEO-friendly architecture",
        "Responsive & accessible design"
      ]
    },
    {
      title: "Mobile App Development",
      items: [
        "Native iOS & Android development",
        "Cross-platform (React Native / Flutter)",
        "Mobile UI/UX implementation",
        "App Store & Play Store deployment",
        "Push notifications & API sync"
      ]
    },
    {
      title: "Desktop Applications",
      items: [
        "Cross-platform (Windows, Mac, Linux)",
        "Native performance & system integration",
        "Offline-first capability",
        "Secure enterprise software",
        "Automated update systems"
      ]
    },
    {
      title: "API & Backend Systems",
      items: [
        "RESTful & GraphQL API development",
        "Microservices architecture",
        "Database design & optimization",
        "Third-party system integrations",
        "Cloud infrastructure & DevOps"
      ]
    },
    {
      title: "Data & Automation",
      items: [
        "ETL pipelines & data processing",
        "Enterprise-grade automation",
        "Custom reporting & analytics",
        "Legacy system modernization",
        "Scalable cloud batch processing"
      ]
    }
  ];

  return (
    <ServicePageLayout>
      <div className="[&_p]:!text-white [&_h3]:!text-white">
  <PageHero
    title={
      <>
        We Build The <span className="text-[#47c2d2]">Digital Experiences</span> That<br />
        Bring Your <span className="text-[#47c2d2]">Brand</span> To Life.
      </>
    }
    subtitle="Development Isn't Just Code. It's Craftsmanship."
    ctaText="Start Your Development Project"
  />
</div>

      <InfoSectionTWO
        title="What is"
        highlight="Develop?"
        paragraphs={[
          "At Echo & Impact, development is the art of turning ideas into functional digital products. It is where design meets technology to create experiences that users love.",
          "Our development process focuses on clean code, scalable architecture, and user-centric solutions that grow seamlessly with your business needs.",
          "From high-speed websites to complex enterprise applications, we build digital products that are fast, reliable, and engineered to last."
        ]}
      />

      {/* MATCHED PROCESS SECTION */}
      <ProcessSection 
        title="Development" 
        highlight="Process" 
        steps={developSteps} 
      />

      <ServicesGrid 
        title="Development" 
        highlight="Services" 
        services={developServices} 
      />

      <PortfolioSection />

      {/* Updated Navigation Banner to lead back to Design and Market */}
      <ServiceNavigationBanner
        titlePrefix="Interested In"
        highlight1="Design"
        middleText="Or"
        highlight2="Marketing"
        leftBtnText="Explore Design"
        leftBtnLink="/design"
        rightBtnText="Explore Marketing"
        rightBtnLink="/market"
      />

      <CTASection
        title="Let's Build What Brings Your"
        highlight="Ideas To Life"
        subtitle="Development Isn't Just Code. It's Craftsmanship."
      />
    </ServicePageLayout>
  );
};

export default Develop;