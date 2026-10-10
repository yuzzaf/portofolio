import Image from "next/image";
import type { Project } from "@/data/projects";

function Frame({ project }: { project: Project }) {
  if (project.frame === "phone") {
    return (
      <div className="mx-auto w-full max-w-[300px] rounded-[2rem] border p-2" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
        <div className="overflow-hidden rounded-[1.6rem]" style={{ background: "var(--surface)" }}>
          <div className="flex items-center justify-center gap-1 border-b py-2" style={{ borderColor: "var(--border)" }}>
            <span className="h-1.5 w-16 rounded-full" style={{ background: "var(--border)" }} />
          </div>
          <div className="relative">
            {project.image.endsWith(".svg") ? (
              <div className="frame-media flex flex-col items-center justify-center gap-2 p-6 text-center" style={{ background: "var(--surface-2)" }}>
                <span className="text-3xl" aria-hidden>📱</span>
                <span className="text-sm font-bold">{project.title}</span>
                <span className="text-xs" style={{ color: "var(--muted)" }}>Mobile app</span>
              </div>
            ) : (
              <Image
                src={project.image}
                alt={`${project.title} app preview`}
                width={600}
                height={375}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="frame-media"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
      <div className="flex items-center gap-1.5 border-b px-4 py-2.5" style={{ borderColor: "var(--border)", background: "var(--surface)" }} aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#f87171" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#fbbf24" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#34d399" }} />
      </div>
      {project.image.endsWith(".svg") ? (
        <div className="frame-media flex flex-col items-center justify-center gap-2 p-6 text-center">
          <span className="text-3xl" aria-hidden>🌐</span>
          <span className="text-sm font-bold">{project.title}</span>
          <span className="text-xs" style={{ color: "var(--muted)" }}>Live web app preview</span>
        </div>
      ) : (
        <Image
          src={project.image}
          alt={`${project.title} website preview`}
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="frame-media"
          loading="lazy"
        />
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1">
      <div className="p-5" style={{ background: "var(--surface-2)" }}>
        <Frame project={project} />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="chip">{project.category === "fullstack" ? "Full-Stack" : project.category === "mobile" ? "Mobile" : "Web"}</span>
          <span className="text-xs font-semibold" style={{ color: "var(--muted)" }}>{project.date}</span>
        </div>
        <h3 className="text-xl font-bold md:text-2xl">{project.title}</h3>
        <p className="mt-1 text-xs font-bold" style={{ color: "var(--accent-strong)" }}>{project.role}</p>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{project.description}</p>
        {project.metrics.length > 0 && (
          <ul className="mb-1 mt-4 flex flex-wrap gap-2" aria-label={`${project.title} highlights`}>
            {project.metrics.map((m) => (
              <li key={m} className="tag">{m}</li>
            ))}
          </ul>
        )}
        <div className="mb-5 mt-3 flex flex-wrap gap-2" aria-label={`${project.title} tech`}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest">
              Live Demo →
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost px-5 py-2.5 text-xs font-bold uppercase tracking-widest">
              GitHub →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
