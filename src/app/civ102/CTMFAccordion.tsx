"use client";

import { useState } from "react";
import { Column, Row, Text, Line } from "@once-ui-system/core";
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
      <Row fillWidth border="neutral-alpha-medium" radius="m" overflow="hidden">
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
  phaseColor: string;
  summary: string;
  content: React.ReactNode;
};

const CTMFS: CTMFItem[] = [
  {
    id: 1,
    name: "Measurement Matrix",
    phase: "Converging",
    phaseColor: "warning",
    summary: "A table of competing designs vs. quantitative requirements that makes the weakest link visible at each iteration.",
    content: (
      <Column gap="m">
        <Column gap="4">
          <Text variant="body-default-m"><strong>What is it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            A measurement matrix records the key quantitative values of competing designs relative
            to the requirements and evaluation criteria of a problem. Each row is a design concept
            and each column is a metric. The matrix makes it possible to compare designs
            systematically and identify which concept best satisfies the requirements. This approach
            is particularly well-suited to CIV102, where the primary requirements — factors of
            safety — are fully quantifiable.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How did I use it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            A selection of our design iterations and their corresponding factors of safety across
            each failure mode are shown in Figure 19. Red cells indicate the governing failure mode
            for a given design. The goal at each iteration was to maximise the lowest factor of
            safety across all eight modes. The measurement matrix greatly assisted in this process.
            In Design 0, plate buckling was the governing failure mode, which led directly to the
            conclusion that we needed to move towards a design with an increased top flange
            thickness. In Design 3, the H-beam configuration was evaluated and found not to
            meaningfully improve the factor of safety against shear stress failure. This motivated
            our shift to a tube design with a double bottom plate. This pattern repeated across all
            our iterations: the matrix identified the weakest link and directed us towards improved
            designs.
          </Text>
        </Column>
        <CTMFFigure
          src="/images/civ102/measurement-matrix.png"
          alt="Measurement matrix showing factors of safety across eight failure modes"
          caption={<>Figure 19: Measurement matrix showing factors of safety across eight failure modes for each bridge design iteration. Red cells indicate the governing (lowest) factor of safety for that design. The "Conclusion" column records the design decision taken after each evaluation. Designs 1–4 were calculated for the entire span; later designs were calculated for specific sub-spans once the variable cross-section strategy was adopted.</>}
        />
        <Column gap="4">
          <Text variant="body-default-m"><strong>Was it useful?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Measurement matrices are effective at identifying the best solution according to
            quantifiable metrics. However, they fall short when qualitative reasoning is required.
            According to our matrix, Design 4 — the tube design with a double bottom plate — had
            the largest governing factor of safety and was therefore the strongest numerical
            performer. What the matrix could not capture was that building Design 4 would consume
            nearly every square millimetre of available matboard, leaving no margin for cutting
            error or rework. This practical constraint was invisible to the matrix, and Design 4 was
            rejected despite its strong numerical performance. The lesson is that measurement
            matrices should motivate engineering arguments, but they are not sufficient to recommend
            entire designs on their own.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How does it align with my design identity?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            My position centres on community-oriented engineering. A measurement matrix captures
            what can be quantified but is blind to everything that cannot. In Praxis II, Professor
            Carrick introduced the PlayPump as a case study<Cite n={10} />: a device designed to
            pump water in rural sub-Saharan Africa by having children play on a roundabout connected
            to a pump, as shown in Figure 20. On any engineering measurement matrix, it would have
            scored well — the mechanical principle was sound, the energy source was free, and the
            infrastructure cost was manageable. In practice, however, children did not use it as
            expected, and adult women were left manually pushing the roundabout to meet the
            village's water demand, making it far more laborious than a conventional hand pump, as
            shown in Figure 21. As captured in Figure 22, this failure stemmed from the fact that
            users were not properly consulted before installation. The measurement matrix modelled
            the pump, but it could not model the community. This is precisely the gap my position
            tries to address: a rigorous measurement matrix may produce the best theoretical design,
            but real engineering requires community considerations that no matrix can fully account
            for.
          </Text>
        </Column>
        <CTMFFigure
          src="/images/civ102/playpump-theory-reality.png"
          alt="The PlayPump as intended and in practice"
          caption="Figure 20 & 21: The PlayPump as intended (children playing on a roundabout pumping water) vs. in practice (adult women forced to manually push the roundabout to meet demand — far more laborious than a conventional hand pump)."
        />
        <CTMFFigure
          src="/images/civ102/playpump-failure.png"
          alt="Key failure reason for the PlayPump"
          caption={<>Figure 22: Point 8 from a CIV102 course slide listing reasons for the PlayPump's failure: "Users were not properly consulted before installation." This encapsulates the gap between quantitative design performance and community-oriented design validity.</>}
        />
      </Column>
    ),
  },
  {
    id: 2,
    name: "Challenging Assumptions",
    phase: "Diverging",
    phaseColor: "accent",
    summary: "A diverging technique that surfaces unstated constraints and asks whether each one is actually necessary, unlocking new solution spaces.",
    content: (
      <Column gap="m">
        <Column gap="4">
          <Text variant="body-default-m"><strong>What is it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Challenging assumptions is a diverging technique that involves identifying the unstated
            constraints embedded in a design concept and asking whether each one is actually
            necessary. Questioning them deliberately can unlock new and useful solution spaces.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How did I use it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            The first few designs my team developed all involved optimising a bridge with a thick
            bottom plate, as shown in Figure 23. However, even our most optimised designs still
            exceeded the matboard budget by approximately 40,000 mm² while producing disappointing
            factors of safety. The implicit assumption across all of these original designs was that
            a bridge must have a bottom plate. Questioning this produced the Pi-beam concept, shown
            in Figure 24: removing the bottom plate raised the centroidal axis significantly,
            reducing compressive stress at the top flange and improving performance under both
            tension and compression. This challenged assumption produced the central span's final
            design.
          </Text>
        </Column>
        <CTMFFigure
          src="/images/civ102/thick-bottom-plate.png"
          alt="Closed box beam designs with a thick bottom plate"
          caption="Figure 23: Cross-sectional sketch of the closed box beam designs developed in early iterations, featuring a thick bottom plate. Annotated properties include centroidal axis height, second moment of area, and top flange thickness."
        />
        <CTMFFigure
          src="/images/civ102/pi-beam.png"
          alt="Pi-beam concept developed after challenging the bottom-plate assumption"
          caption="Figure 24: Cross-sectional sketch of the Pi-beam concept developed after challenging the bottom-plate assumption. Removing the bottom plate raises the centroidal axis, reducing compressive stress at the top flange and improving performance under the governing failure mode."
        />
        <Column gap="4">
          <Text variant="body-default-m"><strong>Was it useful?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            The Pi-beam simultaneously reduced material consumption and improved the central span's
            compression strength — the failure mode that ultimately governed our final bridge at
            load testing. Had we not challenged the bottom-plate assumption, our bridge would have
            failed under a considerably lower load. Beyond the structural benefit, the tool made our
            design process more rigorous: surfacing and documenting our assumptions gave us a
            clearer basis for the decisions recorded in our final design report.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How does it align with my design identity?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Challenging assumptions serves the same function in my design process that collaboration
            does: both break me out of the biases my own perspective imposes on the solution space.
            The reason I value collaboration is precisely because diverse perspectives expose
            constraints I would never question on my own. The challenging assumptions tool does the
            same thing independently — it forces a deliberate interrogation of what I have taken for
            granted. In that sense, it is a direct extension of my engineering position, which holds
            that the best design decisions are verified, not inherited.
          </Text>
        </Column>
      </Column>
    ),
  },
  {
    id: 3,
    name: "Drawings",
    phase: "Representing",
    phaseColor: "success",
    summary: "Annotated cross-sectional sketches that communicate geometry and change visually, making each iteration immediately legible to the whole team.",
    content: (
      <Column gap="m">
        <Column gap="4">
          <Text variant="body-default-m"><strong>What is it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Drawings are visual representations of a design that communicate geometry, structure,
            and change in a way that text alone cannot. In engineering, they are typically annotated
            with dimensions and material properties, and serve as a primary medium for iterating on
            physical form.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How did I use it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            For every iteration of our bridge design, my teammate Tristan and I drew a
            cross-sectional diagram showing the exact geometry of that iteration — layer thicknesses,
            web heights, centroidal axis position, and second moment of area. Because Design 0 was
            provided as a reference, each subsequent drawing made visible exactly what had changed:
            an added flange layer, a removed bottom plate, extended webs. This made it
            straightforward to reason intuitively about why a particular factor of safety shifted —
            if the centroidal axis moved up, I could see it immediately in the drawing and connect
            it directly to reduced compressive stress. Without the drawing, the same information
            expressed as a list of numerical parameters would have required mentally reconstructing
            the geometry before any analysis could begin.
          </Text>
        </Column>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Figure 25: Cross-sectional drawings for a selection of bridge design iterations, showing
          the progression from the closed box beam designs (Designs 4 and 8) to the Pi-beam designs
          (Designs 6 and 11). Each sketch is annotated with layer thicknesses, centroidal axis
          height, second moment of area, and first moment of area values used in factor of safety
          calculations.
        </Text>
        <Row gap="8" fillWidth wrap>
          {[
            { src: "/images/civ102/design-4.png", label: "Design 4" },
            { src: "/images/civ102/design-8.png", label: "Design 8" },
            { src: "/images/civ102/design-6.png", label: "Design 6" },
            { src: "/images/civ102/design-11.png", label: "Design 11" },
          ].map(({ src, label }) => (
            <Column key={label} gap="4" style={{ flex: "1 1 calc(50% - 4px)", minWidth: "140px" }}>
              <Row border="neutral-alpha-medium" radius="m" overflow="hidden">
                <Image
                  src={src}
                  alt={label}
                  width={430}
                  height={320}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </Row>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                {label}
              </Text>
            </Column>
          ))}
        </Row>
        <Column gap="4">
          <Text variant="body-default-m"><strong>Was it useful?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Drawings were the backbone of day-to-day iteration. They were simple to produce, easy
            to annotate, and immediately legible to all three teammates, providing an effective
            means of documenting progress across eleven design iterations. One limitation is that
            drawings represent a single static cross-section well but say nothing about how forces
            behave across the span — for that, we needed the shear force and bending moment
            envelopes. The most effective use of drawings in this project was pairing them with
            computational outputs: the drawing showed <em>what</em> the design looked like; the
            envelope showed <em>where</em> that design needed to perform. I will continue using
            drawings as a first step in any design iteration because they communicate the core of
            an idea clearly and can then be supplemented with more formal analysis.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How does it align with my design identity?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            This CTMF challenged an implicit bias I carried into the project. In my original
            position statement, I describe my early exposure to engineering through my father's work
            as an electrical engineer, whose iterations involved thousands of lines of code
            simulating problems in power delivery. Against that reference point, hand drawings
            seemed trivial. But they proved extremely effective in our project, helping us quickly
            communicate hard-to-grasp geometric ideas between teammates using simple sketches. This
            showed me that formality is not a prerequisite for good engineering: a successful
            representation can be as simple or as complex as the situation demands. In my position
            statement, I describe how part of what made me believe I could be an engineer was
            recognising that my father's specific form of technical excellence was not the only
            valid one. This project reinforced that belief further.
          </Text>
        </Column>
      </Column>
    ),
  },
];

function CTMFCard({ ctmf }: { ctmf: CTMFItem }) {
  const [open, setOpen] = useState(false);

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
    <Column border="neutral-alpha-medium" radius="m" overflow="hidden" style={{ cursor: "pointer" }}>
      <Row
        fillWidth
        padding="20"
        gap="16"
        vertical="center"
        onClick={() => setOpen(!open)}
        style={{
          userSelect: "none",
          background: open ? "var(--neutral-background-weak)" : "transparent",
          transition: "background 0.2s",
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
          {!open && (
            <Text variant="body-default-s" onBackground="neutral-weak">
              {ctmf.summary}
            </Text>
          )}
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
      </Row>
      {open && (
        <>
          <Line />
          <Column padding="20" gap="m">
            {ctmf.content}
          </Column>
        </>
      )}
    </Column>
  );
}

export default function CTMFAccordion() {
  return (
    <Column gap="12" fillWidth>
      {CTMFS.map((ctmf) => (
        <CTMFCard key={ctmf.id} ctmf={ctmf} />
      ))}
    </Column>
  );
}
