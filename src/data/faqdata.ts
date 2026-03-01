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
        question: "How does a project typically start?",
        answer:
          "Every engagement begins with a discovery and alignment phase. We clarify your goals, audience, constraints, scope, timelines, and success criteria before any execution begins. This ensures both sides have full clarity and prevents misalignment later.",
      },
      {
        question: "Is the first call a sales call?",
        answer:
          "No. The first conversation is consultative. The purpose is to understand what you’re trying to build, whether we’re a good fit, and what approach makes sense before any commercial discussion.",
      },
      {
        question: "Do I need a detailed brief before contacting you?",
        answer:
          "No. You can come with an idea, a rough direction, or even uncertainty. Our role is to help you structure and clarify your requirements.",
      },
      {
        question: "Who will be working on my project?",
        answer:
          "Your project is handled by senior-level designers, engineers, and strategists. We do not hand projects off to juniors or outsource core work.",
      },
      {
        question: "Do you sign NDAs?",
        answer:
          "Yes. We operate under NDA by default and treat all information, assets, and discussions as confidential.",
      },
    ],
  },
  {
    title: "Scope, Pricing, And",
    highlight: "Contracts",
    faqs: [
      {
        question: "How do you define scope?",
        answer:
          "Scope is defined collaboratively during discovery and documented clearly before work begins. It includes deliverables, timelines, responsibilities, and assumptions so there is no ambiguity.",
      },
      {
        question: "Can scope change after the project starts?",
        answer:
          "If priorities change, scope can be adjusted through a documented change process. Changes are discussed, approved, and priced transparently before execution.",
      },
      {
        question: "How is pricing determined?",
        answer:
          "Pricing is based on scope, complexity, and timeline. We offer both structured packages and custom pricing depending on your needs.",
      },
      {
        question: "Do you offer fixed pricing or hourly billing?",
        answer:
          "We primarily work on fixed-scope, fixed-fee engagements or monthly retainers for ongoing work. This creates predictability and accountability.",
      },
      {
        question: "Do you require upfront payment?",
        answer:
          "We do not require full payment upfront unless a client specifically requests it. Most projects are structured either as milestone-based engagements with partial payments tied to defined phases, or as monthly retainers. This approach keeps cash flow predictable for both sides while ensuring progress, accountability, and transparency throughout the engagement.",
      },
    ],
  },
  {
    title: "Process &",
    highlight: "Delivery",
    faqs: [
      {
        question: "How involved do I need to be as a client?",
        answer:
          "Your involvement is focused on providing inputs, approvals, and feedback at defined checkpoints. We manage execution end-to-end.",
      },
      {
        question: "How do you handle feedback and revisions?",
        answer:
          "We use structured review cycles with clear feedback windows. This keeps the process efficient and avoids endless or fragmented revisions.",
      },
      {
        question: "How do you ensure alignment between design, development, and marketing?",
        answer:
          "All teams operate through one integrated roadmap with shared documentation, guidelines, and a dedicated project manager overseeing alignment.",
      },
      {
        question: "How do you communicate progress?",
        answer:
          "Through structured updates, milestones, shared documentation, and scheduled check-ins. You always know what’s happening and what’s next.",
      },
      {
        question: "What happens if timelines are delayed?",
        answer:
          "We proactively communicate risks and adjust timelines collaboratively if external dependencies or changes arise.",
      },
    ],
  },
  {
    title: "Ownership, Rights &",
    highlight: "Data",
    faqs: [
      {
        question: "Do I own the work once the project is complete?",
        answer:
          "Yes. All approved deliverables are transferred to you along with necessary access, files, and documentation, subject to contractual terms.",
      },
      {
        question: "Do you use third-party tools or licenses?",
        answer:
          "Some tools, platforms, or frameworks may carry their own licenses. We inform you where applicable.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Yes. We follow industry best practices for data handling, access control, and security.",
      },
      {
        question: "Will you use my project in your portfolio?",
        answer:
          "We may showcase work unless confidentiality or exclusivity is contractually required.",
      },
    ],
  },
  {
    title: "Remote Work &",
    highlight: "Global Clients",
    faqs: [
      {
        question: "Do you work with international clients?",
        answer:
          "Yes. We work with clients globally and across time zones.",
      },
      {
        question: "How do you manage time zone differences?",
        answer:
          "Through structured communication, documentation, and overlap windows for meetings when needed.",
      },
      {
        question: "Can everything be done remotely?",
        answer:
          "Yes. All services can be delivered remotely without compromising quality or process.",
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
          "Yes. We offer maintenance, optimization, and growth retainers depending on your needs.",
      },
      {
        question: "Can you take over work built by another agency?",
        answer:
          "Yes, after a technical and strategic audit to assess feasibility and risks.",
      },
      {
        question: "Can you scale with us as we grow?",
        answer:
          "Yes. Our systems, architecture, and processes are designed for long-term scalability.",
      },
    ],
  },
  {
    title: "Fit &",
    highlight: "Expectations",
    faqs: [
      {
        question: "Who is Echo & Impact not a good fit for?",
        answer:
          "We may not be the right fit if you’re looking for the cheapest provider, quick shortcuts, or purely tactical execution without strategy or structure.",
      },
      {
        question: "What type of clients do you work best with?",
        answer:
          "We work best with clients who value clarity, quality, transparency, and long-term thinking and who see their digital presence as a strategic asset.",
      },
    ],
  },
];