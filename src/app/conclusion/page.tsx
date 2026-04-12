import { Column, Heading, Text, Line, Meta } from "@once-ui-system/core";
import { baseURL } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "Conclusion – Joti Gokaraju",
    description: "Reflecting on a year of engineering design in EngSci.",
    baseURL: baseURL,
    path: "/conclusion",
    image: `/api/og/generate?title=${encodeURIComponent("Conclusion")}`,
  });
}

export default function Conclusion() {
  return (
    <Column maxWidth="s" gap="m" paddingY="64">
      <Heading variant="display-strong-l" paddingBottom="8">
        Conclusion
      </Heading>
      <Line marginBottom="24" />

      <Text variant="body-default-l" onBackground="neutral-weak">
        Looking back on my first year, this portfolio captures not just the projects I completed,
        but the evolution of how I think about engineering design. When I recorded my original
        position statement, I believed good engineering began and ended with community connection.
        A year of genuine design work has shown me that belief was right in spirit, but incomplete
        in practice.
      </Text>

      <Column gap="16" paddingTop="8" paddingBottom="8">
        <Text variant="body-default-l" onBackground="neutral-weak">
          <strong>Praxis I</strong> taught me that community orientation requires ongoing
          verification, not just an initial relationship.
        </Text>
        <Text variant="body-default-l" onBackground="neutral-weak">
          <strong>CIV102</strong> taught me that serving a community sometimes means being honest
          about the limits of what you have built.
        </Text>
        <Text variant="body-default-l" onBackground="neutral-weak">
          <strong>Praxis II</strong> taught me that genuinely serving a stakeholder can require
          holding an engineering position they disapprove of.
        </Text>
      </Column>

      <Text variant="body-default-l" onBackground="neutral-weak">
        The CTMFs I documented gave me a more precise and honest version of the position I started
        with: engineering design is about using verified judgment, honest representation, and
        genuine community understanding to build things that actually work for the people who need
        them.
      </Text>

      <Text variant="body-default-l" onBackground="neutral-weak" paddingTop="8">
        I am proud of what I built this year, and excited to carry a clearer, harder-tested version
        of my engineering identity into everything that comes next.
      </Text>
    </Column>
  );
}
