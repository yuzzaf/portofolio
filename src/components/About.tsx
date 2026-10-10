import { aboutText, availableFor, quickFacts } from "@/data/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Reveal>
          <span className="section-label">About Me</span>
          <h2 id="about-heading" className="mt-4 text-3xl font-bold md:text-5xl">Developer &amp; Creator</h2>
          <div className="mt-6 space-y-5 text-sm md:text-base" style={{ color: "var(--muted)" }}>
            <p className="leading-relaxed">{aboutText.intro}</p>
            <p className="leading-relaxed">{aboutText.story}</p>
            <p className="font-semibold" style={{ color: "var(--accent-strong)" }}>{aboutText.cta}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-6 md:p-8">
            <h3 className="text-lg font-bold">Quick Facts</h3>
            <dl className="mt-4 space-y-3 text-sm md:text-base">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0" style={{ borderColor: "var(--border)" }}>
                  <dt style={{ color: "var(--muted)" }}>{fact.label}</dt>
                  <dd className="font-bold" style={{ color: "var(--accent-strong)" }}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card mt-5 p-6 md:p-8">
            <h3 className="text-lg font-bold">Available For</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {availableFor.map((item) => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
