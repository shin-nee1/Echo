export interface ServiceFeature {
  title: string;
  description: string;
  imageSrc: string;
}

export interface ServiceData {
  slug: string;
  category: "design" | "develop" | "market";
  title: string;
  nonHighlightedText: string; // Added field
  highlightedText: string;
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

// Base path for images
const BASE_PATH = "/src/assets/Features images";

export const servicesData: ServiceData[] = [
  // ==================== DESIGN SERVICES ====================
  {
    slug: "brand-identity-guidelines",
    category: "design",
    title: "Brand Identity & Guidelines",
    nonHighlightedText: "That Defines Your",
    highlightedText: "Brand",
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
    nonHighlightedText: "That Defines Your User",
    highlightedText: "Experience",
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
      imageSrc: `${BASE_PATH}/creative direction hero.png`,
      imageAlt: "Creative direction mood board",
    },
    features: [
      { title: "Campaign Concepts & Themes", description: "Big ideas that drive campaigns.", imageSrc: `${BASE_PATH}/campaign concept.png` },
      { title: "Art Direction For Shoots & Content", description: "Guiding visual production on set.", imageSrc: `${BASE_PATH}/art direction for shoot.png` },
      { title: "Content Frameworks & Storytelling Structure", description: "Narrative guides for brand content.", imageSrc: `${BASE_PATH}/content architecture and strategy.png` },
      { 
      title: "Moodboard & Visual Direction", description: "Visual inspiration and aesthetic direction.", imageSrc: `${BASE_PATH}/moodboard.png`
    },
    ],
  },
  {
    slug: "photography-videography",
    category: "design",
    title: "Photography & Videography",
    nonHighlightedText: "Seen In Your",
    highlightedText: "Brand",
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
      imageSrc: `${BASE_PATH}/mobille application hero.png`,
      imageAlt: "Mobile app development",
    },
    features: [
      { title: "iOS & Android Application Development", description: "Native mobile experiences.", imageSrc: `${BASE_PATH}/ios and andriod app dev.png` },
      { title: "App UI Integration & Interaction Flows", description: "Seamless mobile interfaces.", imageSrc: `${BASE_PATH}/app ui integration and interaction.png` },
      { title: "API Connectivity & Backend Structure", description: "Robust data handling.", imageSrc: `${BASE_PATH}/api conectivity.png` },
      { title: "Performance Optimization & Device Testing", description: "Smooth performance on all devices.", imageSrc: `${BASE_PATH}/performance optimization and testing.png` },
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
      imageSrc: `${BASE_PATH}/Paid Media Hero.png`,
      imageAlt: "Paid media campaign dashboard",
    },
    features: [
      { title: "Data, Tracking & Optimization", description: "Measurement tracking for ROAS.", imageSrc: `${BASE_PATH}/performance monitoing and insights.png` },
      { title: "Audience Strategy", description: "Targeting your ideal customer.", imageSrc: `${BASE_PATH}/audience strategy.png` },
      { title: "Creative Direction & Ad Development", description: "Ads that stop the scroll.", imageSrc: `${BASE_PATH}/creative direction and Ad development.png` },
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
      imageSrc: `${BASE_PATH}/Social media manage hero.png`,
      imageAlt: "Social media management",
    },
    features: [
      { title: "Strategic Content Planning", description: "Roadmaps for social growth.", imageSrc: `${BASE_PATH}/strategic content planning.png` },
      { title: "Creative Content Production", description: "High-quality social assets.", imageSrc: `${BASE_PATH}/creative content production.png` },
      { title: "Platform Management And Publishing", description: "Consistent posting schedules.", imageSrc: `${BASE_PATH}/platform management and publishing.png` },
      { title: "Community Interaction And Growth", description: "Engaging with your audience.", imageSrc: `${BASE_PATH}/community interaction and growth.png` },
      { title: "Performance Monitoring And Insights", description: "Tracking social KPIs.", imageSrc: `${BASE_PATH}/performance monitoing and insights.png` },
      { title: "Content Frameworks And Branding Consistency", description: "Unified brand voice.", imageSrc: `${BASE_PATH}/visual lang.png` },
    ],
  },
  {
    slug: "seo-content-strategy",
    category: "market",
    title: "SEO & Content Strategy",
    nonHighlightedText: "That Puts You",
    highlightedText: "On The Map",
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
      { title: "Performance Monitoring & Refinement", description: "Continuous SEO improvement.", imageSrc: `${BASE_PATH}/performance monitoing and insights.png` },
    ],
  },
  {
    slug: "email-sms-marketing",
    category: "market",
    title: "Email & SMS Marketing",
    nonHighlightedText: "That Drives Your",
    highlightedText: "Messaging",
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
      imageSrc: `${BASE_PATH}/Email and sms hero.png`,
      imageAlt: "Email marketing dashboard",
    },
    features: [
      { title: "Lifecycle Flows And Automation", description: "Automated customer journeys.", imageSrc: `${BASE_PATH}/lifecycle flows and automation.png` },
      { title: "Campaign Strategy And Execution", description: "Targeted promotional blasts.", imageSrc: `${BASE_PATH}/campaign strat and execute.png` },
      { title: "Segmentation And Personalization", description: "Hyper-relevant messaging.", imageSrc: `${BASE_PATH}/segmentation and personalization.png` },
      { title: "SMS Strategy And Short-Form Messaging", description: "Direct mobile engagement.", imageSrc: `${BASE_PATH}/sms strat and short form.png` },
      { title: "Design And Content Production", description: "Beautiful emails that convert.", imageSrc: `${BASE_PATH}/creative content production.png` },
      { title: "Performance Tracking And Optimization", description: "Improving open and click rates.", imageSrc: `${BASE_PATH}/performance monitoing and insights.png` },
    ],
  },
  {
    slug: "analytics-tracking",
    category: "market",
    title: "Analytics & Tracking",
    nonHighlightedText: "That Sharpens Your",
    highlightedText: "Visibility",
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
      imageSrc: `${BASE_PATH}/Analytics Hero.png`,
      imageAlt: "Analytics tracking setup",
    },
    features: [
      { title: "Analytics Setup And Configuration", description: "Robust data foundation.", imageSrc: `${BASE_PATH}/analytics setup and configure.png` },
      { title: "Event Tracking And User Behavior Mapping", description: "Understanding user actions.", imageSrc: `${BASE_PATH}/event tracing and user behavior.png` },
      { title: "Attribution And Conversion Tracking", description: "Knowing what drives sales.", imageSrc: `${BASE_PATH}/attribution and conversion.png` },
      { title: "Dashboards And Reporting", description: "Visualizing key metrics.", imageSrc: `${BASE_PATH}/Custom dashboards.png` },
      { title: "Funnel And Performance Audits", description: "Identifying drop-off points.", imageSrc: `${BASE_PATH}/funnel and performance audit.png` },
      { title: "Privacy And Compliance Setup", description: "GDPR/CCPA compliant tracking.", imageSrc: `${BASE_PATH}/Analytics Hero.png` },
    ],
  },
  {
    slug: "creative-optimization",
    category: "market",
    title: "Creative Optimization",
    nonHighlightedText: "That Elevates Your",
    highlightedText: "Performance",
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
      imageSrc: `${BASE_PATH}/Creative optimize hero.png`,
      imageAlt: "Creative testing dashboard",
    },
    features: [
      { title: "Creative Audits And Insights", description: "Reviewing existing performance.", imageSrc: `${BASE_PATH}/creative audio and insigh.png` },
      { title: "A/B Testing And Variant Development", description: "Scientific creative testing.", imageSrc: `${BASE_PATH}/ab testing and variant.png` },
      { title: "Platform-Specific Creative Strategy", description: "Native content for each channel.", imageSrc: `${BASE_PATH}/platform spcific creative.png` },
      { title: "Messaging And Hook Frameworks", description: "Capturing attention instantly.", imageSrc: `${BASE_PATH}/mesaaging and hook.png` },
      { title: "Content Refresh Cycles", description: "Combating ad fatigue.", imageSrc: `${BASE_PATH}/content refresh.png` },
      { title: "Performance Tracking And Creative Insights", description: "Data-backed design decisions.", imageSrc: `${BASE_PATH}/performance monitoing and insights.png` },
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