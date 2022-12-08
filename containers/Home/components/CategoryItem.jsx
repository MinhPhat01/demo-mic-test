import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";

const CategoryItem = ({ imgSrc, imgName }) => {
  const [ref, { width }] = useMeasure();

  return (
    <Grid item xs={6}>
      <Box
        sx={{
          padding: "12px",
          background: "#FCFCFD",
          borderRadius: "20px",
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box ref={ref} sx={{ width: "100%" }}>
          <Image
            src={imgSrc}
            alt={imgName}
            width={width}
            height={(width * 4) / 6}
            style={{ objectFit: "cover", borderRadius: "16px" }}
          ></Image>
        </Box>
        <Typography
          sx={{
            my: "12px",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#23262F",
            fontWeight: "500",
            fontFamily: "Poppins",
          }}
        >
          {imgName}
        </Typography>
      </Box>
    </Grid>
  );
};

export default CategoryItem;
