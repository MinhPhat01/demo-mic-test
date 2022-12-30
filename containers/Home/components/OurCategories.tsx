import { useMemo } from "react";

import { Box, Grid } from "@mui/material";

import CategoryItem from "./CategoryItem";
import Title from "components/title/Title";

import { responseSchema } from "interface";
import { HOME_PAGE_OUR_CATEGORIES } from "interface/responseSchema/home";

type OurCategoriesProps = {
  data: responseSchema<HOME_PAGE_OUR_CATEGORIES>;
};

const OurCategories = ({ data }: OurCategoriesProps) => {
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
    <Box sx={{ mt: "20px" }}>
      <Title title="Our Categories" widthOfText={"170px"} heightOfText={20} />
      <Grid container spacing={"32px"} sx={{ mt: "8px" }}>
        {renderList}
      </Grid>
    </Box>
  );
};

export default OurCategories;
