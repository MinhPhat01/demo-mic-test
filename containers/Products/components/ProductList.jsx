import { TabContext, TabList } from "@material-ui/lab";
import { Grid, Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import SkeletonCard from "../../../components/skeletonCard/SkeletonCard";
import { listTabs } from "../../../constant";
import ListItem from "./ListItem";

const ProductList = () => {
  const [value, setValue] = useState("1");
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setShow(true);
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
          <Box sx={{ overflowX: "scroll" }}>
            <TabList onChange={handleChange}>
              {listTabs.length > 0 &&
                listTabs.map((item) => (
                  <Tab
                    key={item.id}
                    label={item.name}
                    value={String(item.id)}
                  />
                ))}
            </TabList>
          </Box>
        </Box>
        {show ? (
          <Grid container spacing={4} mt={"8px"}>
            {Array(8)
              .fill(0)
              .map((item, index) => (
                <SkeletonCard key={index} />
              ))}
          </Grid>
        ) : (
          listTabs.length > 0 &&
          listTabs.map((item) => {
            return <ListItem key={item.id} value={item.id} />;
          })
        )}
      </TabContext>
    </Box>
  );
};

export default ProductList;
