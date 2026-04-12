"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Column, Row, Text, Heading, Button, Line } from "@once-ui-system/core";

const TOUR_KEY = "portfolio-tour-seen";

interface Step {
  page: string;
  title: string;
  body: string;
  targetId?: string;
  openCtmf?: boolean;
}

const STEPS: Step[] = [
  {
    page: "/",
    title: "Welcome to Joti's Portfolio",
    body: "This portfolio is the final project for Praxis II — it showcases three first-year engineering design projects and a position statement on how my approach to engineering design evolved.",
  },
  {
    page: "/",
    title: "Finding Your Way",
    body: "The navigation bar at the top links to every section. You can also click any project card on this page to jump straight in.",
    targetId: "tour-nav",
  },
  {
    page: "/praxis-i",
    title: "Project Pages",
    body: "Each project page starts with a written summary and key figures. This is the Praxis I page — scroll down to see the full design story.",
    targetId: "tour-page-top",
  },
  {
    page: "/praxis-i",
    title: "CTMFs — Design Tools & Frameworks",
    body: "At the bottom of every project page you'll find CTMFs. These are the design tools I used and reflect on. Click any card to expand it.",
    targetId: "tour-ctmf-section",
    openCtmf: true,
  },
];

type Rect = { top: number; left: number; width: number; height: number };

