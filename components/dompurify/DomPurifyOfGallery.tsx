import React from "react";
import { useMeasure } from "react-use";
import { Box, useTheme, styled } from "@mui/material";
import DOMPurify from "isomorphic-dompurify";

type DomPurifyOfGalleryProps = {
  value: string | Node;
};

export default function DomPurifyOfGallery({ value }: DomPurifyOfGalleryProps) {
  const [ref, { width }] = useMeasure();
  return (
    <StyledBox
      sx={{
        "& img": {
          width: width,
          height: (width * 9) / 16,
        },
      }}
      ref={ref}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(value, {}),
      }}
    ></StyledBox>
  );
}

const StyledBox = styled(Box)(({ theme }) => {
  return {
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
  };
});
