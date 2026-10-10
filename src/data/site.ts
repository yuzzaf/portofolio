export const site = {
  name: "Muhammad Yuzzaf Ibrahim Azzumarafi",
  shortName: "Muhammad Yuzzaf",
  role: "Full-Stack Developer",
  focus: "Web & Mobile",
  location: "Jakarta, Indonesia",
  url: "https://portfolio.muhammadyuzzaf.com",
  description:
    "Full-stack developer portfolio focused on web and mobile — React, Next.js, React Native, GraphQL, and cloud deployments.",
};

export interface QuickFact {
  label: string;
  value: string;
}

export const quickFacts: QuickFact[] = [
  { label: "Shipped Projects", value: "5" },
  { label: "Technologies", value: "30+" },
  { label: "Current Focus", value: "Web & Mobile" },
  { label: "Based In", value: "Jakarta, ID" },
];

export const availableFor = ["Freelance", "Contract", "Full-time", "Consulting"];

export const heroHighlights = [
  { title: "Full-Stack Focus", value: "Web & Mobile", detail: "End-to-end delivery" },
  { title: "API Experience", value: "GraphQL + REST", detail: "Well-structured services" },
  { title: "Cloud Ready", value: "AWS & GCP", detail: "Deployments at scale" },
];

export const aboutText = {
  intro:
    "Full-stack developer passionate about building scalable, user-centered digital products. With expertise across web and mobile platforms, I transform ideas into high-performance applications.",
  story:
    "I started coding to solve real problems, and now I help businesses bring their vision to life through clean code, thoughtful design, and modern technology. Each project is an opportunity to push boundaries and create lasting impact.",
  cta: "Let's collaborate and build something amazing together.",
};

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
];
