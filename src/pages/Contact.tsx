import React from "react";
import ContactHero from "@/components/ContactHero";
import FAQ from "@/components/FAQ";
import ProcessSection, { type ProcessStepData } from "@/components/ProcessSection";

// Asset imports (Assuming paths from your original code)
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
    <div className="min-h-screen bg-transparent text-white">
      {/* Replicated Hero Section */}
      <ContactHero />

      {/* Existing Process Section */}
      <ProcessSection
        title="What Happens"
        highlight="Next"
        steps={processSteps}
      />

      {/* Existing FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Contact;