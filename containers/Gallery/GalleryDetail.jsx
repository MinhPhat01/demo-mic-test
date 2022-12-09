import { Container, Typography } from "@mui/material";
import React from "react";
import Content from "./components/Content";

export default function GalleryDetail() {
  return (
    <Container sx={{ mb: "67px" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: "40px",
          lineHeight: "48px",
          fontFamily: "Poppins",
          fontWeight: "600",
        }}
      >
        Lorem Ipsum
      </Typography>
      <Content></Content>
      <Content></Content>
    </Container>
  );
}
