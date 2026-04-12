"use client";

import { useEffect, useState } from "react";

export interface Anchor {
  id: string;
  label: string;
}

export default function PageAnchors({ anchors }: { anchors: Anchor[] }) {
  const [active, setActive] = useState(anchors[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    anchors.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [anchors]);

  return (
    <nav
      className="page-anchors"
      style={{
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        right: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        zIndex: 50,
      }}
    >
      {anchors.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            title={label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              color: "var(--neutral-on-background-strong)",
              opacity: isActive ? 1 : 0.3,
              transition: "opacity 0.2s",
            }}
          >
            <span
              style={{
                display: "block",
                width: isActive ? "20px" : "8px",
                height: "2px",
                background: "currentColor",
                transition: "width 0.25s ease",
                flexShrink: 0,
                borderRadius: "1px",
              }}
            />
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: isActive ? 600 : 400,
                whiteSpace: "nowrap",
                opacity: isActive ? 1 : 0,
                transition: "opacity 0.2s",
                letterSpacing: "0.02em",
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
