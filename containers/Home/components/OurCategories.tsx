import { Box, Grid } from "@mui/material";
import CategoryItem from "./CategoryItem";
import { useMemo } from "react";
import { responseSchema } from "interface";
import { HOME_PAGE_OUR_CATEGORIES } from "interface/responseSchema/home";
import Title from "components/title/Title";

type Props = {
  data: responseSchema<HOME_PAGE_OUR_CATEGORIES>
}

const OurCategories = ({ data }: Props) => {
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
      <Title title="Our Categories" widthText={"170px"} heightProps={20} />
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {renderList}
      </Grid>
    </Box>
  );
};

export default OurCategories;
