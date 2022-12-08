import { Box, Button, Grid } from "@mui/material";
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
            return <Post key={item.id} imgSrc={item.imgSrc} />;
          })}
      </Grid>
      <Button
        disableRipple={true}
        variant="contained"
        sx={{
          padding: "16px 24px",
          background: "#00A859 !important",
          borderRadius: "90px",
          color: "#FCFCFD",
          fontSize: "16px",
          lineHeight: "16px",
          fontFamily: "Lato",
          fontWeight: "700",
          mt: "40px",
          position: "relative",
          left: "50%",
          transform: "translate(-50%,0)",
        }}
      >
        See More
      </Button>
    </Box>
  );
};

export default News;
