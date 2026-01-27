import ServicePageLayout from "@/components/ServicePageLayout";
import { Search, Lightbulb, PenTool, Layers, CheckCircle } from "lucide-react";

const Design = () => {
  const processSteps = [
    { icon: Search, number: "01", title: "Discovery", description: "We dive deep into understanding your brand, target audience, and goals to create a solid foundation." },
    { icon: Lightbulb, number: "02", title: "Concept", description: "Our creative team develops multiple concepts and directions for your approval." },
    { icon: PenTool, number: "03", title: "Creation", description: "We bring the approved concept to life with meticulous attention to detail." },
    { icon: Layers, number: "04", title: "Refinement", description: "Iterative feedback and revisions ensure the final product exceeds expectations." },
    { icon: CheckCircle, number: "05", title: "Delivery", description: "Final assets are prepared and delivered in all required formats." },
  ];

  const services = [
    { 
      title: "Brand Identity & Guidelines", 
      description: "Complete brand identity systems that define your visual language.",
      items: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"]
    },
    { 
      title: "Logo Design", 
      description: "Memorable logos that capture your brand essence.",
      items: ["Concept Development", "Vector Graphics", "Multiple Variations", "Usage Guidelines"]
    },
    { 
      title: "Creative Direction", 
      description: "Strategic creative leadership for campaigns and projects.",
      items: ["Art Direction", "Visual Strategy", "Campaign Concepts", "Style Guides"]
    },
    { 
      title: "Photography & Videography", 
      description: "Professional visual content that tells your story.",
      items: ["Product Photography", "Lifestyle Shoots", "Video Production", "Post-Processing"]
    },
    { 
      title: "UI/UX Design", 
      description: "User-centered design for digital products.",
      items: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    { 
      title: "Print & Packaging", 
      description: "Tangible brand experiences through print materials.",
      items: ["Business Cards", "Brochures", "Packaging Design", "Marketing Materials"]
    },
  ];

  return (
    <ServicePageLayout
      // Hero
      heroTitle={
        <>
          We Shape How The <span className="text-cyan">World</span> Sees,<br />
          Understands, And <span className="text-cyan">Experiences</span> Your Brand.
        </>
      }
      heroSubtitle="Creative design solutions that capture attention and inspire action."
      heroCta="Start Your Design Project"
      heroImagePlaceholder="Design Hero Image Placeholder"
      
      // Info Section
      infoTitle="What is"
      infoHighlight="Design?"
      infoParagraphs={[
        "Design is the visual language of your brand. It's how you communicate your values, personality, and promise to your audience before a single word is read.",
        "Great design goes beyond aesthetics—it creates emotional connections, builds trust, and drives action. It's strategic, intentional, and always in service of your goals.",
        "At Echo & Impact, we combine creativity with strategy to deliver designs that not only look stunning but also perform brilliantly.",
      ]}
      infoImagePlaceholder="Design Concept Image"
      
      // Process Section
      processTitle="Design"
      processHighlight="Process"
      processSubtitle="Our proven methodology for delivering exceptional design"
      processSteps={processSteps}
      
      // Services Section
      servicesTitle="Design"
      servicesHighlight="Services"
      servicesSubtitle="Comprehensive design solutions for every need"
      services={services}
      
      // Cross Sell
      crossSellTitle="Interested In Development Or Marketing?"
      crossSellLinks={[
        { text: "Explore Development", href: "/develop" },
        { text: "Explore Marketing", href: "/market" },
      ]}
      
      // Final CTA
      ctaTitle="Let's Shape Your"
      ctaHighlight="Brand"
      ctaSubtitle="We Shape How The World Sees, Understands, And Experiences Your Brand."
    />
  );
};

export default Design;