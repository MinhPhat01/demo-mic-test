import { Box, Container, useTheme } from "@mui/material";
import React from "react";
import DOMPurify from 'isomorphic-dompurify';
import { useMeasure } from "react-use";
import { IPage } from "interface";
import { NEW_DETAIL_ITEMS } from "interface/responseSchema/news";

export type NewDetailProps = IPage<[NEW_DETAIL_ITEMS]>

export default function NewDetail(props: NewDetailProps) {
  const { initData } = props
  const content = initData[0].content
  const theme = useTheme();
  const [ref, { width }] = useMeasure();

  return (
    <Container sx={{ mb: "67px", mt: '40px' }}>
      {content.map((item, index) => {
        return (
          <Box
            key={index}
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
              __html: DOMPurify.sanitize(item.value, {}),
            }}
          ></Box>
        )
      })}
    </Container>
  );
}