export default function Tour() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [navigating, setNavigating] = useState(false);
  const [rect, setRect] = useState<Rect | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!localStorage.getItem(TOUR_KEY)) setVisible(true);
  }, []);

  const measureTarget = useCallback(async (s: Step) => {
    if (!s.targetId) { setRect(null); return; }

    // Poll for the element to appear in DOM
    let el: HTMLElement | null = null;
    for (let i = 0; i < 30; i++) {
      el = document.getElementById(s.targetId);
      if (el) break;
      await new Promise(r => setTimeout(r, 100));
    }
    if (!el) { setRect(null); return; }

    // Open first CTMF if requested
    if (s.openCtmf) {
      const firstCard = document.getElementById("tour-ctmf-first");
      const header = firstCard?.firstElementChild as HTMLElement | null;
      if (header) {
        header.click();
        await new Promise(r => setTimeout(r, 800));
        // Re-query after expand
        el = document.getElementById(s.targetId) ?? el;
      }
    }

    el.scrollIntoView({ behavior: "smooth", block: "center" });
    await new Promise(r => setTimeout(r, 600));

    const r = el.getBoundingClientRect();
    setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
  }, []);

  // Apply spotlight when step or pathname changes (and we're on the right page)
  useEffect(() => {
    if (!visible) return;
    const s = STEPS[step];
    if (pathname !== s.page) return;
    measureTarget(s);
  }, [step, pathname, visible, measureTarget]);

  // Clear navigating flag when we arrive at the target page
  useEffect(() => {
    if (navigating && STEPS[step] && pathname === STEPS[step].page) {
      setNavigating(false);
    }
  }, [pathname, navigating, step]);

  // Re-measure on scroll/resize so the highlight tracks the element
  useEffect(() => {
    if (!rect || !STEPS[step]?.targetId) return;
    const targetId = STEPS[step].targetId!;
    const update = () => {
      const el = document.getElementById(targetId);
      if (el) {
        const r = el.getBoundingClientRect();
        setRect({ top: r.top, left: r.left, width: r.width, height: r.height });
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [rect, step]);

  function dismiss() {
    localStorage.setItem(TOUR_KEY, "1");
    setVisible(false);
    setStep(0);
    setRect(null);
    setNavigating(false);
  }

  function next() {
    if (step >= STEPS.length - 1) { dismiss(); return; }
    const nextStep = STEPS[step + 1];
    setRect(null);
    setStep(step + 1);
    if (nextStep.page !== pathname) {
      setNavigating(true);
      router.push(nextStep.page);
    }
  }

  // Floating replay button
  if (!visible) {
    return (
      <button
        onClick={() => { setStep(0); setRect(null); setVisible(true); }}
        title="Take the tour"
        style={{
          position: "fixed", bottom: "80px", right: "24px",
          width: "40px", height: "40px", borderRadius: "50%",
          border: "1px solid var(--neutral-alpha-medium)",
          background: "var(--page-background)",
          color: "var(--neutral-on-background-strong)",
          fontSize: "1rem", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 100, boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        ?
      </button>
    );
  }

  const current = STEPS[step];
  const pad = 10;

  // Shared modal body
  const modalBody = (
    <>
      <div style={{ height: "3px", background: "var(--neutral-alpha-weak)" }}>
        <div style={{
          height: "100%",
          width: `${((step + 1) / STEPS.length) * 100}%`,
          background: "var(--brand-solid-strong)",
          transition: "width 0.3s ease",
        }} />
      </div>
      <Column padding="28" gap="16">
        <Text variant="body-default-s" onBackground="neutral-weak">
          Step {step + 1} of {STEPS.length}
        </Text>
        <Heading as="h2" variant="heading-strong-xl">{current.title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">{current.body}</Text>
        <Line />
        <Row horizontal="between" vertical="center">
          <Button variant="tertiary" size="s" onClick={dismiss}>Skip</Button>
          <Button variant="primary" size="m" onClick={next} arrowIcon={step < STEPS.length - 1}>
            {navigating ? "Going there…" : step < STEPS.length - 1 ? "Next" : "Let's go!"}
          </Button>
        </Row>
      </Column>
    </>
  );

  // Navigating — simple loading overlay
  if (navigating) {
    return (
      <div style={{
        position: "fixed", inset: 0,
        background: "rgba(0,0,0,0.55)", zIndex: 500,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          background: "var(--page-background)",
          borderRadius: "var(--radius-l)",
          border: "1px solid var(--neutral-alpha-medium)",
          padding: "32px 48px",
        }}>
          <Text variant="heading-strong-m">Navigating…</Text>
        </div>
      </div>
    );
  }

  // No spotlight target — centered modal
  if (!rect) {
    return (
      <>
        <div
          onClick={dismiss}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 400 }}
        />
        <div style={{
          position: "fixed", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(480px, calc(100vw - 32px))",
          zIndex: 401,
          background: "var(--page-background)",
          borderRadius: "var(--radius-l)",
          border: "1px solid var(--neutral-alpha-medium)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}>
          {modalBody}
        </div>
      </>
    );
  }

  // Spotlight mode
  const spotTop = rect.top - pad;
  const spotLeft = rect.left - pad;
  const spotW = rect.width + pad * 2;
  const spotH = rect.height + pad * 2;

  const vw = typeof window !== "undefined" ? window.innerWidth : 1440;
  const vh = typeof window !== "undefined" ? window.innerHeight : 900;
  const tooltipW = Math.min(480, vw - 32);
  const tooltipLeft = Math.max(16, Math.min(
    rect.left + rect.width / 2 - tooltipW / 2,
    vw - tooltipW - 16,
  ));

  // Show tooltip below if the spotlight is in the upper 55% of the viewport
  const showBelow = rect.top + rect.height / 2 < vh * 0.55;

  return (
    <>
      {/* Spotlight ring — box-shadow cuts a hole in the dark overlay */}
      <div style={{
        position: "fixed",
        top: spotTop, left: spotLeft,
        width: spotW, height: spotH,
        borderRadius: "10px",
        boxShadow: "0 0 0 9999px rgba(0,0,0,0.65)",
        border: "2px solid var(--brand-solid-strong)",
        zIndex: 400,
        pointerEvents: "none",
        transition: "top 0.3s ease, left 0.3s ease, width 0.3s ease, height 0.3s ease",
      }} />

      {/* Tooltip card */}
      <div style={{
        position: "fixed",
        left: tooltipLeft,
        width: tooltipW,
        zIndex: 401,
        background: "var(--page-background)",
        borderRadius: "var(--radius-l)",
        border: "1px solid var(--neutral-alpha-medium)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        overflow: "hidden",
        ...(showBelow
          ? { top: spotTop + spotH + 12 }
          : { top: spotTop - 12, transform: "translateY(-100%)" }
        ),
      }}>
        {modalBody}
      </div>
    </>
  );
}
