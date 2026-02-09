export interface ServiceFeature {
  title: string;
  description: string;
  imageSrc: string;
}

export interface ServiceData {
  slug: string;
  category: "design" | "develop" | "market";
  title: string;
  highlightedTitle: string;
  subtitle: string;
  ctaText: string;
  whatIs: {
    title: string;
    highlightedWord: string;
    description: string;
    bulletPoints: string[];
    imageSrc: string;
    imageAlt: string;
  };
  features: ServiceFeature[];
  faqItems?: { question: string; answer: string }[];
}

export const servicesData: ServiceData[] = [
  // ==================== DESIGN SERVICES ====================
  {
    slug: "brand-identity-guidelines",
    category: "design",
    title: "Brand Identity",
    highlightedTitle: "Identity",
    subtitle: "Build a memorable brand that resonates with your audience.",
    ctaText: "Start Your Brand Journey",
    whatIs: {
      title: "What is Brand Identity",
      highlightedWord: "Brand Identity",
      description:
        "Brand identity is the collection of visual elements that represent your company. It includes your logo, color palette, typography, and imagery that together create a cohesive and recognizable presence in the market.",
      bulletPoints: [
        "Custom logo design and variations",
        "Comprehensive brand guidelines",
        "Color palette and typography systems",
        "Brand voice and messaging framework",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Brand identity design showcase",
    },
    features: [
      { title: "Pitch Deck", description: "Persuasive presentation design for investors.", imageSrc: "/placeholder.svg" },
      { title: "Brand Guidelines", description: "Comprehensive rules for brand consistency.", imageSrc: "/placeholder.svg" },
      { title: "Logo Architecture", description: "Primary, secondary, and submark logos.", imageSrc: "/placeholder.svg" },
      { title: "Typography Structure", description: "Font selection and hierarchy systems.", imageSrc: "/placeholder.svg" },
      { title: "Color Framework", description: "Strategic color palettes and usage.", imageSrc: "/placeholder.svg" },
      { title: "Visual Language", description: "Graphic elements and iconography.", imageSrc: "/placeholder.svg" },
      { title: "Brand Voice & Messaging", description: "Tone of voice and communication style.", imageSrc: "/placeholder.svg" },
      { title: "Imagery & Art Direction", description: "Photo and video style guidelines.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "ui-ux-design",
    category: "design",
    title: "UI/UX Design",
    highlightedTitle: "UI/UX",
    subtitle: "Create intuitive experiences that delight users.",
    ctaText: "Design Better Experiences",
    whatIs: {
      title: "What is UI/UX Design",
      highlightedWord: "UI/UX",
      description:
        "UI/UX design focuses on creating seamless, intuitive interfaces that enhance user satisfaction. We combine research-driven insights with creative design to build products people love to use.",
      bulletPoints: [
        "User research and persona development",
        "Wireframing and prototyping",
        "High-fidelity interface design",
        "Usability testing and iteration",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "UI/UX design process illustration",
    },
    features: [
      { title: "User Research & Insight", description: "Data-driven user behavior analysis.", imageSrc: "/placeholder.svg" },
      { title: "User Flows & Journey Mapping", description: "Visualizing the user's path to conversion.", imageSrc: "/placeholder.svg" },
      { title: "Wireframes & Layout Structure", description: "Blueprints for interface architecture.", imageSrc: "/placeholder.svg" },
      { title: "UI Design & Visual Interfaces", description: "High-fidelity, pixel-perfect designs.", imageSrc: "/placeholder.svg" },
      { title: "Design Systems & Components", description: "Scalable libraries for consistency.", imageSrc: "/placeholder.svg" },
      { title: "Micro-interactions & Visual Environments", description: "Engaging animations and states.", imageSrc: "/placeholder.svg" },
      { title: "Responsive & Adaptive Design", description: "Optimized for all screen sizes.", imageSrc: "/placeholder.svg" },
      { title: "Prototyping & Experience Testing", description: "Interactive models for validation.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "creative-direction",
    category: "design",
    title: "Creative Direction",
    highlightedTitle: "Creative",
    subtitle: "Strategic vision that guides your brand's visual narrative.",
    ctaText: "Elevate Your Creative",
    whatIs: {
      title: "What is Creative Direction",
      highlightedWord: "Creative",
      description:
        "Creative direction is the art of guiding a brand's visual and conceptual identity. It ensures consistency across all creative outputs while pushing boundaries to create memorable, impactful work.",
      bulletPoints: [
        "Visual concept development",
        "Campaign art direction",
        "Creative strategy and planning",
        "Cross-platform visual consistency",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Creative direction mood board",
    },
    features: [
      { title: "Campaign Concepts & Themes", description: "Big ideas that drive campaigns.", imageSrc: "/placeholder.svg" },
      { title: "Art Direction For Shoots & Content", description: "Guiding visual production on set.", imageSrc: "/placeholder.svg" },
      { title: "Content Frameworks & Storytelling Structure", description: "Narrative guides for brand content.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "photography-videography",
    category: "design",
    title: "Photography & Videography ",
    highlightedTitle: "Visual",
    subtitle: "Stunning visuals that tell your brand's story.",
    ctaText: "Capture Your Vision",
    whatIs: {
      title: "What is Visual Content",
      highlightedWord: "Visual",
      description:
        "Professional photography and videography bring your brand to life. From product shoots to brand films, we create compelling visual content that engages audiences and drives action.",
      bulletPoints: [
        "Product and lifestyle photography",
        "Brand video production",
        "Social media content creation",
        "Post-production and editing",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Professional photography setup",
    },
    features: [
      { title: "Product & Lifestyle Photography", description: "High-end commercial imagery.", imageSrc: "/placeholder.svg" },
      { title: "Founder & Team Video Content", description: "Humanize your brand with storytelling.", imageSrc: "/placeholder.svg" },
      { title: "Short-Form Video Direction & Production", description: "Content optimized for Reels and TikTok.", imageSrc: "/placeholder.svg" },
      { title: "Post-Production & Editing", description: "Professional grading and cutting.", imageSrc: "/placeholder.svg" },
      { title: "Podcast Shoots & Media Production", description: "Full-service audio/visual production.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "motion-graphic-design",
    category: "design",
    title: "Motion & Graphic Design",
    highlightedTitle: "Motion",
    subtitle: "Dynamic visuals that capture attention and communicate effectively.",
    ctaText: "Bring Ideas to Life",
    whatIs: {
      title: "What is Motion Design",
      highlightedWord: "Motion",
      description:
        "Motion and graphic design combine static visuals with animation to create engaging content. From animated logos to explainer videos, we craft visuals that move audiences.",
      bulletPoints: [
        "Animated logo and brand elements",
        "Explainer and promotional videos",
        "Social media animations",
        "Interactive motion graphics",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Motion graphics workspace",
    },
    features: [
      { title: "Motion Graphics & Brand Animations", description: "Dynamic movement for brand assets.", imageSrc: "/placeholder.svg" },
      { title: "Social Media Graphics & Digital Collateral", description: "Visuals for feed and stories.", imageSrc: "/placeholder.svg" },
      { title: "Explainer Videos & Visual Storytelling", description: "Simplifying complex concepts.", imageSrc: "/placeholder.svg" },
      { title: "Campaign Graphics & Promotional Material", description: "Assets for marketing pushes.", imageSrc: "/placeholder.svg" },
      { title: "User Interface Animations", description: "Enhancing UX with motion.", imageSrc: "/placeholder.svg" },
    ],
  },

  // ==================== DEVELOP SERVICES ====================
  {
    slug: "website-development",
    category: "develop",
    title: "Website Development",
    highlightedTitle: "Website",
    subtitle: "Fast, responsive websites that convert visitors into customers.",
    ctaText: "Build Your Site",
    whatIs: {
      title: "What is Website Development",
      highlightedWord: "Website",
      description:
        "Modern website development combines cutting-edge technology with user-centered design to create fast, secure, and scalable web experiences that drive business results.",
      bulletPoints: [
        "Custom responsive design",
        "Performance optimization",
        "SEO-friendly architecture",
        "Content management systems",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Website development illustration",
    },
    features: [
      { title: "Custom Website Development", description: "Tailored code solutions for your needs.", imageSrc: "/placeholder.svg" },
      { title: "Responsive & Mobile-Optimized Builds", description: "Seamless experience on all devices.", imageSrc: "/placeholder.svg" },
      { title: "High-Performance Front-End & Back-End Architecture", description: "Speed and stability at scale.", imageSrc: "/placeholder.svg" },
      { title: "CMS Setup & Content Structuring", description: "Easy content management systems.", imageSrc: "/placeholder.svg" },
      { title: "Landing Pages, Funnels & Multi-Page Sites", description: "Sites built for conversion.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "shopify-development",
    category: "develop",
    title: "Shopify Development",
    highlightedTitle: "Shopify",
    subtitle: "E-commerce solutions that drive sales and scale with your business.",
    ctaText: "Launch Your Store",
    whatIs: {
      title: "What is Shopify Development",
      highlightedWord: "Shopify",
      description:
        "Shopify development creates powerful e-commerce experiences. From custom themes to app integrations, we build stores that look great, perform well, and convert browsers into buyers.",
      bulletPoints: [
        "Custom theme development",
        "App integration and customization",
        "Checkout optimization",
        "Migration and setup services",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Shopify store development",
    },
    features: [
      { title: "Shopify Store Setup & Theme Customization", description: "Launching your digital storefront.", imageSrc: "/placeholder.svg" },
      { title: "Product, Collection & Inventory Structure", description: "Organized catalog management.", imageSrc: "/placeholder.svg" },
      { title: "Conversion-Optimized Storefront Design", description: "Designed to drive sales.", imageSrc: "/placeholder.svg" },
      { title: "Shopify Apps & Third-Party Integrations", description: "Extending store functionality.", imageSrc: "/placeholder.svg" },
      { title: "Checkout Optimization & Fulfillment Setup", description: "Streamlining the purchase flow.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "web-application-development",
    category: "develop",
    title: "Web Application Development",
    highlightedTitle: "Web App",
    subtitle: "Powerful web applications that streamline your business operations.",
    ctaText: "Build Your App",
    whatIs: {
      title: "What is Web Application",
      highlightedWord: "Web App",
      description:
        "Web application development creates interactive, feature-rich platforms accessible via browser. From SaaS products to internal tools, we build applications that solve real problems.",
      bulletPoints: [
        "Custom SaaS development",
        "Dashboard and admin panels",
        "API development and integration",
        "Real-time functionality",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Web application interface",
    },
    features: [
      { title: "Custom Dashboards & User Portals", description: "Interactive data visualization.", imageSrc: "/placeholder.svg" },
      { title: "API Development & Integrations", description: "Connecting your software ecosystem.", imageSrc: "/placeholder.svg" },
      { title: "Feature-Driven, Scalable Architecture", description: "Built to grow with you.", imageSrc: "/placeholder.svg" },
      { title: "Real-Time Functionality & Business Logic", description: "Instant updates and processing.", imageSrc: "/placeholder.svg" },
      { title: "Admin Panels, Reporting & Internal Tools", description: "Tools for business management.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "mobile-application-development",
    category: "develop",
    title: "Mobile Application Development",
    highlightedTitle: "Mobile",
    subtitle: "Native and cross-platform apps that engage users on the go.",
    ctaText: "Build Your App",
    whatIs: {
      title: "What is Mobile Development",
      highlightedWord: "Mobile",
      description:
        "Mobile application development creates apps for iOS and Android devices. Whether native or cross-platform, we build mobile experiences that users love and keep coming back to.",
      bulletPoints: [
        "iOS and Android development",
        "Cross-platform solutions",
        "App store optimization",
        "Push notifications and engagement",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Mobile app development",
    },
    features: [
      { title: "iOS & Android Application Development", description: "Native mobile experiences.", imageSrc: "/placeholder.svg" },
      { title: "App UI Integration & Interaction Flows", description: "Seamless mobile interfaces.", imageSrc: "/placeholder.svg" },
      { title: "API Connectivity & Backend Structure", description: "Robust data handling.", imageSrc: "/placeholder.svg" },
      { title: "Performance Optimization & Device Testing", description: "Smooth performance on all devices.", imageSrc: "/placeholder.svg" },
      { title: "App Deployment & Store Submission", description: "Launching to App Store & Play Store.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "cro-speed-optimization",
    category: "develop",
    title: "CRO & Speed Optimization",
    highlightedTitle: "Optimization",
    subtitle: "Maximize conversions and performance for better results.",
    ctaText: "Optimize Now",
    whatIs: {
      title: "What is CRO & Optimization",
      highlightedWord: "Optimization",
      description:
        "Conversion Rate Optimization and speed improvements turn more visitors into customers. Through data analysis, A/B testing, and performance tuning, we maximize your digital ROI.",
      bulletPoints: [
        "A/B and multivariate testing",
        "Performance audits and fixes",
        "User behavior analysis",
        "Landing page optimization",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "CRO optimization dashboard",
    },
    features: [
      { title: "Speed Optimization (CWV) & Web Vitals", description: "Faster load times and better rankings.", imageSrc: "/placeholder.svg" },
      { title: "Conversion Audits", description: "Identify revenue leaks.", imageSrc: "/placeholder.svg" },
      { title: "Landing Page Optimization", description: "Pages built to convert.", imageSrc: "/placeholder.svg" },
      { title: "Funnel Improvements", description: "Streamlining the user journey.", imageSrc: "/placeholder.svg" },
      { title: "A/B Testing Framework", description: "Data-driven decision making.", imageSrc: "/placeholder.svg" },
      { title: "Analytics & Reporting", description: "Tracking performance gains.", imageSrc: "/placeholder.svg" },
    ],
  },

  // ==================== MARKET SERVICES ====================
  {
    slug: "paid-media",
    category: "market",
    title: "Paid Media",
    highlightedTitle: "Paid Media",
    subtitle: "Strategic advertising that delivers measurable ROI.",
    ctaText: "Scale Your Ads",
    whatIs: {
      title: "What is Paid Media",
      highlightedWord: "Paid Media",
      description:
        "Paid media encompasses all advertising channels where you pay for visibility. From Google Ads to social media advertising, we create campaigns that reach the right audience at the right time.",
      bulletPoints: [
        "Google and Bing advertising",
        "Social media ad campaigns",
        "Retargeting strategies",
        "Budget optimization",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Paid media campaign dashboard",
    },
    features: [
      { title: "Data, Tracking & Optimization", description: "Measurement tracking for ROAS.", imageSrc: "/placeholder.svg" },
      { title: "Audience Strategy", description: "Targeting your ideal customer.", imageSrc: "/placeholder.svg" },
      { title: "Creative Direction & Ad Development", description: "Ads that stop the scroll.", imageSrc: "/placeholder.svg" },
      { title: "Full-Funnel Campaign Structure", description: "Awareness to conversion.", imageSrc: "/placeholder.svg" },
      { title: "Cross-Platform Execution", description: "Omnichannel advertising.", imageSrc: "/placeholder.svg" },
      { title: "Landing Page & Offer Alignment", description: "Matching ads to destination.", imageSrc: "/placeholder.svg" },
      { title: "Reporting & Insights", description: "Transparent performance data.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "social-media-management",
    category: "market",
    title: "Social Media Management",
    highlightedTitle: "Social",
    subtitle: "Build engaged communities that amplify your brand.",
    ctaText: "Grow Your Following",
    whatIs: {
      title: "What is Social Management",
      highlightedWord: "Social",
      description:
        "Social media management involves creating, scheduling, and analyzing content across social platforms. We help brands build authentic connections with their audience through strategic social presence.",
      bulletPoints: [
        "Content strategy and planning",
        "Community engagement",
        "Influencer partnerships",
        "Performance analytics",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Social media management",
    },
    features: [
      { title: "Strategic Content Planning", description: "Roadmaps for social growth.", imageSrc: "/placeholder.svg" },
      { title: "Creative Content Production", description: "High-quality social assets.", imageSrc: "/placeholder.svg" },
      { title: "Platform Management And Publishing", description: "Consistent posting schedules.", imageSrc: "/placeholder.svg" },
      { title: "Community Interaction And Growth", description: "Engaging with your audience.", imageSrc: "/placeholder.svg" },
      { title: "Performance Monitoring And Insights", description: "Tracking social KPIs.", imageSrc: "/placeholder.svg" },
      { title: "Content Frameworks And Branding Consistency", description: "Unified brand voice.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "seo-content-strategy",
    category: "market",
    title: "SEO & Content Strategy",
    highlightedTitle: "SEO",
    subtitle: "Rank higher and attract organic traffic that converts.",
    ctaText: "Boost Your Rankings",
    whatIs: {
      title: "What is SEO & Content",
      highlightedWord: "SEO",
      description:
        "SEO and content strategy work together to improve your search visibility. Through keyword research, technical optimization, and quality content creation, we help you rank for terms that matter.",
      bulletPoints: [
        "Keyword research and strategy",
        "Technical SEO audits",
        "Content creation and optimization",
        "Link building campaigns",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "SEO analytics dashboard",
    },
    features: [
      { title: "Technical SEO", description: "Optimizing site infrastructure.", imageSrc: "/placeholder.svg" },
      { title: "Keyword & Intent Research", description: "Targeting search demand.", imageSrc: "/placeholder.svg" },
      { title: "On-Page Optimization", description: "Optimizing content and meta data.", imageSrc: "/placeholder.svg" },
      { title: "Content Architecture & Strategy", description: "Planning for organic growth.", imageSrc: "/placeholder.svg" },
      { title: "Blog & Resource Development", description: "Content that ranks and converts.", imageSrc: "/placeholder.svg" },
      { title: "Local & Global SEO Setup", description: "Ranking in your target markets.", imageSrc: "/placeholder.svg" },
      { title: "Performance Monitoring & Refinement", description: "Continuous SEO improvement.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "email-sms-marketing",
    category: "market",
    title: "Email & SMS Marketing",
    highlightedTitle: "Email & SMS",
    subtitle: "Direct communication that nurtures leads and drives sales.",
    ctaText: "Start Campaigns",
    whatIs: {
      title: "What is Email & SMS Marketing",
      highlightedWord: "Email & SMS",
      description:
        "Email and SMS marketing deliver personalized messages directly to your audience. From welcome sequences to promotional campaigns, we create communications that engage and convert.",
      bulletPoints: [
        "Automated email sequences",
        "SMS campaign management",
        "List segmentation strategies",
        "A/B testing and optimization",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Email marketing dashboard",
    },
    features: [
      { title: "Lifecycle Flows And Automation", description: "Automated customer journeys.", imageSrc: "/placeholder.svg" },
      { title: "Campaign Strategy And Execution", description: "Targeted promotional blasts.", imageSrc: "/placeholder.svg" },
      { title: "Segmentation And Personalization", description: "Hyper-relevant messaging.", imageSrc: "/placeholder.svg" },
      { title: "SMS Strategy And Short-Form Messaging", description: "Direct mobile engagement.", imageSrc: "/placeholder.svg" },
      { title: "Design And Content Production", description: "Beautiful emails that convert.", imageSrc: "/placeholder.svg" },
      { title: "Performance Tracking And Optimization", description: "Improving open and click rates.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "analytics-tracking",
    category: "market",
    title: "Analytics & Tracking",
    highlightedTitle: "Analytics",
    subtitle: "Data-driven insights that inform smarter decisions.",
    ctaText: "Get Insights",
    whatIs: {
      title: "What is Analytics & Tracking",
      highlightedWord: "Analytics",
      description:
        "Analytics and tracking provide the data foundation for informed marketing decisions. We implement comprehensive tracking solutions and create actionable reports that drive growth.",
      bulletPoints: [
        "Google Analytics setup",
        "Conversion tracking implementation",
        "Custom dashboard creation",
        "Attribution modeling",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Analytics tracking setup",
    },
    features: [
      { title: "Analytics Setup And Configuration", description: "Robust data foundation.", imageSrc: "/placeholder.svg" },
      { title: "Event Tracking And User Behavior Mapping", description: "Understanding user actions.", imageSrc: "/placeholder.svg" },
      { title: "Attribution And Conversion Tracking", description: "Knowing what drives sales.", imageSrc: "/placeholder.svg" },
      { title: "Dashboards And Reporting", description: "Visualizing key metrics.", imageSrc: "/placeholder.svg" },
      { title: "Funnel And Performance Audits", description: "Identifying drop-off points.", imageSrc: "/placeholder.svg" },
      { title: "Privacy And Compliance Setup", description: "GDPR/CCPA compliant tracking.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "creative-optimization",
    category: "market",
    title: "Creative Optimization",
    highlightedTitle: "Creative",
    subtitle: "Test and refine creative assets for maximum impact.",
    ctaText: "Optimize Creative",
    whatIs: {
      title: "What is Creative Optimization",
      highlightedWord: "Creative",
      description:
        "Creative optimization involves testing and iterating on ad creative, landing pages, and marketing assets to improve performance. We use data to understand what resonates with your audience.",
      bulletPoints: [
        "Ad creative testing",
        "Landing page optimization",
        "Copy and messaging tests",
        "Visual performance analysis",
      ],
      imageSrc: "/placeholder.svg",
      imageAlt: "Creative testing dashboard",
    },
    features: [
      { title: "Creative Audits And Insights", description: "Reviewing existing performance.", imageSrc: "/placeholder.svg" },
      { title: "A/B Testing And Variant Development", description: "Scientific creative testing.", imageSrc: "/placeholder.svg" },
      { title: "Platform-Specific Creative Strategy", description: "Native content for each channel.", imageSrc: "/placeholder.svg" },
      { title: "Messaging And Hook Frameworks", description: "Capturing attention instantly.", imageSrc: "/placeholder.svg" },
      { title: "Content Refresh Cycles", description: "Combating ad fatigue.", imageSrc: "/placeholder.svg" },
      { title: "Performance Tracking And Creative Insights", description: "Data-backed design decisions.", imageSrc: "/placeholder.svg" },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find((service) => service.slug === slug);
};

export const getServicesByCategory = (category: "design" | "develop" | "market"): ServiceData[] => {
  return servicesData.filter((service) => service.category === category);
};

// Helper to convert service title to slug
export const titleToSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-|-$/g, "");
};

// Map of display titles to slugs for Footer/Navbar links
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