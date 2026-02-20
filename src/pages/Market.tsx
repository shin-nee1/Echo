import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";
import PageHero from "@/components/PageHero";
import InfoSection from "@/components/InfoSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesGrid from "@/components/ServicesGrid";
import PortfolioSection from "@/components/PortfolioSection";
import ServiceNavigationBanner from "@/components/ServiceNavigationBanner";
import CTASection from "@/components/CTASection";

// --- IMAGE IMPORTS ---
import marketImg1 from "@/assets/image-removebg-preview (16).png";
import marketImg2 from "@/assets/image-removebg-preview (17).png";
import marketImg3 from "@/assets/image-removebg-preview (18).png";
import marketImg4 from "@/assets/image-removebg-preview (19).png";
import marketImg5 from "@/assets/image-removebg-preview (20).png";

const Market = () => {
  // 1. Marketing Process Data with Images
  const marketSteps = [
    { 
      number: "01", 
      title: "Discovery", 
      description: "Clarifying your brand, audience and goals.", 
      image: marketImg1 
    },
    { 
      number: "02", 
      title: "Setup", 
      description: "Setting up your platforms, tracking and assets.", 
      image: marketImg2 
    },
    { 
      number: "03", 
      title: "Execution", 
      description: "Launching your campaigns and content with precision.", 
      image: marketImg3 
    },
    { 
      number: "04", 
      title: "Optimization", 
      description: "Refining creative, targeting, and strategy based on real data.", 
      image: marketImg4 
    },
    { 
      number: "05", 
      title: "Reporting", 
      description: "Providing clear insights, actions and next steps for growth.", 
      image: marketImg5 
    }
  ];

  // 2. Marketing Services Data - Updated to match 6 cards from image
  const marketServices = [
    {
      title: "Paid Social Media",
      items: [
        "Meta, Google, TikTok, and YouTube ads",
        "Full-funnel campaign structure",
        "Creative testing frameworks",
        "Audience & competition research and targeting strategy",
        "Budget planning, spending, and pacing"
      ]
    },
    {
      title: "Social Media Management",
      items: [
        "Content planning & monthly calendars",
        "Short-form video, post, content creation and direction",
        "Caption writing and brand voice",
        "Community management & audience engagement",
        "Design, editing, and scheduled publishing"
      ]
    },
    {
      title: "SEO & Content Strategy",
      items: [
        "Technical SEO audits",
        "Keyword research & content mapping",
        "On-page optimization",
        "Blog & content strategy",
        "Backlink & authority-building roadmap",
        "Performance reporting & ranking insights"
      ]
    },
    {
      title: "Email & SMS Marketing",
      items: [
        "Flows & automations",
        "Campaign planning & segmentation",
        "Copywriting & creative",
        "Deliverability optimization",
        "Reporting & lifecycle analysis"
      ]
    },
    {
      title: "Analytics & Tracking",
      items: [
        "GA4 setup & event configuration",
        "Pixel & conversion tracking (Meta, TikTok, Google)",
        "CAPI integrations",
        "Attribution setup & funnel tracking",
        "Dashboards & performance insights"
      ]
    },
    {
      title: "Creative Optimization",
      items: [
        "Variant-based creative testing",
        "Data-led design & messaging adjustments",
        "Performance insights for scaling",
        "Ad creative refinement frameworks",
        "Thumbnail, hook, layout, and copy iterations"
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