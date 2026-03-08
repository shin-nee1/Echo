export interface WhyUsItem {
  title: string;
  description: string;
}

export const whyUsData: Record<string, WhyUsItem[]> = {
  "home": [
    { title: "Client-First", description: "We prioritize your goals, your project, your timelines, and your outcomes above everything else. Our focus is on building solutions that actually move your business forward, not padding invoices. You get honest communication, realistic expectations, and a team fully invested in your success from the first meeting to the final delivery. We grow with you." },
    { title: "Unified Team", description: "Your brand, website, app, marketing, they all live within one connected system. Instead of juggling multiple partners, you work with a single team that designs, builds, and grows your entire digital presence with perfect alignment. Every output reinforces the next, creating consistency, efficiency, and long-term scalability." },
    { title: "Full Transparency", description: "Clear scopes. Clean timelines. Defined deliverables. You always know what’s happening, why it’s happening, and what comes next. Our scopes, deliverables, timelines, and processes are clearly defined and tracked so there is never confusion or guesswork. No hidden costs, no vague milestones, and no grey areas, just a clean and predictable partnership you can rely on." },
    { title: "Senior Expertise", description: "No junior hand-offs or “learning on your project.” Your project is never handed off to inexperienced team members. Every stage is led by senior-level designers, engineers, and performance specialists with real-world experience. This means faster problem-solving, better decision-making, and work that is executed with depth, precision, and long-term thinking." },
    { title: "Seamless Collaboration", description: "You’re never left waiting for updates or chasing someone for clarity. Our workflows are structured, our communication is fast, and our team remains consistently accessible throughout the entire project. You always know where things stand and can move forward with confidence at every step." },
    { title: "Partnership", description: "We challenge, refine, and improve your ideas. We don’t just execute tasks, we think with you. If an idea won’t work, we say it. If there’s a better direction, we recommend it. If something needs refining, we challenge it. You get a partner who brings perspective, strategy, and strong creative judgment, ensuring your brand grows with purpose and intention." }
  ],

  // ==================== DESIGN SERVICES ====================
  "brand-identity-guidelines": [
    { title: "Identity Built on Strategy", description: "Your brand identity isn’t built from visuals alone. We ground everything, logos, voice, color, and visual behavior in positioning, audience insight, and long-term goals, ensuring your identity feels intentional, not ornamental." },
    { title: "Visual and Verbal", description: "Most teams design how a brand looks and figure out how it speaks later. We do both in alignment. Your tone, messaging, and visuals are developed side-by-side, creating a cohesive identity that feels unified across touchpoints." },
    { title: "Senior-Level Craft", description: "Identity defines everything that follows, so it’s never handed to juniors or rushed through templates. Every part of your brand is shaped by senior designers and strategists with deep experience in identity and brand systems." },
    { title: "Built for Real-World Use", description: "A strong identity works in campaigns, websites, content, and products. Ours are designed with real application in mind. Scalable, flexible, and usable across your brand’s day-to-day needs." },
    { title: "Guidelines That Actually Guide", description: "Most brand books look good but aren’t practical. We create clear, structured guidelines that help your brand, partners, and vendors maintain consistency without confusion or interpretation gaps." }
  ],
  "ui-ux-design": [
    { title: "Designed Around Behavior", description: "UI/UX decisions begin with user insight and product goals, not visuals. Every flow, layout, and interaction is grounded in how real users think, move, and make decisions." },
    { title: "Designed Together", description: "Structure and aesthetics are created in alignment. This ensures your interface not only looks refined but functions intuitively and supports the broader product strategy." },
    { title: "Designers, Product Thinkers", description: "Your experience isn’t handled through template-based workflows. Senior UI/UX specialists shape every stage, resulting in cleaner logic, better usability, and stronger personalized long-term scalability." },
    { title: "Built to Scale", description: "Design systems, components, and structure are created with growth in mind. As your product evolves, your interface evolves smoothly alongside it." },
    { title: "Pixel Precision", description: "Every decision such as spacing, rhythm, hierarchy, color, interaction is shaped with intention. The result is an experience that looks polished, functions intuitively, and strengthens your brand at every touchpoint." }
  ],
  "creative-direction": [
    { title: "Strategic Creative Vision", description: "Your creative direction is built on positioning, audience insight, and brand behavior, not moodboard aesthetics alone. Everything we craft has purpose, structure, and strategic weight." },
    { title: "Visual + Narrative Alignment", description: "We blend creative visuals with storytelling clarity so your brand doesn’t just look good, it communicates powerfully. Every tone, style, and expression works together." },
    { title: "Built for Execution", description: "Creative direction only works when it can be used. We build systems your business can actually apply across design, content, campaigns, and production, with clarity, not confusion." }
  ],
  "photography-videography": [
    { title: "Creative & Technical", description: "Your shoots are planned and executed by a unified creative team that understands brand behavior, visual consistency, and platform performance, not just aesthetics." },
    { title: "Designed for Real Use", description: "Everything we produce is built for where it will actually live: social, web, ads, campaigns, or your product experience. Your content works, not just looks good." },
    { title: "Studio-Level Quality", description: "We don’t just capture visuals; we capture meaning. Each frame reflects your brand’s tone, positioning, and personality, ensuring stronger recognition and connection." },
    { title: "Clear Planning", description: "From shot lists and storyboards to locations, scripting, and direction, the entire process is structured and guided. You always know the plan and outcome." },
    { title: "Monthly or One-Off Content", description: "Whether you need continuous social content or a one-time brand shoot, our systems adapt to your needs without compromising quality." }
  ],
  "motion-graphic-design": [
    { title: "Brand-First Animations", description: "Every motion and graphic asset is built around your brand identity, from color and typography to pacing and character, ensuring visual consistency." },
    { title: "Designed for Performance", description: "Assets are optimized for social, web, ads, and product environments. Your content loads quickly, performs smoothly, and maintains quality across devices and platforms." },
    { title: "Strategic Visuals", description: "We use motion and graphics to simplify ideas, guide attention, and improve user understanding, making your communication clearer and more engaging." },
    { title: "Unified Creative System", description: "Your motion and graphic assets integrate seamlessly with your brand identity, creative direction, and broader content strategy creating a consistent narrative everywhere your brand appears." }
  ],

  // ==================== DEVELOP SERVICES ====================
  "website-development": [
    { title: "Design & Engineering", description: "Your website is built through a unified workflow between designers and developers, ensuring that every layout, interaction, and element works smoothly in real execution, not just in design files." },
    { title: "Fast, Secure, and Scalable", description: "We build for long-term growth. Your website is crafted with performance-first principles: optimized code, compressed assets, stable hosting recommendations, and scalable architecture." },
    { title: "No Templates", description: "Every website is customized for your brand’s needs, behavior, and future direction. No generic layouts. No patchwork solutions." },
    { title: "Conversion-Oriented Execution", description: "Your website is designed around real user behavior. Clear navigation, intuitive structure, strong messaging hierarchy, and a seamless experience that moves users toward action." }
  ],
  "shopify-development": [
    { title: "Built Into Every Decision", description: "Your store is developed around real user behavior. Layout, product structure, and checkout flow are designed to increase clarity and drive conversions." },
    { title: "Custom, Scalable Architecture", description: "No clutter, no template bloat. Your store is built with clean structure and custom configuration so it loads fast and stays easy to maintain as your business grows." },
    { title: "Brand-First Execution", description: "Every page, interaction, and layout is aligned with your brand identity, ensuring your store feels cohesive across campaigns, content, and product experiences." },
    { title: "Operational Setup", description: "We don’t just build the storefront, we set up the behind-the-scenes systems that keep your business running smoothly: orders, fulfillment, inventory, apps, integrations, and automation." },
    { title: "Senior Shopify Expertise", description: "Your project is handled by experienced Shopify developers who understand performance, scalability, and real-world eCommerce behavior, no intern shortcuts." }
  ],
  "web-application-development": [
    { title: "Architecture That Scales", description: "We build systems with clean structure, reliable logic, and extensible architecture. Your app remains stable as features expand and user volume grows." },
    { title: "Real UX & Engineering", description: "All features, flows, and behaviors are shaped through collaboration between UX designers and software engineers. This ensures the product feels intuitive and performs reliably from day one." },
    { title: "Clean Code & Structure", description: "No tangled logic, no legacy mess. We build applications with readability, maintainability, and longevity in mind, so you can scale confidently." },
    { title: "Performance & Reliability", description: "Authentication, authorization, encryption, load handling, and error resilience are part of the foundation, not an afterthought." }
  ],
  "mobile-application-development": [
    { title: "UX + Engineering", description: "We don’t treat design and development as separate tracks. UX decisions guide engineering logic so the app feels intuitive, consistent, and frictionless." },
    { title: "Stable Architecture", description: "Your mobile app is developed with clean, modular architecture so features can evolve without breaking the foundation or slowing performance." },
    { title: "Real User Behavior", description: "We design interactions, screen flows, and navigation patterns that align with real-world usage, not just what looks good in a prototype." },
    { title: "Performance as a Priority", description: "Your app is tested and optimized for speed, stability, and smoothness across different devices and OS versions." },
    { title: "QA & Continuous Testing", description: "Every build goes through structured, multi-stage QA to ensure the app is stable, intuitive, and technically sound. We test user journey, functionality, performance, device behavior, edge cases, and integration points throughout the development cycle, not only at the end." }
  ],
  "cro-speed-optimization": [
    { title: "Data-Driven Decisions", description: "Every optimization is backed by user behavior, analytics, and structured insight. Nothing is changed for the sake of change only actions that move performance forward." },
    { title: "Performance Meets Design", description: "Functional improvements don’t come at the cost of your brand. We ensure changes enhance user experience and visual consistency while making the site faster and more effective." },
    { title: "Holistic Optimization Approach", description: "We don’t just fix speed or buttons we examine the entire journey across branding, messaging, UX, and technology to ensure your funnel works as one system." },
    { title: "Senior-Level Expertise", description: "Your optimizations are executed by senior performance strategists, engineers, and UX specialists who understand both growth and user behavior at scale." },
    { title: "Iterative Growth", description: "CRO isn’t a single task it’s a cycle. We continuously analyze performance, test improvements, and refine direction to help you grow month after month." }
  ],

  // ==================== MARKET SERVICES ====================
  "paid-media": [
    { title: "Full-Funnel Strategy", description: "We build paid ecosystems that guide users from awareness to conversion with intention. Every audience, creative, and offer is mapped to a strategy, not left to chance or “best guesses.”" },
    { title: "Creative and Performance", description: "Most agencies separate creative teams from media buyers. We integrate the two, ensuring ads are designed with performance logic from day one. The result: creative that isn’t just beautiful, it converts." },
    { title: "Daily Optimization", description: "Paid media shifts fast, and our optimizations move with it. Senior performance specialists oversee all decisions, from budget allocation to audience segmentation, ensuring results improve week after week." },
    { title: "Transparent Reporting", description: "Your reports focus on ROI, CPA, revenue, and meaningful signals, never ghost metrics. You always understand where your ad spend is going and what’s driving results." },
    { title: "Platform-Diverse Expertise", description: "Meta, Google Search & Display, Performance Max, YouTube, TikTok. Each platform has different mechanics. We build strategies that make them work together rather than compete for budgets." },
    { title: "Built for Scale", description: "Our systems create sustainable, long-term performance. Once your campaigns start working, we scale responsibly, increasing volume while protecting efficiency and stability." }
  ],
  "social-media-management": [
    { title: "Brand First Social Media", description: "Content aligns with your identity, voice, and long term positioning, not just trends or aesthetics or static posts." },
    { title: "Strategy and Creativity", description: "Your content looks good and serves a clear strategic purpose. Nothing is random, everything is intentional." },
    { title: "Clear Systems", description: "Calendars, previews, and structured workflows provide clarity at every stage of planning and execution." },
    { title: "Native Platform Execution", description: "Every platform behaves differently. We tailor content formats and communication styles to match platform specific user behavior." }
  ],
  "seo-content-strategy": [
    { title: "Built on Strategy", description: "We focus on sustainable, ethical SEO rooted in technical strength, content quality, and user intent, not keyword stuffing or outdated tactics that collapse with algorithm updates." },
    { title: "Working as One System", description: "Most teams treat content and SEO as separate tasks. We integrate them fully, ensuring every piece supports rankings, user clarity, and your overall brand direction." },
    { title: "Clear Roadmaps", description: "You always know what’s being done, why it matters, and how it contributes to long-term visibility. No vague deliverables or intangible promises." },
    { title: "Built to Support", description: "Whether you’re an eCommerce brand, SaaS platform, service company, or media site, our strategies adapt to your model and growth stage." }
  ],
  "email-sms-marketing": [
    { title: "Built Around Behavior", description: "Our strategies are shaped by lifecycle triggers, engagement signals, purchase patterns, preferences, and interaction history. Every message has intent and timing behind it, creating communication that feels relevant, personal, and significantly more effective than generic bulk sends." },
    { title: "Working Together", description: "We can architect them together so both channels reinforce each other, increase touchpoints, and guide the user down a clear path without overwhelming them. The result is a coordinated communication engine built for conversions and retention." },
    { title: "Clear Structure & Results", description: "You get calendars, previews, segmentation maps, flow architecture, and ongoing reporting that explain exactly what is being sent, why it is being sent, and how it is performing. No vague “campaigns” or unclear deliverables." },
    { title: "Brand Voice", description: "Messaging is crafted to feel like it belongs to your brand. Tone, pacing, visual hierarchy, and storytelling work together to create communication that is recognizable, intentional, and consistent across every touchpoint." }
  ],
  "analytics-tracking": [
    { title: "Tracking With Strategy", description: "We don’t install pixels and call it tracking. Every event, KPI, and mapping decision is tied directly to your business goals and user journey, creating data that informs meaningful action." },
    { title: "Clarity", description: "Data can feel complex. We simplify it through structured dashboards, clear reporting, and actionable insights that tell you exactly what is happening and why it matters." },
    { title: "Accurate Data", description: "Misconfigured tracking creates bad decisions. We ensure everything is validated, tested, and audited so your numbers are reliable and your strategy stays grounded in truth." },
    { title: "Optimization", description: "Every recommendation for your website, campaigns, or product is backed by real data. No assumptions, no opinions, just evidence based direction that drives smarter growth." }
  ],
  "creative-optimization": [
    { title: "Creative Decisions", description: "Nothing is subjective. We use user behavior, platform signals, and real performance patterns to refine and shape your creative direction." },
    { title: "Brand Aligned", description: "We optimize your creatives without losing your identity. Trends support your message, they never replace it. Every asset still feels like your brand." },
    { title: "A Structured Testing System", description: "We test hooks, formats, visuals, pacing, and messaging with a clear methodology. You know what is being tested, why, and how it influences performance." },
    { title: "Performance and Longevity", description: "Creative is built to perform across platforms and evolve over time. Assets become smarter, sharper, and more effective with every iteration." }
  ]
};