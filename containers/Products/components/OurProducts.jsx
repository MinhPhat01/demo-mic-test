import { Box } from "@mui/material";
import React from "react";
import BtnSeeMore from "../../../components/button/BtnSeeMore";
import Title from "../../../components/title/Title";
import ProductList from "./ProductList";

export default function OurProducts() {
  return (
    <Box sx={{ mb: "100px" }}>
      <Title title={"OUR PRODUCT"} widthText="190px"></Title>
      <ProductList></ProductList>
      <BtnSeeMore>See More</BtnSeeMore>
    </Box>
  );
}
