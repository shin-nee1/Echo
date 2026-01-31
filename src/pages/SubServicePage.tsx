import { useParams, Navigate } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQ from "@/components/FAQ";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import WhatIsSection from "@/components/WhatIsSection";
import { getServiceBySlug } from "@/data/servicesData";

const SubServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log("Slug from URL:", slug);
  
  // Get service data based on URL slug
  const service = slug ? getServiceBySlug(slug) : undefined;

  // If no service found, redirect to 404
  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <ServicePageLayout>
      {/* Page Hero */}
      <PageHero
        title={
          <>
            {service.title.split(service.highlightedTitle)[0]}
            <span className="text-cyan">{service.highlightedTitle}</span>
            {service.title.split(service.highlightedTitle)[1] || ""} Services<br />
            Tailored For <span className="text-cyan">Your Success</span>.
          </>
        }
        subtitle={service.subtitle}
        ctaText={service.ctaText}
      />

      {/* What Is Section - Dynamic */}
      <WhatIsSection
        title={service.whatIs.title}
        highlightedWord={service.whatIs.highlightedWord}
        description={service.whatIs.description}
        bulletPoints={service.whatIs.bulletPoints}
        imageSrc={service.whatIs.imageSrc}
        imageAlt={service.whatIs.imageAlt}
      />

      {/* Features Carousel - Dynamic */}
      <FeaturesCarousel
        sectionTitle={`Our ${service.highlightedTitle} Features`}
        highlightedWord={service.highlightedTitle}
        features={service.features}
      />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Call To Action */}
      <CTASection
        title="Ready to Transform Your"
        highlight={service.highlightedTitle}
        subtitle={`Partner with us to achieve ${service.title.toLowerCase()} excellence with precision and creativity.`}
      />
    </ServicePageLayout>
  );
};

export default SubServicePage;
