// FILE 2: SubServicePage.tsx
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

  return (
    <div>
      <div className="flex flex-col w-full items-center overflow-x-hidden text-center">
        
        <HeroSubService
          title={
            <>
              {service.title.split(service.highlightedTitle)[0]}
              <span className="text-cyan">{service.highlightedTitle}</span>
              {service.title.split(service.highlightedTitle)[1] || ""} Services
            </>
          }
          // subtitle prop removed
          ctaText={service.ctaText}
        />

        <div className="w-full flex flex-col items-center space-y-[6vh] md:space-y-[8vh] lg:space-y-[10vh] pb-[10vh]">
          <section className="w-full flex justify-center">
            <WhatIsSection
              title={service.whatIs.title}
              highlightedWord={service.whatIs.highlightedWord}
              description={service.whatIs.description}
              imageSrc={service.whatIs.imageSrc}
              imageAlt={service.whatIs.imageAlt}
            />
          </section>

          <section className="w-full flex justify-center">
            <FeaturesCarousel
              sectionTitle={`Our ${service.highlightedTitle} Features`}
              highlightedWord={service.highlightedTitle}
              features={service.features}
            />
          </section>

          <section className="w-full flex justify-center">
            <WhyUsSection />
          </section>

        </div>
      </div>
      
      <FAQ />
      
      <CTASection
        title="Ready to Transform Your"
        highlight={service.highlightedTitle}
        subtitle={`Partner with us to achieve ${service.title.toLowerCase()} excellence with precision and creativity.`}
      />
    </div>
  );
};

export default SubServicePage;