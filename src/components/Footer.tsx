import { Facebook, Linkedin, Twitter, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceTitleToSlug } from "@/data/servicesData";
// IMPORTING LOGO FROM ASSETS
import logo from "@/assets/Echo & Impact Logo (White).png";

type FooterSection = {
  title: string;
  links: (string | { text: string; href: string })[];
};

const SectionBlock = ({
  section,
  getServiceLink,
}: {
  section: FooterSection;
  getServiceLink: (s: string) => string;
}) => {
  const isObj = (link: any): link is { text: string; href: string } =>
    typeof link === "object" && "href" in link;

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-1.5 rounded-full bg-[#43c6e4] shadow-[0_0_10px_#43c6e4]" />
        <h4 className="text-lg font-bold tracking-tight text-white">{section.title}</h4>
      </div>
      <ul className="space-y-4">
        {section.links.map((link, lIdx) => {
          const text = isObj(link) ? link.text : link;
          const to = isObj(link) ? link.href : getServiceLink(link);
          return (
            <li key={lIdx} className="flex items-center gap-2 group cursor-pointer">
              <ArrowRight className="w-3 h-3 text-[#43c6e4] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0" />
              <Link to={to} className="text-white font-medium group-hover:text-[#43c6e4] transition-colors" style={{ fontSize: "clamp(0.8rem, 0.9vw, 0.9rem)" }}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

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
    <footer
      className="relative bg-transparent text-white"
      style={{ paddingTop: "clamp(3rem, 8vh, 6rem)", paddingBottom: "3rem" }}
    >
      <style>
        {`
          @media (min-width: 1024px) and (max-width: 1280px) {
            .laptop-fix { padding-left: 2.5rem !important; padding-right: 1rem !important; }
            .laptop-first-col-fix { padding-left: 1.5rem !important; }
          }
        `}
      </style>

      <div className="container mx-auto px-6">
        {/* TOPMOST LINE - More Prominent White */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent mb-16" />

        {/* TOP TIER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="hidden md:block w-1/4">
            <p
              className="text-white leading-relaxed font-medium opacity-90"
              style={{ fontSize: "clamp(0.75rem, 0.8vw, 0.875rem)", maxWidth: "200px" }}
            >
              Shaping brands with clarity, precision, and purpose.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center">
            <Link to="/" className="block">
              <img src={logo} alt="Echo & Impact Logo" className="w-[180px] h-auto object-contain" />
            </Link>
          </div>

          <div className="w-full md:w-1/4 flex flex-col items-center md:items-end gap-3">
            <span className="font-bold text-white uppercase tracking-widest" style={{ fontSize: "10px" }}>
              Social links
            </span>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:border-[#43c6e4]/50 hover:bg-[#43c6e4]/10 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-white group-hover:text-[#43c6e4]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* HORIZONTAL LINE - More Prominent White */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent mb-16" />

        {/* MIDDLE TIER - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-x-0 mb-20">
          {footerSections.map((section, idx) => (
            <div key={section.title} className="relative">
              {idx !== 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
              )}
              <div className={`${idx === 0 ? "laptop-first-col-fix" : "pl-8 laptop-fix"}`}>
                <SectionBlock section={section} getServiceLink={getServiceLink} />
              </div>
            </div>
          ))}
        </div>

        {/* MIDDLE TIER - Mobile/Tablet */}
        <div className="lg:hidden mb-20 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent -translate-x-px" />
          <div className="grid grid-cols-2">
            <div className="pr-6 flex flex-col">
              <div className="pb-8">
                <SectionBlock section={footerSections[0]} getServiceLink={getServiceLink} />
              </div>
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent to-white/40" />
              <div className="pt-8">
                <SectionBlock section={footerSections[1]} getServiceLink={getServiceLink} />
              </div>
            </div>
            <div className="pl-6 flex flex-col">
              <div className="pb-8">
                <SectionBlock section={footerSections[2]} getServiceLink={getServiceLink} />
              </div>
              <div className="w-full h-[2px] bg-gradient-to-l from-transparent to-white/40" />
              <div className="pt-8">
                <SectionBlock section={footerSections[3]} getServiceLink={getServiceLink} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM TIER: Contact */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent mb-16" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left items-start mb-12">
          {[
            { icon: Phone, label: "Phone", val: "+1 (844) 591-ECHO" },
            { icon: Mail, label: "Email", val: "info@echoandimpact.com" },
            { icon: MapPin, label: "Location", val: "5225 Main St, Suit #4, Buffalo, NY, 14221" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 justify-start">
              <div className="shrink-0">
                <item.icon className="w-6 h-6 text-[#43c6e4]" />
              </div>
              <div className="min-w-0">
                <p className="uppercase tracking-widest text-[#43c6e4] font-bold mb-0.5" style={{ fontSize: "9px" }}>
                  {item.label}
                </p>
                <p className="text-white font-semibold tracking-tight break-words" style={{ fontSize: "clamp(0.85rem, 0.9vw, 1rem)" }}>
                  {item.val}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-white/10 pt-8">
          <p className="text-white text-xs opacity-80">
            Echo & Impact. All rights reserved. 2026 {" "}
            <Link to="/terms-conditions" className="hover:text-[#43c6e4] transition-colors">Terms & Conditions</Link> 
            {" | "} 
            <Link to="/privacyPolicy" className="hover:text-[#43c6e4] transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;