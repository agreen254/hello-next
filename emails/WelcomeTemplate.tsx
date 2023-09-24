import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";
import { CSSProperties } from "react";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body style={body}>
          <Container className="flex justify-center">
            <Text style={heading}>Hello, {name}!</Text>
            <Link href="https://llppi.com">llppi.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
