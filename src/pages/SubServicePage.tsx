import ServicePageLayout from "@/components/ServicePageLayout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import WhyUsSection from "@/components/WhyUsSection";
import FAQ from "@/components/FAQ";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import WhatIsSection from "@/components/WhatIsSection";

const SubServicePage = () => {
  // Define features for the carousel
  const featureList = [
    { title: "Fast", description: "Blazing-fast performance.", imageSrc: "/images/feature-fast.jpg" },
    { title: "Reliable", description: "Count on consistent service.", imageSrc: "/images/feature-reliable.jpg" },
    { title: "Secure", description: "Your data is safe.", imageSrc: "/images/feature-secure.jpg" },
    { title: "Innovative", description: "Cutting-edge solutions.", imageSrc: "/images/feature-innovative.jpg" },
    { title: "Scalable", description: "Grow without limitations.", imageSrc: "/images/feature-scalable.jpg" },
  ];

  return (
    <ServicePageLayout>
      {/* Page Hero */}
      <PageHero
        title={
          <>
            Our <span className="text-cyan">Services</span> Tailored,<br />
            Crafted, And <span className="text-cyan">Optimized</span>.
          </>
        }
        subtitle="Delivering excellence, one service at a time."
        ctaText="Explore Services"
      />

      {/* What Is Section */}
      <WhatIsSection />

      {/* Features Carousel */}
      <FeaturesCarousel
        sectionTitle="Our Amazing Features"
        highlightedWord="Features"
        features={featureList}
      />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* FAQ Section */}
      <FAQ />

      {/* Call To Action */}
      <CTASection
        title="Let's Elevate Your"
        highlight="Brand"
        subtitle="Partner with us to achieve your goals with precision and creativity."
      />
    </ServicePageLayout>
  );
};

export default SubServicePage;
