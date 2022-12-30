import React from "react";
import { PAGES_API, TYPE_PARAMS } from "apis";
import prefetchData from "libs/prefetchData";
import { transformUrl } from "libs/transformUrl";
import News, { NewsProps } from "containers/News/News";

export default function NewsPage(props: NewsProps) {
  return <News {...props} />;
}

export async function getServerSideProps() {
  try {
    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["news.NewDetailPage"],
        limit: 3,
        fields: "*",
      }),
    ];
    const { resList, fallback } = await prefetchData(urls, {});
    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
