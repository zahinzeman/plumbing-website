export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaqs: FaqItem[] = [
  {
    q: "What are the benefits of water filtration?",
    a: "Water filtration removes chlorine, heavy metals, and odors, protecting your skin, drinking water, and household appliances from mineral buildup.",
  },
  {
    q: "How quickly can you arrive?",
    a: "For urgent plumbing emergencies, we prioritize same-day dispatch and can typically arrive at your home or business within 60 to 90 minutes.",
  },
  {
    q: "Do you provide estimates first?",
    a: "Yes. Our technicians perform a thorough on-site diagnosis and provide a clear, upfront written quote before beginning any repair or installation.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, cash, bank checks, and offer flexible financing plans for major repiping or remodeling projects.",
  },
  {
    q: "Are your plumbers licensed and insured?",
    a: "Yes, 100% of our team members are fully licensed, background-checked, bonded, and insured to meet and exceed all municipal plumbing codes.",
  },
  {
    q: "Do you offer 24/7 emergency service?",
    a: "Yes, our emergency response team operates 24 hours a day, 7 days a week, 365 days a year for burst pipes, sewage backups, and catastrophic leaks.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the entire metropolitan region and surrounding suburban counties. Give us a call to confirm immediate availability in your zip code.",
  },
  {
    q: "Do you guarantee your work?",
    a: "Every job comes with our 100% workmanship and customer satisfaction guarantee, backed by manufacturer warranties on all installed parts.",
  },
];

export const aboutFaqs: FaqItem[] = homeFaqs;
