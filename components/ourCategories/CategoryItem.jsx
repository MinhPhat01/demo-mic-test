import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

const CategoryItem = ({ imgSrc, imgName }) => {
  const [ref, { width, height }] = useMeasure();

  return (
    <Grid item xs={6}>
      <Box
        sx={{
          padding: "12px",
          background: "#FCFCFD",
          borderRadius: "20px",
          boxShadow: 1,
        }}
      >
        <Box ref={ref} sx={{ width: "100%", height: "378px" }}>
          <Image
            src={imgSrc}
            alt={imgName}
            width={width}
            height={height}
          ></Image>
        </Box>
      </Box>
    </Grid>
  );
};

export default CategoryItem;
