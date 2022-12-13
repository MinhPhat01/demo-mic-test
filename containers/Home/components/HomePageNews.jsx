import { Box, Grid } from "@mui/material";
import BtnSeeMore from "../../../components/button/BtnSeeMore";
import Title from "../../../components/title/Title";
import Post from "./Post";
import useSWR from "swr";
import { useState } from "react";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const HomePageNews = () => {
  const { data, error } = useSWR(
    `https://mic.t-solution.vn/api/v2/pages/?fields=*&type=news.NewsDetailPage&limit=3`,
    fetcher
  );
  if (!data) return null;

  return (
    <Box sx={{ mt: "24px", mb: "46px" }}>
      <Title title="News" widthText="140px" heightProps={10} />
      <Grid container sx={{ my: "12px" }} spacing={4}>
        {data.items.map((item) => {
          return (
            <Grid key={item.id} item xs={12} md={4}>
              <Post
                imgSrc={item.thumbnail}
                title={item.title}
                date={item?.last_published_at}
                content={item.content}
              />
            </Grid>
          );
        })}
      </Grid>
      <Link href="/news">
        <BtnSeeMore>See More</BtnSeeMore>
      </Link>
    </Box>
  );
};

export default HomePageNews;
