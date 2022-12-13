import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";
import Title from "../../../components/title/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function OurValue() {
  const [ref, { width, height }] = useMeasure();
  const theme = useTheme();
  const { data } = useSWR(
    "https://mic.t-solution.vn/api/v2/pages/?fields=*&type=about.AboutPage&locale=en",
    fetcher
  );
  if (!data) return null;

  const { value_content } = data.items[0];

  const settings = {
    dots: false,
    infinite: true,
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
        }}
      >
        <Image
          src="/board.png"
          width={width}
          alt="board"
          height={(width * 9) / 16}
          style={{ objectFit: "cover" }}
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
            {value_content.map((item, index) => {
              return (
                <Box key={index} sx={{ padding: "0px 20px" }}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "#FCFCFD",
                      mb: "40px",
                      textAlign: "center",
                    }}
                  >
                    {item.value.title}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#FCFCFD",
                    }}
                  >
                    {item.value.description}
                  </Typography>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
