import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMeasure } from "react-use";

const listBanner = [
  {
    id: 1,
    srcImg: "/banner1.png",
  },
  {
    id: 2,
    srcImg: "/banner1.png",
  },
  {
    id: 3,
    srcImg: "/banner1.png",
  },
  {
    id: 4,
    srcImg: "/banner1.png",
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  const [ref, { width }] = useMeasure();

  return (
    <Box
      sx={{
        height: width / (1440 / 516),
        "& .slick-arrow": {
          display: "none !important",
        },
        "& .slick-dots li": {
          width: "10px !important",
        },
        "& .slick-dots li button:before": {
          margin: "0 !important",
          fontSize: "12px !important",
          color: "#B1B5C3 !important",
        },
      }}
    >
      <Slider {...settings}>
        {listBanner.length > 0 &&
          listBanner.map((item) => {
            return (
              <Box
                key={item.id}
                ref={ref}
                sx={{
                  borderRadius: "8px",
                  width: "100%",
                  height: width / (1440 / 516),
                }}
              >
                <Image
                  style={{ objectFit: "cover", height: width / (1440 / 516) }}
                  src={item.srcImg}
                  alt="banner1"
                  width={width}
                  height={width / (1440 / 516)}
                />
              </Box>
            );
          })}
      </Slider>
    </Box>
  );
};

export default Banner;
