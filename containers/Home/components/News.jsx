import { Box, Grid } from "@mui/material";
import BtnSeeMore from "../../../components/button/BtnSeeMore";
import Title from "../../../components/title/Title";
import Post from "./Post";

const listNews = [
  {
    id: 1,
    imgSrc: "/image1.png",
  },
  {
    id: 2,
    imgSrc: "/image2.png",
  },
  {
    id: 3,
    imgSrc: "/image3.png",
  },
];

const News = () => {
  return (
    <Box sx={{ mt: "24px", mb: "46px" }}>
      <Title title="News" widthText="60px" />
      <Grid container sx={{ my: "12px" }} spacing={4}>
        {listNews.length > 0 &&
          listNews.map((item) => {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <Post imgSrc={item.imgSrc} />
              </Grid>
            );
          })}
      </Grid>
      <BtnSeeMore>See More</BtnSeeMore>
    </Box>
  );
};

export default News;