import { Box, Grid } from "@mui/material";
import Title from "../../../components/title/Title";
import CategoryItem from "./CategoryItem";

const listCategories = [
  {
    id: 1,
    nameImg: "Chalkboard Chalk",
    imgSrc: "/image1.png",
  },
  {
    id: 2,
    nameImg: "School Supplies and Student Tools",
    imgSrc: "/image2.png",
  },
  {
    id: 3,
    nameImg: "Office Supplies",
    imgSrc: "/image3.png",
  },
  {
    id: 4,
    nameImg: "Art Supplies",
    imgSrc: "/image4.png",
  },
];

const OurCategories = () => {
  return (
    <Box sx={{ mt: "60px" }}>
      <Title title="Our Categories" widthText={"170px"} heightProps={20} />
      <Grid container spacing={4} sx={{ mt: "8px" }}>
        {listCategories.length > 0 &&
          listCategories.map((item) => {
            return (
              <CategoryItem
                key={item.id}
                imgName={item.nameImg}
                imgSrc={item.imgSrc}
              />
            );
          })}
      </Grid>
    </Box>
  );
};

export default OurCategories;
