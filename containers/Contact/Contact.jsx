import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Title from "../../components/title/Title";
import MapIcon from "@mui/icons-material/Map";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Form from "./components/Form";
import Map from "../../components/map/Map";

export default function Contact() {
  const theme = useTheme();
  return (
    <Container sx={{ mb: "38px", mt: "40px" }}>
      <Title title="CONTACT US" widthText="160px" heightProps={10}></Title>
      <Grid container sx={{ mt: "40px" }} columnSpacing={4}>
        <Grid
          item
          md={6}
          sx={{
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          }}
        >
          <Map />
          <Box sx={{ mt: "28px" }}>
            <Stack direction={"column"} spacing={1}>
              <Stack
                fontSize="small"
                direction={"row"}
                alignItems={"center"}
                spacing={1}
              >
                <MapIcon sx={{ color: "#23262F" }}></MapIcon>
                <Typography
                  variant="p"
                  sx={{
                    color: "#23262F",
                    fontSize: "12px",
                    lineHeight: "20pxF",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                >
                  373A Tran Phu St, Ward 8, District 5, HCM City
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <MailOutlineIcon
                  fontSize="small"
                  sx={{ color: "#23262F" }}
                ></MailOutlineIcon>
                <Typography
                  variant="p"
                  sx={{
                    color: "#23262F",
                    fontSize: "12px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                >
                  vanphong@tbgdphanmic.vn
                </Typography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <PhoneIcon
                  fontSize="small"
                  sx={{ color: "#23262F" }}
                ></PhoneIcon>
                <Typography
                  variant="p"
                  sx={{
                    color: "#23262F",
                    fontSize: "12px",
                    lineHeight: "20px",
                    fontWeight: "400",
                    fontFamily: "Poppins",
                  }}
                >
                  +(84) 28 3924 1814
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing="12px">
                <FacebookIcon sx={{ color: "#23262F" }}></FacebookIcon>
                <InstagramIcon sx={{ color: "#23262F" }}></InstagramIcon>
                <LinkedInIcon sx={{ color: "#23262F" }}></LinkedInIcon>
                <TwitterIcon sx={{ color: "#23262F" }}></TwitterIcon>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "#23262F",
              fontFamily: "Poppins",
              fontWeight: "500",
              mb: "32px",
            }}
          >
            Please send us a message if you need any help!
          </Typography>
          <Form></Form>
        </Grid>
      </Grid>
    </Container>
  );
}
