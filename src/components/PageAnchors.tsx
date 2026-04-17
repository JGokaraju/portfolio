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

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const activeLabel = anchors.find((a) => a.id === active)?.label ?? "";

  return (
    <>
      {/* Desktop: fixed right-side dots nav */}
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
              onClick={() => scrollTo(id)}
              title={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                color: isActive
                  ? "var(--brand-solid-strong)"
                  : "var(--neutral-on-background-strong)",
                opacity: isActive ? 1 : 0.35,
                transition: "opacity 0.2s, color 0.2s",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: isActive ? "22px" : "8px",
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
                  fontWeight: isActive ? 700 : 400,
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

      {/* Mobile: floating pill at bottom center */}
      <div
        className="page-anchors-mobile"
        style={{
          position: "fixed",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: "0",
          background: "var(--neutral-background-strong)",
          border: "1px solid var(--neutral-alpha-medium)",
          borderRadius: "99px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        }}
      >
        <button
          onClick={() => {
            const idx = anchors.findIndex((a) => a.id === active);
            if (idx > 0) scrollTo(anchors[idx - 1].id);
          }}
          style={{
            background: "none",
            border: "none",
            padding: "10px 14px",
            cursor: "pointer",
            color: "var(--neutral-on-background-strong)",
            opacity: anchors.findIndex((a) => a.id === active) > 0 ? 0.7 : 0.2,
            fontSize: "0.75rem",
          }}
        >
          ‹
        </button>
        <select
          value={active}
          onChange={(e) => {
            setActive(e.target.value);
            scrollTo(e.target.value);
          }}
          style={{
            background: "none",
            border: "none",
            color: "var(--neutral-on-background-strong)",
            fontSize: "0.75rem",
            fontWeight: 600,
            cursor: "pointer",
            outline: "none",
            padding: "10px 4px",
            maxWidth: "130px",
            textAlign: "center",
          }}
        >
          {anchors.map(({ id, label }) => (
            <option key={id} value={id}>{label}</option>
          ))}
        </select>
        <button
          onClick={() => {
            const idx = anchors.findIndex((a) => a.id === active);
            if (idx < anchors.length - 1) scrollTo(anchors[idx + 1].id);
          }}
          style={{
            background: "none",
            border: "none",
            padding: "10px 14px",
            cursor: "pointer",
            color: "var(--neutral-on-background-strong)",
            opacity: anchors.findIndex((a) => a.id === active) < anchors.length - 1 ? 0.7 : 0.2,
            fontSize: "0.75rem",
          }}
        >
          ›
        </button>
      </div>
    </>
  );
}
