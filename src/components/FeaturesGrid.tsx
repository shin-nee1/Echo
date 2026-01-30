import React from "react";

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
}

const FeaturesGrid = () => {
  // Static data defined internally
  const sectionTitle = "Our Amazing Features";
  const highlightedWord = "Features";
  const features: Feature[] = [
    { title: "Fast", description: "Experience blazing-fast performance.", imageSrc: "/images/feature-fast.jpg" },
    { title: "Reliable", description: "Count on consistent, dependable service.", imageSrc: "/images/feature-reliable.jpg" },
    { title: "Secure", description: "Your data is safe with top-notch security.", imageSrc: "/images/feature-secure.jpg" },
    { title: "Innovative", description: "Cutting-edge solutions for you.", imageSrc: "/images/feature-innovative.jpg" },
    { title: "User-Friendly", description: "Designed with simplicity in mind.", imageSrc: "/images/feature-user-friendly.jpg" },
    { title: "Customizable", description: "Tailor every element to fit your needs.", imageSrc: "/images/feature-customizable.jpg" },
  ];

  const titleParts = sectionTitle.split(highlightedWord);

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
          {titleParts[0]}
          <span className="text-primary">{highlightedWord}</span>
          {titleParts[1] || ""}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card-hover p-6 group">
              <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-secondary/50">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;