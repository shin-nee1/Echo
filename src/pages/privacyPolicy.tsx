import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-wrapper text-white pb-32">
      <div className="container mx-auto px-4">
        
        {/* CENTERED HEADER SECTION */}
        <div className="pt-32 mb-16 text-center">
          <h1 className="text-white font-bold tracking-tight leading-[1.1] mb-6" 
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Echo & Impact <span className="text-[#47c2d2]">Privacy Policy</span>
          </h1>
          
          {/* THE CENTERED LINE */}
          <div className="w-full max-w-3xl mx-auto h-[1px] bg-white/20 mb-12" />

          {/* INITIAL CONTACT DETAILS */}
          <div className="space-y-2 opacity-90 text-sm md:text-base font-medium">
            <p>Effective Date: <span className="text-[#47c2d2]">January 1, 2026</span></p>
            <p>Entity: Echo & Impact Inc. (Echo & Impact, we, us, our)</p>
            <div className="pt-4 space-y-1">
              <p className="uppercase tracking-widest text-[10px] text-[#47c2d2] mb-2 font-bold">Contact Information</p>
              <p>Email: info@echoandimpact.com</p>
              <p>Address: 5225 Main St, Buffalo, NY 14221</p>
              <p>Phone: +1 (844) 591-ECHO</p>
            </div>
          </div>
        </div>

        {/* BODY TEXT - MINIMALIST STACKED LAYOUT */}
        <div className="max-w-4xl mx-auto space-y-12 text-slate-300 leading-relaxed text-sm md:text-base">
          
          {/* 1. SCOPE */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4">1. Scope and Roles</h2>
            <div className="space-y-4">
              <p><span className="text-white font-semibold">1.1 Scope.</span> This Privacy Policy explains how we collect, use, disclose, and protect personal information in connection with our websites (including www.echoandimpact.com), portals, communications, studios, and business operations (collectively, Sites), and in connection with services we provide to clients (Services).</p>
              <p><span className="text-white font-semibold">1.2 Controller Role.</span> We act as a business/controller when we collect personal information about website visitors, prospects, vendors, studio/podcast guests we book, and client personnel.</p>
              <p><span className="text-white font-semibold">1.3 Processor Role.</span> When we process personal information on your behalf in connection with an Order, including but not limited to marketing, ecommerce, analytics, creative or development services, we act as your processor/service provider. Processing is governed by Echo & Impact’s Privacy Policy and Terms & Conditions.</p>
            </div>
          </section>

          {/* 2. PERSONAL INFO */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4">2. Personal Information We Collect</h2>
            <div className="space-y-4">
              <p>Depending on your interactions, we may collect the following categories:</p>
              <p><span className="text-white font-semibold">2.1 Identifiers and Contact Data</span>, including name, email, phone number, employer, job title, and geolocation.</p>
              <p><span className="text-white font-semibold">2.2 Commercial and Billing Data</span>, including order details, invoices, and transaction metadata. Our processors do not store full payment card numbers.</p>
              <p><span className="text-white font-semibold">2.3 Professional/Role Data</span>, including industry, team permissions, and training records.</p>
              <p><span className="text-white font-semibold">2.4 Usage and Device Data</span>, including IP address, cookies, and session diagnostics.</p>
              <p><span className="text-white font-semibold">2.5 Audio/Visual Content</span> captured in studio/podcast sessions.</p>
            </div>
          </section>

          {/* 3. SOURCES */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4">3. Sources</h2>
            <p>We collect personal information from: (a) You directly; (b) Automated means (cookies/logs); (c) Service providers and advisers; (d) Platforms you connect.</p>
          </section>

          {/* 4. PURPOSES */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4">4. Purposes of Use</h2>
            <p>We use information to provide and secure Sites/Services, communicate with you, perform services in signed Orders, process payments, analyze usage, and comply with law.</p>
          </section>

          {/* 5. SMS/MMS */}
          <section className="p-6 border border-white/10 bg-white/5 rounded-xl">
            <h2 className="text-white font-bold text-xl mb-4">5. SMS/MMS Authorization</h2>
            <div className="space-y-3">
              <p><span className="text-white font-semibold">5.3 Promotional Use.</span> Echo & Impact does not sell or share your phone number with third parties for marketing purposes.</p>
              <p><span className="text-white font-semibold">5.4 Opt Out.</span> Reply STOP to any message or email support@echoandimpact.com to opt out at any time.</p>
            </div>
          </section>

          {/* 6. COOKIES */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4">6. Cookies, Analytics, and Advertising</h2>
            <p>We use technologies like GA4, Meta, and Google tags to measure performance and deliver advertising where permitted.</p>
          </section>

          {/* 7. DISCLOSURES */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4">7. Disclosures of Personal Information</h2>
            <p>We disclose information to service providers, professional advisers, affiliates (including offshore teams in Karachi, Pakistan), and for legal compliance.</p>
          </section>

          {/* 8. PAYMENT */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4">8. Payment Information</h2>
            <p>Payments are handled by third-party processors. We do not store full card numbers. Direct collection for orders is restricted to designated billing personnel under strict security controls.</p>
          </section>

          {/* 9. RETENTION */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4">9. Retention</h2>
            <p>Typical retention: Marketing leads (24-36 months); Project records (term + 7 years); Studio files (7 years).</p>
          </section>

          {/* 10. RIGHTS */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4">10. Your Privacy Rights</h2>
            <p>Depending on your state, you may access, correct, or delete data. Submit requests to <span className="text-[#47c2d2]">info@echoandimpact.com</span>.</p>
          </section>

          {/* 11. INTERNATIONAL */}
          <section>
            <h2 className="text-white font-bold text-xl mb-4">11. International Users; Transfers</h2>
            <p>Information may be transferred to and processed in the United States and our offshore operations in <span className="text-white font-semibold">Karachi, Pakistan</span>.</p>
          </section>

          {/* 12 - 16. FINAL SECTIONS */}
          <section className="space-y-8">
            <div>
              <h2 className="text-white font-bold text-xl mb-2">12. Security</h2>
              <p>We maintain commercially reasonable safeguards, though no method is 100% secure.</p>
            </div>
            <div>
              <h2 className="text-white font-bold text-xl mb-2">13. Children</h2>
              <p>Services are not directed to children under sixteen (16).</p>
            </div>
            <div>
              <h2 className="text-white font-bold text-xl mb-2">14. Third-Party Links</h2>
              <p>We are not responsible for the practices of third-party platforms linked on our Sites.</p>
            </div>
            <div>
              <h2 className="text-white font-bold text-xl mb-2">15. Changes to This Policy</h2>
              <p>Updates will be posted on this page with a revised Effective Date.</p>
            </div>
            <div>
              <h2 className="text-white font-bold text-xl mb-2">16. Contact Us</h2>
              <p>Questions? Reach out to <span className="text-[#47c2d2]">info@echoandimpact.com</span></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;