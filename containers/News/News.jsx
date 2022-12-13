import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BtnSeeMore from "../../components/button/BtnSeeMore";
import Title from "../../components/title/Title";
import Post from "../Home/components/Post";
import useSWR from "swr";
import { LIMIT } from "../../constant";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function News() {
  const [urlApi, setUrlApi] = useState(
    `https://mic.t-solution.vn/api/v2/pages/?fields=*&type=news.NewsDetailPage&limit=${LIMIT.LIMIT_NEWS}`
  );
  const { data, error } = useSWR(urlApi, fetcher);

  const [dataPost, setDataPost] = useState([]);
  const [currentPost, setCurrentPost] = useState([]);
  const [postMore, setMorePost] = useState([]);

  useEffect(() => {
    setDataPost(data?.items);
  }, [data]);

  const handleSeeMore = () => () => {
    setUrlApi(data.next);
    setMorePost([...dataPost, ...data.items]);
    setDataPost(postMore);
  };

  if (!data) return null;

  return (
    <Container sx={{ mb: "98px" }}>
      <Title title={"OUR NEWS"} widthText="140px" heightProps={10}></Title>
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {dataPost &&
          dataPost.map((item) => {
            return (
              <Grid key={item.id} item xs={12} md={4}>
                <Link href={`/news/${item.id}`}>
                  <Post
                    imgSrc={item.thumbnail}
                    title={item.title}
                    date={item.last_published_at}
                    content={item.content}
                  />
                </Link>
              </Grid>
            );
          })}
      </Grid>
      <BtnSeeMore
        // disable={data?.next === null ? true : ""}
        onClick={handleSeeMore()}
      >
        See More
      </BtnSeeMore>
    </Container>
  );
}
