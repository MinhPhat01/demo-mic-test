import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useMemo } from "react";
import { useMeasure } from "react-use";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  data: {
    block_type: string
    value: { title: string, description: string }
  }[]
}

export default function OurValue({ data }: Props) {
  console.log("🚀 ~ file: OurValue.tsx:17 ~ OurValue ~ data", data)
  const [ref, { width, height }] = useMeasure();
  const theme = useTheme();


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const renderValue = useMemo(() => {
    return data.map((item, index) => {
      return <Box key={index} sx={{ padding: "0px 20px" }}>
        <Typography
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            color: "#FCFCFD",
            mb: "20px",
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
    })
  }, [data])
  return (
    <Box sx={{ my: "40px" }}>

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
            width: "90%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Slider {...settings} style={{ width: "100%" }}>
            {renderValue}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
