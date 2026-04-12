"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 40;
          const duration = 1000;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            // Ease-out: fast at start, slow at end
            const progress = 1 - Math.pow(1 - step / steps, 3);
            setCount(Math.round(progress * target));
            if (step >= steps) {
              setCount(target);
              clearInterval(timer);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ textAlign: "center", flex: 1 }}>
      <div
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {count}
      </div>
      <div
        style={{
          fontSize: "0.75rem",
          opacity: 0.5,
          marginTop: "6px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        padding: "32px 0 8px",
        gap: "16px",
      }}
    >
      <Counter target={3} label="Projects" />
      <div style={{ width: "1px", background: "var(--neutral-alpha-medium)", alignSelf: "stretch" }} />
      <Counter target={9} label="CTMFs" />
      <div style={{ width: "1px", background: "var(--neutral-alpha-medium)", alignSelf: "stretch" }} />
      <Counter target={1} label="Year" />
    </div>
  );
}
