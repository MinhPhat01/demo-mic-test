import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";
import Title from "../../../components/title/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurValue() {
  const [ref, { width, height }] = useMeasure();
  const theme = useTheme();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box sx={{ my: "40px" }}>
      <Title title={"Our Value"} widthText="120px" />
      <Box
        ref={ref}
        sx={{
          width: "100%",
          mt: "20px",
          position: "relative",
          height: (width * 9) / 16,
          [theme.breakpoints.down("md")]: {
            height: width / 622 / 311,
          },
        }}
      >
        <Image
          src="/board.png"
          width={width}
          alt="board"
          height={height}
          style={{ objectFit: "cover", height: height }}
        ></Image>
        <Box
          sx={{
            "& .slick-arrow": {
              display: "none !important",
            },
            width: "80%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Slider {...settings} style={{ width: "100%" }}>
            <Box sx={{ padding: "0px 20px" }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "#FCFCFD",
                  mb: "40px",
                  textAlign: "center",
                }}
              >
                Value 1
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#FCFCFD",
                }}
              >
                {`
             Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              `}
              </Typography>
            </Box>
            <Box sx={{ padding: "0px 20px" }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "#FCFCFD",
                  mb: "40px",
                  textAlign: "center",
                }}
              >
                Value 2
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#FCFCFD",
                }}
              >
                {`
             Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              `}
              </Typography>
            </Box>
            <Box sx={{ padding: "0px 20px" }}>
              <Typography
                sx={{
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "#FCFCFD",
                  mb: "40px",
                  textAlign: "center",
                }}
              >
                Value 3
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#FCFCFD",
                }}
              >
                {`
             Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              `}
              </Typography>
            </Box>
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
