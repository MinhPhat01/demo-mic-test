import { Box } from "@mui/material";
import React from "react";
import { useMeasure } from "react-use";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { responseSchema } from "interface";
import { HOME_PAGE } from "interface/responseSchema/home";
import Link from "next/link";
import Image from "components/Image"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

type Props = {
  data: responseSchema<HOME_PAGE>
}


const Banner = ({ data }: Props) => {
  const banners = data.items[0].banners
  const [ref, { width }] = useMeasure();

  return (
    <Box
      ref={ref}
      sx={{
        mb: "48px",
        height: width / (1440 / 516),
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
        {banners &&
          banners.map((item, index) => {
            return (
              <Link href={item.value.link} key={index}>
                <Box height={width / (1440 / 516)}
                >
                  <Image
                    src={item.value.icon}
                    alt="banner"
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Link>
            );
          })}
      </Slider>
    </Box >
  );
};

export default Banner;
