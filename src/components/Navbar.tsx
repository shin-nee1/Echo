import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesDropdown = ({ onClose }: { onClose?: () => void }) => {
  const sections = [
    {
      title: "Design",
      items: [
        "Brand Identity",
        "UI/UX Design",
        "Creative Direction",
        "Photography & Videography",
        "Brand Identity",
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

  return (
    <div className="grid grid-cols-3 gap-8 text-sm max-h-[60vh] overflow-y-auto">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="mb-4 text-lg font-semibold text-foreground">
            {section.title}
          </h4>
          <ul className="space-y-3">
            {section.items.map((item) => (
              <li
                key={item}
                className="cursor-pointer rounded-lg px-3 py-2 text-muted-foreground hover:bg-cyan/20 hover:text-cyan transition"
                onClick={onClose}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan to-primary flex items-center justify-center">
              <span className="text-background font-bold text-sm">E&I</span>
            </div>
            <span className="font-display font-bold text-xl">
              echo<span className="text-cyan">&</span>impact
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-cyan ${
                isActive("/") ? "text-cyan" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>

            {/* SERVICES DROPDOWN */}
<div
  ref={servicesRef}
  className="relative"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>
  <button
    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
      servicesOpen ? "text-cyan" : "text-muted-foreground hover:text-cyan"
    }`}
  >
    Services
    <ChevronDown className="w-4 h-4" />
  </button>

  <AnimatePresence>
    {servicesOpen && (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="
  absolute
  top-full
  left-1/2
  -translate-x-1/2
  mt-4
  w-[720px]
  rounded-2xl
  border border-cyan/40
  bg-background
  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
  p-6
  z-[9999]
"

      >
        <ServicesDropdown onClose={() => setServicesOpen(false)} />
      </motion.div>
    )}
  </AnimatePresence>
</div>


            <Link
              to="/work"
              className={`text-sm font-medium transition-colors hover:text-cyan ${
                isActive("/work") ? "text-cyan" : "text-muted-foreground"
              }`}
            >
              Work
            </Link>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-cyan ${
                isActive("/about") ? "text-cyan" : "text-muted-foreground"
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-cyan ${
                isActive("/contact") ? "text-cyan" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-cyan/50 text-cyan hover:bg-cyan/10"
            >
              Contact Us
            </Button>
            <Button
              size="sm"
              className="bg-cyan text-background hover:bg-cyan/90 glow-cyan"
            >
              Get Started
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 border-t border-border/50 pt-4 space-y-4"
            >
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Work", path: "/work" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm font-medium transition-colors hover:text-cyan ${
                    isActive(link.path)
                      ? "text-cyan"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Button className="w-full bg-cyan text-background hover:bg-cyan/90">
                Get Started
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
