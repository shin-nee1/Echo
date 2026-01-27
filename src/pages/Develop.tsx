import ServicePageLayout from "@/components/ServicePageLayout";
import { Search, FileCode, Code, TestTube, Rocket, Settings } from "lucide-react";

const Develop = () => {
  const processSteps = [
    { icon: Search, number: "01", title: "Discovery", description: "Understanding requirements, user needs, and technical specifications for your project." },
    { icon: FileCode, number: "02", title: "Wireframes (UI)", description: "Creating detailed wireframes and user interface designs before development begins." },
    { icon: Code, number: "03", title: "Build", description: "Expert developers bring your project to life with clean, efficient code." },
    { icon: TestTube, number: "04", title: "Quality Assurance", description: "Rigorous testing ensures everything works flawlessly across all devices." },
    { icon: Rocket, number: "05", title: "Launch", description: "Smooth deployment and launch with monitoring for optimal performance." },
    { icon: Settings, number: "06", title: "Maintenance", description: "Ongoing support and updates to keep your product running smoothly." },
  ];

  const services = [
    { 
      title: "Website Development", 
      description: "Custom websites built for performance and scalability.",
      items: ["Responsive Design", "CMS Integration", "E-commerce", "SEO Optimized"]
    },
    { 
      title: "Desktop Application Development", 
      description: "Powerful desktop applications for Windows, Mac, and Linux.",
      items: ["Cross-Platform", "Native Performance", "Offline Capability", "System Integration"]
    },
    { 
      title: "Mobile Application Development", 
      description: "Native and cross-platform mobile apps.",
      items: ["iOS Development", "Android Development", "React Native", "Flutter"]
    },
    { 
      title: "Data & Batch Application Development", 
      description: "Enterprise-grade data processing solutions.",
      items: ["ETL Pipelines", "Data Analytics", "Automation", "Reporting Systems"]
    },
    { 
      title: "API Development", 
      description: "Robust APIs that power your applications.",
      items: ["RESTful APIs", "GraphQL", "Microservices", "Third-party Integration"]
    },
    { 
      title: "E-commerce Solutions", 
      description: "Complete online shopping experiences.",
      items: ["Custom Storefronts", "Payment Integration", "Inventory Management", "Order Tracking"]
    },
  ];

  return (
    <ServicePageLayout
      // Hero
      heroTitle={
        <>
          We Build The <span className="text-cyan">Digital Experiences</span> That<br />
          Bring Your <span className="text-cyan">Brand</span> To Life.
        </>
      }
      heroSubtitle="Development Isn't Just Code, It's Craftsmanship."
      heroCta="Start Your Development Project"
      heroImagePlaceholder="Development Hero Image Placeholder"
      
      // Info Section
      infoTitle="What is"
      infoHighlight="Develop?"
      infoParagraphs={[
        "Development is the art of turning ideas into functional digital products. It's where design meets technology to create experiences that users love.",
        "Our development process focuses on clean code, scalable architecture, and user-centric solutions that grow with your business.",
        "From simple websites to complex enterprise applications, we build digital products that are fast, reliable, and built to last.",
      ]}
      infoImagePlaceholder="Development Concept Image"
      
      // Process Section
      processTitle="Development"
      processHighlight="Process"
      processSubtitle="Our systematic approach to building exceptional digital products"
      processSteps={processSteps}
      
      // Services Section
      servicesTitle="Develop"
      servicesHighlight="Services"
      servicesSubtitle="End-to-end development solutions for your digital needs"
      services={services}
      
      // Cross Sell
      crossSellTitle="Interested In Design Or Marketing?"
      crossSellLinks={[
        { text: "Explore Design", href: "/design" },
        { text: "Explore Marketing", href: "/market" },
      ]}
      
      // Final CTA
      ctaTitle="Let's Build What Brings Your Ideas"
      ctaHighlight="To Life"
      ctaSubtitle="Development Isn't Just Code, It's Craftsmanship."
    />
  );
};

export default Develop;