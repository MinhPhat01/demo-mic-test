import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";

export default function ImgLarge({ imgSrc }) {
  const [ref, { width }] = useMeasure();

  return (
    <Box ref={ref} sx={{ borderRadius: "8px" }}>
      <Image
        alt="image"
        src={imgSrc || "/bgEmpty.png"}
        width={width}
        height={width}
        style={{ borderRadius: "8px", objectFit: "cover" }}
      ></Image>
    </Box>
  );
}
