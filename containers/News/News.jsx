import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import BtnSeeMore from "../../components/button/BtnSeeMore";
import Title from "../../components/title/Title";
import Post from "../Home/components/Post";
import useSWR from "swr";
import { LIMIT } from "../../constant";
import SkeletonCard from "../../components/skeletonCard/SkeletonCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function News() {
  const [urlApi, setUrlApi] = useState(
    `https://mic.t-solution.vn/api/v2/pages/?fields=*&type=news.NewsDetailPage&limit=${LIMIT.LIMIT_NEWS}`
  );

  const [data, setData] = useState([]);
  const [isFetch, setIsFetch] = useState(true);
  const { data: resData, isLoading } = useSWR(urlApi, fetcher);

  useEffect(() => {
    if (isFetch) {
      if (!resData) return;

      const next = resData.next;
      const items = resData.items;

      setUrlApi(next);
      setData(data.concat(items));
      setIsFetch(false);
    }
  }, [resData, isFetch]);

  const handleSeeMore = useCallback(() => {
    setIsFetch(true);
  }, [isFetch]);

  const renderList = useMemo(() => {
    return data.map((item) => {
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
    });
  }, [data]);

  if (isLoading)
    return (
      <Container sx={{ mb: "98px", mt: "40px" }}>
        <Grid container spacing={4} sx={{ mt: "20px" }}>
          <SkeletonCard></SkeletonCard>
          <SkeletonCard></SkeletonCard>
          <SkeletonCard></SkeletonCard>
          <SkeletonCard></SkeletonCard>
        </Grid>
      </Container>
    );

  if (!data) return null;

  return (
    <Container sx={{ mb: "98px", mt: "40px" }}>
      <Title title={"OUR NEWS"} widthText="140px" heightProps={10}></Title>
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {renderList}
      </Grid>
      <BtnSeeMore
        style={resData === undefined ? "none" : "block"}
        onClick={handleSeeMore}
      >
        See More
      </BtnSeeMore>
    </Container>
  );
}
