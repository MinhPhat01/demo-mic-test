import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useMeasure } from "react-use";
import Title from "../../components/title/Title";
import MapIcon from "@mui/icons-material/Map";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Form from "./components/Form";

export default function Contact() {
  const [ref, { width }] = useMeasure();
  return (
    <Container sx={{ mb: "38px" }}>
      <Title title="CONTACT US" widthText="160px"></Title>
      <Grid container sx={{ mt: "40px" }} columnSpacing={4}>
        <Grid item md={6}>
          <Box
            ref={ref}
            sx={{ border: "12px solid #E6E8EC", borderRadius: "16px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.483233861418!2d106.67258331462244!3d10.774252692322952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed8cbafd0d7%3A0xab984a095c52189c!2zMTgxIMSQLiBDYW8gVGjhuq9uZywgUGjGsOG7nW5nIDEyLCBRdeG6rW4gMTAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1670574245701!5m2!1svi!2s"
              width={width}
              height={width / (520 / 376)}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
          <Box sx={{ mt: "28px" }}>
            <Stack direction={"column"} spacing={1}>
              <Stack fontSize="small" direction={"row"} alignItems={"center"}>
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
              <Stack direction={"row"} alignItems={"center"}>
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
              <Stack direction={"row"} alignItems={"center"}>
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
        <Grid item md={6}>
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
