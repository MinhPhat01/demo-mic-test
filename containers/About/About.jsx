import { Container } from "@mui/material";
import Content from "./components/Content";
import OurValue from "./components/OurValue";

export default function About() {
  return (
    <Container>
      <Content title="Our Story" widthTitle="120px" />
      <Content title="Our Mission" widthTitle="140px" />
      <OurValue />
    </Container>
  );
}
