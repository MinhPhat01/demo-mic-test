import { Grid } from "@mui/material";
import TabPanel from "../../../components/tabs/TabPanel";
import { listItem } from "../../../constant";
import ProductItem from "./ProductItem";

const ListItem = ({ value }) => {
  return (
    <TabPanel value={value} index={value}>
      <Grid container spacing={4}>
        {listItem.map((item) => (
          <ProductItem key={item.id} pieces={item.pieces} id={item.id} />
        ))}
      </Grid>
    </TabPanel>
  );
};

export default ListItem;
