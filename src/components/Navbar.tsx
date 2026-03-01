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
    <div className="flex flex-col gap-3 text-sm min-w-[200px]">
      {sections.map((section) => (
        <div key={section.title} className="mb-1">
          <h4 className="mb-1 text-base font-bold text-foreground border-b border-border pb-1 md:border-none">
            {section.title}
          </h4>

          <ul className="space-y-0.5">
            {section.items.map((item) => (
              <li key={item}>
                <Link
                  to={getServiceLink(item)}
                  onClick={onClose}
                  className="block rounded-lg px-2 py-1 text-muted-foreground hover:bg-[#47c2d2]/20 hover:text-[#47c2d2] transition-all whitespace-normal"
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
  const isServicesActive = location.pathname.startsWith("/services");

  const ActiveUnderline = () => (
    <motion.div
      layoutId="navbar-underline"
      className="absolute bottom-1 left-1/4 h-[2px]  rounded-full bg-[#47c2d2]"
      initial={{ opacity: 0, width: "0%" }}
      animate={{ opacity: 1, width: "50%" }} 
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* LOGO */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={navLogo}
              alt="Echo & Impact"
              className="h-12 md:h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(71,194,210,0.25)]"
            />
          </Link>

          {/* DESKTOP NAV & CTA */}
          <div className="hidden min-[769px]:flex flex-1 items-center justify-end gap-8">
            
            <div className="flex items-center gap-x-8">
              
              <Link
                to="/"
                className="relative text-sm font-medium transition-colors group py-2"
              >
                <span className={isActive("/") 
                  ? "bg-gradient-to-r from-[#295070] to-[#47c2d2] bg-clip-text text-transparent font-bold"
                  : "text-muted-foreground hover:text-[#47c2d2]"
                }>
                  Home
                </span>
                {isActive("/") && <ActiveUnderline />}
              </Link>

              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="relative flex items-center gap-1 text-sm font-medium transition-colors group py-2"
                >
                  <span className={isServicesActive || servicesOpen
                    ? "bg-gradient-to-r from-[#295070] to-[#47c2d2] bg-clip-text text-transparent font-bold"
                    : "text-muted-foreground hover:text-[#47c2d2]"
                  }>
                    Services
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    } ${isServicesActive || servicesOpen ? "text-[#47c2d2]" : "text-muted-foreground group-hover:text-[#47c2d2]"}`}
                  />
                  {isServicesActive && <ActiveUnderline />}
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-2xl border border-[#47c2d2]/40 bg-background shadow-2xl p-4 z-[9999]"
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
                  className="relative text-sm font-medium transition-colors group py-2"
                >
                  <span className={isActive(path)
                    ? "bg-gradient-to-r from-[#295070] to-[#47c2d2] bg-clip-text text-transparent font-bold"
                    : "text-muted-foreground hover:text-[#47c2d2]"
                  }>
                    {path.replace("/", "").replace(/^./, (c) => c.toUpperCase())}
                  </span>
                  {isActive(path) && <ActiveUnderline />}
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#295070] to-[#47c2d2] text-white hover:brightness-110 px-6 rounded-full shadow-none border-none transition-all"
              >
                Start Project
              </Button>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="min-[769px]:hidden p-2 rounded-lg hover:bg-foreground/5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} className="text-[#47c2d2]" /> : <Menu size={28} />}
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
                          ? "bg-gradient-to-r from-[#295070] to-[#47c2d2] bg-clip-text text-transparent bg-[#47c2d2]/5"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}

                <div className="pt-4 border-t border-border/50">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-2 py-3 text-lg font-semibold text-muted-foreground hover:text-[#47c2d2]"
                  >
                    <span className={isServicesActive ? "text-[#47c2d2]" : ""}>Services</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        mobileServicesOpen ? "rotate-180 text-[#47c2d2]" : ""
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
                              className="text-sm py-2 text-muted-foreground hover:text-[#47c2d2]"
                            >
                              {title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-4 flex justify-center pb-6">
                  <Button
                    className="bg-gradient-to-r from-[#295070] to-[#47c2d2] text-white px-8 py-3 text-base font-semibold hover:brightness-110 rounded-full shadow-none border-none transition-all"
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