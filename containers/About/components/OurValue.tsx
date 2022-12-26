import React, { useMemo } from "react";
import Image from "next/image";
import { Box, Typography, useTheme, styled } from "@mui/material";
import { useMeasure } from "react-use";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type OurValueProps = {
  data: {
    block_type: string
    value: { title: string, description: string }
  }[]
}

export default function OurValue({ data }: OurValueProps) {
  const [ref, { width, height }] = useMeasure();
  const theme = useTheme();


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
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
        <StyledTitle>
          {item.value.title}
        </StyledTitle>
        <StyledDesc>
          {item.value.description}
        </StyledDesc>
      </Box>
    })
  }, [data])
  return (
    <Box sx={{ my: "40px", cursor: "pointer" }}>
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
        <StyledWrapperSlider>
          <Slider {...settings} style={{ width: "100%" }}>
            {renderValue}
          </Slider>
        </StyledWrapperSlider>
      </Box>
    </Box>
  );
}

const StyledTitle = styled(Typography)(() => {
  return {
    fontSize: "24px",
    lineHeight: "32px",
    color: "#FCFCFD",
    marginBottom: "20px",
    textAlign: "center",
  }
})

const StyledDesc = styled(Typography)(() => {
  return {
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#FCFCFD",
  }
})

const StyledWrapperSlider = styled(Box)(() => {
  return {
    width: "90%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  }
})
