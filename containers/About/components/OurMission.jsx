import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";
import Title from "../../../components/title/Title";
import useSWR from "swr";
import DOMPurify from "dompurify";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function OurMission() {
  const theme = useTheme();
  const [ref, { width }] = useMeasure();
  const { data } = useSWR(
    "https://mic.t-solution.vn/api/v2/pages/?fields=*&type=about.AboutPage&locale=en",
    fetcher
  );
  if (!data) return null;
  const { mission_content } = data?.items[0];

  return (
    <Box>
      <Title title={"Our Mission"} widthText={"140px"}></Title>
      <Box>
        {mission_content.map((item, index) => {
          return (
            <Box
              key={index}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(item.value, {}),
              }}
              sx={{
                mb: "20px",
                "& img": {
                  width: width,
                  height: (width * 9) / 16,
                },
                "& h1,h2,h3,h4,h5,h6": {
                  fontSize: "40px",
                  lineHeight: "48px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  [theme.breakpoints.down("md")]: {
                    textAlign: "center",
                  },
                },
                "& i, p, ul, li, blockquote": {
                  fontSize: "24px",
                  lineHeight: "32px",
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  color: "#141416",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "16px",
                    lineHeight: "24px",
                    textAlign: "justify",
                  },
                },
              }}
              ref={ref}
            />
          );
        })}
      </Box>
      {/* <Box ref={ref} sx={{ mt: "24px", width: "100%" }}>
        <Image
          src={"/bgEmpty.png"}
          width={width}
          height={(width * 9) / 16}
          alt="banner1"
          style={{ borderRadius: "20px" }}
        ></Image>
      </Box>
      <Box sx={{ my: "32px" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#141416",
          }}
        >
          What is Lorem Ipsum?
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            fontFamily: "Poppins",
            fontWeight: "400",
            color: "#141416",
            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
              fontWeight: "24px",
              textAlign: "justify",
            },
          }}
        >
          {`
            Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          `}
        </Typography>
      </Box>
      <Box sx={{ my: "32px" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            fontFamily: "Poppins",
            fontWeight: "600",
            color: "#141416",
          }}
        >
          What is Lorem Ipsum?
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            lineHeight: "32px",
            fontFamily: "Poppins",
            fontWeight: "400",
            color: "#141416",
            [theme.breakpoints.down("md")]: {
              fontSize: "16px",
              fontWeight: "24px",
              textAlign: "justify",
            },
          }}
        >
          {`
            Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
          `}
        </Typography>
      </Box> */}
    </Box>
  );
}
