"use client";

import { useState } from "react";
import { Column, Row, Text, Line } from "@once-ui-system/core";
import Image from "next/image";
import React from "react";

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
    name: "Poster Design",
    phase: "Representing",
    phaseColor: "success",
    summary: "Engineering communication posters that rely on graphics, large text, and a clear eye path to deliver a focused message to a public audience.",
    content: (
      <Column gap="m">
        <Column gap="4">
          <Text variant="body-default-m"><strong>What is it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Praxis II introduces a style of poster design developed specifically for engineering
            communication. Posters are intended to rely heavily on graphics for explanation, use
            large text to guide the reader through key topics rather than exhaustively listing
            information, and be laid out in a way that supports a natural eye path. As a stand-alone
            piece, the poster is meant to deliver a clear, focused message about the project.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How did I use it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            The poster I designed for the Praxis II Showcase is shown in Figure 33. It summarized
            the key details of our project with heavy reliance on visuals and minimal text. The
            reader begins with background on our opportunity and clear design objectives. A large
            central CAD model of the ScrewDock System sits at the centre of the poster, with labels
            identifying each component. The eye path concludes on the right side, where diagrams
            paired with one-sentence descriptions cover the main implementation details. I also
            incorporated a creative title with the concept name and a supporting tagline
            communicating the poster's main message:{" "}
            <em>Sort Robertson Screws With <strong>ScrewDock</strong> — A Two-Stage Sorting Platform</em>.
            During the Showcase presentation, we used the poster as a visual aid.
          </Text>
        </Column>
        <CTMFFigure
          src="/images/praxis-ii/screwdock-poster.png"
          alt="ScrewDock poster designed for the Praxis II Showcase"
          caption="Figure 33: The ScrewDock poster designed for the Praxis II Showcase. The layout follows a left-to-right eye path: background and objectives on the left, a labelled central CAD model, and implementation diagrams on the right."
        />
        <Column gap="4">
          <Text variant="body-default-m"><strong>Was it useful?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            The poster was effective both in the context of the Praxis II presentation and as a
            general communication tool for a public audience.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            During our presentation, the large central visual gave assessors a clear reference point
            for understanding our project, and the large font allowed them to read the poster
            comfortably from a distance.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            For a general public audience, I found the poster to be highly effective. The minimal
            text and simple visuals allowed visitors to quickly read through the poster and then
            engage us with questions, having already built up a basic understanding of the concept.
            A denser poster would have reduced time for questions, as visitors would spend more time
            reading, and may have dampened their interest.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>Notes for Use in the Future</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            While the Praxis II poster format worked well for Showcase, I do not believe it is
            effective in all situations. The information being delivered is constant regardless of
            the poster format; a sparse poster simply shifts the burden of conveying missing
            information elsewhere. For Showcase, this meant preparing multiple supplementary
            documents to support our presentation (see Figure 34 for an example). By contrast,
            Figure 35 shows a more information-dense poster I made for Beta. That format required
            far fewer supplements, keeping my display space clean and self-contained. The choice of
            poster format, therefore, depends heavily on the constraints around how additional
            information can be delivered. Because we had ample room to display supplements at
            Showcase, a sparse poster was appropriate. In other contexts, it may not be.
          </Text>
        </Column>
        <CTMFFigure
          src="/images/praxis-ii/document-supplement.png"
          alt="Supplementary document used at the Praxis II Showcase"
          caption="Figure 34: An example supplementary document used alongside the ScrewDock poster at the Praxis II Showcase to provide additional technical detail not included in the poster itself."
        />
        <CTMFFigure
          src="/images/praxis-ii/beta-poster.png"
          alt="Information-dense Beta poster"
          caption="Figure 35: A poster I designed for Beta. The denser format is more self-contained, reducing the need for supplementary materials."
        />
        <Column gap="4">
          <Text variant="body-default-m"><strong>How does it align with my design identity?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Designing the Praxis II poster required strong collaboration between group members — a
            central element of my design identity. Because the poster is meant to highlight only
            the most important information, I needed to speak with all my teammates to collectively
            determine what was essential across our different areas of work. Crucially, had I worked
            alone, I would have missed several key points that others were incorporating into their
            portions of the scripted presentation. By coordinating with everyone, we produced a
            poster that accurately and cohesively represented the full project.
          </Text>
        </Column>
      </Column>
    ),
  },
  {
    id: 2,
    name: "Pairwise Comparison Table",
    phase: "Converging",
    phaseColor: "warning",
    summary: "A head-to-head evaluation tool that ranks options by priority through justified pairwise comparisons, structuring the convergence order.",
    content: (
      <Column gap="m">
        <Column gap="4">
          <Text variant="body-default-m"><strong>What is it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            A Pairwise Comparison Table is an engineering tool that evaluates a set of options by
            comparing them head-to-head in pairs to determine which is preferred in each matchup.
            The result is a priority ranking across the full set of options.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How did I use it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Our team performed functional analysis on our opportunity and identified four functions
            to consider: length sorting, head-shape sorting, drill-bit sorting, and rust sorting. My
            teammate Miles suggested using a pairwise comparison table to establish the relative
            priority of these functions. Figure 36 shows the completed table, with annotations
            documenting the justified engineering argument behind each comparison. The analysis
            produced the following priority ranking, from lowest to highest: rust, head-shape,
            drill-bit, and length.
          </Text>
        </Column>
        <CTMFFigure
          src="/images/praxis-ii/pairwise-comparison.png"
          alt="Pairwise Comparison Table for sorting functions"
          caption="Figure 36: The Pairwise Comparison Table used to determine the relative priority of the four candidate sorting functions. Annotations explain the engineering justification for each pairwise decision."
        />
        <Column gap="4">
          <Text variant="body-default-m"><strong>Was it useful?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            The primary impact of the Pairwise Comparison Table was on how we structured our FDCR
            cycle. Prior to completing this analysis during Beta, our team's FDCR process — shown
            in Figure 37 — involved breaking the opportunity into separate functions, identifying
            the best prototype for each function independently, and then combining them. This
            approach has a critical flaw: the best solution for each function in isolation is not
            necessarily the best combination of solutions overall.
          </Text>
        </Column>
        <CTMFFigure
          src="/images/praxis-ii/original-fdcr.png"
          alt="Original FDCR process used during Beta"
          caption="Figure 37: The original FDCR process used during Beta. The highlighted section shows the independent converging step performed within each function, prior to integration."
        />
        <Text variant="body-default-m" onBackground="neutral-weak">
          After Beta, we redesigned the FDCR process using the priority ranking from the pairwise
          comparison table, shifting to a sequential converging approach. As shown in Figure 38, we
          first converged on the best solution for length sorting — the highest-priority function.
          Then, knowing which length prototype we had selected, we converged on the best drill-bit
          solution that would work in conjunction with it. This continued down the priority ranking.
          The key outcome was a final concept in which the functions were not only individually
          strong, but had been designed to work together.
        </Text>
        <CTMFFigure
          src="/images/praxis-ii/new-fdcr.png"
          alt="Updated FDCR process after pairwise comparison analysis"
          caption="Figure 38: The updated FDCR process following the pairwise comparison analysis. The highlighted section shows the sequential converging steps, ordered by function priority, replacing the earlier independent approach."
        />
        <Column gap="4">
          <Text variant="body-default-m"><strong>How does it align with my design identity?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            A pairwise comparison table requires making justified engineering arguments to establish
            priority. This demands a clear understanding of stakeholder needs and what matters most
            to the community being served — a direct expression of my commitment to
            community-oriented engineering design.
          </Text>
        </Column>
      </Column>
    ),
  },
  {
    id: 3,
    name: "Anchoring Bias",
    phase: "Framing",
    phaseColor: "brand",
    summary: "A cognitive bias that prematurely narrows the solution space by fixing on the first familiar solution — and the solution-agnostic requirement writing that defends against it.",
    content: (
      <Column gap="m">
        <Column gap="4">
          <Text variant="body-default-m"><strong>What is it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Anchoring bias is a cognitive bias in which individuals unconsciously fixate on the
            first piece of information they encounter — the "anchor" — and allow it to
            disproportionately influence subsequent judgments. In engineering design, this manifests
            as an early, implicit narrowing of the solution space: before any requirements have been
            defined or stakeholders consulted, the designer has already mentally committed to a
            class of solution based on what they have seen before. The danger is not that the anchor
            is necessarily wrong, but that it forecloses alternatives that may be more appropriate
            before the problem has been properly understood.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How did it affect our team?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            When our team first received the RFP for Mr. Ginsberg's woodworking shop, the most
            commonly encountered solution to screw-sorting problems online was machine vision and
            AI-based sorting systems. Much of our early discussion centred on designing something
            similar: a camera-based classifier that could identify screw type and route screws
            accordingly. This anchor was understandable — the solution was technically impressive
            and directly relevant to the surface-level problem description. However, it was also
            premature. We had not yet spoken meaningfully with Mr. Ginsberg about the actual
            workflow of his shop, the volume of screws being sorted, or whether a high-tech
            automated solution was practical or desirable in that context. By anchoring to the AI
            solution, we had begun converging before we had finished framing — a process error that
            risked producing an expensive, over-engineered design for a problem that may have had a
            far simpler solution.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How did we overcome it?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            We overcame the anchor by deliberately writing solution-agnostic requirements. Each
            requirement describes a necessary property of the outcome — what the design must achieve
            — rather than a mechanism by which it achieves it. For example, rather than specifying
            "the system must use a camera," a requirement read "the system must distinguish
            Robertson screws from non-Robertson screws." This framing practice, taught in Praxis,
            prevents any single solution from being embedded in the requirements before diverging
            has occurred. By removing the AI assumption from our requirements, we reopened the
            solution space and were able to seriously consider mechanical sorting approaches that
            were better matched to the shop's actual operating conditions and Mr. Ginsberg's comfort
            with maintaining the equipment.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-m"><strong>How does it align with my design identity?</strong></Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            My design identity holds that engineering requires direct contact with the community
            being served, not assumptions about what they need. Anchoring bias is precisely the
            mechanism by which those assumptions harden before that contact has been made. In the
            screw-sorting project, the AI solution felt obvious because it was familiar — but
            familiarity with a solution is not the same as understanding a community's problem. Had
            we not identified and corrected the anchor, we would have risked designing for the
            solution we had seen online rather than for Mr. Ginsberg's actual shop. This connects
            directly to the evolution of my design identity: my TA's challenge to define "community"
            more precisely pushed me to recognise that the obligation to understand a stakeholder
            precedes the obligation to design for them. Anchoring bias is the threat to that
            obligation, and solution-agnostic requirements are the structural defence against it.
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
    <Column border="neutral-alpha-medium" radius="m" overflow="hidden" style={{ cursor: "pointer" }}>
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
      </div>
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
