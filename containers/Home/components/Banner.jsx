import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSWR from "swr";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const fetcher = (url) => fetch(url).then((res) => res.json());

const Banner = () => {
  const [ref, { width }] = useMeasure();
  const { data, error } = useSWR(
    "https://mic.t-solution.vn/api/v2/pages/?fields=*&type=home.HomePage&locale=en",
    fetcher
  );
  if (!data) return null;
  const { banners } = data.items[0];

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
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
        {banners.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                userSelect: "none",
                borderRadius: "8px",
                width: "100%",
                // height: width / (1440 / 516),
              }}
            >
              <Image
                style={{
                  objectFit: "cover",
                  height: width / (1440 / 516),
                  width: width,
                }}
                src={item.value.icon}
                alt="banner"
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
