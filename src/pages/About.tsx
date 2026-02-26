import React from "react";
import AboutHero from "@/components/AboutHero";
import VisionSection from "@/components/VisionSection";
import HowWeWork from "@/components/HowWeWork"; 
import WhoWeAreAbout from "@/components/WhoWeAreAbout";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    /* Removed bg-[#010a0f] - now inherits from App.tsx/layout */
    <div className="min-h-screen text-white selection:bg-[#00d8ff]/30">
      <AboutHero />
      <VisionSection />
      <HowWeWork />
      <WhoWeAreAbout />
      <WhatWeBelieve />
      <FAQ />
      <CTASection 
        title="Ready to Start" 
        highlight="Your Impact?" 
        subtitle="Let’s align your vision with a strategy that actually moves the needle." 
      />
    </div>
  );
};

export default About;