import React from "react";

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import { IPage } from "interface";
import { HOME_PAGE_COMMON } from "interface/responseSchema/common";

import Form from "./components/Form";
import Map from "components/map/Map";
import Title from "components/title/Title";

export type PropsContact = IPage<[HOME_PAGE_COMMON]>;

export default function Contact(props: PropsContact) {
  const { initData } = props;
  const data = initData[0];

  const theme = useTheme();

  return (
    <Container sx={{ mb: "38px", mt: "40px" }}>
      <Title title="CONTACT US" widthOfText="160px" heightOfText={10} />
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
                <StyledText>{data.address}</StyledText>
              </Stack>
              {data.emails.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    direction={"row"}
                    alignItems="center"
                    spacing={1}
                  >
                    <MailOutlineIcon
                      fontSize="small"
                      sx={{ color: "#23262F" }}
                    />
                    <a href={`mailto: ${item.value}`}>
                      <StyledText>{item.value}</StyledText>
                    </a>
                  </Stack>
                );
              })}
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                <PhoneIcon
                  fontSize="small"
                  sx={{ color: "#23262F" }}
                ></PhoneIcon>
                <StyledText>
                  <a href={`tel: ${data.hotline}`}>{data.hotline}</a>
                </StyledText>
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
          <StyledTitleForm>
            Please send us a message if you need any help!
          </StyledTitleForm>
          <Form></Form>
        </Grid>
      </Grid>
    </Container>
  );
}

const StyledText = styled(Typography)(() => {
  return {
    color: "#23262F",
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: "400",
  };
});

const StyledTitleForm = styled(Typography)(() => {
  return {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#23262F",
    fontWeight: "500",
    marginBottom: "32px",
  };
});
