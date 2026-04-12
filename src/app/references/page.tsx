import { Column, Heading, Text, Line, Row, Meta } from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "References – Joti Gokaraju",
    description: "References cited throughout the portfolio.",
    baseURL: baseURL,
    path: "/references",
    image: `/api/og/generate?title=${encodeURIComponent("References")}`,
  });
}

const refs: { n: number; text: string; url?: string }[] = [
  { n: 1, text: 'M. Harris, "Position Statement IAT," 2026. [Online].' },
  {
    n: 2,
    text: 'J. Gokaraju, "TouchTalk," 2026. [Online].',
    url: "https://partner.projectboard.world/ysc/project/touchtalk-a-novel-communication-platform-for-the-deafblind",
  },
  {
    n: 3,
    text: 'J. Gokaraju, "Original Position Statement," 2026. [Online].',
    url: "https://www.youtube.com/watch?v=VPVEAEH3a-k",
  },
  { n: 4, text: 'M. Ehrlich, "Stakeholder Feedback," 2026. [Online].' },
  { n: 5, text: 'W. Hu, "Rolling Prototype Iterations," 2026. [Online].' },
  {
    n: 6,
    text: 'J. Gokaraju and the ESC101 Praxis Team, "Design Report," 2025. [Online].',
  },
  {
    n: 7,
    text: 'ESC101 Praxis Team, "Addressing the Presence of Excess Backpack Strap," 2025. [Online].',
  },
  { n: 8, text: 'M. Elsayed, "MATLAB Simulation," 2025. [Online].' },
  { n: 9, text: 'E. Bentz, "Bridge Project Assignment," 2025. [Online].' },
  {
    n: 10,
    text: 'ESC102 Praxis Authoring Team, "Screw Sorting," 2026. [Online].',
  },
];

export default function References() {
  return (
    <Column maxWidth="s" gap="m" paddingY="64">
      <Heading variant="display-strong-l" paddingBottom="8">
        References
      </Heading>
      <Line marginBottom="24" />

      <Column gap="16">
        {refs.map((ref) => (
          <Row key={ref.n} gap="16" fillWidth>
            <Text
              variant="body-default-m"
              style={{ minWidth: "28px", flexShrink: 0, opacity: 0.5 }}
            >
              [{ref.n}]
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {ref.text}
              {ref.url && (
                <>
                  {" "}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--brand-on-background-medium)", wordBreak: "break-all" }}
                  >
                    {ref.url}
                  </a>
                </>
              )}
            </Text>
          </Row>
        ))}
      </Column>
    </Column>
  );
}
