"use client";

import { useState } from "react";
import { Column, Row, Text, Heading, Badge, Line } from "@once-ui-system/core";
import Image from "next/image";
import React from "react";

function Cite({ n }: { n: number }) {
  return (
    <sup style={{ fontSize: "0.7em", opacity: 0.75, marginLeft: "1px" }}>[{n}]</sup>
  );
}

function CTMFFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: React.ReactNode;
}) {
  return (
    <Column gap="8" fillWidth marginTop="16" marginBottom="16">
      <Row
        fillWidth
        border="neutral-alpha-medium"
        radius="m"
        overflow="hidden"
      >
        <Image
          src={src}
          alt={alt}
          width={860}
          height={560}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Row>
      <Text variant="body-default-s" onBackground="neutral-weak" align="center">
        {caption}
      </Text>
    </Column>
  );
}

type CTMFItem = {
  id: number;
  name: string;
  phase: string;
  phaseColor: "brand" | "accent" | "warning" | "success" | "danger" | "neutral";
  summary: string;
  content: React.ReactNode;
};

const CTMFS: CTMFItem[] = [
  {
    id: 1,
    name: "Needs, Goals, and Objectives (NGOs)",
    phase: "Framing",
    phaseColor: "brand",
    summary: "A three-level framework that organises the design problem from broad stakeholder needs down to precise, testable objectives.",
    content: (
      <Column gap="m">
        <Column gap="4">
          <Text variant="body-default-m"><strong>What is it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            NGOs is a framing framework that organises the design problem into three levels of
            specificity. <em>Needs</em> are what stakeholders broadly want to be true. <em>Goals</em>{" "}
            interpret those needs into design categories. <em>Objectives</em> are precise, measurable
            criteria that guide testing.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How did I use it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            After conducting three stakeholder interviews — an EngSci student, a UofT facilities
            manager, and a backpack retailer — we built our NGO framework before entering
            divergence<Cite n={6} />. Our single need was a mechanism that reliably eliminates excess
            strap dangling without sacrificing adjustability. That cascaded into four goals: Comfort
            &amp; Safety, Usability, Ergonomics, and Reliability, each with specific objectives.
            Figure 10 shows the infographic we built to communicate this structure before ideation
            began. For example, our Usability goal produced a 6 cm excess-strap length
            objective<Cite n={6} />, traceable to measurements our team took of classroom chair
            wheels in Myhal, as shown in Figure 11.
          </Text>
        </Column>
        <CTMFFigure
          src="/images/praxis-i/ngos.png"
          alt="NGO infographic showing the need cascading to goals and objectives"
          caption="Figure 10: NGO infographic from our Praxis I design process, showing the need cascading into four goals and their associated measurable objectives."
        />
        <CTMFFigure
          src="/images/praxis-i/6cm.png"
          alt="NGO subsection documenting the 6 cm objective"
          caption={<>Figure 11: NGO subsection documenting the 6 cm excess strap length objective, traceable to direct measurements of classroom chair wheels in Myhal.</>}
        />
        <Column gap="4">
          <Text variant="body-default-m"><strong>Was it useful?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            This framework exposed a blind spot. Objectives we researched ourselves — shoulder
            pressure thresholds, torso accommodation ranges, tensile requirements — entered testing
            with solid backing. The 6 cm objective did not. We inherited it from the original design
            brief<Cite n={7} /> and accepted it without independent verification because it appeared
            to be grounded in first-hand research. At alpha release, we could not defend it. The
            lesson: NGOs are only as strong as the evidence beneath each objective, and I will treat
            every inherited objective as a hypothesis requiring my own verification before it locks
            into requirements.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How does it align with my design identity?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            NGOs reflect my community orientation, because every objective traces back to a named
            stakeholder. But the 6 cm failure added nuance: community orientation requires
            verification, not just assumption. Assuming we understood our stakeholders because
            someone else had spoken to them meant losing touch with the community while believing we
            understood them. This undermined the community-first approach I take to engineering
            design, and became a core lesson I carried forward — always maintain direct contact with
            the community so that your requirements reflect what they actually need.
          </Text>
        </Column>
      </Column>
    ),
  },
  {
    id: 2,
    name: "Biomimicry",
    phase: "Diverging",
    phaseColor: "accent",
    summary: "A diverging strategy that asks how natural organisms solve analogous problems, then translates those solutions into design concepts.",
    content: (
      <Column gap="m">
        <Column gap="4">
          <Text variant="body-default-m"><strong>What is it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Biomimicry is a diverging strategy that asks how natural organisms solve problems
            analogous to the one at hand, then translates those solutions into design concepts.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How did I use it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            After our first pairwise comparison, the Inside Bag Adjustment design was the strongest
            remaining concept, but it had a real weakness: adjustment happened through an internal
            zipper, making it slow and counterintuitive<Cite n={6} />. Rather than iterate on that
            prototype incrementally, we ran a biomimicry session asking how nature stores adjustable
            material compactly and accessibly. Two ideas emerged: a kangaroo's pouch and bird wings
            folded tightly against the body, both absorbing excess length internally.
          </Text>
        </Column>
        <CTMFFigure
          src="/images/praxis-i/biomimicry.png"
          alt="Biomimicry brainstorming session whiteboard"
          caption={<>Figure 12: Biomimicry diverging session whiteboard. The kangaroo pouch analogy directly produced the shoulder-side adjustment mechanism.</>}
        />
        <Column gap="4">
          <Text variant="body-default-m"><strong>Was it useful?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Our group did not carry forward most of the concepts that emerged from the biomimicry
            session, but it was nonetheless highly useful in expanding our solution space. For most
            of our prior designs, we had focused on solutions that seemed obvious to us — an approach
            ripe with anchoring bias, which constrains the solution space to what we have already
            seen. Biomimicry explicitly challenged that bias by introducing a completely different
            perspective: how analogous problems are solved in nature. This produced a more thorough
            exploration of the solution space, which is a worthwhile outcome regardless of how many
            individual ideas are carried forward.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How does it align with my design identity?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Biomimicry connects to my belief that the best ideas come from studying how problems
            have already been solved, even across different domains. My position statement discusses
            how engineers should use their skills and knowledge to help communities. Biomimicry
            extends that knowledge base to solutions developed in nature, adding more tools to our
            approach to problem-solving.
          </Text>
        </Column>
      </Column>
    ),
  },
  {
    id: 3,
    name: "Mathematical Prototype (MATLAB Simulation)",
    phase: "Representing",
    phaseColor: "success",
    summary: "A simulation-based prototype that tests physical behaviour through equations when physical testing is unsafe or impossible.",
    content: (
      <Column gap="m">
        <Column gap="4">
          <Text variant="body-default-m"><strong>What is it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            A mathematical prototype represents a design's physical behaviour through equations and
            parameters rather than physical materials. It allows a designer to test performance
            against requirements that would be dangerous or impossible to evaluate through a physical
            build.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How did my team use it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Our Ergonomics requirement stated that spinal deviation must remain below 1 cm from the
            user's midline — something we could not safely test on a human subject with a
            student-built strap. My teammate Mohammed Elsayed developed a MATLAB simulation that
            modelled the lumbar spine as an 18 cm beam-column using material constants referenced
            from vertebral bone literature<Cite n={8} />. By inputting each prototype's parameters,
            the simulation produced a 3D deviation field and a numeric angular deflection value, as
            shown in Figure 13.
          </Text>
        </Column>
        <CTMFFigure
          src="/images/praxis-i/matlab.png"
          alt="MATLAB simulation output showing 3D deviation field and performance metrics"
          caption="Figure 13: MATLAB simulation output. Input parameters appear on the left; the 3D deviation field and curvature profile occupy the centre; the Performance Metrics panel summarises key values for the prototype under evaluation."
        />
        <Column gap="4">
          <Text variant="body-default-m"><strong>Was it useful?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            The simulation challenged my assumption that physical tests are always superior. As
            first-year EngScis, we had no way to measure spinal deviation with our available
            resources. The simulation was the only means by which we could show that spinal
            deviation was nearly identical across the remaining prototypes — a finding that
            strengthened our design report by conclusively demonstrating how each prototype met the
            ergonomics requirement. This showed that simulation is a necessary complement to
            physical testing, not secondary to it.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How does it align with my design identity?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Mathematical prototypes connect to my commitment to continually revising my design
            identity, as I outlined in my original position statement. While I was initially
            skeptical of building a simulation, my teammate Mohammed persisted, ultimately providing
            us with key validation for our final report. This reinforced the value of collaboration
            — another core aspect of my design identity. It was precisely because a teammate brought
            a different perspective that we were able to construct a more rigorous and well-supported
            recommendation.
          </Text>
        </Column>
      </Column>
    ),
  },
];

