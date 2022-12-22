import { Box, useTheme } from "@mui/material";
import React from "react";
import { useMeasure } from "react-use";
import DOMPurify from "isomorphic-dompurify";

export default function OurMission({ content }: { content: string }) {

  const theme = useTheme();
  const [ref, { width }] = useMeasure();
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content, {}),
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
          fontWeight: "600",
          [theme.breakpoints.down("md")]: {
            textAlign: "center",
          },
        },
        "& i, p, ul, li, blockquote": {
          fontSize: "24px",
          lineHeight: "32px",
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
}
