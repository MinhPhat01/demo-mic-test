import { Box } from "@mui/material";
import React from "react";
import BtnSeeMore from "../../../components/button/BtnSeeMore";
import Title from "../../../components/title/Title";
import ProductList from "./ProductList";

export default function OurProducts({ data }) {
  return (
    <Box sx={{ mb: "100px" }}>
      <Title title={"OUR PRODUCT"} widthText="190px" heightProps={24}></Title>
      <ProductList data={data}></ProductList>
    </Box>
  );
}
