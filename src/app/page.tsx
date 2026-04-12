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

      {/* Hero — full-width banner with text overlay */}
      <RevealFx translateY="4" fillWidth>
        <div style={{
          position: "relative",
          width: "100%",
          height: "420px",
          borderRadius: "16px",
          overflow: "hidden",
        }}>
          <Image
            src="/images/joti.jpg"
            alt="Joti Gokaraju"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
          {/* Gradient: transparent at top → dark at bottom */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)",
          }} />
          {/* Text anchored to bottom-left */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "40px",
          }}>
            <Heading
              wrap="balance"
              variant="display-strong-l"
              style={{ color: "#fff", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
            >
              {home.headline}
            </Heading>
            <Text
              wrap="balance"
              variant="heading-default-m"
              style={{ color: "rgba(255,255,255,0.82)", marginTop: "10px" }}
            >
              {home.subline}
            </Text>
          </div>
        </div>
      </RevealFx>

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
