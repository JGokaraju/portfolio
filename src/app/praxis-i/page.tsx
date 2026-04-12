import {
  Column,
  Heading,
  Text,
  Line,
  Row,
  Meta,
} from "@once-ui-system/core";
import Image from "next/image";
import { baseURL } from "@/resources";
import React from "react";
import CTMFAccordion from "./CTMFAccordion";

export async function generateMetadata() {
  return Meta.generate({
    title: "Praxis I – Joti Gokaraju",
    description: "Excess Backpack Strap Snagging — ESC101 engineering design project.",
    baseURL: baseURL,
    path: "/praxis-i",
    image: `/api/og/generate?title=${encodeURIComponent("Praxis I")}`,
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
      <Row
        fillWidth
        border="neutral-alpha-medium"
        radius="m"
        overflow="hidden"
      >
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

export default function PraxisI() {
  return (
    <Column maxWidth="s" gap="m" paddingBottom="64">

      {/* Hero splash */}
      <div
        id="tour-page-top"
        style={{
          minHeight: "calc(100vh - 160px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "56px",
          paddingTop: "80px",
        }}
      >
        <Text variant="body-default-s" onBackground="neutral-weak" style={{ letterSpacing: "0.05em", marginBottom: "16px" }}>
          ESC101 · University of Toronto · Fall 2025
        </Text>
        <Heading variant="display-strong-l" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", lineHeight: "1.06" }}>
          Praxis I
        </Heading>
        <Heading as="h2" variant="display-default-m" onBackground="neutral-weak" style={{ marginTop: "10px" }}>
          Excess Backpack Strap Snagging
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" style={{ marginTop: "12px" }}>
          Mohammed Elsayed · Ozan Gunduz · Jincheng Luo · Joti Gokaraju
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" style={{ marginTop: "40px", opacity: 0.45 }}>
          ↓ scroll to explore
        </Text>
      </div>

      <Line marginBottom="32" />

      {/* Opportunity */}
      <Heading as="h2" variant="display-strong-s" paddingBottom="8">
        Opportunity
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        Backpacks use a tri-glide buckle that allows strap-length adjustment but leaves a dangling
        excess strap unsecured at the bottom. In dense lecture environments, this excess frequently
        snags on chair legs or catches underfoot when retrieving the bag. This is a recurring source
        of frustration and a genuine trip hazard confirmed through stakeholder
        interviews<Cite n={6} />. Existing workarounds (knotting, tucking, or rolling the strap) are
        inconsistent and require repeated effort every time the strap length is changed.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        We defined this problem as our <em>splartz</em>: the persistent snagging hazard created by
        excess adjustment strap length. The design opportunity was to eliminate this dangling without
        sacrificing adjustability, comfort, or durability.
      </Text>

      <Row fillWidth gap="16" paddingTop="8" s={{ direction: "column" }}>
        <Figure
          src="/images/praxis-i/underfoot-caught.png"
          alt="Excess strap caught underfoot"
          caption={<>Figure 6: Excess backpack strap hanging loose and caught underfoot, illustrating the everyday snagging hazard the project aimed to eliminate<Cite n={6} />.</>}
        />
        <Figure
          src="/images/praxis-i/under-table-caught.png"
          alt="Excess strap snagged under a classroom chair leg"
          caption={<>Figure 7: Excess strap snagged under a classroom chair leg, demonstrating the trip hazard confirmed through stakeholder interviews<Cite n={6} />.</>}
        />
      </Row>

      <Line marginTop="8" marginBottom="24" />

      {/* Design Objectives */}
      <Heading as="h2" variant="display-strong-s" paddingBottom="8">
        High-Level Design Objectives
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingBottom="16">
        Requirements were developed from the original team's project brief, interviews with an EngSci
        student, a UofT facilities manager, and a retailer<Cite n={6} />. Key
        objectives<Cite n={6} /> are summarised below:
      </Text>

      <Column
        border="neutral-alpha-medium"
        radius="m"
        overflow="hidden"
        marginBottom="8"
      >
        {[
          { goal: "Comfort & Safety", objectives: "Minimise pressure on the user's shoulder · No sharp edges" },
          { goal: "Usability", objectives: "Minimise excess strap length · Zero snag points · All backpack pockets remain accessible" },
          { goal: "Ergonomics", objectives: "Spinal deviation must be less than 1 cm from midline when worn" },
          { goal: "Reliability", objectives: "Straps withstand more than 500 N tensile force · Functional for 4–5 years of undergraduate use" },
        ].map((row, i, arr) => (
          <Row
            key={row.goal}
            fillWidth
            padding="16"
            gap="16"
            style={{
              borderBottom: i < arr.length - 1 ? "1px solid var(--neutral-alpha-medium)" : "none",
            }}
            s={{ direction: "column", gap: "4" }}
          >
            <Text variant="heading-strong-s" style={{ minWidth: "160px", flexShrink: 0 }}>
              {row.goal}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {row.objectives}
            </Text>
          </Row>
        ))}
      </Column>

      <Line marginTop="16" marginBottom="24" />

      {/* Final Design */}
      <Heading as="h2" variant="display-strong-s" paddingBottom="8">
        Final Design Solution
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        The recommended design is the <strong>shoulder-side adjustment mechanism</strong>. It
        relocates the tri-glide buckle from the lower strap to the top of the padded shoulder
        section, routing all excess strap internally through the padding. The user adjusts length by
        pulling a small exposed tab at the shoulder — identical in feel to a standard backpack — but
        no excess strap ever hangs free below the bag's footprint.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        This concept emerged from a biomimicry diverging session and was selected over three other
        prototypes through a structured sequence of pairwise comparison and three successive Pugh
        charts.
      </Text>

      <Figure
        src="/images/praxis-i/shoulder-side.png"
        alt="Shoulder-side adjustment mechanism"
        caption="Figure 8: Shoulder-side adjustment mechanism. The tri-glide buckle is repositioned to the shoulder; all excess strap is absorbed internally through the padding, with a small exposed pull-tab for length adjustment."
      />

      {/* Key Features */}
      <Heading as="h3" variant="heading-strong-l" paddingBottom="8">
        Key Features
      </Heading>
      <Column as="ul" gap="8" paddingLeft="20" paddingBottom="16">
        {[
          <>Buckle relocated to shoulder: excess strap is contained entirely within the bag's footprint — no ground-level dangling, and no added clip or fastener<Cite n={6} />.</>,
          <>Standard nylon webbing retained: no elastic or additional hardware; the full tensile strength of the nylon (148.4 MPa, safety factor 11.86) is preserved at maximum load<Cite n={6} />.</>,
          <>72 cm total adjustment range: the strap path through the padded section accommodates the full 5th–95th percentile of 17–19 year-old torso lengths<Cite n={6} />.</>,
          <>Zero added weight: no new components are introduced; the design requires only a change in strap routing and buckle placement during manufacturing<Cite n={6} />.</>,
        ].map((item, i) => (
          <Text as="li" key={i} variant="body-default-l" onBackground="neutral-weak">
            {item}
          </Text>
        ))}
      </Column>

      <Line marginTop="8" marginBottom="24" />

      {/* Testing */}
      <Heading as="h2" variant="display-strong-s" paddingBottom="16">
        Testing & Results
      </Heading>

      <Column border="neutral-alpha-medium" radius="m" overflow="hidden" marginBottom="16">
        {[
          { metric: "Snag-point occurrence", result: "0%" },
          { metric: "Excess strap length", result: "0 cm" },
          { metric: "Tensile strength", result: "148.4 MPa" },
          { metric: "Shoulder pressure", result: "29.4 kPa" },
          { metric: "Spinal deviation", result: "4.4°" },
        ].map((row, i, arr) => (
          <Row
            key={row.metric}
            fillWidth
            padding="16"
            gap="16"
            style={{
              borderBottom: i < arr.length - 1 ? "1px solid var(--neutral-alpha-medium)" : "none",
            }}
          >
            <Text variant="body-default-m" style={{ flex: 1 }} onBackground="neutral-weak">
              {row.metric}
            </Text>
            <Text variant="heading-strong-s">{row.result}</Text>
          </Row>
        ))}
      </Column>

      <Text variant="body-default-l" onBackground="neutral-weak">
        The shoulder-side mechanism was the only prototype to simultaneously satisfy the binary
        snag-point requirement, the 500 N tensile threshold, the shoulder pressure limit, and all
        usability objectives<Cite n={6} />. Compared to the next-closest design (inside-bag
        adjustment), it delivered more than double the tensile strength (148.4 vs. 69.2 MPa),
        lighter construction (0 vs. 0.56 kg of additional components), and a greater adjustment
        range (72 vs. 45 cm)<Cite n={6} />.
      </Text>

      <Figure
        src="/images/praxis-i/matlab.png"
        alt="MATLAB beam-column simulation output"
        caption="Figure 9: MATLAB beam-column simulation confirming 4.4° spinal deviation — within the 1 cm midline threshold — under a 15 kg load for the recommended design."
      />

      <Line marginTop="8" marginBottom="24" />

      {/* Reflections */}
      <Heading as="h2" variant="display-strong-s" paddingBottom="8">
        Process Reflections
      </Heading>
      <Heading as="h3" variant="heading-strong-l" paddingBottom="8">
        Connection to My Engineering Position
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        My original position holds that good engineering design begins with community: you find
        people whose problem you genuinely care about, and that personal connection is what makes the
        work meaningful. Praxis I complicated that belief.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        <strong>Authority vs. authority — and what it means to actually understand a community.</strong>{" "}
        When our team adopted the backpack strap brief, we felt confident we understood the problem.
        Backpacks are universal; every EngSci student owns one. That familiarity felt like community
        connection — the very thing my position said was necessary for good design. But familiarity
        is not the same as understanding. When we accepted a 6 cm strap-length objective from the
        original brief without independent verification, we were substituting someone else's framing
        of the community's needs for our own. When challenged during the alpha release, we had no
        evidence to defend the claim because we had never actually gone back to the community to
        verify it.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        This revealed a gap in my original position. I had described community connection as the{" "}
        <em>starting point</em> for engineering design, but I had not thought carefully about what
        maintaining that connection requires once the design process is underway. Trusting a
        secondary source as an <em>Authority</em> — rather than treating it as an{" "}
        <em>authority</em> to be critically evaluated against primary evidence — is a way of losing
        touch with the community even while believing you understand them. Genuine
        community-oriented design demands ongoing verification, not just an initial relationship.
      </Text>

      <Line marginTop="32" marginBottom="24" />

      {/* CTMFs */}
      <Heading id="tour-ctmf-section" as="h2" variant="display-strong-s" paddingBottom="4">
        Concepts, Tools, Models & Frameworks
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingBottom="24">
        Click any card to expand the full entry.
      </Text>

      <CTMFAccordion />

    </Column>
  );
}
