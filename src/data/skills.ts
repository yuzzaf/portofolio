export interface TechItem {
  name: string;
  logo: string;
  /** Use a light chip behind low-contrast logos in dark mode. */
  lightChip?: boolean;
}

export type TechStack = Record<string, TechItem[]>;

const chip = (name: string, logo: string): TechItem => ({
  name,
  logo,
  lightChip: true,
});

export const techStack: TechStack = {
  Language: [
    { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "PHP", logo: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "C", logo: "https://cdn.simpleicons.org/c/A8B9CC" },
    { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  ],
  "Front End": [
    { name: "React JS", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "React Native (Expo)", logo: "https://cdn.simpleicons.org/expo/FFFFFF" },
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
    { name: "HTML & CSS", logo: "https://cdn.simpleicons.org/html5/E34C26" },
    { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    chip("Apollo", "https://cdn.simpleicons.org/apollographql/311C87"),
  ],
  "Back End": [
    { name: "Node JS", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express", logo: "https://cdn.simpleicons.org/express/FFFFFF" },
    { name: "Sequelize", logo: "https://cdn.simpleicons.org/sequelize/52B0E7" },
    { name: "GraphQL", logo: "https://cdn.simpleicons.org/graphql/E10098" },
    chip("Apollo Server", "https://cdn.simpleicons.org/apollographql/311C87"),
    { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
    { name: "REST API", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
  ],
  Databases: [
    { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/13AA52" },
    { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/336791" },
    { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  ],
  Deployments: [
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Google Cloud Platform", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  ],
  Tools: [
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
    { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
    chip("DBeaver", "https://cdn.simpleicons.org/dbeaver/382923"),
    { name: "MongoDB Atlas", logo: "https://cdn.simpleicons.org/mongodb/13AA52" },
    { name: "Android Studio", logo: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
  ],
};

export const techMarquee = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "GraphQL",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "AWS",
];
