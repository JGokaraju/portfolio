"use client";

import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    // double rAF forces browser to register initial state before transitioning
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = "opacity 0.32s ease, transform 0.32s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div ref={ref} style={{ width: "100%" }}>
      {children}
    </div>
  );
}
