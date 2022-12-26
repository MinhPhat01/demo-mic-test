import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid, Typography, styled } from "@mui/material";
import { useMeasure } from "react-use";

type ProductItemProps = {
  title: string,
  id: number,
  imgSrc: string,
  pieces: string,
};

export default function ProductItem({ title, id, imgSrc, pieces }: ProductItemProps) {
  const [ref, { width }] = useMeasure();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Link href={`products/${id}`}>
        <StyledWrap>
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
          <StyledTitle>
            {title}
          </StyledTitle>
          <StyledPieces>
            {pieces || "pieces"}
          </StyledPieces>
        </StyledWrap>
      </Link>
    </Grid>
  );
}

const StyledWrap = styled(Box)(() => {
  return {
    cursor: "pointer",
    padding: "20px",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    borderRadius: "16px",
  }
})

const StyledTitle = styled(Typography)(() => {
  return {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
    color: "#23262F",
    margin: "16px 0",
    display: "-webkit-box",
    overflow: "hidden",
    minHeight: "48px",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  }
})

const StyledPieces = styled(Box)(() => {
  return {
    padding: "6px 8px",
    fontSize: "12px",
    lineHeight: "12px",
    color: "#00A859",
    border: "2px solid #00A859",
    borderRadius: "4px",
    width: "fit-content",
    fontWeight: "700",
  }
})