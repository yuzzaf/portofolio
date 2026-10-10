"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const filters: { label: string; value: Project["category"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "Full-Stack", value: "fullstack" },
];

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]["value"]>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-12 md:py-16">
      <Reveal>
        <span className="section-label">Featured Work</span>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="projects-heading" className="text-3xl font-bold md:text-5xl">Latest Projects</h2>
          <a href="#contact" className="btn-ghost hidden px-6 py-3 text-xs font-bold uppercase tracking-widest md:inline-block">
            Get In Touch
          </a>
        </div>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            aria-pressed={filter === f.value}
            className={filter === f.value ? "btn-primary px-5 py-2 text-xs font-bold uppercase tracking-widest" : "btn-ghost px-5 py-2 text-xs font-bold uppercase tracking-widest"}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {visible.map((project, i) => (
          <Reveal key={project.title} delay={Math.min(i * 0.06, 0.2)}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
