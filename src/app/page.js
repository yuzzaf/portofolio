"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import TechStackGrid from '../components/TechStackGrid';

const techStack = {
  "Language": [
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
    { name: "Apollo", logo: "https://cdn.simpleicons.org/apollographql/311C87" },
  ],
  "Back End": [
    { name: "Node JS", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express", logo: "https://cdn.simpleicons.org/express/FFFFFF" },
    { name: "Sequelize", logo: "https://cdn.simpleicons.org/sequelize/52B0E7" },
    { name: "GraphQL", logo: "https://cdn.simpleicons.org/graphql/E10098" },
    { name: "Apollo Server", logo: "https://cdn.simpleicons.org/apollographql/311C87" },
    { name: "Redis", logo: "https://cdn.simpleicons.org/redis/DC382D" },
    { name: "REST API", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
  ],
  "Databases": [
    { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/13AA52" },
    { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/336791" },
    { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  ],
  "Deployments": [
    { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/FF9900" },
    { name: "Google Cloud Platform", logo: "https://cdn.simpleicons.org/googlecloud/4285F4" },
    { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
    { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  ],
  "Tools": [
    { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
    { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "DBeaver", logo: "https://cdn.simpleicons.org/dbeaver/382923" },
    { name: "MongoDB Atlas", logo: "https://cdn.simpleicons.org/mongodb/13AA52" },
    { name: "Android Studio", logo: "https://cdn.simpleicons.org/androidstudio/3DDC84" },
  ],
};

const projects = [
  {
    title: "Threaden",
    date: "May 2026",
    description: "A full-stack mobile social media application inspired by Threads. Features real-time feed, nested comments, likes, and user following.",
    longDescription: "Built a complete production-style social media architecture including a GraphQL API with authentication middleware and Redis caching on the backend, consumed by a cross-platform React Native mobile client using Apollo Client.",
    tags: ["React Native", "GraphQL", "Redis", "MongoDB"],
    link: "",
    github: "https://github.com/yuzzaf/threaden",
    image: "",
    role: "Full-Stack Developer",
    metrics: ["Real-time Feed", "Redis Caching", "GraphQL API"],
  },
  {
    title: "NexaHome App",
    date: "May 2026",
    description:
      "Smart home dashboard application featuring AI insights, realtime monitoring, and secure device control via a user-friendly mobile interface.",
    longDescription: "Developed a comprehensive smart home IoT mobile application using React Native and Expo. Integrated AI recommendations, dynamic dashboard insights, and robust backend connectivity with MongoDB.",
    tags: ["React Native", "Expo", "MongoDB"],
    link: "",
    github: "https://github.com/NexaHome/nexahome-app",
    image: "",
    role: "Mobile Developer",
    metrics: ["AI Insights", "IoT Integration", "Real-time Monitoring"],
  },
  {
    title: "Zapshop",
    date: "March 2026",
    description:
      "E-commerce platform with catalog, cart, secure auth, Midtrans payments, realtime updates, image handling, API validation, email services, automated testing, and optional AI integrations.",
    longDescription: "Built a full-featured e-commerce platform with real-time updates, secure payment processing, and AI-powered features. Implemented comprehensive testing and optimization for production deployment.",
    tags: ["React", "Express", "PostgreSQL"],
    link: "https://zapshop.erwindw99.com/",
    github: "https://github.com/gp-hck-093",
    image: "/zapshop.png",
    role: "Full-Stack Developer",
    metrics: ["1000+ users", "500+ products", "98% uptime"],
  },
  {
    title: "Dietary",
    date: "March 2026",
    description:
      "Nutrition tracker with AI food recognition, realtime streaming chatbot, weekly analytics PDFs, and PWA support for a mobile-like experience.",
    longDescription: "Developed an AI-powered nutrition tracking app with real-time food recognition using Google Vision API and a streaming chatbot for personalized dietary guidance. Features PWA for offline support.",
    tags: ["React", "Node.js", "PWA"],
    link: "https://app.muhammadyuzzaf.com/",
    github: "https://github.com/yuzzaf/Dietary",
    image: "/dietary-thumb.svg",
    role: "Full-Stack Developer",
    metrics: ["AI Integration", "Real-time Chat", "PDF Reports"],
  },
];

const aboutText = {
  intro: "Full-stack developer passionate about building scalable, user-centered digital products. With expertise across web and mobile platforms, I transform ideas into high-performance applications.",
  story: "I started coding to solve real problems, and now I help businesses bring their vision to life through clean code, thoughtful design, and modern technology. Each project is an opportunity to push boundaries and create lasting impact.",
  cta: "Let's collaborate and build something amazing together.",
};

const highlights = [
  { title: "Full-Stack Focus", value: "Web & Mobile", detail: "End-to-end delivery" },
  { title: "API Experience", value: "GraphQL + REST", detail: "Well-structured services" },
  { title: "Cloud Ready", value: "AWS & GCP", detail: "Deployments at scale" },
];



const education = [
  {
    school: "Hacktiv8",
    degree: "AI-Enhanced Full Stack Developer Bootcamp",
    field: "TypeScript",
    location: "Jakarta, Indonesia",
    date: "January 2026 – April 2026",
    certificate: "https://drive.google.com/file/d/1Fx2d_ImzKfSA5DSk1oxPUeWf3nags-tk/view",
  },
  {
    school: "Telkom University",
    degree: "Bachelor of Computer Engineering",
    field: "Cum Laude, GPA 3.61/4.00",
    location: "Bandung, Indonesia",
    date: "2020 – 2024",
    certificate: null,
  },
  {
    school: "Bangkit Academy",
    degree: "Cloud Computing, GOTO, & Traveloka",
    field: "GPA 3.52/4.00, Transcript & Badge Achievement",
    location: "Bandung, Indonesia",
    date: "January 2023 – June 2023",
    certificate: "https://drive.google.com/file/d/1RcaYfLood1boyVPIFg8d5BdbIfT_cyb_/view",
  },
];

const skillsData = [
  { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"], level: 90 },
  { category: "Backend", skills: ["Node.js", "Express", "GraphQL", "REST API", "PostgreSQL"], level: 85 },
  { category: "Tools & DevOps", skills: ["Git", "Docker", "AWS", "Vercel", "Firebase"], level: 80 },
  { category: "Mobile", skills: ["React Native", "Expo", "Mobile Design"], level: 75 },
];

export default function Home() {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollY } = useScroll();
  const heroBlobLeftY = useTransform(scrollY, [0, 600], [0, -80]);
  const heroBlobRightY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroBlobOpacity = useTransform(scrollY, [0, 500], [1, 0.6]);
  const profileY = useTransform(scrollY, [0, 600], [0, -40]);

  useEffect(() => {
    // Load dark mode preference from localStorage, default to true (dark mode)
    const savedDarkMode = localStorage.getItem("darkMode") !== "false";
    setIsDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
  const handleNavClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  return (
    <div className="min-h-screen bg-[#050812] text-[var(--foreground)]">
      <div className="grain">
        <div className="decorative-circle decorative-circle-1"></div>
        <div className="decorative-circle decorative-circle-2"></div>
        <header className="relative overflow-hidden">
          <motion.div
            className="hero-blob left-[-8%] top-[-20%]"
            style={{ y: heroBlobLeftY, opacity: heroBlobOpacity }}
          />
          <motion.div
            className="hero-blob right-[-18%] top-[6%]"
            style={{ y: heroBlobRightY, opacity: heroBlobOpacity }}
          />
           <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pb-6 pt-8 relative z-50">
             <div className="flex items-center gap-3">
               <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] text-xs font-bold text-[var(--navy)] shadow-[0_0_20px_rgba(0,217,255,0.3)]">
                 MY
               </div>
               <div>
                 <p className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--accent)] accent-text">Portfolio</p>
                 <p className="text-sm font-bold text-[var(--ink)] accent-text">Muhammad Yuzzaf</p>
               </div>
             </div>
              <div className="flex items-center gap-6">
                  <div className="hidden items-center gap-8 text-sm font-semibold text-[var(--muted)] md:flex">
                    <a className="nav-link-enhanced transition hover:text-[var(--accent)] relative group" href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
                      Projects
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-purple)] group-hover:w-full transition-all"></span>
                    </a>

                    <a className="nav-link-enhanced transition hover:text-[var(--accent)] relative group" href="#education" onClick={(e) => handleNavClick(e, "#education")}>
                      Education
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-purple)] group-hover:w-full transition-all"></span>
                    </a>
                    <a className="nav-link-enhanced transition hover:text-[var(--accent)] relative group" href="#skills" onClick={(e) => handleNavClick(e, "#skills")}>
                      Skills
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-purple)] group-hover:w-full transition-all"></span>
                    </a>
                    <a className="nav-link-enhanced transition hover:text-[var(--accent)] relative group" href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                      Contact
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-purple)] group-hover:w-full transition-all"></span>
                    </a>
                  </div>
              </div>
              <a
                href="#projects"
                className="button-primary button-enhanced rounded-lg px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em]"
                onClick={(e) => handleNavClick(e, "#projects")}
              >
                View Work
              </a>
           </nav>
            <motion.div
              className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:gap-12 px-6 pb-16 md:pb-20 pt-8 md:pt-12 md:grid-cols-[1.1fr_0.9fr]"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
               <motion.div variants={fadeUp}>
                 <span className="section-label-enhanced">FULL-STACK DEVELOPER</span>
                 <h1 className="display mt-6 md:mt-8 text-4xl md:text-7xl font-black leading-tight relative">
                   Building Scalable <span className="gradient-text">Web & Mobile</span> <br /> Solutions
                   <div className="absolute -top-10 -right-20 w-40 h-40 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
                 </h1>
                 <p className="mt-8 md:mt-10 max-w-2xl text-base md:text-lg text-[var(--muted)] leading-relaxed">
                   I build high-performance web & mobile applications that solve real problems. From concept to deployment, every line of code is crafted for excellence.
                 </p>
                  <div className="mt-10 md:mt-12 flex flex-wrap gap-4 md:gap-5">
                    <a
                      href="#projects"
                      className="button-primary button-enhanced rounded-lg px-7 md:px-9 py-3.5 md:py-4 text-xs md:text-sm font-bold uppercase tracking-[0.1em] transition"
                      onClick={(e) => handleNavClick(e, "#projects")}
                    >
                      View Projects
                    </a>
                    <a
                      href="#stack"
                      className="button-primary button-enhanced rounded-lg border border-[var(--accent)] bg-[var(--surface)] px-7 md:px-9 py-3.5 md:py-4 text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-[var(--accent)] transition hover:bg-[var(--surface-strong)] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                      onClick={(e) => handleNavClick(e, "#stack")}
                    >
                      Tech Stack
                   </a>
                 </div>
                <motion.div className="mt-12 md:mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3" variants={stagger}>
                  {highlights.map((item) => (
                    <motion.div
                      key={item.title}
                      className="enhanced-glass rounded-2xl px-4 md:px-5 py-4 md:py-5 text-sm text-[var(--ink)]"
                      variants={fadeIn}
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] font-bold">
                        {item.title}
                      </p>
                      <p className="mt-3 text-base md:text-lg font-semibold">{item.value}</p>
                      <p className="text-xs text-[var(--muted)]">{item.detail}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div className="relative" variants={fadeUp} style={{ y: profileY }}>
               <div className="glow-border rounded-3xl p-8 md:p-10 relative">
                 <div className="flex flex-col items-center text-center">
                   {/* Photo */}
                   <div className="mb-8 md:mb-10 inline-block">
                     <div className="h-32 w-32 md:h-44 md:w-44 overflow-hidden rounded-full border-3 border-[var(--accent)] bg-[var(--surface-strong)] shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                       <Image
                         src="/profile.jpg"
                         alt="Muhammad Yuzzaf Ibrahim Azzumarafi"
                         width={176}
                         height={176}
                         className="h-full w-full object-cover object-top"
                         priority
                       />
                     </div>
                   </div>

                   {/* Name */}
                   <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)] font-bold accent-text">Full-Stack Developer</p>
                   <h3 className="display mt-4 md:mt-6 text-2xl md:text-4xl font-black text-[var(--ink)] leading-tight accent-text">
                     Muhammad Yuzzaf <br className="hidden md:block" /> Ibrahim Azzumarafi
                   </h3>

                   {/* Bio */}
                   <p className="mt-6 md:mt-8 text-sm md:text-base text-[var(--muted)] max-w-lg leading-relaxed">
                    Full-stack developer focused on user experience, performance, and clean design. Building scalable web and mobile applications.
                  </p>

                   {/* Skills */}
                   <div className="mt-8 md:mt-10 grid grid-cols-2 gap-3 w-full max-w-xs">
                     {[
                       "Web Apps",
                       "Mobile Apps",
                       "API Design",
                       "Cloud Deployments",
                     ].map((item) => (
                       <div
                         key={item}
                         className="rounded-lg border border-[var(--accent)]/40 bg-[var(--accent)]/5 px-3 md:px-4 py-2.5 md:py-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)] hover:border-[var(--accent)]/80 hover:bg-[var(--accent)]/10 transition-all"
                       >
                         {item}
                       </div>
                     ))}
                   </div>

                   {/* Location */}
                   <div className="mt-8 md:mt-10 w-full flex items-center justify-center gap-4">
                     <div className="text-2xl md:text-3xl">📍</div>
                     <div className="text-left">
                       <p className="text-sm md:text-base font-bold text-[var(--ink)]">Jakarta, Indonesia</p>
                       <p className="text-xs text-[var(--muted)]">Available for freelance & contract work</p>
                     </div>
                   </div>
                </div>
              </div>
              
               <div className="absolute -bottom-5 md:-bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-purple)] px-6 md:px-8 py-2.5 md:py-3 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[#050812] shadow-[0_10px_30px_rgba(0,255,255,0.3)] whitespace-nowrap pulse">
                 Ready to collaborate
               </div>
             </motion.div>
           </motion.div>
           </header>



           <section id="education" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-20 relative">
             <div className="absolute -bottom-20 -right-40 w-80 h-80 bg-gradient-to-r from-[var(--accent-secondary)] to-[var(--accent)] rounded-full blur-3xl opacity-10 pointer-events-none"></div>
             <motion.div
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.2 }}
               variants={stagger}
             >
               <motion.div variants={fadeUp} className="mb-8 md:mb-16">
                 <span className="section-label-enhanced">EDUCATION</span>
                 <h2 className="display mt-4 md:mt-6 text-4xl md:text-5xl font-black text-[var(--ink)] accent-text">
                   Learning & Certifications
                 </h2>
               </motion.div>

               {/* Timeline */}
               <div className="relative">
                 {/* Vertical line */}
                 <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/50 to-transparent md:-translate-x-1/2"></div>

                 {/* Timeline items */}
                 <div className="space-y-10 md:space-y-12">
                   {education.map((edu, index) => (
                     <motion.div
                       key={index}
                       variants={fadeUp}
                       className={`relative flex gap-6 md:gap-0 ${
                         index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                       }`}
                     >
                       {/* Timeline dot */}
                       <div className="absolute left-0 md:left-1/2 top-6 md:top-8 w-12 h-12 -translate-x-3 md:-translate-x-1/2">
                         <motion.div
                           whileHover={{ scale: 1.2 }}
                           className="w-full h-full rounded-full border-4 border-[var(--accent)] bg-[#050812] shadow-[0_0_20px_rgba(0,255,255,0.4)] flex items-center justify-center"
                         >
                           <div className="w-2 h-2 rounded-full bg-[var(--accent)]"></div>
                         </motion.div>
                       </div>

                       {/* Content */}
                       <div className={`w-full md:w-1/2 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"}`}>
                         <motion.div
                           whileHover={{ y: -5 }}
                           className="glow-border rounded-2xl p-6 md:p-8 group"
                         >
                           <div className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--accent)] mb-2 md:mb-3">
                             {edu.date}
                           </div>

                           <h3 className="text-xl md:text-2xl font-black text-[var(--ink)] mb-1 md:mb-2">{edu.school}</h3>
                           <p className="text-sm md:text-base font-bold text-[var(--accent)] mb-2 md:mb-3">{edu.degree}</p>
                           <p className="text-xs md:text-sm text-[var(--muted)] mb-3 md:mb-4">{edu.field}</p>
                           
                           <div className="flex items-center gap-2 text-xs md:text-sm text-[var(--muted)] mb-4 md:mb-6">
                             <span>📍</span>
                             <span>{edu.location}</span>
                           </div>

                           {edu.certificate && (
                             <a
                               href={edu.certificate}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.1em] text-[var(--accent)] hover:text-[var(--accent-strong)] transition group/link"
                             >
                               View Certificate
                               <span className="inline-block group-hover/link:translate-x-1 transition">→</span>
                             </a>
                           )}
                         </motion.div>
                       </div>
                     </motion.div>
                   ))}
                 </div>
               </div>
             </motion.div>
           </section>

          <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
            <div className="flex flex-col gap-2 md:gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="section-label-enhanced">FEATURED WORK</span>
                <h2 className="display mt-4 md:mt-6 text-4xl md:text-5xl font-black text-[var(--ink)] accent-text">
                  Latest Projects
                </h2>
              </div>
              <a
                href="#contact"
                className="hidden md:block rounded-lg border border-[var(--accent)] px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] text-[var(--accent)] transition hover:bg-[var(--surface)] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                Get In Touch
              </a>
            </div>
            <motion.div
              className="mt-8 md:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {projects.map((project, index) => (
                 <motion.article
                   key={project.title}
                   className={`group glow-border overflow-hidden transition duration-500 project-card-enhanced ${
                     index === 0 ? "stagger-1" : index === 1 ? "stagger-2" : "stagger-3"
                   } fade-up`}
                   variants={fadeUp}
                   whileHover={{ scale: 1.02 }}
                 >
                   {/* Project thumbnail */}
                   <div className="relative h-48 md:h-64 w-full overflow-hidden bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)]">
                     {project.image && (
                       <Image
                         src={project.image}
                         alt={project.title}
                         fill
                         sizes="100vw"
                         className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-500"
                       />
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                   </div>

                   {/* Project content */}
                   <div className="p-6 md:p-8 bg-gradient-to-br from-[var(--surface-strong)] to-[var(--surface)]">
                     <div className="flex items-center justify-between mb-3 md:mb-4">
                       <p className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--accent)]">Featured Project</p>
                       <span className="rounded-lg border border-[var(--accent)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--accent)]">
                         {project.date}
                       </span>
                     </div>
                     <h3 className="display text-2xl md:text-3xl font-black text-[var(--ink)] mb-2">
                       {project.title}
                     </h3>
                     <p className="text-xs font-bold text-[var(--accent)] mb-3">{project.role}</p>
                     <p className="text-sm md:text-base text-[var(--muted)] leading-relaxed mb-6">{project.description}</p>
                     {project.metrics && (
                       <div className="mb-6 flex flex-wrap gap-2">
                         {project.metrics.map((metric) => (
                           <span
                             key={metric}
                             className="text-[11px] font-bold text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/30 px-3 py-1.5 rounded-full"
                           >
                             {metric}
                           </span>
                         ))}
                       </div>
                     )}
                     <div className="mb-6 flex flex-wrap gap-2">
                       {project.tags.map((tag) => (
                         <span
                           key={tag}
                           className="rounded-lg border border-[var(--accent)]/40 bg-[var(--accent)]/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--accent)]"
                         >
                           {tag}
                         </span>
                       ))}
                     </div>
                     <div className="flex flex-wrap gap-6 mt-4">
                       {project.link && (
                         <a
                           href={project.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--accent)] hover:text-[var(--accent-strong)] hover:gap-3 transition-all group"
                         >
                           Live Demo
                           <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                         </a>
                       )}
                       {project.github && (
                         <a
                           href={project.github}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-[var(--muted)] hover:text-[var(--ink)] hover:gap-3 transition-all group"
                         >
                           GitHub
                           <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                         </a>
                       )}
                     </div>
                   </div>
                 </motion.article>
              ))}
            </motion.div>
           </section>

           <section id="about" className="mx-auto w-full max-w-6xl px-6 py-12 md:py-20 relative">
             <div className="absolute -top-20 -left-40 w-96 h-96 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] rounded-full blur-3xl opacity-10 pointer-events-none"></div>
             <motion.div
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, amount: 0.2 }}
               variants={stagger}
               className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2 relative"
             >
               <motion.div variants={fadeUp}>
                 <span className="section-label-enhanced">ABOUT ME</span>
                 <h2 className="display mt-4 md:mt-6 text-4xl md:text-5xl font-black text-[var(--ink)] accent-text">
                   Developer & Creator
                 </h2>
                 <div className="mt-6 md:mt-8 space-y-4 md:space-y-6 text-[var(--muted)]">
                   <p className="text-sm md:text-lg leading-relaxed">
                     {aboutText.intro}
                   </p>
                   <p className="text-sm md:text-lg leading-relaxed">
                     {aboutText.story}
                   </p>
                   <p className="text-sm md:text-lg font-semibold text-[var(--accent)]">
                     {aboutText.cta}
                   </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="space-y-4 md:space-y-6"
              >
                <div className="glow-border rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                  <h3 className="text-lg md:text-xl font-black text-[var(--ink)] mb-4 md:mb-6 accent-text">Quick Facts</h3>
                  <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                    <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-[var(--accent)]/20">
                      <span className="text-[var(--muted)]">Experience</span>
                      <span className="font-bold text-[var(--accent)]">Mid-Senior</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-[var(--accent)]/20">
                      <span className="text-[var(--muted)]">Projects</span>
                      <span className="font-bold text-[var(--accent)]">2+</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 md:pb-4 border-b border-[var(--accent)]/20">
                      <span className="text-[var(--muted)]">Technologies</span>
                      <span className="font-bold text-[var(--accent)]">20+</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[var(--muted)]">Current Focus</span>
                      <span className="font-bold text-[var(--accent)]">Full-Stack</span>
                    </div>
                  </div>
                </div>

                <div className="soft-panel rounded-2xl p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-black text-[var(--ink)] mb-4 md:mb-6 accent-text">Available For</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {["Freelance", "Contract", "Full-time", "Consulting"].map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-[var(--accent)] bg-[var(--accent)]/10 px-3 md:px-4 py-2 md:py-2.5 text-xs md:text-sm font-bold text-[var(--accent)]"
                      >
                       {item}
                     </span>
                   ))}
                 </div>
               </div>
             </motion.div>
           </motion.div>
         </section>

         <section id="stack" className="mx-auto w-full max-w-6xl px-6 py-12 md:pb-20">
           <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-16">
             <span className="section-label-enhanced">Tech Stack</span>
             <h2 className="display mt-4 md:mt-6 text-4xl md:text-5xl font-black text-[var(--ink)] accent-text">
               Technologies I Use
             </h2>
           </div>

           <TechStackGrid techStack={techStack} />
         </section>

         <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24">
            <motion.div
              className="glow-border grid grid-cols-1 gap-8 md:gap-12 rounded-3xl p-8 md:p-12 lg:p-16 md:grid-cols-[1.2fr_0.8fr]"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div>
                <span className="section-label-enhanced">LET'S COLLABORATE</span>
                <h2 className="display mt-4 md:mt-6 text-4xl md:text-5xl font-black text-[var(--ink)] accent-text">
                  Let's create something amazing.
                </h2>
                <p className="mt-4 md:mt-6 text-sm md:text-lg text-[var(--muted)] leading-relaxed accent-text">
                  Whether you have a new project or want to enhance an existing one, I'm here to help. Get in touch and let's discuss how we can work together.
                </p>
                <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
                  <a
                    href="mailto:muhammadyuzzaf@gmail.com"
                    className="button-primary button-enhanced contact-btn-enhanced rounded-lg px-6 md:px-8 py-2.5 md:py-3.5 text-xs md:text-base font-bold uppercase tracking-[0.1em]"
                  >
                    Email Me
                  </a>
                  <a
                    href="https://github.com/yuzzaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-enhanced contact-btn-enhanced rounded-lg border border-[var(--accent)] px-6 md:px-8 py-2.5 md:py-3.5 text-xs md:text-base font-bold uppercase tracking-[0.1em] text-[var(--accent)] transition hover:bg-[var(--accent)]/10"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/muhammadyuzzaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-enhanced contact-btn-enhanced rounded-lg border border-[var(--accent)] px-6 md:px-8 py-2.5 md:py-3.5 text-xs md:text-base font-bold uppercase tracking-[0.1em] text-[var(--accent)] transition hover:bg-[var(--accent)]/10"
                  >
                    LinkedIn
                  </a>
               </div>
             </div>
              <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface-strong)] to-[var(--surface)] p-6 md:p-8">
               <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] font-bold">Quick Links</p>
               <div className="mt-4 grid gap-2 md:gap-3 text-xs md:text-sm">
                 {projects.map((project) => (
                   <a
                     key={project.title}
                     href={project.link}
                    className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--ink)]"
                  >
                    <span className="font-semibold">{project.title}</span>
                    <span aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <footer className="border-t border-[var(--accent)]/20 bg-gradient-to-b from-[var(--surface-strong)] to-[var(--navy)] px-6 py-16 relative overflow-hidden">
          <div className="decorative-circle decorative-circle-1" style={{ width: '150px', height: '150px', bottom: '-75px', right: '-75px' }}></div>
          <div className="decorative-circle decorative-circle-2" style={{ width: '100px', height: '100px', top: '-50px', left: '-50px' }}></div>
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-4 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] text-xs font-bold text-[var(--navy)]">
                    MY
                  </div>
                  <span className="font-bold text-[var(--ink)]">Portfolio</span>
                </div>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Full-stack developer crafting premium digital experiences.
                </p>
              </div>

               <div>
                 <h3 className="font-bold text-[var(--ink)] mb-4">Navigation</h3>
                 <div className="space-y-3 text-xs text-[var(--muted)]">
                   <a href="#projects" onClick={(e) => handleNavClick(e, "#projects")} className="nav-link-enhanced block hover:text-[var(--accent)] transition">
                     Projects
                   </a>

                   <a href="#education" onClick={(e) => handleNavClick(e, "#education")} className="nav-link-enhanced block hover:text-[var(--accent)] transition">
                     Education
                   </a>
                   <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")} className="nav-link-enhanced block hover:text-[var(--accent)] transition">
                     Skills
                   </a>
                   <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="nav-link-enhanced block hover:text-[var(--accent)] transition">
                     Contact
                   </a>
                 </div>
               </div>

              <div>
                <h3 className="font-bold text-[var(--ink)] mb-4">Social</h3>
                <div className="space-y-3 text-xs text-[var(--muted)]">
                  <a href="https://github.com/yuzzaf" target="_blank" rel="noopener noreferrer" className="nav-link-enhanced flex items-center gap-2 hover:text-[var(--accent)] transition">
                    <span>→</span> GitHub
                  </a>
                  <a href="https://linkedin.com/in/muhammadyuzzaf" target="_blank" rel="noopener noreferrer" className="nav-link-enhanced flex items-center gap-2 hover:text-[var(--accent)] transition">
                    <span>→</span> LinkedIn
                  </a>
                   <a href="mailto:muhammadyuzzaf@gmail.com" className="nav-link-enhanced flex items-center gap-2 hover:text-[var(--accent)] transition">
                     <span>→</span> Email
                   </a>
                 </div>
              </div>

              <div>
                <h3 className="font-bold text-[var(--ink)] mb-4">Projects</h3>
                <div className="space-y-3 text-xs text-[var(--muted)]">
                  <a href="https://zapshop.erwindw99.com/" target="_blank" rel="noopener noreferrer" className="nav-link-enhanced flex items-center gap-2 hover:text-[var(--accent)] transition">
                    <span>→</span> Zapshop
                  </a>
                  <a href="https://github.com/yuzzaf/Dietary" target="_blank" rel="noopener noreferrer" className="nav-link-enhanced flex items-center gap-2 hover:text-[var(--accent)] transition">
                    <span>→</span> Dietary
                  </a>
                  <a href="https://github.com/yuzzaf/threaden" target="_blank" rel="noopener noreferrer" className="nav-link-enhanced flex items-center gap-2 hover:text-[var(--accent)] transition">
                    <span>→</span> Threaden
                  </a>
                  <a href="https://github.com/NexaHome/nexahome-app" target="_blank" rel="noopener noreferrer" className="nav-link-enhanced flex items-center gap-2 hover:text-[var(--accent)] transition">
                    <span>→</span> NexaHome
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-[var(--accent)]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
              <p>© 2026 Muhammad Yuzzaf Ibrahim Azzumarafi. All rights reserved.</p>
              <p className="text-[11px] font-semibold text-[var(--accent)] gradient-text">Crafted with code, design & passion 🚀</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
