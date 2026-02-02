import { Facebook, Linkedin, Twitter, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceTitleToSlug } from "@/data/servicesData";
// Import your local image
import footerLogo from "../assets/image-removebg-preview (13).png";

const Footer = () => {
  const footerSections = [
    {
      title: "Design",
      links: [
        "Brand Identity & Guidelines",
        "UI/UX Design",
        "Creative Direction",
        "Photography & Videography",
        "Motion & Graphic Design",
      ],
    },
    {
      title: "Develop",
      links: [
        "Website Development",
        "Shopify Development",
        "Web Application Development",
        "Mobile Application Development",
        "CRO & Speed Optimization",
      ],
    },
    {
      title: "Market",
      links: [
        "Paid Media",
        "Social Media Management",
        "SEO & Content Strategy",
        "Email & SMS Marketing",
        "Analytics & Tracking",
        "Creative Optimization",
      ],
    },
    {
      title: "Company",
      links: [
        { text: "Our Work", href: "/work" },
        { text: "About Us", href: "/about" },
        { text: "Contact", href: "/contact" },
        { text: "FAQs", href: "/faq" },
      ],
    },
  ];

  const getServiceLink = (linkText: string): string => {
    const slug = serviceTitleToSlug[linkText];
    return slug ? `/services/${slug}` : "/services";
  };

  return (
    <footer className="bg-gradient-to-b from-[#030f14] to-[#010507] text-white pt-24 pb-12 relative border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* TOP TIER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="hidden md:block w-1/4">
            <p className="text-slate-300 text-[13px] leading-relaxed max-w-[200px] font-medium opacity-80">
              Shaping brands with clarity, precision, and purpose.
            </p>
          </div>

          {/* Logo Section: Increased size and removed tagline */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <Link to="/" className="block">
              <img 
                src={footerLogo} 
                alt="Echo & Impact Logo" 
                className="h-24 md:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(0,216,255,0.3)] hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Socials */}
          <div className="w-full md:w-1/4 flex flex-col items-center md:items-end mt-10 md:mt-0 gap-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Socials links</span>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:border-cyan/50 hover:bg-cyan/10 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-white group-hover:text-cyan" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-20" />

        {/* MIDDLE TIER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {footerSections.map((section, idx) => (
            <div
              key={section.title}
              className={`relative ${idx !== 0 ? "lg:pl-12 lg:border-l border-white/10" : ""}`}
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_15px_rgba(0,229,255,1)]" />
                <h4 className="text-xl font-bold tracking-tight text-white">{section.title}</h4>
              </div>
              <ul className="space-y-5">
                {section.links.map((link) => {
                  if (typeof link === "object" && "href" in link) {
                    return (
                      <li key={link.text} className="flex items-center gap-3 group cursor-pointer">
                        <ArrowRight className="w-3 h-3 text-cyan opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        <Link
                          to={link.href}
                          className="text-slate-300 text-[14px] font-medium group-hover:text-white transition-colors"
                        >
                          {link.text}
                        </Link>
                      </li>
                    );
                  }
                  
                  const linkText = link as string;
                  return (
                    <li key={linkText} className="flex items-center gap-3 group cursor-pointer">
                      <ArrowRight className="w-3 h-3 text-cyan opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      <Link
                        to={getServiceLink(linkText)}
                        className="text-slate-300 text-[14px] font-medium group-hover:text-white transition-colors"
                      >
                        {linkText}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM TIER: Contact */}
        <div className="pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center gap-5">
            <div className="p-3 rounded-full bg-cyan/10">
              <Phone className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-cyan font-bold mb-1">Phone</p>
              <p className="text-white text-[15px] font-semibold tracking-tight">+44 7548 479 791</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="p-3 rounded-full bg-cyan/10">
              <Mail className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-cyan font-bold mb-1">Email</p>
              <p className="text-white text-[15px] font-semibold tracking-tight">info@echoandimpact.com</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="p-3 rounded-full bg-cyan/10">
              <MapPin className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-cyan font-bold mb-1">Location</p>
              <p className="text-white text-[15px] font-semibold tracking-tight uppercase">
                ny, usa, serving clients globally
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;