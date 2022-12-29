import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Box, styled } from "@mui/material";
import { useMeasure } from "react-use";
import { boxShadow } from "constant";

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
    boxShadow: boxShadow.boxShadow3,
    borderRadius: "20px",
    background: "#FCFCFD",
    textAlign: "center",
  }
})

