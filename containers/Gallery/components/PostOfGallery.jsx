import { Box, Typography } from "@mui/material";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";

const PostOfGallery = ({ imgSrc, title, date }) => {
  const [ref, { width }] = useMeasure();
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box ref={ref} sx={{ width: "100%" }}>
        <Image
          width={width}
          src={imgSrc || "/bgEmpty.png"}
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
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2,
          overflow: "hidden",
          minHeight: "64px",
        }}
      >
        {title}
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
          {format(parseISO(date), "dd/mm/yyyy")}
        </Typography>
      </Box>
    </Box>
  );
};

export default PostOfGallery;