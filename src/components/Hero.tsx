"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroHighlights, site } from "@/data/site";
import { techMarquee } from "@/data/skills";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="mx-auto w-full max-w-6xl px-6 pb-14 pt-10 md:pt-16">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={reduce ? false : { opacity: 0, y: 20 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <span className="section-label">{site.role}</span>
          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Building Scalable <span style={{ color: "var(--accent-strong)" }}>Web &amp; Mobile</span> Solutions
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg" style={{ color: "var(--muted)" }}>
            I build high-performance web &amp; mobile applications that solve real problems. From concept to
            deployment, every line of code is crafted for excellence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary px-8 py-3.5 text-sm font-bold uppercase tracking-widest">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost px-8 py-3.5 text-sm font-bold uppercase tracking-widest">
              Contact Me
            </a>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div key={item.title} className="card p-5 text-sm">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>{item.title}</p>
                <p className="mt-2 text-base font-semibold">{item.value}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="card relative p-8 text-center md:p-10"
        >
          <span className="chip" style={{ borderColor: "var(--accent)" }}>
            <span aria-hidden className="mr-2 inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
            Available for freelance &amp; contract
          </span>
          <div className="mx-auto mb-6 mt-6 h-36 w-36 overflow-hidden rounded-full md:h-44 md:w-44" style={{ border: "3px solid var(--accent)" }}>
            <Image
              src="/profile.jpg"
              alt={site.name}
              width={352}
              height={352}
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--accent-strong)" }}>{site.role}</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">{site.name}</h2>
          <p className="mx-auto mt-4 max-w-md text-sm" style={{ color: "var(--muted)" }}>
            Full-stack developer focused on user experience, performance, and clean design. Building scalable web
            and mobile applications.
          </p>
          <p className="mt-6 text-sm font-semibold">📍 {site.location}</p>
        </motion.div>
      </div>

      <div className="mt-12 overflow-hidden border-y py-4" style={{ borderColor: "var(--border)" }} aria-label="Technologies">
        <div className="marquee-track flex w-max gap-3">
          {[...techMarquee, ...techMarquee].map((t, i) => (
            <span key={`${t}-${i}`} className="tag" aria-hidden={i >= techMarquee.length}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
