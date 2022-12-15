import { Grid, Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import { useCallback, useEffect, useMemo, useState } from "react";
import ListItem from "./ListItem";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useParams } from "../../../hooks/useParams";
import BtnSeeMore from "../../../components/button/BtnSeeMore";

const fetcher = (url) => fetch(url).then((res) => res.json());

const arr = {
  id: 0,
  title: "All items",
};

function ProductList({ data }) {
  const router = useRouter();
  const [valueActive, setValueActive] = useState(0);
  const [urlApi, setUrlApi] = useState(
    "https://mic.t-solution.vn/api/v2/pages/?fields=*&type=product.ProductDetailPage&limit=8&locale=en"
  );

  const [urlChildOf, setUrlChildOf] = useState("");
  const [id, setId] = useState(0);
  const categoryList = data?.items;
  const [params, setParams] = useParams({
    initState: {
      fields: "*",
      type: "product.ProductDetailPage",
      locale: "en",
      limit: 6,
    },
    excludeKeys: ["limit", "offset", "type"],
  });
 
  const { data: nextData, isLoading } = useSWR(
    `${urlApi}${urlChildOf}`,

    fetcher
  );


  const [dataProduct, setDataProduct] = useState([]);

  const [isFetch, setIsFetch] = useState(true);

  useEffect(() => {
    // handleSeeMore
    // if (isFetch) {
    //   if (!nextData) return;

    //   const next = nextData.next;
    //   const items = nextData.items;

    //   setUrlApi(next);
    //   setDataProduct(dataProduct.concat(items));
    //   setIsFetch(false);
    // }

    // Set Router
    let convert = Number(router.query.child_of);
    if (router.query.hasOwnProperty("child_of")) {
      setUrlChildOf(`&child_of=${convert}`);
      setValueActive(convert);
    }
    if (Number(router.query.child_of) === 0) {
      setUrlChildOf("");
      setValueActive(0);
    }
  }, [router, urlApi, nextData, dataProduct]);

  const handleChange = useCallback(
    (e, newValue) => {
      setValueActive(newValue);
      setParams({
        child_of: newValue,
      });
      if (Number(router.query.child_of) === 0) {
        setUrlChildOf("");
        setValueActive(0);
      }
      setId(newValue);
      console.log(
        "🚀 ~ file: ProductList.jsx:84 ~ ProductList ~ newValue",
        newValue
      );
    },
    [router.query.child_of, setParams]
  );

  const handleSeeMore = () => {
    setIsFetch(true);
  };

  const renderList = useMemo(() => {
    if (!categoryList) return null;
    const newArr = [arr, ...categoryList];
    return newArr.map((item, index) => {
      return <Tab key={index} label={item.title} value={item.id}></Tab>;
    });
  }, [categoryList]);

  if (!data) return null;
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
          value={valueActive}
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
          {renderList}
        </Tabs>
      </Box>
      <ListItem id={id} nextData={nextData} isLoading={isLoading}></ListItem>
      {/* <BtnSeeMore
        style={nextData === undefined ? "none" : "block"}
        onClick={handleSeeMore}
      >
        See More
      </BtnSeeMore> */}
    </Box>
  );
}

export default ProductList;
