export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  highlight: string;
  faqs: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    title: "Working With",
    highlight: "Echo & Impact",
    faqs: [
      {
        question: "How do I get started working with your team?",
        answer:
          "Getting started is simple! Fill out our contact form with your project details, and we'll schedule a discovery call within 48 hours to discuss your needs and determine if we're a good fit.",
      },
      {
        question: "What types of businesses do you work with?",
        answer:
          "We specialize in working with growth-stage startups, established SMBs, and enterprise companies looking to improve their digital presence. Our sweet spot is ambitious teams who value quality and collaboration.",
      },
      {
        question: "Do you work with clients internationally?",
        answer:
          "Yes! We work with clients globally and have experience collaborating across time zones. We use async communication tools and flexible scheduling to make remote partnerships seamless.",
      },
      {
        question: "What makes your approach different from other agencies?",
        answer:
          "We combine senior talent, strategic thinking, and hands-on execution in a boutique setting. You won't be handed off to junior staff—the people you meet are the people who do the work.",
      },
    ],
  },
  {
    title: "Scope, Pricing, And",
    highlight: "Contracts",
    faqs: [
      {
        question: "How do you price your projects?",
        answer:
          "We offer both project-based pricing and retainer arrangements depending on your needs. Project pricing is based on scope, complexity, and timeline. We're always transparent about costs upfront.",
      },
      {
        question: "What's the typical project budget range?",
        answer:
          "Our projects typically range from $10,000 to $150,000+, depending on scope. We have solutions for various budgets and can help you prioritize features to match your investment level.",
      },
      {
        question: "Do you require long-term contracts?",
        answer:
          "Not necessarily. While we love building long-term partnerships, we also take on single projects. Our retainer clients enjoy priority scheduling and discounted rates.",
      },
      {
        question: "What's included in your proposals?",
        answer:
          "Our proposals include detailed scope, timeline, deliverables, payment schedule, and terms. You'll know exactly what you're getting and when to expect it.",
      },
    ],
  },
  {
    title: "Process &",
    highlight: "Delivery",
    faqs: [
      {
        question: "What does your typical project process look like?",
        answer:
          "We follow a proven process: Discovery → Strategy → Design → Development → Testing → Launch → Support. Each phase has clear milestones and checkpoints for your feedback.",
      },
      {
        question: "How long do projects typically take?",
        answer:
          "Timeline varies by scope. A brand identity might take 4–6 weeks, while a full website redesign could be 8–12 weeks. We'll provide realistic timelines during our discovery call.",
      },
      {
        question: "How do you handle revisions and feedback?",
        answer:
          "We build revision rounds into every project phase. You'll have ample opportunity to provide feedback, and we use collaborative tools to make the review process smooth and efficient.",
      },
      {
        question: "What happens if the project scope changes?",
        answer:
          "Scope changes happen—we get it. We'll discuss the impact on timeline and budget, provide a change order for approval, and adjust accordingly. No surprises.",
      },
    ],
  },
  {
    title: "Ownership,",
    highlight: "Rights & Data",
    faqs: [
      {
        question: "Who owns the final deliverables?",
        answer:
          "You do! Upon final payment, all deliverables and intellectual property rights transfer to you completely.",
      },
      {
        question: "Will I receive source files?",
        answer:
          "Absolutely. We provide all source files, assets, and documentation.",
      },
      {
        question: "How do you handle confidential information?",
        answer:
          "We take confidentiality seriously and are happy to sign NDAs.",
      },
      {
        question: "Can I use the work in my portfolio?",
        answer:
          "Yes — great work deserves to be showcased!",
      },
    ],
  },
  {
    title: "Remote Work &",
    highlight: "Global Clients",
    faqs: [
      {
        question: "How do you collaborate with remote teams?",
        answer:
          "We use Slack, Zoom, Figma, and project management tools with regular check-ins.",
      },
      {
        question: "What time zones do you work in?",
        answer:
          "Primarily US time zones, but we're flexible globally.",
      },
      {
        question: "Do you ever meet in person?",
        answer:
          "Yes, for major milestones or workshops when it makes sense.",
      },
      {
        question: "How do you maintain quality remotely?",
        answer:
          "Clear processes, documentation, and regular touchpoints.",
      },
    ],
  },
  {
    title: "Long-Term",
    highlight: "Support",
    faqs: [
      {
        question: "Do you offer ongoing support after launch?",
        answer:
          "Yes! We offer maintenance retainers and optimization services.",
      },
      {
        question: "What kind of post-launch services do you provide?",
        answer:
          "Hosting, security, performance, content updates, and analytics.",
      },
      {
        question: "How quickly can you respond to urgent issues?",
        answer:
          "Retainer clients receive priority same-day responses.",
      },
      {
        question: "Can you train our team on the new systems?",
        answer:
          "Absolutely. We provide training and documentation.",
      },
    ],
  },
  {
    title: "Fit &",
    highlight: "Expectations",
    faqs: [
      {
        question: "How do I know if we're a good fit?",
        answer:
          "Our discovery call helps both sides decide.",
      },
      {
        question: "What do you expect from clients?",
        answer:
          "Timely feedback, clear communication, and trust.",
      },
      {
        question: "What if we're not happy with the work?",
        answer:
          "We collaborate closely and revise until it's right.",
      },
      {
        question: "Can we start with a small project first?",
        answer:
          "Yes — many long-term clients start small.",
      },
    ],
  },
];
