import React from "react";
import Image from "next/image";
import { Box, Typography, styled } from "@mui/material";
import { useMeasure } from "react-use";

type TitleProps = {
  title: string,
  widthText?: string,
  lineHeight?: number,
};

const Title = ({ title, widthText, lineHeight = 0 }: TitleProps) => {
  const [ref, { width, height }] = useMeasure();
  const widthImg = width + 80;
  const heightImg = height + lineHeight;

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
      <StyledTitle
        ref={ref}
        sx={{
          width: widthText,
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
  }
})
