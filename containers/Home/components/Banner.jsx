import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  {
    id: 5,
    srcImg: "/banner1.png",
  },
  {
    id: 6,
    srcImg: "/banner1.png",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Banner = () => {
  const [ref, { width }] = useMeasure();

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
      // sx={{
      //   "& .swiper-pagination-bullet": {
      //     width: "12px",
      //     height: "12px",
      //     backgroundColor: "#E6E8EC",
      //   },

      //   "& .swiper-pagination": {
      //     position: "static",
      //     mt: "20px",
      //   },
      //   "& .swiper-pagination-bullet-active": {
      //     backgroundColor: "#B1B5C4",
      //   },
      // }}
    >
      <Slider {...settings}>
        {listBanner.length > 0 &&
          listBanner.map((item) => {
            return (
              <Box
                key={item.id}
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
                  src={item.srcImg}
                  alt="banner1"
                  width={width}
                  height={width / (1440 / 516)}
                />
              </Box>
            );
          })}
      </Slider>
      {/* <Swiper loop={true} pagination={true} modules={[Pagination]}>
        {listBanner.length > 0 &&
          listBanner.map((item) => {
            return (
              <SwiperSlide key={item.id}>
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
                    style={{
                      objectFit: "cover",
                      height: width / (1440 / 516),
                      width: width,
                    }}
                    src={item.srcImg}
                    alt="banner1"
                    width={width}
                    height={width / (1440 / 516)}
                  />
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper> */}
    </Box>
  );
};

export default Banner;
