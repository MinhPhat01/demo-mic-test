// import axios from "../axios.config";
import axios from "axios";
import { SETTING_API, TYPE_PARAMS, PAGES_API } from "../apis/index";
import { transformUrl } from "./transformUrl";

const prefetchData = async (originalUrlList, options) => {
  const { locale } = options;

  try {
    const params = {
      fields: "*",
      locale,
    };

    const additionalUrlList = [SETTING_API];

    const productCategoryUrl = transformUrl(PAGES_API, {
      ...params,
      type: TYPE_PARAMS["product.ProductCategoryPage"],
    });

    additionalUrlList.push(productCategoryUrl);

    const mergedUrlList = [
      ...new Set([...originalUrlList, ...additionalUrlList]),
    ];

    const originalResList = [];
    const fallbackList = {};

    for await (const res of mergedUrlList.map(async (el) => {
      console.log(el);
      return axios.get(el).then(({ data }) => {
        // console.log("[el, data]", [el, data]);
        return [el, data];
      });
    })) {
      const [key, value] = res;
      // console.log("🚀 ~ file: prefetchData.ts:45 ~ forawait ~ value", value);
      // console.log("🚀 ~ file: prefetchData.ts:45 ~ forawait ~ key", key);
      // console.log("🚀 ~ file: prefetchData.ts:45 ~ forawait ~ res", res);

      if (originalUrlList.includes(key)) {
        originalResList.push(value);
      }

      if (additionalUrlList.includes(key)) {
        fallbackList[key] = value;
      }
    }
    // console.log("🚀 ~ file: prefetchData.ts:38 ~ fallbackList", fallbackList);

    return {
      resList: originalResList,
      fallback: fallbackList,
    };
  } catch (err) {
    throw err;
  }
};

export default prefetchData;
