import { Box, Container, Grid, ListItem, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import BtnSeeMore from "../../components/button/BtnSeeMore";
import Title from "../../components/title/Title";
import useSWR from "swr";
import { useParams } from "../../hooks/useParams";
import { PAGES_API, TYPE_PARAMS } from "../../apis";
import { transformUrl } from "../../libs/transformUrl";
import TabPanel from "../../components/tabs/TabPanel";
import ProductItem from "./components/ProductItem";

const itemAll = {
  id: 0,
  title: "All items",
};

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products(props) {
  const { data: initData } = props;
  const dataCategories = initData.items;

  const router = useRouter();

  const [currentTab, setCurrentTab] = useState(0);
  const [dataTabPanel, setDataTabPanel] = useState([]);
  const [childOf, setChildOf] = useState();

  const [params, setParams] = useParams({
    initState: {
      fields: "*",
      locale: "en",
      limit: 8,
      type: "product.ProductDetailPage",
    },
    excludeKeys: ["limit", "offset", "type", "search"],
  });
  // const urlApi = transformUrl(PAGES_API, params);
  // console.log("🚀 ~ file: Products.jsx:36 ~ Products ~ urlApi", urlApi)

  const { data } = useSWR(
    // transformUrl(PAGES_API, params)
    `https://mic.t-solution.vn/api/v2/pages/?fields=*&type=product.ProductDetailPage&limit=8&locale=en${childOf}`,
    fetcher
    );
   

  // useEffect just setData
  useEffect(() => {
    if (!data) return;
    setDataTabPanel(data.items);
  }, [data]);

  // useEffect setData by child of
  useEffect(() => {
    let convertChildOf = Number(router.query.child_of);
    if (router.query.child_of == undefined) {
      setChildOf("");
      setCurrentTab(0);
      setParams({
        child_of: undefined,
      });
    } else {
      setCurrentTab(Number(router.query.child_of));
      setChildOf(`&child_of=${convertChildOf}`);
      setParams({
        child_of: router.query.child_of,
      });
    }
  }, [router]);

  // Render Categories
  const renderCategories = useMemo(() => {
    if (!dataCategories) return null;
    const mergeCategories = [itemAll, ...dataCategories];
    return mergeCategories.map((item, index) => {
      return <Tab key={index} label={item.title} value={item.id} />;
    });
  }, [dataCategories]);

  // RenderTabPanel
  const renderTabPanel = useMemo(() => {
    if (dataTabPanel == undefined) return null;
    return (
      <TabPanel value={currentTab} index={currentTab}>
        <Grid container spacing={4}>
          {dataTabPanel.length > 0 ? (
            dataTabPanel.map((item, index) => {
              return (
                <ProductItem
                  key={index}
                  id={item.id}
                  title={item.title}
                  imgSrc={item.thumbnail}
                  pieces={item.description}
                />
              );
            })
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
          )}
        </Grid>
      </TabPanel>
    );
  }, [dataTabPanel, currentTab]);

  const handleChange = useCallback(
    (event, newValue) => {
      if (newValue == 0) {
        setChildOf("");
        setParams({
          child_of: undefined,
        });
      } else {
        setChildOf(`&child_of=${newValue}`);
        setParams({
          child_of: newValue,
        });
      }
    },
    [currentTab]
  );

  return (
    <Container sx={{ mt: "40px" }}>
      <Box sx={{ mb: "100px" }}>
        <Title title={"OUR PRODUCT"} widthText="190px" heightProps={24}></Title>
        <Box
          sx={{
            mt: "40px",
            "& .MuiTabPanel-root": {
              paddingLeft: "0 !important",
              paddingRight: "0 !important",
            },
          }}
        >
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
            <Tabs
              value={currentTab}
              onChange={handleChange}
              sx={{
                "& .MuiTabs-scroller": {
                  overflowX: "scroll !important",
                },

                "& .MuiTabs-scroller::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {renderCategories}
            </Tabs>
          </Box>
          {renderTabPanel}

          <BtnSeeMore
            style={data?.next ? "block" : "none"}
            // onClick={handleSeeMore}
          >
            See More
          </BtnSeeMore>
        </Box>
      </Box>
    </Container>
  );
}
