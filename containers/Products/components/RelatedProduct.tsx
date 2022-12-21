import { Box, Grid } from "@mui/material";
import React, { useMemo } from "react";
import Slider from "react-slick";
import ProductItemV2 from "./ProductItemV2";
import useSWR from "swr";
import Link from "next/link";
import Title from "components/title/Title";
import { PAGES_API, TYPE_PARAMS } from "apis";
import { transformUrl } from "libs/transformUrl";
import { PRODUCT_DETAIL_ITEMS } from "interface/responseSchema/product";

type Props = {
  parentId: number,
  id: string | string[]
}

const RelatedProduct = ({ parentId, id }: Props) => {
  const { data: resData } = useSWR(transformUrl(PAGES_API, {
    fields: "*",
    child_of: parentId,
    type: TYPE_PARAMS["product.ProductDetailPage"]

  }));
  const data = resData?.items
  const filterData = data?.filter((item: PRODUCT_DETAIL_ITEMS) => item.id != Number(id));


  const renderListProduct = useMemo(() => {
    if (!filterData) return;
    return filterData.map((item: PRODUCT_DETAIL_ITEMS) => {

      return (
        <Link href={`/products/${item.id}`} key={item.id}>
          <ProductItemV2
            pieces={item.description}
            imgSrc={item.thumbnail}
            title={item.title}
          />
        </Link>
      );
    });
  }, [filterData]);

  const settings = {
    dots: false,
    infinite: filterData?.length > 4 ? true : false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!data) return null;
  return (
    <Grid item xs={12} sx={{ mt: "88px", mb: "20px" }}>
      <Box sx={{ mb: "24px" }}>
        <Title title={"RELATED PRODUCT"} widthText="240px" heightProps={32} />
      </Box>
      <Slider {...settings}>{renderListProduct}</Slider>
    </Grid>
  );
};

export default RelatedProduct;
