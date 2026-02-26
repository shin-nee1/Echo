export interface ServiceFeature {
  title: string;
  description: string;
  imageSrc: string;
}

export interface ServiceData {
  slug: string;
  category: "design" | "develop" | "market";
  title: string;
  nonHighlightedText: string;
  highlightedText: string;
  subtitle: string;
  ctaText: string;
  whatIs: {
    title: string;
    highlightedWord: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  };
  features: ServiceFeature[];
  faqItems?: { question: string; answer: string }[];
}

const BASE_PATH = "/Features images";

export const servicesData: ServiceData[] = [
  // ==================== DESIGN SERVICES ====================
  {
    slug: "brand-identity-guidelines",
    category: "design",
    title: "Brand Identity & Guidelines",
    nonHighlightedText: "That Defines Your",
    highlightedText: "Brand",
    subtitle: "Build a memorable brand that resonates with your audience.",
    ctaText: "Let Me Be Seen",
    whatIs: {
      title: "What is Brand Identity",
      highlightedWord: "Brand Identity",
      description: `Brand identity is the foundation of how your business is seen, understood, and
       remembered. At Echo & Impact, we build identities that do more than look good,
        they create recognition, establish trust, and set the tone for every interaction that follows.

We define the visual and verbal systems behind your brand: logos, typography, color, messaging, layout rules, and the complete design language that keeps everything consistent and aligned as you grow.

Whether you’re creating a brand from scratch or refining an existing one, our focus is the same, clarity, cohesion, and a timeless identity built to scale.`,
      imageSrc: `${BASE_PATH}/Brand hero.png`,
      imageAlt: "Brand identity design showcase",
    },
    features: [
      { title: "Logo Architecture", description: "Primary, secondary, and submark logos.", imageSrc: `${BASE_PATH}/logo arch.png` },
      { title: "Typography Structure", description: "Font selection and hierarchy systems.", imageSrc: `${BASE_PATH}/Typo.png` },
      { title: "Color Framework", description: "Strategic color palettes and usage.", imageSrc: `${BASE_PATH}/ColorFrame.png` },
      { title: "Visual Language", description: "Graphic elements and iconography.", imageSrc: `${BASE_PATH}/visual lang.png` },
      { title: "Brand Voice & Messaging", description: "Tone of voice and communication style.", imageSrc: `${BASE_PATH}/brand voice.png` },
    ],
  },
  {
    slug: "ui-ux-design",
    category: "design",
    title: "UI/UX Design",
    nonHighlightedText: "That Defines Your User",
    highlightedText: "Experience",
    subtitle: "Create intuitive experiences that delight users.",
    ctaText: "Design My Experience",
    whatIs: {
      title: "What is UI/UX Design",
      highlightedWord: "UI/UX",
      description: `UI/UX defines and sets the foundation of how users experience your product, website, or platform and ultimately how they feel about your brand. At Echo & Impact, UI/UX is more than screens and layouts; it’s the strategy behind user behavior, clarity, flow, and decision-making and how strong the foundation is for your finished product.

We design interfaces and experiences that are intuitive, structured, visually aligned with your brand, and built to guide users toward the true goals of your project.

Whether you’re launching a product, redesigning a website, or refining an existing platform, our focus remains the same: experiences that are thoughtful, usable, consistent, functional and built to scale.`,
      imageSrc: `${BASE_PATH}/Ui ux hero.png`,
      imageAlt: "UI/UX design process illustration",
    },
    features: [
      { title: "User Research & Insight", description: "Data-driven user behavior analysis.", imageSrc: `${BASE_PATH}/research insight.png` },
      { title: "User Flows & Journey Mapping", description: "Visualizing the user's path to conversion.", imageSrc: `${BASE_PATH}/user flows.png` },
      { title: "Wireframes & Layout Structure", description: "Blueprints for interface architecture.", imageSrc: `${BASE_PATH}/wireframe layout.png` },
      { title: "UI Design & Visual Interfaces", description: "High-fidelity, pixel-perfect designs.", imageSrc: `${BASE_PATH}/ui design.png` },
      { title: "Design Systems & Components", description: "Scalable libraries for consistency.", imageSrc: `${BASE_PATH}/design system.png` },
    ],
  },
  {
    slug: "creative-direction",
    category: "design",
    title: "Creative Direction",
    nonHighlightedText: "The Visual Narrative Of Your",
    highlightedText: "Brand",
    subtitle: "Strategic vision that guides your brand's visual narrative.",
    ctaText: "Let's Define The Vision",
    whatIs: {
      title: "What is Creative Direction",
      highlightedWord: "Creative",
      description: `Creative direction defines how your brand expresses itself, visually, emotionally, and narratively. At Echo & Impact, we shape the overarching vision that guides your content, campaigns, storytelling, and artistic style.

It’s the layer that ensures everything you put into the world feels cohesive, intentional, and unmistakably yours. From defining the mood and visual tone to structuring themes, narrative styles, and content frameworks, we create a direction that your audience can recognize instantly and connect with deeply.

Whether you're building your brand voice for the first time or elevating your existing presence, we craft a creative system that drives clarity, character, and distinctiveness across every touchpoint.`,
      imageSrc: `${BASE_PATH}/creative direction hero.png`,
      imageAlt: "Creative direction mood board",
    },
    features: [
      { title: "Campaign Concepts & Themes", description: "Big ideas that drive campaigns.", imageSrc: `${BASE_PATH}/campaign concept.png` },
      { title: "Art Direction For Shoots & Content", description: "Guiding visual production on set.", imageSrc: `${BASE_PATH}/art direction for shoot.png` },
      { title: "Content Frameworks & Storytelling Structure", description: "Narrative guides for brand content.", imageSrc: `${BASE_PATH}/content architecture and strategy.png` },
      { title: "Moodboard & Visual Direction", description: "Visual inspiration and aesthetic direction.", imageSrc: `${BASE_PATH}/moodboard.png` },
    ],
  },
  {
    slug: "photography-videography",
    category: "design",
    title: "Photography & Videography",
    nonHighlightedText: "Seen In Your",
    highlightedText: "Brand",
    subtitle: "Stunning visuals that tell your brand's story.",
    ctaText: "Shoot It",
    whatIs: {
      title: "What is Visual Content",
      highlightedWord: "Visual",
      description: `Content shoots shape how your brand is felt, understood, and remembered. At Echo & Impact, we produce visual content that captures your identity with intention, clarity, and emotional depth.

From social media content to full-scale brand shoots, founder videos, lifestyle visuals, and short-form creative, we ensure every frame reflects your brand’s personality and communicates with precision.

Whether you need a complete content library, a consistent social presence, or high-quality visuals for campaigns, our focus remains the same, creating assets that elevate your storytelling and strengthen the connection between your brand and audience.`,
      imageSrc: `${BASE_PATH}/photography hero.png`,
      imageAlt: "Professional photography setup",
    },
    features: [
      { title: "Product & Lifestyle Photography", description: "High-end commercial imagery.", imageSrc: `${BASE_PATH}/product lifestyle brand.png` },
      { title: "Founder & Team Video Content", description: "Humanize your brand with storytelling.", imageSrc: `${BASE_PATH}/founder and team.png` },
      { title: "Short-Form Video Direction & Production", description: "Content optimized for Reels and TikTok.", imageSrc: `${BASE_PATH}/short form video.png` },
      { title: "Post-Production & Delivery", description: "Professional grading and cutting.", imageSrc: `${BASE_PATH}/post production.png` },
      { title: "Content Shoots (Social Media+ Campaign)", description: "Full-service audio/visual production.", imageSrc: `${BASE_PATH}/Content shoots.png` },
    ],
  },
  {
    slug: "motion-graphic-design",
    category: "design",
    title: "Motion & Graphic Design",
    nonHighlightedText: "That Moves Your",
    highlightedText: "Brand",
    subtitle: "Dynamic visuals that capture attention and communicate effectively.",
    ctaText: "Put It Into Motion",
    whatIs: {
      title: "What is Motion Design",
      highlightedWord: "Motion",
      description: `Motion and graphic design bring your brand to life through movement, clarity, and visual expression. At Echo & Impact, we create motion systems and graphic assets that elevate your storytelling, enhance recognition, and strengthen your brand’s presence across digital platforms.

From animated elements and social graphics to explainer videos, transitions, and campaign visuals, every asset is built with intention and aligned with your brand identity.

Whether you need high-volume content, product explainers, or a complete graphic library, our focus is consistent, design that communicates clearly, performs well, and feels unmistakably yours.`,
      imageSrc: `${BASE_PATH}/Motion hero.png`,
      imageAlt: "Motion graphics workspace",
    },
    features: [
      { title: "Motion Graphics & Brand Animations", description: "Dynamic movement for brand assets.", imageSrc: `${BASE_PATH}/motion graphics.png` },
      { title: "Social Media Graphics & Digital Collateral", description: "Visuals for feed and stories.", imageSrc: `${BASE_PATH}/social media graphics.png` },
      { title: "Explainer Videos & Visual Storytelling", description: "Simplifying complex concepts.", imageSrc: `${BASE_PATH}/explainer videos.png` },
      { title: "Campaign Graphics & Promotional Material", description: "Assets for marketing pushes.", imageSrc: `${BASE_PATH}/campaign graphics.png` },
      { title: "User Interface Animations", description: "Enhancing UX with motion.", imageSrc: `${BASE_PATH}/user interface animation.png` },
    ],
  },

  // ==================== DEVELOP SERVICES ====================
  {
    slug: "website-development",
    category: "develop",
    title: "Website Development",
    nonHighlightedText: "Everything That Makes It A",
    highlightedText: "Website",
    subtitle: "Fast, responsive websites that convert visitors into customers.",
    ctaText: "Go Live",
    whatIs: {
      title: "What is Website Development",
      highlightedWord: "Website",
      description: `Your website is the core of your digital presence, the place where your brand, your user experience, and your business goals converge. At Echo & Impact, we build websites that are fast, intentional, intuitive, and engineered for real performance.

Every website we create is designed to look exceptional, function seamlessly, and scale with your brand as it grows. From corporate sites and landing pages to multi-page platforms and conversion-driven funnels, we build with clarity, precision, and long-term stability in mind.

Our focus is simple, a website that represents your brand, supports your goals and puts you on the digital map.`,
      imageSrc: `${BASE_PATH}/website development hero.png`,
      imageAlt: "Website development illustration",
    },
    features: [
      { title: "Custom Website Development", description: "Tailored code solutions for your needs.", imageSrc: `${BASE_PATH}/custom website development.png` },
      { title: "Responsive & Mobile-Optimized Builds", description: "Seamless experience on all devices.", imageSrc: `${BASE_PATH}/responsive and mobile.png` },
      { title: "High-Performance Front-End & Back-End Architecture", description: "Speed and stability at scale.", imageSrc: `${BASE_PATH}/high performance front.png` },
      { title: "CMS Setup & Content Structuring", description: "Easy content management systems.", imageSrc: `${BASE_PATH}/cms setup.png` },
      { title: "Landing Pages, Funnels & Multi-Page Sites", description: "Sites built for conversion.", imageSrc: `${BASE_PATH}/landing page and offer.png` },
    ],
  },
  {
    slug: "shopify-development",
    category: "develop",
    title: "Shopify Development",
    nonHighlightedText: "Everything You Need For an",
    highlightedText: "Online Shop",
    subtitle: "E-commerce solutions that drive sales and scale with your business.",
    ctaText: "My Online Shop",
    whatIs: {
      title: "What is Shopify Development",
      highlightedWord: "Shopify",
      description: `Your online store is more than a storefront, it’s the engine of your business. At Echo & Impact, we build Shopify experiences that are fast, structured, conversion-driven, and fully aligned with your brand and growth goals.

Whether you’re launching a new store, migrating from another platform, or scaling an existing one, we design and develop Shopify setups that feel seamless to use, easy to manage, and built for performance.

Every decision such as structure, layout, theme behavior, product strategy, and checkout optimization, is crafted with clarity and conversion in mind so your store not only looks great but sells effectively.`,
      imageSrc: `${BASE_PATH}/shopify development hero.png`,
      imageAlt: "Shopify store development",
    },
    features: [
      { title: "Shopify Store Setup & Theme Customization", description: "Launching your digital storefront.", imageSrc: `${BASE_PATH}/shopify stop setup.png` },
      { title: "Product, Collection & Inventory Structure", description: "Organized catalog management.", imageSrc: `${BASE_PATH}/product collection and inventory.png` },
      { title: "Conversion-Optimized Storefront Design", description: "Designed to drive sales.", imageSrc: `${BASE_PATH}/conversion optimized.png` },
      { title: "Shopify Apps & Third-Party Integrations", description: "Extending store functionality.", imageSrc: `${BASE_PATH}/shopify apps.png` },
      { title: "Checkout Optimization & Fulfillment Setup", description: "Streamlining the purchase flow.", imageSrc: `${BASE_PATH}/checkout optimize.png` },
    ],
  },
  {
    slug: "web-application-development",
    category: "develop",
    title: "Web Application Development",
    nonHighlightedText: "Powering Your",
    highlightedText: "Web App",
    subtitle: "Powerful web applications that streamline your business operations.",
    ctaText: "Code It",
    whatIs: {
      title: "What is Web Application",
      highlightedWord: "Web App",
      description: `Web applications are where your product, your users, and your business logic meet. At Echo & Impact, we build custom web applications that are stable, scalable, secure, and engineered around real functionality.

From dashboards and portals to SaaS platforms, automation systems, API integrations, internal tools, and full-scale digital products, we develop applications with clean architecture, smooth user flow, and reliable performance.

Whether you're launching an MVP, rebuilding a legacy system, or scaling a complex platform, our focus remains the same, an application built with clarity, functional logic, technical precision, and long-term scalability in mind.`,
      imageSrc: `${BASE_PATH}/web application dev hero.png`,
      imageAlt: "Web application interface",
    },
    features: [
      { title: "Custom Dashboards & User Portals", description: "Interactive data visualization.", imageSrc: `${BASE_PATH}/Custom dashboards.png` },
      { title: "API Development & Integrations", description: "Connecting your software ecosystem.", imageSrc: `${BASE_PATH}/api dev and intergrate.png` },
      { title: "Feature-Driven, Scalable Architecture", description: "Built to grow with you.", imageSrc: `${BASE_PATH}/feature driven scaleable.png` },
      { title: "Real-Time Functionality & Business Logic", description: "Instant updates and processing.", imageSrc: `${BASE_PATH}/eral time functionality.png` },
      { title: "Admin Panels, Reporting & Internal Tools", description: "Tools for business management.", imageSrc: `${BASE_PATH}/admin panel.png` },
    ],
  },
  {
    slug: "mobile-application-development",
    category: "develop",
    title: "Mobile Application Development",
    nonHighlightedText: "Behind Your App",
    highlightedText: "Download",
    subtitle: "Native and cross-platform apps that engage users on the go.",
    ctaText: "Display",
    whatIs: {
      title: "What is Mobile Development",
      highlightedWord: "Mobile",
      description: `A mobile app isn’t just a product, it’s an experience people carry with them every day. At Echo & Impact, we build mobile applications that feel smooth, intuitive, and reliable, with the architecture to scale as your user base grows.

From concept to UI to development, every step is handled with clarity and technical precision. We ensure the app not only looks clean and modern but performs consistently across devices, screen sizes, and real-world user behavior.

Whether you're launching your first MVP, building a full mobile product, or transforming an existing app, we focus on one thing, creating a stable, high-performing experience users trust.`,
      imageSrc: `${BASE_PATH}/mobille application hero.png`,
      imageAlt: "Mobile app development",
    },
    features: [
      { title: "iOS & Android Application Development", description: "Native mobile experiences.", imageSrc: `${BASE_PATH}/ios and andriod app dev.png` },
      { title: "App UI Integration & Interaction Flows", description: "Seamless mobile interfaces.", imageSrc: `${BASE_PATH}/app ui integration and interaction flows.png` },
      { title: "API Connectivity & Backend Structure", description: "Robust data handling.", imageSrc: `${BASE_PATH}/api conectivity.png` },
      { title: "Performance Optimization & Device Testing", description: "Smooth performance on all devices.", imageSrc: `${BASE_PATH}/performance optimization and device.png` },
      { title: "App Deployment & Store Submission", description: "Launching to App Store & Play Store.", imageSrc: `${BASE_PATH}/app deployment and store.png` },
    ],
  },
  {
    slug: "cro-speed-optimization",
    category: "develop",
    title: "CRO & Speed Optimization",
    nonHighlightedText: "That Improves",
    highlightedText: "Performance",
    subtitle: "Maximize conversions and performance for better results.",
    ctaText: "Make It Perform",
    whatIs: {
      title: "What is CRO & Optimization",
      highlightedWord: "Optimization",
      description: `Your website can look great — but if it loads slowly or fails to convert, your growth hits a ceiling. CRO and speed optimization ensure your digital experience is fast, intuitive, and designed to turn visitors into customers.

At Echo & Impact, we optimize the full journey: performance, funnels, user behavior, and on-page clarity. Every improvement is backed by data, not guesswork.

Whether your goal is more sign-ups, more sales, or deeper engagement, we refine the experience so every click works in your favor.`,
      imageSrc: `${BASE_PATH}/Cro and Speed hero.png`,
      imageAlt: "CRO optimization dashboard",
    },
    features: [
      { title: "Speed Optimization (CWV) & Web Vitals", description: "Faster load times and better rankings.", imageSrc: `${BASE_PATH}/speed optimization.png` },
      { title: "Conversion Audits", description: "Identify revenue leaks.", imageSrc: `${BASE_PATH}/conversion audits.png` },
      { title: "Landing Page Optimization", description: "Pages built to convert.", imageSrc: `${BASE_PATH}/landing page optimization.png` },
      { title: "Funnel Improvements", description: "Streamlining the user journey.", imageSrc: `${BASE_PATH}/funnel improvement.png` },
      { title: "A/B Testing Framework", description: "Data-driven decision making.", imageSrc: `${BASE_PATH}/ab testing framework.png` },
      { title: "Analytics & Reporting", description: "Tracking performance gains.", imageSrc: `${BASE_PATH}/Analytics Hero.png` },
    ],
  },

  // ==================== MARKET SERVICES ====================
  {
    slug: "paid-media",
    category: "market",
    title: "Paid Media",
    nonHighlightedText: "That Drives Your",
    highlightedText: "Campaign Forward",
    subtitle: "Strategic advertising that delivers measurable ROI.",
    ctaText: "Let Me Be Seen",
    whatIs: {
      title: "What is Paid Media",
      highlightedWord: "Paid Media",
      description: `Paid media is where strategy, creative, and data converge to drive measurable growth. At Echo & Impact, we don’t run ads for visibility, we engineer campaigns that perform with purpose.

From Meta to Google, TikTok to YouTube, our approach blends precise targeting, compelling creative, and full-funnel strategy to reach the right audience at the right moment.

Every decision is intentional: how your brand speaks, what offer is shown, which segment is prioritized, how the creative looks, and how the data feeds the next step.

Whether you’re launching a new product, scaling an existing one, or expanding into new markets, our focus remains the same, paid media that delivers clarity, efficiency, and predictable performance.`,
      imageSrc: `${BASE_PATH}/Paid Media Hero.png`,
      imageAlt: "Paid media campaign dashboard",
    },
    features: [
      { title: "Audience Strategy", description: "Targeting your ideal customer.", imageSrc: `${BASE_PATH}/audience strategy.png` },
      { title: "Creative Direction & Ad Development", description: "Ads that stop the scroll.", imageSrc: `${BASE_PATH}/creative direction and Ad dev.png` },
      { title: "Full-Funnel Campaign Structure", description: "Awareness to conversion.", imageSrc: `${BASE_PATH}/full funnel campaign.png` },
      { title: "Cross-Platform Execution", description: "Omnichannel advertising.", imageSrc: `${BASE_PATH}/cross platform integration.png` },
      { title: "Landing Page & Offer Alignment", description: "Matching ads to destination.", imageSrc: `${BASE_PATH}/landing page funnel.png` },
      { title: "Reporting & Insights", description: "Transparent performance data.", imageSrc: `${BASE_PATH}/dashboard and reporting.png` },
    ],
  },
  {
    slug: "social-media-management",
    category: "market",
    title: "Social Media Management",
    nonHighlightedText: "That Builds Your",
    highlightedText: "Presence",
    subtitle: "Build engaged communities that amplify your brand.",
    ctaText: "Let Me Be Seen",
    whatIs: {
      title: "What is Social Management",
      highlightedWord: "Social",
      description: `Social media is where your brand is felt, interpreted, and remembered. At Echo & Impact, we manage social presence with intention, combining brand voice, content strategy, design direction, creative direction and community behavior to create platforms that actually support business growth.

Our approach aligns storytelling, visuals, content planning, engagement systems, and performance tracking into a unified ecosystem that helps your brand stay consistent, relevant, and trusted.

Whether you need a full content overhaul, long term management, or a system built from scratch, our goal remains the same, social media that deepens connection, drives engagement, and moves audiences toward action.`,
      imageSrc: `${BASE_PATH}/Social media manage hero.png`,
      imageAlt: "Social media management",
    },
    features: [
      { title: "Strategic Content Planning", description: "Roadmaps for social growth.", imageSrc: `${BASE_PATH}/strategic content planning.png` },
      { title: "Creative Content Production", description: "High-quality social assets.", imageSrc: `${BASE_PATH}/creative content production.png` },
      { title: "Platform Management And Publishing", description: "Consistent posting schedules.", imageSrc: `${BASE_PATH}/platform management and publishing.png` },
      { title: "Community Interaction And Growth", description: "Engaging with your audience.", imageSrc: `${BASE_PATH}/community interaction and growth.png` },
      
    ],
  },
  {
    slug: "seo-content-strategy",
    category: "market",
    title: "SEO & Content Strategy",
    nonHighlightedText: "That Puts You",
    highlightedText: "On The Map",
    subtitle: "Rank higher and attract organic traffic that converts.",
    ctaText: "Let Me Be Seen",
    whatIs: {
      title: "What is SEO & Content",
      highlightedWord: "SEO",
      description: `SEO and content are the long-term engines of discoverability. At Echo & Impact, we build search ecosystems that help your brand get found, stay relevant, and grow sustainably, without relying solely on paid channels.

Our approach blends technical SEO, content architecture, user intent research, and on-page refinement to create a search presence rooted in clarity and credibility.

Whether you’re improving existing rankings, launching a new site, or creating content that supports your funnel, our focus stays the same, visibility that compounds, authority that strengthens, and content that guides users directly to action.`,
      imageSrc: `${BASE_PATH}/SEO hero.png`,
      imageAlt: "SEO analytics dashboard",
    },
    features: [
      { title: "Technical SEO", description: "Optimizing site infrastructure.", imageSrc: `${BASE_PATH}/technical seo.png` },
      { title: "Keyword & Intent Research", description: "Targeting search demand.", imageSrc: `${BASE_PATH}/keyword and intent.png` },
      { title: "On-Page Optimization", description: "Optimizing content and meta data.", imageSrc: `${BASE_PATH}/on page optimize.png` },
      { title: "Content Architecture & Strategy", description: "Planning for organic growth.", imageSrc: `${BASE_PATH}/content architecture and strategy.png` },
      { title: "Blog & Resource Development", description: "Content that ranks and converts.", imageSrc: `${BASE_PATH}/blog and resourece dev.png` },
      { title: "Local & Global SEO Setup", description: "Ranking in your target markets.", imageSrc: `${BASE_PATH}/landing page optimization.png` },
    ],
  },
  {
    slug: "email-sms-marketing",
    category: "market",
    title: "Email & SMS Marketing",
    nonHighlightedText: "That Drives Your",
    highlightedText: "Messaging",
    subtitle: "Direct communication that nurtures leads and drives sales.",
    ctaText: "Let Me Be Seen",
    whatIs: {
      title: "What is Email & SMS Marketing",
      highlightedWord: "Email & SMS",
      description: `Email and SMS are the channels your brand truly owns. At Echo & Impact, we build messaging ecosystems that nurture, convert, and retain your audience through personalized communication built on strategy and behavior.

Our approach combines audience segmentation, lifecycle flows, content strategy, design, automation, and performance tracking to create direct channels that grow revenue and deepen customer relationships.

Whether you need a full lifecycle build, ongoing campaigns, or a complete overhaul of your messaging systems, our focus remains the same, communication that feels intentional, valuable, and aligned with how your users actually behave.`,
      imageSrc: `${BASE_PATH}/Email and sms hero.png`,
      imageAlt: "Email marketing dashboard",
    },
    features: [
      { title: "Lifecycle Flows And Automation", description: "Automated customer journeys.", imageSrc: `${BASE_PATH}/lifecycle flows and automation.png` },
      { title: "Campaign Strategy And Execution", description: "Targeted promotional blasts.", imageSrc: `${BASE_PATH}/campaign strat and execute.png` },
      { title: "Segmentation And Personalization", description: "Hyper-relevant messaging.", imageSrc: `${BASE_PATH}/segmentation and personalization.png` },
      { title: "SMS Strategy And Short-Form Messaging", description: "Direct mobile engagement.", imageSrc: `${BASE_PATH}/sms strat and short form.png` },
      { title: "Design And Content Production", description: "Beautiful emails that convert.", imageSrc: `${BASE_PATH}/design and content produciton.png` },
    ],
  },
  {
    slug: "analytics-tracking",
    category: "market",
    title: "Analytics & Tracking",
    nonHighlightedText: "That Sharpens Your",
    highlightedText: "Visibility",
    subtitle: "Data-driven insights that inform smarter decisions.",
    ctaText: "Let Me Be Seen",
    whatIs: {
      title: "What is Analytics & Tracking",
      highlightedWord: "Analytics",
      description: `Analytics is the foundation of every smart decision. At Echo & Impact, we build tracking systems that show you what is working, what is not, and where your next opportunities truly are. No guesswork, no assumptions, just clarity backed by data.

Our approach blends platform analytics, custom dashboards, event tracking, attribution, and performance monitoring to create a complete understanding of user behavior across your website, campaigns, and product experience.

Whether you need a clean tracking setup, deeper visibility, improved attribution, or ongoing reporting, our focus remains the same, giving you the insight needed to optimize, scale, and spend wisely.`,
      imageSrc: `${BASE_PATH}/Analytics Hero.png`,
      imageAlt: "Analytics tracking setup",
    },
    features: [
      { title: "Analytics Setup And Configuration", description: "Robust data foundation.", imageSrc: `${BASE_PATH}/analytics setup and configure.png` },
      { title: "Event Tracking And User Behavior Mapping", description: "Understanding user actions.", imageSrc: `${BASE_PATH}/event tracting and user behaviour.png` },
      { title: "Attribution And Conversion Tracking", description: "Knowing what drives sales.", imageSrc: `${BASE_PATH}/attribution and conversion.png` },
      { title: "Dashboards And Reporting", description: "Visualizing key metrics.", imageSrc: `${BASE_PATH}/dashboard and reporting.png` },
      { title: "Funnel And Performance Audits", description: "Identifying drop-off points.", imageSrc: `${BASE_PATH}/funnel and performance audit.png` },
    ],
  },
  {
    slug: "creative-optimization",
    category: "market",
    title: "Creative Optimization",
    nonHighlightedText: "That Elevates Your",
    highlightedText: "Performance",
    subtitle: "Test and refine creative assets for maximum impact.",
    ctaText: "Let Me Be Seen",
    whatIs: {
      title: "What is Creative Optimization",
      highlightedWord: "Creative",
      description: `Creative optimization is the biggest driver of performance across paid media, content, and digital campaigns. At Echo & Impact, we optimize your creative using data backed insights, audience behavior, platform trends, and brand aligned storytelling to improve results without guesswork.

Our approach combines structured testing, audience analysis, creative strategy, and iterative refinement to produce assets that consistently perform better. Whether you are scaling ads, improving engagement, or refreshing your content system, our goal remains the same, creative that captures attention and turns it into action.`,
      imageSrc: `${BASE_PATH}/Creative optimize hero.png`,
      imageAlt: "Creative testing dashboard",
    },
    features: [
      { title: "Creative Audits And Insights", description: "Reviewing existing performance.", imageSrc: `${BASE_PATH}/creative audio and insigh.png` },
      { title: "A/B Testing And Variant Development", description: "Scientific creative testing.", imageSrc: `${BASE_PATH}/ab testing and variant.png` },
      { title: "Platform-Specific Creative Strategy", description: "Native content for each channel.", imageSrc: `${BASE_PATH}/platform spcific creative.png` },
      { title: "Messaging And Hook Frameworks", description: "Capturing attention instantly.", imageSrc: `${BASE_PATH}/mesaaging and hook.png` },
      { title: "Content Refresh Cycles", description: "Combating ad fatigue.", imageSrc: `${BASE_PATH}/content refresh.png` },
   
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find((service) => service.slug === slug);
};

export const getServicesByCategory = (category: "design" | "develop" | "market"): ServiceData[] => {
  return servicesData.filter((service) => service.category === category);
};

export const titleToSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-|-$/g, "");
};

export const serviceTitleToSlug: Record<string, string> = {
  "Brand Identity & Guidelines": "brand-identity-guidelines",
  "UI/UX Design": "ui-ux-design",
  "Creative Direction": "creative-direction",
  "Photography & Videography": "photography-videography",
  "Motion & Graphic Design": "motion-graphic-design",
  "Website Development": "website-development",
  "Shopify Development": "shopify-development",
  "Web Application Development": "web-application-development",
  "Mobile Application Development": "mobile-application-development",
  "CRO & Speed Optimization": "cro-speed-optimization",
  "Paid Media": "paid-media",
  "Social Media Management": "social-media-management",
  "SEO & Content Strategy": "seo-content-strategy",
  "Email & SMS Marketing": "email-sms-marketing",
  "Analytics & Tracking": "analytics-tracking",
  "Creative Optimization": "creative-optimization",
};