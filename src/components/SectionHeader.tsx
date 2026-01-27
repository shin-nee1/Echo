interface SectionHeaderProps {
  title: string;
  highlight: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, highlight, subtitle, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        {title} <span className="text-cyan">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
