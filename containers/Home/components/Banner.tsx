import Link from "next/link";
import React, { useMemo, useState } from "react";

import { Box, styled } from "@mui/material";

import Slider from "react-slick";
import { useMeasure } from "react-use";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "components/Image";

import { responseSchema } from "interface";
import { HOME_PAGE } from "interface/responseSchema/home";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

type BannerProps = {
  data: responseSchema<HOME_PAGE>;
};

const Banner = ({ data }: BannerProps) => {
  const banners = data.items[0].banners;
  const [ref, { width }] = useMeasure();
  const [heightValue, setHeightValue] = useState<number>(1440 / 516);

  const renderBanner = useMemo(() => {
    if (banners === undefined) return;
    return banners.map((item, index) => {
      return (
        <Link href={item.value.link} key={index}>
          <Box height={width / heightValue}>
            <Image
              src={item.value.icon}
              alt="banner"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Link>
      );
    });
  }, [banners, width]);

  return (
    <StyledWrapper ref={ref} sx={{ height: width / heightValue }}>
      <Slider {...settings}>{renderBanner}</Slider>
    </StyledWrapper>
  );
};

export default Banner;

const StyledWrapper = styled(Box)(() => {
  return {
    marginBottom: "48px",
    "& .slick-dots li": {
      width: "10px !important",
    },
    "& .slick-dots li button:before": {
      margin: "0 !important",
      fontSize: "12px !important",
      color: "#B1B5C3 !important",
    },
  };
});
