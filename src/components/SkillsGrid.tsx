import Image from "next/image";
import { techStack } from "@/data/skills";
import Reveal from "./Reveal";

export default function SkillsGrid() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-12 md:py-16">
      <Reveal>
        <span className="section-label">Tech Stack</span>
        <h2 id="skills-heading" className="mt-4 text-3xl font-bold md:text-5xl">Technologies I Use</h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(techStack).map(([category, items], ci) => (
          <Reveal key={category} delay={Math.min(ci * 0.06, 0.2)}>
            <div className="card h-full p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <span aria-hidden className="inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
                {category}
              </h3>
              <ul className="mt-5 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-3">
                {items.map((item) => (
                  <li key={item.name} className="group flex flex-col items-center gap-2" title={item.name}>
                    <span
                      className={item.lightChip ? "icon-chip-light flex h-12 w-12 items-center justify-center rounded-xl border" : "flex h-12 w-12 items-center justify-center rounded-xl border"}
                      style={item.lightChip ? undefined : { borderColor: "var(--border)", background: "var(--surface-2)" }}
                    >
                      <Image src={item.logo} alt={`${item.name} logo`} width={28} height={28} className="object-contain" loading="lazy" unoptimized />
                    </span>
                    <span className="text-center text-[10px] font-semibold leading-tight" style={{ color: "var(--muted)" }}>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
