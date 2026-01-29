import { Facebook, Linkedin, Twitter, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Design",
      links: ["Brand Identity & Guidelines", "UI/UX Design", "Creative Direction", "Photography & Videography", "Motion & Graphic Design"],
    },
    {
      title: "Develop",
      links: ["Website Development", "Shopify Development", "Web Application Development", "Mobile Application Development", "CRO & Speed Optimization"],
    },
    {
      title: "Market",
      links: ["Paid Media", "Social Media Management", "SEO & Content Strategy", "Email & SMS Marketing", "Analytics & Tracking", "Creative Optimization"],
    },
    {
      title: "Company",
      links: ["Our Work", "About Us", "Contact", "FAQs"],
    },
  ];

  return (
    // Brightened background from #010a0f to #030f14 with a gradient to add depth
    <footer className="bg-gradient-to-b from-[#030f14] to-[#010507] text-white pt-24 pb-12 relative border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* TOP TIER: Branding & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="hidden md:block w-1/4">
            <p className="text-slate-300 text-[13px] leading-relaxed max-w-[200px] font-medium opacity-80">
              Shaping brands with clarity, precision, and purpose.
            </p>
          </div>

          {/* Logo Center - Using the exact stacked style from reference */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="flex items-center gap-1 mb-1">
               <h2 className="text-4xl font-bold tracking-tight text-white">echo</h2>
               {/* Brightened Cyan Divider */}
               <div className="flex flex-col h-9 w-[3px] bg-cyan shadow-[0_0_10px_rgba(0,229,255,0.5)] mx-2" />
               <h2 className="text-4xl font-bold tracking-tight text-white">impact</h2>
            </div>
            <p className="text-[11px] tracking-[0.5em] text-cyan/60 font-bold uppercase mt-2">
              Design | Develop | Market
            </p>
          </div>

          <div className="w-full md:w-1/4 flex flex-col items-center md:items-end mt-10 md:mt-0 gap-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Socials links</span>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:border-cyan/50 hover:bg-cyan/10 transition-all duration-300 group">
                  <Icon className="w-4 h-4 text-white group-hover:text-cyan" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BRIGHTER SEPARATOR LINE */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-20" />

        {/* MIDDLE TIER: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {footerSections.map((section, idx) => (
            <div key={section.title} className={`relative ${idx !== 0 ? 'lg:pl-12 lg:border-l border-white/10' : ''}`}>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_15px_rgba(0,229,255,1)]" />
                <h4 className="text-xl font-bold tracking-tight text-white">
                  {section.title}
                </h4>
              </div>
              <ul className="space-y-5">
                {section.links.map((link) => (
                  <li key={link} className="flex items-center gap-3 group cursor-pointer">
                    <ArrowRight className="w-3 h-3 text-cyan opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    <span className="text-slate-300 text-[14px] font-medium group-hover:text-white transition-colors">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM TIER: Contact Info - Lightened Text for Readability */}
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
              <p className="text-white text-[15px] font-semibold tracking-tight uppercase">ny, usa, serving clients globally</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;