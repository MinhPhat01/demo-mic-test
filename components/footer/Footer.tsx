import Link from "next/link";
import React, { useMemo } from "react";

import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
  styled,
} from "@mui/material";

import Map from "components/map/Map";
import Image from "components/Image";
import { menuOfFooter } from "constant";
import { HOME_PAGE_COMMON } from "interface/responseSchema/common";
import { PRODUCT_CATEGORIES_ITEMS } from "interface/responseSchema/product";

type FooterProps = {
  data?: HOME_PAGE_COMMON;
  dataCategory?: PRODUCT_CATEGORIES_ITEMS[];
};

const Footer = ({ data, dataCategory }: FooterProps) => {
  const theme = useTheme();
  const renderProduct = useMemo(() => {
    if (!dataCategory) return;
    return dataCategory.map((item) => {
      return (
        <Link key={item.id} href={`/products?child_of=${item.id}`}>
          <Typography variant="h3">{item.title}</Typography>
        </Link>
      );
    });
  }, [dataCategory]);

  const renderMenu = useMemo(() => {
    return (
      menuOfFooter.length > 0 &&
      menuOfFooter.map((item) => {
        return (
          <Link key={item.id} href={item.href}>
            <Typography variant="h3">{item.name}</Typography>
          </Link>
        );
      })
    );
  }, []);

  const renderListSocial = useMemo(() => {
    return data?.social_icons.map((item, index) => {
      return (
        <Link href={item.value.link} key={index}>
          <Image alt={"social"} src={item.value.icon} width={20} height={20} />
        </Link>
      );
    });
  }, [data?.social_icons]);

  if (!data) return;

  return (
    <Box sx={{ background: theme.palette.primary.main }}>
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
              <Image
                src={data.logo}
                alt="logo"
                width={115}
                height={80}
                style={{ objectFit: "contain" }}
              ></Image>
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
            <StyledHeading variant="h3">Menu</StyledHeading>
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
            <StyledHeading variant="h3">Products</StyledHeading>
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
            <StyledHeading variant="h3">Address</StyledHeading>
            <Stack direction={"column"} spacing={2}>
              <a
                href="https://www.google.com/maps/place/373a+D%C6%B0%C6%A1ng+Tr%E1%BA%A7n+Ph%C3%BA,+Ph%C6%B0%E1%BB%9Dng+8,+Qu%E1%BA%ADn+5,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7556325,106.6720607,19z/data=!3m1!4b1!4m5!3m4!1s0x31752efcfa00ab03:0xd7a145dc04f2843c!8m2!3d10.7556325!4d106.6726079?hl=vi"
                target="_blank"
                rel="noreferrer"
              >
                <Stack
                  fontSize="small"
                  direction={"row"}
                  spacing={"9px"}
                  alignItems={"center"}
                >
                  <MapIcon sx={{ color: "white" }}></MapIcon>
                  <Typography variant="h3">{data.address}</Typography>
                </Stack>
              </a>
              {data.emails.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    direction={"row"}
                    alignItems="center"
                    spacing={1}
                  >
                    <MailOutlineIcon fontSize="small" sx={{ color: "white" }} />
                    <a href={`mailto: ${item.value}`}>
                      <Typography variant="h3">{item.value}</Typography>
                    </a>
                  </Stack>
                );
              })}
              <Stack direction={"row"} spacing={"9px"} alignItems={"center"}>
                <PhoneIcon fontSize="small" sx={{ color: "white" }}></PhoneIcon>
                <Typography variant="h3">
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

const StyledHeading = styled(Typography)(() => {
  return {
    marginBottom: "40px",
    color: "#FCFCFD",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
  };
});

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
  };
});
