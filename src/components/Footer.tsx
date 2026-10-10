import { navItems, site } from "@/data/site";
import { socials } from "@/data/socials";
import { projects } from "@/data/projects";

export default function Footer() {
  return (
    <footer className="border-t px-6 py-14" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold" style={{ background: "var(--accent)", color: "var(--accent-ink)" }}>
                MY
              </span>
              <span className="font-bold">Portfolio</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              Full-stack developer crafting premium digital experiences.
            </p>
          </div>
          <nav aria-label="Footer">
            <h3 className="mb-4 text-sm font-bold">Navigation</h3>
            <ul className="space-y-3 text-xs" style={{ color: "var(--muted)" }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="transition hover:opacity-80">{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="mb-4 text-sm font-bold">Social</h3>
            <ul className="space-y-3 text-xs" style={{ color: "var(--muted)" }}>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="transition hover:opacity-80">
                    → {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold">Projects</h3>
            <ul className="space-y-3 text-xs" style={{ color: "var(--muted)" }}>
              {projects.map((p) => (
                <li key={p.title} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  {p.link ? (
                    <>
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80">→ {p.title} (Live)</a>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80">GitHub</a>
                    </>
                  ) : (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="transition hover:opacity-80">→ {p.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t pt-8 text-xs md:flex-row" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p className="font-semibold">Crafted with code, design &amp; passion 🚀</p>
        </div>
      </div>
    </footer>
  );
}
