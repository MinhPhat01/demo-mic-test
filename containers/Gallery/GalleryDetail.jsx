import { Container, Typography, useTheme } from "@mui/material";
import React from "react";
import Content from "./components/Content";

export default function GalleryDetail() {
  const theme = useTheme();
  return (
    <Container sx={{ mb: "67px" }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: "40px",
          lineHeight: "48px",
          fontFamily: "Poppins",
          fontWeight: "600",
          [theme.breakpoints.down("md")]: {
            textAlign: "center",
          },
        }}
      >
        Lorem Ipsum
      </Typography>
      <Content></Content>
    </Container>
  );
}
