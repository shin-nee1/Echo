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
      title: "Discovery", 
      description: "Clarifying goals, requirements, and the technical scope.", 
      image: DISCOVERY 
    },
    { 
      number: "2", 
      title: "Wireframes (UX)", 
      description: "Structuring user flows, layouts, and core functionality.", 
      image: WIREFRAMES 
    },
    { 
      number: "3", 
      title: "Visual Design (UI)", 
      description: " Defining the theme and the complete visual system.", 
      image: VISUAL
    },
    { 
      number: "4", 
      title: "Build", 
      description: " Developing front-end, backend and integrations.", 
      image: BUILD
    },
    { 
      number: "5", 
      title: "Quality Assurance", 
      description: " Testing performance, functionality, and reliability.", 
      image: QUALITY 
    },
    { 
      number: "6", 
      title: "Launch", 
      description: "Introducing the product to the world.", 
      image: LAUNCH
    },
    { 
      number: "7", 
      title: "Warranty", 
      description: "Providing post-launch support for stability.", 
      image: WARRANTY
    }
  ];

  // 2. Development Services Data
  const developServices = [
    {
      title: "Website Development",
      items: [
        "Custom high-performance websites",
        "Responsive and mobile-optimized builds",
        "High-performance front-end & back-end architecture",
        "CMS setup and content structuring",
        "Landing pages, funnels, and multi-page sites"
      ]
    },
    {
      title: "Shopify Development",
      items: [
        "Shopify store setup & theme customization",
        "Product, collection, and inventory structure",
        "Conversion-optimized storefront design",
        "Shopify apps & third-party integrations",
        "Checkout optimization & fulfilment setup"
      ]
    },
    {
      title: "Web Application Development",
      items: [
        "Custom dashboards & user portals",
        "API development & integrations",
        "Feature-driven and scalable architecture",
        "Real-time systems & backend logic",
        "Admin, reporting, and analytics tools"
      ]
    },
    {
      title: "Mobile Application Development",
      items: [
        "iOS & Android application development",
        "App UI integration and interaction flows",
        "API connectivity & backend structure",
        "Performance optimization & device testing",
        "App deployment & store submission"
      ]
    },
    {
      title: "CRO & Speed Optimization",
      items: [
        "Website speed improvement (Core Web Vitals)",
        "Conversion audits & heatmap reviews",
        "Funnel and landing page optimizations",
        "A/B testing strategy & execution",
        "Performance reporting & continuous refinement"
      ]
    }
  ];

  return (
    <ServicePageLayout>
      <div className="[&_p]:!text-white [&_h3]:!text-white">
  <PageHero
    title={
      <>
        We build the <span className="text-[#47c2d2]">digital experiences</span> that<br />
        bring your <span className="text-[#47c2d2]">brand</span> to life.
      </>
    }
    subtitle="Development isn't just code. It's craftsmanship."
    ctaText="Build it →"
  />
</div>

      <InfoSectionTWO
        title="What is"
        highlight="Develop?"
        paragraphs={[
          "At Echo & Impact, development is where ideas turn into functional, scalable, and high-performing digital products. It’s the bridge between design, user experience, and real-world interaction. Built with precision, stability, and long-term growth in mind.",
          "We develop websites, Shopify stores, mobile apps, web applications, and conversion-driven digital platforms. Everything we build is engineered to load fast, scale easily, and integrate seamlessly with your brand’s broader ecosystem.",
          "Whether you need a high-performance website, a custom platform, or a full-scale product build, our focus remains the same, development that’s reliable, intuitive, and built for results."
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