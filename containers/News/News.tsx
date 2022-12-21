import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import Title from "components/title/Title";
import BtnSeeMore from "components/button/BtnSeeMore";
import SkeletonCard from "components/skeletonCard/SkeletonCard";
import { IPage, responseSchema } from "interface";
import { NEW_DETAIL_ITEMS } from "interface/responseSchema/news";
import Post from "components/Post/Post";

export type NewsProps = IPage<
  [responseSchema<NEW_DETAIL_ITEMS>]
>;

export default function News(props: NewsProps) {
  const { initData } = props
  console.log("🚀 ~ file: News.tsx:18 ~ News ~ initData", initData)
  const dataFetch = initData[0].items
  const nextData = initData[0].next
  const [isFetch, setIsFetch] = useState<boolean>(true);
  const [data, setData] = useState(dataFetch);
  const [urlNext, setUrlNext] = useState<string>("")

  const { data: resData, isLoading } = useSWR(urlNext)

  useEffect(() => {
    if (isFetch) {
      if (resData == undefined) return;
      setData(data.concat(resData.items));
      setIsFetch(false);
    }
  }, [isFetch, resData, data]);

  const handleSeeMore = useCallback(() => {
    setIsFetch(true);
    setUrlNext(nextData)
  }, [resData]);

  const renderList = useMemo(() => {
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

  // if (isLoading)
  //   return (
  //     <Container sx={{ mb: "98px", mt: "40px" }}>
  //       <Grid container spacing={4} sx={{ mt: "20px" }}>
  //         <SkeletonCard></SkeletonCard>
  //         <SkeletonCard></SkeletonCard>
  //         <SkeletonCard></SkeletonCard>
  //         <SkeletonCard></SkeletonCard>
  //       </Grid>
  //     </Container>
  //   );

  return (
    <Container sx={{ mb: "98px", mt: "40px" }}>
      <Title title={"OUR NEWS"} widthText="140px" heightProps={10}></Title>
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {renderList}
      </Grid>
      <BtnSeeMore
        style={urlNext == "" ? "block" : "none"}
        onClick={handleSeeMore}
      >
        See More
      </BtnSeeMore>
    </Container>
  );
}
