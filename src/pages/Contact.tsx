import React from "react";
import ContactHero from "@/components/ContactHero";
import FAQ from "@/components/FAQ";
import ProcessSection, { type ProcessStepData } from "@/components/ProcessSection";

// Asset imports
import step1Image from "@/assets/freepik__background__95353.png";
import step2Image from "@/assets/freepik__background__95352.png";
import step3Image from "@/assets/Gemini_Generated_Image_6t6id76t6id76t6i 1.png";

const Contact = () => {
  const processSteps: ProcessStepData[] = [
    {
      number: "01",
      title: "REVIEW",
      description: "We review your submission to understand your goals and requirements.",
      image: step1Image,
    },
    {
      number: "02",
      title: "CONVERSATION",
      description: "If aligned, we schedule a discovery call to clarify scope and direction.",
      image: step2Image,
    },
    {
      number: "03",
      title: "NEXT STEPS",
      description: "You receive a clear proposal covering approach, timeline, and pricing.",
      image: step3Image,
    },
  ];

  return (
    /* Added pb-[clamp(5rem,15vh,12rem)] 
       This creates a dynamic buffer at the bottom of the entire page. 
       Even if the FAQ has its own padding, this acts as the final "no-overlap" shield.
    */
    <div className="min-h-screen bg-transparent text-white pb-[clamp(5rem,15vh,12rem)]">
      
      {/* 1. HERO SECTION */}
      <ContactHero />

      {/* 2. PROCESS SECTION */}
      <ProcessSection
        title="What Happens"
        highlight="Next"
        steps={processSteps}
      />

      {/* 3. FAQ SECTION */}
      {/* FAQ handles its own internal spacing, but the container pb above protects it from the footer */}
      <FAQ />
    </div>
  );
};

export default Contact;