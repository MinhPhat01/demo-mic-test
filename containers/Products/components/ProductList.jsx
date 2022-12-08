import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Grid, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import ProductItem from "./ProductItem";

const listTabs = [
  {
    id: 1,
    name: "All items",
  },
  {
    id: 2,
    name: "Chalkboard Chalk",
  },
  {
    id: 3,
    name: "School Supplies and Student Tools",
  },
  {
    id: 4,
    name: "Art Supplies",
  },
  {
    id: 5,
    name: "School Supplies and Student Tools",
  },
  {
    id: 6,
    name: "School Supplies and Student Tools",
  },
];

const ProductList = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        mt: "40px",
        "& .MuiTabPanel-root": {
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
        },
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            pb: "42px",
            borderBottom: "1px solid #E6E8EC",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "all 0.3s linear",
            "& .Mui-selected": {
              backgroundColor: "#353945 !important",
              color: "white !important",
              borderRadius: "100px",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiButtonBase-root": {
              color: "#777E90",
              fontSize: "14px !important",
              lineHeight: "16px !important",
              fontWeight: "700 !important",
              textTransform: "none",
            },
          }}
        >
          <TabList onChange={handleChange}>
            <Tab label="All items" value="1" />
            <Tab label="Chalkboard Chalk" value="2" />
            <Tab label="School Supplies and Student Tools" value="3" />
            <Tab label="Art Supplies" value="4" />
            <Tab label="School Supplies and Student Tools" value="5" />
            <Tab label="Office Supplies" value="6" />
          </TabList>
        </Box>

        {listTabs.map((item) => (
          <TabPanel key={item.id} value={String(item.id)}>
            {item.id}
          </TabPanel>
        ))}
        {/* <TabPanel value="1">
          <Grid container spacing={4}>
           <ProductItem /> 
          </Grid>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
};

export default ProductList;
