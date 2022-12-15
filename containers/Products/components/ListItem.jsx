import { Box, Grid } from "@mui/material";
import TabPanel from "../../../components/tabs/TabPanel";
import ProductItem from "./ProductItem";
import SkeletonCard from "../../../components/skeletonCard/SkeletonCard";
import { useMemo } from "react";

const ListItem = ({ nextData, id, isLoading }) => {
  const dataProduct = nextData?.items;
  const renderList = useMemo(() => {
    if (!dataProduct) return;
    return dataProduct.length > 0 ? (
      dataProduct.map((item, index) => (
        <ProductItem
          key={index}
          id={item.id}
          title={item.title}
          imgSrc={item.thumbnail}
          pieces={item.description}
        />
      ))
    ) : (
      <Box
        sx={{
          mt: "30px",
          position: "relative",
          left: "50%",
          transform: "translate(-50%,0)",
          fontSize: "24px",
          fontWeight: 500,
        }}
      >
        Nothing
      </Box>
    );
  }, [dataProduct]);

  if (isLoading)
    return (
      <Grid container spacing={4} sx={{ mt: "20px" }}>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
        <SkeletonCard></SkeletonCard>
      </Grid>
    );

  if (!nextData.items) return null;

  return (
    <TabPanel value={id} index={id}>
      <Grid container spacing={4}>
        {renderList}
      </Grid>
    </TabPanel>
  );
};

export default ListItem;
