import { TabPanel } from "@material-ui/lab";
import { Grid } from "@mui/material";
import { listItem } from "../../../constant";
import ProductItem from "./ProductItem";

const ListItem = ({ value }) => {
  return (
    <TabPanel value={String(value)}>
      <Grid container spacing={4}>
        {listItem.map((item) => (
          <ProductItem key={item.id} pieces={item.pieces} id={item.id} />
        ))}
      </Grid>
    </TabPanel>
  );
};

export default ListItem;
