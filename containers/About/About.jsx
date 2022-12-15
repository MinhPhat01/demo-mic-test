import { Container } from "@mui/material";
import OurMission from "./components/OurMission";
import OurStory from "./components/OurStory";
import OurValue from "./components/OurValue";

export default function About() {
  return (
    <Container sx={{ mt: "40px" }}>
      <OurStory />
      <OurMission />
      <OurValue />
    </Container>
  );
}
