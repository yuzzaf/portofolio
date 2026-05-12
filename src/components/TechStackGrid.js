'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

export default function TechStackGrid({ techStack }) {
  return (
    <div className="w-full">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {Object.entries(techStack).map(([category, items]) => (
          <motion.div 
            key={category} 
            variants={fadeUp}
            className="glow-border rounded-2xl p-6 bg-gradient-to-br from-[var(--surface-strong)] to-[var(--surface)] hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-xl font-black text-[var(--ink)] mb-6 accent-text flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
              {category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
              {items.map((item) => (
                <div key={item.name} className="flex flex-col items-center justify-center gap-2 group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#050812] border border-[var(--accent)]/20 group-hover:border-[var(--accent)] transition-all duration-300 shadow-[0_0_0_rgba(0,255,255,0)] group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                    <img 
                      src={item.logo} 
                      alt={item.name} 
                      className="w-7 h-7 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] text-[var(--muted)] font-semibold text-center group-hover:text-[var(--accent)] transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
