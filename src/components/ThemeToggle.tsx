"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    try {
      const s = localStorage.getItem("theme");
      setDark(s ? s === "dark" : true);
    } catch {
      setDark(true);
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="btn-ghost inline-flex h-10 w-10 items-center justify-center text-lg"
      title={dark ? "Light mode" : "Dark mode"}
    >
      <span aria-hidden>{dark ? "☀" : "☾"}</span>
    </button>
  );
}
