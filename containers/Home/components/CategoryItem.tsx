import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Box, styled } from "@mui/material";
import { useMeasure } from "react-use";

type CategoryItemProps = {
  imgSrc: string,
  title: string,
  id: number,
};

const CategoryItem = ({ imgSrc, title, id }: CategoryItemProps) => {
  const [ref, { width }] = useMeasure();
  return (
    <StyledWrapper>
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
        <Typography variant="h2" sx={{ margin: "12px 0" }}>
          {title}
        </Typography>
      </Link>
    </StyledWrapper>
  );
};

export default CategoryItem;

const StyledWrapper = styled(Box)(() => {
  return {
    padding: "10px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    borderRadius: "20px",
    background: "#FCFCFD",
    textAlign: "center",
  }
})

