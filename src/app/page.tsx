import {
  Heading,
  Text,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import Image from "next/image";
import { home, person, baseURL, routes } from "@/resources";
import Tour from "@/components/Tour";
import StatsCounter from "@/components/StatsCounter";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const sections = [
  {
    route: "/position",
    label: "Position Statement",
    description: "How my understanding of engineering design has evolved through a year of Praxis.",
    icon: "document",
  },
  {
    route: "/praxis-i",
    label: "Praxis I",
    description: "Eliminating excess backpack strap snagging through a shoulder-side adjustment mechanism.",
    icon: "backpack",
  },
  {
    route: "/civ102",
    label: "CIV102",
    description: "Designing a variable-span matboard bridge to maximise load capacity under material constraints.",
    icon: "bridge",
  },
  {
    route: "/praxis-ii",
    label: "Praxis II",
    description: "The ScrewDock System — a two-stage machine-vision sorter for Robertson screws at GTA Woodworks.",
    icon: "screwdriver",
  },
  {
    route: "/conclusion",
    label: "Conclusion",
    description: "Reflecting on a year of engineering design and a clearer, harder-tested engineering identity.",
    icon: "checkCircle",
  },
  {
    route: "/references",
    label: "References",
    description: "Sources cited throughout the portfolio.",
    icon: "listNumbers",
  },
] as const;

export default function Home() {
  return (
    <Column maxWidth="s" gap="xl" paddingY="80" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/position`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero */}
      <Column fillWidth horizontal="center" gap="l" align="center">
        <RevealFx translateY="4" horizontal="center" paddingBottom="8">
          <Image
            src="/images/joti.jpg"
            alt="Joti Gokaraju"
            width={120}
            height={120}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </RevealFx>
        <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="8">
          <Heading wrap="balance" variant="display-strong-l" align="center">
            {home.headline}
          </Heading>
        </RevealFx>
        <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="16">
          <Text
            wrap="balance"
            onBackground="neutral-weak"
            variant="heading-default-m"
            align="center"
          >
            {home.subline}
          </Text>
        </RevealFx>
      </Column>

      <Tour />

      <StatsCounter />

      <Line />

      {/* Section links */}
      <RevealFx translateY="12" delay={0.3} fillWidth>
        <Column gap="12" fillWidth>
          {sections.map(
            (section) =>
              routes[section.route] && (
                <a
                  key={section.route}
                  href={section.route}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <Row
                    fillWidth
                    padding="20"
                    gap="16"
                    vertical="center"
                    border="neutral-alpha-medium"
                    radius="m"
                    style={{
                      transition: "background 0.15s",
                      cursor: "pointer",
                    }}
                    className="hover-card"
                  >
                    <Column flex={1} gap="4">
                      <Text variant="heading-strong-l">{section.label}</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {section.description}
                      </Text>
                    </Column>
                    <Text onBackground="neutral-weak" style={{ fontSize: "1.2rem", flexShrink: 0 }}>
                      →
                    </Text>
                  </Row>
                </a>
              ),
          )}
        </Column>
      </RevealFx>
    </Column>
  );
}
