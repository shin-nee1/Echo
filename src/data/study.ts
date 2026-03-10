export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

export interface ProblemSolution {
  problem: string;
  solution: string;
}

export interface CaseStudy {
  id: string; 
  title: string;
  heroDescription: string[];
  workflow: {
    overview: string;
    steps: WorkflowStep[];
  };
  discovery: string[];
  problemsAndSolutions: ProblemSolution[];
  techStack: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "clearmind",
    title: "Clear Minds",
    heroDescription: [
      "Clear Minds is a mobile wellness application designed to help users improve mental clarity, reduce stress, and build healthier habits through guided hypnotherapy sessions, meditation programs, and structured self-improvement content.",
      "The application provides users with a curated library of audio sessions designed to address common mental wellness goals such as better sleep, anxiety management, confidence building, and habit transformation. Through a clean and calming interface, users can discover sessions, track their progress, and build a consistent personal improvement routine."
    ],
    workflow: {
      overview: "Our development approach followed a structured product lifecycle that ensured the app was designed with both usability and scalability in mind.",
      steps: [
        {
          number: "01",
          title: "Planning & Research",
          description: "The first phase focused on understanding the vision of the application, the audience it aimed to serve, and the goals of the platform. We conducted requirement analysis, competitor research, and identified the core features necessary for a mental wellness app."
        },
        {
          number: "02",
          title: "UX Foundation",
          description: "Wireframes and user flow diagrams were created to establish a simple navigation structure. The goal was to reduce friction for users seeking quick access to hypnotherapy sessions and wellness programs."
        },
        {
          number: "03",
          title: "Development",
          description: "Using an agile methodology, the development team implemented core features including user authentication, content streaming, progress tracking, and session categorization."
        },
        {
          number: "04",
          title: "Testing & Evaluation",
          description: "The application was tested across devices and operating systems to ensure smooth performance, stable session playback, and reliable user data synchronization."
        },
        {
          number: "05",
          title: "Deployment",
          description: "The final application was optimized for performance and prepared for release across mobile platforms with monitoring tools in place to track usage and engagement."
        }
      ]
    },
    discovery: [
      "The discovery phase focused on defining how a digital product could replicate the calm and structured environment typically experienced in guided therapy sessions. Several important insights shaped the direction of the project:",
      "• Users looking for mental wellness apps prioritize simplicity, trust, and accessibility.",
      "• Content needs to be organized around goals rather than categories alone.",
      "• Users benefit from clear progress indicators and routine-building tools that encourage consistency.",
      "Based on these insights, the application experience was designed around three core pillars: Effortless content discovery, Guided personal progress, and Calm, distraction-free design. The interface uses clear hierarchy, minimal visual noise, and intuitive navigation to help users quickly find sessions relevant to their needs."
    ],
    problemsAndSolutions: [
      {
        problem: "Users struggled to discover the most relevant sessions quickly within large wellness content libraries.",
        solution: "A categorized session structure with featured recommendations was implemented. Users can now easily browse sessions based on goals such as sleep improvement, stress relief, confidence, and productivity."
      },
      {
        problem: "Lack of visibility into personal progress reduced long-term engagement.",
        solution: "Progress indicators and session tracking tools were introduced, allowing users to monitor their activity and build consistent wellness routines."
      },
      {
        problem: "Many wellness apps overwhelm users with complex navigation and cluttered interfaces.",
        solution: "The UI was redesigned to focus on calm visuals, minimal navigation layers, and intuitive user flows, ensuring that users can start a session in just a few taps."
      }
    ],
    techStack: "The Clear Minds application was built using a modern and scalable technology stack designed for performance and long-term maintainability."
  },
  {
    id: "bware",
    title: "BWARE",
    heroDescription: [
      "BWARE is a mobile-first workplace safety and compliance platform designed to help businesses manage health and safety processes more efficiently. The application enables field teams to access safety plans, complete digital forms, report incidents, and track compliance activities directly from their mobile devices.",
      "The goal of the platform is to replace traditional paper-based safety management systems with a streamlined digital workflow. By combining structured safety frameworks with an intuitive mobile interface, BWARE helps organizations maintain compliance while improving efficiency across job sites. The mobile app acts as a companion to the broader BWARE platform, ensuring workers and managers can complete critical safety tasks anytime, anywhere."
    ],
    workflow: {
      overview: "The application workflow was designed to simplify safety management processes while ensuring fast adoption by field teams.",
      steps: [
        {
          number: "01",
          title: "Secure Access",
          description: "Users log in to a personalized dashboard where they can quickly view assigned tasks, pending forms, and workplace updates."
        },
        {
          number: "02",
          title: "Task & Form Management",
          description: "Workers can complete digital safety forms, checklists, and assessments directly within the app, replacing traditional paperwork."
        },
        {
          number: "03",
          title: "Incident & Risk Reporting",
          description: "The app allows users to instantly report incidents, hazards, or near-misses with supporting images and details."
        },
        {
          number: "04",
          title: "Real-Time Synchronization",
          description: "All data is automatically synced with the central system, giving managers real-time visibility into safety activities across job sites."
        }
      ]
    },
    discovery: [
      "During the discovery phase, the focus was on understanding how businesses currently manage workplace safety and where inefficiencies occur.",
      "Many organizations still rely on paper-based forms and scattered documentation, which often leads to delays, lost information, and limited oversight.",
      "The solution was to design a mobile application that digitizes safety workflows while remaining simple enough for field workers to use daily. The platform needed to provide quick access to safety documents, structured reporting tools, and centralized oversight for managers. These insights guided the overall product design and functionality of the BWARE mobile experience."
    ],
    problemsAndSolutions: [
      {
        problem: "Manual Safety Documentation: Traditional safety management often depends on paperwork, making it difficult to track and organize records.",
        solution: "Digital forms and checklists streamline documentation while keeping records centralized and searchable."
      },
      {
        problem: "Limited Visibility for Managers: Supervisors often lack real-time insight into safety activities happening across multiple sites.",
        solution: "The platform provides real-time reporting and dashboards that help managers monitor tasks, reports, and compliance."
      },
      {
        problem: "Delayed Incident Reporting: Manual reporting processes can slow down response times when incidents occur.",
        solution: "The mobile app enables instant reporting with the ability to attach photos, comments, and corrective actions."
      }
    ],
    techStack: "The application was built using a scalable and secure technology stack to support both performance and long-term growth."
  },
  {
    id: "rateo",
    title: "Rateo",
    heroDescription: [
      "Rateo is a mobile application designed to help businesses collect, manage, and leverage customer reviews to strengthen their online reputation. The platform simplifies the feedback process by enabling businesses to request reviews through automated communication channels such as SMS and email.",
      "The app allows businesses to store customer contact information, send review requests at the right time, and guide satisfied customers toward leaving public reviews. With a simple and intuitive interface, Rateo helps businesses turn everyday customer interactions into valuable reputation-building opportunities."
    ],
    workflow: {
      overview: "Rateo's core workflow is built around automating the feedback loop, making it effortless for both the business and the consumer.",
      steps: [
        {
          number: "01",
          title: "Customer Contact Collection",
          description: "Businesses can securely store customer contact details within the app, creating a structured database for follow-ups and feedback requests."
        },
        {
          number: "02",
          title: "Automated Review Requests",
          description: "Rateo sends automated SMS or email messages asking customers to share their feedback after a service or purchase."
        },
        {
          number: "03",
          title: "Feedback & Review Collection",
          description: "Customers can quickly submit their experience through a simple mobile-friendly interface designed to reduce friction and improve response rates."
        },
        {
          number: "04",
          title: "Reputation Growth",
          description: "Satisfied customers are encouraged to leave public reviews on major platforms, helping businesses strengthen their online credibility and visibility."
        }
      ]
    },
    discovery: [
      "During the discovery phase, we focused on understanding how businesses currently collect reviews and why many struggle to receive consistent feedback.",
      "The research revealed that most businesses rely on manual requests, which often leads to low participation and missed opportunities for valuable reviews. To address this, Rateo was designed as a streamlined system that automates the feedback process while keeping the experience simple for both businesses and customers.",
      "The goal was to build a solution that increases review participation while giving businesses better control over their reputation management."
    ],
    problemsAndSolutions: [
      {
        problem: "Low Review Participation: Customers often forget to leave reviews after a positive experience.",
        solution: "Automated SMS and email reminders encourage customers to provide feedback at the right time."
      },
      {
        problem: "Scattered Feedback Channels: Businesses receive feedback across multiple platforms, making it difficult to manage.",
        solution: "Rateo centralizes feedback collection and organizes it in one platform."
      },
      {
        problem: "Missed Reputation Opportunities: Satisfied customers frequently provide private feedback instead of public reviews.",
        solution: "The app guides happy customers toward leaving public reviews on major platforms."
      }
    ],
    techStack: "The Rateo mobile application was built using a modern and scalable technology stack to ensure reliability and performance."
  }
];