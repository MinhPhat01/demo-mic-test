import React from "react";
import { GetServerSidePropsContext } from "next";

import { PAGES_API } from "apis";
import prefetchData from "libs/prefetchData";
import { transformUrl } from "libs/transformUrl";
import NewDetail, { NewDetailProps } from "containers/News/NewDetail";

export default function index(props: NewDetailProps) {
  return <NewDetail {...props}></NewDetail>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { query } = context;
    const urls = [
      transformUrl(`${PAGES_API}${query.id}`, {
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
