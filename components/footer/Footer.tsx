import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useMemo } from "react";
import MapIcon from "@mui/icons-material/Map";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import Map from "components/map/Map"
import useSWR from "swr";
import Link from "next/link";
import { HOME_PAGE_COMMON } from "interface/responseSchema/common";
import { transformUrl } from "libs/transformUrl";
import { PAGES_API, TYPE_PARAMS } from "apis";
import { menuOfFooter } from "constant";
import { responseSchema } from "interface";
import { PRODUCT_CATEGORIES_ITEMS } from "interface/responseSchema/product";

const Footer = () => {
  const theme = useTheme();
  const { data } = useSWR<HOME_PAGE_COMMON>("https://mic.t-solution.vn/api/v2");

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
          <Typography
            sx={{
              color: "#FCFCFD",
              fontSize: "14px",
              lineHeight: "16px",
              fontWeight: "400",

            }}
          >
            {item.title}
          </Typography>
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
            <Typography
              sx={{
                color: "#FCFCFD",
                fontSize: "14px",
                lineHeight: "16px",
                fontWeight: "400",
              }}
            >
              {item.name}
            </Typography>
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
              <Image src={data.logo} alt="logo" width={115} height={80}></Image>
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
            <Typography
              variant="h3"
              sx={{
                mb: "40px",
                color: "#FCFCFD",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "500",
              }}
            >
              Menu
            </Typography>
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
            <Typography
              variant="h3"
              sx={{
                mb: "40px",
                color: "#FCFCFD",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "500",
              }}
            >
              Products
            </Typography>
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
            <Typography
              variant="h3"
              sx={{
                mb: "40px",
                color: "#FCFCFD",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "500",
              }}
            >
              Address
            </Typography>
            <Stack direction={"column"} spacing={2}>
              <Stack
                fontSize="small"
                direction={"row"}
                spacing={"9px"}
                alignItems={"center"}
              >
                <MapIcon sx={{ color: "white" }}></MapIcon>
                <Typography
                  sx={{
                    color: "#FCFCFD",
                    fontSize: "14px",
                    lineHeight: "12px",
                    fontWeight: "400",
                  }}
                >
                  {data.address}
                </Typography>
              </Stack>
              {data.emails.map((item, index) => {
                return (
                  <Stack key={index} direction={"row"} alignItems="center" spacing={1} >
                    <MailOutlineIcon
                      fontSize="small"
                      sx={{ color: "white" }}
                    />
                    <a href={`mailto: ${item.value}`}>
                      <Typography
                        sx={{
                          color: "white",
                          fontSize: "14px",
                          lineHeight: "12px",
                          fontWeight: "400",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </a>
                  </Stack>
                )
              })}
              <Stack direction={"row"} spacing={"9px"} alignItems={"center"}>
                <PhoneIcon fontSize="small" sx={{ color: "white" }}></PhoneIcon>
                <Typography
                  sx={{
                    color: "#FCFCFD",
                    fontSize: "14px",
                    lineHeight: "12px",
                    fontWeight: "400",
                  }}
                >
                  <a href={`tel: ${data.hotline}`}>{data.hotline}</a>
                </Typography>
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
        <Box
          sx={{
            width: "100%",
            borderTop: "1px solid #F4F5F6",
            py: "32px",
            color: "#F4F5F6",
            fontSize: "12px",
            lineHeight: "20px",
            [theme.breakpoints.down("md")]: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
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
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
