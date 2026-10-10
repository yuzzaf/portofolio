"use client";

import { useState } from "react";
import { projects, projectHref } from "@/data/projects";
import { contact, socials } from "@/data/socials";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 pb-16 md:pb-24">
      <Reveal>
        <div className="card grid grid-cols-1 gap-10 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div>
            <span className="section-label">Let&apos;s Collaborate</span>
            <h2 id="contact-heading" className="mt-4 text-3xl font-bold md:text-5xl">
              Let&apos;s create something amazing.
            </h2>
            <p className="mt-4 text-sm leading-relaxed md:text-base" style={{ color: "var(--muted)" }}>
              Whether you have a new project or want to enhance an existing one, I&apos;m here to help.
              Get in touch and let&apos;s discuss how we can work together.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={`mailto:${contact.email}`} className="btn-primary px-6 py-3 text-xs font-bold uppercase tracking-widest">
                Email Me
              </a>
              <button type="button" onClick={copyEmail} className="btn-ghost px-6 py-3 text-xs font-bold uppercase tracking-widest" aria-live="polite">
                {copied ? "Copied ✓" : "Copy Email"}
              </button>
              <a href={contact.cvPath} download className="btn-ghost px-6 py-3 text-xs font-bold uppercase tracking-widest">
                Download CV
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials
                .filter((s) => s.label !== "Email")
                .map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="btn-ghost px-6 py-3 text-xs font-bold uppercase tracking-widest">
                    {s.label}
                  </a>
                ))}
            </div>
          </div>
          <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
            <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "var(--muted)" }}>Quick Links</p>
            <ul className="mt-4 grid gap-2 text-sm">
              {projects.map((project) => (
                <li key={project.title}>
                  <a
                    href={projectHref(project)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card flex items-center justify-between px-4 py-3 font-semibold transition hover:-translate-y-0.5"
                  >
                    <span>{project.title}</span>
                    <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
