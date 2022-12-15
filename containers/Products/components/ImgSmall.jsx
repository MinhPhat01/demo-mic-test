import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";

export default function ImgSmall({ imgSrc }) {
  const [ref, { width }] = useMeasure();

  return (
    <Box ref={ref} sx={{ borderRadius: "8px", mx: "10px" }}>
      <Image
        alt="image"
        src={imgSrc}
        width={width}
        height={width}
        style={{ borderRadius: "8px", objectFit: "cover" }}
      ></Image>
    </Box>
  );
}
