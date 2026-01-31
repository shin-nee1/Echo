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
      { title: "Logo Design", description: "Iconic logos that capture your essence.", imageSrc: "/placeholder.svg" },
      { title: "Brand Guidelines", description: "Comprehensive style documentation.", imageSrc: "/placeholder.svg" },
      { title: "Visual Systems", description: "Cohesive design across all touchpoints.", imageSrc: "/placeholder.svg" },
      { title: "Brand Strategy", description: "Positioning that sets you apart.", imageSrc: "/placeholder.svg" },
      { title: "Brand Collateral", description: "Business cards, letterheads, and more.", imageSrc: "/placeholder.svg" },
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
      { title: "User Research", description: "Deep insights into user behavior.", imageSrc: "/placeholder.svg" },
      { title: "Wireframing", description: "Blueprint your digital experience.", imageSrc: "/placeholder.svg" },
      { title: "Prototyping", description: "Interactive mockups for testing.", imageSrc: "/placeholder.svg" },
      { title: "Interface Design", description: "Pixel-perfect visual designs.", imageSrc: "/placeholder.svg" },
      { title: "Design Systems", description: "Scalable component libraries.", imageSrc: "/placeholder.svg" },
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
      { title: "Concept Development", description: "Big ideas that resonate.", imageSrc: "/placeholder.svg" },
      { title: "Art Direction", description: "Visual storytelling excellence.", imageSrc: "/placeholder.svg" },
      { title: "Campaign Design", description: "Cohesive multi-channel campaigns.", imageSrc: "/placeholder.svg" },
      { title: "Brand Evolution", description: "Refreshing existing identities.", imageSrc: "/placeholder.svg" },
      { title: "Visual Strategy", description: "Long-term creative roadmaps.", imageSrc: "/placeholder.svg" },
    ],
  },
  {
    slug: "photography-videography",
    category: "design",
    title: "Photography & Videography",
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
      { title: "Product Photography", description: "Showcase products beautifully.", imageSrc: "/placeholder.svg" },
      { title: "Brand Films", description: "Cinematic storytelling.", imageSrc: "/placeholder.svg" },
      { title: "Social Content", description: "Scroll-stopping visuals.", imageSrc: "/placeholder.svg" },
      { title: "Aerial Footage", description: "Stunning drone cinematography.", imageSrc: "/placeholder.svg" },
      { title: "Post-Production", description: "Professional editing and color.", imageSrc: "/placeholder.svg" },
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
      { title: "Logo Animation", description: "Bring your brand mark to life.", imageSrc: "/placeholder.svg" },
      { title: "Explainer Videos", description: "Complex ideas made simple.", imageSrc: "/placeholder.svg" },
      { title: "Social Animations", description: "Engaging animated content.", imageSrc: "/placeholder.svg" },
      { title: "UI Animations", description: "Micro-interactions that delight.", imageSrc: "/placeholder.svg" },
      { title: "Graphic Design", description: "Print and digital collateral.", imageSrc: "/placeholder.svg" },
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
      { title: "Custom Development", description: "Tailored to your exact needs.", imageSrc: "/placeholder.svg" },
      { title: "Responsive Design", description: "Perfect on every device.", imageSrc: "/placeholder.svg" },
      { title: "CMS Integration", description: "Easy content management.", imageSrc: "/placeholder.svg" },
      { title: "Performance", description: "Lightning-fast load times.", imageSrc: "/placeholder.svg" },
      { title: "Security", description: "Enterprise-grade protection.", imageSrc: "/placeholder.svg" },
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
      { title: "Custom Themes", description: "Unique store experiences.", imageSrc: "/placeholder.svg" },
      { title: "App Development", description: "Extend store functionality.", imageSrc: "/placeholder.svg" },
      { title: "Checkout Flow", description: "Optimized conversion paths.", imageSrc: "/placeholder.svg" },
      { title: "Inventory Setup", description: "Organized product catalogs.", imageSrc: "/placeholder.svg" },
      { title: "Payment Integration", description: "Secure transaction processing.", imageSrc: "/placeholder.svg" },
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
      { title: "SaaS Platforms", description: "Scalable software solutions.", imageSrc: "/placeholder.svg" },
      { title: "Dashboards", description: "Data visualization tools.", imageSrc: "/placeholder.svg" },
      { title: "API Development", description: "Robust backend services.", imageSrc: "/placeholder.svg" },
      { title: "Real-time Features", description: "Live updates and collaboration.", imageSrc: "/placeholder.svg" },
      { title: "Cloud Architecture", description: "Scalable infrastructure.", imageSrc: "/placeholder.svg" },
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
      { title: "iOS Development", description: "Native Apple experiences.", imageSrc: "/placeholder.svg" },
      { title: "Android Development", description: "Native Google experiences.", imageSrc: "/placeholder.svg" },
      { title: "Cross-Platform", description: "One codebase, all devices.", imageSrc: "/placeholder.svg" },
      { title: "App Store Launch", description: "Successful submissions.", imageSrc: "/placeholder.svg" },
      { title: "Maintenance", description: "Ongoing support and updates.", imageSrc: "/placeholder.svg" },
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
      { title: "A/B Testing", description: "Data-driven improvements.", imageSrc: "/placeholder.svg" },
      { title: "Speed Audits", description: "Identify performance issues.", imageSrc: "/placeholder.svg" },
      { title: "Core Web Vitals", description: "Meet Google's standards.", imageSrc: "/placeholder.svg" },
      { title: "Heatmaps", description: "Visualize user behavior.", imageSrc: "/placeholder.svg" },
      { title: "Funnel Analysis", description: "Find conversion leaks.", imageSrc: "/placeholder.svg" },
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
      { title: "Search Ads", description: "Capture high-intent traffic.", imageSrc: "/placeholder.svg" },
      { title: "Social Ads", description: "Engage on every platform.", imageSrc: "/placeholder.svg" },
      { title: "Display Ads", description: "Visual brand awareness.", imageSrc: "/placeholder.svg" },
      { title: "Retargeting", description: "Re-engage past visitors.", imageSrc: "/placeholder.svg" },
      { title: "Shopping Ads", description: "Drive e-commerce sales.", imageSrc: "/placeholder.svg" },
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
      { title: "Content Creation", description: "Engaging posts that convert.", imageSrc: "/placeholder.svg" },
      { title: "Community Management", description: "Build loyal followers.", imageSrc: "/placeholder.svg" },
      { title: "Influencer Outreach", description: "Strategic partnerships.", imageSrc: "/placeholder.svg" },
      { title: "Social Listening", description: "Monitor brand mentions.", imageSrc: "/placeholder.svg" },
      { title: "Analytics", description: "Track what matters.", imageSrc: "/placeholder.svg" },
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
      { title: "Keyword Research", description: "Target the right terms.", imageSrc: "/placeholder.svg" },
      { title: "Technical SEO", description: "Optimize site structure.", imageSrc: "/placeholder.svg" },
      { title: "Content Strategy", description: "Valuable, rankable content.", imageSrc: "/placeholder.svg" },
      { title: "Link Building", description: "Authority through backlinks.", imageSrc: "/placeholder.svg" },
      { title: "Local SEO", description: "Dominate local search.", imageSrc: "/placeholder.svg" },
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
      { title: "Email Automation", description: "Nurture leads on autopilot.", imageSrc: "/placeholder.svg" },
      { title: "SMS Campaigns", description: "High-open-rate messaging.", imageSrc: "/placeholder.svg" },
      { title: "Segmentation", description: "Right message, right person.", imageSrc: "/placeholder.svg" },
      { title: "Template Design", description: "Beautiful email layouts.", imageSrc: "/placeholder.svg" },
      { title: "Analytics", description: "Track every interaction.", imageSrc: "/placeholder.svg" },
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
      { title: "GA4 Setup", description: "Modern analytics implementation.", imageSrc: "/placeholder.svg" },
      { title: "Tag Management", description: "Organized tracking codes.", imageSrc: "/placeholder.svg" },
      { title: "Custom Reports", description: "Data that matters to you.", imageSrc: "/placeholder.svg" },
      { title: "Attribution", description: "Understand the customer journey.", imageSrc: "/placeholder.svg" },
      { title: "Data Visualization", description: "Clear, actionable insights.", imageSrc: "/placeholder.svg" },
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
      { title: "Ad Testing", description: "Find winning creative.", imageSrc: "/placeholder.svg" },
      { title: "Copy Testing", description: "Words that convert.", imageSrc: "/placeholder.svg" },
      { title: "Visual Testing", description: "Images that perform.", imageSrc: "/placeholder.svg" },
      { title: "LP Optimization", description: "Higher converting pages.", imageSrc: "/placeholder.svg" },
      { title: "Performance Reports", description: "Clear creative insights.", imageSrc: "/placeholder.svg" },
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
