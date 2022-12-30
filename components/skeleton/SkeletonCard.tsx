import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";

export default function SkeletonCard() {
  return (
    <Grid item md={3} xs={6}>
      <Box>
        <Skeleton variant="rectangular" width={"100%"} height={"200px"} />
        <Skeleton width={"50%"} />
        <Skeleton width="30%" />
      </Box>
    </Grid>
  );
}
