import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Stack, Typography, useTheme, styled } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Map from "components/map/Map"
import PhoneIcon from "@mui/icons-material/Phone";
import useSWR from "swr";
import { HOME_PAGE_COMMON } from "interface/responseSchema/common";
import { transformUrl } from "libs/transformUrl";
import { PAGES_API, TYPE_PARAMS } from "apis";
import { menuOfFooter } from "constant";
import { responseSchema } from "interface";
import { PRODUCT_CATEGORIES_ITEMS } from "interface/responseSchema/product";

const Footer = ({ initData }: { initData: HOME_PAGE_COMMON }) => {
  const theme = useTheme();
  const data = initData[0]
  const { data: dataProduct } = useSWR<responseSchema<PRODUCT_CATEGORIES_ITEMS>>(transformUrl(PAGES_API, {
    locale: "en",
    fields: "*",
    type: TYPE_PARAMS["product.ProductCategoryPage"]
  }));
  const categoryList = dataProduct?.items;

  const renderProduct = useMemo(() => {
    if (!categoryList) return null;
    return categoryList.map((item) => {
      return (
        <Link key={item.id} href={`/products?child_of=${item.id}`}>
          <StyledText>
            {item.title}
          </StyledText>
        </Link>
      );
    });
  }, [categoryList]);

  const renderMenu = useMemo(() => {
    return (
      menuOfFooter.length > 0 &&
      menuOfFooter.map((item) => {
        return (
          <Link key={item.id} href={item.href}>
            <StyledText>
              {item.name}
            </StyledText>
          </Link>
        );
      })
    );
  }, []);

  const renderListSocial = useMemo(() => {
    return data?.social_icons.map((item, index) => {
      return (
        <Link href={item.value.link} key={index}>
          <Image
            alt={"social"}
            src={item.value.icon}
            width={20}
            height={20}
          />
        </Link>
      );
    })
  }, [data?.social_icons])

  if (!data) return null;
  return (
    <Box sx={{ background: "#00A859" }}>
      <Container sx={{ pt: "80px" }}>
        <Grid
          container
          sx={{
            mb: "48px",
            [theme.breakpoints.down("md")]: {
              rowGap: "40px",
            },
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              [theme.breakpoints.down("md")]: {
                pb: "32px",
                borderBottom: "1px solid #F4F5F6",
              },
            }}
          >
            <Link href="/">
              <Image src={data.logo} alt="logo" width={115} height={80} style={{ objectFit: "contain" }}></Image>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              [theme.breakpoints.down("md")]: {
                pb: "32px",
                borderBottom: "1px solid #F4F5F6",
              },
            }}
          >
            <StyledHeading variant="h3">
              Menu
            </StyledHeading>
            <Stack direction={"column"} rowGap={4}>
              {renderMenu}
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            }}
          >
            <StyledHeading variant="h3">
              Products
            </StyledHeading>
            <Stack direction={"column"} spacing={2}>
              {renderProduct}
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              [theme.breakpoints.down("md")]: {
                pb: "32px",
                borderBottom: "1px solid #F4F5F6",
              },
            }}
          >
            <StyledHeading variant="h3">
              Address
            </StyledHeading>
            <Stack direction={"column"} spacing={2}>
              <Stack
                fontSize="small"
                direction={"row"}
                spacing={"9px"}
                alignItems={"center"}
              >
                <MapIcon sx={{ color: "white" }}></MapIcon>
                <StyledText>
                  {data.address}
                </StyledText>
              </Stack>
              {data.emails.map((item, index) => {
                return (
                  <Stack key={index} direction={"row"} alignItems="center" spacing={1} >
                    <MailOutlineIcon
                      fontSize="small"
                      sx={{ color: "white" }}
                    />
                    <a href={`mailto: ${item.value}`}>
                      <StyledText>
                        {item.value}
                      </StyledText>
                    </a>
                  </Stack>
                )
              })}
              <Stack direction={"row"} spacing={"9px"} alignItems={"center"}>
                <PhoneIcon fontSize="small" sx={{ color: "white" }}></PhoneIcon>
                <StyledText>
                  <a href={`tel: ${data.hotline}`}>{data.hotline}</a>
                </StyledText>
              </Stack>
              <Stack direction="row" alignItems="center" spacing="12px">
                {renderListSocial}
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
          >
            <Map />
          </Grid>
        </Grid>
        <StyledBoxCopyright>
          <Stack
            direction="row"
            alignItems="center"
            spacing="12px"
            sx={{
              mb: "10px",
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
          >
            {renderListSocial}
          </Stack>
          Copyright © 2022 MINH DUC. All rights reserved
        </StyledBoxCopyright>
      </Container>
    </Box>
  );
};

export default Footer;

const StyledText = styled(Typography)(() => {
  return {
    color: "#FCFCFD",
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: "400",
  }
})

const StyledHeading = styled(Typography)(() => {
  return {
    marginBottom: "40px",
    color: "#FCFCFD",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
  }
})

const StyledBoxCopyright = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    borderTop: "1px solid #F4F5F6",
    padding: "32px 0",
    color: "#F4F5F6",
    fontSize: "12px",
    lineHeight: "20px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  }
})
