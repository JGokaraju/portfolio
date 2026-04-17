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
import { baseURL } from "@/resources";
import CTMFAccordion from "./CTMFAccordion";
import Figure from "@/components/Figure";

export async function generateMetadata() {
  return Meta.generate({
    title: "Praxis II – Joti Gokaraju",
    description: "Sorting Robertson Screws for Reuse at GTA Woodworks — ESC102 engineering design project.",
    baseURL: baseURL,
    path: "/praxis-ii",
    image: `/api/og/generate?title=${encodeURIComponent("Praxis II")}`,
  });
}

function Cite({ n }: { n: number }) {
  return (
    <sup style={{ fontSize: "0.7em", opacity: 0.75, marginLeft: "1px" }}>[{n}]</sup>
  );
}


export default function PraxisII() {
  return (
    <Column maxWidth="s" gap="m" paddingBottom="64">

      <HeroSplash
        label="ESC102 · University of Toronto · Winter 2026"
        title="Praxis II"
        subtitle="Sorting Robertson Screws for Reuse at GTA Woodworks"
        team="William Hu · Miles Ehrlich · Yanhan Pang · Joti Gokaraju"
        readingTime="~10 min read"
      />
      <PageAnchors anchors={[
        { id: "section-opportunity", label: "Opportunity" },
        { id: "section-objectives",  label: "Objectives" },
        { id: "section-solution",    label: "Solution" },
        { id: "section-results",     label: "Results" },
        { id: "section-one-pager",   label: "One-Pager" },
        { id: "section-poster",      label: "Poster" },
        { id: "section-reflections", label: "Reflections" },
        { id: "section-ctmfs",       label: "CTMFs" },
      ]} />

      <Line marginBottom="32" />

      {/* Opportunity */}
      <Heading id="section-opportunity" as="h2" variant="display-strong-s" paddingBottom="8">
        Opportunity
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        Sorting Robertson screws for reuse is a tedious process. Current methods involve manually
        picking up each screw and classifying it by length (9 potential categories), drill bit (10
        potential categories), colour, and rust<Cite n={10} />. As a result, Mr. Ginsberg — our
        stakeholder at GTA Woodworks — chooses to simply discard his old screws in favour of
        purchasing new ones, an unsustainable practice that results in unnecessary waste and cost.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        The purpose of our project was to improve the viability of reusing screws by designing a
        new sorting system to reduce that waste.
      </Text>

      <Figure
        src="/images/praxis-ii/unsorted-screws.png"
        alt="Unsorted Robertson screws at GTA Woodworks"
        caption={<>Figure 26: Unsorted Robertson screws at GTA Woodworks, illustrating the scale and disorganisation of the sorting problem that motivated this project.</>}
      />

      <Line marginTop="8" marginBottom="24" />

      {/* Design Objectives */}
      <Heading id="section-objectives" as="h2" variant="display-strong-s" paddingBottom="8">
        High-Level Design Objectives
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingBottom="16">
        These objectives were developed from the original project proposal, secondary and primary
        research conducted by my team, and interviews with Mr. Ginsberg<Cite n={10} />:
      </Text>
      <Column as="ul" gap="8" paddingLeft="20" paddingBottom="8">
        {[
          "Identifies Robertson screws and discards non-Robertson screws",
          "Classifies and sorts screws (from 5/8 in to 3 inches) by length in 1/4 inch intervals",
          "Minimises manual sorting time (Mr. Ginsberg must not spend more than 5 s per screw)",
          "Accommodates multiple screw head types and colours",
          "Operates at high accuracy (> 97.5%)",
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
        The recommended concept is the <strong>ScrewDock System</strong>, as shown in Figure 27.
        ScrewDock is a two-stage sorting system comprising a Screw Magazine and a Docking Station.
        The workflow of the system is shown in Figure 28. At the end of a work session, clients of
        Mr. Ginsberg place their extra screws into Screw Magazines on their table. When Mr. Ginsberg
        elects to sort his screws, he places the magazines into the Docking Station. The Docking
        Station uses two cameras to identify the length and drill-bit type (Robertson vs.
        non-Robertson) of each screw. LEDs at the top of the Docking Station then light up to
        indicate the categorisation of each set of screws. Mr. Ginsberg moves a box corresponding
        to each LED in front of the Docking Station, at which point linear actuators push the screws
        into the boxes. A prototype of the system — with LEDs in place of linear actuators — is
        shown in Figure 29.
      </Text>

      <Figure
        src="/images/praxis-ii/screwdock-labelled.png"
        alt="Labelled diagram of the ScrewDock System"
        caption="Figure 27: Labelled diagram of the ScrewDock System, identifying the key components of the Screw Magazine and Docking Station."
      />
      <Figure
        src="/images/praxis-ii/implementation.png"
        alt="ScrewDock workflow overview"
        caption="Figure 28: Overview of the ScrewDock workflow, from screw loading by clients at the end of a work session through to LED-guided sorting by Mr. Ginsberg."
      />
      <Figure
        src="/images/praxis-ii/prototype.png"
        alt="Physical prototype of the ScrewDock System"
        caption="Figure 29: Physical prototype of the ScrewDock System, with LEDs implemented in place of linear actuators to demonstrate the sorting and categorisation logic."
      />

      <Line marginTop="8" marginBottom="24" />

      {/* Key Results */}
      <Heading id="section-results" as="h2" variant="display-strong-s" paddingBottom="16">
        Key Results
      </Heading>
      <Column
        border="neutral-alpha-medium"
        radius="m"
        overflow="hidden"
        marginBottom="8"
      >
        {[
          {
            title: "Highly scalable reduction in sorting time",
            body: "Time complexity analysis of the software and physical testing suggest a sorting time of 4.1 s per screw for 8 screws per magazine. In a future iteration with 16 screws per magazine, this scales to under 2.2 s per screw — more than twice as fast as the current manual process (5 s per screw).",
          },
          {
            title: "Demonstrated accuracy",
            body: "Testing with 48 screws across three different lengths, three drill-bit types, and five head shapes yielded 100% accuracy under controlled lighting and environmental conditions.",
          },
        ].map((row, i, arr) => (
          <Row
            key={row.title}
            fillWidth
            padding="20"
            gap="16"
            style={{
              borderBottom: i < arr.length - 1 ? "1px solid var(--neutral-alpha-medium)" : "none",
            }}
            s={{ direction: "column", gap: "4" }}
          >
            <Text variant="heading-strong-s" style={{ minWidth: "220px", flexShrink: 0 }}>
              {row.title}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {row.body}
            </Text>
          </Row>
        ))}
      </Column>

      <Line marginTop="24" marginBottom="24" />

      {/* One-Pager */}
      <Heading id="section-one-pager" as="h2" variant="display-strong-s" paddingBottom="8">
        One-Pager
      </Heading>
      <Row fillWidth gap="16" s={{ direction: "column" }}>
        <Figure
          src="/images/praxis-ii/one-pager-1.png"
          alt="ScrewDock one-pager page 1"
          caption="Figure 30: ScrewDock System one-pager, page 1."
        />
        <Figure
          src="/images/praxis-ii/one-pager-2.png"
          alt="ScrewDock one-pager page 2"
          caption="Figure 31: ScrewDock System one-pager, page 2."
        />
      </Row>

      <Line marginTop="8" marginBottom="24" />

      {/* Poster */}
      <Heading id="section-poster" as="h2" variant="display-strong-s" paddingBottom="8">
        Poster
      </Heading>
      <Figure
        src="/images/praxis-ii/screwdock-poster.png"
        alt="ScrewDock System poster for the Praxis II Showcase"
        caption="Figure 32: ScrewDock System poster designed for the Praxis II Showcase."
      />

      <Line marginTop="8" marginBottom="24" />

      {/* Reflections */}
      <Heading id="section-reflections" as="h2" variant="display-strong-s" paddingBottom="8">
        Process Reflections
      </Heading>
      <Heading as="h3" variant="heading-strong-l" paddingBottom="8">
        Connection to My Position as an Engineer
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        My position holds that engineering design is fundamentally about serving communities. Praxis
        II directly challenged what it means to <em>serve</em> a community when the stakeholder and
        the engineer disagree.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        <strong>Community desires vs. engineering judgement — a qualification to community-first
        design.</strong> During a validation meeting, Mr. Ginsberg told our team directly that he
        would not use the ScrewDock system<Cite n={11} />. Under my original position, this meant
        the solution had failed. A community-oriented design cannot work if the community rejects it.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        But our TAs offered a different framing that I now incorporate into my position. Christine
        noted that Mr. Ginsberg was highly opinionated, and that the purpose of Praxis II was to
        arrive at sound engineering decisions through an objective process. Joy raised a broader
        point in Studio: a stakeholder expressing a preference does not mean that preference
        represents the best solution. Engineers are brought into a problem precisely because their
        expertise allows them to see things the community cannot.
      </Text>
      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        This reframed my understanding of community-oriented design. My earlier position described
        it as following the community's lead; Praxis II showed that genuinely serving a community
        sometimes requires holding a position the community resists. The ScrewDock system met every
        design objective our team had developed with Mr. Ginsberg's input. Even if he did not prefer
        it, it remained the best solution available. My position now includes this qualification: I
        should not blindly defer to the preferences of the community at the expense of justified
        engineering judgement.
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