function CTMFCard({ ctmf }: { ctmf: CTMFItem }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const phaseStyle: Record<string, string> = {
    brand: "var(--brand-background-medium)",
    accent: "var(--accent-background-medium)",
    success: "var(--success-background-medium)",
    warning: "var(--warning-background-medium)",
    danger: "var(--danger-background-medium)",
    neutral: "var(--neutral-background-medium)",
  };

  const phaseTextStyle: Record<string, string> = {
    brand: "var(--brand-on-background-strong)",
    accent: "var(--accent-on-background-strong)",
    success: "var(--success-on-background-strong)",
    warning: "var(--warning-on-background-strong)",
    danger: "var(--danger-on-background-strong)",
    neutral: "var(--neutral-on-background-strong)",
  };

  return (
    <Column
      border="neutral-alpha-medium"
      radius="m"
      overflow="hidden"
      style={{ cursor: "pointer" }}
    >
      {/* Card header — always visible */}
      <div
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "20px",
          gap: "16px",
          boxSizing: "border-box",
          userSelect: "none",
          background: open || hovered ? "var(--neutral-background-weak)" : "transparent",
          transition: "background 0.2s",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "2px 10px",
            borderRadius: "99px",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            background: phaseStyle[ctmf.phaseColor],
            color: phaseTextStyle[ctmf.phaseColor],
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {ctmf.phase}
        </span>
        <Column flex={1} gap="2">
          <Text variant="heading-strong-m">{ctmf.name}</Text>
          <div style={{
            overflow: "hidden",
            maxHeight: open ? "0px" : "60px",
            opacity: open ? 0 : 1,
            transition: "max-height 0.25s ease, opacity 0.18s ease",
          }}>
            <Text variant="body-default-s" onBackground="neutral-weak">
              {ctmf.summary}
            </Text>
          </div>
        </Column>
        <span
          style={{
            fontSize: "1rem",
            opacity: 0.5,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
            flexShrink: 0,
          }}
        >
          ▾
        </span>
      </div>

      {/* Expanded content */}
      <div style={{
        overflow: "hidden",
        maxHeight: open ? "5000px" : "0px",
        transition: open ? "max-height 0.45s ease" : "max-height 0.22s ease",
      }}>
        <Line />
        <Column padding="20" gap="m">
          {ctmf.content}
        </Column>
      </div>
    </Column>
  );
}

export default function CTMFAccordion() {
  return (
    <Column gap="12" fillWidth>
      {CTMFS.map((ctmf, i) => (
        <div key={ctmf.id} id={i === 0 ? "tour-ctmf-first" : undefined}>
          <CTMFCard ctmf={ctmf} />
        </div>
      ))}
    </Column>
  );
}
