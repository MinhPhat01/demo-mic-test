import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";

const Post = ({ imgSrc }) => {
  const [ref, { width }] = useMeasure();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box ref={ref} sx={{ width: "100%" }}>
          <Image
            width={width}
            src={imgSrc}
            alt={"img"}
            height={(width * 4) / 6}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          ></Image>
        </Box>
        <Typography
          sx={{
            my: "12px",
            color: "#00A859",
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: "600",
            fontFamily: "Poppins",
            color: " #00A859",
          }}
        >
          Awesome collection
        </Typography>
        <Box
          sx={{
            mb: "16px",
            width: "fit-content",
            border: "2px solid #E6E8EC",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              padding: "8px",
              fontSize: "12px",
              lineHeight: "12px",
              color: "#23262F",
              fontFamily: "Poppins",
              fontWeight: "700",
            }}
          >
            26/10/2022
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#777E91",
            fontSize: "16px",
            lineHeight: "24px",
            fontFamily: "Poppins",
            textAlign: "justify",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Typography>
      </Box>
    </Grid>
  );
};

export default Post;
