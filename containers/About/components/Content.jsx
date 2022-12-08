import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";
import Title from "../../../components/title/Title";

export default function Content({ title, widthTitle }) {
  const [ref, { width }] = useMeasure();
  return (
    <Box>
      <Title title={title} widthText={widthTitle}></Title>
      <Box ref={ref} sx={{ mt: "24px", width: "100%" }}>
        <Image
          src={"/bgEmpty.png"}
          width={width}
          height={(width * 9) / 16}
          alt="banner1"
          style={{ borderRadius: "20px" }}
        ></Image>
      </Box>
      <Box sx={{ my: "32px" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#141416",
          }}
        >
          What is Lorem Ipsum?
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            fontFamily: "Poppins",
            fontWeight: "400",
            color: "#141416",
          }}
        >
          {`
            Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          `}
        </Typography>
      </Box>
      <Box sx={{ my: "32px" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#141416",
          }}
        >
          What is Lorem Ipsum?
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            fontFamily: "Poppins",
            fontWeight: "400",
            color: "#141416",
          }}
        >
          {`
            Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          `}
        </Typography>
      </Box>
    </Box>
  );
}
