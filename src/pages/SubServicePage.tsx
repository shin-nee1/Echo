import { useParams, Navigate } from "react-router-dom";
import HeroSubService from "@/components/HeroSubService";
import CTASection from "@/components/CTASection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQ from "@/components/FAQ";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import WhatIsSection from "@/components/WhatIsSection";
import { getServiceBySlug } from "@/data/servicesData";

const SubServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const titleWords = service.title.trim().split(/\s+/);
  const lastWord = titleWords.pop();
  const titleWithoutLastWord = titleWords.join(" ");

  return (
    <>
      {/* 1. FULL WIDTH WRAPPER (Everything except CTA) */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden">
        <div className="flex flex-col w-full items-center text-center">
          
          <HeroSubService
            title={
              <>
                {titleWithoutLastWord}{" "}
                <span className="text-[#00d8ff]">{lastWord}</span>
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

        <WhyUsSection />
        <FAQ />
      </div>

      {/* 2. CONSTRAINED CTA (Sits outside the breakout wrapper) */}
      <CTASection
        title="Ready to Transform Your"
        highlight={service.highlightedText}
        subtitle={`Partner with us to achieve ${service.title.toLowerCase()} excellence with precision and creativity.`}
      />
    </>
  );
};

export default SubServicePage;