import { Heading, Text, RevealFx } from "@once-ui-system/core";

interface HeroSplashProps {
  label: string;
  title: string;
  subtitle: string;
  team?: string;
}

export default function HeroSplash({ label, title, subtitle, team }: HeroSplashProps) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 160px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingBottom: "56px",
        paddingTop: "80px",
      }}
    >
      <RevealFx translateY="4">
        <Text variant="body-default-s" onBackground="neutral-weak" style={{ letterSpacing: "0.05em", marginBottom: "16px" }}>
          {label}
        </Text>
      </RevealFx>

      <RevealFx translateY="8" delay={0.1}>
        <Heading variant="display-strong-l" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", lineHeight: "1.06" }}>
          {title}
        </Heading>
      </RevealFx>

      <RevealFx translateY="8" delay={0.2}>
        <Heading as="h2" variant="display-default-m" onBackground="neutral-weak" style={{ marginTop: "10px" }}>
          {subtitle}
        </Heading>
      </RevealFx>

      {team && (
        <RevealFx translateY="4" delay={0.3}>
          <Text variant="body-default-s" onBackground="neutral-weak" style={{ marginTop: "12px" }}>
            {team}
          </Text>
        </RevealFx>
      )}

      <RevealFx translateY="4" delay={0.4}>
        <Text variant="body-default-s" onBackground="neutral-weak" style={{ marginTop: "40px", opacity: 0.45 }}>
          ↓ scroll to explore
        </Text>
      </RevealFx>
    </div>
  );
}
