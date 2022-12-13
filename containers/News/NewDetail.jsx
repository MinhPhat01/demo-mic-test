import { Box, Container, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Content from "./components/Content";
import useSWR from "swr";
import DOMPurify from "dompurify";
import { useMeasure } from "react-use";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function NewDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(
    `https://mic.t-solution.vn/api/v2/pages/${id}`,
    fetcher
  );
  const theme = useTheme();
  const [ref, { width }] = useMeasure();
  if (!data) return null;
  return (
    <Container sx={{ mb: "67px" }}>
      <Box
        sx={{
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
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data.content[0].value, {}),
        }}
      ></Box>
      {/* <Typography
        variant="h3"
        sx={{
          fontSize: "40px",
          lineHeight: "48px",
          fontFamily: "Poppins",
          fontWeight: "600",
          [theme.breakpoints.down("md")]: {
            textAlign: "center",
          },
        }}
      >
        Lorem Ipsum
      </Typography>
      <Content></Content>
      <Content></Content> */}
    </Container>
  );
}
