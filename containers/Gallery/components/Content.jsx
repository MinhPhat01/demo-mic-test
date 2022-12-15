import { Box, Typography, useTheme } from "@mui/material";
import DOMPurify from "dompurify";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useMeasure } from "react-use";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Content() {
  const theme = useTheme();
  const [ref, { width }] = useMeasure();
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(
    `https://mic.t-solution.vn/api/v2/pages/${id}`,
    fetcher
  );
  const content = data?.content;

  const renderContent = useMemo(() => {
    return (
      content &&
      content
        .filter((item) => item.block_type === "content")
        .map((item, index) => {
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
          );
        })
    );
  }, [content, ref, theme.breakpoints, width]);

  if (!data) return null;
  return <Box>{renderContent}</Box>;
}
