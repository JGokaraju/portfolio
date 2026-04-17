"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface FigureProps {
  src: string;
  alt: string;
  caption: React.ReactNode;
}

export default function Figure({ src, alt, caption }: FigureProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div style={{ marginTop: "24px", marginBottom: "24px", width: "100%" }}>
        <div
          onClick={() => setOpen(true)}
          style={{
            border: "1px solid var(--neutral-alpha-medium)",
            borderRadius: "12px",
            overflow: "hidden",
            cursor: "zoom-in",
            position: "relative",
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={900}
            height={600}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              background: "rgba(0,0,0,0.55)",
              borderRadius: "6px",
              padding: "4px 8px",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.9)",
              pointerEvents: "none",
              letterSpacing: "0.03em",
            }}
          >
            ⊕ expand
          </div>
        </div>
        <p
          style={{
            marginTop: "8px",
            marginBottom: 0,
            fontSize: "0.8rem",
            color: "var(--neutral-on-background-weak)",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          {caption}
        </p>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 2000,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            cursor: "zoom-out",
            animation: "lightboxFadeIn 0.18s ease",
          }}
        >
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "82vh",
              objectFit: "contain",
              borderRadius: "8px",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
              cursor: "default",
            }}
          />
          <p
            style={{
              marginTop: "14px",
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.78rem",
              textAlign: "center",
              maxWidth: "640px",
              lineHeight: 1.5,
            }}
          >
            {caption}
          </p>
          <button
            onClick={(e) => { e.stopPropagation(); setOpen(false); }}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              color: "white",
              fontSize: "1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
