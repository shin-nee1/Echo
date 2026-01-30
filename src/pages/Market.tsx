import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";
import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceNavigationBanner from "@/components/ServiceNavigationBanner";
import CTASection from "@/components/CTASection";

const Market = () => {
  // 1. Marketing Process Data
  const marketSteps = [
    { number: "1", title: "Discovery", description: "Clarifying your brand, audience and goals.", icon: "📊" },
    { number: "2", title: "Setup", description: "Setting up your platforms, tracking and assets.", icon: "🎯" },
    { number: "3", title: "Execution", description: "Launching your campaingns and content with precision.", icon: "📢" },
    { number: "4", title: "Optimization", description: "Refining creative, targeting, and strategy based on real data.", icon: "📈" },
    { number: "5", title: "Reporting", description: "Providing clear insights, actions and next steps for growth.", icon: "💰" }
  ];

  // 2. Marketing Services Data
  const marketServices = [
    {
      title: "Growth Strategy",
      items: [
        "Market positioning & competitor analysis",
        "Target audience profiling & segmentation",
        "Conversion rate optimization (CRO)",
        "Funnel architecture & lead gen strategy",
        "Brand growth roadmaps"
      ]
    },
    {
      title: "Content Marketing",
      items: [
        "Social media strategy & management",
        "Copywriting & narrative storytelling",
        "Email marketing & automation flows",
        "SEO-driven blog & editorial content",
        "Video content distribution strategy"
      ]
    },
    {
      title: "Paid Media & Ads",
      items: [
        "Meta Ads (Instagram & Facebook)",
        "Google Search & Display Ads",
        "LinkedIn B2B lead generation",
        "TikTok for Business & creative testing",
        "Budget management & ROI reporting"
      ]
    },
    {
      title: "Influencer & PR",
      items: [
        "Influencer sourcing & management",
        "Brand partnership opportunities",
        "Press release & media outreach",
        "Community building & engagement",
        "Event marketing & activation support"
      ]
    },
    {
      title: "Performance Data",
      items: [
        "Custom analytics dashboards",
        "A/B testing & heat-mapping",
        "Monthly performance reports",
        "Attribution modeling & tracking",
        "Data-driven scaling recommendations"
      ]
    }
  ];

  return (
    <ServicePageLayout>
      <PageHero
        title={
          <>
            We Scale How The <span className="text-cyan">World</span> Finds,<br />
            Follows, And <span className="text-cyan">Invests</span> In Your Brand.
          </>
        }
        subtitle="Marketing Isn't Noise. It's Precision."
        ctaText="Scale your Next Move"
      />

      <InfoSection
        title="What is"
        highlight="Marketing?"
        paragraphs={[
          "At Echo & Impact, marketing is more than just visibility—it is the strategic engine that drives attention, converts interest, and builds long-term brand authority.",
          "From performance-led paid media to narrative-driven content strategy, we ensure every campaign is backed by data and executed with creative excellence.",
          "Our focus remains: marketing that creates impact, fuels growth, and ensures your brand is not just seen, but remembered and chosen."
        ]}
      />

      {/* STEP 1: HOW WE DO IT (Process) */}
      <ProcessSection 
        title="Marketing" 
        highlight="Process" 
        steps={marketSteps} 
      />

      {/* STEP 2: WHAT WE DO (Services) */}
      <ServicesGrid 
        title="Marketing" 
        highlight="Services" 
        services={marketServices} 
      />

      <PortfolioSection />

      {/* Cross-navigating to Design and Development */}
      <ServiceNavigationBanner
        titlePrefix="Interested In"
        highlight1="Design"
        middleText="Or"
        highlight2="Development"
        leftBtnText="Explore Design"
        leftBtnLink="/design"
        rightBtnText="Explore Development"
        rightBtnLink="/development"
      />

      <CTASection
        title="Let's Scale Your"
        highlight="Impact"
        subtitle="We scale how the world Finds, Follows, And Invests In Your Brand."
      />
    </ServicePageLayout>
  );
};

export default Market;