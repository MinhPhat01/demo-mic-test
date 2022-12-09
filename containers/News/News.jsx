import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import BtnSeeMore from "../../components/button/BtnSeeMore";
import Title from "../../components/title/Title";
import Post from "../Home/components/Post";

export default function News() {
  return (
    <Container sx={{ mb: "98px" }}>
      <Title title={"OUR NEWS"} widthText="140px"></Title>
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {Array(6)
          .fill(0)
          .map((item, index) => (
            <Grid key={index} item md={4}>
              <Link href={`/news/${index + 1}`}>
                <Post />
              </Link>
            </Grid>
          ))}
      </Grid>
      <BtnSeeMore>See More</BtnSeeMore>
    </Container>
  );
}
