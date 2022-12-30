import { useRouter } from "next/router";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Box, Container, Grid, Tab, Tabs, styled } from "@mui/material";

import useSWR from "swr";
import { useUpdateEffect } from "react-use";
import { useParams } from "hooks/useParams";
import { transformUrl } from "libs/transformUrl";

import Title from "components/title/Title";
import TabPanel from "components/tabs/TabPanel";
import ProductItem from "./components/ProductItem";
import BtnSeeMore from "components/button/BtnSeeMore";
import SkeletonContainer from "components/skeleton/SkeletonContainer";

import { PAGES_API, TYPE_PARAMS } from "apis";
import { IPage, responseSchema } from "interface";
import {
  PRODUCT_CATEGORIES_ITEMS,
  PRODUCT_DETAIL_ITEMS,
} from "interface/responseSchema/product";

export type ProductProps = IPage<
  [
    responseSchema<PRODUCT_CATEGORIES_ITEMS>,
    responseSchema<PRODUCT_DETAIL_ITEMS>
  ]
>;

const itemAll = {
  id: 0,
  title: "All items",
};

export default function Products(props: ProductProps) {
  const router = useRouter();
  const [params, setParams] = useParams({
    initState: {
      fields: "*",
      type: TYPE_PARAMS["product.ProductDetailPage"],
      locale: "en",
      limit: 8,
    },
    excludeKeys: ["limit", "offset", "type", "search"],
  });
  const { initData } = props;
  const dataCategories = initData[0].items;
  const fetchDataFirst = initData[1].items;
  const nextData = initData[1].next;

  const [urlOfNextData, setUrlOfNextData] = useState<string>(nextData);
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<number>(
    Number(router.query.child_of) || 0
  );
  const [dataTabPanel, setDataTabPanel] =
    useState<PRODUCT_DETAIL_ITEMS[]>(fetchDataFirst);
  const { data, isLoading } = useSWR<responseSchema<PRODUCT_DETAIL_ITEMS>>(
    () => {
      if (!isFetch) return;

      if (!urlOfNextData) return;

      return transformUrl(urlOfNextData, params);
    }
  );

  useEffect(() => {
    if (data == undefined) return;

    const nextData = data.next;
    setUrlOfNextData(nextData);
    setDataTabPanel((prevData) => {
      return prevData.concat(data.items);
    });
    setIsFetch(false);
  }, [data]);

  useUpdateEffect(() => {
    if (router.query.child_of == undefined) {
      setCurrentTab(0);
      setParams({
        child_of: undefined,
      });
    } else {
      setCurrentTab(Number(router.query.child_of));
      setParams({
        child_of: router.query.child_of,
        search: undefined,
      });
    }

    handleResetData();
  }, [router.query.child_of]);

  useEffect(() => {
    if (router.query.search == undefined) {
      return;
    } else {
      setParams({
        child_of: undefined,
        search: router.query.search,
      });
    }
    handleResetData();
  }, [router.query.search]);

  const handleResetData = useCallback(() => {
    setDataTabPanel([]);
    setUrlOfNextData(PAGES_API);
    setIsFetch(true);
  }, []);

  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setCurrentTab(newValue);
      if (newValue == 0) {
        setParams({
          child_of: undefined,
          search: undefined,
        });
      } else {
        setParams({
          child_of: newValue,
          search: undefined,
        });
      }
      handleResetData();
    },
    []
  );

  const handleSeeMore = useCallback(() => {
    setIsFetch(true);
  }, []);

  const renderCategories = useMemo(() => {
    if (dataCategories == undefined) return;
    const mergeCategories = [itemAll, ...dataCategories];
    return mergeCategories.map((item, index) => {
      return <Tab key={index} label={item.title} value={item.id} />;
    });
  }, [dataCategories]);

  const renderTabPanel = useMemo(() => {
    if (dataTabPanel == undefined) return;
    if (isLoading) return <SkeletonContainer quantity={4} />;
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
        <BtnSeeMore
          style={urlOfNextData === null ? "none" : "block"}
          onClick={handleSeeMore}
        >
          See More
        </BtnSeeMore>
      </TabPanel>
    );
  }, [dataTabPanel, currentTab, isLoading]);

  return (
    <Container sx={{ mt: "40px" }}>
      <Box sx={{ mb: "100px" }}>
        <Title
          title={"OUR PRODUCT"}
          widthOfText="190px"
          heightOfText={24}
        ></Title>
        <StyledWrapTabs>
          <Tabs value={currentTab} onChange={handleChange}>
            {renderCategories}
          </Tabs>
        </StyledWrapTabs>
        {renderTabPanel}
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
    "& .MuiButtonBase-root": {
      color: "#777E90",
      fontSize: "14px !important",
      lineHeight: "16px !important",
      fontWeight: "700 !important",
      textTransform: "none",
    },
  };
});

const StyledBoxNothing = styled(Box)(() => {
  return {
    marginTop: "30px",
    position: "relative",
    left: "50%",
    transform: "translate(-50%,0)",
    fontSize: "24px",
    fontWeight: 500,
  };
});
