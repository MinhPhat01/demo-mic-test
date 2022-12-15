import { Container } from "@mui/material";
import React from "react";
import OurProducts from "./components/OurProducts";

export default function Products({ data }) {
  return (
    <Container>
      <OurProducts data={data}></OurProducts>
    </Container>
  );
}
