import React from "react";
import { SETTING_API } from "apis";
import prefetchData from "libs/prefetchData";
import { transformUrl } from "libs/transformUrl";
import Contact, { PropsContact } from "containers/Contact/Contact";

export default function ContactPage(props: PropsContact) {
  return <Contact {...props}></Contact>;
}

export async function getServerSideProps() {
  try {
    const urls = [transformUrl(SETTING_API, {})];

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
