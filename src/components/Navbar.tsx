import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceTitleToSlug } from "@/data/servicesData";

import navLogo from "../assets/image-removebg-preview (13).png";

/* =======================
   SERVICES DROPDOWN (DESKTOP)
======================= */
const ServicesDropdown = ({ onClose }: { onClose?: () => void }) => {
  const sections = [
    {
      title: "Design",
      items: [
        "Brand Identity & Guidelines",
        "UI/UX Design",
        "Creative Direction",
        "Photography & Videography",
        "Motion & Graphic Design",
      ],
    },
    {
      title: "Develop",
      items: [
        "Website Development",
        "Shopify Development",
        "Web Application Development",
        "Mobile Application Development",
        "CRO & Speed Optimization",
      ],
    },
    {
      title: "Market",
      items: [
        "Paid Media",
        "Social Media Management",
        "SEO & Content Strategy",
        "Email & SMS Marketing",
        "Analytics & Tracking",
        "Creative Optimization",
      ],
    },
  ];

  const getServiceLink = (itemText: string) => {
    const slug = serviceTitleToSlug[itemText];
    return slug ? `/services/${slug}` : "/services";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="mb-4 text-lg font-semibold text-foreground border-b border-border pb-2 md:border-none">
            {section.title}
          </h4>

          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item}>
                <Link
                  to={getServiceLink(item)}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-2 text-muted-foreground hover:bg-cyan/20 hover:text-cyan transition-all"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

/* =======================
   NAVBAR
======================= */
const Navbar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    /* UPDATED: Changed 'fixed' to 'absolute' so it stays at the top of the page */
    <nav className="absolute top-0 left-0 right-0 z-[100]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* LOGO */}
          <Link to="/" className="flex items-center group">
            <img
              src={navLogo}
              alt="Echo & Impact"
              className="h-12 md:h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(0,216,255,0.25)]"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden min-[769px]:flex flex-1 justify-center">
            <div className="flex items-center gap-x-8">

              <Link
                to="/"
                className={`text-sm font-medium hover:text-cyan transition-colors ${
                  isActive("/") ? "text-cyan" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>

              {/* SERVICES (DESKTOP) */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    servicesOpen
                      ? "text-cyan"
                      : "text-muted-foreground hover:text-cyan"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[800px] rounded-2xl border border-cyan/40 bg-background shadow-2xl p-8 z-[9999]"
                    >
                      <ServicesDropdown onClose={() => setServicesOpen(false)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {["/work", "/about", "/contact"].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-sm font-medium hover:text-cyan transition-colors ${
                    isActive(path) ? "text-cyan" : "text-muted-foreground"
                  }`}
                >
                  {path.replace("/", "").replace(/^./, (c) => c.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden min-[769px]:flex items-center gap-3">
            <Button
              size="sm"
              className="bg-cyan text-background hover:bg-cyan/90 glow-cyan px-6 font-bold"
            >
              Start Project
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="min-[769px]:hidden p-2 rounded-lg hover:bg-foreground/5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} className="text-cyan" /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-[769px]:hidden border-t border-border/50 bg-background touch-pan-y overflow-y-auto max-h-[85vh]"
            >
              <div className="py-6 space-y-4 px-2">

                {["Home", "Work", "About", "Contact"].map((item) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  return (
                    <Link
                      key={item}
                      to={path}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-lg font-semibold p-2 rounded-lg ${
                        isActive(path)
                          ? "text-cyan bg-cyan/5"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}

                {/* MOBILE SERVICES */}
                <div className="pt-4 border-t border-border/50">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-2 py-3 text-lg font-semibold text-muted-foreground hover:text-cyan"
                  >
                    Services
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        mobileServicesOpen ? "rotate-180 text-cyan" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-2 px-2 pb-4">
                          {Object.entries(serviceTitleToSlug).map(([title, slug]) => (
                            <Link
                              key={slug}
                              to={`/services/${slug}`}
                              onClick={() => {
                                setMobileServicesOpen(false);
                                setMobileOpen(false);
                              }}
                              className="text-sm py-2 text-muted-foreground hover:text-cyan"
                            >
                              {title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA */}
                <div className="pt-4 flex justify-center pb-6">
                  <Button
                    className="bg-cyan text-background px-8 py-3 text-base font-semibold shadow-lg hover:bg-cyan/90"
                    asChild
                  >
                    <Link to="/contact" onClick={() => setMobileOpen(false)}>
                      Start Project
                    </Link>
                  </Button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;