export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  source?: string;
  stars: number;
  text: string;
  avatar?: string;
}

export const testimonials = {
  row1: [
    {
      id: "t-1",
      author: "Michael Davis",
      source: "Review on Google",
      stars: 5,
      text: "Their crew arrived quickly, explained the leak clearly, and fixed everything the same afternoon. No upselling, no surprises on the bill.",
    },
    {
      id: "t-2",
      author: "Sarah Thompson",
      source: "Review on Yelp",
      stars: 5,
      text: "Booked online after midnight and had a plumber at the door by 9 AM. The water heater swap was smooth and priced exactly as quoted.",
    },
    {
      id: "t-3",
      author: "James Carter",
      source: "Review on Google",
      stars: 5,
      text: "CorePlumb installed our whole-home filtration system in under four hours. Clean work, clear communication, and easy online payment.",
    },
  ],
  row2: [
    {
      id: "t-4",
      author: "Emily Rodriguez",
      source: "Review on Facebook",
      stars: 5,
      text: "A burst pipe flooded our basement at 2 AM. CorePlumb had a team here within the hour and saved us from major damage. Absolute heroes.",
    },
    {
      id: "t-5",
      author: "Robert Kim",
      source: "Review on HomeAdvisor",
      stars: 5,
      text: "Transparent pricing, no guessing games. They walked me through every step of the re-pipe and left the house spotless. Won't call anyone else.",
    },
    {
      id: "t-6",
      author: "Linda Peters",
      source: "Review on Yelp",
      stars: 5,
      text: "Third time using CorePlumb — for a clog, a leak, and now a full bathroom re-pipe. Consistent quality every single time. Highly recommend.",
    },
  ],
};
