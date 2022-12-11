import { Container } from "@mui/material";
import React from "react";
import OurProducts from "./components/OurProducts";

export default function Products() {
  return (
    <Container sx={{ minHeight: "1000px" }}>
      <OurProducts></OurProducts>
    </Container>
  );
}
