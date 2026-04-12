import {
  Column,
  Heading,
  Text,
  Line,
  Row,
  Meta,
} from "@once-ui-system/core";
import HeroSplash from "@/components/HeroSplash";
import PageAnchors from "@/components/PageAnchors";
import Image from "next/image";
import { baseURL } from "@/resources";
import React from "react";
import CTMFAccordion from "./CTMFAccordion";

export async function generateMetadata() {
  return Meta.generate({
    title: "CIV102 – Joti Gokaraju",
    description: "Matboard Bridge — CIV102 engineering design project.",
    baseURL: baseURL,
    path: "/civ102",
    image: `/api/og/generate?title=${encodeURIComponent("CIV102")}`,
  });
}

function Cite({ n }: { n: number }) {
  return (
    <sup style={{ fontSize: "0.7em", opacity: 0.75, marginLeft: "1px" }}>[{n}]</sup>
  );
}

function Figure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: React.ReactNode;
}) {
  return (
    <Column gap="8" fillWidth marginTop="24" marginBottom="24">
      <Row fillWidth border="neutral-alpha-medium" radius="m" overflow="hidden">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={600}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Row>
      <Text variant="body-default-s" onBackground="neutral-weak" align="center">
        {caption}
      </Text>
    </Column>
  );
}

export default function CIV102() {
  return (
    <Column maxWidth="s" gap="m" paddingBottom="64">

      <HeroSplash
        label="CIV102 · University of Toronto · Fall 2025"
        title="Matboard Bridge"
        subtitle="Variable-Span Bridge for Maximum Load Capacity"
        team="Ben Wei · Tristan Heusser · Joti Gokaraju · TA: Junyan Xiao"
        readingTime="~8 min read"
      />
      <PageAnchors anchors={[
        { id: "section-opportunity", label: "Opportunity" },
        { id: "section-objectives",  label: "Objectives" },
        { id: "section-solution",    label: "Solution" },
        { id: "section-results",     label: "Results" },
        { id: "section-reflections", label: "Reflections" },
        { id: "section-ctmfs",       label: "CTMFs" },
      ]} />

      <Line marginBottom="32" />

      {/* Opportunity */}
      <Heading id="section-opportunity" as="h2" variant="display-strong-s" paddingBottom="8">
        Opportunity
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        The CIV102 bridge project tasked our team with designing and constructing a matboard bridge
        spanning 1260 mm, capable of supporting a model train.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        The deeper constraint was material. A single uniform cross-section strong enough for the
        full span would exceed the material budget. The real problem was therefore one of
        allocation. Figure 14 shows our analysis of where along the span each failure mode was most
        severe; the rest of the project focused on designing different cross-sections for different
        regions accordingly.
      </Text>

      <Figure
        src="/images/civ102/shear-bending.png"
        alt="Shear force and bending moment envelopes for the final design"
        caption="Figure 14: Shear force and bending moment envelopes under Load Case 2. Moment peaks at midspan; shear peaks at the reactions. This spatial separation motivated our variable-span design strategy."
      />

      <Line marginTop="8" marginBottom="24" />

      {/* Design Objectives */}
      <Heading id="section-objectives" as="h2" variant="display-strong-s" paddingBottom="8">
        High-Level Design Objectives
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingBottom="16">
        Design objectives were provided with the assignment<Cite n={9} /> and are summarised as
        follows:
      </Text>
      <Column as="ul" gap="8" paddingLeft="20" paddingBottom="8">
        {[
          "Design a bridge that successfully supports a moving train with as much weight as possible",
          "Reduce the likelihood of failure due to tension, compression, buckling, shear, shear buckling, and shear failure at glue tabs",
          "Determine an expected failure load through calculations, with justification",
          "Maximise strength-to-weight ratio",
          "Develop a feasible design that can be constructed by first-year students, accounting for imprecise cutting and material limitations",
        ].map((item, i) => (
          <Text as="li" key={i} variant="body-default-l" onBackground="neutral-weak">
            {item}
          </Text>
        ))}
      </Column>

      <Line marginTop="16" marginBottom="24" />

      {/* Final Design */}
      <Heading id="section-solution" as="h2" variant="display-strong-s" paddingBottom="8">
        Final Design Solution
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        Our final bridge uses two distinct cross-sections across three spans.{" "}
        <strong>Design 8</strong> occupies the end spans (0–350 mm and 910–1260 mm), as shown in
        Figure 15: a closed box beam with a three-layer top flange (3.81 mm), a single-layer bottom
        flange, and 100 mm webs. The closed section maximises the second moment of area{" "}
        <em>I</em> where shear forces are highest. <strong>Design 11</strong> occupies the central
        span (350–910 mm), as shown in Figure 16: an open Pi-beam with a two-layer top flange
        (2.54 mm), 120 mm webs, and no bottom plate. Removing the bottom plate raises the
        centroidal axis to ȳ = 88.5 mm, directly reducing compressive stress at midspan where
        bending moment governs.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        Ten internal diaphragms — spaced at 117 mm in the end spans and 187 mm in the central span
        — suppress shear buckling of the web panels across the full span. The completed bridge is
        shown in Figure 17.
      </Text>

      <Row fillWidth gap="16" paddingTop="8" s={{ direction: "column" }}>
        <Figure
          src="/images/civ102/end-span.png"
          alt="End span cross-section (Design 8)"
          caption="Figure 15: End span cross-section (Design 8): ȳ = 71.63 mm, I = 1.219 × 10⁶ mm⁴. A closed box beam with a three-layer top flange and 100 mm webs, optimised for the high shear forces at the reactions."
        />
        <Figure
          src="/images/civ102/middle-span.png"
          alt="Central span cross-section (Design 11)"
          caption="Figure 16: Central span cross-section (Design 11): ȳ = 88.5 mm, I = 898 334 mm⁴. An open Pi-beam with a two-layer top flange and no bottom plate, optimised to reduce compressive stress where bending moment governs."
        />
      </Row>

      <Figure
        src="/images/civ102/finished-bridge.png"
        alt="The completed bridge with the team"
        caption="Figure 17: Team 302 with the completed bridge at the load testing session, November 2025."
      />

      <Line marginTop="8" marginBottom="24" />

      {/* Results */}
      <Heading id="section-results" as="h2" variant="display-strong-s" paddingBottom="16">
        Results
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingBottom="16">
        The bridge passed both base-case load scenarios. Under the full moving-train scenario (Load
        Case 2), our predicted governing failure mode was global compression in the central span
        (FOS = 2.03), corresponding to an estimated failure load of 918 N. The key factors of
        safety are summarised below.
      </Text>

      <Column border="neutral-alpha-medium" radius="m" overflow="hidden" marginBottom="16">
        <Row
          fillWidth
          padding="16"
          gap="8"
          style={{ borderBottom: "1px solid var(--neutral-alpha-medium)", background: "var(--neutral-background-weak)" }}
        >
          <Text variant="heading-strong-s" style={{ flex: 2 }}>Failure Mode</Text>
          <Text variant="heading-strong-s" style={{ flex: 1, textAlign: "right" }}>End Spans</Text>
          <Text variant="heading-strong-s" style={{ flex: 1, textAlign: "right" }}>Central Span</Text>
        </Row>
        {[
          { mode: "Global tension", end: "7.56", central: "3.89", governing: false },
          { mode: "Global compression", end: "3.24", central: "2.03 ← governing", governing: true },
          { mode: "Global shear (walls)", end: "4.12", central: "6.27", governing: false },
          { mode: "Shear failure (glue)", end: "6.67", central: "14.80", governing: false },
          { mode: "Flange buckling (between webs)", end: "16.78", central: "4.67", governing: false },
          { mode: "Web buckling (shear)", end: "4.05", central: "5.57", governing: false },
        ].map((row, i, arr) => (
          <Row
            key={row.mode}
            fillWidth
            padding="16"
            gap="8"
            style={{
              borderBottom: i < arr.length - 1 ? "1px solid var(--neutral-alpha-medium)" : "none",
              background: row.governing ? "var(--accent-background-weak)" : "transparent",
            }}
          >
            <Text
              variant={row.governing ? "heading-strong-s" : "body-default-m"}
              onBackground={row.governing ? undefined : "neutral-weak"}
              style={{ flex: 2 }}
            >
              {row.mode}
            </Text>
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              style={{ flex: 1, textAlign: "right" }}
            >
              {row.end}
            </Text>
            <Text
              variant={row.governing ? "heading-strong-s" : "body-default-m"}
              onBackground={row.governing ? undefined : "neutral-weak"}
              style={{ flex: 1, textAlign: "right" }}
            >
              {row.central}
            </Text>
          </Row>
        ))}
      </Column>

      <Text variant="body-default-l" onBackground="neutral-weak">
        At load testing, the bridge failed at approximately <strong>200 N</strong> — well below the
        918 N prediction. We had flagged this possibility in our report: the curvature of the glue
        tabs reduced effective adhesive contact to under 5 mm, and bending the matboard for the
        120 mm central-span webs introduced fibre damage that compromised the bridge's compressive
        capacity.
      </Text>

      <Line marginTop="24" marginBottom="24" />

      {/* Reflections */}
      <Heading id="section-reflections" as="h2" variant="display-strong-s" paddingBottom="8">
        Process Reflections
      </Heading>

      <Heading as="h3" variant="heading-strong-l" paddingBottom="8">
        Improving on Praxis I
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        <strong>Mathematical prototypes integrated into diverging, not just converging.</strong>{" "}
        In Praxis I, I used simulation as a final verification step. In CIV102, our
        Python/Desmos/Sheets software stack ran continuously throughout the iteration process —
        new cross-section sketches were analysed the same evening they were drawn. Embedding
        computational tools earlier in the process produced faster and better iterations than
        reserving them for the end.
      </Text>

      <Heading as="h3" variant="heading-strong-l" paddingTop="24" paddingBottom="8">
        Connection to My Position as an Engineer
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        My position holds that good engineering design is fundamentally about serving communities.
        CIV102 tested a different dimension of that belief: whether we should sacrifice the
        impressiveness of our engineering results in order to be honest with our stakeholders.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        <strong>Being honest with the community.</strong> When we calculated our predicted failure
        load of 918 N, that number was mathematically defensible under the assumptions of our model.
        Presenting it without qualification would have been technically accurate. But we knew those
        assumptions were fragile: the glue tabs had curved during construction, the matboard had
        been stressed during bending, and neither imperfection was captured in our analysis. For
        that reason, we included qualifying statements in our report explaining that the actual
        failure load might be considerably lower, as shown in Figure 18.
      </Text>

      <Figure
        src="/images/civ102/qualifying-statement.png"
        alt="Qualifying statement in the design report"
        caption="Figure 18: Excerpt from the CIV102 design report, including the qualifying statement acknowledging that construction imperfections — curved glue tabs and fibre damage from bending — could significantly reduce the actual failure load below the predicted 918 N."
      />

      <Text variant="body-default-l" onBackground="neutral-weak">
        This experience revealed another implication of my position. I had described engineering as
        designing for community-oriented objectives, but CIV102 showed that serving a community
        also means being honest about the limits of what you have built. A future engineer or client
        acting on a 918 N prediction without the accompanying caveat would be making decisions on
        false grounds, which could directly compromise community well-being.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        While it would have seemed more technically impressive to report the 918 N failure load
        without qualification, I chose to include the caveat in line with my position. This led me
        to a further explicit implication of my engineering identity: prioritising the well-being of
        stakeholders sometimes means sacrificing the impressiveness of your engineering work.
      </Text>

      <Line marginTop="32" marginBottom="24" />

      {/* CTMFs */}
      <Heading id="section-ctmfs" as="h2" variant="display-strong-s" paddingBottom="4">
        Concepts, Tools, Models & Frameworks
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingBottom="24">
        Click any card to expand the full entry.
      </Text>

      <CTMFAccordion />

    </Column>
  );
}
