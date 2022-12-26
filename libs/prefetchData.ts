import { ParsedUrlQuery } from "querystring";
import { PAGES_API, SETTING_API, TYPE_PARAMS } from "apis";
import { transformUrl } from "./transformUrl";
import axios from "../axios.config";

const prefetchData = async (
  originalUrlList: string[],
  options: {
    locale?: string | undefined;
    params?: ParsedUrlQuery | undefined;
    query?: ParsedUrlQuery;
  }
) => {
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
    const fallbackList: Record<string, any> = {};

    for await (const res of mergedUrlList.map(async (el) => {
      return axios.get(el).then(({ data }) => {
     
        return [el, data];
      });
    })) {
      const [key, value] = res;
  
      if (originalUrlList.includes(key)) {
        originalResList.push(value);
      }

      if (additionalUrlList.includes(key)) {
        fallbackList[key] = value;
      }
    }

    return {
      resList: originalResList,
      fallback: fallbackList,
    };
  } catch (err) {
    throw err;
  }
};

export default prefetchData;
