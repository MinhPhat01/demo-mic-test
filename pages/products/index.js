import React from "react";
import Products from "../../containers/Products/Products";

function ProductsPage(props) {
  return <Products {...props}></Products>;
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://mic.t-solution.vn/api/v2/pages/?fields=*&type=product.ProductCategoryPage&locale=en"
  );
  const data = await res.json();
  return { props: { data } };
}

export default ProductsPage;
