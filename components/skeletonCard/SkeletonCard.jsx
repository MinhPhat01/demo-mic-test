import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";
import { useMeasure } from "react-use";

export default function SkeletonCard() {
  const [ref, { width }] = useMeasure();
  console.log("🚀 ~ file: SkeletonCard.jsx:7 ~ SkeletonCard ~ width", width);

  return (
    <Grid item md={3} ref={ref}>
      <Skeleton variant="rectangular" width={width} height={width} />
      <Skeleton width={"50%"} />
      <Skeleton width="30%" />
    </Grid>
  );
}
