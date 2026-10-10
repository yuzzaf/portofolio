"use client";

import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("projects");

  useEffect(() => {
    const sections = [...navItems.map((n) => n.id), "stack"];
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id === "stack" ? "skills" : e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 80%, transparent)" }}>
      <nav aria-label="Primary" className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold" style={{ background: "var(--accent)", color: "var(--accent-ink)" }}>
            MY
          </span>
          <span className="leading-tight">
            <span className="block text-[10px] font-bold uppercase tracking-[0.25em]" style={{ color: "var(--accent-strong)" }}>Portfolio</span>
            <span className="block text-sm font-bold">{site.shortName}</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? "true" : undefined}
              className="transition hover:opacity-100"
              style={{
                color: active === item.id ? "var(--accent-strong)" : "var(--muted)",
                textDecoration: active === item.id ? "underline" : "none",
                textUnderlineOffset: "6px",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="#projects" className="btn-primary hidden px-5 py-2.5 text-xs font-bold uppercase tracking-widest md:inline-block">
            View Work
          </a>
          <button
            type="button"
            className="btn-ghost inline-flex h-10 w-10 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden>{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t px-6 py-4 md:hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold"
                style={{
                  background: active === item.id ? "var(--accent-soft)" : "transparent",
                  color: active === item.id ? "var(--accent-strong)" : "var(--ink)",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
