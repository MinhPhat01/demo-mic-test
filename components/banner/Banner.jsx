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
  };
  const [ref, { width, height }] = useMeasure();

  return (
    <Box
      sx={{
        mt: "24px",
        "& .slick-arrow": {
          display: "none !important",
        },
        "& .slick-dots li": {
          width: "10px !important",
        },
        "& .slick-dots li button:before": {
          margin: "10px 0 0 0 !important",
          fontSize: "12px !important",
          color: "#B1B5C3 !important",
        },
      }}
      className="test"
    >
      <Slider {...settings}>
        {listBanner.length > 0 &&
          listBanner.map((item) => {
            return (
              <Box
                key={item.id}
                ref={ref}
                sx={{ borderRadius: "8px", width: "100%", height: "516px" }}
              >
                <Image
                  src={item.srcImg}
                  alt="banner1"
                  objectFit="cover"
                  width={width}
                  height={height}
                />
              </Box>
            );
          })}
      </Slider>
    </Box>
  );
};

export default Banner;
