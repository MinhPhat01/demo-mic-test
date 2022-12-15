import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import BtnSeeMore from "../../components/button/BtnSeeMore";
import Title from "../../components/title/Title";
import { LIMIT } from "../../constant";
import useSWR from "swr";
import PostOfGallery from "./components/PostOfGallery";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Gallery() {
  const [urlApi, setUrlApi] = useState(
    `https://mic.t-solution.vn/api/v2/pages/?fields=*&type=gallery.GalleryDetailPage&limit=${LIMIT.LIMIT_GALLERY}`
  );
  const { data: resData, error } = useSWR(urlApi, fetcher);
  const [isFetch, setIsFetch] = useState(true);
  const [data, setData] = useState([]);
  console.log("🚀 ~ file: Gallery.jsx:19 ~ Gallery ~ data", data);

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

  const renderList = useMemo(() => {
    return data.map((item) => {
      return (
        <Grid key={item.id} item xs={12} md={4}>
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
  }, [isFetch]);

  if (!data) return;
  return (
    <Container sx={{ mb: "98px" }}>
      <Title title={"OUR GALLERY"} widthText="180px" heightProps={20}></Title>
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {renderList}
      </Grid>
      <BtnSeeMore
        disable={urlApi === null ? true : false}
        onClick={handleSeeMore}
      >
        See More
      </BtnSeeMore>
    </Container>
  );
}
