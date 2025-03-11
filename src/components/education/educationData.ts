
export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description?: string;
  logo?: string;
  grade?: string;
}

export const educations: Education[] = [
  {
    institution: "LUT University",
    degree: "Master's in Business Analytics (Specialization: Big Data & AI)",
    period: "Sept 2024 - Present",
    location: "Finland",
    description: "Pursuing advanced studies in business analytics, focusing on big data techniques and artificial intelligence applications in business contexts.",
    logo: "/lovable-uploads/de402d04-a033-4c0c-88c6-1b1a2ce4cbac.png"
  },
  {
    institution: "JAMK University of Applied Sciences",
    degree: "Bachelor of Business Administration - BBA, International Business",
    period: "Jan 2020 - Apr 2022",
    location: "Finland",
    description: "Focused on international business operations, digital marketing, and cross-cultural management. Completed thesis on blockchain applications in HR recruitment.",
    logo: "/lovable-uploads/bd588702-45b7-4fdd-925b-29987b14b300.png",
    grade: "4.29/5"
  }
];
