import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMeasure } from "react-use";
import CategoryItem from "./CategoryItem";

const listCategories = [
  {
    id: 1,
    nameImg: "img1",
    imgSrc: "/image1.png",
  },
  {
    id: 2,
    nameImg: "img2",
    imgSrc: "/image2.png",
  },
  {
    id: 3,
    nameImg: "img3",
    imgSrc: "/image3.png",
  },
  {
    id: 4,
    nameImg: "img4",
    imgSrc: "/image4.png",
  },
];

const OurCategories = () => {
  const [ref, { width, height }] = useMeasure();
  const widthImg = width + 50;
  const heightImg = height + 40;

  return (
    <Container sx={{ mt: "24px" }}>
      <Box
        sx={{
          mt: "50px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          width={widthImg}
          height={heightImg}
          alt="frame"
          src="/frame.png"
          objectFit="cover"
        ></Image>
        <Typography
          ref={ref}
          sx={{
            position: "absolute",

            color: "#00A859",
            fontSize: "24px",
            lineHeight: "24px",
            mx: "10px",
          }}
        >
          Our Categories
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {listCategories.length > 0 &&
          listCategories.map((item) => {
            return (
              <CategoryItem key={item.id} imgName={nameImg} imgSrc={imgSrc} />
            );
          })}
      </Grid>
    </Container>
  );
};

export default OurCategories;
