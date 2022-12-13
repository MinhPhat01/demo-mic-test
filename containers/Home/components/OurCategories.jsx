import { Box, Grid } from "@mui/material";
import Title from "../../../components/title/Title";
import CategoryItem from "./CategoryItem";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const OurCategories = () => {
  const { data, error } = useSWR(
    "https://mic.t-solution.vn/api/v2/pages/?fields=*&type=product.ProductCategoryPage&is_on_homepage=true&limit=4&locale=en",
    fetcher
  );
  if (!data) return null;

  return (
    <Box sx={{ mt: "60px" }}>
      <Title title="Our Categories" widthText={"170px"} heightProps={20} />
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {data.items.map((item) => {
          return (
            <CategoryItem
              key={item.id}
              title={item.title}
              imgSrc={item.image}
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default OurCategories;
