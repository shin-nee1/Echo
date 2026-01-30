import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";
import PageHero from "@/components/PageHero";
import InfoSectionTWO from "@/components/InfoSectionTWO";
import ProcessSection from "@/components/ProcessSection";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceNavigationBanner from "@/components/ServiceNavigationBanner";
import CTASection from "@/components/CTASection";

const Develop = () => {
  // 1. Development Process Data
  const developSteps = [
    { number: "1", title: "Discovery", description: "Understanding requirements, user needs, and technical specs.", icon: "🔍" },
    { number: "2", title: "Wireframes", description: "Creating detailed UI wireframes before development begins.", icon: "📐" },
    { number: "3", title: "Build", description: "Expert developers bring your project to life with clean code.", icon: "💻" },
    { number: "4", title: "QA Testing", description: "Rigorous testing ensures flawlessness across all devices.", icon: "🧪" },
    { number: "5", title: "Launch", description: "Smooth deployment and monitoring for optimal performance.", icon: "🚀" }
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
      <PageHero
        title={
          <>
            We Build The <span className="text-cyan">Digital Experiences</span> That<br />
            Bring Your <span className="text-cyan">Brand</span> To Life.
          </>
        }
        subtitle="Development Isn't Just Code. It's Craftsmanship."
        ctaText="Start Your Development Project"
      />

      <InfoSectionTWO
        title="What is"
        highlight="Develop?"
        paragraphs={[
          "At Echo & Impact, development is the art of turning ideas into functional digital products. It is where design meets technology to create experiences that users love.",
          "Our development process focuses on clean code, scalable architecture, and user-centric solutions that grow seamlessly with your business needs.",
          "From high-speed websites to complex enterprise applications, we build digital products that are fast, reliable, and engineered to last."
        ]}
      />

      {/* STEP 1: HOW WE DO IT (Process) */}
      <ProcessSection 
        title="Development" 
        highlight="Process" 
        steps={developSteps} 
      />

      {/* STEP 2: WHAT WE DO (Services) */}
      <ServicesGrid 
        title="Development" 
        highlight="Services" 
        services={developServices} 
      />

      <PortfolioSection />

      {/* Cross-navigating to Design and Marketing */}
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