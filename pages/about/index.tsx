import React from "react";
import { PAGES_API, TYPE_PARAMS } from "apis";
import prefetchData from "libs/prefetchData";
import { transformUrl } from "libs/transformUrl";
import About, { PropsAbout } from "containers/About/About";

export default function AboutPage(props: PropsAbout) {
  return <About {...props} />;
}
export async function getServerSideProps() {
  try {
    const urls = [
      transformUrl(PAGES_API, {
        locale: "en",
        type: TYPE_PARAMS["about.AboutPage"],
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
