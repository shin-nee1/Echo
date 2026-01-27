import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Design",
      links: [
        "Brand Identity",
        "UI/UX Design",
        "Logo Design",
        "Creative Direction",
      ],
    },
    {
      title: "Develop",
      links: [
        "Web Development",
        "App Development",
        "E-commerce",
        "Custom Software",
      ],
    },
    {
      title: "Market",
      links: [
        "Social Media",
        "SEO & Content",
        "Email Marketing",
        "Analytics",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Contact",
        "Blog",
      ],
    },
  ];

  return (
    <footer className="bg-card border-t border-border/50 py-16">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan to-primary flex items-center justify-center">
                <span className="text-background font-bold text-sm">E&I</span>
              </div>
              <span className="font-display font-bold text-lg">
                echo<span className="text-cyan">&</span>impact
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              We Shape How The World Sees, Understands, And Experiences Your Brand.
            </p>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground text-sm hover:text-cyan transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Echo & Impact. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-cyan transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;