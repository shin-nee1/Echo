export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData2: Record<string, FAQItem[]> = {
  "home": [
    { question: "Do you work with both new and established businesses?", answer: "Yes. We work with early-stage brands starting from zero and established businesses seeking to refine, rebuild, or scale their digital presence." },
    { question: "What does Echo & Impact specialize in?", answer: "We combine brand design, UI/UX, websites, mobile & web app development, Shopify builds, Content Direction and full-spectrum digital marketing, all managed by one coordinated team." },
    { question: "What if I don’t know exactly what I need?", answer: "That’s common. Our discovery process clarifies your goals, evaluates your current assets, and our experienced business consultants help you define the exact scope required before any work begins." },
    { question: "How do you determine pricing?", answer: "Pricing is based on the required scope, complexity, and timeline. Based on the requirements we suggest either our pre-built packages or provide you with custom pricing tailored to your needs." },
    { question: "How are your projects structured?", answer: "Each project begins with a discovery and alignment phase, followed by a defined scope, timeline, and workflow. Production only starts once all expectations are clear on both sides." },
    { question: "How involved do clients need to be?", answer: "We manage the full process and keep communication structured. Client involvement focuses on providing information, assets, feedback, and approvals at key checkpoints." },
    { question: "How do you ensure consistency between design, development, and marketing?", answer: "All teams operate through one integrated roadmap with unified guidelines and synchronized communication. You also get a dedicated project manager that oversees this alignment, ensuring that decisions flow smoothly across design, development, and marketing, avoiding the disconnects common with going with separate vendors." },
    { question: "How do you handle revisions and feedback?", answer: "Revisions follow a structured review cycle with clear checkpoints. Feedback is consolidated and applied within each phase, so the project stays organized and avoids repeated rework." },
    { question: "What happens if the scope needs to change midway?", answer: "We document scope from the start to avoid changes, but if adjustments are necessary, they’re discussed, approved, and added transparently, never assumed." },
    { question: "Do you outsource any part of the work?", answer: "No. All core work, design, development, and marketing, is carried out by our in-house senior team so quality and accountability remain consistent." },
    { question: "Can you work within my existing tools and platforms?", answer: "Yes. Whether it’s your CMS, ad accounts, analytics setup, or project tools, we adapt as long as the systems align with best practices." },
    { question: "What if my business is outside the US?", answer: "We work with clients internationally. Our workflows, communication systems, and timelines are structured to support teams across different time zones effectively." },
    { question: "Will I own the work after the project is completed?", answer: "Yes. All approved deliverables are handed over with the necessary files, accesses, assets and documentation." },
    { question: "Do you offer ongoing support after launch?", answer: "Yes. We continue with maintenance, optimization, and long-term marketing support if required, depending on the nature of the project." }
  ],
  "about": [
    { question: "Do you work with businesses of all sizes?", answer: "Yes. We support early stage brands, growing companies, and established organizations across industries." },
    { question: "Are your teams based in one location?", answer: "We operate as a unified team with members in the United States and internationally. All work is coordinated through structured communication systems." },
    { question: "How do you ensure alignment across teams?", answer: "Shared roadmaps, structured processes, and dedicated project management keep every department synchronized." },
    { question: "Do you accept long term partnerships?", answer: "Yes. Many clients work with us across multiple scopes and stages as their brand grows." }
  ],
  "contact": [
    { question: "Is this a sales call?", answer: "No. The first conversation is about understanding and consultation not selling." },
    { question: "Do I need a detailed brief?", answer: "No. You can share as much or as little as you have." },
    { question: "Do you work under NDA?", answer: "Yes. All conversations and shared information are treated as confidential." }
  ],

  // ==================== DESIGN SERVICES ====================
  "brand-identity-guidelines": [
    { question: "How long does a brand identity project usually take?", answer: "Timelines depend on the depth of how many components are required. Most projects range from a few weeks to a month, with a clear roadmap defined before work begins." },
    { question: "Do I need a complete rebrand or can you refine what I already have?", answer: "Both options are possible. If your current identity has a strong foundation, we refine and expand it. If it's limiting growth or inconsistent, we recommend building a clearer, stronger direction." },
    { question: "Is the logo the main focus of this service?", answer: "The logo is only one part of your identity. This service covers your full visual and verbal foundation, color, type, voice, visual language, and real-world application. Not just a symbol." },
    { question: "Will I be involved in the creative process?", answer: "Yes. Key checkpoints are built into the process for alignment and feedback. You’re involved throughout the process, and the creative execution remains structured and guided by our senior team." },
    { question: "Can you create brand guidelines even if I already have a logo?", answer: "Yes. Many clients come with existing logos but lack consistency elsewhere. We can build guidelines, voice, color, layout rules, and visual language around your current identity if it’s strong enough to scale." },
    { question: "Do I own the final identity once the project is complete?", answer: "Yes. All approved deliverables are handed over with the necessary files, assets, and usage instructions so you can apply the identity confidently." },
    { question: "Will my identity work across digital, print, and future campaigns?", answer: "Yes. Everything is designed with flexibility and scalability in mind. Identities are tested across real scenarios so they perform consistently across platforms and future content." },
    { question: "How does brand identity tie into UI/UX or product design?", answer: "This can shape how your product feels and communicates. Typography, color, spacing, tone, and visual language from your brand identity are extended into your website, mobile app, dashboard, or product interface to create a unified user experience." }
  ],
  "ui-ux-design": [
    { question: "What’s the typical timeline for a UI/UX project?", answer: "Timelines depend on scope, feature depth, interfaces and number of screens. We define a clear roadmap upfront so expectations are aligned before work begins." },
    { question: "Do you redesign existing interfaces or only create new ones?", answer: "Both. We can refine your current UI/UX if the foundation is strong, or rebuild it entirely if it’s limiting growth, usability, or performance." },
    { question: "Do I need a design system for my product?", answer: "If your platform will grow, scale, or add new features, a design system is strongly recommended. It increases consistency and reduces future design and development time." },
    { question: "Will I be involved in the process?", answer: "Yes. You’re involved at key checkpoints, during research alignment, wireframes, UI reviews, and prototype testing ensuring the product evolves in the right direction and as per your expectations." },
    { question: "Can you make our UI align with our existing brand identity?", answer: "Absolutely. UI/UX extends your brand identity into product form, ensuring visuals, tone, and behavior remain cohesive across all digital experiences." },
    { question: "Do I own the final UI/UX files?", answer: "Yes. All approved design files, components, prototypes, and assets are handed over upon completion." },
    { question: "Can you handle both design and development?", answer: "Yes. Our development team builds interfaces exactly as designed, making the transition from UI/UX to production seamless and consistent." }
  ],
  "creative-direction": [
    { question: "Do I need creative direction if I already have a brand identity?", answer: "Yes. Brand identity defines the visual system; creative direction defines how your brand expresses it in real content, campaigns, and storytelling." },
    { question: "Can you create creative direction without a photoshoot?", answer: "Yes. We can build full direction systems for social content, campaigns, and platform expression without requiring a shoot." },
    { question: "Is this only for large brands?", answer: "Not at all. Early-stage brands benefit most because creative direction creates instant clarity and consistency from day one." },
    { question: "How detailed is the final creative direction?", answer: "It includes visual tone, campaign concepts, storytelling structures, content pillars and moodboards, everything needed to guide execution." },
    { question: "What if I don’t know what direction I want?", answer: "Most clients don’t. Our discovery workshops uncover your tone, audience expectations, and competitive gaps so we craft a direction that fits your brand naturally." },
    { question: "Will this help with content creation?", answer: "Yes. Creative direction shapes content style, behavior, and consistency. It becomes the backbone of all future content and campaigns." },
    { question: "Can you align creative direction with an existing marketing strategy?", answer: "Absolutely. We can integrate it with your current strategy or refine the strategy based on the new direction." }
  ],
  "photography-videography": [
    { question: "Do I need a full shoot or can we start small?", answer: "Both options are available. We can begin with a focused session or build a larger content library depending on your goals and timeline." },
    { question: "Can you match an existing visual style?", answer: "Yes. We can follow your current direction or evolve it into a more refined, cohesive look." },
    { question: "Do you handle creative concepts as well?", answer: "Yes. Concepts, storyboards, shot lists, moodboards, and direction are all part of the service." },
    { question: "What if I’m not comfortable on camera?", answer: "We guide founders and teams through a structured, easy process to ensure you look confident and natural, no experience needed." },
    { question: "Can you deliver content for multiple platforms?", answer: "Yes. Assets can be exported for Instagram, TikTok, YouTube, your website, ads, and internal communications." },
    { question: "Do you provide raw files?", answer: "Yes, if required. Edited deliverables are always included." },
    { question: "Can you record podcasts or long-form content?", answer: "Yes. We offer podcast filming, full editing support. We also provide a podcast studio in Buffalo, NY for teams who need a premium recording space without full production support." },
    { question: "Do you travel for shoots?", answer: "Yes. Travel can be arranged depending on project scope, budget and requirements." }
  ],
  "motion-graphic-design": [
    { question: "Do animations increase performance load?", answer: "We design motion with performance in mind, lightweight, efficient, and optimized for the platforms where they will be used." },
    { question: "Can you animate our existing brand assets?", answer: "Yes. We can bring motion to your current identity as long as the foundation is strong enough for extension." },
    { question: "Do you offer both short-form and long-form motion work?", answer: "Yes. From micro-animations and social assets to longer explainers, we support a wide range of motion needs." },
    { question: "Can you create graphics for our ongoing social content?", answer: "Yes. We can create monthly, campaign-based, or one-time graphic kits depending on your content volume." },
    { question: "Can these animations be used inside mobile or web apps?", answer: "Yes. We produce motion systems suitable for UI/UX environments, with formats optimized for development handoff." },
    { question: "Do you provide the source files?", answer: "Yes. All approved files are delivered along with exports needed for real-world use." },
    { question: "Can you match an existing creative direction?", answer: "Absolutely. We can extend your current direction or evolve it into a more cohesive system." }
  ],

  // ==================== DEVELOP SERVICES ====================
  "website-development": [
    { question: "Do you use templates or pre-made themes?", answer: "No. All websites are custom-built to match your brand, goals, and functionality requirements." },
    { question: "Can you rebuild an existing website instead of starting from scratch?", answer: "Yes, if the current structure is strong enough to refine. If it limits performance or scalability, we recommend a rebuild." },
    { question: "What platforms do you build on?", answer: "We work with React, Node.js, PHP, .NET, and WordPress, along with other modern frameworks and CMS solutions. The technology stack is selected based on what best supports your product, performance needs, and future growth." },
    { question: "How long does a website project take?", answer: "Timelines vary by scope and complexity. Most projects range from a few weeks to multiple months depending on features and content volume." },
    { question: "Will I be able to edit my website after it’s built?", answer: "Depending on the scope, yes. CMS access and structured content blocks allow you to update pages, sections, and content easily." },
    { question: "Can you integrate third-party tools or plugins?", answer: "Yes. We support integrations such as analytics, automations, CRMs, forms, lead systems, APIs and more, as long as they follow best practices." },
    { question: "Do you provide hosting recommendations?", answer: "Yes. We advise on hosting, security, and performance setups tailored to your site’s needs." },
    { question: "Will the website be optimized for SEO?", answer: "Yes. Technical SEO fundamentals are built into every project." },
    { question: "Do you offer ongoing support after launch?", answer: "Yes. We provide maintenance, updates, and optimization support when required." },
    { question: "Do you sign NDAs?", answer: "Yes. We operate under an NDA by default. Every project begins with confidentiality in place so your ideas, data, and strategy remain fully protected." }
  ],
  "shopify-development": [
    { question: "Can you migrate my store from another platform (WooCommerce, Webflow, etc.)?", answer: "Yes. We handle full migrations including products, customers, orders, redirects, and SEO considerations." },
    { question: "Do you build custom Shopify themes or use existing ones?", answer: "Both are possible. We recommend the approach that fits your goals, budget, and long-term scalability." },
    { question: "How much control will I have after the store is built?", answer: "You will be able to manage products, content, banners, collections, pages, and more. We provide training and documentation so you can manage your store." },
    { question: "Can you integrate apps like subscriptions, reviews, or loyalty programs?", answer: "Yes. We integrate and configure third-party apps that support your business model and user journey." },
    { question: "Do you optimize for speed and performance?", answer: "Yes. Store speed, clean code, and optimizing for Core Web Vitals are baked into every build." },
    { question: "Can you help with product photography or content?", answer: "Yes. Our creative team can produce visuals that align with your Shopify design and conversion goals." },
    { question: "Will you provide guidance on best practices for store management?", answer: "Yes. We guide you through product structure, content practices, and operational workflows so your team can manage the store efficiently." },
    { question: "What payment gateways can you integrate?", answer: "We support PayPal, Stripe, Authorize and all major international/local gateways." },
    { question: "Do you offer ongoing support?", answer: "Yes. We provide maintenance, feature updates, and optimization support when needed." }
  ],
  "web-application-development": [
    { question: "Can you build an MVP or do you only handle full-scale apps?", answer: "Both. We build MVPs for early validation and fully scalable applications for long-term growth." },
    { question: "What technologies do you use for web applications?", answer: "We work with modern frameworks such as React, Node.js, PHP, .NET, and other scalable architectures based on what best supports your goals." },
    { question: "Can you integrate my app with third-party platforms?", answer: "Yes. We build and connect APIs, payment systems, CRMs, messaging tools, analytics platforms, and custom integrations." },
    { question: "Do you help with UX for complex applications?", answer: "Yes. UX structure is a fundamental part of the process. Flows, journeys, and interaction patterns are crafted before development begins." },
    { question: "How long does it take to build a web app?", answer: "Timelines depend entirely on the scope and feature requirements. Usually, it takes from 4 to 8 months. A clear roadmap is defined before work begins." },
    { question: "Do you support apps after launch?", answer: "Yes. We provide maintenance, new feature development, optimization, and long-term support." },
    { question: "Is my data secure?", answer: "Yes. Security best practices, role-based access, encryption, and safe architecture are built into the foundation." },
    { question: "Do you sign NDAs?", answer: "Yes. We operate under an NDA by default so your product, ideas, and data remain fully protected." }
  ],
  "mobile-application-development": [
    { question: "Do you build native or cross-platform apps?", answer: "Both. We recommend the best approach based on your goals, features, budget, and long-term roadmap." },
    { question: "Can you develop the backend as well?", answer: "Yes. An app is not complete without its backend. We build backend systems, APIs, admin dashboards, and integrations as part of the mobile app ecosystem." },
    { question: "Do you help with UX design for complex apps?", answer: "Yes. UX structure is an essential part of the process, user flows, journeys, and interactions are defined before development." },
    { question: "Will the app be compatible with future OS updates?", answer: "Yes. We build with modern frameworks and flexible architecture, future updates can be handled smoothly." },
    { question: "How long does it take to build a mobile app?", answer: "Timelines depend on complexity and feature set. Usually, it takes from 4 - 8 months. A clear roadmap is provided at the start." },
    { question: "Can you integrate third-party tools (payments, auth, analytics)?", answer: "Yes. We integrate all required tools such as Stripe, Authorize, ID.me, GA4 and much more, as long as they follow best practices and support secure implementations." },
    { question: "Do you support the app after launch?", answer: "Yes. We offer post-launch support, updates, feature expansion, and dedicated packages for ongoing maintenance." },
    { question: "Do you sign NDAs?", answer: "Yes. We operate under an NDA by default to fully protect your app concept, data, and product architecture." }
  ],
  "cro-speed-optimization": [
    { question: "How long does CRO take to show results?", answer: "Most improvements show noticeable impact within a few weeks, depending on traffic and test complexity. We outline expected timelines during the initial assessment." },
    { question: "Is CRO only for eCommerce?", answer: "No. CRO works across websites, SaaS platforms, B2B funnels, landing pages, and service sites anywhere user action matters." },
    { question: "Do you need access to our analytics?", answer: "Yes. Accurate CRO requires access to analytics, heatmaps, and tracking tools. If you don’t have them set up, we configure everything for you." },
    { question: "Will CRO affect my existing design or layout?", answer: "Optimizations enhance clarity and usability, but they never compromise your branding. Any major layout changes are always discussed and aligned before implementation." },
    { question: "Do you work under NDA?", answer: "Always. All assets, data, and insights remain fully confidential. We work exclusively under NDA to protect your business and user information." },
    { question: "Do you handle both CRO and speed optimization together?", answer: "Yes. Performance and conversion are interconnected. We address both simultaneously to create a unified improvement strategy." },
    { question: "Can you integrate tracking tools for us?", answer: "Yes. We set up GA4, heatmaps, funnels, and behavioral analytics as part of the process." }
  ],

  // ==================== MARKET SERVICES ====================
  "paid-media": [
    { question: "Which platforms do you manage?", answer: "We manage Meta (Facebook & Instagram), Google (Search, PPC, Display, Performance Max), TikTok Ads, and YouTube Ads, depending on what aligns with your product, goal, audience, and funnel." },
    { question: "How much budget do I need to get started?", answer: "Budget requirements depend on your goals, product value, industry, and competitive landscape. We recommend a discussion to determine a realistic starting point and expected performance." },
    { question: "Do you create the ads or do we need to provide them?", answer: "We can work with you to create all required ad assets, from static visuals to motion graphics and UGC-style content. If you already have a creative, we refine and adapt it for performance." },
    { question: "How long until we see results?", answer: "Some campaigns show early signals in the first few days, while full optimization and scaling can take several weeks depending on your product, market, data maturity and platform response. We provide clear expectations before launch." },
    { question: "Do you handle tracking and pixel setup?", answer: "Yes. We configure tracking across Meta Pixel, Google Tag Manager, server-side tracking options, custom events, and conversion APIs to ensure accurate data." },
    { question: "What if we’ve tried paid ads before and it didn’t work?", answer: "Many clients come to us after disappointing results elsewhere. Underperforming ads usually stem from poor targeting, weak creative, unclear offers, or broken funnels. We diagnose these issues before launching a new strategy." },
    { question: "Do you lock clients into long-term contracts?", answer: "No. Paid media is offered through flexible retainers or structured sprints depending on needs and goals." }
  ],
  "seo-content-strategy": [
    { question: "How long does it take to see SEO results?", answer: "SEO is a long-term growth channel. While small improvements can appear in weeks, meaningful ranking and traffic changes typically develop over several months depending on competition and website history." },
    { question: "Do you write the content as well?", answer: "Yes. We offer content planning and creation, including blogs, resources, landing pages, and website copy, tailored to your voice and SEO strategy." },
    { question: "Is SEO included in website development?", answer: "Foundational SEO and structure are included during development. Ongoing SEO requires a dedicated strategy and monthly optimization." },
    { question: "Can you fix my existing SEO issues?", answer: "Yes. We perform detailed audits and address technical, structural, and content issues affecting visibility." },
    { question: "Do you guarantee rankings?", answer: "No ethical agency can guarantee specific rankings due to algorithm variables. We guarantee a strategic, transparent approach focused on sustainable growth." },
    { question: "Can SEO support paid media or vice versa?", answer: "Absolutely. Paid media speeds testing and insights, while SEO strengthens long-term acquisition. We align both channels when clients use multiple services." }
  ],
  "social-media-management": [
    { question: "How many posts do you create per month?", answer: "The volume depends on your goals and package. We offer foundational to high frequency, multi format plans." },
    { question: "Do you handle reels and video content?", answer: "Yes. Our main focus is always on moving content instead of static posts. This includes reels, motion graphics, short form edits, animated posts, and more." },
    { question: "Will you manage my messages and comments?", answer: "Yes. Community management can be included depending on your scope." },
    { question: "Do you create the content or do I need to provide assets?", answer: "Both options are available. We can work with existing assets or work with you to create original content for you." },
    { question: "Can you help me grow followers?", answer: "Yes, through strategic content and proper engagement. We do not use shortcuts or artificial growth methods." },
    { question: "Do you manage paid ads on social media as well?", answer: "Paid media is a separate service, but both teams collaborate closely if you are using multiple services." },
    { question: "Can you follow strict brand guidelines?", answer: "Yes. Visual and verbal guidelines are followed precisely across all outputs." }
  ],
  "email-sms-marketing": [
    { question: "Do you design the emails as well?", answer: "Yes. All email templates and campaign designs are created to match your brand identity and communication style." },
    { question: "Can you set up automation in my existing platform?", answer: "Yes. We work with Klaviyo, Mailchimp, HubSpot, ActiveCampaign, and other major platforms." },
    { question: "Do you write the content too?", answer: "Yes. We handle both copywriting and design for all emails and SMS messages." },
    { question: "How often will you send campaigns?", answer: "This depends on your goals, audience size, and list health. We help you determine the ideal cadence." },
    { question: "Can you improve my current email performance?", answer: "Yes. We audit your flows, templates, list structure, and metrics to identify gaps and opportunities." }
  ],
  "analytics-tracking": [
    { question: "Do I need analytics if I’m already running ads?", answer: "Yes. Without accurate tracking, you cannot identify what is performing, where your money is going, or what needs improvement." },
    { question: "Can you fix my current tracking setup?", answer: "Yes. We can audit and correct issues with GA4, Meta Pixel, TikTok Pixel, server side tracking, and event configurations." },
    { question: "Do you build custom dashboards?", answer: "Yes. Dashboards can be created in GA4, Data Studio, or other tools based on your KPIs and reporting needs." },
    { question: "Can you track conversions across multiple platforms?", answer: "Yes. We configure attribution and multi channel tracking so you can understand cross platform performance more accurately." },
    { question: "Will I be able to understand the reports?", answer: "Yes. Reports are simple, clear, and focused on what matters. We highlight insights, trends, and actions without technical overwhelm." }
  ],
  "creative-optimization": [
    { question: "How often do you refresh creatives?", answer: "This depends on spend, audience size, and performance patterns. High spend accounts require faster refresh cycles, while smaller accounts can move at a more measured pace." },
    { question: "Do you handle both static and video assets?", answer: "Yes. We produce motion graphics, short form videos, static ads, carousels, thumbnails, and platform specific creative variations." },
    { question: "Can you optimize creatives I already have?", answer: "Yes. We can analyze and refine your existing assets or build optimized variations based on your current performance." },
    { question: "Do you script and storyboard videos?", answer: "Yes. Scriptwriting, hook ideation, storyboarding, and narrative flow are part of our creative process." },
    { question: "How do you know what to test first?", answer: "We begin with a performance audit to identify high impact opportunities. Typically, hooks, messaging, and formats drive the largest improvements." },
    { question: "Will optimized creatives lower my ad costs?", answer: "In many cases, yes. Strong creatives improve CTR, reduce CPMs, and increase conversion rates, making your campaigns more cost effective." }
  ]
};