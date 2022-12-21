import React from "react";
import useSWR from "swr";
export default function Index() {
  const { data } = useSWR(
    "https://mic.t-solution.vn/api/v2/pages/?fields=*&type=product.ProductDetailPage&limit=8&locale=en"
  );
  console.log("🚀 ~ file: index.js:5 ~ Index ~ data", data);
  return <div>index</div>;
}
