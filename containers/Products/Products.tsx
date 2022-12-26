import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container, Grid, Tab, Tabs, styled } from "@mui/material";
import useSWR from "swr";
import { useParams } from "hooks/useParams";
import { transformUrl } from "libs/transformUrl";
import Title from "components/title/Title";
import TabPanel from "components/tabs/TabPanel";
import ProductItem from "./components/ProductItem";
import BtnSeeMore from "components/button/BtnSeeMore";
import { IPage, responseSchema } from "interface";
import { PRODUCT_CATEGORIES_ITEMS, PRODUCT_DETAIL_ITEMS } from "interface/responseSchema/product";
import { PAGES_API, TYPE_PARAMS } from "apis";

const itemAll = {
  id: 0,
  title: "All items",
};

export type ProductProps = IPage<
  [
    responseSchema<PRODUCT_CATEGORIES_ITEMS>,
    responseSchema<PRODUCT_DETAIL_ITEMS>
  ]
>;

export default function Products(props: ProductProps) {
  const router = useRouter()
  const [params, setParams] = useParams({
    initState: {
      fields: "*",
      type: TYPE_PARAMS["product.ProductDetailPage"],
      locale: "en",
      limit: 8,
    },
    excludeKeys: ["limit", "offset", "type", "search"],
  });

  const { initData } = props
  const dataCategories = initData[0].items;
  const fetchDataFirst = initData[1].items
  const [urlApi, setUrlApi] = useState<string>(PAGES_API)
  const [currentTab, setCurrentTab] = useState<number>(0)
  const [dataTabPanel, setDataTabPanel] = useState<PRODUCT_DETAIL_ITEMS[]>(fetchDataFirst)
  const [isNextData, setIsNextData] = useState<boolean>(false)
  const [isFetch, setIsFetch] = useState<boolean>(false)
  const { data } = useSWR<responseSchema<PRODUCT_DETAIL_ITEMS>>(transformUrl(urlApi, params));
  console.log("🚀 ~ file: Products.tsx:48 ~ Products ~ data", data)

  useEffect(() => {
    if (!data) return;
    setDataTabPanel(data.items);
    if (isNextData) {
      setDataTabPanel(dataTabPanel.concat(data.items))
      setIsNextData(false)
    }
  }, [data]);

  useEffect(() => {
    if (data == undefined) return;
    if (router.query.child_of == undefined) {

      setCurrentTab(0);
      setParams({
        child_of: undefined,
      });
      if (isFetch) {
        setUrlApi(data.next)
        setIsFetch(false)
      }
    } else {

      setCurrentTab(Number(router.query.child_of));
      setParams({
        child_of: router.query.child_of,
        search: undefined,
      });
      if (isFetch) {
        setUrlApi(data.next)
        setIsFetch(false)
      }
     
    }
  }, [router, isFetch]);

  // Search
  useEffect(() => {
    if (router.query.search == undefined) {
      return;
    } else {
      setParams({
        child_of: undefined,
        search: router.query.search,
      });
    }
  }, [router]);

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setCurrentTab(newValue)
      if (newValue == 0) {
        setParams({
          child_of: undefined,
          search: undefined
        });
        setUrlApi(PAGES_API)

      } else {
        setParams({
          child_of: newValue,
          search: undefined,
        });
        setUrlApi(PAGES_API)
      }
    }, [currentTab, router.query.child_of]);

  const handleSeeMore = useCallback(() => {
    setIsFetch(true)
    setIsNextData(true)

  }, [])

  // Render Categories
  const renderCategories = useMemo(() => {
    if (!dataCategories) return null;
    const mergeCategories = [itemAll, ...dataCategories];
    return mergeCategories.map((item, index) => {
      return <Tab key={index} label={item.title} value={item.id} />;
    });
  }, [dataCategories]);

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
            <StyledBoxNothing>Nothing</StyledBoxNothing>
          )}
        </Grid>
      </TabPanel>
    );
  }, [dataTabPanel, currentTab]);



  return (
    <Container sx={{ mt: "40px" }}>
      <Box
        sx={{
          mb: "100px",
          "& .MuiTabPanel-root": {
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
          },
        }}
      >
        <Title title={"OUR PRODUCT"} widthText="190px" lineHeight={24}></Title>
        <StyledWrapTabs>
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
        </StyledWrapTabs>
        {renderTabPanel}
        <BtnSeeMore
          style={data?.next === null ? "none" : "block"}
          onClick={handleSeeMore}
        >
          See More
        </BtnSeeMore>
      </Box>
    </Container>
  );
}

const StyledWrapTabs = styled(Box)(() => {
  return {
    marginTop: "40px",
    paddingBottom: "42px",
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
  }
})

const StyledBoxNothing = styled(Box)(() => {
  return {
    marginTop: "30px",
    position: "relative",
    left: "50%",
    transform: "translate(-50%,0)",
    fontSize: "24px",
    fontWeight: 500,
  }
})