import React from 'react';
import { useParams, Navigate } from "react-router-dom"; 
import HeroSubService from "@/components/HeroSubService";
import CTASection from "@/components/CTASection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQ from "@/components/FAQ";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import WhatIsSection from "@/components/WhatIsSection";
import { getServiceBySlug } from "@/data/servicesData";
import { whyUsData } from "@/data/whyUsData"; 
import { faqData2 } from "@/data/faqData2"; 

const SubServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  // 1. GESTALT & ERROR HANDLING
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // 2. HELPER FUNCTIONS
  const toTitleCase = (str: string) => 
    str.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // 3. TITLE & CTA SPLIT LOGIC
  const titleWords = service.title.trim().split(/\s+/);
  const lastWord = titleWords.pop() || "";
  const titleWithoutLastWord = titleWords.join(" ");

  const ctaTitleWords = service.contactCta.title.trim().split(/\s+/);
  const ctaHighlightWord = ctaTitleWords.pop() || "";
  const ctaTitleWithoutLastWord = ctaTitleWords.join(" ");

  // SUBTITLE FORMATTING (No extra line spacing)
  const formattedSubtitle = service.contactCta.description.includes('\n\n')
    ? service.contactCta.description.split('\n\n').map((line, i) => (
        <span key={i} className="block last:mb-0">
          {line}
        </span>
      ))
    : service.contactCta.description.split("intention.").map((text, index, array) => (
        <React.Fragment key={index}>
          {text}
          {index < array.length - 1 && (
            <>
              intention.
              <br /> {/* Only one break, no extra space */}
            </>
          )}
        </React.Fragment>
      ));
  // 5. DATA FETCHING
  const whyUsItems = slug && whyUsData[slug] ? whyUsData[slug] : [];
  const faqItems = slug && faqData2[slug] ? faqData2[slug] : []; 

  return (
    <>
      {/* FULL WIDTH WRAPPER (Breakout) */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden">
        <div className="flex flex-col w-full items-center text-center">
          
          <HeroSubService
            title={
              service.whatIs.title.toLowerCase().startsWith("what is") ? (
                <>
                  What is <span className="text-[#47c2d2]">{service.whatIs.title.replace(/What is\s+/i, "")}</span>
                </>
              ) : (
                <>
                  {titleWithoutLastWord}{" "}
                  <span className="text-[#47c2d2]">{lastWord}</span>
                </>
              )
            }
            ctaText={service.ctaText}
          />

          <div className="w-full flex flex-col items-center space-y-[6vh] md:space-y-[8vh] lg:space-y-[10vh] pb-[10vh]">
            <WhatIsSection
              title="What is "
              highlightedWord={`${service.whatIs.title.replace(/What is\s+/i, "")}?`}
              description={service.whatIs.description}
              imageSrc={service.whatIs.imageSrc}
              imageAlt={service.whatIs.imageAlt}
            />

            <FeaturesCarousel
              sectionTitle={`Everything ${service.nonHighlightedText} `}
              highlightedWord={service.highlightedText}
              features={service.features}
            />
          </div>
        </div>

        <WhyUsSection items={whyUsItems} />
        <FAQ items={faqItems} />
      </div>

      {/* CONSTRAINED CTA (Proper Paragraph Change) */}
      <CTASection
        title={toTitleCase(ctaTitleWithoutLastWord)}
        highlight={toTitleCase(ctaHighlightWord)}
        subtitle={formattedSubtitle}
        primaryButtonText={service.contactCta.buttonText}
      />
    </>
  );
};

export default SubServicePage;