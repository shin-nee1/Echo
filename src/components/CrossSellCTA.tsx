import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CrossSellLink {
  text: string;
  href: string;
}

interface CrossSellCTAProps {
  title: string;
  links: CrossSellLink[];
  className?: string;
}

const CrossSellCTA = ({
  title,
  links,
  className = "bg-card/30",
}: CrossSellCTAProps) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          {links.map((link, index) => (
            <Link key={index} to={link.href}>
              <Button
                variant="outline"
                className="border-cyan/50 text-cyan hover:bg-cyan/10"
              >
                {link.text}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrossSellCTA;
