import { useParams, Navigate, useNavigate } from "react-router-dom"; // <-- Added useNavigate here
import HeroSubService from "@/components/HeroSubService";
import CTASection from "@/components/CTASection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQ from "@/components/FAQ";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import WhatIsSection from "@/components/WhatIsSection";
import { getServiceBySlug } from "@/data/servicesData";

// 1. IMPORT YOUR DATA
import { whyUsData } from "@/data/whyUsData"; 
import { faqData2 } from "@/data/faqData2"; 

const SubServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate(); // <-- Initialize the hook here
  
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  // Hero Title Split Logic
  const titleWords = service.title.trim().split(/\s+/);
  const lastWord = titleWords.pop();
  const titleWithoutLastWord = titleWords.join(" ");

  // CTA Title Split Logic
  const ctaTitleWords = service.contactCta.title.trim().split(/\s+/);
  const ctaHighlightWord = ctaTitleWords.pop() || "";
  const ctaTitleWithoutLastWord = ctaTitleWords.join(" ");

  // 2. GET THE SPECIFIC DATA FOR THIS SLUG
  const whyUsItems = slug && whyUsData[slug] ? whyUsData[slug] : [];
  const faqItems = slug && faqData2[slug] ? faqData2[slug] : []; 

  return (
    <>
      {/* 1. FULL WIDTH WRAPPER (Everything except CTA) */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden">
        <div className="flex flex-col w-full items-center text-center">
          
          <HeroSubService
            title={
              <>
                {titleWithoutLastWord}{" "}
                <span className="text-[#47c2d2]">{lastWord}</span>
              </>
            }
            ctaText={service.ctaText}
          />

          <div className="w-full flex flex-col items-center space-y-[6vh] md:space-y-[8vh] lg:space-y-[10vh] pb-[10vh]">
            <WhatIsSection
              title={service.whatIs.title}
              highlightedWord={service.whatIs.highlightedWord}
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

        {/* 3. INJECT THE DYNAMIC DATA */}
        <WhyUsSection items={whyUsItems} />
        
        <FAQ items={faqItems} />
      </div>

      {/* 2. CONSTRAINED CTA (Sits outside the breakout wrapper) */}
      <CTASection
        title={ctaTitleWithoutLastWord}
        highlight={ctaHighlightWord}
        subtitle={service.contactCta.description}
        primaryButtonText={service.contactCta.buttonText} 
        primaryButtonAction={() => navigate("/contact")} // <-- This routes the user to the contact page when clicked
      />
    </>
  );
};

export default SubServicePage;