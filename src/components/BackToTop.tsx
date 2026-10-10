"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="btn-primary fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center text-lg"
    >
      <span aria-hidden>↑</span>
    </a>
  );
}
