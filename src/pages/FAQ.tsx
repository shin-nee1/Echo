import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Working With",
      highlight: "Echo & Impact",
      faqs: [
        {
          question: "How do I get started working with your team?",
          answer: "Getting started is simple! Fill out our contact form with your project details, and we'll schedule a discovery call within 48 hours to discuss your needs and determine if we're a good fit."
        },
        {
          question: "What types of businesses do you work with?",
          answer: "We specialize in working with growth-stage startups, established SMBs, and enterprise companies looking to improve their digital presence. Our sweet spot is ambitious teams who value quality and collaboration."
        },
        {
          question: "Do you work with clients internationally?",
          answer: "Yes! We work with clients globally and have experience collaborating across time zones. We use async communication tools and flexible scheduling to make remote partnerships seamless."
        },
        {
          question: "What makes your approach different from other agencies?",
          answer: "We combine senior talent, strategic thinking, and hands-on execution in a boutique setting. You won't be handed off to junior staff—the people you meet are the people who do the work."
        },
      ]
    },
    {
      title: "Scope, Pricing, And",
      highlight: "Contracts",
      faqs: [
        {
          question: "How do you price your projects?",
          answer: "We offer both project-based pricing and retainer arrangements depending on your needs. Project pricing is based on scope, complexity, and timeline. We're always transparent about costs upfront."
        },
        {
          question: "What's the typical project budget range?",
          answer: "Our projects typically range from $10,000 to $150,000+, depending on scope. We have solutions for various budgets and can help you prioritize features to match your investment level."
        },
        {
          question: "Do you require long-term contracts?",
          answer: "Not necessarily. While we love building long-term partnerships, we also take on single projects. Our retainer clients enjoy priority scheduling and discounted rates."
        },
        {
          question: "What's included in your proposals?",
          answer: "Our proposals include detailed scope, timeline, deliverables, payment schedule, and terms. You'll know exactly what you're getting and when to expect it."
        },
      ]
    },
    {
      title: "Process &",
      highlight: "Delivery",
      faqs: [
        {
          question: "What does your typical project process look like?",
          answer: "We follow a proven process: Discovery → Strategy → Design → Development → Testing → Launch → Support. Each phase has clear milestones and checkpoints for your feedback."
        },
        {
          question: "How long do projects typically take?",
          answer: "Timeline varies by scope. A brand identity might take 4-6 weeks, while a full website redesign could be 8-12 weeks. We'll provide realistic timelines during our discovery call."
        },
        {
          question: "How do you handle revisions and feedback?",
          answer: "We build revision rounds into every project phase. You'll have ample opportunity to provide feedback, and we use collaborative tools to make the review process smooth and efficient."
        },
        {
          question: "What happens if the project scope changes?",
          answer: "Scope changes happen—we get it. We'll discuss the impact on timeline and budget, provide a change order for approval, and adjust accordingly. No surprises."
        },
      ]
    },
    {
      title: "Ownership,",
      highlight: "Rights & Data",
      faqs: [
        {
          question: "Who owns the final deliverables?",
          answer: "You do! Upon final payment, all deliverables and intellectual property rights transfer to you completely. You'll have full ownership of everything we create."
        },
        {
          question: "Will I receive source files?",
          answer: "Absolutely. We provide all source files, assets, and documentation. You'll never be locked into working with us—though we hope you'll want to continue!"
        },
        {
          question: "How do you handle confidential information?",
          answer: "We take confidentiality seriously. We're happy to sign NDAs and follow strict data handling protocols. Your business information stays secure."
        },
        {
          question: "Can I use the work in my portfolio?",
          answer: "Yes, and we'd love to feature the work in our portfolio too (with your permission). Great work deserves to be showcased!"
        },
      ]
    },
    {
      title: "Remote Work &",
      highlight: "Global Clients",
      faqs: [
        {
          question: "How do you collaborate with remote teams?",
          answer: "We use a combination of Slack, Zoom, Figma, and project management tools to stay connected. Regular check-ins ensure everyone stays aligned regardless of location."
        },
        {
          question: "What time zones do you work in?",
          answer: "Our core team is primarily in US time zones, but we have experience working with clients globally. We're flexible and will find meeting times that work for everyone."
        },
        {
          question: "Do you ever meet in person?",
          answer: "While we work remotely, we're open to in-person meetings for major milestones or kickoffs when it makes sense. Some of our best work has started with face-to-face workshops."
        },
        {
          question: "How do you maintain quality remotely?",
          answer: "Remote work is in our DNA. We have refined processes, clear documentation, and regular touchpoints that ensure quality never suffers regardless of where we're working from."
        },
      ]
    },
    {
      title: "Long-Term",
      highlight: "Support",
      faqs: [
        {
          question: "Do you offer ongoing support after launch?",
          answer: "Yes! We offer maintenance retainers, training sessions, and ongoing optimization services. We're committed to your long-term success, not just the launch."
        },
        {
          question: "What kind of post-launch services do you provide?",
          answer: "We offer hosting management, security updates, performance optimization, content updates, analytics reporting, and strategic consulting to help you grow."
        },
        {
          question: "How quickly can you respond to urgent issues?",
          answer: "Retainer clients receive priority support with guaranteed response times. For critical issues, we offer same-day response and resolution whenever possible."
        },
        {
          question: "Can you train our team on the new systems?",
          answer: "Absolutely. We provide comprehensive training and documentation so your team feels confident managing and updating your new digital assets."
        },
      ]
    },
    {
      title: "Fit &",
      highlight: "Expectations",
      faqs: [
        {
          question: "How do I know if we're a good fit?",
          answer: "We look for clients who value quality, communicate openly, and are ready to collaborate. Our discovery call helps both parties determine if the partnership will thrive."
        },
        {
          question: "What do you expect from clients?",
          answer: "Timely feedback, clear communication, and trust in our expertise. The best results come from true collaboration where both parties are invested in success."
        },
        {
          question: "What if we're not happy with the work?",
          answer: "Your satisfaction is our priority. We have built-in revision rounds and maintain open communication to address concerns early. We'll work together until it's right."
        },
        {
          question: "Can we start with a small project first?",
          answer: "Absolutely! Many of our long-term clients started with a smaller project to test the waters. It's a great way to experience our process and build trust."
        },
      ]
    },
  ];

  const FAQCategory = ({ title, highlight, faqs }: { title: string; highlight: string; faqs: { question: string; answer: string }[] }) => (
    <div className="mb-16">
      <h3 className="section-title text-2xl md:text-3xl font-bold mb-8">
        {title} <span className="text-cyan glow-text">{highlight}</span>
      </h3>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`} 
            className="card-glass border-border/50 px-6 hover-glow"
          >
            <AccordionTrigger className="text-left font-display hover:text-cyan hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[150px] opacity-20" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-cyan">Questions</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, idx) => (
              <FAQCategory key={idx} title={category.title} highlight={category.highlight} faqs={category.faqs} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Still Have <span className="text-cyan">Questions?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Can't find what you're looking for? Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-cyan text-background hover:bg-cyan/90 glow-cyan px-8 h-11 rounded-md font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
};

export default FAQ;
