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
import HeroSplash from "@/components/HeroSplash";

export async function generateMetadata() {
  return Meta.generate({
    title: "Position Statement – Joti Gokaraju",
    description: "My position as an engineering designer and how it has evolved through Praxis II.",
    baseURL: baseURL,
    path: "/position",
    image: `/api/og/generate?title=${encodeURIComponent("Position Statement")}`,
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
        style={{ position: "relative", width: "100%" }}
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

export default function PositionStatement() {
  return (
    <Column maxWidth="s" gap="m" paddingBottom="64">
      <HeroSplash
        label="ESC102 · University of Toronto · 2026"
        title="Position Statement"
        subtitle="My Position as an Engineering Designer"
        readingTime="~6 min read"
      />
      <Line marginBottom="32" />

      {/* Section 1: My Position */}
      <Heading as="h2" variant="display-strong-s" paddingBottom="8">
        My Position
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        At the start of the year, I created a video explaining my position on engineering design. In
        it, I describe how I never thought I would become an engineer. Engineering seemed to demand a
        level of technical knowledge I didn't believe I had. That changed when I redefined what
        engineering design actually meant. Through designing communication aids for the Deafblind
        community and coaching debate, I concluded that engineering design is about finding a
        community you care about and using your skills to help them. This community-oriented view,
        paired with a deep belief in collaboration, forms the basis of my original position.
      </Text>

      <Column gap="12" paddingTop="16" paddingBottom="8">
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "var(--radius-m)",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/VPVEAEH3a-k"
            title="Original Position Statement"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
        <Text variant="body-default-l">
          <strong>TL;DR Original Values:</strong>
        </Text>
        <Column as="ul" gap="4" paddingLeft="20">
          <Text as="li" variant="body-default-l" onBackground="neutral-weak">
            Community-oriented approach to engineering design
          </Text>
          <Text as="li" variant="body-default-l" onBackground="neutral-weak">
            Collaborative mindset
          </Text>
        </Column>
      </Column>

      <Line marginTop="16" marginBottom="16" />

      {/* Section 2: Annotations */}
      <Heading as="h2" variant="display-strong-s" paddingBottom="8">
        Annotations on How My Position Has Changed
      </Heading>

      {/* Annotation 1 */}
      <Heading as="h3" variant="heading-strong-l" paddingBottom="4">
        Redefining Community in Praxis II
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        When my TA assessed my original position statement<Cite n={1} />, she pushed me to redefine
        what "community" means. As shown in Figure 1, she noted the imprecision in my opening
        statement. I had never actually defined the word. Praxis II forced me to confront this gap
        and reconsider what "community" really means for me.
      </Text>

      <Figure
        src="/images/position/ta-comment.png"
        alt="TA feedback noting the imprecision in the opening statement"
        caption={<>Figure 1: TA feedback<Cite n={1} /> on the original position statement, highlighting the undefined use of {"\u201c"}community.{"\u201d"}</>}
      />

      <Text variant="body-default-l" onBackground="neutral-weak">
        My original position assumed that community comes first: you identify people you care about,
        bring your skills to their problem, and that personal connection is what makes the design
        work meaningful. As shown in Figure 2, this belief is central to how I originally described
        my approach to engineering design.
      </Text>

      <Figure
        src="/images/position/youtube-screenshot.png"
        alt="Screenshot of original position statement video"
        caption="Figure 2: Screenshot of the original position statement, describing the role of community in motivating engineering design work."
      />

      <Text variant="body-default-l" onBackground="neutral-weak">
        This felt true because every design experience I had confirmed it. The aids I designed for
        the Deafblind were personal because they were meant for my grandfather<Cite n={2} />. Coaching
        debate was personal because I had been a student in those very clubs<Cite n={3} />. The
        community relationship always preceded the design work, and I had come to believe that good
        engineering design required a genuine, deep connection to the people you were designing for.
        Praxis II challenged that belief entirely.
      </Text>

      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        My Praxis II team was tasked with improving screw sorting at a woodworking shop — a problem
        I had no prior connection to.
      </Text>

      <Figure
        src="/images/position/unsorted-screws.png"
        alt="Unsorted screws at Mr. Ginsberg's woodworking shop"
        caption="Figure 3: Image of unsorted screws at Mr. Ginsberg's woodworking shop — the Praxis II design opportunity."
      />

      <Text variant="body-default-l" onBackground="neutral-weak">
        Compared to helping the Deafblind or coaching debate, it felt trivial. My original position
        offered no framework for approaching a problem like this.
      </Text>

      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        Yet I came to realise that engineering designers do not get to decide which communities
        matter and which can be ignored. The fact that I had never struggled with sorting screws
        didn't mean our stakeholder, Mr. Ginsberg, hadn't.
      </Text>

      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        This led me to a new understanding of community: a community is any group of stakeholders
        facing a real problem. Our role as engineering designers remains the same as I originally
        described — using our skills, along with collaboration, to help them. But that obligation
        extends to all stakeholders, not just those we personally relate to.
      </Text>

      <Line marginTop="24" marginBottom="24" />

      {/* Annotation 2 */}
      <Heading as="h3" variant="heading-strong-l" paddingBottom="4">
        Annotation 2: Am I Part of the Community? Does My Voice Matter in Engineering Design?
      </Heading>

      <Text variant="body-default-l" onBackground="neutral-weak">
        There is a notable absence in my original position: where do I fit into the community I am
        designing for?
      </Text>

      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        For a long time, I defined my work as an engineer as being entirely in service of others —
        often at the expense of my own judgment. This showed up concretely in Praxis II. Because I
        was solely focused on the community, I defaulted to following our main stakeholder Mr.
        Ginsberg's stated preferences rather than trusting my own engineering reasoning. When he
        expressed in feedback that he wanted a purely mechanical design<Cite n={4} />. I immediately
        began thinking about scrapping everything I had built in order to accommodate that
        preference.
      </Text>

      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        But that instinct was wrong. As an engineering designer, I knew such an approach would not
        work given our constraints. We had already tested a mechanical prototype and found it to be
        insufficient, as shown in Figure 4.
      </Text>

      <Figure
        src="/images/position/mechanical-prototype.webp"
        alt="Mechanical prototype that failed during testing"
        caption={<>Figure 4: Mechanical prototype that failed during testing<Cite n={5} />, demonstrating why a purely mechanical approach could not satisfy the design requirements.</>}
      />

      <Text variant="body-default-l" onBackground="neutral-weak">
        A designer who erases their own judgment in the name of serving a community is not actually
        serving them better; they are simply serving them more passively.
      </Text>

      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        This led me to a second revision of my position: the engineer is not external to the
        community they design for. I bring skills, knowledge, and judgment that the stakeholder does
        not have, and those are genuine contributions to the design process.
      </Text>

      <Line marginTop="24" marginBottom="24" />

      {/* Section 3: Revised Position */}
      <Heading as="h2" variant="display-strong-s" paddingBottom="8">
        My Revised Position
      </Heading>

      <Text variant="body-default-l" onBackground="neutral-weak">
        My core belief has not changed: engineering design is about using your skills to help a
        community. But that statement now means something more specific and more honest to me than
        it did in September.
      </Text>

      <Column gap="16" paddingTop="16">
        <Column gap="4">
          <Text variant="body-default-l">
            <strong>On community:</strong>
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak">
            A community is any group of stakeholders facing a real problem — not only the people I
            personally relate to or have lived experience with. The obligation to design well extends
            to all of them.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-l">
            <strong>On collaboration:</strong>
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak">
            Genuine collaboration requires me to show up as an engineer, not just as a helper. That
            means advocating for my own analysis when the evidence supports it, even when a
            stakeholder disagrees.
          </Text>
        </Column>
        <Column gap="4">
          <Text variant="body-default-l">
            <strong>On my role:</strong>
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak">
            I am part of the design process, not just a conduit for it. My values, my reasoning, and
            my judgment are inputs to good design.
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
