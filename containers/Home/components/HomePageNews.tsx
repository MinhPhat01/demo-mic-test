import Link from "next/link";
import { useMemo } from "react";

import { Box, Grid } from "@mui/material";

import { responseSchema } from "interface";
import { HOME_PAGE_NEW } from "interface/responseSchema/home";

import Post from "components/Post/Post";
import Title from "components/title/Title";
import BtnSeeMore from "components/button/BtnSeeMore";

type HomePageNewsProps = {
  data: responseSchema<HOME_PAGE_NEW>;
};

const HomePageNews = ({ data }: HomePageNewsProps) => {
  const renderList = useMemo(() => {
    if (!data?.items) return null;
    return data.items.map((item) => {
      return (
        <Grid key={item.id} item xs={12} sm={6} md={4}>
          <Link href={`/news/${item.id}`}>
            <Post
              imgSrc={item.thumbnail}
              title={item.title}
              date={item?.last_published_at}
              content={item.content}
            />
          </Link>
        </Grid>
      );
    });
  }, [data?.items]);

  if (!data) return null;

  return (
    <Box sx={{ mt: "24px", mb: "46px" }}>
      <Title title="News" widthOfText="140px" heightOfText={12} />
      <Grid container sx={{ my: "12px" }} spacing={"32px"}>
        {renderList}
      </Grid>
      <Link href="/news">
        <BtnSeeMore>See More</BtnSeeMore>
      </Link>
    </Box>
  );
};

export default HomePageNews;
