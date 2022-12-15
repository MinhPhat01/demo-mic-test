import { Box, Grid } from "@mui/material";
import React, { useMemo } from "react";
import Slider from "react-slick";
import Title from "../../../components/title/Title";
import ProductItemV2 from "./ProductItemV2";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const RelatedProduct = ({ parentId, id }) => {
  const { data } = useSWR(
    `https://mic.t-solution.vn/api/v2/pages/?fields=*&type=product.ProductDetailPage&locale=en&child_of=${parentId}`,
    fetcher
  );

  const filterData = data?.items.filter((item) => item.id != id);

  const renderListProduct = useMemo(() => {
    if (!filterData) return null;
    return filterData.map((item) => {
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
