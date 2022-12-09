import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgLarge from "./components/ImgLarge";
import ImgSmall from "./components/ImgSmall";
import Title from "../../components/title/Title";
import {
  imgECommerce,
  listImgLarge,
  listImgSmall,
  listItem,
} from "../../constant";
import ProductItemV2 from "./components/ProductItemV2";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import useMeasure from "react-use-measure";
import Image from "next/image";

export default function ProductDetails() {
  const [ref, { width }] = useMeasure();
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <Container sx={{ mb: "108px" }}>
      <Grid container columnSpacing={4}>
        <Grid item md={6}>
          <Box sx={{ cursor: "pointer" }}>
            <Slider asNavFor={nav2} ref={slider1}>
              {listImgLarge.length > 0 &&
                listImgLarge.map((item) => {
                  return (
                    <ImgLarge key={item.id} imgSrc={item.imgSrc}></ImgLarge>
                  );
                })}
            </Slider>
          </Box>
          <Box sx={{ cursor: "pointer", mt: "20px" }}>
            <Slider
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {listImgSmall.length > 0 &&
                listImgSmall.map((item) => {
                  return <ImgSmall key={item.id} imgSrc={item.imgSrc} />;
                })}
            </Slider>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Typography
            variant="h5"
            sx={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: "600",
              fontFamily: "Poppins",
              color: "#23262",
            }}
          >
            Chalkboard Chalk
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "24px",
              lineHeight: "32px",
              fontWeight: "600",
              fontFamily: "Poppins",
              color: "#00A859",
              my: "16px",
            }}
          >
            Specification: 10 pieces/box
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Poppins",
              textAlign: "justify",
              mb: "16px",
            }}
          >
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.`}
          </Typography>
          <Box
            sx={{
              "& .MuiPaper-root": {
                width: "100px",
              },
            }}
          >
            <Button
              ref={ref}
              {...bindTrigger(popupState)}
              disableRipple={true}
              variant="contained"
              sx={{
                padding: "16px 24px",
                background: "#00A859 !important",
                borderRadius: "8px",
                color: "#FCFCFD",
                fontSize: "16px",
                lineHeight: "16px",
                fontFamily: "Lato",
                fontWeight: "700",
                textTransform: "none",
              }}
            >
              Buy Now
            </Button>
            <Menu
              sx={{
                "& .MuiList-root": {
                  width: width,
                },
              }}
              {...bindMenu(popupState)}
            >
              {imgECommerce.length > 0 &&
                imgECommerce.map((item) => {
                  return (
                    <MenuItem
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      key={item.id}
                      onClick={popupState.close}
                    >
                      <Image
                        src={item.imgSrc}
                        alt={item.name}
                        width={40}
                        height={40}
                      ></Image>
                    </MenuItem>
                  );
                })}
            </Menu>
          </Box>
        </Grid>
        <Grid item md={12} sx={{ mt: "88px" }}>
          <Title title={"RELATED PRODUCT"} widthText="240px"></Title>
          <Box mt={"24px"}>
            <Slider {...settings}>
              {listItem.length > 0 &&
                listItem.map((item) => {
                  return <ProductItemV2 key={item.id} pieces={item.pieces} />;
                })}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
