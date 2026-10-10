import { education } from "@/data/education";
import Reveal from "./Reveal";

export default function EducationTimeline() {
  return (
    <section id="education" aria-labelledby="education-heading" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-12 md:py-20">
      <Reveal>
        <span className="section-label">Education</span>
        <h2 id="education-heading" className="mt-4 text-3xl font-bold md:text-5xl">Learning &amp; Certifications</h2>
      </Reveal>
      <ol className="relative mt-10 space-y-8 border-l-2 pl-8 md:pl-10" style={{ borderColor: "var(--accent)" }}>
        {education.map((edu, i) => (
          <li key={edu.school}>
            <Reveal delay={Math.min(i * 0.06, 0.2)}>
              <span aria-hidden className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border-4" style={{ borderColor: "var(--accent)", background: "var(--bg)" }} />
              <div className="card p-6 md:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "var(--accent-strong)" }}>{edu.date}</p>
                <h3 className="mt-2 text-xl font-bold">{edu.school}</h3>
                <p className="mt-1 text-sm font-semibold" style={{ color: "var(--accent-strong)" }}>{edu.degree}</p>
                <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>{edu.field} · 📍 {edu.location}</p>
                {edu.certificate && (
                  <a href={edu.certificate} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent-strong)" }}>
                    View Certificate <span aria-hidden>→</span>
                  </a>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
