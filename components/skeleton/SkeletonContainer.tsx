import React from "react";

import { Box, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import SkeletonCard from "./SkeletonCard";

type SkeletonContainerProps = {
  quantity: number;
  display?: string;
};

export default function SkeletonContainer({
  quantity = 4,
  display = "flex",
}: SkeletonContainerProps) {
  return (
    <Grid container spacing={"20px"} sx={{ mt: "20px" }}>
      {Array(quantity)
        .fill(0)
        .map((item, index) => (
          <SkeletonCard key={index}></SkeletonCard>
        ))}
      <Box
        sx={{
          display: display,
          width: "100px",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto 0 auto",
          borderRadius: "90px",
          backgroundColor: "#e4e4e4",
        }}
      >
        <CircularProgress size={"30px"} />
      </Box>
    </Grid>
  );
}
