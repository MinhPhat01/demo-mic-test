import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMeasure } from "react-use";

type Props = {
  title: string,
  id: number,
  imgSrc: string,
  pieces: string,
};

export default function ProductItem({ title, id, imgSrc, pieces }: Props) {
  const [ref, { width }] = useMeasure();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Link href={`products/${id}`}>
        <Box
          sx={{
            cursor: "pointer",
            padding: "20px",
            boxShadow: 2,
            borderRadius: "16px",
          }}
        >
          <Box ref={ref} sx={{ height: width, borderRadius: "4px" }}>
            <Image
              src={imgSrc}
              alt={title}
              width={width}
              height={width}
              style={{
                objectFit: "cover",
                height: width,
                borderRadius: "4px",
              }}
            ></Image>
          </Box>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              fontFamily: "Poppins",
              fontWeight: "500",
              color: "#23262F",
              my: "16px",
              display: "-webkit-box",
              overflow: "hidden",
              minHeight: "48px",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              padding: "6px 8px",
              fontSize: "12px",
              lineHeight: "12px",
              color: "#00A859",
              border: "2px solid #00A859",
              borderRadius: "4px",
              width: "fit-content",
              fontFamily: "Poppins",
              fontWeight: "700",
            }}
          >
            {pieces || "pieces"}
          </Box>
        </Box>
      </Link>
    </Grid>
  );
}
