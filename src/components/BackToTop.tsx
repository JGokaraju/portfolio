"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="Back to top"
      style={{
        position: "fixed",
        bottom: "130px",
        right: "24px",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid var(--neutral-alpha-medium)",
        background: "var(--page-background)",
        color: "var(--neutral-on-background-strong)",
        fontSize: "1rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.25s ease",
      }}
    >
      ↑
    </button>
  );
}
