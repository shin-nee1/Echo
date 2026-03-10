export interface ServiceFeature {
  title: string;
  description: string;
  imageSrc: string;
  alternateImageSrc?: string;
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
  contactCta: {
    title: string;
    description: string;
    buttonText: string;
  };
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
      description: `Brand identity is the foundation of how your business is seen, understood, and remembered. At Echo & Impact, we build identities that do more than look good, they create recognition, establish trust, and set the tone for every interaction that follows.\n\nWe define the visual and verbal systems behind your brand: logos, typography, color, messaging, layout rules, and the complete design language that keeps everything consistent and aligned as you grow.\n\nWhether you’re creating a brand from scratch or refining an existing one, our focus is the same, clarity, cohesion, and a timeless identity built to scale.`,
      imageSrc: `${BASE_PATH}/Brand hero.png`,
      imageAlt: "Brand identity design showcase",
    },
    features: [
      { title: "Logo Architecture", description: "From primary marks to responsive variations, your brand receives a flexible set of logos and lockups designed to remain consistent across digital, print, packaging, and product. Each variation is built with clarity and scalability in mind, ensuring your identity holds up everywhere it appears.", imageSrc: `${BASE_PATH}/logo arch.png`, alternateImageSrc: `${BASE_PATH}/brand guidelines.png` },
      { title: "Typography Structure", description: "A complete typographic approach is defined, including hierarchy, pairing, spacing, and layout behavior, so your communication feels intentional and unmistakably yours. This creates a strong visual rhythm that guides how information is presented across all brand touchpoints.", imageSrc: `${BASE_PATH}/Typo.png`, alternateImageSrc: `${BASE_PATH}/visual lang.png` },
      { title: "Color Framework", description: "A tailored palette is developed to reflect your brand’s personality and support real-world usability. Each color is refined for digital and print performance, with guidance on balance, contrast, and application, ensuring consistency no matter where your brand shows up.", imageSrc: `${BASE_PATH}/ColorFrame.png`, alternateImageSrc: `${BASE_PATH}/moodboard.png` },
      { title: "Visual Language", description: "Your brand’s personality is expressed through crafted shapes, patterns, iconography, textures, and spacing principles. These elements extend your identity beyond the logo and create a distinctive look that audiences can recognize instantly across campaigns, content, and product interfaces.", imageSrc: `${BASE_PATH}/visual lang.png`, alternateImageSrc: `${BASE_PATH}/ColorFrame.png` },
      { title: "Brand Voice & Messaging", description: "Your verbal identity is shaped through tone, messaging pillars, narrative themes, and foundational statements that guide communication across all platforms. This ensures everything your brand says, aligns with your positioning and intention.", imageSrc: `${BASE_PATH}/brand voice.png`, alternateImageSrc: `${BASE_PATH}/content architecture and strategy.png` },
      { title: "Imagery & Art Direction", description: "Photography and video direction is defined through mood, lighting, composition, color treatment, and framing principles. This creates a cohesive visual narrative across content, campaigns, products, and socials.", imageSrc: `${BASE_PATH}/imagery and art direction.png`, alternateImageSrc: `${BASE_PATH}/photography hero.png` },
      { title: "Pitch Deck", description: "Your brand’s story is translated into a clear, compelling presentation designed for investors, partners, or internal communication. We structure the narrative, define the visual flow, and build slides that reflect your identity with consistency and clarity. The result is a deck that communicates your value with confidence and leaves a lasting impression.", imageSrc: `${BASE_PATH}/pitch deck.png`, alternateImageSrc: `${BASE_PATH}/moodboard.png` },
      { title: "Brand Guidelines", description: "All identity components are documented in a refined, comprehensive guide that explains how your brand should look, sound, and behave. This becomes the long-term reference for internal teams, partners, vendors, and future growth, ensuring consistency at every scale.", imageSrc: `${BASE_PATH}/brand guidelines.png`, alternateImageSrc: `${BASE_PATH}/design system.png` },
    ],
    contactCta: {
      title: "Ready to shape your identity?",
      description: "If your brand needs clarity, cohesion, or a stronger foundation, we can help you build it with intention.\n\nShare what you’re working on, and we’ll help you understand the best next steps.",
      buttonText: "Let me be seen ",
    },
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
      description: `UI/UX defines and sets the foundation of how users experience your product, website, or platform and ultimately how they feel about your brand. At Echo & Impact, UI/UX is more than screens and layouts; it’s the strategy behind user behavior, clarity, flow, and decision-making and how strong the foundation is for your finished product.\n\nWe design interfaces and experiences that are intuitive, structured, visually aligned with your brand, and built to guide users toward the true goals of your project.\n\nWhether you’re launching a product, redesigning a website, or refining an existing platform, our focus remains the same: experiences that are thoughtful, usable, consistent, functional and built to scale.`,
      imageSrc: `${BASE_PATH}/Ui ux hero.png`,
      imageAlt: "UI/UX design process illustration",
    },
    features: [
      { title: "User Research & Insight", description: "Understanding user behavior, needs, motivations, and friction points through research, audits, and structured analysis. This informs smarter decisions and ensures the experience is built around real users, not assumptions.", imageSrc: `${BASE_PATH}/research insight.png`, alternateImageSrc: `${BASE_PATH}/conversion audits.png` },
      { title: "User Flows & Journey Mapping", description: "Clear, outcome-driven pathways that define how users navigate your product. Each step is mapped to reduce friction, improve clarity, and create a logical journey from entry to completion.", imageSrc: `${BASE_PATH}/user flows.png`, alternateImageSrc: `${BASE_PATH}/funnel improvement.png` },
      { title: "Wireframes & Layout Structure (UX)", description: "Low- and mid-fidelity wireframes that define structure, hierarchy, journey and content placement. This stage shapes how each screen works before any aesthetic decisions are made.", imageSrc: `${BASE_PATH}/wireframe layout.png`, alternateImageSrc: `${BASE_PATH}/ui design.png` },
      { title: "UI Design & Visual Interface", description: "High-fidelity interface design built from established visual principles and brand identity. This includes layout design, components, colors, spacing rhythm, and interaction behavior that feel polished and intuitive.", imageSrc: `${BASE_PATH}/ui design.png`, alternateImageSrc: `${BASE_PATH}/wireframe layout.png` },
      { title: "Design Systems & Components", description: "Reusable UI patterns, components, rules, and behaviors that keep the entire interface consistent and scalable. Design systems make future updates easier, faster, and more unified.", imageSrc: `${BASE_PATH}/design system.png`, alternateImageSrc: `${BASE_PATH}/brand guidelines.png` },
      { title: "Micro-Interactions & Usability Enhancements", description: "Buttons, transitions, animations, feedback states, and subtle interactions that improve user understanding and create a smoother, more modern and human experience.", imageSrc: `${BASE_PATH}/micro interactions.png`, alternateImageSrc: `${BASE_PATH}/user interface animation.png` },
      { title: "Responsive & Adaptive Design", description: "Interfaces optimized across device types, screen sizes, and resolutions, ensuring seamless performance whether users are on desktop, tablet, or mobile.", imageSrc: `${BASE_PATH}/responsive design.png`, alternateImageSrc: `${BASE_PATH}/ios and andriod app dev.png` },
      { title: "Prototyping & Experience Testing", description: "Interactive prototypes that simulate the close to real experience, enabling testing, validation, and refinement before development. This ensures what gets built is already aligned with user needs.", imageSrc: `${BASE_PATH}/prototyping.png`, alternateImageSrc: `${BASE_PATH}/ui design.png` },
    ],
    contactCta: {
      title: "Ready to design an experience that works?",
      description: "If your product, platform, or website needs clearer structure, better usability, or a stronger interface, we can help you build it with intention.\n\nShare what you’re working on, and we’ll guide you toward the right next steps.",
      buttonText: "Design my experience ",
    },
  },
  {
    slug: "creative-direction",
    category: "design",
    title: "Creative Direction",
    nonHighlightedText: "Behind Your Brand's",
    highlightedText: "Expression",
    subtitle: "Strategic vision that guides your brand's visual narrative.",
    ctaText: "Let's Define The Vision",
    whatIs: {
      title: "What is Creative Direction",
      highlightedWord: "Creative",
      description: `Creative direction defines how your brand expresses itself, visually, emotionally, and narratively. At Echo & Impact, we shape the overarching vision that guides your content, campaigns, storytelling, and artistic style.\n\nIt’s the layer that ensures everything you put into the world feels cohesive, intentional, and unmistakably yours. From defining the mood and visual tone to structuring themes, narrative styles, and content frameworks, we create a direction that your audience can recognize instantly and connect with deeply.\n\nWhether you're building your brand voice for the first time or elevating your existing presence, we craft a creative system that drives clarity, character, and distinctiveness across every touchpoint.`,
      imageSrc: `${BASE_PATH}/creative direction hero.png`,
      imageAlt: "Creative direction mood board",
    },
    features: [
      { title: "Moodboards & Visual Direction", description: "We set the creative foundation through curated moodboards that define style, tone, texture, lighting, and emotional intention. This creates a visual north star for all design, content, and campaign decisions, ensuring every output feels aligned and consistent.", imageSrc: `${BASE_PATH}/moodboard.png`, alternateImageSrc: `${BASE_PATH}/brand guidelines.png` },
      { title: "Campaign Concepts & Themes", description: "Your campaigns receive a structured narrative direction, core ideas, and angles that help your brand communicate with purpose. This gives your marketing more depth, coherence, and impact.", imageSrc: `${BASE_PATH}/campaign concept.png`, alternateImageSrc: `${BASE_PATH}/campaign strat and execute.png` },
      { title: "Art Direction for Shoots & Content", description: "Your visual assets are guided by refined, intentional direction across styling, framing, composition, color treatment, and overall visual behavior. This ensures photos and videos not only look good but fit your brand’s identity perfectly.", imageSrc: `${BASE_PATH}/art direction for shoot.png`, alternateImageSrc: `${BASE_PATH}/imagery and art direction.png` },
      { title: "Content Frameworks & Storytelling Structure", description: "Your content pillars, narrative angles, and storytelling styles are defined so your team has clarity on how to say it, and how to maintain consistency. This builds recognizability across short-form content, campaigns, and brand messaging.", imageSrc: `${BASE_PATH}/content architecture and strategy.png`, alternateImageSrc: `${BASE_PATH}/strategic content planning.png` },
    ],
    contactCta: {
      title: "Ready to define your creative direction?",
      description: "If your brand needs clarity, cohesion, or a distinctive visual narrative, we’ll help you shape it with intention.\n\nShare what you're working on, and we’ll guide you toward the next steps.",
      buttonText: "Let’s define the vision ",
    },
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
      description: `Content shoots shape how your brand is felt, understood, and remembered. At Echo & Impact, we produce visual content that captures your identity with intention, clarity, and emotional depth.\n\nFrom social media content to full-scale brand shoots, founder videos, lifestyle visuals, and short-form creative, we ensure every frame reflects your brand’s personality and communicates with precision.\n\nWhether you need a complete content library, a consistent social presence, or high-quality visuals for campaigns, our focus remains the same, creating assets that elevate your storytelling and strengthen the connection between your brand and audience.`,
      imageSrc: `${BASE_PATH}/photography hero.png`,
      imageAlt: "Professional photography setup",
    },
    features: [
      { title: "Content Shoots (Social Media + Campaign)", description: "We produce content built for modern platforms. Structured, visually aligned, and tailored for performance. This includes product showcases, lifestyle scenarios, environmental shots, and storytelling-focused clips that elevate your brand’s social presence or campaign output. Every shoot is planned around your goals, audience, and identity to ensure consistency and clarity.", imageSrc: `${BASE_PATH}/Content shoots.png`, alternateImageSrc: `${BASE_PATH}/creative content production.png` },
      { title: "Product, Lifestyle & Brand Photography", description: "Pictures are captured with precision and intention. From clean studio shots to contextual lifestyle imagery, we create visuals that communicate value, quality, and personality. Each photograph is styled, lit, and composed to align with your brand identity and real-world use cases across web, ads, packaging, and social.", imageSrc: `${BASE_PATH}/product lifestyle brand.png`, alternateImageSrc: `${BASE_PATH}/imagery and art direction.png` },
      { title: "Founder & Team Video Content", description: "We help founders and teams communicate their story with clarity and authenticity. Through structured direction, polished framing, and well-composed shots, we create videos that feel genuine, confident, and aligned with your brand narrative. Ideal for websites, campaigns, internal communication, and investor presentations.", imageSrc: `${BASE_PATH}/founder and team.png`, alternateImageSrc: `${BASE_PATH}/podcast shoots.png` },
      { title: "Short-Form Video Direction & Production", description: "Short-form content is crafted with strategy, creativity, and platform behavior in mind. We plan concepts, scripts, framing, pacing, and editing to ensure each video performs across Instagram, TikTok, YouTube Shorts, or ads. Every piece is aligned with your brand’s tone and visual language.", imageSrc: `${BASE_PATH}/short form video.png`, alternateImageSrc: `${BASE_PATH}/explainer videos.png` },
      { title: "Post Production & Delivery", description: "Footage goes through professional editing, color grading, stabilization, sound refinement, and export optimization. We deliver ready-to-use assets for all platforms, ensuring quality, consistency, and smooth integration across your brand ecosystem whether we shoot it or raw footage provided by you.", imageSrc: `${BASE_PATH}/post production.png`, alternateImageSrc: `${BASE_PATH}/motion graphics.png` },
      { title: "Podcast Shoots & Studio Production", description: "Our team directs, shoots, and edits podcast episodes with top-grade visuals, sound, and lighting. Whether you need a recurring series or a branded mini-documentary style, we produce content that feels premium and maintains your brand’s presence across long-form formats shot in our own studio.", imageSrc: `${BASE_PATH}/podcast shoots.png`, alternateImageSrc: `${BASE_PATH}/founder and team.png` },
    ],
    contactCta: {
      title: "Ready to bring your brand to life on camera?",
      description: "Whether you need scroll-stopping social content, product visuals, or a full brand shoot, we’ll help you create content that feels intentional and unmistakably yours.\n\nTell us what you’re working on, and we’ll guide you to the next steps.",
      buttonText: "Shoot it ",
    },
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
      title: "What is Motion & Graphic Design",
      highlightedWord: "Motion",
      description: `Motion and graphic design bring your brand to life through movement, clarity, and visual expression. At Echo & Impact, we create motion systems and graphic assets that elevate your storytelling, enhance recognition, and strengthen your brand’s presence across digital platforms.\n\nFrom animated elements and social graphics to explainer videos, transitions, and campaign visuals, every asset is built with intention and aligned with your brand identity.\n\nWhether you need high-volume content, product explainers, or a complete graphic library, our focus is consistent, design that communicates clearly, performs well, and feels unmistakably yours.`,
      imageSrc: `${BASE_PATH}/Motion hero.png`,
      imageAlt: "Motion graphics workspace",
    },
    features: [
      { title: "Motion Graphics & Brand Animations", description: "We craft animated elements that extend your brand identity into motion, logo reveals, transitions, visual accents, kinetic type, and UI animations. Each motion asset is created to reinforce your visual language and enhance the overall experience across social, web, and product interfaces.", imageSrc: `${BASE_PATH}/motion graphics.png`, alternateImageSrc: `${BASE_PATH}/user interface animation.png` },
      { title: "Social Media Graphics & Digital Collateral", description: "Your digital presence gets a proper system of graphics tailored for social platforms, campaigns, ads, and ongoing content. These designs maintain visual consistency, improve recognizability, and help your brand stand out in fast-paced environments.", imageSrc: `${BASE_PATH}/social media graphics.png`, alternateImageSrc: `${BASE_PATH}/creative content production.png` },
      { title: "Explainer Videos & Visual Storytelling", description: "We create short-form explainers that simplify complex ideas through clean animation, intuitive sequencing, and strong narrative flow. Ideal for products, features, onboarding, landing pages, or brand presentations.", imageSrc: `${BASE_PATH}/explainer videos.png`, alternateImageSrc: `${BASE_PATH}/short form video.png` },
      { title: "Campaign Graphics & Promotional Material", description: "Campaigns receive a complete graphic suite, hero visuals, supporting assets, banners, and visual concepts that create a strong narrative across platforms. Everything is aligned with your creative direction and built for multi-channel use.", imageSrc: `${BASE_PATH}/campaign graphics.png`, alternateImageSrc: `${BASE_PATH}/campaign concept.png` },
      { title: "User Interface Animations", description: "We animate micro-interactions, transitions, and interface behaviors that make your product feel smooth, responsive, and modern. These animations enhance usability and improve overall user experience without compromising performance.", imageSrc: `${BASE_PATH}/user interface animation.png`, alternateImageSrc: `${BASE_PATH}/micro interactions.png` },
    ],
    contactCta: {
      title: "Ready to bring your visuals to life?",
      description: "Whether you need animated identity elements, campaign graphics, UI animations, or ongoing content, we help you create visuals that move with purpose.\n\nShare what you're building, and we’ll help define the next steps.",
      buttonText: "Put it into motion ",
    },
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
      description: `Your website is the core of your digital presence, the place where your brand, your user experience, and your business goals converge. At Echo & Impact, we build websites that are fast, intentional, intuitive, and engineered for real performance.\n\nEvery website we create is designed to look exceptional, function seamlessly, and scale with your brand as it grows. From corporate sites and landing pages to multi-page platforms and conversion-driven funnels, we build with clarity, precision, and long-term stability in mind.\n\nOur focus is simple, a website that represents your brand, supports your goals and puts you on the digital map.`,
      imageSrc: `${BASE_PATH}/website development hero.png`,
      imageAlt: "Website development illustration",
    },
    features: [
      { title: "Custom Website Development", description: "We build fully tailored websites, no templates, no drag-and-drop shortcuts. Every page, structure, and interaction is developed from the ground up to reflect your brand identity, meet your functional needs, and deliver a polished, high-performance user experience.", imageSrc: `${BASE_PATH}/custom website development.png`, alternateImageSrc: `${BASE_PATH}/web application dev hero.png` },
      { title: "Responsive & Mobile-Optimized Builds", description: "Your website adapts seamlessly across devices, ensuring smooth interactions, fast load times, and clean layout behavior on mobile, tablet, and desktop. The framework is designed to perform consistently across all screen sizes.", imageSrc: `${BASE_PATH}/responsive and mobile.png`, alternateImageSrc: `${BASE_PATH}/responsive design.png` },
      { title: "High-Performance Front-End & Back-End Architecture", description: "Your website is developed with efficient, scalable code. Clean structure, optimized assets, stable back-end logic, and reliable frameworks ensure speed, security, and long-term maintainability.", imageSrc: `${BASE_PATH}/high performance front.png`, alternateImageSrc: `${BASE_PATH}/speed optimization.png` },
      { title: "CMS Setup & Content Structuring", description: "We can implement a content management system that enables your team to update, edit, and manage content without technical complexity. Pages, sections, and content blocks are structured logically to keep the site easy to navigate and maintain.", imageSrc: `${BASE_PATH}/cms setup.png`, alternateImageSrc: `${BASE_PATH}/admin panel.png` },
      { title: "Landing Pages, Funnels & Multi-Page Sites", description: "From product launches and campaigns to fully built-out corporate sites, we develop pages that guide users clearly and support your conversion goals. Layouts are designed around usability, clarity, and behavioral psychology.", imageSrc: `${BASE_PATH}/landing page and offer.png`, alternateImageSrc: `${BASE_PATH}/landing page optimization.png` },
    ],
    contactCta: {
      title: "Ready to build your website?",
      description: "Whether you need a high-performance marketing site, a conversion-driven funnel, or a fully custom digital experience, we’ll help you build it with clarity and precision.\n\nShare your goals, and we’ll guide you through the next steps.",
      buttonText: "Go Live ",
    },
  },
  {
    slug: "shopify-development",
    category: "develop",
    title: "Shopify Development",
    nonHighlightedText: "You Need For an",
    highlightedText: "Online Shop",
    subtitle: "E-commerce solutions that drive sales and scale with your business.",
    ctaText: "My Online Shop",
    whatIs: {
      title: "What is Shopify Development",
      highlightedWord: "Shopify",
      description: `Your online store is more than a storefront, it’s the engine of your business. At Echo & Impact, we build Shopify experiences that are fast, structured, conversion-driven, and fully aligned with your brand and growth goals.\n\nWhether you’re launching a new store, migrating from another platform, or scaling an existing one, we design and develop Shopify setups that feel seamless to use, easy to manage, and built for performance.\n\nEvery decision such as structure, layout, theme behavior, product strategy, and checkout optimization, is crafted with clarity and conversion in mind so your store not only looks great but sells effectively.`,
      imageSrc: `${BASE_PATH}/shopify development hero.png`,
      imageAlt: "Shopify store development",
    },
    features: [
      { title: "Shopify Store Setup or Theme Customization", description: "Your store is configured with a clean, scalable structure, pages, collections, navigation, and theme behavior tailored to your brand. We customize layouts, interactions, and styling for a polished, high-performing storefront that aligns with your identity.", imageSrc: `${BASE_PATH}/shopify stop setup.png`, alternateImageSrc: `${BASE_PATH}/custom website development.png` },
      { title: "Product, Collection & Inventory Structure", description: "Your product catalog is organized with clarity: variants, attributes, collections, tags, and filtering systems that make browsing easy for customers and maintenance simple for your team. Structure is optimized for both UX and long-term scalability.", imageSrc: `${BASE_PATH}/product collection and inventory.png`, alternateImageSrc: `${BASE_PATH}/cms setup.png` },
      { title: "Conversion-Optimized Storefront Design", description: "Storefront layouts are shaped using behavioral psychology, ensuring users understand what to do, where to go, and how to purchase. Product pages, CTAs, navigation flow, and content hierarchy are all designed with conversion in mind.", imageSrc: `${BASE_PATH}/conversion optimized.png`, alternateImageSrc: `${BASE_PATH}/landing page optimization.png` },
      { title: "Shopify Apps & Third-Party Integrations", description: "We integrate essential tools such as reviews, loyalty, subscriptions, bundles, analytics, email, and more, ensuring they work seamlessly without slowing your store down. Integrations are selected based on your goals and technical compatibility.", imageSrc: `${BASE_PATH}/shopify apps.png`, alternateImageSrc: `${BASE_PATH}/api dev and intergrate.png` },
      { title: "Checkout Optimization & Fulfillment Setup", description: "Your checkout and backend operations are configured for smooth order handling: multiple shipping rates, automations, payment setups, tax rules, fulfillment flow, and customer notifications. Everything is built to reduce friction and improve reliability.", imageSrc: `${BASE_PATH}/checkout optimize.png`, alternateImageSrc: `${BASE_PATH}/funnel improvement.png` },
    ],
    contactCta: {
      title: "Ready to build your store?",
      description: "If you want a Shopify experience that is fast, scalable, and designed for conversion, we’ll help you build it with precision and clarity.\n\nShare your goals, and we’ll guide you through the next steps.",
      buttonText: "My Online Shop ",
    },
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
  title: "What is Web Application", // Put the full phrase here
  highlightedWord: "Web Application",
      description: `Web applications are where your product, your users, and your business logic meet. At Echo & Impact, we build custom web applications that are stable, scalable, secure, and engineered around real functionality.\n\nFrom dashboards and portals to SaaS platforms, automation systems, API integrations, internal tools, and full-scale digital products, we develop applications with clean architecture, smooth user flow, and reliable performance.\n\nWhether you're launching an MVP, rebuilding a legacy system, or scaling a complex platform, our focus remains the same, an application built with clarity, functional logic, technical precision, and long-term scalability in mind.`,
      imageSrc: `${BASE_PATH}/web application dev hero.png`,
      imageAlt: "Web application interface",
    },
    features: [
      { title: "Custom Dashboards & User Portals", description: "We develop dashboards and portals that simplify complex data and workflows. From role-based access to analytics views and user management, every interface is structured for usability and performance so your users can navigate effortlessly.", imageSrc: `${BASE_PATH}/Custom dashboards.png`, alternateImageSrc: `${BASE_PATH}/dashboard and reporting.png` },
      { title: "API Development & Integrations", description: "Your application connects seamlessly to third-party platforms, internal tools, and external systems. We build stable APIs, integrate external services, and ensure data flows reliably across the entire ecosystem.", imageSrc: `${BASE_PATH}/api dev and intergrate.png`, alternateImageSrc: `${BASE_PATH}/shopify apps.png` },
      { title: "Feature-Driven, Scalable Architecture", description: "Every feature is developed with clean, modular code that supports future growth. We build systems that can evolve as your product expands, without needing constant rewrites or patchwork fixes.", imageSrc: `${BASE_PATH}/feature driven scaleable.png`, alternateImageSrc: `${BASE_PATH}/high performance front.png` },
      { title: "Real-Time Functionality & Backend Logic", description: "From live notifications and activity tracking to messaging systems, syncing behaviors, and real-time dashboards, we develop backend logic that supports smooth, modern interactions.", imageSrc: `${BASE_PATH}/eral time functionality.png`, alternateImageSrc: `${BASE_PATH}/performance monitoring.png` },
      { title: "Admin Panels, Reporting & Internal Tools", description: "We build custom admin environments and internal systems that empower your team to manage users, operations, data, content, and workflows without technical complexity.", imageSrc: `${BASE_PATH}/admin panel.png`, alternateImageSrc: `${BASE_PATH}/Custom dashboards.png` },
    ],
    contactCta: {
      title: "Ready to build your web application?",
      description: "If you're creating an internal tool, a SaaS platform, or a full digital product, we’ll help you build it with structure, clarity, and scalability from day one.\n\nShare your idea, and we’ll guide you toward the next steps.",
      buttonText: "Code It ",
    },
  },
  {
    slug: "mobile-application-development",
    category: "develop",
    title: "Mobile Application Development",
    nonHighlightedText: "Behind Your App",
    highlightedText: "Download",
    subtitle: "Native and cross-platform apps that engage users on the go.",
    ctaText: "Deploy",
    whatIs: {
      title: "What is Mobile Development",
      highlightedWord: "Mobile",
      description: `A mobile app isn’t just a product, it’s an experience people carry with them every day. At Echo & Impact, we build mobile applications that feel smooth, intuitive, and reliable, with the architecture to scale as your user base grows.\n\nFrom concept to UI to development, every step is handled with clarity and technical precision. We ensure the app not only looks clean and modern but performs consistently across devices, screen sizes, and real-world user behavior.\n\nWhether you're launching your first MVP, building a full mobile product, or transforming an existing app, we focus on one thing, creating a stable, high-performing experience users trust.`,
      imageSrc: `${BASE_PATH}/mobille application hero.png`,
      imageAlt: "Mobile app development",
    },
    features: [
      { title: "iOS & Android Application Development", description: "Your app is developed natively or through cross-platform frameworks, depending on your product needs. We focus on performance, smooth navigation, stability, and compatibility across device types and OS versions.", imageSrc: `${BASE_PATH}/ios and andriod app dev.png`, alternateImageSrc: `${BASE_PATH}/responsive and mobile.png` },
      { title: "App UI Integration & Interaction Flows", description: "Design isn’t just applied, it’s engineered into a seamless system. Screens, gestures, transitions, and interaction patterns are implemented with precision to ensure the experience feels fluid and intuitive.", imageSrc: `${BASE_PATH}/app ui integration and interaction flows.png`, alternateImageSrc: `${BASE_PATH}/ui design.png` },
      { title: "API Connectivity & Backend Structure", description: "Your app connects securely and reliably to backend systems, dashboards, or third-party services. We build and integrate APIs to meet the product needs, ensuring consistent data flow, user authentication, notifications, and real-time updates.", imageSrc: `${BASE_PATH}/api conectivity.png`, alternateImageSrc: `${BASE_PATH}/api dev and intergrate.png` },
      { title: "Performance Optimization & Device Testing", description: "We test across device sizes, network speeds, resolutions, and OS versions to ensure consistent performance. Optimizations cover load time, responsiveness, resource usage, and smooth animation behavior.", imageSrc: `${BASE_PATH}/performance optimization and device.png`, alternateImageSrc: `${BASE_PATH}/speed optimization.png` },
      { title: "App Deployment & Store Submission", description: "We handle the preparation and submission process for both the App Store and Google Play. This includes app configuration, metadata, store visuals, compliance alignment, and all technical requirements so your app is ready for a successful review and release.", imageSrc: `${BASE_PATH}/app deployment and store.png`, alternateImageSrc: `${BASE_PATH}/ios and andriod app dev.png` },
    ],
    contactCta: {
      title: "Ready to build your mobile app?",
      description: "From MVPs to full-scale mobile products, we develop apps built on structure, clarity, and long-term reliability.\n\nShare your goals, and we’ll guide you toward the next steps.",
      buttonText: "Deploy ",
    },
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
      description: `Your website can look great but if it loads slowly or fails to convert, your growth hits a ceiling. CRO and speed optimization ensure your digital experience is fast, intuitive, and designed to turn visitors into customers.\n\nAt Echo & Impact, we optimize the full journey: performance, funnels, user behavior, and on-page clarity. Every improvement is backed by data, not guesswork.\n\nWhether your goal is more sign-ups, more sales, or deeper engagement, we refine the experience so every click works in your favor.`,
      imageSrc: `${BASE_PATH}/Cro and Speed hero.png`,
      imageAlt: "CRO optimization dashboard",
    },
    features: [
      { title: "Speed Optimization (Core Web Vitals)", description: "We analyze your site’s performance, identify bottlenecks, and optimize load times across all devices. This includes asset compression, code cleanup, server improvements, caching strategy, and best-practice implementation to ensure your experience feels fast, smooth, and effortless.", imageSrc: `${BASE_PATH}/speed optimization.png`, alternateImageSrc: `${BASE_PATH}/high performance front.png` },
      { title: "Conversion Audits", description: "Heatmaps, behavior recordings, funnel analysis, user flows, bounce patterns all evaluated to understand where users hesitate or disconnect. These insights reveal opportunities to increase conversions through clarity, structure, and simplified decision-making.", imageSrc: `${BASE_PATH}/conversion audits.png`, alternateImageSrc: `${BASE_PATH}/research insight.png` },
      { title: "Landing Page Optimization", description: "We refine layouts, messaging hierarchy, call-to-action placement, and visual flow to guide users toward the intended action. The goal is simple: less friction, more conversion, and an experience aligned with how users actually behave.", imageSrc: `${BASE_PATH}/landing page optimization.png`, alternateImageSrc: `${BASE_PATH}/landing page and offer.png` },
      { title: "Funnel Improvements", description: "Your funnel is assessed end-to-end from first impression to final action. We strengthen each stage by removing drop-off points, improving continuity, tightening messaging, and ensuring your offer is presented with clarity and confidence.", imageSrc: `${BASE_PATH}/funnel improvement.png`, alternateImageSrc: `${BASE_PATH}/user flows.png` },
      { title: "A/B Testing Framework", description: "We design tests that validate real user preferences. From headlines and CTA placement to layout variations and imagery, each test helps us understand what works, what doesn’t, and what drives more conversions.", imageSrc: `${BASE_PATH}/ab testing framework.png`, alternateImageSrc: `${BASE_PATH}/ab testing and variant.png` },
      { title: "Analytics & Reporting", description: "Performance is measured consistently through dashboards, tracking tools, and structured reporting. You receive clear insights, actionable recommendations, and a roadmap of what to improve next always driven by real data.", imageSrc: `${BASE_PATH}/Analytics Hero.png`, alternateImageSrc: `${BASE_PATH}/dashboard and reporting.png` },
    ],
    contactCta: {
      title: "Ready to optimize your performance?",
      description: "If your website needs to load faster, convert better, or scale with clarity, we’re here to refine every step of the journey.\nShare your goals — we’ll outline what to improve first.",
      buttonText: "Make it perform ",
    },
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
      description: `Paid media is where strategy, creative, and data converge to drive measurable growth. At Echo & Impact, we don’t run ads for visibility, we engineer campaigns that perform with purpose.\n\nFrom Meta to Google, TikTok to YouTube, our approach blends precise targeting, compelling creative, and full-funnel strategy to reach the right audience at the right moment.\n\nEvery decision is intentional: how your brand speaks, what offer is shown, which segment is prioritized, how the creative looks, and how the data feeds the next step.\n\nWhether you’re launching a new product, scaling an existing one, or expanding into new markets, our focus remains the same, paid media that delivers clarity, efficiency, and predictable performance.`,
      imageSrc: `${BASE_PATH}/Paid Media Hero.png`,
      imageAlt: "Paid media campaign dashboard",
    },
    features: [
      { title: "Audience Strategy", description: "Campaigns begin with a deep understanding of who you’re speaking to and why. We build audience frameworks across interests, behavior, lookalikes, custom segments, and intent-based signals, ensuring your spend goes toward people who convert, not just people who scroll.", imageSrc: `${BASE_PATH}/audience strategy.png`, alternateImageSrc: `${BASE_PATH}/segmentation and personalization.png` },
      { title: "Creative Direction & Ad Development", description: "Every platform has its own language. We shape ad concepts, visuals, messaging, and variations that are built for performance, not aesthetics alone. This includes static, motion, UGC-style, and value-driven formats crafted to capture attention in the first seconds and drive action.", imageSrc: `${BASE_PATH}/creative direction and Ad dev.png`, alternateImageSrc: `${BASE_PATH}/campaign graphics.png` },
      { title: "Full-Funnel Campaign Structure", description: "We design the complete funnel across awareness, consideration, and conversion. Each stage has its own targeting logic, creative approach, and optimization structure, ensuring users move seamlessly from discovery to decision.", imageSrc: `${BASE_PATH}/full funnel campaign.png`, alternateImageSrc: `${BASE_PATH}/funnel improvement.png` },
      { title: "Cross-Platform Execution", description: "Your campaigns are managed across Meta, Google, TikTok, and YouTube with strategies tailored to each channel’s strengths. Messaging, creative, and targeting are adapted intentionally rather than duplicated, allowing each platform to work together as a unified ecosystem.", imageSrc: `${BASE_PATH}/cross platform integration.png`, alternateImageSrc: `${BASE_PATH}/platform management and publishing.png` },
      { title: "Landing Page & Offer Alignment", description: "Paid media performs only as well as the offer and destination. We refine messaging, layout, and UX recommendations to ensure the landing experience matches ad intent, reducing friction and increasing conversions across the funnel.", imageSrc: `${BASE_PATH}/landing page funnel.png`, alternateImageSrc: `${BASE_PATH}/landing page optimization.png` },
      { title: "Data, Tracking & Optimization", description: "We implement structured tracking, monitor key signals, and optimize campaigns daily. Every decision is data-driven: improving segmentation, refining creative, testing new hypotheses, and allocating budget where results are strongest.", imageSrc: `${BASE_PATH}/data tracking optimization.png`, alternateImageSrc: `${BASE_PATH}/creative direction and Ad dev.png` },
      { title: "Reporting & Insights", description: "You receive clear, actionable reporting with insights that actually matter: what worked, what didn’t, why it happened, and what we’re doing next. No vanity metrics, no clutter, only the information needed to make confident decisions.", imageSrc: `${BASE_PATH}/dashboard and reporting.png`, alternateImageSrc: `${BASE_PATH}/dashboard and reporting.png` },
    ],
    contactCta: {
      title: "Ready to grow where it matters?",
      description: "If you're looking for paid media that delivers clarity, efficiency, and real performance, we’re here to build it with intention.\nShare your goals, and we'll outline the smartest path forward.",
      buttonText: "Let’s Scale ",
    },
  },
  {
    slug: "social-media-management",
    category: "market",
    title: "Social Media Management",
    nonHighlightedText: "That Builds Your",
    highlightedText: "Presence",
    subtitle: "Build engaged communities that amplify your brand.",
    ctaText: "Let's Socialize",
    whatIs: {
      title: "What is Social Management",
      highlightedWord: "Social",
      description: `Social media is where your brand is felt, interpreted, and remembered. At Echo & Impact, we manage social presence with intention, combining brand voice, content strategy, design direction, creative direction and community behavior to create platforms that actually support business growth.\n\nOur approach aligns storytelling, visuals, content planning, engagement systems, and performance tracking into a unified ecosystem that helps your brand stay consistent, relevant, and trusted.\n\nWhether you need a full content overhaul, long term management, or a system built from scratch, our goal remains the same, social media that deepens connection, drives engagement, and moves audiences toward action.`,
      imageSrc: `${BASE_PATH}/Social media manage hero.png`,
      imageAlt: "Social media management",
    },
    features: [
      { title: "Strategic Content Planning", description: "A structured monthly content roadmap is developed around your goals, audience behavior, and brand voice. This ensures every post, reel, story, and asset has purpose, not just presence, and contributes to your broader marketing objectives.", imageSrc: `${BASE_PATH}/strategic content planning.png`, alternateImageSrc: `${BASE_PATH}/content architecture and strategy.png` },
      { title: "Creative Content Production", description: "Your brand is translated into engaging visuals and narratives through static posts, motion graphics, reels, stories, carousels, and branded content. Each piece is shaped to feel consistent, distinctive, and aligned with your identity.", imageSrc: `${BASE_PATH}/creative content production.png`, alternateImageSrc: `${BASE_PATH}/Content shoots.png` },
      { title: "Platform Management and Publishing", description: "Scheduling, posting, and cross platform execution are managed with precision across Instagram, Facebook, LinkedIn, TikTok, and more. Timing, copy, and formatting are optimized for each platform’s behavior.", imageSrc: `${BASE_PATH}/platform management and publishing.png`, alternateImageSrc: `${BASE_PATH}/cross platform integration.png` },
      { title: "Community Interaction and Growth", description: "Engagement is nurtured through comments, messages, and audience interaction, building trust and strengthening your brand’s presence over time.", imageSrc: `${BASE_PATH}/community interaction and growth.png`, alternateImageSrc: `${BASE_PATH}/segmentation and personalization.png` },
      { title: "Performance Monitoring and Insights", description: "Weekly and monthly insights reveal trends in engagement, reach, retention, and audience behavior. These findings guide future content planning and creative decisions.", imageSrc: `${BASE_PATH}/performance monitoring and insights.png`, alternateImageSrc: `${BASE_PATH}/Analytics Hero.png` },
      { title: "Content Frameworks and Branding Consistency", description: "Your tone, styling, and creative direction are carried consistently across all posts. Frameworks allow your brand identity to stay cohesive even as trends shift.", imageSrc: `${BASE_PATH}/content frameworks and branding.png`, alternateImageSrc: `${BASE_PATH}/dashboard and reporting.png` },
    ],
    contactCta: {
      title: "Ready to build a presence?",
      description: "If your brand needs a clearer voice, stronger visuals, or more consistent execution, we can build the system that supports it.\n\nShare your goals, and we'll outline the strongest path forward.",
      buttonText: "Lets Socialize",
    },
  },
  {
    slug: "seo-content-strategy",
    category: "market",
    title: "SEO & Content Strategy",
    nonHighlightedText: "That Puts You",
    highlightedText: "On The Map",
    subtitle: "Rank higher and attract organic traffic that converts.",
    ctaText: "Search Us",
    whatIs: {
      title: "What is SEO & Content",
      highlightedWord: "SEO",
      description: `SEO and content are the long-term engines of discoverability. At Echo & Impact, we build search ecosystems that help your brand get found, stay relevant, and grow sustainably, without relying solely on paid channels.\n\nOur approach blends technical SEO, content architecture, user intent research, and on-page refinement to create a search presence rooted in clarity and credibility.\n\nWhether you’re improving existing rankings, launching a new site, or creating content that supports your funnel, our focus stays the same, visibility that compounds, authority that strengthens, and content that guides users directly to action.`,
      imageSrc: `${BASE_PATH}/SEO hero.png`,
      imageAlt: "SEO analytics dashboard",
    },
    features: [
      { title: "Technical SEO", description: "Your website’s structure, speed, crawlability, and indexing are optimized to ensure search engines can understand and rank your content effectively. This includes audits, Core Web Vitals improvements, structured data, and technical fixes that strengthen your overall foundation.", imageSrc: `${BASE_PATH}/technical seo.png`, alternateImageSrc: `${BASE_PATH}/high performance front.png` },
      { title: "Keyword & Intent Research", description: "We identify the terms, themes, and search patterns that matter to your audience. Every recommendation is grounded in intent. What users mean, what they seek, and how your solution fits their needs, creating a roadmap for sustainable growth.", imageSrc: `${BASE_PATH}/keyword and intent.png`, alternateImageSrc: `${BASE_PATH}/research insight.png` },
      { title: "On-Page Optimization", description: "Pages are refined for clarity, structure, and relevance. We optimize titles, meta descriptions, headers, copy, internal linking, media usage, and content hierarchy to improve rankings and user navigation while maintaining your brand’s tone and direction.", imageSrc: `${BASE_PATH}/on page optimize.png`, alternateImageSrc: `${BASE_PATH}/landing page optimization.png` },
      { title: "Content Architecture & Strategy", description: "Your website and content ecosystem are structured around pillars, clusters, and pathways that support both SEO and user experience. This ensures your content isn’t scattered, it's interconnected, purposeful, and built to build authority over time.", imageSrc: `${BASE_PATH}/content architecture and strategy.png`, alternateImageSrc: `${BASE_PATH}/strategic content planning.png` },
      { title: "Blog & Resource Development", description: "High-quality articles, guides, and resources are developed to establish expertise. Topics are data-driven, optimized for ranking, and shaped to deliver value while helping users progress through your funnel.", imageSrc: `${BASE_PATH}/blog and resourece dev.png`, alternateImageSrc: `${BASE_PATH}/content architecture and strategy.png` },
      { title: "Local & Global SEO Setup", description: "Depending on your business model, we configure Google My Business Profiles, local signals, geographic landing pages, or international SEO structures, ensuring you’re discoverable in the regions where you operate and serve clients.", imageSrc: `${BASE_PATH}/landing page optimization.png`, alternateImageSrc: `${BASE_PATH}/audience strategy.png` },
      { title: "Performance Monitoring & Refinement", description: "Rankings, traffic, engagement, and competitive shifts are continuously assessed. We refine content, fix gaps, build new opportunities, and adjust strategy to maintain momentum and respond to market changes.", imageSrc: `${BASE_PATH}/performance monitoring.png`, alternateImageSrc: `${BASE_PATH}/Analytics Hero.png` },
    ],
    contactCta: {
      title: "Ready to grow with long-term momentum?",
      description: "If your brand needs clarity, structure, and a search presence built to last, we’re here to help you create it.\n\nShare your goals, and we’ll outline the strongest path forward.",
      buttonText: "Search Us",
    },
  },
  {
    slug: "email-sms-marketing",
    category: "market",
    title: "Email & SMS Marketing",
    nonHighlightedText: "That Drives Your",
    highlightedText: "Messaging",
    subtitle: "Direct communication that nurtures leads and drives sales.",
    ctaText: "Send It",
    whatIs: {
      title: "What is Email & SMS Marketing",
      highlightedWord: "Email & SMS",
      description: `Email and SMS are the channels your brand truly owns. At Echo & Impact, we build messaging ecosystems that nurture, convert, and retain your audience through personalized communication built on strategy and behavior.\n\nOur approach combines audience segmentation, lifecycle flows, content strategy, design, automation, and performance tracking to create direct channels that grow revenue and deepen customer relationships.\n\nWhether you need a full lifecycle build, ongoing campaigns, or a complete overhaul of your messaging systems, our focus remains the same, communication that feels intentional, valuable, and aligned with how your users actually behave.`,
      imageSrc: `${BASE_PATH}/Email and sms hero.png`,
      imageAlt: "Email marketing dashboard",
    },
    features: [
      { title: "Lifecycle Flows and Automation", description: "Structured flows are built around user behavior, including welcome sequences, abandoned cart flows, post purchase journeys, re engagement, and retention systems. Each flow guides users toward the next meaningful action. Both, simple and complex flows can be designed and built to achieve your goals.", imageSrc: `${BASE_PATH}/lifecycle flows and automation.png`, alternateImageSrc: `${BASE_PATH}/user flows.png` },
      { title: "Campaign Strategy and Execution", description: "Monthly campaigns are planned and produced around launches, content themes, offers, and brand storytelling. Copy, design, segmentation, and timing are aligned for maximum engagement and conversion.", imageSrc: `${BASE_PATH}/campaign strat and execute.png`, alternateImageSrc: `${BASE_PATH}/campaign concept.png` },
      { title: "Segmentation and Personalization", description: "Audiences are organized based on behavior, purchase history, interests, and lifecycle stage. Messaging becomes more relevant, more targeted, and more effective over time.", imageSrc: `${BASE_PATH}/segmentation and personalization.png`, alternateImageSrc: `${BASE_PATH}/audience strategy.png` },
      { title: "SMS Strategy and Short Form Messaging", description: "Short, high intent messaging is crafted for urgency, offers, updates, and time sensitive communication. SMS is positioned to complement email, not compete with it.", imageSrc: `${BASE_PATH}/sms strat and short form.png`, alternateImageSrc: `${BASE_PATH}/social media graphics.png` },
      { title: "Design and Content Production", description: "Emails are designed with brand aligned visuals and clear information hierarchy. Messaging is shaped to feel human, structured, and consistent across all communication.", imageSrc: `${BASE_PATH}/design and content produciton.png`, alternateImageSrc: `${BASE_PATH}/ui design.png` },
      { title: "Performance Tracking and Optimization", description: "Metrics such as open rates, click throughs, conversions, deliverability, and list health are analyzed regularly. We refine strategy, improve segmentation, and optimize campaigns based on data.", imageSrc: `${BASE_PATH}/performance tracking optimization.png`, alternateImageSrc: `${BASE_PATH}/dashboard and reporting.png` },
    ],
    contactCta: {
      title: "Ready to build communication that actually converts?",
      description: "If your brand needs stronger engagement, smarter automation, or clearer messaging, we can help you build a system that works long term.\n\nShare your goals, and we’ll outline the strongest path forward.",
      buttonText: "Send It ",
    },
  },
  {
    slug: "analytics-tracking",
    category: "market",
    title: "Analytics & Tracking",
    nonHighlightedText: "That Sharpens Your",
    highlightedText: "Visibility",
    subtitle: "Data-driven insights that inform smarter decisions.",
    ctaText: "Help Me Improve",
    whatIs: {
      title: "What is Analytics & Tracking",
      highlightedWord: "Analytics",
      description: `Analytics is the foundation of every smart decision. At Echo & Impact, we build tracking systems that show you what is working, what is not, and where your next opportunities truly are. No guesswork, no assumptions, just clarity backed by data.\n\nOur approach blends platform analytics, custom dashboards, event tracking, attribution, and performance monitoring to create a complete understanding of user behavior across your website, campaigns, and product experience.\n\nWhether you need a clean tracking setup, deeper visibility, improved attribution, or ongoing reporting, our focus remains the same, giving you the insight needed to optimize, scale, and spend wisely.`,
      imageSrc: `${BASE_PATH}/Analytics Hero.png`,
      imageAlt: "Analytics tracking setup",
    },
    features: [
      { title: "Analytics Setup and Configuration", description: "Google Analytics, GA4, pixel installation, tracking scripts, and platform integrations are configured to capture accurate and meaningful data. This ensures you always see the real picture, not incomplete or misleading signals.", imageSrc: `${BASE_PATH}/analytics setup and configure.png`, alternateImageSrc: `${BASE_PATH}/performance monitoring.png` },
      { title: "Event Tracking and User Behavior Mapping", description: "Key interactions such as clicks, form submissions, scroll depth, purchases, sign ups, and in app behavior are tracked to understand how users move through your funnel and where improvements can be made.", imageSrc: `${BASE_PATH}/event tracting and user behaviour.png`, alternateImageSrc: `${BASE_PATH}/user flows.png` },
      { title: "Attribution and Conversion Tracking", description: "We implement proper attribution models so you can identify which channels, campaigns, and touchpoints drive actual results. This removes the guesswork from budget allocation and growth decisions.", imageSrc: `${BASE_PATH}/attribution and conversion.png`, alternateImageSrc: `${BASE_PATH}/conversion audits.png` },
      { title: "Dashboards and Reporting", description: "Dashboards are optimized around your KPIs, giving you a clear, simple view of performance without needing to dig through multiple platforms. Reports highlight trends, opportunities, and key actions to take next.", imageSrc: `${BASE_PATH}/dashboard and reporting.png`, alternateImageSrc: `${BASE_PATH}/Custom dashboards.png` },
      { title: "Funnel and Performance Audits", description: "Your website, landing pages, and campaigns are analyzed to identify drop offs, friction points, and hidden opportunities. This allows for smarter optimization across your entire user journey.", imageSrc: `${BASE_PATH}/funnel and performance audit.png`, alternateImageSrc: `${BASE_PATH}/funnel improvement.png` },
      { title: "Privacy and Compliance Setup", description: "Tracking is implemented with proper consent, cookie settings, and compliance guidelines, ensuring your data collection respects user privacy standards and platform policies.", imageSrc: `${BASE_PATH}/privacy and compliance.png`, alternateImageSrc: `${BASE_PATH}/technical seo.png` },
    ],
    contactCta: {
      title: "Ready to see your numbers clearly?",
      description: "If your brand needs accurate tracking, smarter insights, or a clearer understanding of performance, we can build the system that supports it.\n\nShare your goals, and we’ll outline the strongest path forward.",
      buttonText: "Help Me Improve ",
    },
  },
  {
    slug: "creative-optimization",
    category: "market",
    title: "Creative Optimization",
    nonHighlightedText: "That Elevates Your",
    highlightedText: "Performance",
    subtitle: "Test and refine creative assets for maximum impact.",
    ctaText: "Make It Convert",
    whatIs: {
      title: "What is Creative Optimization",
      highlightedWord: "Creative",
      description: `Creative optimization is the biggest driver of performance across paid media, content, and digital campaigns. At Echo & Impact, we optimize your creative using data backed insights, audience behavior, platform trends, and brand aligned storytelling to improve results without guesswork.\n\nOur approach combines structured testing, audience analysis, creative strategy, and iterative refinement to produce assets that consistently perform better. Whether you are scaling ads, improving engagement, or refreshing your content system, our goal remains the same, creative that captures attention and turns it into action.`,
      imageSrc: `${BASE_PATH}/Creative optimize hero.png`,
      imageAlt: "Creative testing dashboard",
    },
    features: [
      { title: "Creative Audits and Insights", description: "Existing ads, content, and visual systems are reviewed to identify strengths, weaknesses, patterns, and opportunities. We analyze messaging, hooks, formats, pacing, brand alignment, and platform performance to understand what needs to evolve.", imageSrc: `${BASE_PATH}/creative audio and insigh.png`, alternateImageSrc: `${BASE_PATH}/conversion audits.png` },
      { title: "A/B Testing and Variant Development", description: "Multiple creative variations are produced and tested across platforms to identify what resonates. Thumbnails, hooks, scripts, visuals, layouts, and formats are refined using real performance data.", imageSrc: `${BASE_PATH}/ab testing and variant.png`, alternateImageSrc: `${BASE_PATH}/ab testing framework.png` },
      { title: "Platform Specific Creative Strategy", description: "Content is optimized for Meta, TikTok, YouTube, Google Display, and other channels. We tailor pacing, aspect ratios, text density, visual weight, and creative style to each platform’s behavior.", imageSrc: `${BASE_PATH}/platform spcific creative.png`, alternateImageSrc: `${BASE_PATH}/cross platform integration.png` },
      { title: "Messaging and Hook Frameworks", description: "We shape narrative structures, value propositions, emotional cues, and attention grabbing hooks that guide how each creative piece communicates. These frameworks improve consistency and allow scalable ideation.", imageSrc: `${BASE_PATH}/mesaaging and hook.png`, alternateImageSrc: `${BASE_PATH}/brand voice.png` },
      { title: "Content Refresh Cycles", description: "We develop ongoing batches of new creatives based on performance insights, seasonal trends, and audience behavior shifts. This prevents fatigue and keeps your campaigns competitive.", imageSrc: `${BASE_PATH}/content refresh.png`, alternateImageSrc: `${BASE_PATH}/strategic content planning.png` },
      { title: "Performance Tracking and Creative Insights", description: "Every creative variation is monitored for CTR, CPC, CVR, watch time, scroll depth, retention, ROAS, and more. Insights guide the next testing cycle, forming a continuous improvement loop.", imageSrc: `${BASE_PATH}/performance tracking creative.png`, alternateImageSrc: `${BASE_PATH}/dashboard and reporting.png` },
    ],
    contactCta: {
      title: "Ready to elevate the performance of your creative",
      description: "If your brand needs sharper content, stronger ads, or a testing system that actually scales, we can build it with intention.\n\nShare your goals, and we’ll outline the strongest path forward.",
      buttonText: "Make It Convert ",
    },
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