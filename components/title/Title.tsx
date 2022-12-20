import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";

type TITLE = {
  title: string,
  widthText?: string,
  heightProps?: number,
};

const Title = ({ title, widthText, heightProps = 0 }: TITLE) => {
  const [ref, { width, height }] = useMeasure();
  const widthImg = width + 80;
  const heightImg = height + heightProps;

  return (
    <Box
      sx={{
        position: "relative",
        width: widthImg,
        margin: "0 auto",
      }}
    >
      <Image
        width={widthImg}
        height={heightImg}
        alt="frame"
        src="/frame.png"
        style={{ objectFit: "cover", height: heightImg }}
      ></Image>
      <Typography
        ref={ref}
        sx={{
          textAlign: "center",
          width: widthText,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          color: "#00A859",
          fontSize: "24px",
          lineHeight: "24Fpx",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
