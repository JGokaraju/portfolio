import { Row, IconButton } from "@once-ui-system/core";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        horizontal="center"
        vertical="center"
      >
        <IconButton
          href="mailto:j.gokaraju@mail.utoronto.ca"
          icon="email"
          tooltip="j.gokaraju@mail.utoronto.ca"
          size="s"
          variant="ghost"
        />
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Row>
  );
};
