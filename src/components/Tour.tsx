"use client";

import { useEffect, useState } from "react";
import { Column, Row, Text, Heading, Button, Line } from "@once-ui-system/core";

const TOUR_KEY = "portfolio-tour-seen";

const steps = [
  {
    title: "Welcome to Joti's Portfolio",
    body: "This portfolio is the final project for Praxis II. It showcases three engineering design projects I completed in my first year of EngSci, and a position statement capturing how my approach to design evolved.",
    hint: null,
  },
  {
    title: "Navigating the Portfolio",
    body: "Use the navigation bar at the top to jump between sections, or click any of the project cards on this page. The sections are:",
    hint: (
      <Column gap="8" paddingTop="4">
        {[
          { icon: "📄", label: "Position Statement", desc: "How my understanding of engineering design evolved" },
          { icon: "🎒", label: "Praxis I", desc: "Backpack strap snagging — ESC101" },
          { icon: "🌉", label: "CIV102", desc: "Matboard bridge — CIV102" },
          { icon: "🔧", label: "Praxis II", desc: "ScrewDock screw-sorting system — ESC102" },
          { icon: "✅", label: "Conclusion", desc: "Reflections on a year of design" },
        ].map(({ icon, label, desc }) => (
          <Row key={label} gap="12" vertical="center">
            <span style={{ fontSize: "1rem", flexShrink: 0 }}>{icon}</span>
            <Text variant="body-default-s">
              <strong>{label}</strong> — {desc}
            </Text>
          </Row>
        ))}
      </Column>
    ),
  },
  {
    title: "Exploring CTMFs",
    body: "Each project page ends with a CTMFs section — Concepts, Tools, Models & Frameworks. These are the design tools I used and reflect on.",
    hint: (
      <Row
        gap="16"
        vertical="center"
        padding="16"
        border="neutral-alpha-medium"
        radius="m"
        marginTop="8"
        style={{ background: "var(--neutral-background-weak)" }}
      >
        <Column flex={1} gap="4">
          <Row gap="8" vertical="center">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "2px 10px",
                borderRadius: "99px",
                fontSize: "0.72rem",
                fontWeight: 600,
                background: "var(--brand-background-medium)",
                color: "var(--brand-on-background-strong)",
              }}
            >
              Framing
            </span>
            <Text variant="heading-strong-s">Example CTMF</Text>
          </Row>
          <Text variant="body-default-s" onBackground="neutral-weak">
            A brief description of the tool appears here when collapsed.
          </Text>
        </Column>
        <span style={{ fontSize: "1rem", opacity: 0.5 }}>▾</span>
      </Row>
    ),
  },
];

export default function Tour() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem(TOUR_KEY)) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem(TOUR_KEY, "1");
    setVisible(false);
    setStep(0);
  }

  function next() {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      dismiss();
    }
  }

  if (!visible) {
    return (
      <button
        onClick={() => { setStep(0); setVisible(true); }}
        title="Take the tour"
        style={{
          position: "fixed",
          bottom: "80px",
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
          zIndex: 100,
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        ?
      </button>
    );
  }

  const current = steps[step];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          zIndex: 200,
        }}
      />

      {/* Modal */}
      <Column
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(480px, calc(100vw - 32px))",
          zIndex: 201,
          background: "var(--page-background)",
          borderRadius: "var(--radius-l)",
          border: "1px solid var(--neutral-alpha-medium)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          overflow: "hidden",
        }}
      >
        {/* Progress bar */}
        <div style={{ height: "3px", background: "var(--neutral-alpha-weak)" }}>
          <div
            style={{
              height: "100%",
              width: `${((step + 1) / steps.length) * 100}%`,
              background: "var(--brand-solid-strong)",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        <Column padding="32" gap="16">
          {/* Step indicator */}
          <Text variant="body-default-s" onBackground="neutral-weak">
            Step {step + 1} of {steps.length}
          </Text>

          <Heading as="h2" variant="heading-strong-xl">
            {current.title}
          </Heading>

          <Text variant="body-default-l" onBackground="neutral-weak">
            {current.body}
          </Text>

          {current.hint && current.hint}

          <Line />

          <Row horizontal="between" vertical="center">
            <Button variant="tertiary" size="s" onClick={dismiss}>
              Skip tour
            </Button>
            <Button variant="primary" size="m" onClick={next} arrowIcon={step < steps.length - 1}>
              {step < steps.length - 1 ? "Next" : "Let's go!"}
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
}
