import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";
import Link from "next/link";

const CategoryItem = ({ imgSrc, title, id }) => {
  const [ref, { width }] = useMeasure();

  return (
    <Box
      sx={{
        padding: "10px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        borderRadius: "20px",
        background: "#FCFCFD",
        textAlign: "center",
      }}
    >
      <Link href={`/products?child_of=${id}`}>
        <Box ref={ref}>
          <Image
            src={imgSrc}
            alt={title}
            width={width}
            height={(width * 4) / 6}
            style={{ objectFit: "cover", borderRadius: "16px" }}
          ></Image>
        </Box>
        <Typography
          sx={{
            my: "12px",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#23262F",
            fontWeight: "500",
            fontFamily: "Poppins",
          }}
        >
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default CategoryItem;
