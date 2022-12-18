import axios from "axios";
import React, { useEffect, useState } from "react";
import { PAGES_API } from "../../apis";
import { useParams } from "../../hooks/useParams";
import { transformUrl } from "../../libs/transformUrl";

export default function Demo() {
  const [data, setData] = useState([]);
  const [params, setParams] = useParams({
    initState: {
      fields: "*",
      locale: "en",
      limit: 8,
      type: "product.ProductDetailPage",
    },
    excludeKeys: ["limit", "offset", "type", "search"],
  });
  const urlApi = transformUrl(PAGES_API, params);

  useEffect(() => {
    const result = axios
      .get("https://mic.t-solution.vn/api/v2/pages/?fields=*&type=product.ProductDetailPage&limit=8&locale=en")
      .then((res) => console.log(res));
  }, []);

  return <div>index</div>;
}
