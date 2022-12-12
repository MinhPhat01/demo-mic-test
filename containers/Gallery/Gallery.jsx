import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import BtnSeeMore from "../../components/button/BtnSeeMore";
import Title from "../../components/title/Title";
import Post from "../Home/components/Post";

export default function Gallery() {
  return (
    <Container sx={{ mb: "98px" }}>
      <Title title={"OUR GALLERY"} widthText="180px" heightProps={20}></Title>
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {Array(6)
          .fill(0)
          .map((item, index) => (
            <Grid key={index} item xs={12} md={4}>
              <Link href={`/gallery/${index + 1}`}>
                <Post />
              </Link>
            </Grid>
          ))}
      </Grid>
      <BtnSeeMore>See More</BtnSeeMore>
    </Container>
  );
}
