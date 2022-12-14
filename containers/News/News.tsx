import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Container, Grid } from "@mui/material";

import useSWR from "swr";

import Post from "components/Post/Post";
import Title from "components/title/Title";
import BtnSeeMore from "components/button/BtnSeeMore";

import { IPage, responseSchema } from "interface";
import { NEW_DETAIL_ITEMS } from "interface/responseSchema/news";

export type NewsProps = IPage<[responseSchema<NEW_DETAIL_ITEMS>]>;

export default function News(props: NewsProps) {
  const { initData } = props;
  const dataFetch = initData[0].items;
  const nextData = initData[0].next;
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [data, setData] = useState(dataFetch);
  const [urlNext, setUrlNext] = useState<string>(nextData);
  const { data: resData } = useSWR<responseSchema<NEW_DETAIL_ITEMS>>(urlNext);

  useEffect(() => {
    if (isFetch) {
      if (resData == undefined) return;
      setUrlNext(resData.next);
      setData(data.concat(resData.items));
      setIsFetch(false);
    }
  }, [data, isFetch, resData]);

  const handleSeeMore = useCallback(() => {
    setIsFetch(true);
  }, []);

  const renderList = useMemo(() => {
    if (data == undefined) return;
    return data.map((item) => {
      return (
        <Grid key={item.id} item xs={12} sm={6} md={4}>
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

  return (
    <Container sx={{ mb: "98px", mt: "40px" }}>
      <Title title={"OUR NEWS"} widthOfText="140px" heightOfText={10}></Title>
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {renderList}
      </Grid>
      <BtnSeeMore
        style={urlNext === null ? "none" : "block"}
        onClick={handleSeeMore}
      >
        See More
      </BtnSeeMore>
    </Container>
  );
}
