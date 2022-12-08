import { Box } from "@mui/material";
import React from "react";
import Title from "../../../components/title/Title";
import ProductList from "./ProductList";

export default function OurProducts() {
  return (
    <Box>
      <Title title={"OUR PRODUCT"} widthText="190px"></Title>
      <ProductList></ProductList>
    </Box>
  );
}
