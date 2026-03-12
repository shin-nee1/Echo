import React, { useState } from "react";
import { Mail, Phone, Home, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // ADDED IMPORT
import ContactImg from "@/assets/telephone.png.png";
import { servicesData } from "@/data/servicesData";
import { Button } from "@/components/ui/button"; // ADDED IMPORT

const ContactHeroMobile = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.60' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // REPLACE THIS URL with your Google Apps Script Web App URL
      const scriptURL = "https://script.google.com/macros/s/AKfycbw3wEssyGWkjFkneoL1hb6K8ZSJ5POpCeXe0RFw0DPiP_wk92aLFbo_a91TYBd15ZTn4w/exec"; 
      
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitMessage("Request submitted successfully!");
        form.reset(); // Clear the form
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setSubmitMessage("Error connecting to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-auto relative overflow-y-auto bg-transparent scrollbar-hide">
      <section className="relative w-full flex flex-col items-center pt-[clamp(6rem,25vh,12rem)] pb-[5vh] px-[5%]">
        {/* ================= MASTER WRAPPER ================= */}
        <div className="relative w-full max-w-[28rem] flex flex-col items-center">
          
          {/* 1. TELEPHONE - z-0 (LOWERED) */}
          <div className="relative z-0 w-[55%] max-w-[15rem]">
            <img
              src={ContactImg}
              alt="Telephone"
              className="w-full h-auto object-contain filter drop-shadow-[0_0_2rem_rgba(0,210,255,0.4)]"
            />
          </div>

          {/* 2. SEMI-CIRCLES (The Crown) - z-0 */}
          <div className="absolute top-[-15%] max-[500px]:top-[-18%] w-full h-[30%] z-0 pointer-events-none flex items-end justify-center overflow-visible">
            <svg
              viewBox="0 0 400 200"
              className="w-[115%] h-auto overflow-visible"
            >
              <defs>
                <linearGradient id="arcFade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
                  <stop offset="5%" stopColor="#00d2ff" stopOpacity="1" />
                  <stop offset="95%" stopColor="#00d2ff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="M 100,200 A 100,100 0 0 1 300,200"
                fill="none"
                stroke="url(#arcFade)"
                strokeWidth="1.5px"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
              <path
                d="M 60,200 A 140,140 0 0 1 340,200"
                fill="none"
                stroke="url(#arcFade)"
                strokeWidth="1.5px"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
              <path
                d="M 20,200 A 180,180 0 0 1 380,200"
                fill="none"
                stroke="url(#arcFade)"
                strokeWidth="1.5px"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 3. THE FORM CARD - z-20 (HIGHER than phone) */}
          <div
            className="relative z-20 w-full -mt-[25%] border border-white/20 shadow-2xl overflow-hidden rounded-[2.5rem] backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{ backgroundImage: noiseTexture, opacity: 0.7 }}
            />

            <div className="relative z-10 flex flex-col justify-center px-[6%] pb-[2rem] pt-[5.5rem]">
              <h2 className="text-white font-bold tracking-tight text-center mb-[1.5rem] text-[1.25rem] whitespace-nowrap drop-shadow-md">
                Tell Us About Your Project
              </h2>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-[0.75rem]">
                {/* INPUTS - Added 'name' attributes */}
                {[
                  { label: "Name*", name: "Name", type: "text" },
                  { label: "Email*", name: "Email", type: "email" },
                  { label: "Phone*", name: "Phone", type: "text" },
                  { label: "Company", name: "Company", type: "text" }
                ].map((p) => (
                  <input
                    key={p.name}
                    name={p.name}
                    type={p.type}
                    placeholder={p.label}
                    required={p.label.includes("*")}
                    className="rounded-xl px-[1rem] bg-zinc-900/80 border border-white/10 text-white placeholder:text-white/40 text-[0.85rem] h-[2.75rem] focus:outline-none focus:ring-1 focus:ring-[#00d2ff]/30 transition-all shadow-inner w-full"
                  />
                ))}

                {/* SERVICE INTEREST DROPDOWN */}
                <div className="col-span-2 relative">
                  <select name="Service" defaultValue="" required className="w-full rounded-xl px-[1rem] bg-zinc-900/80 border border-white/10 text-white/50 text-[0.85rem] appearance-none h-[2.75rem] cursor-pointer focus:outline-none focus:text-white">
                    <option value="" disabled className="bg-[#050a0f]">
                      Service Interest*
                    </option>
                    
                    <optgroup label="Design Services" className="bg-[#050a0f]">
                      {servicesData.filter(s => s.category === "design").map((service) => (
                        <option key={service.slug} value={service.title}>{service.title}</option>
                      ))}
                    </optgroup>

                    <optgroup label="Development Services" className="bg-[#050a0f]">
                      {servicesData.filter(s => s.category === "develop").map((service) => (
                        <option key={service.slug} value={service.title}>{service.title}</option>
                      ))}
                    </optgroup>

                    <optgroup label="Marketing Services" className="bg-[#050a0f]">
                      {servicesData.filter(s => s.category === "market").map((service) => (
                        <option key={service.slug} value={service.title}>{service.title}</option>
                      ))}
                    </optgroup>
                  </select>
                  <ChevronDown className="absolute right-[1rem] top-1/2 -translate-y-1/2 w-[1.1rem] h-[1.1rem] text-white/40 pointer-events-none" />
                </div>

                {/* PROJECT DESCRIPTION */}
                <textarea
                  name="Description"
                  placeholder="Project Description..."
                  required
                  className="col-span-2 rounded-xl px-[1rem] py-[0.75rem] bg-zinc-900/80 border border-white/10 text-white placeholder:text-white/40 resize-none text-[0.85rem] focus:outline-none h-[6rem] shadow-inner"
                />

                {/* BUDGET RANGE (Input) */}
                <div className="col-span-2">
                  <input
                    name="Budget"
                    type="text"
                    placeholder="Budget Range (Min - Max $)"
                    className="w-full rounded-xl px-[1rem] bg-zinc-900/80 border border-white/10 text-white placeholder:text-white/40 text-[0.85rem] h-[2.75rem] focus:outline-none focus:ring-1 focus:ring-[#00d2ff]/30 transition-all shadow-inner"
                  />
                </div>

                {/* TIMELINE DROPDOWN */}
                <div className="col-span-2 relative">
                  <select name="Timeline" defaultValue="" required className="w-full rounded-xl px-[1rem] bg-zinc-900/80 border border-white/10 text-white/50 text-[0.85rem] appearance-none h-[2.75rem] cursor-pointer focus:outline-none focus:text-white">
                    <option value="" disabled className="bg-[#050a0f]">
                      How soon do you want to start?*
                    </option>
                    <option value="Immediately" className="bg-[#050a0f]">Immediately</option>
                    <option value="In a month" className="bg-[#050a0f]">In a month</option>
                    <option value="In 2 - 3 months" className="bg-[#050a0f]">In 2 - 3 months</option>
                    <option value="Not sure" className="bg-[#050a0f]">Not sure</option>
                  </select>
                  <ChevronDown className="absolute right-[1rem] top-1/2 -translate-y-1/2 w-[1.1rem] h-[1.1rem] text-white/40 pointer-events-none" />
                </div>

                {/* CONSENT CHECKBOX */}
                <div className="col-span-2 flex items-start gap-2 mt-2 mb-1">
                  <input
                    type="checkbox"
                    id="consent-mobile"
                    name="Consent"
                    value="Yes"
                    required
                    className="mt-0.5 w-4 h-4 shrink-0 rounded border-white/10 bg-zinc-900/60 accent-[#00d2ff] cursor-pointer"
                  />
                  <label htmlFor="consent-mobile" className="text-white/70 text-[13px] leading-tight">
                    By checking this box, you consent to receive emails, text messages, and phone calls from Echo & Impact. For more info, please see our{" "}
                    <Link to="/privacy-policy" className="text-[#00d2ff] hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="/terms-conditions" className="text-[#00d2ff] hover:underline">
                      Terms and Conditions
                    </Link>.
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="col-span-2 mt-1">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="cyan"
                    className="w-full bg-[#00d2ff] hover:bg-[#00b8e6] text-slate-900 rounded-lg font-bold transition-all duration-300 h-10"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Project"}
                  </Button>
                  
                  {/* Success/Error Message */}
                  {submitMessage && (
                    <p className="text-center text-white text-xs mt-2 font-medium">
                      {submitMessage}
                    </p>
                  )}
                </div>

              </form>
            </div>
          </div>

          {/* 4. INFO CARD - z-40 */}
          <div className="relative z-40 w-full mt-[1.5rem]">
            <div
              className="relative overflow-hidden border border-white/10 backdrop-blur-2xl rounded-[1.75rem] shadow-2xl w-full p-[1.25rem]"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="absolute top-0 right-0 w-[5rem] h-[5rem] bg-[#00d2ff]/20 blur-[2rem] pointer-events-none -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[5rem] h-[5rem] bg-[#00d2ff]/20 blur-[2rem] pointer-events-none translate-y-1/2 -translate-x-1/2" />

              <div
                className="absolute inset-0 pointer-events-none z-0 opacity-30"
                style={{ backgroundImage: noiseTexture }}
              />

              <div className="relative z-10 space-y-[0.75rem]">
                <div className="flex items-center gap-[0.75rem]">
                  <Mail className="text-white w-[1.1rem] h-[1.1rem] shrink-0" />
                  <span className="text-white text-[0.75rem] font-medium tracking-wide">
                    info@echoandimpact.com
                  </span>
                </div>
                <div className="flex items-center gap-[0.75rem]">
                  <Phone className="text-white w-[1.1rem] h-[1.1rem] shrink-0" />
                  <span className="text-white text-[0.75rem] font-medium tracking-wide">
                    +1 (844) 591-ECHO
                  </span>
                </div>
                <div className="flex items-start gap-[0.75rem]">
                  <Home className="text-white w-[1.1rem] h-[1.1rem] shrink-0 mt-[0.1rem]" />
                  <span className="text-white text-[0.75rem] font-medium leading-tight tracking-wide">
                    5225 Main St, Suite 4, Buffalo NY, 14221
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactHeroMobile;