import React, { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Container, Grid } from "@mui/material";
import useSWR from "swr";
import PostOfGallery from "./components/PostOfGallery";
import Title from "components/title/Title";
import BtnSeeMore from "components/button/BtnSeeMore";
import { IPage, responseSchema } from "interface";
import { GALLERY_DETAIL_ITEMS } from "interface/responseSchema/gallery";

export type GalleryProps = IPage<[responseSchema<GALLERY_DETAIL_ITEMS>]>

export default function Gallery(props: GalleryProps) {
  const { initData } = props
  const dataFetch = initData[0].items
  const dataNext = initData[0].next

  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [urlNext, setUrlNext] = useState("")
  const [data, setData] = useState(dataFetch);
  const { data: resData, isLoading } = useSWR(urlNext);

  useEffect(() => {
    if (isFetch) {
      if (!resData) return;
      setData(data.concat(resData.items));
      setIsFetch(false);
    }
  }, [resData, isFetch, data]);

  const renderList = useMemo(() => {
    return data.map((item) => {
      return (
        <Grid key={item.id} item xs={12} sm={6} md={4}>
          <Link href={`/gallery/${item.id}`}>
            <PostOfGallery
              imgSrc={item.thumbnail}
              title={item.title}
              date={item.last_published_at}
            />
          </Link>
        </Grid>
      );
    });
  }, [data]);

  const handleSeeMore = useCallback(() => {
    setIsFetch(true);
    setUrlNext(dataNext)
  }, [isFetch]);

  return (
    <Container sx={{ mb: "98px", mt: "40px" }}>
      <Title title={"OUR GALLERY"} widthText="180px" lineHeight={20}></Title>
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {renderList}
      </Grid>
      <BtnSeeMore
        style={urlNext === "" ? "block" : "none"}
        onClick={handleSeeMore}
      >
        See More
      </BtnSeeMore>
    </Container>
  );
}
