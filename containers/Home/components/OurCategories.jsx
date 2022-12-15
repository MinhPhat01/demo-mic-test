import { Box, Grid } from "@mui/material";
import Title from "../../../components/title/Title";
import CategoryItem from "./CategoryItem";
import useSWR from "swr";
import { useMemo } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const OurCategories = () => {
  const { data } = useSWR(
    "https://mic.t-solution.vn/api/v2/pages/?fields=*&type=product.ProductCategoryPage&is_on_homepage=true&limit=4&locale=en",
    fetcher
  );

  const renderList = useMemo(() => {
    if (!data?.items) return null;
    return data.items.map((item) => {
      return (
        <Grid key={item.id} xs={12} md={6} item>
          <CategoryItem id={item.id} title={item.title} imgSrc={item.image} />
        </Grid>
      );
    });
  }, [data?.items]);
  if (!data) return null;

  return (
    <Box sx={{ mt: "60px" }}>
      <Title title="Our Categories" widthText={"170px"} heightProps={20} />
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {renderList}
      </Grid>
    </Box>
  );
};

export default OurCategories;
