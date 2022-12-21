import { PAGES_API } from "apis";
import GalleryDetail, { GalleryDetailProps } from "containers/Gallery/GalleryDetail";
import prefetchData from "libs/prefetchData";
import { transformUrl } from "libs/transformUrl";
import { GetServerSidePropsContext } from "next";
import React from "react";

export default function index(props: GalleryDetailProps) {
  return <GalleryDetail {...props}></GalleryDetail>;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { query } = context
    const urls = [transformUrl(`${PAGES_API}${query.id}`, {
      fields: "*"
    })]

    const { resList, fallback } = await prefetchData(urls, {})

    return {
      props: {
        initData: resList,
        fallback
      }
    }

  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false
      }
    }
  }
}
