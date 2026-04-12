"use client";

import { useEffect, useState } from "react";
import { Heading, Text } from "@once-ui-system/core";

interface HeroSplashProps {
  label: string;
  title: string;
  subtitle: string;
  team?: string;
}

export default function HeroSplash({ label, title, subtitle, team }: HeroSplashProps) {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [displayedSubtitle, setDisplayedSubtitle] = useState("");
  const [phase, setPhase] = useState<"title" | "subtitle" | "done">("title");
  const [showRest, setShowRest] = useState(false);

  // Type out the title
  useEffect(() => {
    if (phase !== "title") return;
    if (displayedTitle.length < title.length) {
      const t = setTimeout(() => {
        setDisplayedTitle(title.slice(0, displayedTitle.length + 1));
      }, 55);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setPhase("subtitle"), 180);
      return () => clearTimeout(t);
    }
  }, [displayedTitle, phase, title]);

  // Type out the subtitle
  useEffect(() => {
    if (phase !== "subtitle") return;
    if (displayedSubtitle.length < subtitle.length) {
      const t = setTimeout(() => {
        setDisplayedSubtitle(subtitle.slice(0, displayedSubtitle.length + 1));
      }, 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setPhase("done");
        setShowRest(true);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [displayedSubtitle, phase, subtitle]);

  return (
    <>
      <style>{`
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typing-cursor {
          display: inline-block;
          width: 3px;
          background: currentColor;
          margin-left: 3px;
          vertical-align: baseline;
          animation: cursor-blink 0.75s step-end infinite;
        }
        .typing-cursor-thin {
          display: inline-block;
          width: 2px;
          background: currentColor;
          margin-left: 2px;
          vertical-align: baseline;
          animation: cursor-blink 0.75s step-end infinite;
        }
      `}</style>

      <div
        style={{
          minHeight: "calc(100vh - 160px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "56px",
          paddingTop: "80px",
        }}
      >
        {/* Label line fades in immediately */}
        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
          style={{ letterSpacing: "0.05em", marginBottom: "16px", opacity: 1 }}
        >
          {label}
        </Text>

        {/* Title — types out */}
        <Heading
          variant="display-strong-l"
          style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", lineHeight: "1.06" }}
        >
          {displayedTitle}
          {phase === "title" && displayedTitle.length > 0 && (
            <span className="typing-cursor" style={{ height: "0.85em" }} />
          )}
        </Heading>

        {/* Subtitle — types out after title finishes */}
        <Heading
          as="h2"
          variant="display-default-m"
          onBackground="neutral-weak"
          style={{ marginTop: "10px", minHeight: "1.5em" }}
        >
          {displayedSubtitle}
          {phase === "subtitle" && displayedSubtitle.length > 0 && (
            <span className="typing-cursor-thin" style={{ height: "0.7em" }} />
          )}
        </Heading>

        {/* Team + scroll hint fade in after typing finishes */}
        {team && (
          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
            style={{
              marginTop: "12px",
              opacity: showRest ? 1 : 0,
              transform: showRest ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            {team}
          </Text>
        )}

        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
          style={{
            marginTop: "40px",
            opacity: showRest ? 0.45 : 0,
            transform: showRest ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
          }}
        >
          ↓ scroll to explore
        </Text>
      </div>
    </>
  );
}
