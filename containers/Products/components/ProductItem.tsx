import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Grid, Typography, styled } from "@mui/material";
import { useMeasure } from "react-use";
import { boxShadow } from "constant";

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
          <StyledTitle variant="h2">
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
    boxShadow: boxShadow.boxShadow3,
    borderRadius: "16px",
  }
})

const StyledTitle = styled(Typography)(() => {
  return {
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