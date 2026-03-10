import React from "react";
import IndexHero from "@/components/IndexHero"; // Adjust path as needed
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import PortfolioSection from "@/components/PortfolioSection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQ from "@/components/FAQ";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import AboutUs from "@/components/AboutUs";
import CTASection from "@/components/CTASection";
import { faqData2 } from "@/data/faqData2";
// 1. NEW IMPORT: Bring in the data file we just created
import { whyUsData } from "@/data/whyUsData"; // Adjust this path based on where you saved the file

const Index = () => {
  return (
    <main className="relative z-10 font-sans bg-transparent">
      <IndexHero />
      <WhoWeAre />
      <WhatWeDo />
      <PortfolioSection />
      
      {/* 2. THE FIX: We are now passing the specific "home" data to the component.
        This satisfies TypeScript and tells the section exactly what text to render.
      */}
      <WhyUsSection items={whyUsData["home"]} />
      
      <FAQ items={faqData2["home"]} />
      <TestimonialCarousel />
      <AboutUs />
      
      <CTASection title="Let's Create Your" highlight="Echo" />
    </main>
  );
};

export default Index;