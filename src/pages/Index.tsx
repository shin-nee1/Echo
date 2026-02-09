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

const Index = () => {
  return (
    <main className="relative z-10 font-sans bg-transparent">
      <IndexHero />
      <WhoWeAre />
      <WhatWeDo />
      <PortfolioSection />
      <WhyUsSection />
      <FAQ />
      <TestimonialCarousel />
      <AboutUs />
      
      <CTASection title="Let's Create Your" highlight="Impact" />
    </main>
  );
};

export default Index;