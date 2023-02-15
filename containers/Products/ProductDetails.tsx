import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo, useRef } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMeasure from "react-use-measure";

import RelatedProduct from "./components/RelatedProduct";
import ImgOfProductDetail from "./components/ImgOfProductDetail";

import { IPage } from "interface";
import { imgECommerce } from "constants";
import { PRODUCT_DETAIL_ITEMS } from "interface/responseSchema/product";

export type ProductDetailsProps = IPage<[PRODUCT_DETAIL_ITEMS]>;

export default function ProductDetails(props: ProductDetailsProps) {
  const router = useRouter();
  const { id } = router.query;

  const { initData } = props;
  const data = initData[0];

  const parentId = data?.meta?.parent?.id;
  const listImg = data?.images;

  const [ref, { width }] = useMeasure();
  const popupState = usePopupState({ variant: "popover", popupId: "demoMenu" });

  const refSlider = useRef<{
    ref1: Slider | undefined;
    ref2: Slider | undefined;
  }>({
    ref1: undefined,
    ref2: undefined,
  });

  const renderListImg = useMemo(() => {
    if (!listImg) return null;
    return listImg.map((item, index) => {
      return <ImgOfProductDetail key={index} imgSrc={item.value} />;
    });
  }, [listImg]);

  const renderListSmallImg = useMemo(() => {
    if (!listImg) return null;
    return listImg.map((item, index) => {
      return <ImgOfProductDetail key={index} imgSrc={item.value} />;
    });
  }, [listImg]);

  const renderListBuy = useMemo(() => {
    return imgECommerce.map((item) => {
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
    });
  }, [imgECommerce]);

  return (
    <Container sx={{ mb: "108px", mt: "40px" }}>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ cursor: "pointer" }}>
            <Slider
              asNavFor={refSlider.current.ref2}
              ref={(slider) => {
                refSlider.current.ref1 = slider;
              }}
            >
              {renderListImg}
            </Slider>
          </Box>
          <Box
            sx={{ cursor: "pointer", mt: "20px", width: "100%", height: "259" }}
          >
            <Slider
              asNavFor={refSlider.current.ref1}
              ref={(slider) => {
                refSlider.current.ref2 = slider;
              }}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
              slidesToScroll={1}
              infinite={listImg.length > 3 ? true : false}
            >
              {renderListSmallImg}
            </Slider>
          </Box>
        </Grid>
        <Grid xs={12} item md={6}>
          <StyledText variant="h5">{data?.title}</StyledText>
          <StyledText variant="h6">
            Specification: {data?.description}
          </StyledText>
          <StyledDetails>{data?.specification}</StyledDetails>
          <Box
            sx={{
              "& .MuiPaper-root": {
                width: "100px",
              },
            }}
          >
            <StyledButton
              ref={ref}
              {...bindTrigger(popupState)}
              disableRipple={true}
              variant="contained"
            >
              Buy Now
            </StyledButton>
            <Menu
              sx={{
                "& .MuiList-root": {
                  width: width,
                },
              }}
              {...bindMenu(popupState)}
              disableScrollLock={true}
            >
              {renderListBuy}
            </Menu>
          </Box>
        </Grid>
        <RelatedProduct parentId={parentId} id={id} />
      </Grid>
    </Container>
  );
}

const StyledText = styled(Typography)(({ theme }) => {
  return {
    fontSize: "40px",
    lineHeight: "48px",
    fontWeight: "600",
    color: "#23262",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
      lineHeight: "40px",
      marginTop: "30px",
    },
  };
});

const StyledDetails = styled(Typography)(() => {
  return {
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "justify",
    marginBottom: "16px",
  };
});

const StyledButton = styled(Button)(() => {
  return {
    padding: "16px 24px",
    background: "#00A859 !important",
    borderRadius: "8px",
    color: "#FCFCFD",
    fontSize: "16px",
    lineHeight: "16px",
    fontWeight: "700",
    textTransform: "none",
  };
});
