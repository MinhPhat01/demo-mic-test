import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgLarge from "./components/ImgLarge";
import ImgSmall from "./components/ImgSmall";
import { imgECommerce } from "../../constant";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import useMeasure from "react-use-measure";
import Image from "next/image";
import useSWR from "swr";
import { useRouter } from "next/router";
import RelatedProduct from "./components/RelatedProduct";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useSWR(
    `https://mic.t-solution.vn/api/v2/pages/${id}`,
    fetcher
  );
  const parentId = data?.meta.parent.id;
  const listImg = data?.images;

  const theme = useTheme();
  const [ref, { width }] = useMeasure();
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const renderListImgLarge = useMemo(() => {
    if (!listImg) return null;
    return listImg.map((item, index) => {
      return <ImgLarge key={index} imgSrc={item.value} />;
    });
  }, [listImg]);

  const renderListImgSmall = useMemo(() => {
    if (!listImg) return null;
    return listImg.map((item, index) => {
      return <ImgSmall key={index} imgSrc={item.value} />;
    });
  }, [listImg]);

  if (!data) return null;
  return (
    <Container sx={{ mb: "108px" }}>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ cursor: "pointer" }}>
            <Slider asNavFor={nav2} ref={slider1}>
              {renderListImgLarge}
            </Slider>
          </Box>
          <Box
            sx={{ cursor: "pointer", mt: "20px", width: "100%", height: "259" }}
          >
            <Slider
              asNavFor={nav1}
              ref={slider2}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              slidesToScroll={1}
              infinite={listImg.length > 3 ? true : false}
            >
              {renderListImgSmall}
            </Slider>
          </Box>
        </Grid>
        <Grid xs={12} item md={6}>
          <Typography
            variant="h5"
            sx={{
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: "600",
              fontFamily: "Poppins",
              color: "#23262",
              [theme.breakpoints.down("md")]: {
                fontSize: "32px",
                lineHeight: "40px",
                mt: "30px",
              },
            }}
          >
            {data?.title}
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
              [theme.breakpoints.down("md")]: {
                fontSize: "16px",
                lineHeight: "24px",
              },
            }}
          >
            Specification: {data?.description}
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
            {data?.specification}
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
        <RelatedProduct parentId={parentId} id={id} />
      </Grid>
    </Container>
  );
}
