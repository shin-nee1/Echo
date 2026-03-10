import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Added for navigation
import AboutHero from "@/components/AboutHero";
import VisionSection from "@/components/VisionSection";
import HowWeWork from "@/components/HowWeWork"; 
import WhoWeAreAbout from "@/components/WhoWeAreAbout";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

// 1. IMPORT YOUR FAQ DATA
import { faqData2 } from "@/data/faqData2"; 

const About = () => {
  const navigate = useNavigate(); // <-- Initialize navigation

  return (
    /* Removed bg-[#010a0f] - now inherits from App.tsx/layout */
    <div className="min-h-screen text-white selection:bg-[#00d8ff]/30">
      <AboutHero />
      <VisionSection />
      <HowWeWork />
      <WhoWeAreAbout />
      <WhatWeBelieve />
      
      {/* 2. INJECT THE DYNAMIC DATA FOR ABOUT */}
      <FAQ items={faqData2["about"]} />
      
      <CTASection 
        title="Ready To Work With A Team That Treats Your Brand Like Its" 
        highlight="Own?" 
        subtitle="Share your ideas, and we will outline the strongest path forward." 
        primaryButtonText="Meet Us "
      
      />
    </div>
  );
};

export default About;