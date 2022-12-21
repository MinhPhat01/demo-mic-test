import { PAGES_API, TYPE_PARAMS } from "apis";
import Gallery, { GalleryProps } from "containers/Gallery/Gallery";
import prefetchData from "libs/prefetchData";
import { transformUrl } from "libs/transformUrl";
import React from "react";

export default function GalleryPage(props: GalleryProps) {
  return <Gallery {...props}></Gallery>;
}

export async function getServerSideProps() {
  try {
    const urls = [transformUrl(PAGES_API, {
      fields: "*",
      type: TYPE_PARAMS['gallery.GalleryDetailPage'],
      limit: 6
      
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