import React from "react";

function index({data}) {
  console.log("🚀 ~ file: index.js:4 ~ index ~ data", data)
  return <div>index</div>;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    "https://mic.t-solution.vn/api/v2/pages/?fields=*&type=product.ProductCategoryPage&locale=en"
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default index;
