import React from "react";
import Image from "next/image";
import { useMeasure } from "react-use";
import { Box, Typography, styled } from "@mui/material";

type TitleProps = {
  title: string;
  widthOfText?: string;
  heightOfText?: number;
};

const Title = ({ title, widthOfText, heightOfText = 0 }: TitleProps) => {
  const [ref, { width, height }] = useMeasure();
  const sizeWidth = width + 80;
  const sizeHeight = height + heightOfText;

  return (
    <Box
      sx={{
        position: "relative",
        width: sizeWidth,
        margin: "0 auto",
        userSelect: "none",
      }}
    >
      <Image
        width={sizeWidth}
        height={sizeHeight}
        alt="frame"
        src="/frame.png"
        style={{
          objectFit: "cover",
          height: sizeHeight,
          pointerEvents: "none",
        }}
      ></Image>
      <StyledTitle
        ref={ref}
        sx={{
          width: widthOfText,
        }}
      >
        {title}
      </StyledTitle>
    </Box>
  );
};

export default Title;

const StyledTitle = styled(Typography)(() => {
  return {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "#00A859",
    fontSize: "24px",
    lineHeight: "24Fpx",
  };
});
