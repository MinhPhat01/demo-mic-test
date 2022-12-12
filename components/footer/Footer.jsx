import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import MapIcon from "@mui/icons-material/Map";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Map from "../map/Map";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ background: "#00A859", width: "100%" }}>
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
            <Image src="/logo.png" alt="logo" width={115} height={80}></Image>
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
                fontFamily: "Poppins",
              }}
            >
              Menu
            </Typography>
            <Stack direction={"column"} rowGap={4}>
              <Typography
                variant="p"
                sx={{
                  color: "#FCFCFD",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                }}
              >
                About
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: "#FCFCFD",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                }}
              >
                News
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: "#FCFCFD",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                }}
              >
                Gallery
              </Typography>
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
                fontFamily: "Poppins",
              }}
            >
              Products
            </Typography>
            <Stack direction={"column"} spacing={2}>
              <Typography
                variant="p"
                sx={{
                  color: "#FCFCFD",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                }}
              >
                Chalkboard Chalk
              </Typography>
              <Typography
                variant="p"
                sx={{
                  width: "142px",
                  color: "#FCFCFD",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                }}
              >
                School Supplies and Student Tools
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: "#FCFCFD",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                }}
              >
                Office Supplies
              </Typography>
              <Typography
                variant="p"
                sx={{
                  color: "#FCFCFD",
                  fontSize: "14px",
                  lineHeight: "16px",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                }}
              >
                Art Supplies
              </Typography>
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
                fontFamily: "Poppins",
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
                  variant="p"
                  sx={{
                    color: "#FCFCFD",
                    fontSize: "14px",
                    lineHeight: "12px",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                >
                  373A Tran Phu St, Ward 8, District 5, HCM City
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={"9px"} alignItems={"center"}>
                <MailOutlineIcon
                  fontSize="small"
                  sx={{ color: "white" }}
                ></MailOutlineIcon>
                <Typography
                  variant="p"
                  sx={{
                    color: "#FCFCFD",
                    fontSize: "14px",
                    lineHeight: "12px",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                >
                  vanphong@tbgdphanmic.vn
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={"9px"} alignItems={"center"}>
                <PhoneIcon fontSize="small" sx={{ color: "white" }}></PhoneIcon>
                <Typography
                  variant="p"
                  sx={{
                    color: "#FCFCFD",
                    fontSize: "14px",
                    lineHeight: "12px",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                >
                  +(84) 28 3924 1814
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing="12px">
                <FacebookIcon sx={{ color: "white" }}></FacebookIcon>
                <InstagramIcon sx={{ color: "white" }}></InstagramIcon>
                <LinkedInIcon sx={{ color: "white" }}></LinkedInIcon>
                <TwitterIcon sx={{ color: "white" }}></TwitterIcon>
              </Stack>
            </Stack>
          </Grid>
          <Grid
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
            fontFamily: "Poppins",
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
            <FacebookIcon sx={{ color: "white" }}></FacebookIcon>
            <InstagramIcon sx={{ color: "white" }}></InstagramIcon>
            <LinkedInIcon sx={{ color: "white" }}></LinkedInIcon>
            <TwitterIcon sx={{ color: "white" }}></TwitterIcon>
          </Stack>
          Copyright © 2022 MINH DUC. All rights reserved
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
