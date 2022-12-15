import { Container } from "@mui/material";
import React from "react";
import OurProducts from "./components/OurProducts";

export default function Products({ data }) {
  return (
    <Container sx={{ mt: "40px" }}>
      <OurProducts data={data}></OurProducts>
    </Container>
  );
}
