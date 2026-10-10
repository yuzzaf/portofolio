export interface Project {
  title: string;
  date: string;
  description: string;
  longDescription: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
  role: string;
  metrics: string[];
  category: "web" | "mobile" | "fullstack";
  frame: "phone" | "browser";
}

export const projects: Project[] = [
  {
    title: "Threaden",
    date: "May 2026",
    description:
      "A full-stack mobile social media application inspired by Threads. Features real-time feed, nested comments, likes, and user following.",
    longDescription:
      "Built a complete production-style social media architecture including a GraphQL API with authentication middleware and Redis caching on the backend, consumed by a cross-platform React Native mobile client using Apollo Client.",
    tags: ["React Native", "GraphQL", "Redis", "MongoDB"],
    link: "",
    github: "https://github.com/yuzzaf/threaden",
    image: "/threaden.png",
    role: "Mobile Developer",
    metrics: ["Real-time Feed", "Redis Caching", "GraphQL API"],
    category: "mobile",
    frame: "phone",
  },
  {
    title: "NexaHome App",
    date: "May 2026",
    description:
      "Smart home dashboard application featuring AI insights, realtime monitoring, and secure device control via a user-friendly mobile interface.",
    longDescription:
      "Developed a comprehensive smart home IoT mobile application using React Native and Expo. Integrated AI recommendations, dynamic dashboard insights, and robust backend connectivity with MongoDB.",
    tags: ["React Native", "Expo", "MongoDB"],
    link: "",
    github: "https://github.com/NexaHome/nexahome-app",
    image: "/logo_nexahome.png",
    role: "Mobile Developer",
    metrics: ["AI Insights", "IoT Integration", "Real-time Monitoring"],
    category: "mobile",
    frame: "phone",
  },
  {
    title: "Figurin",
    date: "April 2026",
    description:
      "E-commerce platform for figures built with Next.js and TypeScript. Features infinite scroll, debounced search, and wishlist management.",
    longDescription:
      "Developed a client-server e-commerce web application using Next.js, TypeScript, and MongoDB. Implemented Server-Side Rendering (SSR) & Client-Side Rendering (CSR), secure authentication, and advanced product browsing features like infinite scroll pagination and debounced search.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    link: "https://figurin.vercel.app/",
    github: "https://github.com/yuzzaf/Figurin",
    image: "/figurin.png",
    role: "Full-Stack Developer",
    metrics: ["Infinite Scroll", "SSR & CSR", "Authentication"],
    category: "web",
    frame: "browser",
  },
  {
    title: "Zapshop",
    date: "March 2026",
    description:
      "E-commerce platform with catalog, cart, secure auth, Midtrans payments, realtime updates, image handling, API validation, email services, automated testing, and optional AI integrations.",
    longDescription:
      "Built a full-featured e-commerce platform with real-time updates, secure payment processing, and AI-powered features. Implemented comprehensive testing and optimization for production deployment.",
    tags: ["React", "Express", "PostgreSQL"],
    link: "https://zapshop.erwindw99.com/",
    github: "https://github.com/gp-hck-093",
    image: "/zapshop.png",
    role: "Full-Stack Developer",
    // TODO: verify these metrics with real analytics before emphasizing them in the UI.
    metrics: ["1000+ users", "500+ products", "98% uptime"],
    category: "fullstack",
    frame: "browser",
  },
  {
    title: "Dietary",
    date: "March 2026",
    description:
      "Nutrition tracker with AI food recognition, realtime streaming chatbot, weekly analytics PDFs, and PWA support for a mobile-like experience.",
    longDescription:
      "Developed an AI-powered nutrition tracking app with real-time food recognition using Google Vision API and a streaming chatbot for personalized dietary guidance. Features PWA for offline support.",
    tags: ["React", "Node.js", "PWA"],
    link: "https://app.muhammadyuzzaf.com/",
    github: "https://github.com/yuzzaf/Dietary",
    image: "/dietary-thumb.svg",
    role: "Full-Stack Developer",
    metrics: ["AI Integration", "Real-time Chat", "PDF Reports"],
    category: "fullstack",
    frame: "browser",
  },
];

/** Best destination for a project: live demo first, GitHub fallback. */
export function projectHref(p: Project): string {
  return p.link || p.github;
}
